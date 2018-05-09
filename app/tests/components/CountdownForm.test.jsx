import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import expect from "expect";
import $ from "jQuery";

import CountdownForm from "CountdownForm";

describe("CountdownForm", () => {
  it("should exist", () => {
    expect(CountdownForm).toBeTruthy();
  });

  it("should call onSetCountdown if valid seconds entered", () => {
    const spy = expect.createSpy();
    const countdownForm = ReactTestUtils.renderIntoDocument(
      <CountdownForm onSetCountdown={spy} />
    );
    const $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.input.value = "109";
    ReactTestUtils.Simulate.submit($el.find("form").get(0));
    expect(spy).toHaveBeenCalledWith(109);
  });

  it("should not call onSetCountdown if invalid seconds entered", () => {
    const spy = expect.createSpy();
    const countdownForm = ReactTestUtils.renderIntoDocument(
      <CountdownForm onSetCountdown={spy} />
    );
    const $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.input.value = "";
    ReactTestUtils.Simulate.submit($el.find("form").get(0));
    expect(spy).toNotHaveBeenCalled();
  });
});
