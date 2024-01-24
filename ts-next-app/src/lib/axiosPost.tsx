import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import axiosInstance from "./axiosInstance";
import { CommonResponse } from "./CommonResponse";

export const Post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
  try {
    console.log(`Making POST request to: ${url}`);
    const response = await axiosInstance.post<CommonResponse<T>>(url, data, config);
    return response;
  } catch (error) {
    console.error('Error in Post:', error);
    throw error as AxiosError; // Rethrow the error as AxiosError to get more accurate error handling
  }
};
