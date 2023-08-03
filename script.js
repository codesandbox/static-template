function generateProcessFields(numOfProcesses) {
  const inputFieldsContainer = document.getElementById("inputFields");
  inputFieldsContainer.innerHTML = "";

  for (let i = 1; i <= numOfProcesses; i++) {
    const processFieldset = document.createElement("fieldset");
    processFieldset.innerHTML = `
      <legend>Process ${i}</legend>
      <label for="arrivalTime${i}">Arrival Time:</label>
      <input type="number" id="arrivalTime${i}" required>

      <label for="burstTime${i}">Burst Time:</label>
      <input type="number" id="burstTime${i}" required>
    `;
    inputFieldsContainer.appendChild(processFieldset);
  }
}

function calculate() {
  const algorithm = document.getElementById("algorithm").value;
  const numOfProcesses = parseInt(
    document.getElementById("numOfProcesses").value
  );

  // Generate process input fields dynamically based on the number of processes
  generateProcessFields(numOfProcesses);

  const timeQuantumContainer = document.getElementById("timeQuantumContainer");
  if (algorithm === "rr") {
    timeQuantumContainer.style.display = "block";
  } else {
    timeQuantumContainer.style.display = "none";
  }

  // Rest of the calculation logic remains the same as before.
}

document.getElementById("algorithm").addEventListener("change", function () {
  const selectedAlgorithm = this.value;
  const timeQuantumContainer = document.getElementById("timeQuantumContainer");

  if (selectedAlgorithm === "rr") {
    timeQuantumContainer.style.display = "block";
  } else {
    timeQuantumContainer.style.display = "none";
  }
});
