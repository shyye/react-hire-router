import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import EditForm from './components/EditForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const { people, hiredPeople, handleClickHirePerson, handleClickEditPerson, isEdit } = props
  const { id } = useParams()
  const [person, setPerson] = useState(null)


  useEffect(() => {
    if (id && !isEdit) {
      const matchingPerson = people.find((p) => p.login.uuid === id)
      setPerson(matchingPerson)
    } else if (id && isEdit) {
      const matchingPerson = hiredPeople.find((p) => p.login.uuid === id)
      setPerson(matchingPerson)
    }
  }, [people, hiredPeople, isEdit, id])

  // useEffect(() => {
  //   if (id && !isEdit) {
  //     const matchingPerson = people.find((p) => p.login.uuid === id)
  //     setPerson(matchingPerson)
  //   } 
  // }, [people, id])

  // useEffect(() => {
  //   if (id && isEdit) {
  //     const matchingPerson = people.find((p) => p.login.uuid === id)
  //     setPerson(matchingPerson)
  //   }
  // }, [hiredPeople, id])

  if (!person) return <p>Loading...</p>

  if (isEdit) {
    return (
      <article>
        <h2>
          {person.name.first} {person.name.last}
        </h2>
        <EditForm 
          person={person} 
          handleClickEditPerson={handleClickEditPerson}
        />
      </article>
    )
  } else {
    return (
      <article>
        <h2>
          {person.name.first} {person.name.last}
        </h2>
        <HireForm 
          person={person} 
          handleClickHirePerson={handleClickHirePerson}
        />
      </article>
    )
  }
}

export default PersonProfile
