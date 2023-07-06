import User from "@/app/models/userModel";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";

connectDB(); // Connect to the database

export const PUT = async (request,{params}) => {
    const { name, email } = await request.json();
    const { id } = params;
  try {
   const details=  await User.findByIdAndUpdate(id,{name,email},{new:true})
    return new NextResponse(
      JSON.stringify({
        message: "User Updated Successfully",
        details:details,
        status: 200,
      })
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something is Mistake", status: 500 })
    );
  }
};
