import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HireForm(props) {
  const { person, handleClickHirePerson } = props
  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  
  function handleSubmit(event) {
    event.preventDefault()

    const personToHire = { ...person, wage: parseFloat(wage) };
    handleClickHirePerson(personToHire)

    navigate('/')
    
  }

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
      {/* <Link to="/">
        <button type="submit" onClick={(e) => {handleSubmit(e, person)}}>Hire</button>
        <button type="submit" onClick={handleSubmit}>Hire</button>
      </Link> */}
      {/* <button type="submit" onClick={() => {handleSubmit}}>Hire</button> */}

      {/* <button type="submit" onClick={handleSubmit}>Hire</button> */}
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
