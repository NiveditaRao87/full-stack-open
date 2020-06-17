import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick,text}) => {
return <button onClick={onClick}>{text}</button>
}

const Anecdote = ({votes,anecdotes}) => {
  const max = votes.reduce((a,b) => Math.max(a,b))
  if(max === 0){
    return <h2>Vote for your favourite anecdote</h2>
  } 
  const winner = votes.findIndex(elem => elem === max)
  
  //const winner = votes.indexOf(Math.max(...votes))
  return <>
  <h2>Anecdote with most votes</h2>
  <p>{anecdotes[winner]}</p>
  </>
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat))
  
  
  const handleNextClick = () => {
    setSelected(Math.floor(Math.random()*(anecdotes.length)))
  }

  const handleVoteClick = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }
  
  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <p>{anecdotes[selected]}</p>      
  <p>has {votes[selected]} votes</p>
      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleNextClick} text="next anecdote" />
      <Anecdote votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)