import { Link, NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="h-full p-5 flex flex-col gap-12 pt-24">
      <nav>
        <ul className="flex flex-col justify-center gap-6 font-bold text-lg ">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "  text-red " : "hover:text-current"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageShows"
              className={({ isActive }) =>
                isActive
                  ? "  text-red"
                  : "hover:text-current"
              }
            >
              Manage Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addShows"
              className={({ isActive }) =>
                isActive
                  ? "  text-red"
                  : "hover:text-current"
              }
            >
              Add Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/users"
              className={({ isActive }) =>
                isActive
                  ? "  text-red"
                  : "hover:text-current"
              }
            >
              Manage Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
