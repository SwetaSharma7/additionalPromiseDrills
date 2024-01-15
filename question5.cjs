// 5. Use the promise chain and fetch the first todo. Then find all the details for the user that is associated with that todo.

const todosUrl = "https://jsonplaceholder.typicode.com/todos";

fetch(todosUrl)
  .then((response) => {
    if (!response) {
      throw new Error("Failed to fetch todos Data");
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data[0].userId);
    const firstTodo = data[0].userId;
    const idUrl = `https://jsonplaceholder.typicode.com/todos?userId=${firstTodo}`;

    fetch(idUrl)
      .then((result) => {
        if (!result) {
          throw new Error("Doesnt contain any data of this id");
        }
        return result.json();
      })
      .then((reqAns) => {
        console.log(reqAns);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((error) => {
    console.error(error);
  });
