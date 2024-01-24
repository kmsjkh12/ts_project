import { useQuery } from "@tanstack/react-query";
import { config, getFeed } from "./user";
import { userStore } from "./userStore";
import axios from "axios";

const useFeedQuery = ()=>{

    const addFeed= userStore((state)=>state.addFeed)
    const userInfo = userStore((state)=>state.userInfo)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data, isSuccess, isLoading, isError } = useQuery({
            queryKey: ["feed"],
            queryFn: async () => {
              if (userInfo) {
                try {
                  const response = await axios.get(
                    `http://localhost:8082/feed/${userInfo?.userid}/0`,
                    config
                  );
                  addFeed(response.data);
                  return response.data; // Return the actual data, not the entire response
                } catch (error) {
                  console.error("Error in useFeedQuery:", error);
                  throw error;
                }
              }
            },
          });
        
        return {data, isSuccess, isLoading,isError}
}
export default useFeedQuery;