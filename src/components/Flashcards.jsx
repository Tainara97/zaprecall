import { useState } from "react";
import Pergunta from "./Pergunta";
import Resposta from "./Resposta";


export default function Flashcards({ pergunta, resposta, numeroPergunta, flashcards, setFlashcards }) {
    const [mostrarResposta, setMostrarResposta] = useState(false);
   
    return (
        <>
            {!mostrarResposta ? (
                <Pergunta
                    pergunta={pergunta}
                    numeroPergunta={numeroPergunta}
                    setMostrarResposta={setMostrarResposta}
                />
            ) : (
                <Resposta
                    resposta={resposta}
                    numeroPergunta={numeroPergunta}       
                    flashcards={flashcards}       
                    setFlashcards={setFlashcards}
                />
            )}
        </>
    )
}
