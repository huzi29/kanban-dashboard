"use client";
import { Task } from "../types/task";
import TaskCard from "./TaskCard";

type ColumnProps = {
  title: string;
  tasks: Task[];
};

const Column = ({ title, tasks }: ColumnProps) => {
  return (
    <div className="w-1/3 bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
