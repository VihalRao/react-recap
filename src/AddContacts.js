import { useRef, useState } from "react";
import { useHistory } from "react-router";
import classes from "./Form1.module.css";
// import { Link } from "react-router-dom";

const AddContacts = (props) => {
  const history = useHistory();
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhnum, setEnteredphnum] = useState("");

  const mailInputRef = useRef();
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    phnum: true,
    mail: true,
  });

  const isEmpty = (value) => value.trim() === "";
  const checkMail = (value) => value.includes("@");
  const num = (value) => value.length >= 10;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredNameIsValid = !isEmpty(enteredName);
    console.log(enteredName);
    const enteredMailIsValid =
      !isEmpty(mailInputRef.current.value) &&
      checkMail(mailInputRef.current.value);
    const enteredPhnumIsValid = !isEmpty(enteredPhnum) && num(enteredPhnum);

    const Data = {
      name: enteredName,
      phnum: enteredPhnum,
      email: mailInputRef.current.value,
    };

    setFormInputsValidity({
      name: enteredNameIsValid,
      mail: enteredMailIsValid,
      phnum: enteredPhnumIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredPhnumIsValid && enteredMailIsValid;
    if (!formIsValid) {
      return null;
    } else {
      props.addContactHandler(Data);
      history.push("/contactList");
      // setEnteredName("");
      // setEnteredphnum("");
    }
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value.replace(/[^a-zA-Z]/gi, ""));
  };

  const phChangeHandler = (event) => {
    setEnteredphnum(event.target.value.replace(/[^0-9]/gi, ""));
  };

  // const mailChangeHandler = (event) => {
  //   setEnteredmailid(event.target.value);
  // };
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <div className={classes.s1}>
          <h1>Add Contacts</h1>
          <label>Name:</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
          {!formInputsValidity.name && (
            <p style={{ marginTop: "3px", color: "red" }}>*InValid field</p>
          )}
          <label>Phone Number:</label>
          <input
            type="text"
            maxLength="10"
            value={enteredPhnum}
            onChange={phChangeHandler}
          />
          {!formInputsValidity.phnum && (
            <p style={{ marginTop: "3px", textAlign: "left", color: "red" }}>
              *InValid field
            </p>
          )}

          <label>Email-Id:</label>
          <input type="text" ref={mailInputRef} />
          {!formInputsValidity.mail && (
            <p style={{ marginTop: "3px", color: "red" }}>*InValid field</p>
          )}

          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default AddContacts;
