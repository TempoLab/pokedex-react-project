
import ky from 'ky';
import { useState } from 'react';

export function SearchBar({ setPokemon, setState }) {

    const getRandomPokemon = () => {
        return Math.floor(Math.random() * 905) + 1;
    };

    const apiHandler = async (pokemonSearch) => {
        const search = pokemonSearch || getRandomPokemon();
        const response = await ky.get(`https://pokeapi.co/api/v2/pokemon/${search}/`).json()
        console.log(response)
        setPokemon(response)
        setState('complete')
    };

    const [pokemonSearchValue, setPokemonSearchValue] = useState('');
    const handleSearchChange = (e) => setPokemonSearchValue(e.target.value);

    const requestRandomPokemon = () => apiHandler();
    const requestSearchedPokemon = () => apiHandler(pokemonSearchValue);

    return (
        <div>
            <div className="grid search-bar">
                <input type="text" value={pokemonSearchValue} onChange={handleSearchChange} />
                <button className="item-button" onClick={requestSearchedPokemon}>Search</button>
            </div>
            <div className="grid below-search-bar">
                <select name="typeFilter1" id="typeFilter1">
                    <option value="grass">Grass</option>
                    <option value="water">Water</option>
                    <option value="fire">Fire</option>
                    <option value="electric">Electric</option>
                </select>
                <select name="typeFilter2" id="typeFilter2">
                    <option value="grass">Grass</option>
                    <option value="water">Water</option>
                    <option value="fire">Fire</option>
                    <option value="electric">Electric</option>
                </select>
                <button className="item-button" type="button" onClick={requestRandomPokemon}>Poké Search Random</button>
            </div>
        </div>
    );
}
