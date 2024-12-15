import cl from "./RandomPokemon.module.css";
import { useGetRandomPokemonQuery } from "../../services/pokemonService";

const RandomPokemon = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const { data: pokemon, isLoading } = useGetRandomPokemonQuery(randomNumber);

  return (
    <div className={cl.random}>
      {isLoading && <div>Загрузка...</div>}
      {pokemon && (
        <>
          <p className={cl.title}>{pokemon.name}</p>
          <div className={cl.random__wrapper}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <p>Рандомный покемон</p>
        </>
      )}
    </div>
  );
};

export default RandomPokemon;
