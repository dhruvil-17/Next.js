// app/ssr-posts/page.js

// This is a SERVER COMPONENT by default (no "use client")

// Ensure fresh data every request:
export const dynamic = "force-dynamic"; // optional but explicit

export default async function SSRPostsPage() {
  // Fetch data on the SERVER before sending HTML to the client
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // do not cache → SSR-like behavior
  });

  if (!res.ok) {
    // we could also throw an error to use error.js
    return (
      <div>
        <h1>SSR Posts</h1>
        <p>Failed to load posts.</p>
      </div>
    );
  }

  const posts = await res.json();

  return (
    <main>
      <h1>SSR Posts (Server-Side Rendering)</h1>
      <p>
        These posts are fetched on the <strong>server</strong> on every request.
      </p>

      <ul >
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
