import {FactsContext} from "../context/FactsContext";
import {useContext} from "react";

function useFactsContext() {
    const factsContext = useContext(FactsContext);
    if (!factsContext) {
        throw new Error('useFactsContext must be used within the FactsContext.Provider');
    }
    return factsContext;
}

export default useFactsContext;