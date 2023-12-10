import axios from "axios";
import Title from "../../components/hooks/Title";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddShows = () => {
  const goTo = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const bandName = form.get("bandName");
    const img = form.get("url");
    const date = form.get("date");
    const time = form.get("time");
    const stage = form.get("stage");
    const ticketPrice = form.get("price");
    const descriptions = form.get("details");
    const data = {
      bandName,
      img,
      date,
      time,
      stage,
      ticketPrice,
      descriptions,
    };
    console.log(data);

    axios
      .post("https://music-amplitudein-server.vercel.app/shows", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Success!",
          text: "New show added successfully!",
          icon: "success",
          confirmButtonText: "Done",
        });
        goTo("/dashboard/manageShows");
        formValues.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Title>Add Shows</Title>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className=" text-xl ">Band Name</span>
            </label>
            <label>
              <input
                type="text"
                name="bandName"
                placeholder="Enter band name"
                className="input input-bordered rounded w-full"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl ">Band Image</span>
            </label>
            <label>
              <input
                type="url"
                name="url"
                placeholder="Enter photo url"
                className="input input-bordered rounded w-full"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl ">Date</span>
            </label>
            <label>
              <input
                type="date"
                name="date"
                placeholder="Enter date"
                className="input input-bordered rounded w-full"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl ">Time</span>
            </label>
            <label>
              <input
                type="text"
                name="time"
                placeholder="Enter time"
                className="input input-bordered rounded w-full"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl ">Stage</span>
            </label>
            <label>
              <input
                type="text"
                name="stage"
                placeholder="Enter stage"
                className="input input-bordered rounded w-full"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-xl ">Ticket Price</span>
            </label>
            <label>
              <input
                type="number"
                name="price"
                placeholder="Enter Price"
                className="input input-bordered rounded w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className=" text-xl ">Details</span>
          </label>
          <label>
            <input
              type="text"
              name="details"
              placeholder="Enter details"
              className="input input-bordered rounded w-full"
              required
            />
          </label>
        </div>

        <input
          type="submit"
          className="w-full cursor-pointer hover:bg-hoverText bg-red text-white my-2 rounded-full mt-5 py-4 font-bold"
          value="Add Show"
        />
      </form>
    </div>
  );
};

export default AddShows;
