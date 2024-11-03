// Icons.js
const Icons = (weatherDescription) => {
  switch (weatherDescription) {
    case "Thunderstorm":
      return "icons/thunderstorms-rain.svg";
    case "Drizzle":
      return "icons/drizzle.svg";
    case "Rain":
      return "icons/rain.svg";
    case "Snow":
      return "icons/snowy.svg";
    case "Clear":
      return "icons/clear-day.svg";
    case "Atmosphere":
      return "icons/weather.svg";
    case "Clouds":
      return "icons/fog.svg";
    case "Fog":
      return "icons/fog.svg";
    case "Haze":
      return "icons/haze.svg";
    case "Smoke":
      return "icons/smoke.svg";
    default:
      return "icons/clear-day.svg"; // Valor por defecto
  }
};

export default Icons;
