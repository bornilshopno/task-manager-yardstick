import dbConnect from '@/library/mongo';
import React from 'react';

const MyTasks = async() => {
    const tasksCollection= dbConnect("tasks")
const tasks= await tasksCollection.find({}).toArray()
    return (
        <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
            myTasks
        </div>
    );
};

export default MyTasks;