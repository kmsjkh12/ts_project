import { getFeed, getStory } from "@/store/user/user";
import { dehydrate, HydrationBoundary, QueryClient, useQuery } from "@tanstack/react-query";
import Story from "./story";
import Change from "./Change";
import { userStore } from "@/store/user/userStore";
import Post from "./Post";
export async function getServerSideProps(){
    const queryClient = new QueryClient();
    const userInfo = userStore((state)=>state.userInfo)

    await queryClient.prefetchQuery({
        queryKey: ["feed",userInfo?.userid],
        queryFn: () => getFeed(userInfo?.userid)
    })

    await queryClient.prefetchQuery({
        queryKey: ["story",userInfo?.userid],
        queryFn: () => getStory(userInfo?.userid)
    })

    return {
        props:{
            dehydratedState : dehydrate(queryClient),
        }
    }    
}

function Main (){
    const userInfo = userStore((state)=>state.userInfo)

    const { data : feedData ,  isLoading : feedLoading} = useQuery({ queryKey: ['feed', userInfo?.userid], queryFn: () => getFeed(userInfo?.userid) })
    const { data : storyData , isLoading : storyLoading} = useQuery({ queryKey: ['story', userInfo?.userid], queryFn: () => getStory(userInfo?.userid) })

    if(feedData && storyData){
        console.log(feedData, storyData)
        console.log(storyData)
        return(<div className="body_wrapper">
        <div className="left_wrapper">
          <Story user={storyData} isLoading={storyLoading}/>
          {feedData.map((feed)=>(
            <Post user={feed} isLoading={feedLoading} />

          ))}
        </div>

        <div className="right_wrapper">
          <Change />
        </div>
            

        <div className="follow_id">
        </div>
      </div>
        )
    }
}

export default function MainRoutes({dehydratedState}: any){
    return(
        <HydrationBoundary state={dehydratedState}>
            <Main />
        </HydrationBoundary>
    )
}
