import { Task } from '../types/task';

const API_URL = 'http://localhost:4000/tasks';

const fetchTasks = async (): Promise<Task[]> => {
  const res = await fetch(API_URL);
  return res.json();
};

const addTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return res.json();
};

const updateTask = async (id: number, updates: Partial<Task>): Promise<Task> => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    return res.json();
  };
  

  export { fetchTasks, addTask,updateTask };