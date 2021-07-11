import {createApp} from "vue";
import Dashboard from "./components/dashboard.vue";


const mountDashboard = (el) => {
  console.log("dashboard")
  const app = createApp(Dashboard)
  app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root')
  if (devRoot) mountDashboard(devRoot)
}

export {mountDashboard}
