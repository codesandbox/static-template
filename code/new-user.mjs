import { displayOneUserInList } from './users-list.mjs';
import { validateNewUserForm } from './validate-form.mjs';




async function addNewUser() {

  if (!validateNewUserForm())
    return;



  const userForm = document.forms.userForm;
  const user = {
    name: userForm.name.value,
    username: userForm.username.value,
    email: userForm.email.value,
    address: {
      city: userForm.city.value,
      zipcode: userForm.zipcode.value,
    },
    phone: userForm.phone.value
  }

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then((response) => response.json())
  .then(async (data) => {
    const users_exist = document.getElementById('users-cards-area').getElementsByTagName('div').length;
    displayOneUserInList(document.getElementById('users-cards-area'), user, 'card', 'div', users_exist + 1);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
    return;
  });


  document.getElementById(`userForm`).reset();

}


document.getElementById('submit-new-user-form').addEventListener('click', addNewUser);