import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Pokemon = {
  name: string;
  sprites: { front_default: string };
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getRandomPokemon: builder.query<Pokemon, number>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetRandomPokemonQuery } = pokemonApi;
