class Movie{
  constructor(title,studio,year,description,imgURL){
    this.title = title;
    this.studio = studio;
    this.year = year;
    this.description = description;
    this.imgURL = imgURL;
  }
};

let inDescription = 'En el pueblo de Derry, Maine, un joven llamado Bill Denbrough (Jaeden Martell) ayuda a su hermano pequeño, Georgie Denbrough (Jackson Robert Scott) a hacer un barco de papel. Bill le pide que baje al sótano por parafina para impermeabilizarlo, George baja y consigue la parafina para el barco aunque nota allí una presencia que lo asusta. Bill, con su hermano abrazándole, unta el barco con la parafina y se lo entrega a Georgie para que vaya a jugar en la lluvia excusándose de no poder acompañarlo ya que está muy enfermo.George baja a la calle y juega con el barco haciéndolo navegar por la orilla de la acera hasta que en un descuido cae a una alcantarilla abierta. Ahí se encuentra con un hombre vestido de payaso que se presenta como Pennywise, el payaso bailarín (Bill Skarsgård). El payaso conversa con George hasta ganar su confianza y cuando consigue que George intente coger el barco lo atrapa y muestra que es un monstruo que le arranca un brazo y lo arrastra a las alcantarillas.';
let inImgURL='https://images-na.ssl-images-amazon.com/images/I/61bMkkwpduL._AC_SL1024_.jpg';

let movie1=new Movie('It','New Line Cinema','2017',inDescription,inImgURL);

document.querySelector('#eins').innerHTML=
`
<img src="${movie1.imgURL}" class="card-img" alt="">
<div class="card-img-overlay">
  <h4 class="card-title">${movie1.title}</h4>
  <h6 class="card-text">Año de estreno: ${movie1.year}</h6>
  <h6 class="card-text">Estudio productor: ${movie1.studio}</h6>
  <p class="card-text">${movie1.description}</p>
</div>`
document.querySelector('#zwei').innerHTML=
`
<img src="${movie1.imgURL}" class="card-img" alt="">
<div class="card-img-overlay">
  <h4 class="card-title">${movie1.title}</h4>
  <h6 class="card-text">Año de estreno: ${movie1.year}</h6>
  <h6 class="card-text">Estudio productor: ${movie1.studio}</h6>
  <p class="card-text">${movie1.description}</p>
</div>
`
document.querySelector('#drei').innerHTML=
`
<img src="${movie1.imgURL}" class="card-img" alt="">
<div class="card-img-overlay">
  <h4 class="card-title">${movie1.title}</h4>
  <h6 class="card-text">Año de estreno: ${movie1.year}</h6>
  <h6 class="card-text">Estudio productor: ${movie1.studio}</h6>
  <p class="card-text">${movie1.description}</p>
</div>
`
document.querySelector('#vier').innerHTML=
`
<img src="${movie1.imgURL}" class="card-img" alt="">
<div class="card-img-overlay">
  <h4 class="card-title">${movie1.title}</h4>
  <h6 class="card-text">Año de estreno: ${movie1.year}</h6>
  <h6 class="card-text">Estudio productor: ${movie1.studio}</h6>
  <p class="card-text">${movie1.description}</p>
</div>
`