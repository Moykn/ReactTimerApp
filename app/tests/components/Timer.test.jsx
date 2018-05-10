import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import expect from "expect";
import $ from "jQuery";

import Timer from "Timer";

describe("Timer", () => {
  it("should exist", () => {
    expect(Timer).toBeTruthy();
  });

  it("should start Timer on started status", done => {
    const timer = ReactTestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange("started");
    expect(timer.state.count).toBe(0);
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe("started");
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it("should pause Timer on paused status", done => {
    const timer = ReactTestUtils.renderIntoDocument(<Timer />);
    timer.setState({ count: 10 });
    timer.handleStatusChange("started");
    timer.handleStatusChange("paused");
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe("paused");
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);
  });

  it("should stop Timer on stopped status", done => {
    const timer = ReactTestUtils.renderIntoDocument(<Timer />);
    timer.setState({ count: 10 });
    timer.handleStatusChange("started");
    timer.handleStatusChange("stopped");
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe("stopped");
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);
  });
});
