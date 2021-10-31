import React from "react";
import Calculator from "./components/Calculator";

export default class App extends React.Component {
  render() {
    return (
      <div style={{ margin: "0px auto", width: "100%" }}>
        <Calculator />
      </div>
    );
  }
}
