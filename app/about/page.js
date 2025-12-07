import Link from "next/link";

export default function About() {

  return(
    <>
      <h1>
        About Page
        
      </h1>
      <ul>
        <li><Link href="/">Go to Home</Link></li>
        <li><Link href="/services">Go to Services</Link></li>
        <li><Link href="/Blogs">Go to Blogs</Link></li>
      </ul>
    </>
  )
}