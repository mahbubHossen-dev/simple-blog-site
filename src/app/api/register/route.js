import dbConnect from "@/lib/dbConnect"
import { NextResponse } from "next/server"

const db = await dbConnect()
const userCollection = await db.collection('users')

export async function GET() {
    const result = await userCollection.find().toArray()
    return NextResponse.json(result)
}


export async function POST(request) {

    const payload = await request.json()
    console.log(payload)

    const findUser = await userCollection.findOne({ email: payload.email })

    if (findUser) {
        return NextResponse.json({ result: 'already have an account' })
    }

    const result = await userCollection.insertOne(payload)

    return NextResponse.json({ result: result, status: true })
}

