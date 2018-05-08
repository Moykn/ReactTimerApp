import React, { Component } from "react";
import PropTypes from "prop-types";

const pad = (number, len = 2, text = "0") => String(number).padStart(len, text);

export default class Clock extends Component {
  formatSeconds(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);
    return `${pad(minutes)}:${pad(seconds)}`;
  }
  render() {
    const { totalSeconds } = this.props;
    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
}

Clock.propTypes = {
  totalSeconds: PropTypes.number
};

Clock.defaultProps = {
  totalSeconds: 0
};
