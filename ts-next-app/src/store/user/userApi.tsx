import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { loginUser } from './user';
import { Cookies } from 'react-cookie';
import { userStore } from './userStore';

const useUserLoginQuery = () => {
  const loginSuccess = userStore((state)=>state.loginSuccess);

    const cookies = new Cookies();

    const { mutate, data, error, isError } = useMutation(loginUser, {
      onSuccess: (data) => {
          console.log("hllo" +data)

      loginSuccess({
        'usernickname': data.usernickname,
        "useremail": data.useremail,
        "userimage" : "/icons/추달.png",
        "place" : data.place,
        "userid": data.userid
      })
      cookies.set("Authorization", data.accessToken)
    },
  });

  const handleLogin = async (useremail:string, password : string) => {
    console.log('Handling login');
    try {
      await mutate({
        useremail: useremail,
        password: password,
      });
    } catch (error) {
      // Handle error if needed
    }
    console.log('Login handling complete');
  };

  return { handleLogin, data, error, isError };
};

export default useUserLoginQuery;