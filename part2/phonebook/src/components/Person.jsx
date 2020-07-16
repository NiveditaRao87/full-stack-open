import React from 'react'

const Person = ({name,number,onClick}) => {
    return <div>
        <span>{name} {number} </span>
        <button onClick={onClick}>delete</button>
    </div>
}

export default Person