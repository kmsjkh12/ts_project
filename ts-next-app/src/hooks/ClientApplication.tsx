"use client"

import { useEffect } from "react";
import { loginState } from "@/store/user/user";
import { Cookies } from "react-cookie";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { LoginProps } from "@/interface/Instagram";
import { userStore } from "@/store/user/userStore";
import {useRouter} from 'next/navigation'
export default function ClientApplication({children} : any){
    const router= useRouter();

    const loginSuccess = userStore((state)=>state.loginSuccess)
    const cookies = new Cookies();

    
    const jwt_token = cookies.get("Authorization");
    
    const {data, isLoading, isSuccess, isError} = 
    useQuery(['status', jwt_token], async ()=>{

        if(!jwt_token){
          console.log("error")
        }

        const response = await loginState(jwt_token);
        const data= await response;

        loginSuccess({
          'usernickname': data.usernickname,
          "useremail": data.useremail,
          "userimage" : "/icons/추달.png",
          "place" : data.place,
          "userid": data.userid
        })
    },
    {
      onSuccess:(data)=>{

      },
      onError:()=>{
        router.push('/login')
      }
    })

  
    if(isLoading){
      return <p>Loading~~</p>
    }


    return data;

}

