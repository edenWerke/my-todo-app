// src/pages/Home.js
import { useState, useEffect } from "react";
import FormGroup from "../molecules/FormGroup";
import TaskList from "../organisms/TaskList";
import Modal from "../molecules/Modal";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [searchText, setSearchText] = useState(""); // State for search input
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, text: updatedTask.text } : task
      )
    );
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

  return (
    <div className="max-w-md p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-center">To-Do App</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
      </div>

      <FormGroup
        taskText={taskText}
        setTaskText={setTaskText}
        addTask={isEditing ? updateTask : addTask}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onEdit={startEditing}
      />

      {isModalOpen && (
        <Modal task={currentTask} onUpdate={updateTask} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
