
function guarda(){
  var prendita = document.getElementById("prenda").value;
var prendas = prenda.options[prendita-1].text;

var colorcito = document.getElementById("color").value;
var colors = color.options[colorcito-1].text;

                         
    var parrafo = document.createElement("p");  
    
  if (prendas === "Pantalón"){  
    imagencita.setAttribute("src","jeans.png");
      if(colors === "Blanco"){
        colorcin.setAttribute("src","blanco.png");
      }
      else if(colors === "Negro"){
        colorcin.setAttribute("src","negro.png");
      }
      else{
        colorcin.setAttribute("src","azul.png");
      }
  } else if(prendas === "Camisa"){
    imagencita.setAttribute("src","tshirt.png");
    if(colors === "Blanco"){
      colorcin.setAttribute("src","blanco.png");
    }
    else if(colors === "Negro"){
      colorcin.setAttribute("src","negro.png");
    }
    else{
      colorcin.setAttribute("src","azul.png");
    }
  }else{
    imagencita.setAttribute("src","jacket.png");
    if(colors === "Blanco"){
      colorcin.setAttribute("src","blanco.png");
    }
    else if(colors === "Negro"){
      colorcin.setAttribute("src","negro.png");
    }
    else{
      colorcin.setAttribute("src","azul.png");
    }
  }





  	parrafo.innerHTML="Un " + prendas+" "+colors;
	 
  document.getElementsByTagName("p")[0].appendChild(parrafo); 
  
}
