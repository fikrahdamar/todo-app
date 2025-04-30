export interface TodoItem {
  id: number;
  name: string;
  checked: boolean;
  deadline?: string;
}

export interface TodoItemProps {
  list: TodoItem[];
  onChecked?: (id: number) => void;
  onDeleteItem?: (id: number) => void;
  onClearItem?: () => void;
}

export type NewTodoItem = Omit<TodoItem, "id" | "checked">;

export interface FormProps {
  onAddItem: (item: NewTodoItem) => void;
}
