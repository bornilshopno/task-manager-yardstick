
import dbConnect from '@/library/mongo';
import React from 'react';

const MyTasks = async () => {
    const tasksCollection = dbConnect("tasks")
    const tasks = await tasksCollection.find({}).toArray()
    console.log(tasks)
    return (
        <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
            <h1>My Tasks</h1>
            <hr/>

           <ul>
           {
                (tasks?.length>0) ?
                (
                    tasks.map((task) => (
                      <li
                      key={task._id}
                      className="flex justify-between items-center p-2 border-b"
                    >
                      <span
                        className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
                        // onClick={() => toggleComplete(task._id, task.completed)}
                      >
                        {task.task}
                      </span>
                      <div className='flex gap-5'>
                      <button
                        className="text-blue-500"
                        // onClick={() => deleteTask(task._id)}
                      >
                        Update
                      </button>
                      <button
                        className="text-red-500"
                        // onClick={() => deleteTask(task._id)}
                      >
                        ✕
                      </button>
                      </div>
                    </li>
                    ))
                  )
                :
                (
                    <p>No tasks found</p>
                  )
            }
           </ul>
        </div>
    );
};

export default MyTasks;