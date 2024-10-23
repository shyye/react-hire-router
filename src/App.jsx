import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  const navigate = useNavigate()

  const getData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=50");
    const data = await res.json();
    setPeople(data.results);
  };

  // Load data
  useEffect(() => {
    getData();
  }, []);

  function handleClickHirePerson(person) {
    event.preventDefault()
    // setHiredPeople([...hiredPeople, { id: person.login.uuid, person: person }]);
    setHiredPeople([...hiredPeople, person]);
    navigate('/')
  }

  useEffect(() => {
    console.log(hiredPeople);
  }, [hiredPeople]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={people}
              handleClickHirePerson={handleClickHirePerson}
            />
          }
        />
      </Routes>
    </>
  );
}
