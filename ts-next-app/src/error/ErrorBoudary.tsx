import { AxiosError } from "axios";
import React from "react";
 


class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false,
            loginError :false,
    }
}

    //다음 렌더 폴백시 ui
    static getDerivedStateFromError(error){
       if(error.name === "AxiosError"){
            return{
                loginError :true
            }
    }
        
    }


    render() {
        if(this.state.loginError){
            return this.props.fallback;  //폴백으로 이동 
        }
            return this.props.children;

    }
}

export default ErrorBoundary;