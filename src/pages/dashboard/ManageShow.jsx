import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageShow = ({ show, refetch }) => {
  // console.log(Object.keys(show).join(','))
  const {
    _id,
    bandName,
    date,
    time,
    stage,
    img,
    ticketPrice,
    descriptions,
    membersDetails,
  } = show || {};

  const handleDelete = () => {
    // console.log();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://music-amplitudein-server.vercel.app/shows/${_id}`, {
            withCredentials: true,
          })
          .then(() => {
            Swal.fire("Deleted!", "Show has been deleted.", "success");
            refetch();
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const handleUpdateShow = () => {};
  return (
    <div>
      <div className="bg-white mt-12 ">
        <div className="-mt-12 flex justify-center">
          <img src={img} alt="" className="w-full h-[200px] " />
        </div>
        <div className="p-6">
          <h3 className="text-xl text-red font-bold">{date}</h3>
          <h2 className="text-3xl text-black font-bold uppercase">
            {bandName}
          </h2>
          <div className="flex flex-wrap items-start gap-5 my-6">
            <button
              onClick={handleDelete}
              className="btn border-none bg-red text-white rounded-full font-medium px-6 uppercase py-2"
            >
              delete
            </button>
            <Link to={`/dashboard/updateShow/${_id}`}>
              <button
                onClick={handleUpdateShow}
                className="btn border-none bg-red text-white rounded-full font-medium px-6 uppercase py-2"
              >
                update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageShow;
