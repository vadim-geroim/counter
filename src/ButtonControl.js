import React from "react";
import "./App.css";

class ButtonControl extends React.Component {
  render = () => {
    return (
      <span>
        <button>{this.props.btnName}</button>
      </span>
    );
  };
}

export default ButtonControl;
