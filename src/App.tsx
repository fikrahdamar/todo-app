import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { TodoList } from "./components/TodoList";
import { NewTodoItem, TodoItem } from "./types/todo";

function App() {
  const [item, setItem] = useState<TodoItem[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/todos");
        const fetchData = await res.json();

        setItem(fetchData);
      } catch (error) {
        console.log("error fetch data", error);
      }
    };

    fetchTodos();
  }, []);

  const setIsChecked = async (id: string) => {
    const target = item.find((it) => it._id === id);
    if (!target) return;

    try {
      const res = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ checked: !target.checked }),
      });
      const updated = await res.json();
      setItem(item.map((it) => (it._id === id ? updated : it)));
    } catch (error) {
      console.log("tidak menemukan data untuk dicentang", error);
    }
  };

  function handleDeleteItem(id: string) {
    setItem(item.filter((item) => item._id !== id));
  }
  function handleAddItem(newItem: NewTodoItem) {
    const newTodo: TodoItem = {
      ...newItem,
      _id: "test",
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
