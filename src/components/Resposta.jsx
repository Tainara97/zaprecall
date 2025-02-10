import { useState } from "react";
import styled from "styled-components";
import iconeErro from "../assets/icone_erro.png";
import iconeQuase from "../assets/icone_quase.png";
import iconeAcerto from "../assets/icone_certo.png";


export default function Resposta({ resposta, numeroPergunta, flashcards, setFlashcards }) {
    const opçoes = [
            { texto: "Não lembrei", cor: "#FF3030", status: "incorreto" },
            { texto: "Quase não lembrei", cor: "#FF922E", status: "quaseIncorreto" },
            { texto: "Zap!", cor: "#2FBE34", status: "correto" }
        ];
    
        const [respondida, setRespondida] = useState(false);
        const [status, setStatus] = useState(null);
    
        const perguntaFinalizada = (status) => {
            const flashcardsAtualizados = [...flashcards];
            flashcardsAtualizados[numeroPergunta - 1].respondida = true;
            flashcardsAtualizados[numeroPergunta - 1].status = status;
            setFlashcards(flashcardsAtualizados);
            setStatus(status);
            setRespondida(true);
        }
    
    return (
        <EstiloResposta perguntaRespondida={respondida} status={status}>
            {!respondida ? (
                <div>
                    <h1>{resposta}</h1>
                    <div className="opçoes">
                        {opçoes.map((opcao, index) => (
                            <OpçoesResposta
                                key={index}
                                cor={opcao.cor}
                                onClick={() => perguntaFinalizada(opcao.status)}
                            >
                                {opcao.texto}
                            </OpçoesResposta>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="concluida">
                    <h1>
                        Pergunta {numeroPergunta}
                    </h1>
                    <img src={status === "incorreto" ? iconeErro : status === "quaseIncorreto" ? iconeQuase : iconeAcerto} />
                </div>
            )}
        </EstiloResposta>
    )
}

const EstiloResposta = styled.div`
    width: 300px;
    height: 100%;
    background-color: ${props => (props.perguntaRespondida ? "#FFFFFF" : "#FFFFD4")};
    display: flex;

    padding: 10px;
    border-radius: 5px;
    h1 {
        font-family: "Recursive", serif;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: flex-start;
    }
   
    .opçoes {
       display: flex;
       justify-content: space-around;
       margin-top: 10px;
    }
    .concluida {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .concluida img {
        width: 20px;
        height: 20px;
    }
    .concluida h1 {
        text-decoration: line-through;
        color: ${props => props.status === "incorreto" ? "#FF3030" : props.status === "quaseIncorreto" ? "#FF922E" : "#2FBE34"}; 
    }
`
const OpçoesResposta = styled.div`
    width: 85px;
    height: 35px;
    background-color: ${props => props.cor};
    padding: 5px;
    border-radius: 5px;
    font-family: "Recursive", serif;
    font-size: 12px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
`