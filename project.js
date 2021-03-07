const getData = () => {
  axios
    .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    .then((response) => {
      console.log("response:", response);
      for (let i = 0; i < response.data.length; i++) {
        const card = document.createElement("div");
        const imag = document.createElement("img");
        const a = document.createElement("a");
        const clbody = document.createElement("div");
        const pa = document.createElement("p");
        const cont = document.getElementById("clothesCont");
        const cont1 = document.getElementById("accessoriesCont");

        let res = response.data[i];

        if (res.isAccessory === false) {
          cont.appendChild(card);
          card.appendChild(a);
          a.appendChild(imag);
          card.appendChild(clbody);
          clbody.appendChild(pa);

          card.classList.add("card");
          imag.classList.add("card-img-top");
          clbody.classList.add("card-body");
          pa.classList.add("card-text");

          imag.src = res.preview;
          pa.innerText = res.name;
        } else {
          cont1.appendChild(card);
          card.appendChild(a);
          a.appendChild(imag);
          card.appendChild(clbody);
          clbody.appendChild(pa);

          a.href = "/product-details.html";
          card.classList.add("card");
          imag.classList.add("card-img-top");
          clbody.classList.add("card-body");
          pa.classList.add("card-text");

          imag.src = res.preview;
          pa.innerText = res.name;
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
getData();
