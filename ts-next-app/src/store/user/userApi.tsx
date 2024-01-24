import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { loginUser } from './user';
import { Cookies } from 'react-cookie';
import { userStore } from './userStore';

const useUserLoginQuery = () => {
  const loginSuccess = userStore((state)=>state.loginSuccess);

    const cookies = new Cookies();

    const {  mutate, data, error, isError, isSuccess } = useMutation({mutationFn : loginUser, 
       
      onSuccess: (data) => {
      loginSuccess({
        'usernickname': data.usernickname,
        "useremail": data.useremail,
        "userimage" : "/icons/추달.png",
        "place" : data.place,
        "userid": data.userid
      })
      
      cookies.set("Authorization", data.accessToken)
    },
    onError : (error) =>{
      console.log(error);
    }
  });

  const handleLogin = async (useremail:string, password : string) => {
    try {
      await mutate({
        useremail: useremail,
        password: password,
      });
    } catch (error) {
        console.log("error " + error)
      }
  };

  return { handleLogin, data, error, isError ,isSuccess};
};

export default useUserLoginQuery;