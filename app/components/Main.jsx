import React from "react";
import Navigation from "Navigation";

const Main = props => (
  <div>
    <div>
      <div>
        <Navigation />
        {props.children}
      </div>
    </div>
  </div>
);

export default Main;
