import styled, {css} from "styled-components";
import {BotaoProps} from "../interfaces/Botao.interface"
 
const colorVariations = {
    default:css`background-color: transparent;
    border: transparent;`,
    marmore:css`
    background-image: var(--img-marmore);
    font-family: var(--font-cursiva);
    `
}

const typeVariations = {
    default:css``,

   

    menu:css`
        background-color: transparent;
        border: 1px solid black;
        padding: 15px 45px;
        margin-bottom: 20px;
        width:300px;
        text-align: center;
        font-size: 1.5em;

        @media only screen and (max-width: 500px){
            .btn-menu{
                width: 80%;
                padding:20px;
            }
        
        }
    `
}

const Botao = styled.button<BotaoProps>`
${(props) => typeVariations[props.tipo || "default"]}
${(props) => colorVariations[props.bg || "default"]}

`

export default Botao;