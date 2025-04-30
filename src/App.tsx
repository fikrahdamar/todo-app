import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { TodoList } from "./components/TodoList";
import { NewTodoItem, TodoItem } from "./types/todo";

const list: TodoItem[] = [
  { id: 1, name: "Ngerjain pemweb", checked: true, deadline: "25 september" },
  {
    id: 2,
    name: "kpp",
    checked: false,
    deadline: "20 september",
  },
  {
    id: 3,
    name: "oop",
    checked: false,
    deadline: "25 september",
  },
];

function App() {
  const [item, setItem] = useState(list);

  function setIsChecked(id: number) {
    setItem(
      item.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }
  function handleDeleteItem(id: number) {
    setItem(item.filter((item) => item.id !== id));
  }
  function handleAddItem(newItem: NewTodoItem) {
    const newTodo: TodoItem = {
      ...newItem,
      id: Date.now(),
      checked: false,
    };
    setItem([...item, newTodo]);
  }
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <div className="flex flex-col items-center  bg-neutral-400 shadow-2xl h-96 w-3/5">
          <Header />
          <Form onAddItem={handleAddItem} />
          <TodoList
            list={item}
            onChecked={setIsChecked}
            onDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </>
  );
}
export default App;
