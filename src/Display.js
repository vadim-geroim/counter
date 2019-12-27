import React from "react";
import "./App.css";

class Display extends React.Component {
  render = () => {
    return <div>{this.props.counterValue}</div>;
  };
}

export default Display;
