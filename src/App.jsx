import { useState, useEffect } from 'react'
import pokeballHomeImg from './assets/pokeball-logo-img.png'
import { SearchBar } from './components/searchBar.jsx'
import { PokemonDisplay } from './components/pokemonDisplay'
import './App.scss'

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonTeam, setPokemonTeam] = useState([]);
  const [state, setState] = useState('idle');

  useEffect(() => {
    const value = localStorage.getItem("pokemonTeam")
    if (value === null) {
      return
    }
    const parsed = JSON.parse(value)
    setPokemonTeam(parsed)
  }, []);

  return (
    <div className="App">
      <header>
        <div className="screen-size"></div>
      </header>

      {/* <pre>{JSON.stringify(pokemon)}</pre> */}

      <div className="container">

        <div className="pokeball-img-wrapper">
          <img className="pokeball-home-img" src={pokeballHomeImg} />
        </div>
        <SearchBar setPokemon={setPokemon} setState={setState} />

        {state === 'complete' && (
          <div>
            <PokemonDisplay pokemon={pokemon} pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} />
          </div>
        )}

      </div>
    </div>
  )
}

export default App
