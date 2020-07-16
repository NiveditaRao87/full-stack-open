import React from 'react'

const CountryItem = ({country,onClick}) => {
// const CountryItem = ({country}) => {
    return <li>
        <span>{country.name}</span>
        <button value={country.name} onClick={onClick}>show</button>
    </li>
}

export default CountryItem