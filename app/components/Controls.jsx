import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButon = () => {
      if (countdownStatus === "started") {
        return <button className="button secondary">Pause</button>;
      } else if (countdownStatus === "paused") {
        return <button className="button primary">Start</button>;
      }
    };
    return (
      <div>
        {renderStartStopButon()}
        <button className="hollow alert button">Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: PropTypes.string.isRequired
};
