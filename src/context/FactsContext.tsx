import React, { createContext } from "react";

export interface Fact {
    fact: string;
    length: number;
}

export interface FactsContextData {
    facts: Fact[];
    done: boolean;
}

export const FactsContext = createContext<FactsContextData | undefined>(undefined);