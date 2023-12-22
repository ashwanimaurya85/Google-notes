
/*import './App.css'

import CounterToolkitExample from './components/CounterToolkitExample'
import Cal from './components/Calcuater'
import Userfrom from './components/Useref'
function App() {


  return (
    <>

    <Cal/>
    <Userfrom/>
   <CounterToolkitExample/>
    </>
  )
}

export default App
*/











import React, { useState, useEffect } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteFrom';

const App = () => {
  const [notes, setNotes] = useState(() => {
    // Initialize state with notes from localStorage or an empty array if localStorage is empty
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    return savedNotes;
  });

  useEffect(() => {
    // Save notes to local storage whenever 'notes' state changes
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const editNote = (id, updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, ...updatedNote } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Google Keep Clone</h1>
      <NoteForm addNote={addNote} />
      <NoteList
        notes={notes}
        editNote={editNote}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
