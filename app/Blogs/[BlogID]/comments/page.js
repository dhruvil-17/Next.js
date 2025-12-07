export default async function Comments({params}) {
const { BlogID } = await params;
const { CommentID } = await params;
console.log(CommentID);

return(<>
<h1>Comments for Blog { BlogID } page</h1>
</>)

}