import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";

const Dashboard = () => {
  return (
    <div className=" grid lg:grid-cols-5 gap-2 px-4">
      <div className="lg:col-span-1 lg:block">
        <SideNavbar></SideNavbar>
      </div>
      <div className="lg:col-span-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
