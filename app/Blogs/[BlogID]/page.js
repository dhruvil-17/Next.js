

async function Blog1({params}) {
  
  console.log(await params);
  
  const { BlogID } = await params;
  
  return (
    <>  
      <h1>Blog Post  { BlogID } </h1>    
    </>
  )
}

export default Blog1;