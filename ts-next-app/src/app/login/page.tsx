"use client"

import React,{useState} from 'react'
import "./login.css"
import useUserLoginQuery from '@/store/user/userApi'
import { useEffect } from 'react'
const Login  =() =>{
    const [emailCheck, setEmailCheck] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);
    
    useEffect(()=>{
      console.log(emailCheck)
      console.log(passwordCheck)
    },[emailCheck, passwordCheck])


    const { handleLogin, data, error, isError } = useUserLoginQuery();

    const [ form, setForm ] = useState({
      useremail: '',
        password: ''
    })
    
  
    const { useremail , password } = form;

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name ,value} = e.target;
        if(name === "useremail"){
          if( !value.includes("@") || !value.includes(".")){
            setEmailCheck(true);
          }

          if( value.includes("@") && value.includes(".")){
            setEmailCheck(false);
          }
        }
        if( name === "password"){
          if(value.length <= 5){
            setPasswordCheck(true)
        }
        if(value.length >5){
            setPasswordCheck(false)
        }
        }

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit =async  (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
       
        if(!emailCheck  && !passwordCheck){
          await handleLogin(useremail,password);
        }
        setForm({
          useremail:'',
            password:'',
        })
    }

    if(error){
      return(
        <div>
          error
        </div>
      )
    }
    if (isError) {
  return <div>Error occurred: error</div>;
}
    
    return(
        <div className="container">
        <div className="login-wrapper">
          <div className="logo-container">
            <h1>O</h1>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
            name="useremail"
              className="login-id-input"
              id="login-id-input"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={useremail} onChange={onChange}
            />
            <input
            name="password"
              className="login-password-input"
              id="login-password-input"
              placeholder="패스워드"
              value={password} onChange={onChange}
            />
                <button className="login-button" id="login-btn" type="submit">
            로그인
          </button>
          </form>
      
          <div className="login-warning">
         { emailCheck ? (<div className="email_warning">이메일 형식으로 입력해주세요</div>): ""} 
         
         { passwordCheck ? ( <div className="password_warning">5글자보다 커야합니다.</div>): ""} 

         {data?.response?.status === 400 ? (<div>{data.response.data.message}</div>) : ""}
          </div>
          <div className="login-forget" onClick={()=>{
          }}>비밀번호를 잊으셨나요?</div>
        </div>
      </div>
    )
}

export default Login;
