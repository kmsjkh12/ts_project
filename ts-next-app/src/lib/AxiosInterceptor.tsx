import { Cookies } from "react-cookie";
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { useLayoutEffect } from "react";
import axiosInstance from "./axiosInstance";


export const AxiosInterceptor = () => {
  function getCookie() {
    const cookies = new Cookies();
    return cookies.get("Authorization");
  }

  const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const { method, url } = config;
    console.log(`🛫 [API - REQUEST] ${method?.toUpperCase()} ${url}`);

    const token = getCookie();
    config.headers.Authorization = token;
    return config;
  };

  const onResponse = (res: AxiosResponse): AxiosResponse => {
console.log(res)
    const { method, url } = res.config;
    const { status } = res;

    if (status === 200) {
      console.log(`🛬 [API - RESPONSE] ${method?.toUpperCase()} ${url} | ${status}`);
    } else {
        console.log(`🛬 [API - RESPONSE] ${method?.toUpperCase()} ${url} |`);
    }

    return res;
  };

  const onError = (error: AxiosError): Promise<AxiosError> => {
    if (axios.isAxiosError(error)) {
      const { method, url } = error.config as AxiosRequestConfig;
      if (error.response) {
        const { statusCode, message } = error.response.data;
        console.log(`🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${statusCode} : ${message}`);
      }
    } else {
      console.log(`🚨 [API] | Error ${error}`);
    }
    return Promise.reject(error);
  };

  useLayoutEffect(() => {
    const reqInterceptor = axiosInstance.interceptors.request.use(onRequest);
    const resInterceptor = axiosInstance.interceptors.response.use(
      onResponse,
      onError,
    );

    // 클린업
    return () => {
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
})
};

