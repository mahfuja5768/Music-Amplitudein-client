import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import YourTickets from "../pages/YourTickets";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AddShows from "../pages/dashboard/AddShows";
import Title from "../components/hooks/Title";
import Users from "../pages/dashboard/Users";
import Shows from "../pages/shows/Shows";
import ShowsDetails from "../pages/shows/ShowsDetails";
import PrivateRoute from "./PrivateRoute";
import ManageShows from "../pages/dashboard/ManageShows";
import UpdateShow from "../pages/dashboard/UpdateShow";
import { getDetails } from "../api/auth";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/tickets",
        element: (
          <PrivateRoute>
            <YourTickets></YourTickets>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ShowsDetails></ShowsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => getDetails(params.id),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/shows",
        element: <Shows></Shows>,
      },

      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <Title>Dashboard</Title>,
          },
          {
            path: "/dashboard/manageShows",
            element: <ManageShows></ManageShows>,
          },
          {
            path: "/dashboard/addShows",
            element: <AddShows></AddShows>,
          },
          {
            path: "/dashboard/updateShow/:id",
            loader: ({ params }) => getDetails(params.id),
            element: <UpdateShow></UpdateShow>,
          },
          {
            path: "/dashboard/users",
            element: <Users></Users>,
          },
        ],
      },
    ],
  },
]);

export default router;
