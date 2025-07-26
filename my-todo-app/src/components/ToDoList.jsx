import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, deleteTask, toggleComplete, editTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
