import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {

    await dbConnect()
    console.log('connect')
    return NextResponse.json({result: true})
}