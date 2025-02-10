import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Topo() {
    return (
        <EstiloTopo>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
        </EstiloTopo>
    );
}

const EstiloTopo = styled.div `
    width: 80%;
    height: 150px;
    font-family: "Righteous", serif;
    font-weight: 400px;
    font-size: 36px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    
    img{
        width: 50px;
        height: 60px;
        margin-right: 20px;
    }
    
`
