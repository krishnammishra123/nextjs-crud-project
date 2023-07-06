import User from "@/app/models/userModel";
import connectDB from "@/config/db";
 
import { NextResponse } from "next/server";

connectDB(); // Connect to the database

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    await User.findByIdAndDelete(id);
    return new NextResponse(
      JSON.stringify({ message: "User deleted successfully", status: 200 })
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something is Mistake", status: 500 })
    );
  }
};


