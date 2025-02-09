'use client'
import { useState } from 'react';

const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("")


  //copied
  const addTask = (e) => {
e.preventDefault();
console.log("clicked")
  }
  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <form onSubmit={()=>addTask(e)}>
        <div className="flex gap-2 mb-4">
          <input
            className="w-full p-2 border rounded"
            type="text"
            placeholder="New Task"
            name='newTask'
            onBlur={(e) => setNewTask(e.target.value)}
          />
         
        </div>
        <div className="flex gap-2 mb-4">
          <input
            className="w-full p-2 border rounded"
            type="text"
            placeholder="Description"
            name='description'
            onBlur={(e) => setTaskDescription(e.target.value)}
          />
       
        </div>
        <div className="flex gap-2 mb-4">
          <input
            className="w-full p-2 border rounded"
            type="date"
            placeholder="Due Date"
            name='dueDate'
            onBlur={(e) => setTaskDescription(e.target.value)}
          />
         
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;