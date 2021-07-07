import React from 'react';
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

const generateClassname = createGenerateClassName({
  productionPrefix: 'co'
})

const App = () => {
  return (
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassname}>
          <React.Fragment>
            <Header/>
            <MarketingApp/>
          </React.Fragment>
        </StylesProvider>
      </BrowserRouter>
  );
};

export default App;
