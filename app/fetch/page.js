export default async function FetchData(){
  
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
 
  return (
    <div>
      <h1>Fetched Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}