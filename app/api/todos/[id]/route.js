// app/api/todos/[id]/route.js

// ⚠ Important: this must be same reference as in ../route.js in real app
// For demo, we redeclare the array.
// In a real project, you'd move todos to a shared module (e.g. lib/db.js).

let todos = [
  { id: 1, title: "Learn Next.js CRUD", done: false },
  { id: 2, title: "Connect real database later", done: false },
];

export async function PUT(request, { params }) {
  const id = Number(params.id);
  const body = await request.json();

  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return Response.json({ message: "Todo not found" }, { status: 404 });
  }

  if (body.title !== undefined) todo.title = body.title;
  if (body.done !== undefined) todo.done = body.done;

  return Response.json(todo);
}

export async function DELETE(_request, { params }) {
  const id = Number(params.id);

  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return Response.json({ message: "Todo not found" }, { status: 404 });
  }

  const deleted = todos[index];
  todos.splice(index, 1);

  return Response.json({ message: "Deleted", todo: deleted });
}
