import { displayListOfUsers, getUsersListFromHTML } from "./users-list.mjs";

const sorting_button = document.getElementById("sort-btn");
let initial_users_list = [];

const sortingUsers = () => {
  if (initial_users_list.length === 0)
    initial_users_list = getUsersListFromHTML();

  const users = getUsersListFromHTML();
  if (users.length > initial_users_list.length)
    for (let i = initial_users_list.length + 1; i < users.length; i++)
      initial_users_list.push(users[i]);

  
  if (sorting_button.innerHTML === "Sort ascending") {
    initial_users_list.sort((user1, user2) =>
      user1.name.localeCompare(user2.name)
    );

    sorting_button.innerHTML = 'Sort descending';
  } else {
    initial_users_list.sort((user1, user2) =>
      user2.name.localeCompare(user1.name)
    );

    sorting_button.innerHTML = 'Sort ascending';
  }

  displayListOfUsers(false, initial_users_list);
};





sorting_button.addEventListener('click', sortingUsers);

