function redirectToTeam(teamName) {
  // Aquí puedes definir las redirecciones a las páginas de cada equipo.
  switch (teamName) {
    case "alianza":
      window.location.href = "alianza-lima.html"; // Cambia 'alianza-lima.html' por la URL correcta.
      break;
    case "universitario":
      window.location.href = "universitario.html"; // Cambia 'universitario.html' por la URL correcta.
      break;
    case "cristal":
      window.location.href = "sporting-cristal.html"; // Cambia 'sporting-cristal.html' por la URL correcta.
      break;
    case "sport-boys":
      window.location.href = "sport-boys.html"; // Cambia 'sport-boys.html' por la URL correcta.
      break;
    default:
      alert("Equipo no encontrado");
      break;
  }
}

// Puedes agregar más funciones JavaScript si es necesario.
