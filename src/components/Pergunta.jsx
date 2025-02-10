import { useState} from "react";
import styled from "styled-components";
import setaVirar from "../assets/seta_virar.png";

export default function Pergunta({pergunta, numeroPergunta, setMostrarResposta}) {
    const [mostrarPergunta, setMostrarPergunta] = useState(false);


    return (
        <EstiloPergunta escondida={!mostrarPergunta}>
            {!mostrarPergunta ? (
            <div className="pergunta">
                <h1>Pergunta {numeroPergunta}</h1>
                <ion-icon name="play-outline" onClick={() => setMostrarPergunta(true)}></ion-icon>
            </div>
            ) : (
            <div> 
                <h1>{pergunta}</h1>
                <img src={setaVirar} onClick={() => setMostrarResposta(true)} />
            </div>
            )}
        </EstiloPergunta>
    )
}

const EstiloPergunta = styled.div `
    width: 300px;
    height: 100%;
    background-color: ${props => props.escondida ? "#FFFFFF" : "#FFFFD4"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    ion-icon {
        font-size: 30px;
        margin-right: 10px;
    }
    .pergunta {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        font-family: "Recursive", serif;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: flex-start;
     }
    img {
        width: 30px;
        height: 20px;
        margin-left: 250px;
        margin-top: 20px;
    }
`