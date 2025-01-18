import { PlusIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTaskStore } from "@/store/task.store";
import { Task } from "@/types/todo";

export default function CreateTaskForm() {
  const { addTask } = useTaskStore();
  const [inputText, setInputText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputText && inputText.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: inputText,
        isCompleted: false,
        priority: "Medium",
        category: "Other",
      };

      addTask(newTask);
      setInputText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-x-2">
      <Input
        type="text"
        value={inputText}
        placeholder="Add a new Task"
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button type="submit">
        <PlusIcon /> Add
      </Button>
    </form>
  );
}
