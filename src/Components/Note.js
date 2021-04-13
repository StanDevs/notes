import React from "react";

const Note = ({ note, onDelete }) => (
  <li key={note.id} className="note">
    <div className="noteTitle">{note.title}</div>
    <div className="noteDesc">{note.text}</div>
    <button className="buttonOutline" onClick={() => onDelete(note.id)}>
      <i className="bi bi-trash"></i>supprimer
    </button>
  </li>
);
export default Note;
