document.addEventListener("DOMContentLoaded", function () {
  //archivos json con data

  //ejecucion planes moviles
  const planesMoviles = () => {
    let urlmovil = "https://l85k2.csb.app/assets/data/movil.json";
    //fetch planes moviles
    const fetchMovilData = async () => {
      const fetchData = await fetch(urlmovil);
      const data = await fetchData.json();
      //tomar div donde se insertaran los planes
      const planesMoviles = document.getElementById("planes-moviles");
      //variable que contendra el html generado con json
      let cardItem;
      //recorrer todos los planes moviles y crear un html (card) por cada uno
      data.map((item) => {
        cardItem = `

 ${
   item.active === true
     ? `

 <div class="cardmovil">
 ${
   item.headercolor === "red"
     ? `
 <div class="movil-header red-header">
   <h4>${item.titulo}</h4>
 </div>
 `
     : ``
 }
 ${
   item.headercolor === "grey"
     ? `
 <div class="movil-header grey-header">
   <h4>${item.titulo}</h4>
 </div>
 `
     : ``
 }
 
 <!--box1-->
 <div class="movil-box-1">
   <div class="movil-icon">
     <img src="./assets/img/movil.jpg" alt="">
   </div>
   <div class="movil-title">
     <ul>
       <li class="movil-nombre">${item.nombre}</li>
       <li class="movil-gb">${item.gigas}</li>
     </ul>
   </div>
 </div>
   <!--box2-->
 <div class="movil-box-2">
 ${
   item.porcentaje !== ""
     ? `
 <div class="porcentaje">${item.porcentaje} <span>% <strong>DCTO</strong></span></div>
`
     : ``
 }
  
   <ul>
     <li>Precio Oferta</li>
     <li>${item.preciooferta}</li>
     <li>${item.periodo}</li>
     ${
       item.tituloprecio !== ""
         ? `
     <li>${item.tituloprecio}: ${item.cargofijo}</li>
 `
         : ``
     }
 
    
   </ul>
 </div>
  <!--box3-->
  <div id="movil-info" class="movil-box-3 animate-all movil-box-hide">
    <div class="movil-box-3-row-item">
      <ul class="movil-row-item-ul">
         <span>
             <li><img src="./assets/img/icons-movil/internet.jpg" alt=""/></li>
             <li>Internet</li>
         </span>
        <li class="item-detail">${item.internet}</li>
      </ul>
    </div>
    <div class="movil-box-3-row-item">
       <ul class="movil-row-item-ul">
           <span>
               <li><img src="./assets/img/icons-movil/minutos.jpg" alt=""/></li>
               <li>Minutos</li>
           </span>
          <li class="item-detail">${item.minutos}</li>
        </ul>
     </div>
     <div class="movil-box-3-row-item">
         <ul class="movil-row-item-ul">
             <span>
                 <li><img src="./assets/img/icons-movil/comparte_claro.jpg" alt=""/></li>
                 <li>Comparte Claro</li>
             </span>
            <li class="item-detail">${item.comparteclaro}</li>
          </ul>
       </div>
       <div class="movil-box-3-row-item">
           <ul class="movil-row-item-ul">
               <span>
                   <li><img src="./assets/img/icons-movil/internet.jpg" alt=""/></li>
                   <li>Roaming</li>
               </span>
              <li class="item-detail">${item.roaming}</li>
            </ul>
         </div>
         <div class="movil-box-3-row-item">
             <ul class="movil-row-item-ul">
                 <span>
                     <li><img src="./assets/img/icons-movil/ldi.jpg" alt=""/></li>
                     <li>Larga Distancia Internacional</li>
                 </span>
                <li class="item-detail">${item.ldi}</li>
              </ul>
           </div>
           <div class="movil-box-3-row-item item-claro">
               <ul class="movil-row-item-ul">
                   <li class="item-claro-video"><img src="./assets/img/claro-video.jpg" alt=""/></li>
                  <li class="item-detail">${item.clarovideotext}</li>
                </ul>
             </div>
 
             <div class="movil-box-3-row-item item-claro">
                 <ul class="movil-row-item-ul">
                     <li class="item-claro-musica"><img src="./assets/img/claro-musica.jpg" alt=""/></li>
                    <li class="item-detail">${item.claromusicatext}</li>
                  </ul>
               </div>
               ${
                 item.redessociales === true
                   ? `
               <div class="movil-box-3-row-item item-claro">
               <ul class="movil-row-item-ul">
                  <li>Redes Sociales</li>
                  <li class="list-ul-rrss">
                    <ul class="rrss-list">
                      <li><img src="./assets/img/rrss-icons/messenger.png"/></li>
                      <li><img src="./assets/img/rrss-icons/facebook.png"/></li>
                      <li><img src="./assets/img/rrss-icons/instagram.png"/></li>
                      <li><img src="./assets/img/rrss-icons/twitter.png"/></li>
                      <li><img src="./assets/img/rrss-icons/whatsapp.png"/></li>
                      <li><img src="./assets/img/rrss-icons/telegram.png"/></li>
                    </ul>
                  </li>
                </ul>
             </div>`
                   : ` `
               }    
  </div>
 
  <div class="movile-box-button">
    <a href="${
      item.masinformacionurl
    }" class="movil-mas-informacion animate-6 hide-item-mas">Más información </a>
     
   <span class="movil-trigger">Ver detalle de plan <img class="animate-6" src="./assets/img/chevron.png"/></span>
  </div>
   <!--box4-->
   <div class="movil-box-4">
   ${
     item.contrataronline === true
       ? `<a href="${item.contrataronlineurl}" class="movil-btn-contratar" >Contratar Online</a>`
       : ` `
   }
   ${
     item.tellamamos === true
       ? `<a href="${item.tellamamosurl}" class="movil-btn-tellamamos" >Te Llamamos</a>`
       : ` `
   }
 </div>
 </div>`
     : ``
 }
  `;
        //insertar cards planes moviles en html
        planesMoviles.innerHTML += cardItem;
      });
    };

    //ejecutar fetch
    fetchMovilData();

    //inicializar ver detalle plan btn
    function verDetalleBtn() {
      const triggerArr = document.querySelectorAll(".movil-trigger");
      var detalles = Array.from(triggerArr);
      detalles.map((item) => {
        item.addEventListener("click", () => {
          const boxInfo = item.parentNode.previousElementSibling;
          boxInfo.classList.toggle("movil-box-hide");
          const btnMasInfo = item.parentNode.childNodes[1];
          btnMasInfo.classList.toggle("hide-item-mas");
        });
      });
    }
    setTimeout(verDetalleBtn, 2000);
  };
  planesMoviles();

  //ejecucion planes con equipo
  const planesEquipos = () => {
    let urlequipo = "https://l85k2.csb.app/assets/data/equipos.json";
    //fetch planes moviles
    const fetchEquipoData = async () => {
      const fetchData = await fetch(urlequipo);
      const data = await fetchData.json();
      //tomar div donde se insertaran los planes
      const equipos = document.getElementById("equipos");
      //variable que contendra el html generado con json
      let cardItem;
      //recorrer todos los planes moviles y crear un html (card) por cada uno
      data.map((item) => {
        cardItem = `
        ${
          item.active === true
            ? `
          <div class="card-equipo">
          <div class="card-equipo-superior">
            <div class="card-equipo-col-1">
              <img
                src="${item.imgequipo}"
                alt=""
              />
            </div>
            <div class="card-equipo-col-2">
              <ul class="card-equipo-detail">
                <li class="card-equipo-detail-image">
                  <img
                    src="https://www.clarochile.cl/portal/cl/archivos_generales/icono-pantalla_20180904.png"
                    alt=""
                  />
                  <small>${item.pantalla}</small>
                </li>
                <li class="card-equipo-detail-image">
                  <img
                    src="https://www.clarochile.cl/portal/cl/archivos_generales/icono-camara_20180904.png"
                    alt=""
                  />
                  <small>${item.camara}</small>
                </li>
                <li class="card-equipo-detail-image">
                  <img
                    src="https://www.clarochile.cl/portal/cl/archivos_generales/icono-memoria_20180904.png"
                    alt=""
                  />
                  <small>${item.memoria}</small>
                </li>
                <li class="card-equipo-detail-image sae">
                  <img
                    src="https://www.clarochile.cl/portal/cl/archivos_generales/icono-sae_20180904.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="card-equipo-inferior">
            <div class="card-inferior-title-container">
              <h2 class="card-equipo-title">${item.titulo}</h2>
              ${
                item.exclusivoecommerce === true
                  ? `
              <span class="exclusivo-label">Exclusivo Ecommerce</span>
              `
                  : ``
              }

            </div>
            <div class="card-equipo-price-data">
              <div class="card-equipo-price-decoration">
                <div class="card-equipo-data-col-1">
                  <ul>
                    <li>Dcto</li>
                    <li>${item.descuento}%</li>
                  </ul>
                </div>
                <div class="card-equipo-data-col-2">
                  <ul class="card-equipo-price-detail">
                    <li>${item.cuotastitle}</li>
                    <li>$${item.precio}</li>
                    <li>Precio oferta: $ ${item.preciooferta}</li>
                    <li>Precio referencial:</li>
                    <li>$ ${item.precioreferencial}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="card-equipos-btns">
          ${
            item.contrataronline === true
              ? `<a href="${item.contrataronlineurl}" class="card-equipo-btn equipo-btn-red">Comprar Online</a>`
              : ``
          }
          ${
            item.tellamamos === true
              ? `<a href="${item.tellamamosurl}" class="card-equipo-btn equipo-btn-green">Te llamamos</a>`
              : ``
          }

          </div>
        </div>
          `
            : ``
        }

      `;
        //insertar cards planes moviles en html
        equipos.innerHTML += cardItem;
      });
    };

    //ejecutar fetch
    fetchEquipoData();
  };
  planesEquipos();

  //ejecucion planes hogar

  const planesHogar = () => {
    let urlhogar = "https://l85k2.csb.app/assets/data/hogar.json";
    //fetch planes moviles
    const fetchHogarData = async () => {
      const fetchData = await fetch(urlhogar);
      const data = await fetchData.json();
      //tomar div donde se insertaran los planes
      const hogar = document.getElementById("hogar");
      //variable que contendra el html generado con json
      let cardItem;
      //recorrer todos los planes moviles y crear un html (card) por cada uno
      data.map((item) => {
        cardItem = `

 ${
   item.active === true
     ? `

 <div class="cardmovil">
 ${
   item.headercolor === "yellow"
     ? `<div class="movil-header yellow-header"><h4>${item.titulo}</h4></div>`
     : ``
 }
 ${
   item.headercolor === "red"
     ? `<div class="movil-header red-header"><h4>${item.titulo}</h4></div>`
     : ``
 }
 ${
   item.headercolor === "grey"
     ? `<div class="movil-header grey-header"><h4>${item.titulo}</h4></div>`
     : ``
 }

 
 <!--box1-->
 <div class="movil-box-1">
   <div class="movil-icon">
     <img src="${item.icon}" alt="">
   </div>
   <div class="movil-title">
     <ul>
       <li class="movil-nombre">${item.nombre}</li>
       <li class="movil-gb">${item.promo}</li>
     </ul>
   </div>
 </div>
   <!--box2-->
 <div class="movil-box-2">
 ${
   item.porcentaje !== ""
     ? `
 <div class="porcentaje">${item.porcentaje} <span>% <strong>DCTO</strong></span></div>
`
     : ``
 }
  
   <ul>
     <li>Precio Oferta</li>
     <li>${item.preciooferta}</li>
     <li>${item.periodo}</li>
     ${
       item.tituloprecio !== ""
         ? `
     <li>${item.tituloprecio}: ${item.cargofijo}</li>
 `
         : ``
     }

     ${
       item.destacado === true
         ? `
        <ul class="destacado">
        <li>${item.destacadotitle}</li>
        </ul>
`
         : ``
     }

     


 
   
  
 </div>
 <div class="adicional-content">
 </ul>
 ${
   item.adicional === true
     ? `
  <ul class="adicional">
  <li>${item.adicionaltitle}</li>
  <li><img src="${item.adicionalimg}"/></li>
  </ul>
`
     : ``
 }
 </div>
  <!--box3-->
  <div id="movil-info" class="movil-box-3 animate-all movil-box-hide">
    <div class="movil-box-3-row-item">
      <ul class="movil-row-item-ul">
         <span>
             <li><img src="./assets/img/bajada.jpg" alt=""/></li>
             <li>Velocidad Bajada</li>
         </span>
        <li class="item-detail">${item.velocidadbajada}</li>
      </ul>
    </div>
    <div class="movil-box-3-row-item">
       <ul class="movil-row-item-ul">
           <span>
               <li><img src="./assets/img/subida.jpg" alt=""/></li>
               <li>Velocidad Subida</li>
           </span>
          <li class="item-detail">${item.velocidadsubida}</li>
        </ul>
     </div>
     <div class="movil-box-3-row-item">
         <ul class="movil-row-item-ul">
             <span>
                 <li><img src="./assets/img/wifi.jpg" alt=""/></li>
                 <li>Router WiFi</li>
             </span>
            <li class="item-detail">${item.routerwifi}</li>
          </ul>
       </div>
    
    
      
 
            
             
  </div>
 
  <div class="movile-box-button">
    <a href="${
      item.masinformacionurl
    }" class="movil-mas-informacion animate-6 hide-item-mas">Más información </a>
     
   <span class="movil-trigger">Ver detalle de plan <img class="animate-6" src="./assets/img/chevron.png"/></span>
  </div>
   <!--box4-->
   <div class="movil-box-4">
   ${
     item.contrataronline === true
       ? `<a href="${item.contrataronlineurl}" class="movil-btn-contratar" >Contratar Online</a>`
       : ` `
   }
   ${
     item.tellamamos === true
       ? `<a href="${item.tellamamosurl}" class="movil-btn-tellamamos" >Te Llamamos</a>`
       : ` `
   }
 </div>
 </div>`
     : ``
 }
  `;
        //insertar cards planes moviles en html
        hogar.innerHTML += cardItem;
      });
    };

    //ejecutar fetch
    fetchHogarData();
  };
  planesHogar();
});
