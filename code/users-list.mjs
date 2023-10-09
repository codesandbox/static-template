async function getUsersList() {

  try {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();

    return users;

  } catch (error) {
    console.log(`Error: ${error}`);
  }

}



async function displayListOfUsers(getAPIUsers ,given_users = []) {

  try {

    let users = [];
    if (getAPIUsers)
      users = await getUsersList();

    for (let i = 0; i < given_users.length; i++)
      users.push(given_users[i]);

    const users_list = document.getElementById('users-cards-area');
    users_list.innerHTML = '';

    if (users.length > 0) {
      
      for (let i = 0; i < users.length; i++)
        displayOneUserInList(users_list, users[i], 'card', 'div', i + 1);

    } else
      users_list.innerHTML = 'No results found';

  } catch (error) {
    console.log(`Error: ${error}`);
  }

}



function displayOneUserInList(users_list = document.getElementById('users-cards-area'), user, class_list = 'card', create_element = 'div', index) {

  const list_item = document.createElement(create_element);
  list_item.innerHTML = `
    <p id="name_${index}">Name: ${user.name}</p>
    <p id="username_${index}">Username: ${user.username}</p>
    <p id="email_${index}">Email: ${user.email}</p>
    <p id="city_${index}">City: ${user?.address?.city || user?.city || '---'}</p>
    <p id="zipcode_${index}">Zipcode: ${user?.address?.zipcode || user?.zipcode || '---'}</p>
    <p id="phone_${index}">Phone: ${user.phone}</p>
  `;
  list_item.classList.add(class_list);
  list_item.setAttribute('id', `user_${index}`);
  users_list.appendChild(list_item);

}






const getUsersListFromHTML = () => {

  const users_elements = document.getElementById('users-cards-area').getElementsByClassName('card');
  const users = [];
  for (let i = 0; i < users_elements.length; i++) {
    const user = users_elements[`user_${i + 1}`].getElementsByTagName('p') 
    const user_data = {
      name: getOnlyValue(user[`name_${i + 1}`].textContent),
      username: getOnlyValue(user[`username_${i + 1}`].textContent),
      email: getOnlyValue(user[`email_${i + 1}`].textContent),
      city: getOnlyValue(user[`city_${i + 1}`].textContent),
      zipcode: getOnlyValue(user[`zipcode_${i + 1}`].textContent),
      phone: getOnlyValue(user[`phone_${i + 1}`].textContent),
    }

    users.push(user_data);
  }


  return users;

}




function getOnlyValue(text) {

  const splitted_text = text.split(': ');
  return splitted_text[1];

}









displayListOfUsers(true);



export {
  getUsersList, displayListOfUsers, displayOneUserInList,
  getUsersListFromHTML
};