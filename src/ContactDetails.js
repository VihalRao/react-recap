import { useLocation } from "react-router";

const ContactDetails = (props) => {
  const location = useLocation();
  console.log(location);
  const { name, email, phnum } = location.state;
  return (
    <div>
      <center>
        <h1>Name: {name}</h1>
        <h1>Email:{email}</h1>
        <h1> PhNum:{phnum}</h1>
      </center>
    </div>
  );
};

export default ContactDetails;
