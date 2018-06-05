var mijnAfeelding = document.getElementById("bewegendeFoto");
var div = document.getElementsByClassName("sectoren")[0];
var titel = document.getElementById("titel");
var tekstje1 = document.getElementById("tekstje1");
var tekstje2 = document.getElementById("tekstje2");
var mijnAfb = ["Rope.jpg" , "WIND.jpg" , "industrie.jpg"];
var i = 0;

var afbeeldingVeranderen = function(){
      mijnAfeelding.setAttribute("src" , mijnAfb[i])
      i++;
      if(mijnAfeelding.getAttribute("src")==="Rope.jpg"){
      titel.innerHTML="Rope Access";
      tekstje1.innerHTML="Opleiding en Consultancy";
      tekstje2.innerHTML="voor on-en offshore werken";
      var aanmaken = document.createElement("p");
      var teksteAanmaken = document.createTextNode("met Industriële touwtechnieken");
      aanmaken.appendChild(teksteAanmaken);
      div.appendChild(aanmaken);

    }else if(mijnAfeelding.getAttribute("src")==="WIND.jpg"){
      titel.innerHTML="On-en Offshore Wind";
      tekstje1.innerHTML="Opleiding en Consultancy";
      tekstje2.innerHTML="voor de Renewable energy sector";
      div.removeChild(div.lastChild);
    }else{
      titel.innerHTML="Industrie";
      tekstje1.innerHTML="Opleiding en Consultancy";
      tekstje2.innerHTML="voor Industriële risico's";
    }

      if(i>=mijnAfb.length){
            i = 0;
      }

};






var bewegen = setInterval(afbeeldingVeranderen,4000);
