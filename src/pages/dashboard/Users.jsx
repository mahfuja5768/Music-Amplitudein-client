import { useQuery } from "@tanstack/react-query";
import Title from "../../components/hooks/Title";
import axiosSecure from "../../api";
import Swal from "sweetalert2";

const Users = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    try {
      const user = await axiosSecure.delete(`/users/${id}`);
      Swal.fire({
        title: "Success!",
        text: "User deleted successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };
  const handleAdmin = async (id) => {
    try {
      await axiosSecure.patch(`/users/make-admin/${id}`);
      Swal.fire({
        title: "Success!",
        text: "Made admin successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  return (
    <div>
      <Title>Manage Users</Title>
      <div className="overflow-x-auto">
        <table className="table text-lg">
          {/* head */}
          <thead>
            <tr className="text-lg  text-white  border-y-4 border-red">
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <th>{item.name}</th>
                <td>{item.email}</td>
                <td>
                  {item?.role !== "admin" ? (
                    <span onClick={() => handleAdmin(item._id)}>
                      <button className="btn border-none bg-red text-white rounded-full font-medium px-6 uppercase py-2">
                        Make Admin
                      </button>
                    </span>
                  ) : (
                    <p className="text-red-700 text-lg">Already admin</p>
                  )}
                </td>
                <td>
                  <span onClick={() => handleDelete(item._id)}>
                  <button className="btn border-none bg-red text-white rounded-full font-medium px-6 uppercase py-2">
                       Delete
                      </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
