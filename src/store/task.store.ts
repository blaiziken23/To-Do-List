import { Task, TCategory, TPriority } from "@/types/todo";
import { persist } from "zustand/middleware";
import { create } from "zustand";

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  updatePriority: (id: number, newPriority: TPriority) => void;
  updateCategory: (id: number, newCategory: TCategory) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (task) =>
        set((state) => ({
          tasks: [{ ...task }, ...state.tasks],
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
          ),
        })),

      updatePriority: (id, newPriority) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, priority: newPriority } : task
          ),
        })),

      updateCategory: (id, newCategory) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, category: newCategory } : task
          ),
        })),
    }),
    {
      name: "task-storage",
    }
  )
);
