export let todos = [
  { id: 1, title: "Learn Next.js CRUD", done: false },
  { id: 2, title: "Build a real app later", done: false },
];

export function updateTodos(newList) {
  todos = newList;
}
