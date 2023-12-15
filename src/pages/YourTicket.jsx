import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axiosSecure from "../api";

const YourTicket = ({ tickets, refetch }) => {
  const {
    bandName,
    date,
    descriptions,
    img,
    membersDetails,
    stage,
    ticketPrice,
    time,
    _id,
  } = tickets || [];

  const handleDelete = (_id) => {
    console.log(_id);

    axiosSecure
      .delete(
        `/cartTickets/${_id}`,
      )
      .then((res) => {
        console.log(res.data);
        refetch();
        Swal.fire({
          title: "Success!",
          text: "Ticket cancel successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="bg-white md:h-[400px] h-[450px] mt-12 ">
        <div className="-mt-8 flex justify-center">
          <img src={img} alt="" className="-mt-12 w-[340px] h-[250px] " />
        </div>
        <div className="p-6">
          <h3 className="text-xl text-red font-bold">{date}</h3>
          <h2 className="text-3xl text-black font-bold uppercase">
            {bandName}
          </h2>
         <div className="flex gap-4"> <h3 className="text-xl text-red font-bold">Time: {time}</h3>
          <h3 className="text-xl text-red font-bold">Stage: {stage}</h3></div>

          <div className=" my-6">
            <button
              onClick={() => handleDelete(_id)}
              className="btn border-none bg-red text-white rounded-full font-medium px-6 uppercase py-2"
            >
              Cancel Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourTicket;
