import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "./ProviderContext/AuthProvider";
import Swal from "sweetalert2";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email);
  console.log(import.meta.env.VITE_ADMIN_EMAIL);
  
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully User Logged out",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <nav className="relative">
        <div className="max-w-[1280px] mx-auto lg:grid lg:grid-cols-4 lg:gap-2 flex items-center flex-row-reverse p-4 justify-between lg:flex-row gap-5">
          <div
            onClick={() => setOpen(!open)}
            className="h-6 w-6 lg:hidden block z-10"
          >
            {
              // open ? 'close icon' : 'open icon'
              open ? (
                <FaX className="text-2xl cursor-pointer "></FaX>
              ) : (
                <FaBars className="text-2xl cursor-pointer "></FaBars>
              )
            }
          </div>
          <div>
            <Link to="/" className="">
              <h2 className=" text-3xl font-bold">Music-Amplitudein</h2>
            </Link>
          </div>

          <div className=" justify-center hidden col-span-2 lg:flex list-none gap-5 font-bold">
            <ul className="hidden lg:flex items-center justify-between gap-4 font-bold text-lg ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? " underline decoration-red  decoration-2 underline-offset-8"
                      : "hover:text-current"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shows"
                  className={({ isActive }) =>
                    isActive
                      ? " underline decoration-red  decoration-2 underline-offset-8"
                      : "hover:text-current"
                  }
                >
                  Shows
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tickets"
                  className={({ isActive }) =>
                    isActive
                      ? " underline decoration-red  decoration-2 underline-offset-8"
                      : "hover:text-current"
                  }
                >
                  Your Tickets
                </NavLink>
              </li>
              {user?.email == import.meta.env.VITE_ADMIN_EMAIL && (
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? " underline decoration-red  decoration-2 underline-offset-8"
                        : "hover:text-current"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}

              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? " underline decoration-red  decoration-2 underline-offset-8"
                      : "hover:text-current"
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex gap-3 justify-center items-center">
            {user && (
              <div className="flex items-center gap-2 justify-center mx-2">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    className="w-10 h-10 rounded-full select-none"
                    alt="user photo"
                  />
                ) : (""
                )}
                <h3 className=" text-sm text-center mt-1">
                  {user?.displayName}
                </h3>
              </div>
            )}
            {user && (
              <Link
                to="/login"
                onClick={handleLogout}
                className="btn bg-red rounded-full  border-none hover:bg-black text-white"
              >
                Log out
              </Link>
            )}
            {!user && (
              <Link
                to="/login"
                className="btn bg-red rounded-full  border-none hover:bg-black text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <ul
          className={`flex flex-col justify-start items-start font-bold text-lg  text-white absolute   gap-4 px-8 py-6 pb-12 bg-red z-10 w-full duration-700 all ${
            open ? "top-16" : "top-[-800px]"
          }`}
        >
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `underline decoration-white  decoration-4 underline-offset-8`
                  : "hover:text-hoverText"
              }
            >
              Home
            </NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/shows"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : "hover:text-hoverText"
              }
            >
              Shows
            </NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/tickets"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : "hover:text-hoverText"
              }
            >
              Your Tickets
            </NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : "hover:text-hoverText"
              }
            >
              Register
            </NavLink>
          </li>
          {user?.email == import.meta.env.VITE_ADMIN_EMAIL && (
            <li onClick={() => setOpen(!open)}>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? " underline decoration-white decoration-4 underline-offset-8"
                    : "hover:text-hoverText"
                }
              >
                Dashboard
              </NavLink>
            </li>
          )}

          {!user && (
            <p>nai</p>
            //   <img
            //     src={userProfile}
            //     className="w-10 h-10 rounded-full select-none"
            //     alt="user photo"
            //   />
          )}

          <li>
            {user && (
              <div className="flex flex-col items-center gap-2 justify-center mx-2">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    className="lg:w-10 lg:h-10 w-16 h-16 rounded-full select-none"
                    alt="user photo"
                  />
                ) : (
                  <p>nai</p>
                  // <img
                  //   src={}
                  //   className="w-10 h-10 rounded-full select-none"
                  //   alt="user photo"
                  // />
                )}
                <h3 className="text-white lg:text-sm text-lg text-center">
                  {user?.displayName}
                </h3>
              </div>
            )}
          </li>
          <li onClick={() => setOpen(!open)}>
            {user && (
              <Link
                to="/login"
                onClick={handleLogout}
                className="btn bg-white border-none text-black"
              >
                Log out
              </Link>
            )}
            {!user && (
              <Link to="/login" className="btn bg-white border-none text-black">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
