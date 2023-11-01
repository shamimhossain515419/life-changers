import connectToDB from "@/database";
import News from "@/models/news";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
     await connectToDB();
  

     try {
      const news =  await News.find({})
        
          
          if (news) {
               return NextResponse.json({
                    success: true,
                    data: news,
               });
          } else {
               return NextResponse.json({
                    success: false,
                    message: "Something went wrong ! Please try again later",
               });
          }



     } catch (error) {
          console.log("Error while new user registration. Please try again");

          return NextResponse.json({
               success: false,
               message: "Something went wrong ! Please try again later",
          });
     }
}
