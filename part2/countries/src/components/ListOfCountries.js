import React from 'react'

export const ListOfCountries = ({filteredCountries}) => {
    return filteredCountries.map((el) => <p key={el.area}>{el.name.common}</p>)
}
