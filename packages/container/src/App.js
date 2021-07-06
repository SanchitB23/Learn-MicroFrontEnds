import React from 'react';
import {mountMarket} from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";

console.log(mountMarket)
const App = () => {
  return (
      <React.Fragment>
        <h1>Hi</h1>
        <hr/>
        <MarketingApp/>
      </React.Fragment>
  );
};

export default App;
