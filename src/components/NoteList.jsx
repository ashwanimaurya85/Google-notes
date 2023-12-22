import React from 'react';

import Note from './Note';
const NoteList = ({ notes, editNote, deleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;






