import { useQuery } from "@tanstack/react-query";
import Title from "../../components/hooks/Title";
import ManageShow from "./ManageShow";
import { manageShows } from "../../api/auth";
import useGetAllShows from "../../components/hooks/useGetAllShows";

const ManageShows = () => {
  const [shows, refetch, isPending, isError] = useGetAllShows();

    console.log(shows);
  if (isPending) {
    return (
      <div className="text-center my-8">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }


  return (
    <div>
      <Title>Manage Shows</Title>
      <h2 className="text-2xl my-2">Shows: {shows?.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {shows.map((show) => (
          <ManageShow key={show._id} refetch={refetch} show={show}></ManageShow>
        ))}
      </div>
    </div>
  );
};

export default ManageShows;
