import React from "react";
import Comment from "./Comment";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Comment
        date={Date.now()}
        subject={`test subject`}
        comment={`test comment`}
        user={`test user`}
      />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
