import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';


import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Entradas"/>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlightBackground">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container> 
    )
}