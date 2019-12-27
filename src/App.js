import React from 'react';
import './App.css';
import Display from './Display';
import ButtonControl from './ButtonControl';


class App extends React.Component {

  state = {
    counterValue: 1
  }

  changeValue = () => {
    alert("hey");
  }

  render = () => {
    return(
      <div className="App">
        <Display counterValue={this.state.counterValue}/>
        <br />
        <br />
        <div>
          <ButtonControl changeValue={this.changeValue} btnName={"inc"}/>
          <ButtonControl btnName={"reset"}/>
        </div>
      </div>
    );
  } 
}

export default App;
