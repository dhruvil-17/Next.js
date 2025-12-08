import Link from "next/link";

export default async function Home() {


  
  return (
    <>
      <h1 className="text-3xl">Home Page</h1>
      <nav>
        <ul className="text-blue-500 underline">
          <li>
            <Link href="/Blogs">Go to Blogs Page</Link>
          </li>
          <li>
            <Link href="/services">Go to Services Page</Link>
          </li>
          <li>
            <Link href="/about">Go to About Page</Link>
          </li>
          <li>
            <Link href="/files">Go to File Path Page</Link>
          </li>
         
        </ul>
      </nav>
    </>
  );
}
