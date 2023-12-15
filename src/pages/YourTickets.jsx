
import YourTicket from "./YourTicket";
import Title from "../components/hooks/Title";
import { useContext } from "react";
import { AuthContext } from "../components/ProviderContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";

const YourTickets = () => {
  const { user } = useContext(AuthContext);
  const {
    data: tickets = [],
    isError,
    error,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myCartTickets?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

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
      <h3 className="text-2xl font-medium">All Tickets: {tickets?.length}</h3>
      <Title>Your Tickets</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-32">
        {tickets?.map((tickets) => (
          <YourTicket
            tickets={tickets}
            key={tickets._id}
            refetch={refetch}
          ></YourTicket>
        ))}
      </div>
    </div>
  );
};

export default YourTickets;
