import Button from "../atoms/Button";

const TaskItem = ({ task, onDelete }) => (
  <div className="flex items-center justify-between p-2 border-b">
    <span>{task.text}</span>
    <Button className="bg-red-500 hover:bg-red-900 " onClick={() => onDelete(task.id)}>
      Delete
    </Button>
  </div>
);

export default TaskItem;
