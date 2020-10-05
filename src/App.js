import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ViewMyEvents from './components/ViewMyEvents/ViewMyEvents';
import AdminPanel from './components/AdminPanel/AdminPanel';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allEvents, setAllEvents] = useState([]);

  return (
    <UserContext.Provider value={{
      loggedInUser,
      setLoggedInUser,
      allEvents,
      setAllEvents
    }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/donation">
            <Home />
          </Route>
          <Route path="/blog">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/register/:eventTitle">
            <Register />
          </PrivateRoute>
          <PrivateRoute path="/viewMyEvents">
            <ViewMyEvents />
          </PrivateRoute>
          <Route path="/admin">
            <AdminPanel />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
