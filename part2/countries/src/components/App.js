import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from "./Countries";
import { FilterCountries } from "./FilterCountries";

function App() {
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries)

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    const filteredCountries = countries.filter((el) =>
    el.name.common.toLowerCase().includes(keyword.toLowerCase()))
    setFilteredCountries(filteredCountries)
  }, [keyword, countries])

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <div className="App">
      <FilterCountries keyword={keyword} onHandleKeywordChange={handleKeywordChange}/>
      <Countries filteredCountries={filteredCountries} onSetKeyword={setKeyword}/>
    </div>
  );
}

export default App;
