import React from "react";
import ReactDOM from "react-dom";
import Note from "./Components/Note";
import NoteForm from "./Components/NoteForm";
import "./App.css";

class App extends React.Component {
  state = {
    notes: [
      { id: 1, title: "titre 1", text: "texte 1" },
      { id: 2, title: "titre 2", text: "texte 2" },
      { id: 3, title: "titre 3", text: "texte 3" },
    ],
    titleInput: "",
    textInput: "",
  };

  handleDelete = (id) => {
    const notes = [...this.state.notes];
    const index = notes.findIndex((note) => note.id === id);
    notes.splice(index, 1);
    this.setState({ notes });
  };

  handleAdd = (note) => {
    const notes = [...this.state.notes];
    notes.push(note);
    this.setState({ notes });
  };

  render() {
    const notes = this.state.notes.map((note) => (
      <Note note={note} key={note.id} onDelete={this.handleDelete} />
    ));

    return (
      <div>
        <h1>Bloc notes</h1>
        <NoteForm onAdd={this.handleAdd} />
        <ul>{notes}</ul>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
