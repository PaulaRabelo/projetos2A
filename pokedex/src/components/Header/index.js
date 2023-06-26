import React from "react";
import logo from '../../assets/logo.png'
import { HeaderContainer, ImagemHeader, ButtonPages  } from "./styles";

const Header = ({trocarPagina}) => {
    return (
        <HeaderContainer>
            <ImagemHeader src={logo} alt="Pokémon" />
            <ButtonPages onClick={()=> trocarPagina(0)} >Pokédex</ButtonPages>
        </HeaderContainer>
    )
}

export default Header