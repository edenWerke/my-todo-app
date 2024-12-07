// src/pages/Home.js
import React, { useState, useEffect } from "react";
import FormGroup from "../molecules/FormGroup";
import TaskList from "../organisms/TaskList";
import Modal from "../molecules/Modal"; // Import the Modal

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

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
    setIsModalOpen(true); // Open the modal when editing starts
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setIsEditing(false);
    setCurrentTask(null);
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

      {/* Conditionally render the modal */}
      {isModalOpen && (
        <Modal task={currentTask} onUpdate={updateTask} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
