"use client"
import { useState } from "react";

import Image from "../../node_modules/next/image";
import '../style/content.css'
import { User } from "@/interface/Instagram"
import { Comment } from "@/interface/Instagram";

import { userStore } from "@/store/user/userStore";

import useFeedQuery from "@/store/user/FeedApi";

import {useRouter} from 'next/navigation'
interface ContentPropsType {
  user : User,
  setUserInfo : React.Dispatch<React.SetStateAction<User>>
}

const Content =({ user }:  any  ) =>{
  const [comment,setComment] = useState<string > ("");
  const router =useRouter();
  const userInfo = userStore((state)=>state.userInfo)
  const feed = userStore((state)=>state.feed)

  const {data, isSuccess, isLoading,isError} = useFeedQuery(userInfo?.userid)
 
  const onChange = (e:React.ChangeEvent<HTMLInputElement >)=>{
    setComment(e.target.value)
    console.log(e.target.value)
  }


  const onClickAdd =()=>{
    const newComment :Comment= { comment_id: 2,content_id : 1,comment_content:comment, like:null, user :user,};
    setUserInfo((user)=>
      ({...user,
        contents:
        user.contents?.map((content)=>
          content.content_id === newComment.content_id?
          { ...content, comment: [...(content.comment || []), newComment] }
          :content
        )
      })
    )
    setComment("")
  }
const deleteComment = (contentId: number, commentId: number) => {

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      contents: prevUserInfo.contents?.map((content) =>
        content.content_id === contentId
          ? {
              ...content,
              comment: content.comment?.filter((comment) => comment.comment_id !== commentId),
            }
          : content
      ),
    }));
  };

  if( isError){
    router.push("/login")
  }

  
  if(isLoading){
    console.log("hello" + isLoading)
    return(
      <div>loading...</div>
    )
  }
  if(isSuccess){
    console.log(data)
    return(
        <div className="content-wrapper">
{
  feed?.map((c,id)=>
  (
    <div className="content" key={id}>
      <div className="content_header">
        <div className="content_header_profile">
          <div className="content_header_image">
            <Image
              src={c.user.userimage}
              className="content_profile_image"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="content_header_title">
            <p className="name">{c.user.usernickname}</p>
            <p className="place">{c.user.place}</p>
          </div>
        </div>
        <div className="setting">=</div>
      </div>
  
      <div className="content_content">
        <Image
          src={c.image}
          alt="이미지"
          className="content_image"

          width={200}
          height={200}
        />
      <div className="details_content">{c.content}</div>
      </div>
      <div className="content_des">
        <div className="content_des_left">
          <button className="like_content_button">
            <Image className="icon" src="/icons/heart.svg" alt="" 
              width={200}
              height={200} />
          </button>
          <button className="comment_content_button">
          <Image className="icon" src="/icons/comment.svg" alt="" 
              width={200}
              height={200} />
          </button>
          <button className="air_content_button">
          <Image className="icon" src="/icons/airplane.svg" alt="" 
              width={200}
              height={200}/>
          </button>

        </div>
        <div className="content_des_right">
          <Image className="icon" src="/icons/bedge.svg" alt="" 
              width={200}
              height={200} />
        </div>
      </div>
      <div className="content_like"></div>
  
      <div className="content_comment">
      {c.comment.map((com,id)=>
      (
          <div className="comment" key={id}>
          <p> {com.content}</p>
              <div className="comment_icon">
                  <button className="like_comment" >
                      <Image className="icon" src = "/icons/heart.svg"  alt="" 
              width={200}
              height={200}/>
                          </button>
                          <button className="remove_comment"
                          onClick={()=>{
                            deleteComment(com.content_id,com.comment_id)
                          }}>
                              <Image className="icon" src = "/icons/x.svg"  alt="" 
              width={200}
              height={200}/>
                                  </button>
                                  </div>
                                  </div>
      ))}
      </div>
      <div className="write_comment">
        <i className="fas fa-search">?</i>
        <input type="text" className="write_input" placeholder="검색" name="comment_content" value={comment} onChange={onChange}/>
        <i className="fas fa-fofo" onClick={onClickAdd}><button className="write_button">게시</button></i>
      </div>
    </div>
  ))}
        </div>  
    )
                        }
}
export default Content;
/*
{
  user.contents?.map((c,id)=>
  (
    <div className="content" key={id}>
      <div className="content_header">
        <div className="content_header_profile">
          <div className="content_header_image">
            <Image
              src={c.user.user_image}
              className="content_profile_image"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="content_header_title">
            <p className="name">{c.user.user_name}</p>
            <p className="place">{c.user.place}</p>
          </div>
        </div>
        <div className="setting">=</div>
      </div>
  
      <div className="content_content">
        <Image
          src={c.content_image}
          alt="이미지"
          className="content_image"

          width={200}
          height={200}
        />
      <div className="details_content">{c.content}</div>
      </div>
      <div className="content_des">
        <div className="content_des_left">
          <button className="like_content_button">
            <Image className="icon" src="/icons/heart.svg" alt="" 
              width={200}
              height={200} />
          </button>
          <button className="comment_content_button">
          <Image className="icon" src="/icons/comment.svg" alt="" 
              width={200}
              height={200} />
          </button>
          <button className="air_content_button">
          <Image className="icon" src="/icons/airplane.svg" alt="" 
              width={200}
              height={200}/>
          </button>

        </div>
        <div className="content_des_right">
          <Image className="icon" src="/icons/bedge.svg" alt="" 
              width={200}
              height={200} />
        </div>
      </div>
      <div className="content_like"></div>
  
      <div className="content_comment">
      {c.comment.map((com,id)=>
      (
          <div className="comment" key={id}>
          <p> {com.comment_content}</p>
              <div className="comment_icon">
                  <button className="like_comment" >
                      <Image className="icon" src = "/icons/heart.svg"  alt="" 
              width={200}
              height={200}/>
                          </button>
                          <button className="remove_comment"
                          onClick={()=>{
                            deleteComment(com.content_id,com.comment_id)
                          }}>
                              <Image className="icon" src = "/icons/x.svg"  alt="" 
              width={200}
              height={200}/>
                                  </button>
                                  </div>
                                  </div>
      ))}
      </div>
      <div className="write_comment">
        <i className="fas fa-search">?</i>
        <input type="text" className="write_input" placeholder="검색" name="comment_content" value={comment} onChange={onChange}/>
        <i className="fas fa-fofo" onClick={onClickAdd}><button className="write_button">게시</button></i>
      </div>
    </div>
  ))}
  */