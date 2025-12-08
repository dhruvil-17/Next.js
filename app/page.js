"use client";

import Link from "next/link";
import Image from "next/image";
import http from "http";
import { useEffect, useState } from "react";
// http.createServer((req, res) => {
  
//   res.end('Hello World\n');
// }).listen(4000, () => {
//   console.log('Server running at http://localhost:3000');
// });




export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // READ → GET /api/todos
  async function fetchTodos() {
    try {
      setLoading(true);
      const res = await fetch("/api/todos");
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error("Failed to fetch todos", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  // CREATE → POST /api/todos
  async function handleAddTodo(e) {
    e.preventDefault();
    if (!newTitle.trim()) return;

    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.message || "Failed to create todo");
        return;
      }

      const created = await res.json();
      setTodos((prev) => [...prev, created]);
      setNewTitle("");
    } catch (err) {
      console.error("Failed to create todo", err);
    }
  }

  // UPDATE → PUT /api/todos/:id (toggle done)
  async function toggleTodo(todo) {
    try {
      const res = await fetch(`/api/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ done: !todo.done }),
      });

      if (!res.ok) {
        alert("Failed to update todo");
        return;
      }

      const updated = await res.json();
      setTodos((prev) =>
        prev.map((t) => (t.id === updated.id ? updated : t))
      );
    } catch (err) {
      console.error("Failed to update todo", err);
    }
  }

  // DELETE → DELETE /api/todos/:id
  async function deleteTodo(id) {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        alert("Failed to delete todo");
        return;
      }

      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Failed to delete todo", err);
    }
  }

  return (
    <main className="min-h-screen p-6 bg-slate-900 text-slate-100">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Next.js CRUD – Todos</h1>

        <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="New todo"
            className="flex-1 px-3 py-2 rounded bg-slate-800 border border-slate-700 outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-600 text-sm font-medium"
          >
            Add
          </button>
        </form>

        {loading ? (
          <p>Loading...</p>
        ) : todos.length === 0 ? (
          <p className="text-slate-400">No todos yet. Add one!</p>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between px-3 py-2 rounded bg-slate-800 border border-slate-700"
              >
                <button
                  onClick={() => toggleTodo(todo)}
                  className="flex-1 text-left"
                >
                  <span
                    className={`${
                      todo.done ? "line-through text-slate-400" : ""
                    }`}
                  >
                    {todo.title}
                  </span>
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="ml-3 text-xs text-red-400 hover:text-red-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}


// export default async function Home() {

//   return (
//     <>
//       <h1 className="text-3xl">Home Page</h1>
//       <nav>
//         <ul className="text-blue-500 underline">
//           <li>
//             <Link href="/Blogs">Go to Blogs Page</Link>
//           </li>
//           <li>
//             <Link href="/services">Go to Services Page</Link>
//           </li>
//           <li>
//             <Link href="/about">Go to About Page</Link>
//           </li>
//           <li>
//             <Link href="/files">Go to File Path Page</Link>
//           </li>
         
//         </ul>
//       </nav>
    

//     </>
//   );
// }
