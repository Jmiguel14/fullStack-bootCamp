import axios from "axios";
import { useEffect, useState } from "react";
import { Countries } from "./Countries";
import { FilterCountries } from "./FilterCountries";
import { WeatherReport } from "./WeatherReport";

function App() {
  const api_key = process.env.REACT_APP_API_KEY
 
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [weatherData, setWeatherData] = useState(null)

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

  useEffect(() => {
    const city = filteredCountries.length === 1 ? filteredCountries[0].name.common : ''
    const getWeatherData = () => {
      axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
        .then(response => {
          if(!response.data.error) setWeatherData(response.data)
      })
    }
    if (city) getWeatherData()
  }, [api_key, filteredCountries])

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value)
    setWeatherData(null)
  }

  return (
    <div className="App">
      <FilterCountries keyword={keyword} onHandleKeywordChange={handleKeywordChange}/>
      <Countries filteredCountries={filteredCountries} onSetKeyword={setKeyword}/>
      {
        weatherData ? <WeatherReport weatherData={weatherData}/> : ''
      }
    </div>
  );
}

export default App;
