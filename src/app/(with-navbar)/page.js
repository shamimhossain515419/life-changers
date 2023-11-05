
'use client'

import About from "@/Components/Home/About/About"
import BannerSlider from "@/Components/Home/Banner/BannerSlider"
import Business from "@/Components/Home/Business/Business"
import Get_start from "@/Components/Home/Get-start/Get_start"
import Question from "@/Components/Home/Question/Question"
import Solution from "@/Components/Home/Solution/Solution"
import Footer from "@/Components/Share/Footer/Footer"
import { useState } from "react"


export default function Home() {


  const [fromData, setFromData] = useState("");
  console.log(fromData);
  return (
    <div>


      <BannerSlider></BannerSlider>
      <About></About>

      <Business></Business>

      <div className=" my-8">
        <Solution></Solution>
      </div>
      <div className=" my-8">
        <Question></Question>
      </div>

      <div>
        <Get_start></Get_start>
      </div>


      <div className=" my-8">
        <Footer></Footer>
      </div>

    </div>
  )
}
