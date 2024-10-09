import { VITE_API_KEY } from "../../config";
import { axios } from "../axios";
import { useQuery } from "@tanstack/react-query";

export const getQuestions = async () => {
  const res = await axios.post("session/getsession",{
    APK: VITE_API_KEY
  });
    console.log(res);
    
  return res.data;
};

export const useGetSession = () => {
  return useQuery({
    queryKey: ["questions",],
    queryFn: () => getQuestions(),
  });
};
