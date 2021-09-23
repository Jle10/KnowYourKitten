import {useEffect} from "react";
import useFactsContext from "./FactsContext";

function useFactsLoading() {
    const {FetchData} = useFactsContext();

    useEffect(() => {
        FetchData();
    }, [FetchData]);
}

export default useFactsLoading;