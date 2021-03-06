import React from 'react';
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import {Route, Router, Switch} from "react-router-dom";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const generateClassname = createGenerateClassName({
  productionPrefix: 'ma'
})

const App = ({history}) => {
  return (
      <div>
        <StylesProvider generateClassName={generateClassname}>
          <Router history={history}>
            <Switch>
              <Route exact path="/pricing" component={Pricing}/>
              <Route path="/" component={Landing}/>
            </Switch>
          </Router>
        </StylesProvider>
      </div>
  );
};

export default App;
