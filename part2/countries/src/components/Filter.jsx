import React from 'react'

const Filter = ({filter, onChange}) => {
    return <div>
        <p>find countries</p>
        <input type='text' onChange={onChange} value={filter}/>
    </div>
}

export default Filter