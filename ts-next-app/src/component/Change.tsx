"use client"
import Image from "../../node_modules/next/image"
import '../style/change.css'
import { User } from "@/interface/Instagram"
const Change =({ user }: { user: User }) =>{
    return(
        <div className="change_wrapper">
              <div className="change">
                <Image src="/icons/추달.png" className="change_profile_image" alt=""  width={200} height={200}/>
                <div className="change_header_title">
                  <p className="name">abcdefg</p>
                  <p className="place">cccccccc</p>
                </div>
              </div>
              <div className="change_id">전환</div>
            </div>
    )
}
export default Change