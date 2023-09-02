import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error(`missing data!`);
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  handleOnchangeTitle = (title) => {
    this.setState({
      title: title.target.value,
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(todo, index) => this.handleOnchangeTitle(todo)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleAddTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddTodo;
