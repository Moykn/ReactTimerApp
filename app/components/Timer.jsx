import React, { Component } from "react";
import Controls from "Controls";
import Clock from "Clock";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerStatus: "stopped"
    };
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case "started":
          this.startTimer();
          break;
        case "stopped":
          this.setState({ count: 0 });
        case "paused":
          clearInterval(this.timer);
          delete this.timer;
          break;
      }
    }
  };
  componentWillMount = () => {
    clearInterval(this.timer);
    delete this.timer;
  };
  startTimer = () => {
    this.timer = setInterval(() => {
      const newCount = this.state.count + 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  };
  handleSetCountdown = seconds => {
    this.setState({
      count: seconds,
      timerStatus: "started"
    });
  };

  handleStatusChange = newStatus => {
    this.setState({
      timerStatus: newStatus
    });
  };
  render() {
    const { count, timerStatus } = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls
          countdownStatus={timerStatus}
          onStatusChange={this.handleStatusChange}
        />
      </div>
    );
  }
}
