import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddStudent from "./Components/AddStudent/AddStudent";
import StudentDetails from "./Components/Details/StudentDetails"
import NotFound from "./Components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [signOutUser, setSignOutUser] = useState({});
  return (
    <UserContext.Provider
      value={([loggedInUser, setLoggedInUser], [signOutUser, setSignOutUser])}
    >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/addStudent">
            <AddStudent></AddStudent>
          </PrivateRoute>

          <PrivateRoute path="/student/:id">
            <StudentDetails></StudentDetails>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
