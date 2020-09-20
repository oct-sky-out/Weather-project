import React from "react";
import { Route } from "react-router-dom";
import WeatherMain from "./WeatherMain";


function App() {
  return <Route path="/:cityName?" component={WeatherMain} />;
}

export default App;
