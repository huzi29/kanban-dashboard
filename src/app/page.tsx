"use client";

import { useEffect, useState } from "react";
import { fetchTasks } from "../lib/api";
import { Task, TaskStatus } from "../types/task";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { updateTask } from "../lib/api";
import AddTask from "../components/AddTask";
const page = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDragEnd = async (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const draggedTask = tasks.find((t) => t.id.toString() === draggableId);
    if (!draggedTask) return;

    await updateTask(draggedTask.id, {
      status: destination.droppableId as TaskStatus,
    });
    loadTasks();
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl text-center font-bold mb-4">Kanban Dashboard</h1>
      <AddTask onTaskAdded={loadTasks} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-black gap-4 mt-4">
          {["To Do", "In Progress", "Done"].map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-100 p-4 rounded shadow min-h-[400px]"
                >
                  <h2 className="text-xl font-semibold mb-2">{status}</h2>
                  {tasks
                    .filter((t) => t.status === status)
                    .map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white p-4 rounded mb-2 shadow"
                          >
                            <h3 className="font-bold">{task.title}</h3>
                            <p className="text-sm">{task.description}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </main>
  );
};

export default page;
