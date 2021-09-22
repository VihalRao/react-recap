import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>
        <Link
          to="/addContacts"
          style={{ textDecoration: "none", color: "black" }}
        >
          Add Contacts
        </Link>
      </h1>
      <h1>
        <Link
          to="/contactList"
          style={{ textDecoration: "none", color: "black" }}
        >
          Contact List
        </Link>
      </h1>
      <h1>
        <Link to="/others" style={{ textDecoration: "none", color: "black" }}>
          others
        </Link>
      </h1>
      <h1>
        <Link to="/redux" style={{ textDecoration: "none", color: "black" }}>
          Redux
        </Link>
      </h1>
      <h1>
        <Link to="/search">Search</Link>
      </h1>
    </div>
  );
};

export default Home;
