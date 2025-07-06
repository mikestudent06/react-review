import React from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList';

const TasksMain = () => {
    return (
        <div>
            <h1>Tasks APp</h1>

            <TaskForm />
            <TaskList />
        </div>
    )
}

export default TasksMain
