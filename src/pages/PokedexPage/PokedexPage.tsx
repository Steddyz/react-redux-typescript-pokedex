import { FC } from "react";

import cl from "./PokedexPage.module.css";
import Form from "../../components/Form/Form";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Pagination from "../../components/Pagination/Pagination";
import { useGetPokemonsQuery } from "../../services/pokemonService";
import { useAppSelector } from "../../hooks/hooks";

const PokedexPage: FC = () => {
  const { page, search } = useAppSelector((state) => state.pokedex);

  const { data, isLoading, isError } = useGetPokemonsQuery({ page, search });

  return (
    <div className={cl.pokedex}>
      <Form />
      <Pagination />
      {isLoading && <div>Загрузка...</div>}
      {isError && <div>Произошла ошибка. Попробуйте позже</div>}
      {data && <PokemonCard pokemons={data} />}
    </div>
  );
};

export default PokedexPage;
