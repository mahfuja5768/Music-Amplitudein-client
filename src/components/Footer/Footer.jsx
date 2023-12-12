import { Link, NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../ProviderContext/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" p-10 mt-12 border-t-2 text-white">
      <footer>
        <div>
          <div className=" py-12 md:py-16  grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:grid-cols-2">
              <div className="flex flex-col gap-3 ">
                <Link to="/">
                  {/* <img src={logo} alt="" className="mb-3 w-52 h-24" /> */}
                </Link>
                <h2 className="ms-5 font-bold text-3xl  mb-2 ">
                  Music-Amplitudein
                </h2>
                <h3 className="ms-5 font-bold text-xl  mb-2 ">
                  QUESTION OR FEEDBACK?
                </h3>
                <p className="flex items-center gap-2 ms-5">
                  <FaPhone className="text-lg"></FaPhone>{" "}
                  <span>+099 222 111</span>
                </p>
                <p className="flex items-center gap-2 ms-5">
                  <FaMailBulk className="text-lg"></FaMailBulk>{" "}
                  <span>@musicAmplitudein.com</span>
                </p>
              </div>
            </div>

            
            <nav className="">
              <header className="font-bold text-2xl  text-start md:text-center">
                Social links
              </header>
              <div className="flex justify-start md:items-center md:flex-col  md:justify-center gap-12 my-6">
                <a
                  href="https://www.facebook.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaFacebookF className="text-xl "></FaFacebookF>
                </a>
                <a
                  href="https://www.dribbble.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaLinkedin className="text-xl"></FaLinkedin>
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <FaTwitter className="text-xl"></FaTwitter>
                </a>
              </div>
            </nav>
            <div className="">
              <nav className="flex flex-col gap-4 list-none">
                <header className="font-bold text-2xl  mb-2 ">
                  Quick Menu
                </header>
                <ul className=" flex flex-col items-start justify-center gap-4 font-bold text-lg ">
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
              </nav>
            </div>

            <div>
              <h2 className="font-bold text-3xl  mb-2 ">About Us</h2>
              <p>
                Welcome to <span className="font-bold">Music-Amplitudein</span>,
                your go-to source for blog content. Explore our articles and
                stay informed!
              </p>
            </div>
          </div>
        </div>
        <div className=" flex  justify-center text-center items-center flex-end  py-3 px-3">
          <p>
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            Here.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
