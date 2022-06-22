let http = new XMLHttpRequest();

http.open("get", "products.json", true);

http.send();

http.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    let products = JSON.parse(this.responseText);

    let output = "";

    for (let item of products) {
      output += `
      
      <div class="product">
          <img src="${item.imageURL}" alt="${item.image}">
         <div> <p class="name">${item.name}</p> </div>
        
          
          <p class="price"> <span>Rs</span> <span>${item.price}</span> <span><button class="cart-button">Add to Cart</button></span>
          
          </p>
          </div>
      `;
    }
    document.querySelector(".products").innerHTML = output;
  }
};
