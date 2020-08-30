import React, { createContext, useState, useEffect } from "react";
import ParkApiService from "../services/ParkApiService";

export const ParkContext = createContext();

export const ParkContextProvider = (props) => {
  const [park, setPark] = useState(null);
  useEffect(() => {
    ParkApiService.getParks()
      .then((data) => {
        localStorage.setItem("data", JSON.stringify(data.data));
        setPark(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <ParkContext.Provider value={[park, setPark]}>
      {props.children}
    </ParkContext.Provider>
  );
};
