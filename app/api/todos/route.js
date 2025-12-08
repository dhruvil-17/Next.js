import { todos, updateTodos } from "@/lib/todos";

// GET 
export async function GET() {
  return Response.json(todos);
}

// POST 
export async function POST(request) {
  const body = await request.json();
  const title = body.title?.trim();

  if (!title) {
    return Response.json({ error: "Title is required" }, { status: 400 });
  }

  const newTodo = {
    id: Date.now(),
    title,
    done: false,
  };

  updateTodos([...todos, newTodo]);

  return Response.json(newTodo, { status: 201 });
}
