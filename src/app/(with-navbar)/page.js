
'use client'
import About from "@/Components/About/About";
import BannerSlider from "@/Components/Banner/BannerSlider";
import Business from "@/Components/Business/Business";
import Question from "@/Components/Question/Question";
import Solution from "@/Components/Solution/Solution";

export default function Home() {

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



    </div>
  )
}
