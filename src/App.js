import React, { Component } from 'react';
import Calendar from 'rc-calendar';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: 'Jan 1, 2020',
      newDate: ''
    }
  }

  changeDate() {
    this.setState({ date: this.state.newDate})
  }

  render() {
    return (
      <div className="App">
        <div className="title">{this.state.date} until {this.state.date}</div>
        <Clock
          date={this.state.date}
        />
        <Form inline>
          <FormControl
            className="date-input"
            onChange={ event => this.setState({newDate: event.target.value}) }
          />
          <Button onClick={() => this.changeDate()}>submit</Button>
        </Form>
        <Calendar
          className="calendar"
        />
      </div>
    );
  }
}

export default App;
