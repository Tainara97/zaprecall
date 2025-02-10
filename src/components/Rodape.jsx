import styled from "styled-components";

export default function Rodape({flashcards, flashcardsRespondidos}) {

    

    return (
        <EstiloRodape>{`${flashcardsRespondidos}/${flashcards.length} CONCLUÍDOS`}</EstiloRodape>
    );
}

const EstiloRodape = styled.div `
    width: 100%;
    height: 70px;
    background-color: white;
    margin-top: 20px;
    font-family: "Recursive", serif;
    display: flex;
    justify-content: center;
    align-items: center;
`