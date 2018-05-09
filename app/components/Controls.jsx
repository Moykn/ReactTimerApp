import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  onStatusChange = newStatus => {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  };
  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButon = () => {
      if (countdownStatus === "started") {
        return (
          <button
            className="button secondary"
            onClick={this.onStatusChange("paused")}
          >
            Pause
          </button>
        );
      } else if (countdownStatus === "paused") {
        return (
          <button
            className="button primary"
            onClick={this.onStatusChange("started")}
          >
            Start
          </button>
        );
      }
    };
    return (
      <div className="controls">
        {renderStartStopButon()}
        <button
          className="hollow alert button"
          onClick={this.onStatusChange("stopped")}
        >
          Clear
        </button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired
};
