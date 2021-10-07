import React from 'react'

export const PersonForm = ({onHandleSubmit, onHandleNameChange, onHandleNumberChange, newName, newNumber}) => {
    return (
        <form onSubmit={onHandleSubmit}>
        <div>
          name: <input onChange={onHandleNameChange} value={newName} />
          <br />
          number: <input onChange={onHandleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
