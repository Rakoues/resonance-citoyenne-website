"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Wallet, Calendar, AlertTriangle, ThumbsUp, ThumbsDown, ExternalLink, BookOpen, Info } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

type VotePosition = 'for' | 'against' | 'abstain';

interface Vote {
    position: VotePosition;
    intensity: number; // 0-10
}

// Initialize Supabase client (if env vars are present)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase =
    supabaseUrl && supabaseAnonKey
        ? createClient<Database>(supabaseUrl, supabaseAnonKey)
        : null;

interface Bill {
    id: string;
    title: string;
    description: string;
    week: number;
    category: string;
    pplNumber?: string;
    keyPoints?: string[];
    sourceUrl?: string;
}

interface LegislativeSessionProps {
    initialBills: Bill[];
    onComplete: (report: any) => void;
}

const INITIAL_BUDGET = 1000;
const TOTAL_WEEKS = 52;

export default function LegislativeSession({
    initialBills,
    onComplete,
}: LegislativeSessionProps) {
    const [currentWeek, setCurrentWeek] = useState(1); // Start at week 1
    const [votes, setVotes] = useState<Record<string, Vote>>({});
    const [userId, setUserId] = useState<string | null>(null);

    // Initialize user session
    useEffect(() => {
        const initSession = async () => {
            if (supabase) {
                const { data, error } = await supabase
                    .from("sim_users")
                    .insert({})
                    .select()
                    .single();
                if (data) setUserId(data.id);
            } else {
                setUserId("mock-user-" + Math.random().toString(36).substr(2, 9));
            }
        };
        initSession();
    }, []);

    // Get current bill (1 per week)
    const currentBill = initialBills.find((bill) => bill.week === currentWeek);

    // Calculate total spent
    const totalSpent = Object.values(votes).reduce((acc, vote) => {
        if (vote.position === 'abstain') return acc;
        return acc + vote.intensity * vote.intensity;
    }, 0);

    const remainingBudget = INITIAL_BUDGET - totalSpent;

    const handlePositionChange = (billId: string, position: VotePosition) => {
        setVotes((prev) => {
            const currentVote = prev[billId] || { position: 'abstain', intensity: 0 };

            if (position === 'abstain') {
                return {
                    ...prev,
                    [billId]: { position: 'abstain', intensity: 0 },
                };
            }

            return {
                ...prev,
                [billId]: {
                    position,
                    intensity: currentVote.position === position ? currentVote.intensity : 1,
                },
            };
        });
    };

    const handleIntensityChange = (billId: string, newIntensity: number) => {
        const vote = votes[billId];
        if (!vote || vote.position === 'abstain') return;

        const oldCost = vote.intensity * vote.intensity;
        const newCost = newIntensity * newIntensity;
        const costDiff = newCost - oldCost;

        if (remainingBudget - costDiff < 0) return; // Not enough budget

        setVotes((prev) => ({
            ...prev,
            [billId]: { ...vote, intensity: newIntensity },
        }));
    };

    const handleNextWeek = async () => {
        if (!currentBill) return;

        // Save vote to DB
        if (userId && supabase) {
            const vote = votes[currentBill.id];
            if (vote && vote.position !== 'abstain') {
                try {
                    await supabase.from("sim_votes").insert({
                        user_id: userId,
                        bill_id: currentBill.id,
                        credits: vote.intensity * vote.intensity,
                        vote_count: vote.intensity,
                        direction: vote.position === 'for' ? "for" : "against",
                    });
                } catch (error) {
                    console.error("Error saving vote:", error);
                }
            }
        }

        // Advance week or finish
        if (currentWeek < TOTAL_WEEKS) {
            setCurrentWeek((prev) => prev + 1);
        } else {
            onComplete({ votes, finalBudget: remainingBudget });
        }
    };

    if (!currentBill) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-xl font-bold">Session terminée ou semaine vide</h2>
                <button onClick={() => onComplete({ votes, finalBudget: remainingBudget })} className="mt-4 px-4 py-2 bg-orange-600 text-white rounded">
                    Voir les résultats
                </button>
            </div>
        );
    }

    const vote = votes[currentBill.id] || { position: 'abstain' as VotePosition, intensity: 0 };
    const cost = vote.position === 'abstain' ? 0 : vote.intensity * vote.intensity;

    return (
        <div className="w-full max-w-6xl mx-auto p-4 space-y-8">
            {/* Header & Progress */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                        <Calendar size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-charcoal">
                            Semaine {currentWeek} <span className="text-gray-400 font-normal">/ {TOTAL_WEEKS}</span>
                        </h2>
                        <div className="w-48 h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                            <div
                                className="h-full bg-orange-500 transition-all duration-500"
                                style={{ width: `${(currentWeek / TOTAL_WEEKS) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-xl border border-gray-100">
                    <Wallet className="text-gray-400" size={20} />
                    <div className="text-right">
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Budget Restant</div>
                        <div className={`text-2xl font-bold ${remainingBudget < 100 ? 'text-red-600' : 'text-green-600'}`}>
                            {remainingBudget} <span className="text-sm text-gray-400">/ {INITIAL_BUDGET}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Bill Card (Center) */}
                <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentWeek}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                        >
                            <div className="p-8">
                                {/* Bill Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                                {currentBill.category}
                                            </span>
                                            {currentBill.pplNumber && (
                                                <span className="text-xs font-mono text-gray-400">
                                                    {currentBill.pplNumber}
                                                </span>
                                            )}
                                        </div>
                                        <h1 className="text-3xl font-serif font-bold text-charcoal mb-4 leading-tight">
                                            {currentBill.title}
                                        </h1>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {currentBill.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Key Points Section */}
                                {currentBill.keyPoints && (
                                    <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                        <h3 className="flex items-center gap-2 text-blue-800 font-bold mb-4">
                                            <Info size={18} />
                                            Ce que dit la loi :
                                        </h3>
                                        <ul className="space-y-3">
                                            {currentBill.keyPoints.map((point, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-blue-900/80">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* External Link */}
                                {currentBill.sourceUrl && (
                                    <div className="mb-8 flex justify-end">
                                        <a
                                            href={currentBill.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600 transition-colors"
                                        >
                                            <BookOpen size={16} />
                                            Lire le texte officiel
                                            <ExternalLink size={12} />
                                        </a>
                                    </div>
                                )}

                                <hr className="border-gray-100 mb-8" />

                                {/* Voting Section */}
                                <div className="space-y-6">
                                    <h3 className="text-lg font-bold text-charcoal">Votre Vote</h3>

                                    <div className="grid grid-cols-3 gap-4">
                                        <button
                                            onClick={() => handlePositionChange(currentBill.id, 'for')}
                                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${vote.position === 'for'
                                                ? "border-green-500 bg-green-50 text-green-700 shadow-md"
                                                : "border-gray-200 hover:border-green-200 hover:bg-green-50/50 text-gray-600"
                                                }`}
                                        >
                                            <ThumbsUp size={24} />
                                            <span className="font-bold">POUR</span>
                                        </button>

                                        <button
                                            onClick={() => handlePositionChange(currentBill.id, 'against')}
                                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${vote.position === 'against'
                                                ? "border-red-500 bg-red-50 text-red-700 shadow-md"
                                                : "border-gray-200 hover:border-red-200 hover:bg-red-50/50 text-gray-600"
                                                }`}
                                        >
                                            <ThumbsDown size={24} />
                                            <span className="font-bold">CONTRE</span>
                                        </button>

                                        <button
                                            onClick={() => handlePositionChange(currentBill.id, 'abstain')}
                                            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${vote.position === 'abstain'
                                                ? "border-gray-400 bg-gray-100 text-gray-800 shadow-inner"
                                                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-500"
                                                }`}
                                        >
                                            <span className="text-2xl font-bold">?</span>
                                            <span className="font-bold">ABSTENTION</span>
                                        </button>
                                    </div>

                                    {/* Intensity Slider */}
                                    <AnimatePresence>
                                        {vote.position !== 'abstain' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                                            >
                                                <div className="flex justify-between items-end mb-4">
                                                    <span className="text-sm font-medium text-gray-600">Intensité de votre conviction</span>
                                                    <div className="text-right">
                                                        <span className="text-2xl font-bold text-orange-600">{vote.intensity}</span>
                                                        <span className="text-xs text-gray-400 ml-1">voix</span>
                                                        <div className="text-xs text-gray-500 font-mono">Coût : {cost} crédits</div>
                                                    </div>
                                                </div>

                                                <input
                                                    type="range"
                                                    min="1"
                                                    max="10"
                                                    value={vote.intensity}
                                                    onChange={(e) => handleIntensityChange(currentBill.id, parseInt(e.target.value))}
                                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                                                />
                                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                                    <span>Faible (1)</span>
                                                    <span>Forte (10)</span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    {remainingBudget < 50 && (
                                        <span className="flex items-center gap-1 text-orange-600 font-medium">
                                            <AlertTriangle size={14} /> Attention au budget !
                                        </span>
                                    )}
                                </div>
                                <button
                                    onClick={handleNextWeek}
                                    className="px-8 py-3 bg-charcoal hover:bg-black text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                                >
                                    {currentWeek < TOTAL_WEEKS ? "Loi Suivante" : "Terminer l'année"}
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Sidebar Info (Right) */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg">
                        <h3 className="font-bold text-lg mb-2">Pourquoi ce système ?</h3>
                        <p className="text-blue-100 text-sm leading-relaxed mb-4">
                            Dans un vote classique, vous ne pouvez pas exprimer l'intensité de vos préférences. Ici, vous pouvez "économiser" vos voix sur les sujets mineurs pour voter massivement sur ce qui compte vraiment pour vous.
                        </p>
                        <div className="text-xs bg-blue-800/50 p-3 rounded-lg border border-blue-700">
                            💡 <strong>Astuce :</strong> Ne dépensez pas tout dès le début ! L'année est longue (52 semaines).
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                        <h3 className="font-bold text-gray-800 mb-4">Historique de vos votes</h3>
                        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                            {Object.entries(votes).reverse().map(([billId, v]) => {
                                const bill = initialBills.find(b => b.id === billId);
                                if (!bill || v.position === 'abstain') return null;
                                return (
                                    <div key={billId} className="text-sm border-b border-gray-100 pb-2 last:border-0">
                                        <div className="font-medium text-gray-700 truncate">{bill.title}</div>
                                        <div className="flex justify-between text-xs mt-1">
                                            <span className={v.position === 'for' ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                                                {v.position === 'for' ? 'POUR' : 'CONTRE'}
                                            </span>
                                            <span className="text-gray-400">{v.intensity} voix ({v.intensity * v.intensity} crédits)</span>
                                        </div>
                                    </div>
                                );
                            })}
                            {Object.keys(votes).length === 0 && (
                                <p className="text-sm text-gray-400 italic">Aucun vote pour l'instant.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
