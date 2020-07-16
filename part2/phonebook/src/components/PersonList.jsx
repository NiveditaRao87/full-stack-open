import React from 'react'
import Person from './Person'

// If search field is empty, it will render the entire persons array
const PersonList = ({filter,persons,onClick}) => {
    
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    if(filteredPersons.length === 0){
        return <h2>No persons matching the criteria were found</h2>
    } 
    return <div>
        <h2>Numbers</h2>
        {filteredPersons.map(filteredPerson => 
        <Person key={filteredPerson.name} name={filteredPerson.name} number={filteredPerson.number} onClick={() => onClick(filteredPerson)} />)}    
        </div>

}

export default PersonList