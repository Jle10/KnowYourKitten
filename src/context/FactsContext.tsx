import {createContext} from "react";

export interface Fact {
    fact: string;
    length: number;
}

export interface FactsContextData {
    facts: Fact[];
    done: boolean;
    FetchData: () => void;
}

export const FactsContext = createContext<FactsContextData | undefined>(undefined);