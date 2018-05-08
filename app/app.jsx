import React, { Component } from "react";
import { render } from "react-dom";
import { Route, Router, IndexRoute, hashHistory } from "react-router";
import Main from "Main";
import Timer from "Timer";
import Countdown from "Countdown";

//load Foundation
import "style-loader!css-loader!foundation-sites/dist/css/foundation.min.css";
import "style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css";
import "style-loader!css-loader!sass-loader!applicationStyles";

$(document).foundation();

render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById("app")
);
