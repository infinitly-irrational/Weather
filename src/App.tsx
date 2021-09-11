import React from "react";
import "./App.css";
import Loading from "./app/Components/Loading";
// import StyledSearchBar from "./app/Components/StyledSearchBar";
// import Weather from "./app/Weather";
// import SwitchToggle from "./app/Components/SwitchToggle";
// import SearchHeader from "./app/Components/SearchHeader";
import Weather from "./app/Weather";
import WeatherCard from "./app/WeatherCard/WeatherCard";
// import TodaysWeather from "./app/TodaysWeather";
// import CityNameWeather from "./app/Functions/CityNameWeather";

function App() {
  return (
    <div className="App">
      <Weather />
      {/* <Loading /> */}
      {/* <WeatherCard /> */}
      {/* <TodaysWeather /> */}
      {/* <CityNameWeather /> */}
    </div>
  );
}

export default App;
