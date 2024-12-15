import React, { FC, useEffect, useState } from "react";
import axios from "axios";

import cl from "./PokemonCard.module.css";

interface Pokemon {
  name: string;
  img: string;
}

interface PokemonCardProps {
  page: number;
  search: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ page, search }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const allPokemons = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}`
      );
      const pokemonData = await Promise.all(
        response.data.results.map(async (pok: { url: string }) => {
          const pokResponse = await axios.get(pok.url);
          return {
            name: pokResponse.data.name,
            img: pokResponse.data.sprites.front_default,
          };
        })
      );
      setPokemons(pokemonData);
      setLoading(false);
    };
    allPokemons();
  }, [page]);

  const filterPokemons = pokemons.filter((pok) => pok.name.includes(search));
  return (
    <div className={cl.pokemonList}>
      {loading ? (
        <div className={cl.loading}>Загрузка...</div>
      ) : (
        <div className={cl.pokemonCard}>
          {filterPokemons.map((pok) => (
            <div className={cl.pokemonCard_wrapper} key={pok.name}>
              <img src={pok.img} alt={pok.name} />
              <div>{pok.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
