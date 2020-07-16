import React from 'react'
import Country from './Country'
import CountryItem from './CountryItem'

const Result = ({countries,filter,onClick}) => {
    
    if (filter === '') return null
    
    const matches = countries.filter(country=>country.name.toLowerCase().includes(filter.toLowerCase()))

    return matches.length > 10 ? <p>Too many matches, specify another filter</p>
    : matches.length > 1 ? <ul>{matches.map(country => <CountryItem key={country.name} country={country} onClick={onClick} />)}</ul>
    : matches.length === 1 ?  <Country country={matches[0]} />
    : <p>Found no countries matching this filter</p>
   
}

export default Result