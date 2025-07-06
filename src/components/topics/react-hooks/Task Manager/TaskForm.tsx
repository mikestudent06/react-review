import React, { useState } from 'react'

const TaskForm = () => {
    const [task, settask] = useState("")
    const handleAddTask = (e) => {
        e.preventDefault()
        alert(`Task added: ${task}`)
    }
    return (
        <div>
            <input type="text" value={task} onChange={(e) => settask(e.target.value)} onKeyDown={(e) => {
                if (e.key == "Enter" && task.trim() !== "") {
                    handleAddTask(e)
                    settask("") // Clear the input after adding the task
                }
            }} placeholder='Add task' />
            {task}
        </div>
    )
}

export default TaskForm