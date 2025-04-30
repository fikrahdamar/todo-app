import React, { useState } from "react";
import { FormProps } from "../types/todo";

const Form = ({ onAddItem }: FormProps) => {
  const [name, setNames] = useState("");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newItem = {
      name,
      deadline,
    };
    if (!name || !deadline) return;
    onAddItem(newItem);
    setNames("");
    setDeadline("");
  }
  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Mau menambahkan to do apa nih</h1>
        <input
          type="text"
          placeholder="nama kegiatan"
          value={name}
          onChange={(e) => setNames(e.target.value)}
        />
        <input
          type="text"
          placeholder="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button>Submit </button>
      </form>
    </>
  );
};

export default Form;
