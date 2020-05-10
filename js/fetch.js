const urlGet = 'https://jsonplaceholder.typicode.com/todos/1';
const urlPost = 'https://jsonplaceholder.typicode.com/posts';
// JSON as a String
const myData = '{"title": "New Post", "body": "This is a new post"}';
// JSON as a JSON object!
const myData2 = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

const fetchGetFunction = () => {
  console.log('fetchGetFunction called');

  let fetchOptions = {
    method: 'GET',
    mode: 'cors'
  };

  fetch(urlPost, fetchOptions)
    // Converting to JSON
    .then(response => response.json())
    // Working with results
    .then(data => {
      console.log(data);
      outputJson(data);
    })
    .catch(error => console.error(error));
};

const fetchPostFunction = () => {
  console.log('fetchPostFunction Called');

  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  let fetchOptions = {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify(myData2)
  };

  fetch(urlPost, fetchOptions)
    // Converting to JSON
    .then(response => response.json())
    // Working with results
    .then(data => {
      console.log(data);
      outputJson(data);
    })
    .catch(error => console.error(error));
};

const outputJson = inp => {
  if (document.getElementById('preOut')) {
    document
      .getElementById('preOut')
      .parentNode.removeChild(document.getElementById('preOut'));
  }

  let outp = document.createElement('pre');
  outp.setAttribute('id', 'preOut');
  outp.innerHTML = syntaxHighlight(JSON.stringify(inp, null, 2));
  document.body.appendChild(outp);
};

function syntaxHighlight(json) {
  json = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function(match) {
      var cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    }
  );
}
