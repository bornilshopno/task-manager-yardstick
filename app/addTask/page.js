'use client'
import React, { useState } from 'react';

const AddTask = () => {
    const [newTask, setNewTask] = useState("");

    //copied
   const addTask=()=>{

   }
    return (
        <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg"> 
            <div className="flex gap-2 mb-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTask}>
          Add
        </button>
      </div>
        </div>
    );
};

export default AddTask;