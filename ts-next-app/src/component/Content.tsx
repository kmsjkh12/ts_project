"use client"
import { useState } from "react";
import Image from "../../node_modules/next/image";
import '../style/content.css'
import { UserData } from "@/interface/Instagram";
import {useRouter} from 'next/navigation'


const Content =({ user }:  UserData  , {isLoading} : boolean) =>{
  const [comment,setComment] = useState<string > ("");
  const router =useRouter();

 
  const onChange = (e:React.ChangeEvent<HTMLInputElement >)=>{
    setComment(e.target.value)
    console.log(e.target.value)
  }


  const onClickAdd =()=>{
  
  }
  const deleteComment = () => {

  
  };

  if(isLoading){
    return(
      <div>loading...</div>
    )
  }
  if(user){
    return(
        <div className="content-wrapper">
{
  user?.map((c,id)=>
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