// import Button from "../atoms/Button";

// const TaskItem = ({ task, onDelete }) => (
//   <div className="flex items-center justify-between p-2 border-b">
//     <span>{task.text}</span>
//     <Button className="bg-red-500 hover:bg-red-900 " onClick={() => onDelete(task.id)}>
//       Delete
//     </Button>
//   </div>
// );

// export default TaskItem;
import Button from "../atoms/Button";

const TaskItem = ({ task, onDelete, onEdit }) => (
  <div className="flex items-center justify-between p-2 border-b">
    <span>{task.text}</span>
    <div className="space-x-2">
      <Button
        className="bg-blue-500 hover:bg-blue-700"
        onClick={() => onEdit(task)}
      >
        Edit
      </Button>
      <Button
        className="bg-red-500 hover:bg-red-900"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </div>
  </div>
);

export default TaskItem;
// import Button from "../atoms/Button";

// const TaskItem = ({ task, onDelete, onEdit }) => (
//   <div className="flex items-center justify-between p-2 border-b">
//     <div className="flex items-center">
//       <span className="mr-2">{task.text}</span>
//       <Button
//         className="bg-blue-500 hover:bg-blue-700"
//         onClick={() => onEdit(task)}
//       >
//         Edit
//       </Button>
//     </div>
//     <Button
//       className="bg-red-500 hover:bg-red-900"
//       onClick={() => onDelete(task.id)}
//     >
//       Delete
//     </Button>
//   </div>
// );

// export default TaskItem;
