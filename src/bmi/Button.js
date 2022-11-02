import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} className=" btn btn-dark w-75">
        {this.props.label}
      </div>
    );
  }
}

export default Button;
