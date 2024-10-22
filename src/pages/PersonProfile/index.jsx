import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const { id } = useParams();
  const [person, setPerson] = useState(null)

  // useEffect(() => {
  //   if (id) {
  //     const matchingPerson = 
      
  //   }
  // })

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
