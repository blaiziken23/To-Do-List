export const Category = ["Work", "Personal", "Shopping", "Other"];
export const Priority = ["High", "Medium", "Low"];

export type TPriority = (typeof Priority)[number];
export type TCategory = (typeof Category)[number];

export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
  priority: TPriority;
  dueDate?: Date | null;
  category: TCategory;

  // Action
  addTask?: () => void;
  deleteTask?: (id: number) => void;
  toggleTask?: (id: number) => void;
  updateCategory?: (id: number) => void;
  updatePriority?: (id: number) => void;
}
