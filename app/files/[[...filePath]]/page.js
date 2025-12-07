export default async function FilePath({params}) {

  console.log(await params);
  const body = await params;
  return(<>
      <h1>File Page /{ body.filePath?.join('/') }</h1>
  </>)

}