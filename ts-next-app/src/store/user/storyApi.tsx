import { useQuery } from "@tanstack/react-query";
import { getStory } from "./user";
import { userStore } from "./userStore";

const useStoryQuery = ( )=>{

    const addStory= userStore((state)=>state.addStory)
    const userInfo = userStore((state)=>state.userInfo)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {data, isSuccess,isLoading, isError} = useQuery({
            queryKey: ["story"],
            queryFn: async ()=>{
            if(userInfo){
                const response = await getStory(userInfo?.userid)
                return response;
            }
            }
            
})
        return {data, isSuccess, isLoading,isError}
}
export default useStoryQuery;