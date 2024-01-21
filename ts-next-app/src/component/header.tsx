"use client"
import "../style/header.css"
import Image from 'next/image'
import { User } from "@/interface/Instagram"
const Header = () =>{
  return(
<div className="header">
<div className="logo">
  <h2 className="title">OOOOOO</h2>
</div>
<div className="search">
  <i className="fas fa-search">?</i>
  <input type="text" className="search_input" placeholder="검색" />
</div>
<div className="shortcut">
  <div className="iconbox">
    <Image className="icon" alt="logo" src="/icons/home.svg" width={200} height={200}/>
    <Image className="icon" alt="logo"  src="/icons/airplane.svg" width={200} height={200}/>
    <Image className="icon" alt="logo"  src="/icons/plus.svg" width={200} height={200}/>
    <Image className="icon" alt="logo" src="/icons/compass.svg" width={200} height={200}/>
    <Image className="icon" alt="logo" src="/icons/heart.svg" width={200} height={200}/>
  </div>
</div>
</div>
)}
export default Header;