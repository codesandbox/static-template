$("#button-presale").on("click", function () {
  const userTerm = document.getElementById("user-input").value;

  // déclaration des headers, à ne pas changer --------------------------
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow"
  };
  // -----------------------------------------------------------------------

  fetch(
    // rentrer le bon lien de l'API en question
    // penser à activer un token API sur google cloud api
    "https://sheets.googleapis.com/v4/spreadsheets/1u6EyPBK4sxEFvTB4USF7C8bR_gGWIgZ08mItAmSe7_g/values/1?alt=json&key=AIzaSyBRdE9BQKeXTODnavRQEGAvKHdmck2MdcU",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      // mettre la fonction qu'on veut éxecuter avec le paramètre : data
      // si ne marche pas, tester ça : console.log(data)
      checkUsedLinks(data);
    })
    .catch((error) => console.log("error", error));

  function checkUsedLinks(data) {
    // i commence par 1 pour négliger le titre de chaque colonne
    for (let i = 1; i < data.values.length; i++) {
      // sur google, values est un tableau même si il contient une seule valeur, donc on ajoute le [0] pour recuperer la première valeur, ! toujours checker console.log(data)
      if (data.values[i][0] === userTerm) {
        document.getElementById("modal-access-presale").style.display = "none";
        break;
      } else {
        document.getElementById("modal-access-denied").style.display = "block";
      }
    }
  }
});
