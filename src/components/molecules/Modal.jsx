// src/molecules/Modal.js
import { useState, useEffect } from "react";

const Modal = ({ task, onUpdate, onClose }) => {
  // Ensure we are correctly receiving the task prop
  const [updatedText, setUpdatedText] = useState(task ? task.text : "");

  useEffect(() => {
    // If task changes, update the updatedText state
    if (task) {
      setUpdatedText(task.text);
    }
  }, [task]); // Dependency array ensures this runs when task prop changes

  const handleUpdate = () => {
    if (updatedText.trim()) {
      onUpdate({ ...task, text: updatedText });
      onClose(); // Close the modal after update
    }
  };

  if (!task) return null; // If task is null, return nothing

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-md w-96">
        <h3 className="text-lg font-bold mb-4">Update Task</h3>
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          className="px-4 py-2 border rounded mb-4 w-full"
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
