import connectToDB from "@/database";
import User from "@/models/user";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function POST(req) {
     try {
          await connectToDB();

          const data = await req.json();
          const email = data?.email;

          const singleUser = await User.findOne(email);
          if(singleUser){
               return NextResponse.json({
                    success: false,
                    message: "User AllReady exit ",
               });  
          }
          const newlyAddedAddress = await User.create(data);

          if (newlyAddedAddress) {
               return NextResponse.json({
                    success: true,
                    message: "User added successfully",
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
