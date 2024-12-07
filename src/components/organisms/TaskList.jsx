import TaskItem from "../molecules/TaskItem";

const TaskList = ({ tasks, onDelete, onEdit }) => (
  <div>
    {tasks.length > 0 ? (
      tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit} // Pass down the onEdit function to each TaskItem
        />
      ))
    ) : (
      <p className="text-center text-gray-500">No tasks yet!</p>
    )}
  </div>
);

export default TaskList;
