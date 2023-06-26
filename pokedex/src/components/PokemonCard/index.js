import React from "react";
import pokemon from "../../assets/bulbasaur.png"
import icone from "../../assets/icone.png"
import { ContainerCard, ContainerDetalhes,Divide, DetalhesTexto,DetalhesImagem, TituloCard, ImagemCard, TextNumberCard, Detalhes, DetalhesBotao, BotaoCaptura } from "./styles";

const PokemonCard = () => {
    return (
        <>
            <ContainerCard>

                <ContainerDetalhes>
                    <TextNumberCard>#01</TextNumberCard>
                    <TituloCard>Bulbasaur</TituloCard>

                 <Divide>
                    <Detalhes>
                        <DetalhesImagem src={icone}/>
                        <DetalhesTexto>Poison</DetalhesTexto>
                    </Detalhes>

                    <Detalhes>
                        <DetalhesImagem src={icone}/>
                        <DetalhesTexto>Poison</DetalhesTexto>
                    </Detalhes>
                 </Divide>
                    

                </ContainerDetalhes>

                <ImagemCard src={pokemon} />

                <DetalhesBotao href="#">Detalhes</DetalhesBotao>
                <BotaoCaptura>Capturar!</BotaoCaptura>
            </ContainerCard>
        </>
    )
}

export default PokemonCard