"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Target, PieChart } from "lucide-react";

interface ImpactReportProps {
    votes: Record<string, number>;
    finalSavings: number;
    bills: any[];
}

export default function ImpactReport({
    votes,
    finalSavings,
    bills,
}: ImpactReportProps) {
    // Calculate stats
    const totalSpent = Object.values(votes).reduce((acc, v) => acc + v * v, 0);
    const totalVotes = Object.values(votes).reduce((acc, v) => acc + Math.abs(v), 0);

    // Top 3 issues
    const topIssues = Object.entries(votes)
        .map(([id, count]) => {
            const bill = bills.find((b) => b.id === id);
            return {
                ...bill,
                count,
                cost: count * count,
            };
        })
        .sort((a, b) => b.cost - a.cost)
        .slice(0, 3);

    // Diversity Score (Simple inverse of concentration)
    // If you spent 100% on one thing, score is 0. If spread evenly, score is high.
    const maxPossibleCost = totalSpent;
    const concentration = topIssues.reduce((acc, issue) => acc + issue.cost, 0) / (maxPossibleCost || 1);
    const diversityScore = Math.round((1 - concentration) * 100);

    return (
        <div className="max-w-4xl mx-auto p-8 space-y-12">
            <div className="text-center space-y-4">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <Trophy size={40} />
                </motion.div>
                <h1 className="text-4xl font-serif font-bold text-charcoal">
                    Année Citoyenne Terminée !
                </h1>
                <p className="text-xl text-gray-600">
                    Voici le bilan de votre mandat de député citoyen.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                        Crédits Investis
                    </div>
                    <div className="text-3xl font-bold text-charcoal">{totalSpent}</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                        Épargne Finale
                    </div>
                    <div className="text-3xl font-bold text-green-600">{finalSavings}</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                        Score de Diversité
                    </div>
                    <div className="text-3xl font-bold text-blue-600">{diversityScore}/100</div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-charcoal flex items-center gap-3">
                    <Target className="text-orange-500" />
                    Vos Priorités Absolues
                </h2>
                <div className="grid gap-4">
                    {topIssues.map((issue, idx) => (
                        <motion.div
                            key={issue.id}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-xl border-l-4 border-orange-500 shadow-sm flex justify-between items-center"
                        >
                            <div>
                                <div className="text-xs font-bold text-orange-600 mb-1">
                                    #{idx + 1}
                                </div>
                                <h3 className="text-lg font-bold text-charcoal">{issue.title}</h3>
                                <p className="text-sm text-gray-500">{issue.category}</p>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-bold text-charcoal">
                                    {issue.cost} <span className="text-sm font-normal text-gray-400">crédits</span>
                                </div>
                                <div className="text-sm text-gray-500">
                                    {Math.abs(issue.count)} votes {issue.count > 0 ? "POUR" : "CONTRE"}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl text-center space-y-4">
                <PieChart className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="text-xl font-bold text-blue-900">
                    Analyse de votre profil
                </h3>
                <p className="text-blue-800 max-w-2xl mx-auto">
                    {diversityScore > 70
                        ? "Vous êtes un généraliste ! Vous avez réparti vos votes sur de nombreux sujets, cherchant un équilibre global."
                        : diversityScore > 30
                            ? "Vous êtes un stratège équilibré. Vous avez quelques combats prioritaires mais gardez un œil sur l'ensemble."
                            : "Vous êtes un militant passionné ! Vous avez tout misé sur une ou deux causes qui vous sont chères."}
                </p>
            </div>
        </div>
    );
}
