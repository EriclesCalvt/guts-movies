import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
export default function App(){
  return (
    <div className="antialiased">
      <Header />
      <Outlet />
    </div>
  )
}