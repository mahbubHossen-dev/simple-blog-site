'use client'
import { auth } from '@/app/auth'
import { useGetBlogsQuery } from '@/features/blogs'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function BlogsPage() {
    const {data, isLoading } = useGetBlogsQuery('blogsData')
    // const session = await auth()
    // console.log(session)
    // const [blogs, setBlogs] = useState([])

    // useEffect(() => {
    //     fetch('/blog.json')
    //         .then(res => res.json())
    //         .then(data => setBlogs(data))
    // }, [])

    if(isLoading){
        return <p>Loading</p>
    }

    console.log(data.result)

    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] grid md:grid-cols-2 gap-6 mt-16'>
            {
                data?.result?.map((blog, index) => (
                    <div key={index}>
                        <div className='relative w-full h-60 mb-4 rounded-md overflow-hidden'>
                            <Image fill src={blog.thumbnail} alt="Image" />
                        </div>
                        <h1>{blog.title}</h1>
                        <p>{blog.summary}</p>
                        <p>{blog.published_date}</p>
                    </div>
                ))
            }
        </div>
    )
}
