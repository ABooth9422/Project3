import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './style.css'
 
class GymCalendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          className={"test bg-secondary"}
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
export default GymCalendar;