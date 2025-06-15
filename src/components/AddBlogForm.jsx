'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Button } from './ui/button'
import { useAddBlogMutation, useGetBlogsQuery } from '@/features/blogs'

export default function AddBlogForm() {
    const { refetch } = useGetBlogsQuery('blogData')
    const [addBlog] = useAddBlogMutation()
    const handleAddBlog = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value
        const slug = form.slug.value
        const authorName = form.authorName.value
        const thumbnail = form.thumbnail.value
        const category = form.category.value
        const readingTime = form.readingTime.value
        const content = form.content.value
        const tags = form.tags.value
        const tagsArray = tags.split(',')

        const blogData = {
            title,
            slug,
            author: {
                name: authorName
            },
            thumbnail,
            category,
            readingTime,
            content,
            tags: tagsArray
        }
        console.log(blogData)
        // const result = await fetch('loc') 

        try {
            const result = await addBlog({ blogData })
            if (result.data.insertedId) {
                refetch()
                alert('add blog')
            }
            console.log(result)
        } catch (error) {
            console.log(error.message)
        }
    };

    return (
        <div>
            <form onSubmit={handleAddBlog} className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                    <Label htmlFor="name-1">Title</Label>
                    <Input id="name-1" name="title" />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">slug</Label>
                    <Input id="username-1" name="slug" />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">Author Name</Label>
                    <Input id="username-1" name="authorName" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="username-1">Thumbnail</Label>
                    <Input type='url' id="username-1" name="thumbnail" />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">category</Label>
                    <Input id="username-1" name="category" />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">readingTime</Label>
                    <Input id="username-1" name="readingTime" />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">content</Label>
                    <Textarea name='content' placeholder="Type your message here." />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">tags</Label>
                    <Input id="username-1" name="tags" required />
                </div>
                <div>
                    <Button type="submit">Add Blog</Button>
                </div>

            </form>
        </div>
    )
}
