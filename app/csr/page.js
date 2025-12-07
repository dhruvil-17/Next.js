

import UsersClient from "@/app/components/UserClient";

export default function CSRUsersPage() {
  return (
    <main style={{ padding: "1.5rem" }}>
      <h1>CSR Users Page</h1>
      <p>
        This page shell is rendered on the server, but the users list is loaded
        on the <strong>client</strong> using React hooks.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <UsersClient />
      </div>
    </main>
  );
}
