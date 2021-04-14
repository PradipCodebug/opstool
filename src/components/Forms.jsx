import React from "react";
import CheckBoxes from "./CheckBoxes";
import InputField from "./InputField";
import Buttons from "./Buttons";
import Dropdowns from "./Dropdowns";

class Forms extends React.Component {
  state = { systemsName: "", accountNumber: "", scenarios: [] };

  handleOnInputChange = (e) => {
    this.setState({ accountNumber: e.target.value });
  };

  handleOnDropDownChange = (e) => {
    this.setState({ systemsName: e.target.value });
  };

  handleOnModel = () => {
    this.props.onClick(this.state);
  };

  handleOnClear = () => {
    this.setState({ accountNumber: "" });
  };

  render() {
    return (
      <form className="account-model">
        <div className="form-group row">
          <Dropdowns
            labelName="System Name"
            optionList={this.props.systemNames}
            onChange={(e) => this.handleOnDropDownChange(e)}
          />
        </div>

        <div className="form-group row">
          <InputField
            textContent="Account Number"
            fieldId="inputAccountNumber"
            value={this.state.accountNumber}
            onChange={(e) => this.handleOnInputChange(e)}
          />

          <Buttons
            btnContent="Clear"
            btnId="clear"
            onClick={this.handleOnClear}
          />
        </div>
        {this.props.scenarioNames.map((eachScenario) => (
          <CheckBoxes
            boxName={eachScenario}
            boxId={eachScenario.replace(/\s+/g, "")}
          />
        ))}

        <div className="form-group row py-3">
          <span className="col-sm-7"></span>
          <Buttons btnContent="Check" btnId="check" />
          <Buttons
            btnContent="Model"
            btnId="model"
            onClick={this.handleOnModel}
          />
        </div>
      </form>
    );
  }
}

export default Forms;
