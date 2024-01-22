import { useQuery } from "react-query";
import { getFeed } from "./user";
import { userStore } from "./userStore";

const useFeedQuery = (user_id : any)=>{

    const addFeed= userStore((state)=>state.addFeed)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {data, isSuccess,isLoading, isError} = useQuery(
            ["feed",user_id],
            ()=>
            getFeed(user_id)
            ,
            {
                onSuccess:(data)=>{
                    console.log(data)
                    addFeed(data);
                },
                onError:(error)=>{
                    console.log(error)
                }
            }
        )
        return {data, isSuccess, isLoading,isError}
}
export default useFeedQuery;