import React from "react";
import AddComponent from "./AddComponent.js";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    arrjob: [
      { id: `1`, title: `minh`, salary: `500` },
      { id: `2`, title: `ha`, salary: `300` },
      { id: `3`, title: `thanh`, salary: `400` },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      arrjob: [...this.state.arrjob, job],
    });
  };
  handleDeleteData = (job) => {
    let crrjob = this.state.arrjob;
    crrjob = crrjob.filter((item, index) => {
      return item.id !== job.id;
    });
    this.setState({
      arrjob: crrjob,
    });
  };
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          name={`minh`}
          age={`19`}
          abc={this.state.arrjob}
          handleDeleteData={this.handleDeleteData}
        />
      </>
    );
  }
}

export default MyComponent;
