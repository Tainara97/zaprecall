import Topo from "./components/Topo";
import Deck from "./components/Deck";
import Rodape from "./components/Rodape";
import styled from "styled-components";
import cards from "./mock";
import { useState } from "react";

export default function App() {
  const [flashcards, setFlashcards] = useState(cards);

  const flashcardsRespondidos = flashcards.filter(card => card.respondida).length;

  return (
    <EstiloApp>
      <Topo/>
      <Deck flashcards={flashcards} setFlashcards={setFlashcards}/>
      <Rodape  flashcards={flashcards} flashcardsRespondidos={flashcardsRespondidos}/>
    </EstiloApp>
  )
    
}

const EstiloApp = styled.div `
  * {
    box-sizing: border-box;
  }
  background-color: #FB6B6B;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`