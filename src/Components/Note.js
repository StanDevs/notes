import React, { Component } from "react";

class Note extends Component {
  render() {
    // const note = this.props.note;
    // const onDelete = this.props.onDelete;
    const { note, onDelete } = this.props;
    return (
      <li key={note.id}>
        {note.title}
        <button onClick={() => onDelete(note.id)}>X</button>
      </li>
    );
  }
}

export default Note;
