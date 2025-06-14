import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
const db = await dbConnect()
const collection = await db.collection('blogs')
export async function GET() {

    const result = await collection.find().toArray()
    // console.log(result)
    console.log('connect')
    return NextResponse.json({ result })
}

export async function POST(request) {
    const payload = await request.json()
    const result = await collection.insertOne(payload)
    // const result = []
    console.log(payload)
    console.log(result)
    return NextResponse.json(result)

}