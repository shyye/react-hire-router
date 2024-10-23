import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const { people, handleClickHirePerson } = props
  const { id } = useParams()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    if (id) {
      const matchingPerson = people.find((p) => p.login.uuid === id)
      setPerson(matchingPerson)
    }
  }, [people, id])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} handleClickHirePerson={handleClickHirePerson} />
    </article>
  )
}

export default PersonProfile
