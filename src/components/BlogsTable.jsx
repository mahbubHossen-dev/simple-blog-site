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
import { useGetBlogsQuery } from "@/features/blogs"
import Image from "next/image"
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md"
import UpdateModal from "./UpdateModal";

export default function BlogsTable() {

    const { data, isLoading } = useGetBlogsQuery('blogsData')
    if (isLoading) {
        return <p>Loading</p>
    }
    console.log(data.result)

    const handleModal = () => {
        <UpdateModal />
    }

    return (
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
                        <TableCell className=""><CiEdit onClick={() => handleUpdate(item._id)}/></TableCell>
                        <TableCell className=""><MdDelete /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
