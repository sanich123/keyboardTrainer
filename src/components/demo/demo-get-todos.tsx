import { toast } from 'react-toastify';

export interface TodosProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getTodos(setData: (data: TodosProps[]) => void) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (response.status !== 200) {
      toast.warn('Something wrong has happen. Probably you have typed the wrong address');
    }
    const todos = await response.json();
    setData(todos);
  } catch (error) {
    if (error instanceof Error) {
      toast.warn(error.toString());
    }
  }
}
