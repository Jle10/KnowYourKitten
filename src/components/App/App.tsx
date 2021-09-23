import Title from '../Title/Title';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';

import {MainContainer, Overlay} from './App.styles';
import {FactsContext} from "../../context/FactsContext";
import useFactsContextValue from "../../hooks/FactsContextValue";

function App() {

    const factsContextValue = useFactsContextValue();

    return (
        <MainContainer data-testid="main-container">
            <Title/>

            <FactsContext.Provider value={factsContextValue}>
                <Grid/>
                <Button/>
            </FactsContext.Provider>

            <Overlay/>
        </MainContainer>
    );
}

export default App;