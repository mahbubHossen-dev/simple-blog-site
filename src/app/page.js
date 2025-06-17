import BlogsPage from "@/components/blogs";
import { auth } from "./api/auth/[...nextauth]/route";



export default async function Home() {

  const session = await auth()
    console.log(session)
  return (
    <div>
      <BlogsPage />
    </div>
  );
}
