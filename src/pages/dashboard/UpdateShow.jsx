import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Title from "../../components/hooks/Title";
import Swal from "sweetalert2";
import axiosSecure from "../../api";

const UpdateShow = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const goTo = useNavigate();

  const [data] = useLoaderData();
  // console.log(data);
  if (navigation.loading == "loading") {
    return <p>Loading....</p>;
  }

  const { _id, bandName, date, time, stage, img, ticketPrice, descriptions } =
    data || {};

  const handleSubmit = async (e) => {
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
    const updatedData = {
      bandName,
      img,
      date,
      time,
      stage,
      ticketPrice,
      descriptions,
    };
    console.log(updatedData);

    const res = await axiosSecure.put(`/shows/${_id}`, updatedData);

    const data = await res.data;
    if (data.modifiedCount > 0) {
      Swal.fire({
        title: "Success!",
        text: "Show updated successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      formValues.reset();
      goTo("/dashboard/manageShows");
    }
  };

  return (
    <div>
      <Title>Update Show</Title>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className=" text-xl ">Band Name</span>
            </label>
            <label>
              <input
                defaultValue={bandName}
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
                defaultValue={img}
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
                defaultValue={date}
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
                defaultValue={time}
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
                defaultValue={stage}
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
                defaultValue={ticketPrice}
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
              defaultValue={descriptions}
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
          value="Update Show"
        />
      </form>
    </div>
  );
};

export default UpdateShow;
