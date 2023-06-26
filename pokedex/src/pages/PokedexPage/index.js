import React from "react";
import PokemonCard from "../../components/PokemonCard";
import { ContainerPokedex, TextoSubtitulo, ContainerCards } from "./styles";

const PokedexPage = () =>{


    return(
        <ContainerPokedex>
           <TextoSubtitulo>Todos Pokémons</TextoSubtitulo>
           <ContainerCards>

            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            
           </ContainerCards>
        </ContainerPokedex>
    )
}

export default PokedexPage