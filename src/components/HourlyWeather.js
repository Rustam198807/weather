import { useContext, useEffect, useState } from "react";
import styles from "./HourlyWeather.module.css";
import { weatherContext } from "../App";

const API_KEY = "36a74ffeca6f9991e04cb12702a7f937";

export default function HourlyWeather() {
  const [weather, setWeather] = useState();
  const { queryText } = useContext(weatherContext);
  useEffect(() => {
    async function getCurrentWeather() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${
            queryText ? queryText : "Yerevan"
          }&appid=${API_KEY}`
        );
        if (!res.ok) throw new Error();
        const data = await res.json();
        setWeather(() => data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCurrentWeather();
  }, [queryText]);

  return (
    <div className={styles.hourly_weather}>
      {weather &&
        weather.list.map((weatherItem, index) => {
          return index <= 7 ? (
            <div key={index}>
              <span>{weatherItem.dt_txt.split(" ")[1]}</span>
              <span>{weatherItem.main.temp}</span>
              <img
                alt="icon"
                src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`}
              />
            </div>
          ) : null;
        })}
    </div>
  );
}
