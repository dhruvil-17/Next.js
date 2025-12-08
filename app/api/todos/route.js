// app/api/todos/route.js

// 🔴 In-memory "database" (resets on server restart)
let todos = [
  { id: 1, title: "Learn Next.js CRUD", done: false },
  { id: 2, title: "Connect real database later", done: false },
];

// GET /api/todos  → Read all todos
export async function GET() {
  return Response.json(todos);
}

// POST /api/todos  → Create new todo
export async function POST(request) {
  const body = await request.json();
  const title = body.title?.trim();

  if (!title) {
    return Response.json(
      { message: "Title is required" },
      { status: 400 }
    );
  }

  const newTodo = {
    id: Date.now(),
    title,
    done: false,
  };

  todos.push(newTodo);

  return Response.json(newTodo, { status: 201 });
}
