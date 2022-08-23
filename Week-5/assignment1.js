const fetch = require("isomorphic-fetch");

const BASE_API_URL = "https://jsonplaceholder.typicode.com/todos";

const fetchAllToDos = async () => {
  const res = await fetch(BASE_API_URL);
  return res.json();
};

const fetchToDoById = async (toDoId) => {
  const res = await fetch(`${BASE_API_URL}/${toDoId}`);
  return res.json();
};

// GENERATOR FUNCTION IMPLEMENTATION
async function* getFirstToDoItemFromTheList() {
  const allToDos = await fetchAllToDos();
  yield allToDos;
  const todoItem = await fetchToDoById(allToDos[0].id);
  return todoItem;
}

// const iterator = getFirstToDoItemFromTheList();
// iterator
//   .next()
//   .then(() => {
//     iterator
//       .next()
//       .then(({ value }) => {
//         console.log(value); // prints first to-do item
//       })
//       .catch((e) => console.error(e));
//   })
//   .catch((e) => console.error(e));

// PURE ASYNC AWAIT IMPLEMENTATION
const getLastToDoItem = async () => {
  try {
    const allToDos = await fetchAllToDos();
    const todoItem = await fetchToDoById(allToDos[allToDos.length - 1].id);
    return todoItem;
  } catch (ex) {
    console.error(ex);
  }
};

getLastToDoItem().then((value) => {
  console.log(value); // prints last to-do item
});
