import { useQuery } from "react-query";
import { getStory } from "./user";
import { userStore } from "./userStore";

const useStoryQuery = (user_id : any)=>{

    const addStory= userStore((state)=>state.addStory)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {data, isSuccess,isLoading, isError} = useQuery(
            ["story",user_id],
            ()=>
            getStory(user_id)
            ,
            {
                onSuccess:(data)=>{
                    console.log(data)
                    addStory(data.followerid);
                },
                onError:(error)=>{
                    return error;
                }
            }
        )
        return {data, isSuccess, isLoading,isError}
}
export default useStoryQuery;