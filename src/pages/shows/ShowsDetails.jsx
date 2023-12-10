import axios from "axios";
import { useContext } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaServicestack,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/ProviderContext/AuthProvider";

const ShowsDetails = () => {
  const [showDetails] = useLoaderData();
  console.log(showDetails);
  const {
    bandName,
    date,
    descriptions,
    img,
    membersDetails,
    stage,
    ticketPrice,
    time,
  } = showDetails || [];
  //   console.log(showDetails.membersDetails);

  const { user } = useContext(AuthContext);
  console.log(user.email);

  const handleToCart = () => {
    const ticket = {
      bandName,
      date,
      descriptions,
      img,
      membersDetails,
      stage,
      ticketPrice,
      time,
      email: user?.email,
    };
    // console.log(ticket);
    axios
      .post("https://music-amplitudein-server.vercel.app/cartTickets", ticket)
      .then((res) => {
        // console.log(res.data);
        Swal.fire({
          title: "Success!",
          text: "Ticket brought successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-4 ">
      <div className="grid grid-cols-6 gap-6">
        <div className=" col-span-4">
          <img src={img} className="w-full" alt="" />
        </div>

        <div className="col-span-2 space-y-4">
          <h3 className="text-lg font-bold flex gap-2 items-center">
            <span className="text-yellow-300">
              <FaCalendarAlt />
            </span>{" "}
            <span className="">Date</span>
          </h3>
          <h3 className="text-2xl font-bold mb-3">{date} 2023</h3>
          <h3 className="text-lg font-bold flex gap-2 items-center">
            <span className="text-yellow-300">
              <FaClock />
            </span>{" "}
            <span className="">Time</span>
          </h3>
          <h3 className="text-2xl font-bold mb-3">On stage:{time}</h3>
          <h3 className="text-lg font-bold flex gap-2 items-center">
            <span className="text-yellow-300">
              <FaServicestack />
            </span>{" "}
            <span className="">Stage</span>
          </h3>
          <h3 className="text-2xl font-bold mb-3">{stage}</h3>
          <h3 className="text-lg font-bold flex gap-2 items-center">
            <span className="text-yellow-300">
              <FaMoneyBillWave />
            </span>{" "}
            <span className="">Price</span>
          </h3>
          <h3 className="text-2xl font-bold mb-3">${ticketPrice}</h3>
          <div className=" my-6">
            <button
              onClick={handleToCart}
              className="btn border-none bg-red text-white rounded-full font-medium px-6 uppercase py-2"
            >
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl text-red font-bold">{date}</h3>
        <h2 className="text-3xl text-white font-bold uppercase">{bandName}</h2>
        <p className=" text-justify">{descriptions}</p>
        {membersDetails?.map((member, idx) => (
          <p key={idx} className="my-5 text-xl">
            {Object.keys(member)[0]}: {Object.values(member)[0]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ShowsDetails;
