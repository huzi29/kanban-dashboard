"use client";

import { useState } from "react";
import { addTask } from "../lib/api";
import type { TaskStatus } from "../types/task";

const AddTask = ({ onTaskAdded }: { onTaskAdded: () => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("To Do");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    await addTask({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("To Do");
    setShowForm(false);
    onTaskAdded();
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add New Task
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-300 p-4 rounded shadow mt-4 space-y-2"
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border p-2 text-black rounded"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-black border p-2 rounded"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
            className="w-full border p-2 text-black rounded"
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Task
          </button>
        </form>
      )}
    </div>
  );
};

export default AddTask;
