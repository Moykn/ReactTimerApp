import React, { Component } from "react";
import Clock from "Clock";
import CountdownForm from "CountdownForm";

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countDownStatus: "stopped"
    };
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.countDownStatus !== prevState.countDownStatus) {
      switch (this.state.countDownStatus) {
        case "started":
          this.startTimer();
          break;
        default:
          break;
      }
    }
  };
  startTimer = () => {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  };
  handleSetCountdown = seconds => {
    this.setState({
      count: seconds,
      countDownStatus: "started"
    });
  };
  render() {
    var { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
}
