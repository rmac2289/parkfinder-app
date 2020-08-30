import React from "react";
import CommentList from "./CommentList";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CommentsContextProvider } from "../Contexts/CommentsContext";
import { ParkNameContextProvider } from "../Contexts/ParkNameContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <CommentsContextProvider>
        <ParkNameContextProvider>
          <CommentList />
        </ParkNameContextProvider>
      </CommentsContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
