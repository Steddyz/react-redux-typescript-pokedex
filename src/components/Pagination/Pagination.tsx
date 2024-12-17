import { FC } from "react";

import cl from "./Pagination.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useGetPokemonsQuery } from "../../services/pokemonService";
import { setPage } from "../../features/pokedexSlice";

const Pagination: FC = () => {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector((state) => state.pokedex.page);

  const { data } = useGetPokemonsQuery({ page: currentPage, search: "" });

  const hasMorePages = data && data.length > 0;

  const handleNextPage = () => {
    if (hasMorePages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      dispatch(setPage(currentPage - 1));
    }
  };

  return (
    <div className={cl.pagination}>
      <button onClick={handlePreviousPage} className={cl.arrow}>
        &#x2BC7;
      </button>
      <div className={cl.pagination_inner}>Pagination</div>
      <button onClick={handleNextPage} className={cl.arrow}>
        &#x2BC8;
      </button>
    </div>
  );
};

export default Pagination;
