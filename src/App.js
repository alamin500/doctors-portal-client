import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/appointment">
              <Appoinment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
