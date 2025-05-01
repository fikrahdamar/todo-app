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
      <form action="submit" onSubmit={handleSubmit} className="w-full px-4">
        <h1 className="text-center mt-5 font-sans font-medium uppercase mb-2">
          Mau menambahkan to do apa nih
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-center w-full my-3">
          <input
            type="text"
            placeholder="nama kegiatan"
            value={name}
            onChange={(e) => setNames(e.target.value)}
            className="bg-amber-50 text-lg  rounded-lg md:rounded-none md:rounded-l-lg  pl-2 font-sans font-medium shadow-xl/10"
          />
          <input
            type="text"
            placeholder="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="bg-amber-50 text-lg rounded-lg md:rounded-none md:rounded-r-lg pl-2 font-sans font-medium shadow-xl/10"
          />
          <button className="bg-amber-50 text-[18px] rounded-lg px-1 font-sans font-medium hover:bg-amber-200 hover:shadow-amber-300 transition ease-in-out duration-500 shadow-xl/10">
            Submit{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
