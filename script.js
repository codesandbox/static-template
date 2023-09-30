document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("tbody");
  const themeSwitch = document.getElementById("theme-switch");

  // Função para alternar entre temas claro e escuro
  function toggleTheme() {
    document.body.classList.toggle("dark-theme");
  }

  // Verificar o estado do switch de tema e aplicar o tema correspondente
  themeSwitch.addEventListener("change", function () {
    if (themeSwitch.checked) {
      localStorage.setItem("theme", "dark");
      toggleTheme();
    } else {
      localStorage.setItem("theme", "light");
      toggleTheme();
    }
  });

  // Carregar o tema do localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    themeSwitch.checked = true;
    toggleTheme();
  }

  // Criar linhas para os 182 dias
  for (let day = 1; day <= 182; day++) {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${day}</td>
          <td><input type="checkbox"></td>
      `;
    tableBody.appendChild(row);
  }

  // Salvar os dados no localStorage quando uma checkbox for alterada
  tableBody.addEventListener("change", function (e) {
    const checkbox = e.target;
    if (checkbox.type === "checkbox") {
      const day = checkbox.closest("tr").querySelector("td:first-child")
        .textContent;
      const isChecked = checkbox.checked;
      localStorage.setItem(`day_${day}`, isChecked);
    }
  });

  // Carregar os dados do localStorage
  for (let day = 1; day <= 182; day++) {
    const isChecked = JSON.parse(localStorage.getItem(`day_${day}`));
    if (isChecked) {
      const checkbox = tableBody.querySelector(
        `tr:nth-child(${day}) input[type="checkbox"]`
      );
      checkbox.checked = true;
    }
  }
});
