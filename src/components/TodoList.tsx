import React from "react";
import { TodoItemProps } from "../types/todo";

export const TodoList: React.FC<TodoItemProps> = ({
  list,
  onChecked,
  onDeleteItem,
  onClearItem,
}) => {
  return (
    <>
      <div className="my-5">
        <ul className="font-sans text-md uppercase font-medium">
          {list.map((listItem) => (
            <li
              key={listItem._id}
              className="flex items-center gap-2 py-2 border-b"
            >
              <input
                type="checkbox"
                checked={listItem.checked}
                onChange={() => onChecked?.(listItem._id)}
                className="form-checkbox h-6 w-6  border-gray-300 rounded-md  "
              />
              <span
                className={` ml-2 flex-1 ${
                  listItem.checked ? "line-through" : ""
                }`}
              >
                {listItem.name}
              </span>
              <span className="mx-3 w-32 text-right"> {listItem.deadline}</span>
              <button
                onClick={() => onDeleteItem?.(listItem._id)}
                className="bg-stone-700 p-[3px] rounded-full px-[9px] font-black  ml-3 text-amber-100"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="items-center flex flex-col my-6">
        <button
          onClick={onClearItem}
          className="font-sans font-medium uppercase bg-amber-100 px-2 py-1 rounded-2xl hover:shadow-xl hover:translate-y-0 hover:translate-x-0 transition-all duration-200 ease-in-out"
        >
          Clear item
        </button>
      </div>
    </>
  );
};
