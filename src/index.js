import React, { useState } from "react";
import ReactDOM from "react-dom";
import Note from "./Components/Note";
import NoteForm from "./Components/NoteForm";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Regarder des tutos sur Redux",
      text: "Redux c'est dur, il faut regarder des tutos",
    },
    {
      id: 2,
      title: "Faire la spec",
      text: "Il faut faire la spec pour Jeudi (contacter Natacha",
    },
    {
      id: 3,
      title: "Faire les maquettes",
      text: "Il faut aussi faire les maquettes",
    },
  ]);

  const handleDelete = (id) => {
    const notesDel = [...notes];
    const index = notesDel.findIndex((note) => note.id === id);
    notesDel.splice(index, 1);
    setNotes(notesDel);
  };

  const handleAdd = (note) => {
    const notesAdd = [...notes];
    notesAdd.push(note);
    setNotes(notesAdd);
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm onAdd={handleAdd} />
      <ul className="notesListe">
        {notes.map((note) => (
          <Note note={note} key={note.id} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
