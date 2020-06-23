import React from "react";

const Header = ({name,heading}) => {
    return heading === "1" ? <h1>{name}</h1> : <h2>{name}</h2>
      
  }
  
  const Total = ({ parts }) => {
    const total = parts.reduce(((sum,part)=> sum + part.exercises),0)
    return(
      <p><strong> Number of exercises {total}</strong></p>
    ) 
  }
  
  const Part = ({name,exercises}) => {
    return (
      <p>
        {name} {exercises}
      </p>    
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
      </div>
    )
  }
  
  const Course = ({course}) => {
      return <>
      <Header name={course.name} heading="2"/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
  </>
  }

  export {Course, Header};