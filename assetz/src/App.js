import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Category from "./components/category/category";
import Logs from "./components/logs/logs";
import "./App.css";
import Login from "./components/login/login";
import Sidebar from "./components/sidebar/sidebar";

function App() {

  return (
    <div style={{ height: "100vh" }}>

        {/*Routing*/}
        <BrowserRouter>
          <Switch>
            <Route exactg path="/signin">
              <Login />
            </Route>
            <Route exact path="/category">
              <Sidebar>
                <Category/>
              </Sidebar>
            </Route>
            <Route exact path="/logs">
              <Sidebar>
                <Logs />
              </Sidebar>
            </Route>
            <Redirect from='/' to='/signin' />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
