import User from "@/app/models/userModel";
import connectDB from "@/config/db";

import { NextResponse } from "next/server";

connectDB(); // Connect to the database

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    const data = await User.findById(id);
    return new NextResponse(
      JSON.stringify({
        message: "User get sucessfully",
        details: data,
        status: 200,
      })
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something is Mistake", status: 500 })
    );
  }
};
