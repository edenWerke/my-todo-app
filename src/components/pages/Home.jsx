import React, { useState } from "react";
import FormGroup from "../molecules/FormGroup";
import TaskList from "../organisms/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskText }]);
      setTaskText("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do App</h1>
      <FormGroup taskText={taskText} setTaskText={setTaskText} addTask={addTask} />
      <TaskList tasks={tasks}
       onDelete={deleteTask}
        />
    </div>
  );
};

export default Home;
