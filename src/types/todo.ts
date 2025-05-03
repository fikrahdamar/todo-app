export interface TodoItem {
  _id: string;
  name: string;
  checked: boolean;
  deadline?: string;
}

export interface TodoItemProps {
  list: TodoItem[];
  onChecked?: (id: string) => void;
  onDeleteItem?: (id: string) => void;
  onClearItem?: () => void;
}

export type NewTodoItem = Omit<TodoItem, "id" | "checked">;

export interface FormProps {
  onAddItem: (item: NewTodoItem) => void;
}
