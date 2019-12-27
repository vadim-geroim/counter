import React from 'react';
import './App.css';
import Display from './Display';
import ButtonControl from './ButtonControl';


class App extends React.Component {

  state = {
    counterValue: 1,
    resetStatus: false,
    incStatus: true
  }

  changeValue = () => {
    let newValue = this.state.counterValue + 1;
    this.setState({
      counterValue: newValue
    })
  }

  resetValue = () => {
    let newValue = 0;
    this.setState({
      counterValue: newValue
    })
  }

  render = () => {
    return(
      <div className="App">
        <Display counterValue={this.state.counterValue}/>
        <br />
        <br />
        <div>
          <ButtonControl functionOnClick={this.changeValue} btnName={"inc"}/>
          <ButtonControl functionOnClick={this.resetValue} btnName={"reset"}/>
        </div>
      </div>
    );
  } 
}

export default App;
