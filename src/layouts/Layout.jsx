import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import { useContext } from "react";
import { AuthContext } from "../components/ProviderContext/AuthProvider";
import Navber from "../components/Navber";
import Banner from "../components/Banner";
import Marquee from "react-fast-marquee";

const Layout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-white">
      {user && (
         <p className="bg-black text-white text-3xl font-bold text-center py-3">
         {/* <Marquee>
         <p> Welcome {user?.displayName}</p>
       </Marquee> */}
        </p>
       
      )}
      <div className="max-w-[1280px] mx-auto">
        <Navber></Navber>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
