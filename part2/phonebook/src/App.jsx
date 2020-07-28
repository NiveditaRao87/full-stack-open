import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import phoneService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filter, setFilter] = useState('')
  const [notification, setNotification] = useState({message: null,type: null})

  useEffect(() => {phoneService
  .getAll()
  .then(initialData => {
    setPersons(initialData)
  })},[])

  const handleNameChange = (event) => {
        setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  const handleNotification = (message,type) => {
  // Type to indicate if its an error message or a notification
    setNotification({message,type})
    setTimeout(() => {
      setNotification({message: null})
    }, 5000)
  }
  const handleUpdate = () => {
    
    const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase() ) 

    window.confirm(`${person.name} is already present in the phonebook, replace old number with the new one?`) &&
    phoneService
    .update(person.id,{...person,number:newNumber})
    .then(returnedPerson => {setPersons(persons.map(p=>p.id !== person.id ? p : returnedPerson))
      handleNotification(`The number for ${returnedPerson.name} was updated`,'message')})
      .catch(()=> {handleNotification(`${person.name} was already removed from server`,'error')
      setPersons(persons.filter(p=>p.id !== person.id))
    })
  }
  
  const handleAddPerson = (event) => {
    event.preventDefault()

    setFilter('')
    
    newName === '' ? handleNotification('Person field cannot be empty','error')
    : newNumber === '' ? handleNotification('Number field cannot be empty','error')
    : persons.find(person => person.name.toLowerCase() === newName.toLowerCase() ) 
    ? handleUpdate()
    :phoneService
    .create({name: newName,number: newNumber})
    .then(returnedPerson => {setPersons(persons.concat(returnedPerson))
    handleNotification(`${returnedPerson.name} was added to phonebook`,'message')})
    .catch(err=>handleNotification(err.response.data.error,'error'))
    setNewName('')
    setNewNumber('')

  }

  const handleDelete = (person) => {
    window.confirm(`Delete ${person.name}?`) &&
    phoneService
    .deletePerson(person.id)
    .then(() => {setPersons(persons.filter(p=>p.id !== person.id))
    handleNotification(`${person.name} was deleted from phoneBook`,'message')})
    .catch(()=> {handleNotification(`${person.name} was already deleted from server`,'error')
            setPersons(persons.filter(p=>p.id !== person.id))
  })
  }

  return (<div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter filter={filter} onChange={handleFilterChange} />
      <h3>Add a new person</h3>
      <PersonForm onSubmit={handleAddPerson} onNameChange={handleNameChange} onNumberChange={handleNumberChange} 
      name={newName} number={newNumber}/>
      <PersonList filter={filter} persons={persons} onClick={handleDelete}/>
      </div>
  )
}

export default App