import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export type Pokemon = {
  name: string;
  sprites: { front_default: string };
};

interface PokemonListResponse {
  results: { url: string; name: string }[];
  count: number;
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getRandomPokemon: builder.query<Pokemon, number>({
      query: (id) => `pokemon/${id}`,
    }),
    getPokemons: builder.query<Pokemon[], { page: number; search: string }>({
      query: ({ page, search }) => {
        const limit = 20;
        const offset = page * limit;

        if (search) {
          return `pokemon/${search}`;
        }

        return `pokemon?limit=${limit}&offset=${offset}`;
      },

      transformResponse: async (response: PokemonListResponse | Pokemon) => {
        if ((response as Pokemon).sprites) {
          return [response as Pokemon];
        }
        const pokemonData = await Promise.all(
          (response as PokemonListResponse).results.map(async (pok) => {
            const pokResponse = await axios.get(pok.url);
            return await pokResponse.data;
          })
        );
        return pokemonData;
      },
    }),
  }),
});

export const { useGetRandomPokemonQuery, useGetPokemonsQuery } = pokemonApi;
