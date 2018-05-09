import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import expect from "expect";
import $ from "jQuery";
import Clock from "Clock";

describe("Clock", () => {
  it("should exist", () => {
    expect(Clock).toBeTruthy();
  });

  describe("render", () => {
    it("should render clock to output", () => {
      const clock = ReactTestUtils.renderIntoDocument(
        <Clock totalSeconds={62} />
      );
      const $el = $(ReactDOM.findDOMNode(clock));
      const actualText = $el.find(".clock-text").text();

      expect(actualText).toBe("01:02");
    });
  });

  describe("formatSeconds", () => {
    it("should format seconds", () => {
      const clock = ReactTestUtils.renderIntoDocument(<Clock />);
      const seconds = 615;
      const expected = "10:15";
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it("should format seconds when min/sec are less than 10", () => {
      const clock = ReactTestUtils.renderIntoDocument(<Clock />);
      const seconds = 61;
      const expected = "01:01";
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
