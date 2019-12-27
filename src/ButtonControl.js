import React from "react";
import "./App.css";

class ButtonControl extends React.Component {
  render = () => {
    return (
      <span>
        <button onClick={this.props.changeValue}>{this.props.btnName}</button>
      </span>
    );
  };
}

export default ButtonControl;
