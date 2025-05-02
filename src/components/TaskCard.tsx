"use client";
import { Task } from "../types/task";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="p-3 mb-3 bg-blue-100 rounded shadow">
      <h3 className="text-black font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-900">{task.description}</p>
    </div>
  );
};

export default TaskCard;
