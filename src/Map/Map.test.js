import React from "react";
import Map from "./Map";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import { LoginContextProvider } from "../Contexts/LoginContext";
import { ActivityContextProvider } from "../Contexts/ActivitiesContext";
import { ParkNameContextProvider } from "../Contexts/ParkNameContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ParkNameContextProvider>
        <ActivityContextProvider>
          <LoginContextProvider>
            <Main>
              <Map />
            </Main>
          </LoginContextProvider>
        </ActivityContextProvider>
      </ParkNameContextProvider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
