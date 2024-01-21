"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { MocksComponent } from "@/mocks/MocksComponent";
import Providers from "./Providers";
import { Cookies } from "react-cookie";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { LoginProps } from "@/interface/Instagram";
import { AxiosError } from "axios";
import axios from "axios";
import ClientApplication from "@/hooks/ClientApplication";

const inter = Inter({ subsets: ["latin"] });
const cookies = new Cookies();

const RootLayout = ({ children }: any) => {


  return (
    <html lang="en">
      <body>
        <MocksComponent>
          <Providers>
          <ClientApplication />

{children}</Providers>
        </MocksComponent>
      </body>
    </html>
  );
};

export default RootLayout;
