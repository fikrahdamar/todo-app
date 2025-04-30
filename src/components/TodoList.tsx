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
      <div>
        <ul>
          {list.map((listItem) => (
            <li key={listItem.id}>
              <input
                type="checkbox"
                checked={listItem.checked}
                onChange={() => onChecked?.(listItem.id)}
              />
              <span className={listItem.checked ? "line-through" : ""}>
                {listItem.name}
              </span>
              <span> {listItem.deadline}</span>
              <button onClick={() => onDeleteItem?.(listItem.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={onClearItem}>Clear item</button>
      </div>
    </>
  );
};
