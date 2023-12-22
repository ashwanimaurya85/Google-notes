import React, { useState } from 'react';

const Note = ({ note, editNote, deleteNote }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [color, setColor] = useState(note.color || '#ffffff'); // Default color: white

  const handleEdit = () => {
    const updatedNote = {
      title: title,
      content: content,
      color: color, // Include color in updated note
    };
    editNote(note.id, updatedNote);
    setEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteNote(note.id);
    }
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      {editing ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
           placeholder='Chose Color Here'/>
          <button type="submit"style={{cursor:"pointer"}} >Save</button>
        </form>
      ) : (
        <div>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => setEditing(true)} style={{cursor:"pointer"}}>Edit</button>
          <button onClick={handleDelete} style={{cursor:"pointer"}}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Note;
