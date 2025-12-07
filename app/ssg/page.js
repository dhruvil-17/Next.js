// Static Site Generation (SSG) with ISR (regenerates every 60 seconds)
export const revalidate = 60; 


export default async function SSGPostsPage() {
  // This fetch runs at build time (SSG)
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache", 
  });

  
  if (!res.ok) {
    return <h1>Failed to load posts.</h1>;
  }

  const posts = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">SSG Posts</h1>
      <p className="text-gray-500 mb-4">
        These posts were generated <strong>at build time</strong>.
        <br />This page will regenerate every 60 seconds (ISR).
      </p>

      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
