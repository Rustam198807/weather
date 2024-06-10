import { useContext, useEffect, useState } from "react";
import styles from "./CurrentWeather.module.css";
import { weatherContext } from "../App";

const API_KEY = "36a74ffeca6f9991e04cb12702a7f937";

export default function CurrentWeather() {
  const [weather, setWeather] = useState();
  const [error, setError] = useState(null);
  const { queryText } = useContext(weatherContext);

  useEffect(() => {
    setWeather();
    async function getCurrentWeather() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            queryText ? queryText : "Yerevan"
          }&appid=${API_KEY}`
        );
        if (!res.ok) throw new Error();
        const data = await res.json();
        setWeather(() => data);
      } catch (error) {
        console.log(error.message);
        setError("Entered value is not found");
      }
    }
    getCurrentWeather();
  }, [queryText]);

  return (
    <div className={styles.current_weather}>
      {weather ? (
        <div>
          <h3>{weather?.name}</h3>
          <h2>{weather?.main.temp}</h2>
          <img
            alt="icon"
            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          />
          <h4>{weather?.weather[0].main}</h4>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : null}
    </div>
  );
}
