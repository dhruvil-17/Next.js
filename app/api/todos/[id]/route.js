import { todos, updateTodos } from "@/lib/todos";

// PUT 
export async function PUT(request, { params }) {
 const res = await params;
const id = Number(res.id);
  const body = await request.json();
  
  const index = todos.findIndex((t)=> t.id === id)
  if (index === -1) {
    return Response.json({ error: "Todo not found" }, { status: 404 });
  }

  const updated = {...todos[index], ...body}; //the updated todo

  const newList = [...todos];  //just a copy of the original todos
  
  newList[index] = updated; //replace the old todo with the updated one

  updateTodos(newList); //pass the new list to updateTodos

  return Response.json(updated);
}

// DELETE 
export async function DELETE(_request, { params }) {
  const res = await params;
  const id = Number(res.id);

  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return Response.json({ error: "Todo not found" }, { status: 404 });
  }

  const deleted = todos[index];
  const newList = todos.filter((t) => t.id !== id);

  updateTodos(newList);

  return Response.json({ message: "Deleted", todo: deleted });
}
