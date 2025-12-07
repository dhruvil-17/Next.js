"use client";

import { useEffect, useState } from "react";

export default function UsersClient() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []); // runs once on client side after initial render

  if (loading) {
    return <p>Loading users (CSR)...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section>
      <h2>Users (Client-Side Rendering)</h2>
      <p>
        These users are fetched <strong>in the browser</strong> after the page
        loads.
      </p>
      <ul style={{ marginTop: "1rem" }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "0.75rem" }}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
}
