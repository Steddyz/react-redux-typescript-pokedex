import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokedexState {
  page: number;
  search: string;
}

const initialState: PokedexState = {
  page: 0,
  search: "",
};

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setPage, setSearch } = pokedexSlice.actions;

export default pokedexSlice.reducer;
