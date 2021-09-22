import React, { useEffect, useState } from "react";
import ClassComponent from "./ClassComponent";
import Hooks from "./Hooks";
import LifeCycle from "./LifeCycle";
import Lists from "./Lists";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AddContacts from "./AddContacts";
import ContactDetails from "./ContactDetails";
import BookData from "./components/Data.json";
import Home from "./Home";
import Contacts from "./Contacts";
import Redux from "./Redux";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/FetchActions";
import SearchBar from "./components/SearchBar";
import Search from "./components/Search";
import SearchItems from "./components/SearchItems";
import UserInfo from "./components/UserInfo";
export const userContext = React.createContext();
export const c = React.createContext();
function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);

    return setContacts([...contacts, { id: Math.random(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/addContacts" exact>
            <AddContacts addContactHandler={addContactHandler} />
          </Route>
          <Route path="/contactList" exact>
            <c.Provider value={contacts}>
              <Contacts getContactId={removeContactHandler} />
            </c.Provider>
          </Route>
          <Route path="/contactList/:id">
            <ContactDetails />
          </Route>
          <Route path="/others" exact>
            <ClassComponent />
            <LifeCycle />

            <userContext.Provider value={"Context Hook "}>
              <Hooks />
            </userContext.Provider>
            <Lists />
          </Route>
          <Route path="/redux" exact>
            <Redux />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/search-items" exact>
            <SearchItems />
          </Route>
          <Route path="/info/:id">
            <UserInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
