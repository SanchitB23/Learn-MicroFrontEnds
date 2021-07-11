import React from 'react';
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import {Route, Router, Switch} from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";

const generateClassname = createGenerateClassName({
  productionPrefix: 'au'
})

const App = ({history, onSignIn}) => {
  return (
      <div>
        <StylesProvider generateClassName={generateClassname}>
          <Router history={history}>
            <Switch>
              <Route path={"/auth/signin"}>
                <SignIn onSignIn={onSignIn}/>
              </Route>
              <Route path={"/auth/signup"}>
                <SignUp onSignIn={onSignIn}/>
              </Route>
            </Switch>
          </Router>
        </StylesProvider>
      </div>
  );
};

export default App;
