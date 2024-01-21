"use client"

import { User } from "@/interface/Instagram";
import useStoryQuery from "@/store/user/storyApi";
import { userStore } from "@/store/user/userStore";
import Image from "../../node_modules/next/image";
import "../style/story.css"
import {useRouter} from 'next/navigation'
const Story = () =>{
  const router =useRouter();

  const userInfo = userStore((state)=>state.userInfo)
  const story= userStore((state)=>state.story)
  const {data, isSuccess, isLoading,isError} = useStoryQuery(userInfo?.userid);

    if(isLoading){
      return (
        <div>hello</div>
      )
  }
    return(
        <div className="story-wrapper">
          {story?.map((story, id)=>
            ( 
              <div className="story" key={id}>
              <Image className="profile_image" alt="" src="/icons/추달.png" width={200} height={200} />
              <p>{story.usernickname}</p>
            </div>
            )
          )}
          
      </div>
    )
}
export default Story; 



/*
          {user.follow?.map((u,id)=>
            ( 
              <div className="story" key={id}>
              <Image className="profile_image" alt="" src={u.user_image} width={200} height={200} />
              <p>{u.user_name}</p>
            </div>
            )
          )}
          
          */