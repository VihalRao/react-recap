import { Link } from "react-router-dom";
import classes from "./Card.Module.css";
const ContactCard = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <div>
          <Link
            to={{
              pathname: `/contactList/${props.id}`,
              state: {
                name: props.name,
                email: props.email,
                phnum: props.phnum,
              },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1>{props.name}</h1>
          </Link>
        </div>
        <div>
          <button type="submit" onClick={() => props.delContact(props.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
