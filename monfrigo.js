// ===============================================================
// ====================== MINI PROJET FRIGO ======================
// ===============================================================

// ===== Afficher la liste des produits présents dans le frigo =====
// -- Gestion du clic
// cible : le bouton d'id "open"
// event : click
// action : liste des produits 
document.getElementById("open").addEventListener("click", getProduits); 

// -- La fonction qui récupère la liste des produits et les affiche
function getProduits(event) {
    // url de la ressource 
    const url = "https://webmmi.iut-tlse3.fr/~jean-marie.pecatte/frigo/public/7/produits";

    let fetchOptions = { method: "GET" }; // les options de l'API fetch

    // exécuter la requête AJAX 
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON); // dataJSON = les données renvoyées
            let produits = dataJSON;
            
            // On crée un tableau
            let texteHTML = "<table>"+
                            "<caption>Liste des produits contenus dans le frigo</caption>"+
                            "<tr>"+
                            "<th>Nom</th>"+
                            "<th>Quantité</th>"+
                            "<th>Action</th>"+
                            "</tr>";

            // On affiche chaque produit dans le tableau
            for (let produit of produits) {
                texteHTML = texteHTML +
                            "<tr><td>" +
                            produit.nom +
                            "</td><td>" +
                            produit.qte +
                            "</td><td><input type='button' class='options' name='add' value='+', nom='"+
                            produit.nom + 
                            "' qte='"+
                            produit.qte +
                            "' id='" + 
                            produit.id +
                            "'><input type='button' class='options' name='remove' value='-', nom='"+
                            produit.nom + 
                            "' qte='"+
                            produit.qte +
                            "' id='" + 
                            produit.id +
                            "'><input type='button' id='delete' value='Supprimer', onclick='deleteProduit("+
                            produit.id +
                            ")'></td></tr>";
            }
            // Pour l'affichage dans le navigateur
            document.getElementById("liste").innerHTML = texteHTML;

            // Gestion du clic sur les boutons 
            let event1 = document.getElementsByName("add");
            for (let event of event1){
                event.addEventListener("click", addOneQte);
            }
            let event2 = document.getElementsByName("remove");
            for (let event of event2){
                event.addEventListener("click", removeOneQte);
            }
        })
        .catch((error) => {
        // gestion des erreurs
        console.log(error);
        });
}

// ===== Ajouter un produit dans le frigo =====
// -- Gestion du clic
// cible : le bouton d'id "valider"
// event : click
// action : ajout produit
document.getElementById("valider").addEventListener("click", addProduit); 

// -- La fonction qui ajoute un produit dans le frigo
function addProduit(event) {
    let nom = document.getElementById("produit").value; 
    let qte = document.getElementById("quantite").value; 
    let produit = {nom, qte};
    console.log(JSON.stringify(produit));
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    // url de la ressource 
    const url = "https://webmmi.iut-tlse3.fr/~jean-marie.pecatte/frigo/public/7/produits";

    // les options de l'API fetch
    let fetchOptions = { 
        method: "POST",
        headers: headers,
        body: JSON.stringify(produit)
    }; 

    // exécuter la requête AJAX 
    fetch(url, fetchOptions)
        .then(response => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON); // dataJSON = les données renvoyées
            getProduits(); // On actualise l'affichage
        })
        .catch((error) => {
            // gestion des erreurs
            console.log(error);
        });
}

// ===== Ajouter 1 à la quantité d'un produit présent dans le frigo =====
// -- Gestion du clic
// cible : le bouton de name "add"
// event : click
// action : augmente la quantité
function addOneQte(event){
    let id = event.target.id;
    let nom = event.target.attributes.nom.value;
    let qte = Number.parseInt(event.target.attributes.qte.value) + 1;
    let produit = {id, nom, qte};
    console.log(JSON.stringify(produit));

    let headers = new Headers(); 
    headers.append("Content-Type", "application/json");

    // url de la ressource 
    const url = "https://webmmi.iut-tlse3.fr/~jean-marie.pecatte/frigo/public/7/produits";

    // les options de l'API fetch
    let fetchOptions = {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(produit)
      };

      // exécuter la requête AJAX 
      fetch(url, fetchOptions)
        .then(response => {
            return response.json();
        })

        .then((dataJSON) => {
            console.log(dataJSON);
            getProduits(); // On actualise l'affichage
        })

        .catch((error) => {
            // gestion des erreurs
            console.log(error);
        });
}

