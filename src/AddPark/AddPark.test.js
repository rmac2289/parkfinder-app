import React from "react";
import AddPark from "./AddPark";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AddPark />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
