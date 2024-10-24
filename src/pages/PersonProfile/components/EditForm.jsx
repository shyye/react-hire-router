import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HireForm(props) {
  const { person, handleClickEditPerson } = props
  const [wage, setWage] = useState(0)
  
  function handleSubmit(event) {
    event.preventDefault()
    if (wage === 0) {
      alert('Please enter a valid wage (can\'t be 0)')
      return      
    }
    const personToEdit = { ...person, wage: parseFloat(wage) };
    handleClickEditPerson(personToEdit)    
  }

  useEffect(() => {
    setWage(person.wage)
  }, [person.wage])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Update</button>
    </form>
  )
}

export default HireForm
