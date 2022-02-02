const GITHUB_API = "https://api.github.com/users";

/**
 * Return an array of usernames fetched from the Github API
 * https://api.github.com/users
 */
async function getGithubUsernames() {
  // 1. Get the API response
  const res = await fetch(GITHUB_API);
  const data = await res.json();
  // console.log(data);

  // 2. Get the usernames array
  const usernamesArray = data.map((userData) => userData.login);
  // console.log(usernamesArray);

  return usernamesArray;
}

/**
 * Display the values passed as arguments as a list on the screen
 * @param {Array} values
 */
function displayValuesAsList(values) {
  // 1. Get the parent element
  const parentElement = document.getElementById("usernames-list");

  // 2. For each value in values
  values.forEach((element) => {
    // 2.1 Create an <li> element with text as the value
    const li = document.createElement("li");
    li.textContent = element;

    // 2.2 Append the element to the parent element
    parentElement.append(li);
  });
}

async function main() {
  const usernamesArray = await getGithubUsernames();
  console.log(usernamesArray);

  displayValuesAsList(usernamesArray);
}

main();
