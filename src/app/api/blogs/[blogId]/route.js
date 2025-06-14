import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const db = await dbConnect()
const collection = await db.collection('blogs')

export async function PUT(request, content) {
    const payload = await request.json()
    const id = content.params.blogId
    console.log(id)
    console.log(payload)
    
    const query = { _id: new ObjectId(id) }
    
    const updateDoc = {
        $set: {
            title: payload.title,
            slug: payload.slug,
            'author.name': payload.authorName,
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

export async function DELETE(request, content) {
    const id = content.params.blogId;
    const query = {_id: new ObjectId(id)}
    
    console.log(id)
    if(id){
        const result = await collection.deleteOne(query) 
        return NextResponse.json({result: 'user delete', success: true, result}, {status: 200, id})
    }else{
        return NextResponse.json({result: 'internal Error, please try after some time', success: false}, {status: 400})
    }
}