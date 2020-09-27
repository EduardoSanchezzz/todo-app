import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <div className="checkboc-wrapper">
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
              className="checkbox"
            />{" "}
            <label className="todo-item-text">{title}</label>
          </div>

          <button
            className="btn-del"
            style={btnStyle}
            onClick={this.props.delTodo.bind(this, id)}
          >
            DELETE
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
const btnStyle = {
  background: "#f33",
  color: "#fff",
  border: "none",
  padding: "20px 8px",
  borderRadius: "10%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
