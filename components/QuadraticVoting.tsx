"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Info } from "lucide-react";

interface Topic {
  id: string;
  title: string;
  description: string;
  category: string;
}

interface QuadraticVotingProps {
  topics: Topic[];
  initialBudget?: number;
}

export default function QuadraticVoting({
  topics,
  initialBudget = 100,
}: QuadraticVotingProps) {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [hoveredCost, setHoveredCost] = useState<{
    id: string;
    cost: number;
  } | null>(null);

  // Calculate total cost: sum of (votes^2) for each topic
  const currentCost = Object.values(votes).reduce(
    (acc, v) => acc + v * v,
    0
  );
  const remainingBudget = initialBudget - currentCost;

  const getVoteCount = (id: string) => votes[id] || 0;

  const handleVote = (id: string, increment: number) => {
    const currentVotes = getVoteCount(id);
    const newVotes = currentVotes + increment;

    if (newVotes < 0) return; // Cannot have negative votes

    // Calculate cost difference
    const costDiff = newVotes * newVotes - currentVotes * currentVotes;

    if (remainingBudget - costDiff < 0) return; // Not enough budget

    setVotes((prev) => ({
      ...prev,
      [id]: newVotes,
    }));
  };

  // Calculate the cost of the NEXT vote (positive or negative)
  const getNextVoteCost = (id: string, increment: number) => {
    const currentVotes = getVoteCount(id);
    const newVotes = currentVotes + increment;
    if (newVotes < 0) return 0;
    return newVotes * newVotes - currentVotes * currentVotes;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8">
      {/* Header & Budget Meter */}
      <div className="sticky top-4 z-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-orange-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-serif font-bold text-charcoal">
              Budget de Voix
            </h2>
            <p className="text-sm text-gray-600">
              Dépense tes crédits sagement. Plus tu votes pour un sujet, plus ça coûte cher !
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-orange-600">
              {remainingBudget} <span className="text-sm text-gray-500">/ {initialBudget}</span>
            </div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              Crédits restants
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 to-orange-600"
            initial={{ width: "0%" }}
            animate={{ width: `${(remainingBudget / initialBudget) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic) => {
          const count = getVoteCount(topic.id);
          const nextCostPlus = getNextVoteCost(topic.id, 1);
          const canAffordPlus = remainingBudget >= nextCostPlus;

          return (
            <motion.div
              key={topic.id}
              layout
              className={`relative p-6 rounded-2xl border-2 transition-colors ${
                count > 0
                  ? "border-orange-200 bg-orange-50/30"
                  : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-2 py-1 text-xs font-medium text-orange-700 bg-orange-100 rounded-full mb-2">
                    {topic.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-charcoal">
                    {topic.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100">
                  <span className="text-lg font-bold text-orange-600">
                    {count}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {topic.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">
                  Coût actuel: <span className="font-bold">{count * count}</span> crédits
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleVote(topic.id, -1)}
                    disabled={count === 0}
                    className={`p-2 rounded-full transition-colors ${
                      count === 0
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-orange-600 hover:bg-orange-100"
                    }`}
                    aria-label="Retirer un vote"
                  >
                    <Minus size={20} />
                  </button>

                  <button
                    onClick={() => handleVote(topic.id, 1)}
                    disabled={!canAffordPlus}
                    onMouseEnter={() =>
                      setHoveredCost({ id: topic.id, cost: nextCostPlus })
                    }
                    onMouseLeave={() => setHoveredCost(null)}
                    className={`relative p-2 rounded-full transition-colors ${
                      !canAffordPlus
                        ? "text-gray-300 cursor-not-allowed"
                        : "bg-orange-600 text-white hover:bg-orange-700 shadow-md hover:shadow-lg"
                    }`}
                    aria-label="Ajouter un vote"
                  >
                    <Plus size={20} />
                    
                    {/* Cost Preview Tooltip */}
                    <AnimatePresence>
                      {hoveredCost?.id === topic.id && canAffordPlus && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: -30 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-1/2 -translate-x-1/2 -top-2 bg-charcoal text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                        >
                          -{hoveredCost.cost} crédits
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Explanation Footer */}
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start">
        <Info className="text-blue-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-blue-900 mb-1">Comment ça marche ?</h4>
          <p className="text-sm text-blue-800">
            Le vote quadratique vous permet d'exprimer l'intensité de vos préférences.
            Le coût des votes augmente de façon exponentielle : 1 vote = 1 crédit, 2 votes = 4 crédits, 3 votes = 9 crédits...
            Cela vous oblige à faire des choix stratégiques sur ce qui compte vraiment pour vous !
          </p>
        </div>
      </div>
    </div>
  );
}
