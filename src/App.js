import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Tables from "./components/Tables";
import Forms from "./components/Forms";

class App extends React.Component {
  state = {
    systemNames: ["CORES", "UNION", "RISKLINK"],
    scenarioNames: ["DE EQ", "IT EQ", "CN TC", "IN TC"],
    dataForTable: [
      {
        company: "Alfreds Futterkiste",
        contact: "Maria Anders",
        country: "Germany",
      },
    ],
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
            <Forms
              systemNames={this.state.systemNames}
              scenarioNames={this.state.scenarioNames}
              onChange={this.handleOnChange}
            />
          </div>
        </div>
        <div className="py-2 row">
          <div className="col-sm-3"></div>
          <div
            className="mx-4 py-4 col-sm-6"
            style={{ border: "1px solid black" }}
          >
            <h2>User Input Table</h2>
            <Tables tableData={this.state.dataForTable} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
