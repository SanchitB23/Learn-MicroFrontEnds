import React, {useEffect, useRef} from 'react';
import {mountMarket} from "../../../marketing/src/bootstrap";

const MarketingApp = () => {
  const ref = useRef(null)

  useEffect(() => {
    mountMarket(ref.current)
  }, [])

  return <div ref={ref}/>;
};

export default MarketingApp;
