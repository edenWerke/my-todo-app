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
// import { useState, useEffect } from "react";
// import FormGroup from "../molecules/FormGroup";
// import TaskList from "../organisms/TaskList";
// import Modal from "../molecules/Modal";
// import { FaSun, FaMoon } from "react-icons/fa";

// const Home = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskText, setTaskText] = useState("");
//   const [searchText, setSearchText] = useState(""); // State for search input
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTask, setCurrentTask] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false); // Light/Dark mode state

//   // Load tasks from localStorage
//   useEffect(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     if (savedTasks) {
//       setTasks(JSON.parse(savedTasks));
//     }
//   }, []);

//   // Save tasks to localStorage
//   useEffect(() => {
//     if (tasks.length > 0) {
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
//   }, [tasks]);

//   // Add new task
//   const addTask = () => {
//     if (taskText.trim()) {
//       const newTask = { id: Date.now(), text: taskText };
//       setTasks([...tasks, newTask]);
//       setTaskText("");
//     }
//   };

//   // Update existing task
//   const updateTask = (updatedTask) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === updatedTask.id ? { ...task, text: updatedTask.text } : task
//       )
//     );
//     closeModal();
//   };

//   // Delete task
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   // Start editing a task
//   const startEditing = (task) => {
//     setIsEditing(true);
//     setCurrentTask(task);
//     setIsModalOpen(true);
//   };

//   // Close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsEditing(false);
//     setCurrentTask(null);
//   };

//   // Filter tasks based on search text
//   const filteredTasks = tasks.filter((task) =>
//     task.text.toLowerCase().includes(searchText.toLowerCase())
//   );

//   // Toggle light/dark mode
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark");
//   };

//   return (
//     <div
//       className={`max-w-md p-4 mx-auto ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">To-Do App 📝 </h1>
//         <button
//           onClick={toggleTheme}
//           className="p-2 bg-gray-200 rounded-full dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
//         >
//           {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//         </button>
//       </div>

//       {/* Search Input */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           className="w-full p-2 mb-2 border rounded"
//         />
//       </div>

//       {/* Task Form */}
//       <FormGroup
//         taskText={taskText}
//         setTaskText={setTaskText}
//         addTask={isEditing ? updateTask : addTask}
//       />

//       {/* Task List */}
//       <TaskList
//         tasks={filteredTasks}
//         onDelete={deleteTask}
//         onEdit={startEditing}
//       />

//       {/* Modal */}
//       {isModalOpen && (
//         <Modal task={currentTask} onUpdate={updateTask} onClose={closeModal} />
//       )}
//     </div>
//   );
// };

// export default Home;
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
// import FormGroup from "../molecules/FormGroup";
// import TaskList from "../organisms/TaskList";
import Modal from "../molecules/Modal";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [searchText, setSearchText] = useState(""); // State for search input
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Light/Dark mode state

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Add new task
  const addTask = () => {
    if (taskText.trim()) {
      const newTask = { id: Date.now(), text: taskText };
      setTasks([...tasks, newTask]);
      setTaskText("");
    }
  };

  // Update existing task
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, text: updatedTask.text } : task
      )
    );
    closeModal();
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Start editing a task
  const startEditing = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setCurrentTask(null);
  };

  // Filter tasks based on search text
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchText.toLowerCase())
  );

  // Toggle light/dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`max-w-md p-4 mx-auto rounded-md ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Tso-Do App 📝</h1>
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 rounded-full dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
      </div>

      {/* Task Form */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={isEditing ? () => updateTask(currentTask) : addTask}
          className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          <FaPlus size={20} />
        </button>
      </div>

      {/* Task List */}
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 mb-2 border rounded"
          >
            <span>{task.text}</span>
            <div className="flex items-center gap-2">
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
