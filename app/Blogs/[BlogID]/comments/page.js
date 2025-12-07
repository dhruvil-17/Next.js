export default async function Comments({params}) {
const { BlogID } = await params;

return(<>
<h1>Comments for Blog { BlogID } page</h1>
</>)

}