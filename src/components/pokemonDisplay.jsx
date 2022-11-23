import { useEffect } from "react"
export const PokemonDisplay = ({pokemon, pokemonTeam, setPokemonTeam}) => {

    const storeToTeam = () => {
        setPokemonTeam([...pokemonTeam, pokemon])
    }

    useEffect(() => {
        localStorage.setItem("pokemonTeam", JSON.stringify(pokemonTeam));
      }, [pokemonTeam])

    return (
        <div>
            <h3>{ pokemon.name }</h3>
            <img src={pokemon.sprites.front_default} />
                <p>Height: { pokemon.height / 10 }m <br />
                    Weight: { pokemon.weight / 10 }kg</p>
                {pokemon.types.map(item => (
                    <div>Type: {item.type.name}</div>
                ))}
                <div>
                    <button onClick={storeToTeam}>Save to Team!</button>
                </div>
        </div>
    )
            }