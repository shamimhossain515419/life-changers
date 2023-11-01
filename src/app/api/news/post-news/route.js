import connectToDB from "@/database";
import News from "@/models/news";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

   const data = await req.json();


      const newlyAddedAddress = await News.create(data);

      if (newlyAddedAddress) {
        return NextResponse.json({
          success: true,
          message: "News added successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "failed to  news Please try again later",
        });
      }
    

    
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
