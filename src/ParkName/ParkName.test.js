import React from "react";
import ParkName from "./ParkName";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

const getParkName = () => {};
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ParkName getName={getParkName} parkName={`test park name`} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
