import React from "react";
import Nav from "./Nav";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "../Contexts/LoginContext";
import { RedirectContextProvider } from "../Contexts/RedirectContext";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <LoginContextProvider>
        <RedirectContextProvider>
          <Nav />
        </RedirectContextProvider>
      </LoginContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
