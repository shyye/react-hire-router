import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  const getData = async () => {
    const res = await fetch('https://randomuser.me/api/?results=50');
    const data = await res.json();
    setPeople(data.results);
  }

  // Load data
  useEffect(() => {
    getData()
    console.log(people);
    
  }, [])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
