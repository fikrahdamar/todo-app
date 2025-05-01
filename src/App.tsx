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
  function handleClearItem() {
    setItem([]);
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center bg-neutral-200 shadow-2xl h-min-96 w-4/5 rounded-3xl">
          <div className="bg-stone-800 font-bold font-sans text-amber-100  w-full text-center rounded-t-3xl shadow-2xl">
            <Header />
          </div>
          <div>
            <Form onAddItem={handleAddItem} />
          </div>
          <div>
            <TodoList
              list={item}
              onChecked={setIsChecked}
              onDeleteItem={handleDeleteItem}
              onClearItem={handleClearItem}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
