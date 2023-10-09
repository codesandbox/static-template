import { displayListOfUsers, getUsersListFromHTML } from './users-list.mjs';




const search_input = document.getElementById('search-input');
const sorting_btn_text = document.getElementById('sort-btn');
let initial_users_list = [];


const searchUser = () => {

  if (initial_users_list.length === 0)
    initial_users_list = getUsersListFromHTML();

  const users = getUsersListFromHTML();
  if (users.length > initial_users_list.length)
    for (let i = initial_users_list.length + 1; i < users.length; i++)
      initial_users_list.push(users[i]);


  const search_arg = search_input.value.toUpperCase();


  if (search_arg !== '' && search_arg !== null) {

    const searched_users = [];
    for (let i = 0; i < initial_users_list.length; i++)
      for (const prop in initial_users_list[i])
        if (initial_users_list[i][prop].toUpperCase().indexOf(search_arg) > -1)
          searched_users.push(initial_users_list[i]);


    if (sorting_btn_text.innerHTML === 'Sort descending')
      // sort in ascending order  
      searched_users.sort((user1, user2) => user1.name.localeCompare(user2.name));
    else if (sorting_btn_text.innerHTML === 'Sort ascending')
      // sortin in descending order
      searched_users.sort((user1, user2) => user2.name.localeCompare(user1.name));


    displayListOfUsers(false, searched_users);

  } else {
    if (sorting_btn_text.innerHTML === 'Sort ascending')
      initial_users_list.sort((user1, user2) => user1.name.localeCompare(user2.name));
    else
      initial_users_list.sort((user1, user2) => user2.name.localeCompare(user1.name));

    displayListOfUsers(false, initial_users_list);
  }
    

}











search_input.addEventListener('keyup', searchUser);

