

window.addEventListener("load", () => {
  alert('canvas');
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext('2d'); //variable para dibujar
  const color = "#00f";
  const grosor = 1;


  //cambio de tamaño
  canvas.height = window.innerHeight; //margen
  canvas.width = window.innerWidth; //margen



  //variables
  let painting = false;

  function defcolor(c) {
    color = c;
  }

  function defgrosor(g) {
    grosor = g;
  }


  function startPosition(e){
    painting = true; //cuando demos click dibujara
    draw(e); //para tambien hacer puntos
  }

  function finishedPosition(){
    painting = false; //ya no dibujara nada cuando deje de dar click
    ctx.beginPath(); //para que no me dibuje lineas
  }


  function draw(e){   //funcion de dibuajar

    if(!painting){  //si no estoy dibujando no hara nada
      return;
    }

    else {  // y si no entonces dibujara
      ctx.lineCap = "round"; //estilo mouse

      ctx.beginPath(); //para que no me dibuje lineas
      ctx.moveTo(e.clientX, e.clientY); //mover deacuerdo a las posiciones
      ctx.lineTo(e.clientX, e.clientY); //dibujara la posicion x y del mouse
      ctx.lineWidth = grosor; //grosor de mi dibujo
      ctx.strokeStyle = color;
      ctx.stroke(); //rellenar lo que dibuje cuando mantenga pulsado
      ctx.closePath();




    }

  }

  //eventos del mouse

  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishedPosition);
  canvas.addEventListener('mousemove', draw);
});
