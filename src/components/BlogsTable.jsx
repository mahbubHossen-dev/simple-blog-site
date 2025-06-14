'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useDeleteBlogMutation, useGetBlogsQuery } from "@/features/blogs"
import Image from "next/image"
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md"
import UpdateModal from "./UpdateModal";
import { useState } from "react";
import Swal from "sweetalert2";

export default function BlogsTable() {

    const { data, isLoading, refetch } = useGetBlogsQuery('blogsData')
    const [deleteBlog] = useDeleteBlogMutation()
    const [selectedBlog, setSelectedBlog] = useState(null)
    const [open, setOpen] = useState(false)

    if (isLoading) {
        return <p>Loading</p>
    }
    // console.log(data.result)

    const handleUpdate = (blog) => {
        setSelectedBlog(blog)
        setOpen(true)
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
                    //     method: 'DELETE'
                    // })
                    // const result = await res.json()
                    // if (result.result.deletedCount > 0) {
                    //     console.log(result)
                    //     refetch()
                    //     Swal.fire({
                    //         title: "Deleted!",
                    //         text: "Your Blog has been deleted.",
                    //         icon: "success"
                    //     });
                    // }

                    const result = await deleteBlog({id})

                    if(result.data.result.deletedCount > 0){
                        refetch()
                    }
                } catch (error) {
                    console.log(error.message)
                }
                console.log('click')

            }
        });
    }

    return (
        <>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">N/A</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Eidt</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.result.map((item, idx) => (
                        <TableRow key={item._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell>
                                <Image src={item.thumbnail} height={100} width={100} alt="Image" />
                            </TableCell>
                            <TableCell>{item.author.name}</TableCell>
                            <TableCell className="">{item.category}</TableCell>
                            <TableCell className=""><CiEdit onClick={() => handleUpdate(item)} /></TableCell>
                            <TableCell className=""><MdDelete onClick={() => handleDelete(item._id)} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>


            </Table>

            <UpdateModal open={open} setOpen={setOpen} selectedBlog={selectedBlog} />
        </>
    )
}
