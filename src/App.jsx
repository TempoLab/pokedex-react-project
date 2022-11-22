import { useState } from 'react'
import pokeballHomeImg from './assets/pokeball-logo-img.png'
import {SearchBar} from './components/searchBar.jsx'  
import './App.scss'

function App() {
  const [pokemon, setPokemon] = useState(null);

  return (
    <div className="App">
      <header>
        <div className="screen-size"></div>
      </header>

      <pre>{JSON.stringify(pokemon)}</pre>

      <div className="container">

        <div className="pokeball-img-wrapper">
          <img className="pokeball-home-img" src={pokeballHomeImg} />
        </div>
        <SearchBar setPokemon={setPokemon}/>
      </div>
    </div>
  )
}

export default App
