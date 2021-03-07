
const getData = () => {
    axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/')
    .then( response =>{
        res = response;
        console.log('response: ',res);

        const imgCon = document.getElementById("imgWrapper");
        const img1 = document.createElement("img");
        const detCont = document.getElementById("productDetails");
        const head1 = document.createElement("h1");
        const head2 = document.createElement("h1");
        const priceCont = document.createElement("div");
        const pr = document.createElement("h4");
        const desCont = document.createElement("h4")
        const head3 =document.createElement("p");
        const head4 = document.createElement("h4");
        const para = document.createElement("p");        
        const head5 = document.createElement("h1"); 
        const imgPrev = document.createElement("div");
        const but = document.createElement("button");
                for(j=0;j<res.data[0].photos.length;j++){
                    const img2 = document.createElement("img");
                    imgPrev.appendChild(img2);
                    img2.src = res.data[0].photos[j];
                    img2.className = "imgPre"
                    img2.setAttribute("id", j);
                    console.log(img2.id);
                } 

    




            detCont.appendChild(head4);
            
            
            detCont.appendChild(head1);
            detCont.appendChild(head2);
            
            priceCont.appendChild(pr);
            detCont.appendChild(priceCont);
            detCont.appendChild(head4);
            priceCont.appendChild(head3);
            detCont.appendChild(head5);
            detCont.appendChild(para);
            detCont.appendChild(imgPrev);
            detCont.appendChild(but);
            imgCon.appendChild(img1);
        
            head1.classList.add("head1");
            head2.classList.add("head2");
            head3.classList.add("head3");
            head4.classList.add("head4");
            head5.classList.add("head5");
            priceCont.classList.add("price");
            pr.classList.add("pr");
        
            imgPrev.classList.add("imgPreCont");
            but.classList.add("btn-primary");
            but.classList.add("btn");

            
            console.log(head3);
            but.innerText = "Add to Cart";
            desCont.innerText = "Description";
            head1.innerText = res.data[0].name;
            head2.innerText = res.data[0].brand;
            pr.innerText = "Price Rs.";
            head3.innerText = res.data[0].price;
            head4.innerText = res.data[0].description;
            head5.innerText = "Product Preview";
            img1.src = res.data[0].preview;



        })
    };

getData();

const imgpre = document