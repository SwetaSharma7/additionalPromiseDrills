// 4. Use the promise chain and fetch the users first and then all the details for each user.

const userUrl1 = "https://jsonplaceholder.typicode.com/users";

fetch(userUrl1)
  .then((response) => {
    if (!response) {
      throw new Error("Failed to fetch the user data");
    }
    return response.json();
  })
  .then((data) => {
    const promises = data.map((user) => {
      return user.id;
    });
    promises.forEach((element) => {
      const idUrl = `https://jsonplaceholder.typicode.com/users?id=${element}`;
      fetch(idUrl)
        .then((result) => {
          if (!result) {
            throw new Error("not found users data");
          }
          return result.json();
        })
        .then((finalRes) => {
          console.log(finalRes);
        });
    });
  })
  .catch((error) => {
    console.error(error);
  });
