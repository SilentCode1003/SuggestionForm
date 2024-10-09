import { axios } from "../axios";
import { useQuery } from "@tanstack/react-query";

export const getSession = async () => {
  const res = await axios.get("session/getsession");
    console.log(res);
    
  return res.data;
};

export const useGetSession = () => {
  return useQuery({
    queryKey: ["sessions"],
    queryFn: () => getSession(),
  });
};
