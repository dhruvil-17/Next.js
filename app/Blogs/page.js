import Link from "next/link";

export default async function Blogs({params}){
  return (
    <>
      <h1>
        Welcome to the Blogs Page!
      </h1>
      <ul>
        <Link href="/Blogs/1"><li>Blog Post 1</li></Link>
        <Link href="/Blogs/2"><li>Blog Post 2</li></Link>
        <Link href="/Blogs/3"><li>Blog Post 3</li></Link>
      </ul>
    </>
  );
}