// ===== Enlever 1 à la quantité d'un produit présent dans le frigo =====
// -- Gestion du clic
// cible : le bouton de name "remove"
// event : click
// action : diminue la quantité
function removeOneQte(event){
    let id = event.target.id;
    let nom = event.target.attributes.nom.value;
    let qte = Number.parseInt(event.target.attributes.qte.value);

    // Si la quantité est supérieure à 1, on actualise la valeur de la quantité
    if (qte - 1 >= 1){
        qte = qte - 1;
        let produit = {id, nom, qte};

        let headers = new Headers(); 
        headers.append("Content-Type", "application/json");

        // url de la ressource 
        const url = "https://webmmi.iut-tlse3.fr/~jean-marie.pecatte/frigo/public/7/produits";

        // les options de l'API fetch
        let fetchOptions = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(produit)
        };

        // exécuter la requête AJAX 
        fetch(url, fetchOptions)
            .then(response => {
                return response.json();
            })

            .then((dataJSON) => {
                console.log(dataJSON);
                getProduits(); // On actualise l'affichage
            })

            .catch((error) => {
                // gestion des erreurs
                console.log(error);
            });
    }

    // Sinon on supprime le produit
    else {
        deleteProduit(id);
    }
}


// ===== Supprimer un produit du frigo =====
function deleteProduit(id){
    // url de la ressource 
    const url = "https://webmmi.iut-tlse3.fr/~jean-marie.pecatte/frigo/public/7/produits";

    let fetchOptions = { method: "DELETE" }; // les options de l'API fetch

    fetch(url + "/" + id, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON);
            getProduits(); // On actualise l'affichage
        })
        .catch((error) => {
            console.log(error);
        });
}

// ===== Afficher la liste des produits correspondants à la recherche =====
// -- Gestion du clic
// cible : le bouton d'id "search"
// event : click
// action : liste des produits recherchés
document.getElementById("search").addEventListener("click", search);

// La fonction qui recherche un produit dans la frigo
function search(event){ 
    // url de la ressource 
    const url = "https://webmmi.iut-tlse3.fr/~jean-marie.pecatte/frigo/public/7/produits";

    let fetchOptions = { method: "GET" }; // les options de l'API fetch

    // On récupère la valeur entrée dans le champ de recherche
    let recherche = document.getElementById("research").value;

    // exécuter la requête AJAX 
    fetch(url + "?search=" + recherche, fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON); // dataJSON = les données renvoyées
            let produits = dataJSON;
            // On crée un tableau
            let texteHTML = "<table>"+
                            "<caption>Liste des produits contenus dans le frigo</caption>"+
                            "<tr>"+
                            "<th>Nom</th>"+
                            "<th>Quantité</th>"+
                            "<th>Action</th>"+
                            "</tr>";

            // On affiche chaque produit dans le tableau
            for (let produit of produits) {
                texteHTML = texteHTML +
                            "<tr><td>" +
                            produit.nom +
                            "</td><td>" +
                            produit.qte +
                            "</td><td><input type='button' class='options' name='add' value='+', nom='"+
                            produit.nom + 
                            "' qte='"+
                            produit.qte +
                            "' id='" + 
                            produit.id +
                            "'><input type='button' class='options' name='remove' value='-', nom='"+
                            produit.nom + 
                            "' qte='"+
                            produit.qte +
                            "' id='" + 
                            produit.id +
                            "'><input type='button' id='delete' value='Supprimer', onclick='deleteProduit("+
                            produit.id +
                            ")'></td></tr>";
            }
            // Pour l'affichage dans le navigateur
            document.getElementById("liste").innerHTML = texteHTML;

            // Gestion du clic sur les boutons 
            let event1 = document.getElementsByName("add");
            for (let event of event1){
                event.addEventListener("click", addOneQte);
            }
            let event2 = document.getElementsByName("remove");
            for (let event of event2){
                event.addEventListener("click", removeOneQte);
            }
        })
        .catch((error) => {
        // gestion des erreurs
        console.log(error);
        });
}