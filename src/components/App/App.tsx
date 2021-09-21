import Title from '../Title/Title';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';

import { MainContainer, Overlay } from './App.styles';

function App() {
    return (
        <MainContainer data-testid="main-container">
            <Title />
            <Grid />
            <Button />
            <Overlay />
        </MainContainer>
    );
}

export default App;