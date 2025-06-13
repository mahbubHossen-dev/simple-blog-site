import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
    const payload = await request.json()
    const id = content.params.blogId
    console.log(id)
    console.log(payload)
    const db = await dbConnect()
    const query = { _id: new ObjectId(id) }
    const collection = await db.collection('blogs')
    const updateDoc = {
        $set: {
            title: payload.title,
            slug: payload.slug,
            authorName: payload.authorName,
            thumbnail: payload.thumbnail,
            category: payload.category,
            readingTime: payload.readingTime,
            content: payload.content,
            tags: payload.tags
        }
    }

    const result = await collection.updateOne(query, updateDoc)
    console.log(result)

    return NextResponse.json(result)
}