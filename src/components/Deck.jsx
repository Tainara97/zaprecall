import Flashcards from "./Flashcards";
import styled from "styled-components";

export default function Deck({ flashcards, setFlashcards }) {
    return (
        <EstiloDeck>
            {flashcards.map((card, index) => (
                    <Flashcards
                        pergunta={card.question}
                        resposta={card.answer}
                        numeroPergunta={index + 1}
                        flashcards={flashcards}
                        setFlashcards={setFlashcards}
                        key={index}
                    />
            ))}
        </EstiloDeck>
    );
}

const EstiloDeck = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    gap: 20px;
`