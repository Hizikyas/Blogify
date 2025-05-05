
import Landing from "./Component/LandingPage/Landing"
import Authentication from "./Component/Authentication/Authentication"
import React from "react"
import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import Dashboard from "../src/Component/Main/Dashboard"
import Forgotpassword from "../src/Component/Authentication/ForgotPassword"

const App = () => {
  return (
    <Switch>
        <Route path="/" exact> <Redirect to="/blogify" /> </Route>
        <Route path="/blogify">   <Landing /> </Route>
        <Route path ="/authentication/:form"> <Authentication /> </Route>
        <Route path="/forgotPassword"> <Forgotpassword /> </Route>
        <Route path="/dashboard"> <Dashboard /> </Route>
    </Switch>
  ) ;
}

export default App ;
