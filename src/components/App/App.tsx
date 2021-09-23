import Title from '../Title/Title';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';

import { MainContainer, Overlay } from './App.styles';
// import ImagesProvider from "../../context/ImagesContext";

function App() {
    return (
        <MainContainer data-testid="main-container">
            <Title />

            {/*<ImagesProvider>*/}
                <Grid />
            {/*</ImagesProvider>*/}

            <Button />

            <Overlay />
        </MainContainer>
    );
}

export default App;