import React from 'react'


const Option = ({ place }) => {
  const {
    city
  } = place
  return (
    <option>{city}</option>
  )
}

export default Option
