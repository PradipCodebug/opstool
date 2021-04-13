import React from "react";
import CheckBoxes from "./CheckBoxes";
import InputField from "./InputField";
import Buttons from "./Buttons";
import Dropdowns from "./Dropdowns";

class Forms extends React.Component {
  state = { systemsName: "", accountNumber: "", scenarios: "" };

  handleOnChange = (e) => {
    this.setState({ systemsName: e.target.value });
  };

  render() {
    return (
      <form className="account-model">
        <div className="form-group row">
          <Dropdowns
            labelName="System Name"
            optionList={this.props.systemNames}
          />
        </div>

        <div className="form-group row">
          <InputField
            textContent="Account Number"
            fieldId="inputAccountNumber"
            value={this.state.systemsName}
            onChange={(e) => this.handleOnChange(e)}
          />

          <Buttons btnContent="Clear" btnId="clear" />
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
          <Buttons btnContent="Model" btnId="model" />
        </div>
      </form>
    );
  }
}

export default Forms;
