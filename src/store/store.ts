import { pokemonApi } from "../services/pokemonService";
import { configureStore } from "@reduxjs/toolkit";
import pokedexReducer from "../features/pokedexSlice";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokedex: pokedexReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
