"use client"

import { useEffect } from "react";
import { loginState } from "@/store/user/user";
import { Cookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { LoginProps } from "@/interface/Instagram";
import { userStore } from "@/store/user/userStore";
import {useRouter, usePathname} from 'next/navigation'
export default function ClientApplication({children} : any){
    const router= useRouter();
    const loginSuccess = userStore((state)=>state.loginSuccess)
    const cookies = new Cookies();
    
    const pathname= usePathname();
    
    const jwt_token = cookies.get("Authorization");
    
    const {data, isLoading, isSuccess, isError} = 
    useQuery({ queryKey : ['status', jwt_token], queryFn : async ()=> {

        if(!jwt_token){ 
          router.push('/login')
          }
        if(jwt_token && pathname !== "/login"){

        const response = await loginState(jwt_token);
        const data= await response;

        loginSuccess({
          'usernickname': data.usernickname,
          "useremail": data.useremail,
          "userimage" : "/icons/추달.png",
          "place" : data.place,
          "userid": data.userid
        })
          return data;
      }

      
    }
  })

    if(isLoading){
      return <p>Loading~~</p>
    }


    return children;

}


