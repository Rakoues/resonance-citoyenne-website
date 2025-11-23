"use client";

import React, { useState } from "react";
import LegislativeSession from "@/components/LegislativeSession";
import ImpactReport from "@/components/ImpactReport";

import { REALISTIC_FRENCH_BILLS } from "@/data/bills";

export default function AnneeCitoyennePage() {
    const [isComplete, setIsComplete] = useState(false);
    const [finalReport, setFinalReport] = useState<{ votes: Record<string, number>; finalBudget: number } | null>(null);

    const handleComplete = (report: { votes: Record<string, number>; finalBudget: number }) => {
        setFinalReport(report);
        setIsComplete(true);
    };

    return (
        <main className="min-h-screen bg-[#F8F4F0] py-8 px-4">
            <div className="max-w-5xl mx-auto mb-8">
                <span className="inline-block px-3 py-1 text-sm font-bold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full mb-4">
                    Expérimentation Démocratique
                </span>
                <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">
                    L'Hebdo Parlementaire
                </h1>
                <p className="text-gray-600">
                    52 semaines. 52 lois. 1000 crédits. Prenez le temps de décider.
                </p>
            </div>

            {!isComplete ? (
                <LegislativeSession
                    initialBills={REALISTIC_FRENCH_BILLS}
                    onComplete={handleComplete}
                />
            ) : finalReport ? (
                <ImpactReport
                    votes={finalReport.votes}
                    finalSavings={finalReport.finalBudget}
                    bills={REALISTIC_FRENCH_BILLS}
                />
            ) : null}
        </main>
    );
}
