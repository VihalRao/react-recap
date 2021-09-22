import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Items from "./Items";
import SearchBar from "./SearchBar";

const SearchItems = () => {
  const inputField = useSelector((state) => state.data.reqUsers);
  const users = useSelector((state) => state.data.users);
  const [x, setX] = useState(false);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inputField.trim() !== "") {
      console.log(inputField.trim());
      setX(true);
      const pro = users
        .filter((x) => {
          return x.name
            .trim()
            .toLowerCase()
            .includes(inputField.trim().toLowerCase());
        })
        .map((x) => (
          <Items
            key={x.id}
            id={x.id}
            name={x.name}
            email={x.email}
            phone={x.phone}
          />
        ));
      if (pro.length === 0) {
        setX(false);
        alert("Match Not Found");
      }
      setItems(pro);
    }
  }, [inputField]);

  const clickHandler = () => {
    setShow(true);
  };

  const hideHandler = () => {
    setShow(false);
  };

  console.log(users);
  return (
    <div>
      {!show ? (
        <button onClick={clickHandler}>REFINE</button>
      ) : (
        <button onClick={hideHandler}>CANCEL</button>
      )}

      {show && <SearchBar />}
      <div>
        <h3>{x && items}</h3>
      </div>
      <Link to="/search">
        <h3>Back to search</h3>
      </Link>
    </div>
  );
};

export default SearchItems;
