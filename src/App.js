import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'Dec 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div className="App">
        <div className="title">Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl
            className="deadline-input"
            onChange={ event => this.setState({newDeadline: event.target.value}) }
          />
          <Button onClick={() => this.changeDeadline()}>submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
