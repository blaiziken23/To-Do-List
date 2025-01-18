import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CreateTaskForm from "./CreateTaskForm";
import TasksList from "./TasksList";

function TodoList() {
  return (
    <div className=" rounded max-w-2xl w-full">
      <Card className="bg-white/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">
            My Tasks
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CreateTaskForm />
          <TasksList />
        </CardContent>
      </Card>
    </div>
  );
}

export default TodoList;
