import React, { FC, useState } from "react";

import cl from "./PokedexPage.module.css";
import Form from "../../components/Form/Form";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";
import { useGetPokemonsQuery } from "../../services/pokemonService";

const PokedexPage: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const { data, isLoading, isError } = useGetPokemonsQuery({ page, search });

  return (
    <div className={cl.pokedex}>
      <Form onSearch={setSearch} />
      <Pagination onPageChange={setPage} currentPage={page} />
      {isLoading && <div>Загрузка...</div>}
      {isError && <div>Произошла ошибка. Попробуйте позже</div>}
      {data && <PokemonCard pokemons={data} />}
    </div>
  );
};

export default PokedexPage;
