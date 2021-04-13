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
      <label htmlFor="inputTitle">Le titre :</label>
      <input
        type="text"
        placeholder="Ajouter un titre"
        id="inputTitle"
        value={titleInput}
        onChange={handleChangeTitle}
      />
      <label htmlFor="inputText">Le texte :</label>
      <textarea
        id="inputText"
        placeholder="Ajouter un texte"
        value={textInput}
        onChange={handleChangeText}
      />
      <button>Ajouter</button>
    </form>
  );
};

export default NoteForm;
