import React from 'react'

export const InputForm = ({ label, type, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{ label }</label>
      <br/>
      <input 
        type={ type } 
        className="form-control"
        autoComplete="off"
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    </div>
  )
}
