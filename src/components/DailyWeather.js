import { useEffect, useState } from "react";

const API_KEY = "36a74ffeca6f9991e04cb12702a7f937";

export default function DailyWeather() {
  const [weather, setWeather] = useState();
  useEffect(() => {
    async function getCurrentWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Yerevan&appid=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setWeather(() => data);
    }
    getCurrentWeather();
  }, []);

  return (
    <div>
      {weather &&
        weather.list.map((weatherItem, index) => {
          return index <= 4 ? (
            <div key={index}>
              <span>{weatherItem.dt_txt.split(" ")[0]}</span>
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
