import { FC } from "react";

import cl from "./PokedexPage.module.css";
import Form from "../../components/Form/Form";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";
import { useGetPokemonsQuery } from "../../services/pokemonService";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setPage } from "../../features/pokedexSlice";

const PokedexPage: FC = () => {
  const dispatch = useAppDispatch();
  const { page, search } = useAppSelector((state) => state.pokedex);

  const { data, isLoading, isError } = useGetPokemonsQuery({ page, search });

  return (
    <div className={cl.pokedex}>
      <Form />
      <Pagination
        onPageChange={(newPage) => {
          dispatch(setPage(newPage));
        }}
        currentPage={page}
      />
      {isLoading && <div>Загрузка...</div>}
      {isError && <div>Произошла ошибка. Попробуйте позже</div>}
      {data && <PokemonCard pokemons={data} />}
    </div>
  );
};

export default PokedexPage;
