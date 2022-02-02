const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja"
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator"
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer"
  }
];

const getDataRow = (dataObj) => {
  const tableRow = document.createElement("tr");
  const tableData = `
  <td>${dataObj.id}</td>
  <td>${dataObj.fullName}</td>
  <td>${dataObj.jobTitle}</td>
  `;
  tableRow.innerHTML = tableData;
  return tableRow;
};

const addDataToTable = (data) => {
  const tableData = document.getElementById("table-data");
  data.forEach((item) => {
    const row = getDataRow(item);
    tableData.appendChild(row);
  });
};

const data = new Promise(function (myResolve, myReject) {
  try {
    myResolve(team);
  } catch (ex) {
    myReject(ex);
  }
});
console.log(data);
data
  .then((response) => {
    addDataToTable(response);
  })
  .catch((exception) => {
    console.log(exception);
  });

//ADD YOUR CODE BELOW

//TODO: Create a promise to resolve `team`

//TODO: Consume the promise and use addDataToTable(data)
//Function to add the data value resolved to table.
