import React from "react";

class TxtInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = (event) => {
    console.log(this);
    let inputValue = event.target.value;
    this.setState({ value: inputValue });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div className="inputF d-flex flex-column m-4">
        <label className="text-center">{this.props.label}</label>
        <input
          type="text"
          className="my-4"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TxtInput;
