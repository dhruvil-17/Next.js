

import Link from "next/link";
import Image from "next/image";
import http from "http";

// http.createServer((req, res) => {
  
//   res.end('Hello World\n');
// }).listen(4000, () => {
//   console.log('Server running at http://localhost:3000');
// });







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
