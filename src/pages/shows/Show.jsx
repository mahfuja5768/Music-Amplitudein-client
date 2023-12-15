import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/ProviderContext/AuthProvider";
import axiosSecure from "../../api";

const Show = ({ show }) => {
  console.log(show);
  const { bandName, date, img, _id, time, stage } = show || [];
  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const handleToCart = () => {
    const ticket = {
      bandName,
      date,
      img,
      time,
      stage,
      email: user?.email,
    };
    // console.log(ticket);
    axiosSecure.post("/cartTickets", ticket)
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
    <div className="bg-white md:h-[400px] h-[450px] mt-12 ">
      <div className="-mt-8 flex justify-center">
        <img src={img} alt="" className="w-[340px] h-[250px] " />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-red font-bold">{date}</h3>
        <h2 className="text-3xl text-black font-bold uppercase">{bandName}</h2>
        <div className="flex flex-wrap items-start gap-5 my-6">
          <button
            onClick={handleToCart}
            className="btn border-none bg-red text-white rounded-full font-medium px-6 uppercase py-2"
          >
            Buy Ticket
          </button>
          <Link to={`/details/${_id}`}>
            <button className="btn  font-bold bg-transparent border-2 border-red rounded-full px-6 uppercase py-2">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Show;
