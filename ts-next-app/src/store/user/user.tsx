import { Get } from "@/lib/axiosGet";
import { Post } from "@/lib/axiosPost";
import axios, { AxiosError, AxiosResponse } from "axios";
import { UserInfo } from "os";
import { Cookies } from "react-cookie";
import { LoginData ,PostUserData} from "@/interface/Instagram";
import { CreateComment } from "@/interface/Instagram";
const cookies = new Cookies();
export const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Authorization" : `${cookies.get("Authorization")}`
  }
};


export const loginUser = async (data:LoginData) => {
  const url = `/login`
  const res = await Post<LoginData>(url, data);
  
  return res.data;
}

export const loginState = async ( data : any )=>{
  const url = `/status`
  const res = await Post<UserInfo>(url,{"accessToken" : data})

  return res.data;
}


export const getStory =  async(data : PostUserData)=>{
  const url = `/story/${data}`
 
  const res = await Get<PostUserData>(url)
  return res.data;
}

export const getFeed = async (data: PostUserData) => {
  const url = `/feed/${data}/0`
  const res =await Get<PostUserData>(url)
  return res.data;
};


export const getProfile = async (data: any) => {
  const url = `/profile/${data}`
  const res =await Get<UserInfo>(url)
  return res.data;
};


export const createComment = async ( data: CreateComment ) => {
  const url = "/createcomment"
  const res = await Post<CreateComment> ( url,data);

  return res.data;
}
/*
export const getFeed = async (data: any) => {
  try {
    return await axios.get(`http://localhost:8082/feed/${data}/0`, config);
  } catch (error) {
    throw error;
  }
};
*/