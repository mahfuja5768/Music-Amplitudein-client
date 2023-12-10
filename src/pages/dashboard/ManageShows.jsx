import { useQuery } from "@tanstack/react-query";
import Title from "../../components/hooks/Title";
import ManageShow from "./ManageShow";

const ManageShows = () => {
  const { data, isError, error, isPending, refetch } = useQuery({
    queryKey: ["shows"],
    queryFn: async () => {
      const data = await fetch(
        "https://music-amplitudein-server.vercel.app/shows",
        {
          credentials: "include",
        }
      );
      return await data.json();
    },
  });
  //   console.log(data);
  if (isPending) {
    return (
      <div className="text-center my-8">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <Title>Manage Shows</Title>
      <h2>Shows: {data?.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((show) => (
          <ManageShow key={show._id} refetch={refetch} show={show}></ManageShow>
        ))}
      </div>
    </div>
  );
};

export default ManageShows;
