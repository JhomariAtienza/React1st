import { users as data } from "../data/users";

//private
let users = [...data];

export function getAllUsers() {
  // get all users
  return [...users];
}

function generateId(usersArray) {
  return Math.max(...usersArray.map(user => user.id), 0) + 1;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...userInfo,
      };
    }

    return user;
  });
}

function addUser(userInfo) {
  const id = generateId(users);
  const newUser = {
    id: id,
    ...userInfo
  };
  users.push(newUser);
}

