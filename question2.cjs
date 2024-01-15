const todosUrl = "https://jsonplaceholder.typicode.com/todos";

fetch(todosUrl)
  .then((response) => {
    if (!todosUrl) {
      throw new Error("Failed to fetch Todos");
    }
    return response.json();
  })
  .then((todos) => {
    console.log("Todos", todos);
  })
  .catch((error) => {
    console.error(error);
  });
