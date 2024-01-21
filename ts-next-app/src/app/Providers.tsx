"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./globals.css";
import { Cookies } from "react-cookie";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { LoginProps } from "@/interface/Instagram";
import { AxiosError } from "axios";
import axios from "axios";

function Providers({ children } :any) {

  const cookies = new  Cookies();
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          retry: 0,
          useErrorBoundary: true,
        },
        mutations: {
          useErrorBoundary: true,
        },
      },
    })
  );



  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default Providers;
