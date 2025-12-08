import Image from "next/image";

export default function ImagePage(){

  return(
    <>
      <h1 className="text-3xl">Image Page</h1>
      <Image src="/bird.jpg" alt="bird" width={400} height={600} quality={75}/>
    </>
  )
}