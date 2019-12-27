import React from "react";
import "./App.css";

class Display extends React.Component {
  render = () => {
    return <div className={this.props.counterColor}>{this.props.counterValue}</div>;
  };
}

export default Display;
