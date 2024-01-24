"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./globals.css";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
function Providers({ children } :any) {

  const [queryClient] = React.useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
       queries:{
        retry: 1

       }
      },
    })
  );
 queryClient.invalidateQueries(
            {
                queryKey:["feed",2]
            }    
            )
console.log(queryClient)

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default Providers;
