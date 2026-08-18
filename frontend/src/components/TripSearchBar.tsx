import React, { useState } from "react";

interface TripSearchBarProps {
    onPromptSubmit: (prompt: string) => void;
}

function TripSearchBar({ onPromptSubmit }: TripSearchBarProps) {
    const [prompt, setPrompt] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const cleanedPrompt = prompt.trim();
        if (!cleanedPrompt) return;

        onPromptSubmit(cleanedPrompt);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex gap-3">
            <input
                type="text"
                placeholder="e.g. I want to travel from Boston to Paris for 5 days"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full border-2 outline-none"
                style={{ borderColor: "var(--color-accent)", color: "var(--color-ink)" }}
            />

            <button
                type="submit"
                className="px-6 py-3 rounded-full font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
            >
                Plan Trip
            </button>
        </form>
    );
}

export default TripSearchBar;