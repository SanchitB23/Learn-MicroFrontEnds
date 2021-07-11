import { mountDashboard } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mountDashboard(ref.current);
  }, []);

  return <div ref={ref} />;
};
