"use client"
import { useState } from "react";
import Header from "@/component/header";
import Story from "@/component/story";
import Content from "@/component/Content";
import './page.module.css'
import Change from "@/component/Change";
import { userStore } from "@/store/user/userStore";

export default function Home() {

  const userInfo = userStore((state)=>state.userInfo)
  return (
    <div className="container">
      <div className="main_wrapper">
        <Header />

      <div className="body_wrapper">
        <div className="left_wrapper">
          <Story user={userInfo} />
          <Content user={userInfo} />
        </div>

        <div className="right_wrapper">
          <Change user={userInfo} />
        </div>
            

        <div className="follow_id"></div>
      </div>

      </div>
      
    </div>
  )
}
