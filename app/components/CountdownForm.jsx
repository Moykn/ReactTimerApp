import React, { Component } from "react";

export default class CountdownForm extends Component {
  form;
  input;
  onSubmitHandler = e => {
    e.preventDefault();
    const strSeconds = this.input.value;
    if (/^\d*$/.test(strSeconds)) {
      this.input.value = "";
      this.props.onSetCountdown(Number(strSeconds));
    }
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmitHandler}
          ref={node => {
            this.form = node;
          }}
          className="countdown-form"
        >
          <input
            type="number"
            ref={node => {
              this.input = node;
            }}
            placeholder="Enter time in seconds"
          />
          <button className="expanded hollow button">Start</button>
        </form>
      </div>
    );
  }
}
