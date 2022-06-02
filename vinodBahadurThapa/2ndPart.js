const studentdata = [
  { id: 1, name: "vinod", degree: "MCS" },
  { id: 2, name: "Thapa", degree: "BCS" },
  { id: 3, name: "ThapaTechnical", degree: "CS" }
];

console.log(...studentdata);

const newData = studentdata.map((e) => {
  return `<p>Name:: ${e.name}.</p>
          <p>Id:: ${e.id}.</p>
          <p>Degree:: ${e.degree}</p>`;
});

console.log(newData);

// document.getElementById("root").innerHTML = newData;
document.getElementById("root").innerHTML = newData;
