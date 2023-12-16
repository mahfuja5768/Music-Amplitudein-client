import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetAllShows = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: shows = [], isPending, isError } = useQuery({
    queryKey: ["shows"],
    queryFn: async () => {
      const res = await axiosPublic.get("/shows");
      console.log(res.data);
      return res.data;
    },
  });

  return [shows, refetch, isPending, isError];
};

export default useGetAllShows;
