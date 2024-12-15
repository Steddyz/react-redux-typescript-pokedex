import React, { FC, useState, FormEvent } from "react";

import cl from "./Form.module.css";

interface FormProps {
  onSearch: (searchTerm: string) => void;
}

const Form: FC<FormProps> = ({ onSearch }) => {
  const [form, setForm] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(form.toLowerCase());
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
