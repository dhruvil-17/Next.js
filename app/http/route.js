import { headers } from "next/headers";

export  function GET(){
  console.log("GET route handler working");
  
  return new Response(JSON.stringify({message: "Hello from Next.js API Route"}),
     { headers: { "Content-Type": "application/json" } });
}