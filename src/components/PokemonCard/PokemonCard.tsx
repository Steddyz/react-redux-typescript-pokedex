import React, { FC } from "react";
import cl from "./PokemonCard.module.css";

interface Pokemon {
  name: string;
  sprites: { front_default: string };
}

interface PokemonCardProps {
  pokemons: Pokemon[];
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemons }) => {
  return (
    <div className={cl.pokemonList}>
      <div className={cl.pokemonCard}>
        {pokemons.map((pok) => (
          <div className={cl.pokemonCard_wrapper} key={pok.name}>
            <img src={pok.sprites.front_default} alt={pok.name} />
            <div>{pok.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
