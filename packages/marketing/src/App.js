import React from 'react';
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const generateClassname = createGenerateClassName({
  productionPrefix: 'ma'
})

const App = () => {
  return (
      <div>
        <StylesProvider generateClassName={generateClassname}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/pricing" component={Pricing}/>
              <Route path="/" component={Landing}/>
            </Switch>
          </BrowserRouter>
        </StylesProvider>
      </div>
  );
};

export default App;
