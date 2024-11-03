import React, { useEffect, useState } from "react";
import Icons from "./Componentes/Icons";
import "./App.css";

function App() {
  const [search, setSearch] = useState("santo domingo");
  const [weather, setWeather] = useState();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const inputValue = e.target.value.trim();
      if (inputValue === "") return; // No hacer nada si el input está vacío
      setSearch(inputValue);
    }
  };
  const url = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&APPID=a4e392d3bd6a5cd3a0b34fae95b8c098`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }, [search]);

  return (
    <div className="contenedor">
      <div className="contenedor-s">
        <h1 className="title">Weather App</h1>
        <input
          className="input"
          type="text"
          placeholder="Buscar ciudad..."
          onKeyDown={handleSearch}
        />

        {weather && (
          <div className="information-cotainer">
            <h2 className="city">{weather.name}</h2>
            <img src={Icons(weather.weather[0].main)} alt="weather-icon" />
            <h3 className="country">{weather.sys.country}</h3>
            <p className="description">{weather.weather[0].description}</p>
            <div className="temperature">
              <p className="temp-max-min">
                <span>Mín:</span> {(weather.main.temp_min - 273.15).toFixed(1)}{" "}
                °C
              </p>
              <p className="temp-max-min">
                <span>Máx:</span> {(weather.main.temp_max - 273.15).toFixed(1)}{" "}
                °C
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
