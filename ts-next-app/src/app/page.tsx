"use client"
import { useState } from "react";
import Header from "@/component/header";
import Story from "@/component/story";
import Content from "@/component/Content";
import './page.module.css'
import Change from "@/component/Change";
import { userStore } from "@/store/user/userStore";
import MainRoutes from "@/component/Main";
export default function Home() {

  const userInfo = userStore((state)=>state.userInfo)
  return (
    <div className="container">
      <div className="main_wrapper">
        <Header />
          <MainRoutes />
      
      </div>
      
    </div>
  )
}
