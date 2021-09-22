import classes from "./Search.module.css";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "../store";
import { useHistory } from "react-router";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onChangeHandler = (event) => {
    setTerm(event.target.value);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const submitformHandler = (event) => {
    event.preventDefault();
    dispatch(dataAction.getReqUsers(term));
    history.push("/search-items");
    setTerm("");
  };

  return (
    <form onSubmit={submitformHandler}>
      <div className={classes.search}>
        <div className={classes.mid}>
          <input
            type="text"
            value={term}
            placeholder="Search Products"
            onChange={onChangeHandler}
          ></input>

          <button type="submit">
            <label>Search</label>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;

// import React, { useState } from "react";

// function SearchBar({ data }) {
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = data.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };
//   const [x, setX] = useState("");

//   const selHandler = () => {
//     console.log(wordEntered);
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           //   placeholder={placeholder}
//           value={wordEntered}
//           onChange={handleFilter}
//         />
//       </div>
//       {filteredData.length != 0 && (
//         <div>
//           {filteredData.slice(0, 10).map((value, key) => {
//             return (
//               <div onClick={selHandler}>
//                 <p>{value.title} </p>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }
// export default SearchBar;
