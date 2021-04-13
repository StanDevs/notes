import { Component } from "react";

class NoteForm extends Component {
  state = { titleInput: "", textInput: "" };

  handleChangeTitle = (event) => {
    this.setState({ titleInput: event.target.value });
  };

  handleChangeText = (event) => {
    this.setState({ textInput: event.target.value });
  };

  onAdd = (e) => {
    e.preventDefault();
    const note = {
      id: new Date().getTime(),
      title: this.state.titleInput,
      text: this.state.textInput,
    };
    this.props.onAdd(note);
    this.setState({ titleInput: "", textInput: "" });
  };

  render() {
    return (
      <form onSubmit={this.onAdd}>
        <label htmlFor="inputTitle">Le titre :</label>
        <input
          type="text"
          placeholder="Ajouter un titre"
          id="inputTitle"
          value={this.state.titleInput}
          onChange={this.handleChangeTitle}
        />
        <label htmlFor="inputText">Le texte :</label>
        <textarea
          id="inputText"
          placeholder="Ajouter un texte"
          value={this.state.textInput}
          onChange={this.handleChangeText}
        />
        <button>Ajouter</button>
      </form>
    );
  }
}

export default NoteForm;
