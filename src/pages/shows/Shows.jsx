import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Show from "./Show";
import Title from "../../components/hooks/Title";
import useAxiosPublic from "../../components/hooks/useAxiosPublic";

const Shows = () => {
  const axiosPublic = useAxiosPublic();
  const [bands, setBands] = useState([]);

  useEffect(() => {
    axiosPublic.get("/shows").then((res) => {
      // console.log(res.data)
      setBands(res.data);
    });
  }, [axiosPublic]);

  return (
    <div className=" px-4">
      <h2 className="my-12 text-2xl font-bold md:text-3xl">
        Shows: {bands.length}
      </h2>
      <Title>Available shows</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {bands.map((show) => (
          <Show key={show._id} show={show}></Show>
        ))}
      </div>
    </div>
  );
};

export default Shows;
