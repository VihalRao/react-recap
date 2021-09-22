import ContactCard from "./ContactCard";
import { useContext } from "react";
import { c } from "./App";
import { Link } from "react-router-dom";
const Contacts = (props) => {
  const y = useContext(c);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const x = y.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        id={contact.id}
        email={contact.email}
        name={contact.name}
        phnum={contact.phnum}
        delContact={deleteConactHandler}
      />
    );
  });
  const noContacts = x.length <= 0;
  console.log(x.length);
  return (
    <div>
      <center>
        <h1>Contacts</h1>
      </center>
      {x}
      {noContacts && (
        <center>
          <h3>No contacts Available</h3>
        </center>
      )}
      <Link to="/home">
        <center>
          <button>Back to Home</button>
        </center>
      </Link>
    </div>
  );
};

export default Contacts;
