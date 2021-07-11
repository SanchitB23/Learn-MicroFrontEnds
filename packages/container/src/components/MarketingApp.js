import React, {useEffect, useRef} from 'react';
import {mountMarket} from 'marketing/MarketingApp';
import {useHistory} from "react-router-dom";

const MarketingApp = () => {
  const ref = useRef(null)
  const history = useHistory()
  useEffect(() => {
    const {onParentNavigate} = mountMarket(ref.current, {
            initialPath: history.location.pathname,
      onNavigate: ({pathname: nextPathname}) => {
        const {pathname} = history.location;
        if (pathname !== nextPathname) history.push(nextPathname)
      }
    })

    history.listen(onParentNavigate)

  }, [])

  return <div ref={ref}/>;
};

export default MarketingApp;
