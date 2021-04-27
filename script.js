fetch(
  `${document.location.protocol}//${document.location.host}/catalog.json`
).then(async (response) => {
  const database = await response.json();
  rednerCatalog(database.smartphones.catalog);
});

function rednerCatalog(catalog) {
  const productList = document.querySelector(".product-list");

  productList.innerHTML = catalog
    .map(
      (product) => `
	  <article class="product-card">
	  	<h3>${product.name}</h3>
	  	<div>Цвет: ${product.color}</div>
	  	<div>${product.price} рублей</div>
	  </article>
	`
    )
    .join("");
}
