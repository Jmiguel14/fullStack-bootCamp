import React from 'react'
import { ListOfLanguages } from './ListOfLanguages'

export const SingleCountry = ({filteredCountries}) => {
    return (
        <div>
            <h3>{filteredCountries[0].name.common}</h3>
            <p>capital {filteredCountries[0].capital[0]}</p>
            <p>continent {filteredCountries[0].continents[0]}</p>
            <ListOfLanguages filteredCountries={filteredCountries}/>
            <img src={filteredCountries[0].flags.png} alt={filteredCountries[0].name.common}/>
        </div>
    )
}
