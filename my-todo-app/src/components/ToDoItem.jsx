import React, { useState } from 'react';

function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="todo-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            type="text"
          />
        ) : (
          <span>{task.text}</span>
        )}
      </div>
      <div className="todo-actions">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;
