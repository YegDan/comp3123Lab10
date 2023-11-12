import React from 'react'

export const FormDataDisplay = (props) => {
  return (
    <div>
    <h2>Submitted Data</h2>
    <p>Email: {props.email}</p>
    <p>Name: {props.name}</p>
    <p>Address: {props.address}</p>
    <p>Address 2: {props.address2}</p>
    <p>City: {props.city}</p>
    <p>Province: {props.province}</p>
    <p>Postal Code: {props.postalCode}</p>
  </div>
  )
}

