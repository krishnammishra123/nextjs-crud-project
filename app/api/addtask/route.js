import User from "@/app/models/userModel";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";
 
 

connectDB(); // Connect to the database

export const POST = async (request) => {
  const { name, email } = await request.json();
  try {
    const user = new User({ name, email });
   const details= await user.save();
    return new NextResponse(
      JSON.stringify({ message: "User Register Successfully",details:details, status: 200 })
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something is Mistake", status: 500 })
    );
  }
};
