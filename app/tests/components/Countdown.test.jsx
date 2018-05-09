import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import expect from "expect";
import $ from "jQuery";

import Countdown from "Countdown";

describe("Countdown", () => {
  it("should exist", () => {
    expect(Countdown).toBeTruthy();
  });
  describe("handleSetCountDown", () => {
    it("should set state to started and countdown", done => {
      const countdown = ReactTestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countDownStatus).toBe("started");

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it("should no set count to less than zero", done => {
      const countdown = ReactTestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});
