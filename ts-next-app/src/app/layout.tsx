"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { MocksComponent } from "@/mocks/MocksComponent";
import { Cookies } from "react-cookie";
import Error from "@/error/Error";
import ErrorBoundary from "@/error/ErrorBoudary";
import ClientApplication from "@/hooks/ClientApplication";
import React from "react";
import Providers from "./Providers";

import { axiosInstance ,AxiosInterceptor} from "@/lib/AxiosInterceptor";
const inter = Inter({ subsets: ["latin"] });
const cookies = new Cookies();

const RootLayout = ({children}: any ) => {
  AxiosInterceptor();
  return (
    <html lang="en">
      <body>
        <MocksComponent>
          <Providers>
              <ErrorBoundary fallback={<Error />}>
                <ClientApplication />
                {children}
              </ErrorBoundary>
          </Providers>
        </MocksComponent>
      </body>
    </html>
  );
};

export default RootLayout;
