import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  if (person.wage) {
    return(
      <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <p>Wage: £{person.wage}</p>
      <Link to={"/edit/"+person.login.uuid}>Edit</Link>
    </li>
    )
  } else {
    return (
      <li>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        <Link to={"/view/"+person.login.uuid}>View Profile</Link>
      </li>
    );
  }
}

export default PeopleListItem;
