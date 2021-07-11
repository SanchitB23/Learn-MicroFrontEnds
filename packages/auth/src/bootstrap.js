import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createBrowserHistory, createMemoryHistory} from "history";

const mountAuth = (el, {onSignIn, onNavigate, defaultHistory, initialPath}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  })
  if (onNavigate) history.listen(onNavigate)
  ReactDOM.render(<App onSignIn={onSignIn} history={history}/>, el)
  return {
    onParentNavigate({pathname: nextPathname}) {
      console.log(nextPathname)
      const {pathname} = history.location;
      if (pathname !== nextPathname)
        history.push(nextPathname)
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root')
  if (devRoot) mountAuth(devRoot, {defaultHistory: createBrowserHistory()})
}

export {mountAuth}
