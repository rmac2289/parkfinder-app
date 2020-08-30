import React from "react";
import Main from "./Main";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "../Contexts/LoginContext";
import App from "../App/App";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <LoginContextProvider>
        <App>
          <Main />
        </App>
      </LoginContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
