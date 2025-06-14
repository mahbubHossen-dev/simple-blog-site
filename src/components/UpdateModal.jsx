import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useGetBlogsQuery, useUpdateBlogMutation } from "@/features/blogs"
import { useEffect } from "react"

export default function UpdateModal({ open, setOpen, selectedBlog }) {
    const [updateBlog, { isLoading }] = useUpdateBlogMutation()
    const { refetch } = useGetBlogsQuery('blogsData')
    const { _id, title, slug, author, thumbnail, category, readingTime, content, tags } = selectedBlog || {}



    const submitUpdate = async (e) => {
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

        const updateBlogData = {
            title,
            slug,
            authorName,
            thumbnail,
            category,
            readingTime,
            content,
            tags: tagsArray
        }

        try {
            const result = await updateBlog({
                id: selectedBlog._id,
                updatedData: updateBlogData,
            })
            if(result.data.modifiedCount > 0){
                refetch()
            }
        } catch (error) {
            console.log(error)
        }
        // console.log(result)
    };

    if (isLoading) {
        return <p>Loading</p>
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <div>

                <DialogContent className="sm:max-w-[725px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={submitUpdate} className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Title</Label>
                            <Input id="name-1" name="title" defaultValue={title} />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">slug</Label>
                            <Input id="username-1" name="slug" defaultValue={slug} />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Author Name</Label>
                            <Input id="username-1" name="authorName" defaultValue={author?.name} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Thumbnail</Label>
                            <Input id="username-1" name="thumbnail" defaultValue={thumbnail} />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">category</Label>
                            <Input id="username-1" name="category" defaultValue={category} />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">readingTime</Label>
                            <Input id="username-1" name="readingTime" defaultValue={readingTime} />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">content</Label>
                            <Textarea name='content' placeholder="Type your message here." defaultValue={content} />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">tags</Label>
                            <Input id="username-1" name="tags" required />
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>

                </DialogContent>
            </div>
        </Dialog>
    )
}
