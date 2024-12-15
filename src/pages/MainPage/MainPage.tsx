import React, { FC } from "react";

import cl from "./MainPage.module.css";
import RandomPokemon from "../../components/Random/RandomPokemon";

const MainPage: FC = () => {
  return (
    <div className={cl.main}>
      <div>
        <h1>POKEDEX</h1>
      </div>
      <hr />
      <div className={cl.random}>
        <div className={cl.random__wrapper}>
          <RandomPokemon />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
