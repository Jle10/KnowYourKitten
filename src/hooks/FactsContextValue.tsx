import {useState, useCallback, useMemo} from "react";
import axios from "axios";
import {Fact, FactsContextData} from "../context/FactsContext";

// const url = 'https://catfact.ninja/facts?limit=6&max_length=400';

function useFactsContextValue(): FactsContextData {
    const [facts, setFacts] = useState<Fact[]>([]);
    const [done, setDone] = useState(false);

    function shuffleArray(array: Fact[]): Fact[] {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const FetchData = useCallback(() => {
        axios.get('/cats.json').then((response) => {
            setFacts(shuffleArray(response.data.data.slice(0, 6)));
        }).catch((error) => {
            throw new Error("Something went wrong fetching the data:" + error);
        });
        setDone(true);
    }, [setFacts]);


    return useMemo(() => ({
        facts,
        done,
        FetchData,
    }), [facts, done, FetchData]);
}

export default useFactsContextValue;


//Tried Generic Hook to retrieve any kind of data with payloads

// import {useState, useEffect, useMemo} from "react";
// import axios from "axios";
//
// function useFactsContextValue<Payload>(url: string): {
//     data: Payload | null;
//     done: boolean;
// } {
//     const [data, setData] = useState<Payload | null>(null);
//     const [done, setDone] = useState(false);
//
//     useEffect(() => {
//         axios.get(url).then((response) => {
//             setData(response.data);
//         }).catch((error) => {
//             throw new Error("Something went wrong fetching the data:" + error)
//         });
//
//         setDone(true);
//     }, [setData]);
//
//     return useMemo(() => ({
//         data,
//         done
//     }), [data, done]);
// }
//
// export default useFactsContextValue;