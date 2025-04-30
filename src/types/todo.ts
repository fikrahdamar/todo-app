export interface TodoItem {
  id: number;
  name: string;
  checked: boolean;
  deadline?: string;
}

export interface TodoItemProps {
  list: TodoItem[];
  onChecked?: (id: number) => void;
}
