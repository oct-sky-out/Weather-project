import React from "react";
import "./WeatherInfo.scss";

function mainIcon(main) {
  switch (main) {
    case "Clear":
      return (
        <span role="img" aria-label="weather">
          🔆
        </span>
      );
    case "TunderStorm":
      return (
        <span role="img" aria-label="weather">
          ⛈️
        </span>
      );
    case "Drizzle":
      return (
        <span role="img" aria-label="weather">
          🌦️
        </span>
      );
    case "Snow":
      return (
        <span role="img" aria-label="weather">
          ⛄
        </span>
      );
    case "Clouds":
      return (
        <span role="img" aria-label="weather">
          ☁️
        </span>
      );
    case "Rain":
      return (
        <span role="img" aria-label="weather">
          🌧️
        </span>
      );
    default:
      return (
        <span role="img" aria-label="weather">
          🤔 이모티콘 로드실패
        </span>
      );
  }
}

function WeatherInfo({ weather }) {
  const { name, main, wind } = weather;
  const { temp, temp_max, temp_min, feels_like, humidity } = main;
  const { speed } = wind;

  return (
    <div className="WeatherInfo">
      <div className="city-name">{name}</div>
      <div className="weather-emoji">
        {mainIcon(weather.weather.map((val) => val.main).join(""))}
      </div>
      <div className="weather-temp">현재온도 : {temp}°C</div>
      <div className="weather-temps">
        최고 온도 : {temp_max}°C 최저 온도 : {temp_min}°C
      </div>
      <div className="weather-temps">체감온도 : {feels_like}°C</div>
      <div className="weather-info">
        <span role="img" aria-label="humidity">
          💦습도 : {humidity}%
        </span>
        <span role="img" aria-label="wind-speed">
          🍃풍속 : {speed}m/s
        </span>
      </div>
    </div>
  );
}

export default WeatherInfo;
