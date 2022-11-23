import { useState, useEffect } from "react";

function getPokemonTeamLocalStorage(pokemonTeam) {
  // getting stored value
  const saved = localStorage.getItem(pokemonTeam);
  const initial = JSON.parse(saved);
  return initial;
}

export const usePokemonTeamLocalStorage = (pokemonTeam) => {
  const [value, setValue] = useState(() => {
    return getPokemonTeamLocalStorage(pokemonTeam);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(pokemonTeam, JSON.stringify(value));
  }, [pokemonTeam, value]);

  return [value, setValue];
};