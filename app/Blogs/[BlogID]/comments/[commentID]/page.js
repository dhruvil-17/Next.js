export default async function Comment({params}) {

const { BlogID } = await params;
const { commentID } = await params;


return(<>
<h1>Comment { commentID } for Blog { BlogID } page</h1>
</>)

}