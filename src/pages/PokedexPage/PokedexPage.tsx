import React, { FC, useState } from "react";

import cl from "./PokedexPage.module.css";
import Form from "../../components/Form/Form";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";

const PokedexPage: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  return (
    <div className={cl.pokedex}>
      <Form onSearch={setSearch} />
      <Pagination onPageChange={setPage} currentPage={page} />
      <PokemonCard page={page} search={search} />
    </div>
  );
};

export default PokedexPage;
