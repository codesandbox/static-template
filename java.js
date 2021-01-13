const needle = require("needle");

// The code below sets the bearer token from your environment variables
// To set environment variables on Mac OS X, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = (process.env.BEARER_TOKEN =
  "AAAAAAAAAAAAAAAAAAAAAGEGLwEAAAAAc%2Fe72XUxXZWh3XxuaSmxv2SVEII%3DQfXB1z0ooYTVkdJVtl4FV5J0tE0hPXbnExkXA6wCFYonAzVqA9");

const endpointURL =
  "https://api.twitter.com/2/users/by?usernames=fLmX8vpeeSVKqy6PqGTW3S8J9";

async function getRequest() {
  const params = {
    usernames: "TwitterDev,TwitterAPI", // Edit usernames to look up
    "user.fields": "created_at,description" // Edit optional query parameters here
  };

  const res = await needle("get", endpointURL, params, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  if (res.body) {
    return res.body;
  } else {
    throw new Error("Unsuccessful request");
  }
}

(async () => {
  try {
    // Make request
    const response = await getRequest();
    console.log(response);
  } catch (e) {
    console.log(e);
    process.exit(-1);
  }
  process.exit();
})();
