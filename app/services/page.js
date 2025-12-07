import Link from "next/link";

export default function Services() {

return (<>
  <h1>Services page</h1>
  <ul>
    <li>
      <Link href="/services/web-services">Web Services</Link>
    </li>
    <li>
      <Link href="/services/app-services">App Services</Link>
    </li>
    
  </ul>
 
</>)

}