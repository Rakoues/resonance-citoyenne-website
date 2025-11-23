import React from "react";
import QuadraticVoting from "@/components/QuadraticVoting";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expérimentation : Vote Quadratique | Résonance Citoyenne",
    description: "Testez le vote quadratique, une méthode pour exprimer l'intensité de vos préférences.",
};

const SAMPLE_TOPICS = [
    {
        id: "t1",
        title: "Espaces Verts & Nature",
        description: "Augmenter la surface des parcs, planter des arbres en ville et créer des jardins partagés.",
        category: "Environnement",
    },
    {
        id: "t2",
        title: "Transports en Commun",
        description: "Améliorer la fréquence des bus, étendre le réseau de tramway et baisser les tarifs.",
        category: "Mobilité",
    },
    {
        id: "t3",
        title: "Culture & Arts de Rue",
        description: "Soutenir les festivals locaux, les artistes de rue et l'accès gratuit aux musées.",
        category: "Culture",
    },
    {
        id: "t4",
        title: "Sécurité & Prévention",
        description: "Renforcer la présence humaine dans les quartiers et les programmes de médiation.",
        category: "Société",
    },
    {
        id: "t5",
        title: "Éducation & Jeunesse",
        description: "Rénover les écoles, proposer du soutien scolaire gratuit et des activités périscolaires.",
        category: "Éducation",
    },
    {
        id: "t6",
        title: "Propreté Urbaine",
        description: "Augmenter les fréquences de ramassage et installer plus de poubelles de tri.",
        category: "Cadre de vie",
    },
];

export default function QuadraticVotingPage() {
    return (
        <main className="min-h-screen bg-[#F8F4F0] py-12 px-4">
            <div className="max-w-4xl mx-auto mb-12 text-center">
                <span className="inline-block px-3 py-1 text-sm font-bold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full mb-4">
                    Expérimentation #01
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
                    Le Vote Quadratique
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Dans une démocratie classique, 1 personne = 1 voix. Mais est-ce que tous les sujets vous tiennent à cœur avec la même intensité ?
                    <br /><br />
                    Ici, vous avez un budget de <strong>100 crédits</strong>. Répartissez-les pour montrer ce qui compte vraiment pour vous. Attention, le coût augmente vite !
                </p>
            </div>

            <QuadraticVoting topics={SAMPLE_TOPICS} initialBudget={100} />

            <div className="max-w-4xl mx-auto mt-16 text-center">
                <p className="text-sm text-gray-500 italic">
                    Ceci est un prototype expérimental. Aucune donnée n'est enregistrée pour le moment.
                </p>
            </div>
        </main>
    );
}
