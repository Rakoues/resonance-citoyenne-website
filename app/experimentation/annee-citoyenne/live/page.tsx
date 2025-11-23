"use client";

import React from "react";
import LiveResults from "@/components/LiveResults";
import Header from "@/components/Header";

export default function LiveResultsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main>
                <LiveResults />
            </main>
        </div>
    );
}
