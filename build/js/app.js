document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp()
{
  creargaleria();
  scrollNav();
  NavegacionFija();
}

function NavegacionFija()
{
   const barra = document.querySelector('header');
   const sobrefestival = document.querySelector('.sobre-festival');
   const body = document.querySelector('body');

   window.addEventListener('scroll',function(){

  
         if(sobrefestival.getBoundingClientRect().top<0)
         {

          body.classList.add('fijo-scroll');
          barra.classList.add('fijo');
         }
         else{
           body.classList.remove('fijo-scroll');
           barra.classList.remove('fijo')
         }
   });


}

function scrollNav()
{
 const enlances = document.querySelectorAll('.navegacion-principal a');//seleccionando todos los enlances
 enlances.forEach(enlance=>{ //recorriendo todos los enlances
     
  enlance.addEventListener('click',function(e){ // cuando escuche por el evento click


    const seccionscroll =e.target.attributes.href.value;

    const seccion = document.querySelector(seccionscroll);

    console.log(seccion);


    seccion.scrollIntoView();

  });

 });
}


function creargaleria()
{
    const galeria = document.querySelector('.galeria-imagenes')
    for(let i = 1 ; i<=12;i++)
    {
      const imagen = document.createElement('picture');

      imagen.innerHTML = ` <img src="build/img/thumb/${i}.webp" alt="imagen"> `;

      imagen.onclick= function(){
        mostrarimagen(i);
      }

      galeria.appendChild(imagen);
    }

}

function mostrarimagen(id)
{
    const imagen = document.createElement('picture');

      imagen.innerHTML = ` <img src="build/img/grande/${id}.avif" alt="imagen"> `;
                         
   
    //creando el overlay con la Imagen
    const overlay =document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        body.classList.remove('fijar-body')
        overlay.remove();

    }

    //boton para cerra el modal

    const Cerrarmodal = document.createElement('p')
    Cerrarmodal.textContent = 'X';
    Cerrarmodal.onclick = function(){
     
        body.classList.remove('fijar-body')
        overlay.remove();
       
    }
    Cerrarmodal.classList.add('Btn-cerrar');

    overlay.appendChild(Cerrarmodal);
    
    //añadirlo al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body')



}