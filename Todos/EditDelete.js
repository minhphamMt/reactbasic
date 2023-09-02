import React from "react";
import { toast } from "react-toastify";
// import ListTodo from "./ListTodo";
class EditDelete extends React.Component {
  handleEdit = (item) => {
    this.props.handleEdit(item);
  };
  handleDelete = (item) => {
    this.props.handleDelete(item);
    toast.success(`delete success!`);
  };
  handleOnChangeEdit = (event) => {
    this.props.handleOnChangeEdit(event);
  };
  render() {
    let ListTodo = this.props.ListTodo;
    let editTodo = this.props.editTodo;
    let empty = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-content">
        {ListTodo &&
          ListTodo.length > 0 &&
          ListTodo.map((item, index) => {
            return (
              <div className="todo-child" key={item.id}>
                {empty === true ? (
                  <span>
                    {index + 1}- {item.title}
                  </span>
                ) : (
                  <>
                    {editTodo.id === item.id ? (
                      <span>
                        {" "}
                        {index + 1}-
                        <input
                          value={editTodo.title}
                          onChange={(event, index) =>
                            this.handleOnChangeEdit(event)
                          }
                        />
                      </span>
                    ) : (
                      <span>
                        {index + 1}- {item.title}
                      </span>
                    )}
                  </>
                )}
                <button
                  className="button-delete"
                  onClick={() => this.handleDelete(item)}
                >
                  delete
                </button>
                <button onClick={() => this.handleEdit(item)}>
                  {empty === false && editTodo.id === item.id ? `save` : `edit`}
                </button>
              </div>
            );
          })}
      </div>
    );
  }
}
export default EditDelete;
