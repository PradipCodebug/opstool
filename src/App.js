import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import CheckBoxes from "./components/CheckBoxes";
import InputField from "./components/InputField";
import Buttons from "./components/Buttons";
import Dropdowns from "./components/Dropdowns";

class App extends React.Component {
  state = {
    systemNames: ["CORES", "UNION", "RISKLINK"],
    scenarioNames: ["DE EQ", "IT EQ", "CN TC", "IN TC"],
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="py-2 row">
          <div className="col-sm-3"></div>
          <div
            className="mx-4 py-4 col-sm-6"
            style={{ border: "1px solid black" }}
          >
            <form className="account-model">
              <div className="form-group row">
                <Dropdowns
                  labelName="System Name"
                  optionList={this.state.systemNames}
                />
              </div>

              <div className="form-group row">
                <InputField
                  textContent="Account Number"
                  fieldId="inputAccountNumber"
                />

                <Buttons btnContent="Clear" btnId="clear" />
              </div>
              {this.state.scenarioNames.map((eachScenario) => (
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
