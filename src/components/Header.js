import { useContext } from "react";
import { weatherContext } from "../App";
export default function Header() {
  const { queryText, setQueryText } = useContext(weatherContext);

  return (
    <header>
      <form>
        <input
          type="text"
          placeholder="Search City"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
        />
        {/* <input type="submit" value="Search City" /> */}
      </form>
    </header>
  );
}
