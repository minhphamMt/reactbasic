import React from "react";
import "./List.scss";
import AddTodo from "./AddTodo";
import EditDelete from "./EditDelete";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    ListTodo: [
      { id: "todo1", title: "doing homework" },
      { id: "todo2", title: "doing code" },
      { id: "todo3", title: "doing housework" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      ListTodo: [...this.state.ListTodo, todo],
    });
    toast.success("is done!");
  };
  handleDelete = (todo) => {
    let LsTodo = this.state.ListTodo;
    LsTodo = LsTodo.filter((item, index) => {
      return item.id !== todo.id;
    });
    this.setState({
      ListTodo: LsTodo,
    });
  };
  handleEdit = (item) => {
    let editTodo = this.state.editTodo;
    let ListTodo = this.state.ListTodo;
    let empty = Object.keys(editTodo).length === 0;
    console.log(`>>>> check empty`, empty);
    if (empty === false && editTodo.id === item.id) {
      let ListTodocopy = [...ListTodo];
      let objindex = ListTodocopy.findIndex(
        (todo, index) => todo.id === item.id
      );
      ListTodocopy[objindex].title = editTodo.title;
      this.setState({
        ListTodo: ListTodocopy,
        editTodo: {},
      });
      toast.success(`complete change`);
      return;
    }
    this.setState({
      editTodo: item,
    });
  };
  handleOnChangeEdit = (event) => {
    let coppyTodo = { ...this.state.editTodo };
    coppyTodo.title = event.target.value;
    this.setState({
      editTodo: coppyTodo,
    });
  };
  render() {
    // let { ListTodo } = this.state;

    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <EditDelete
          handleOnChangeEdit={this.handleOnChangeEdit}
          editTodo={this.state.editTodo}
          ListTodo={this.state.ListTodo}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
export default ListTodo;
