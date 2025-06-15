import BlogsPage from "@/components/blogs";
import { auth } from "./auth";


export default async function Home() {

  const session = await auth()
    console.log(session)
  return (
    <div>
      <BlogsPage />
    </div>
  );
}
