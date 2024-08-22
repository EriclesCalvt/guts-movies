import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
export default function App(){
  return (
    <div className="antialiased h-full w-full flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}