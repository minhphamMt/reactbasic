import React from "react";
class ChildComponent extends React.Component {
  state = {
    showjobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showjobs: !this.state.showjobs,
    });
  };
  handleDeleteJob = (job) => {
    this.props.handleDeleteData(job);
  };
  render() {
    // console.log(`>>>check value props:`, this.props);
    // let { name, age, arrjob } = this.props;
    let arrjob = this.props.abc;
    let sw = this.state.showjobs;

    return (
      <>
        {sw === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>show</button>
          </div>
        ) : (
          <>
            <div className="joblist">
              {arrjob.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                    <></>{" "}
                    <span
                      className="delete"
                      onClick={() => this.handleDeleteJob(item)}
                    >
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>hide</button>
            </div>
          </>
        )}{" "}
      </>
    );
  }
}
export default ChildComponent;
