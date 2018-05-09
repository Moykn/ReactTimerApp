import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import expect from "expect";
import $ from "jQuery";
import Controls from "Controls";

describe("Controls", () => {
  it("should exist", () => {
    expect(Controls).toBeTruthy();
  });

  it("should render pause when started", () => {
    const controls = ReactTestUtils.renderIntoDocument(
      <Controls countdownStatus="started" />
    );
    const $el = $(ReactDOM.findDOMNode(controls));
    const $pauseButton = $("button:contains(Pause)", $el);

    expect($pauseButton.length).toBe(1);
  });

  it("should render start when paused", () => {
    const controls = ReactTestUtils.renderIntoDocument(
      <Controls countdownStatus="paused" />
    );
    const $el = $(ReactDOM.findDOMNode(controls));
    const $startButton = $("button:contains(Start)", $el);

    expect($startButton.length).toBe(1);
  });
});
