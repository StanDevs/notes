import React, { useState } from "react";

const NoteForm = (props) => {
  const [titleInput, setTitle] = useState("");
  const [textInput, setText] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const onAdd = (e) => {
    e.preventDefault();
    const note = {
      id: new Date().getTime(),
      title: titleInput,
      text: textInput,
    };
    props.onAdd(note);
    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={onAdd}>
      <label htmlFor="inputTitle">Titre</label>
      <input
        type="text"
        placeholder="Ajouter un titre"
        className="input"
        id="inputTitle"
        value={titleInput}
        onChange={handleChangeTitle}
      />
      <label htmlFor="inputText">Texte</label>
      <textarea
        className="input"
        id="inputText"
        placeholder="Ajouter un texte"
        value={textInput}
        onChange={handleChangeText}
      />
      <button className="buttonOutline">
        <i className="bi bi-plus-square"></i>Ajouter
      </button>
    </form>
  );
};

export default NoteForm;
