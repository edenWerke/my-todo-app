// import React, { useState, useEffect } from "react";
// import FormGroup from "../molecules/FormGroup";
// import TaskList from "../organisms/TaskList";

// const Home = () => {
//   // State to manage tasks and task input text
//   const [tasks, setTasks] = useState([]);
//   const [taskText, setTaskText] = useState("");

//   // Load tasks from localStorage when the component mounts
//   useEffect(() => {
//     const savedTasks = localStorage.getItem("tasks"); // Get tasks from localStorage
//     if (savedTasks) {
//       setTasks(JSON.parse(savedTasks)); // Parse and set tasks if they exist
//     }
//   }, []); // Empty dependency array ensures this effect runs once when the component mounts

//   // Save tasks to localStorage whenever the tasks array changes
//   useEffect(() => {
//     if (tasks.length > 0) {
//       localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to localStorage
//     }
//   }, [tasks]); // This effect runs every time the tasks array changes

//   // Function to add a new task
//   const addTask = () => {
//     if (taskText.trim()) {
//       const newTask = { id: Date.now(), text: taskText }; // Create a new task object
//       setTasks([...tasks, newTask]); // Add the new task to the tasks array
//       setTaskText(""); // Clear the input field after adding the task
//     }
//   };

//   // Function to delete a task
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id)); // Remove the task with the given id
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4 text-center">To-Do App</h1>
//       <FormGroup
//         taskText={taskText}
//         setTaskText={setTaskText}
//         addTask={addTask}
//       />
//       <TaskList tasks={tasks} onDelete={deleteTask} />
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import FormGroup from "../molecules/FormGroup";
import TaskList from "../organisms/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

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

  const addTask = () => {
    if (taskText.trim()) {
      const newTask = { id: Date.now(), text: taskText };
      setTasks([...tasks, newTask]);
      setTaskText("");
    }
  };

  const updateTask = () => {
    if (taskText.trim() && currentTask) {
      setTasks(
        tasks.map((task) =>
          task.id === currentTask.id ? { ...task, text: taskText } : task
        )
      );
      setIsEditing(false);
      setCurrentTask(null);
      setTaskText("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setTaskText(task.text);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do App</h1>
      <FormGroup
        taskText={taskText}
        setTaskText={setTaskText}
        addTask={isEditing ? updateTask : addTask}
      />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={startEditing} />
    </div>
  );
};

export default Home;
