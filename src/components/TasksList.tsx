import TaskItem from "./TaskItem";
import { useTaskStore } from "@/store/task.store";

export default function TasksList() {
  const { tasks } = useTaskStore();

  return (
    <div className="h-96 overflow-y-auto">
      <ul className="space-y-2">
        {tasks.map((task, i) => (
          <TaskItem key={i} task={task} />
        ))}
      </ul>
    </div>
  );
}
