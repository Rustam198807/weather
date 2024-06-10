import { createContext, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";
import Header from "./components/Header";
import HourlyWeather from "./components/HourlyWeather";

export const weatherContext = createContext();

function App() {
  const [queryText, setQueryText] = useState("");
  return (
    <weatherContext.Provider value={{ queryText, setQueryText }}>
      <div className="App">
        <Header />
        <div className="top_section">
          <CurrentWeather />
          <HourlyWeather />
        </div>
        <DailyWeather />
      </div>
    </weatherContext.Provider>
  );
}

export default App;
