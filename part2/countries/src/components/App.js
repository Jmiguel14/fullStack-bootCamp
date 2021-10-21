import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from "./Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter((el) =>
    el.name.common.toLowerCase().includes(keyword.toLowerCase())
  );
  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <div className="App">
      <p>
        find countries <input value={keyword} onChange={handleKeywordChange} />
      </p>
      <Countries filteredCountries={filteredCountries}/>
    </div>
  );
}

export default App;
