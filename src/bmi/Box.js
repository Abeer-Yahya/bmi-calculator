import React from "react";

class Box extends React.Component {
  render() {
    return (
      <>
        <div className="row w-100">
          <h3>BMI = {this.props.bmi}</h3>
        </div>
        <div className="row w-100">
          <h3> {this.props.bmiClass}</h3>
        </div>
      </>
    );
  }
}

export default Box;
