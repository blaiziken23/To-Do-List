import { Category, Priority, Task } from "@/types/todo";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";
import { useTaskStore } from "@/store/task.store";
import SelectField from "./SelectField";

const TaskItem = ({ task }: { task: Task }) => {
  const { deleteTask, toggleTask, updateCategory, updatePriority } =
    useTaskStore();

  return (
    <li
      key={task.id}
      className={`flex items-center justify-between p-3 rounded-lg ${
        task.priority === "High"
          ? "bg-red-50"
          : task.priority === "Medium"
          ? "bg-blue-50"
          : "bg-gray-50"
      }`}
    >
      <div className="flex items-center space-x-2">
        <Checkbox
          id={`task-${task.id}`}
          checked={task.isCompleted}
          onCheckedChange={() => toggleTask(task.id)}
          className="mr-2"
        />
        <label
          className={`${
            task.isCompleted ? "line-through text-gray-500" : "text-gray-800"
          } font-medium cursor-pointer`}
          htmlFor={`task-${task.id}`}
        >
          {task.text}
        </label>
      </div>
      <div className="flex gap-x-2">
        <SelectField
          id={task.id}
          value={task.category}
          contents={Category}
          placeholder="Category"
          onValueChange={updateCategory}
        />
        <SelectField
          id={task.id}
          value={task.priority}
          contents={Priority}
          placeholder="Priority"
          onValueChange={updatePriority}
        />
        <Button
          variant="destructive"
          className="rounded-full"
          onClick={() => deleteTask(task.id)}
        >
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
