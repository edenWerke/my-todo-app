import TaskItem from "../molecules/TaskItem";

const TaskList = ({ tasks, onDelete }) => (
  <div>
    {tasks.length > 0 ? (
      tasks.map((task) => <TaskItem key={task.id} task={task} onDelete={onDelete} />)
    ) : (
      <p className="text-center text-gray-500">No tasks yet!</p>
    )}
  </div>
);

export default TaskList;
