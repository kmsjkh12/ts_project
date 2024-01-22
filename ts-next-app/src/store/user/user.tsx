import axios, { AxiosError, AxiosResponse } from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const config = {
  headers: {
    "withCredentials" :true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Authorization" : `${cookies.get("Authorization")}`
  }
};


export const loginUser = (data:any) => {
  console.log("로그인유저");
  return axios.post("http://localhost:8082/login", data,config, 
  )
  .then(response => {
    return response.data; // Ensure data is returned
  })    .catch(error => {
      console.error("Error in loginUser:", error);
      return error;
    });
};


export const loginState = ( data : any )=>{

  return axios.post("http://localhost:8082/status",{
    "accessToken" : data
  },config).then(response => {
    console.log(response)
    return response.data; // Ensure data is returned
  })    .catch(error => {
      console.error("Error in loginUser:", error);
return error;
    });
}


export const getStory = (data : any)=>{
  return axios.get(`http://localhost:8082/story/${data}`,config)
  .then(response => {
    console.log(response)
    return response.data; // Ensure data is returned
  })    .catch(error => {
      console.error("Error in loginUser:", error);
      return error;
    });

}

export const getFeed = (data : any)=>{
  return axios.get(`http://localhost:8082/feed/${data}/0`,config)
  .then(response => {
    console.log(response)
    return response.data; // Ensure data is returned
  })    .catch(error => {
      console.error("Error in loginUser:", error);
      throw error;
    });

}