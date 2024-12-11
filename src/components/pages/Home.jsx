// // src/pages/Home.js
// import { useState, useEffect } from "react";
// import FormGroup from "../molecules/FormGroup";
// import TaskList from "../organisms/TaskList";
// import Modal from "../molecules/Modal";

// const Home = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskText, setTaskText] = useState("");
//   const [searchText, setSearchText] = useState(""); // State for search input
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTask, setCurrentTask] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     if (savedTasks) {
//       setTasks(JSON.parse(savedTasks));
//     }
//   }, []);

//   useEffect(() => {
//     if (tasks.length > 0) {
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
//   }, [tasks]);

//   const addTask = () => {
//     if (taskText.trim()) {
//       const newTask = { id: Date.now(), text: taskText };
//       setTasks([...tasks, newTask]);
//       setTaskText("");
//     }
//   };

//   const updateTask = (updatedTask) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === updatedTask.id ? { ...task, text: updatedTask.text } : task
//       )
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const startEditing = (task) => {
//     setIsEditing(true);
//     setCurrentTask(task);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsEditing(false);
//     setCurrentTask(null);
//   };

//   const filteredTasks = tasks.filter((task) =>
//     task.text.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <div className="max-w-md p-4 mx-auto">
//       <h1 className="mb-4 text-2xl font-bold text-center">To-Do App</h1>

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           className="w-full p-2 mb-2 border rounded"
//         />
//       </div>

//       <FormGroup
//         taskText={taskText}
//         setTaskText={setTaskText}
//         addTask={isEditing ? updateTask : addTask}
//       />
//       <TaskList
//         tasks={filteredTasks}
//         onDelete={deleteTask}
//         onEdit={startEditing}
//       />

//       {isModalOpen && (
//         <Modal task={currentTask} onUpdate={updateTask} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// export default Home;

import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Modal from "../molecules/Modal";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    // Change the background color of the whole screen based on isDarkMode
    if (isDarkMode) {
      document.body.classList.add("bg-gray-900");
      document.body.classList.remove("bg-gray-100");
    } else {
      document.body.classList.add("bg-gray-100");
      document.body.classList.remove("bg-gray-900");
    }
  }, [isDarkMode]);

  const addTask = () => {
    if (taskText.trim()) {
      const newTask = { id: Date.now(), text: taskText };
      setTasks([...tasks, newTask]);
      setTaskText("");
    }
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, text: updatedTask.text } : task
      )
    );
    closeModal();
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setCurrentTask(null);
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`w-full max-w-lg h-[500px] p-6 mx-auto rounded-lg shadow-lg overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-green-200 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">To-Do App 📝</h1>
        <button
          onClick={toggleTheme}
          className="p-3 bg-gray-200 rounded-full dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={`w-full p-3 mb-3 border rounded-lg shadow-md font-handwritten text-base  font-bold ${
            isDarkMode ? "text-gray-900" : "text-gray-700"
          }`}
        />
      </div>

      {/* Task Form */}
      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className={`flex-1 p-3 border rounded-lg shadow-md font-handwritten text-base   font-bold ${
            isDarkMode ? "text-gray-900" : "text-gray-700"
          }`}
        />
        <button
          onClick={isEditing ? () => updateTask(currentTask) : addTask}
          className="p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          <FaPlus size={20} />
        </button>
      </div>

      {/* Task List */}
      <ul className="overflow-y-auto h-[240px]">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-3 mb-3 border rounded-lg shadow-md"
          >
            <span
              className={`font-handwritten text-lg  font-bold ${
                isDarkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              {task.text}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => startEditing(task)}
                className="text-green-400 hover:text-green-500"
              >
                <FaEdit size={20} />
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-600"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {isModalOpen && (
        <Modal task={currentTask} onUpdate={updateTask} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
