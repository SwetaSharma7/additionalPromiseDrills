// 3. Use the promise chain and fetch the users first and then the todos.

const fs = require("fs");

const userUrl = "https://jsonplaceholder.typicode.com/users";
const todosUrl = "https://jsonplaceholder.typicode.com/todos";

fetch(userUrl)
  .then((result) => {
    if (!result) {
      throw new Error("Failed to fetch users data");
    }
    return result.json();
  })
  .then((users) => {
    console.log("Users data:", users);
    return fetch(todosUrl);
  })
  .then((result) => {
    if (!result) {
      throw new Error("Failed to fetch todos data");
    }
    return result.json();
  })
  .then((todos) => {
    console.log("Todos data:", todos);

    // fs.writeFileSync("data.json", JSON.stringify(todos));    checking data by adding it into folder
  })
  .catch((error) => {
    console.error(error);
  });
