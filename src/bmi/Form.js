// import React from "react";
import React, { Component } from "react";
import TextInput from "./TxtInput.js";
import Button from "./Button.js";
import Box from "./Box";
import "../styles/styles.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      height: 0,
      bmiCat: " ",
      bmi: 0,
    };
  }

  weightChanged = (weightValue) => {
    this.setState({ weight: weightValue });
  };

  heightChanged = (heightValue) => {
    this.setState({ height: heightValue });
  };

  calculateBmi = () => {
    let bmiValue =
      (this.state.weight / this.state.height / this.state.height) * 10000;
    // console.log(bmiValue);
    this.setState({ bmi: bmiValue });
    let bmiCat = this.getBmi(bmiValue);
    this.setState({ bmiCat: bmiCat });
  };

  getBmi(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  }

  render() {
    return (
      <div className="form">
        <div className="inputs d-flex">
          <TextInput
            label="Height"
            placeholder="Enter height in cm"
            onChange={this.heightChanged}
          />

          <TextInput
            label="Weight"
            placeholder="Enter weight in kg"
            onChange={this.weightChanged}
          />
        </div>

        <div className="w-100 d-flex justify-content-center">
          <Button label="CALCULATE" onClick={this.calculateBmi} />
        </div>

        <div className="result m-2">
          <Box bmi={this.state.bmi} bmiCat={this.state.bmiCat} />
        </div>
      </div>
    );
  }
}

export default Form;
