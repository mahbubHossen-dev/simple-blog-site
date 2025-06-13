import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    const db = await dbConnect()
    const collection = await db.collection('blogs')
    const result = await collection.find().toArray()
    // console.log(result)
    console.log('connect')
    return NextResponse.json({result})
}