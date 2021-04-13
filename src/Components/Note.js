import React, { Component } from "react";

const Note = ({ note, onDelete }) => (
  <li key={note.id}>
    {note.title}
    <button onClick={() => onDelete(note.id)}>X</button>
  </li>
);
export default Note;
