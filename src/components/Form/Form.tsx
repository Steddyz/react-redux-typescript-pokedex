import React, { FC, useState, FormEvent } from "react";

import cl from "./Form.module.css";
import { useAppDispatch } from "../../hooks/hooks";
import { setSearch } from "../../features/pokedexSlice";

const Form: FC = () => {
  const [form, setForm] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", form.toLowerCase());
    dispatch(setSearch(form.toLowerCase()));
    setForm("");
  };

  return (
    <div>
      <form className={cl.form} onSubmit={handleSubmit}>
        <input
          className={cl.input}
          type="text"
          placeholder="Название покемона"
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
        <button className={cl.button}>Поиск</button>
      </form>
    </div>
  );
};

export default Form;
