import styled from "styled-components";
import pokebola from "../../assets/pokebola.png"

export const ContainerCard = styled.div`
    background-color: #729F92;
    border-radius: 12px;
    width: 31vw;
    height: 38vh;
    /* padding: 20px; */

    background-image: url(${pokebola});
    background-repeat: no-repeat;
    background-position: 11vw;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:  2fr 1fr;
    /* justify-content: center; */

    color: white;
`

export const ContainerDetalhes = styled.div`
    grid-column: 1;
    grid-row: 1;
    padding: 15px;
    margin-top: 10px;
`
export const TextNumberCard = styled.p`
    font-size: 16px;
`
export const TituloCard = styled.h3`
    font-size: 30px;
`
export const Divide = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 3px;
`

export const Detalhes = styled.div`
    background-color: #AD61AE;

    border-style: dashed ;
    border-radius: 8px;
    border-width: 1px;

    width: 6vw;
    height: 6vh;
    /* padding: 3px; */

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const DetalhesImagem = styled.img`
    width: 14px;
`

export const DetalhesTexto = styled.p`
    font-size: 14px;
`

export const ImagemCard = styled.img`

    margin-top: -50px;
    width: 16vw;
    height: 34vh;


    grid-column: 2;
    grid-row: 1;
    align-self:center;
    
`

export const DetalhesBotao = styled.a`
    /* border: none; */
    grid-column: 1;
    grid-row: 2;
    padding: 15px;
    align-self: center;
    color: white;
`

export const BotaoCaptura = styled.button`
    width: 12vw;
    height: 6vh;
    margin-left:40px;
    border-radius: 8px;
    border: none;

    align-self: center;
    /* justify-items: center; */

    grid-column: 2;
    grid-row: 2;
`

