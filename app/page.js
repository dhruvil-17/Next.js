import Link from "next/link";

export default async function Home() {


  
  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/Blogs">Go to Blogs Page</Link>
          </li>
          <li>
            <Link href="/services">Go to Services Page</Link>
          </li>
          <li>
            <Link href="/about">Go to About Page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
