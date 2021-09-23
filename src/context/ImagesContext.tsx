export {};
// Tried to create a context for the img that provides a fetchImg function to update te state
//
// import React, {
//     createContext,
//     useCallback,
//     useState,
//     ReactNode,
// } from "react";
//
// import axios from "axios";
//
// interface imgContextData {
//     image: string,
//     fetchImg: () => void
// }
//
// export const imgContextDefaultValue: imgContextData = {
//     image: '',
//     fetchImg: () => null
// }
//
// export const ImagesContext = createContext<imgContextData>(imgContextDefaultValue);
//
// export const baseUrl = 'https://cataas.com/cat'
//
// const ImagesProvider = ({children}: { children: ReactNode }) => {
//     const [image, setImage] = useState<string>('');
//
//     const fetchImg = useCallback(
//         () => {
//             const jsonUrl = baseUrl + '?json=true&width=300';
//             axios.get(jsonUrl).then((response) => {
//                 setImage(response.data.id);
//             }).catch((error) => {
//                 throw new Error("Something went wrong fetching the data:" + error)
//             });
//         },[setImage]);
//
//     return (
//         <ImagesContext.Provider
//             value={{image: image, fetchImg: fetchImg}}
//         >
//             {children}
//         </ImagesContext.Provider>
//     );
// }
//
// export default ImagesProvider;