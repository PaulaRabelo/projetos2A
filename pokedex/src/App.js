import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { GlobalStyle } from "./GlobalStyle";
import PokedexPage from "./pages/PokedexPage";
import PokemonDetailsPage from "./pages/PokemonDetailPage";
import PokemonListPage from "./pages/PokemonListPage";

function App() {

  const [page, setPage] = useState()

    const paginaBotao = () =>{
      console.log("fui clicado")
      switch(page){
        case 0:
          return <PokedexPage/>
        case 1:
          return <PokemonListPage/>
        default:
          return "default"
      }
    }

    const trocarPagina = (troca)=>{
      setPage(troca)
    }

  return (
    <>
      <GlobalStyle />
      <Header trocarPagina={trocarPagina} />

      {paginaBotao()}
      <div>
        {/* <PokemonListPage  /> */}
        {/* <PokedexPage /> */}
        {/* <PokemonDetailsPage /> */}
      </div>
    </>
  );
}

export default App;
