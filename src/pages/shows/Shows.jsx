import Show from "./Show";
import Title from "../../components/hooks/Title";
import useGetAllShows from "../../components/hooks/useGetAllShows";

const Shows = () => {
  const [shows] = useGetAllShows();

  return (
    <div className=" px-4">
      <h2 className="my-12 text-2xl font-bold md:text-3xl">
        Shows: {shows?.length}
      </h2>
      <Title>Available shows</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {shows?.map((show) => (
          <Show key={show._id} show={show}></Show>
        ))}
      </div>
    </div>
  );
};

export default Shows;
