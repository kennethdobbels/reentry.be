var a = document.getElementsByClassName("plaat1")[0];
var b = document.getElementsByClassName("plaat2")[0];
var c = document.getElementsByClassName("plaat3")[0];
var d = document.getElementsByClassName("plaat4")[0];

var e = document.getElementsByClassName("plaat5")[0];
var f = document.getElementsByClassName("plaat6")[0];
var g = document.getElementsByClassName("plaat7")[0];
var h = document.getElementsByClassName("plaat8")[0];

var i = document.getElementsByClassName("plaat9")[0];
var j = document.getElementsByClassName("plaat10")[0];
var k = document.getElementsByClassName("plaat11")[0];
var l = document.getElementsByClassName("plaat12")[0];

var mijnAfeelding = document.getElementById("bands");
var mijnAndereAfbeelding = document.getElementById("amped");
var mijnDerdeAfbeelding = document.getElementById("foamies");
var mijnVierdeAfbeelding = document.getElementById("gidgets");

var mijnAfb = ["gidgets.png" , "foamies.png","amped.png"];
var mijnAndereAfb = ["Amped FVM.jpg","Amped IVM.jpg","Amped TVM.jpg","Amped SVM.jpg"];
var mijnDerdeAfb = ["Foamies FVM.jpg","Foamies IVM.jpg","Foamies TVM.jpg","Foamies SVM.jpg"];
var mijnVierdeAfb = ["Gidgets FVM.jpg","Gidgets IVM.jpg","Gidgets TVM.jpg","Gidgets SVM.jpg"];


var z = 0;
var w = 0;
var x = 0;
var y = 0;

var afbeeldingVeranderen = function(){
      mijnAfeelding.setAttribute("src" , mijnAfb[z]);
      z++;
      if(z>=mijnAfb.length){
            z = 0;
      }
};
var bewegen = setInterval(afbeeldingVeranderen,3000);



var andereAfbeeldingVeranderen = function() {
  mijnAndereAfbeelding.setAttribute("src",mijnAndereAfb[w]);
  w++;
  if(w>=mijnAndereAfb.length){
    w = 0;
  }
};
var andersBewegen = setInterval(andereAfbeeldingVeranderen,3000);


var derdeAfbeeldingVeranderen = function() {
  mijnDerdeAfbeelding.setAttribute("src",mijnDerdeAfb[x]);
  x++;
  if(x>=mijnDerdeAfb.length){
    x = 0;
  }
};
var derdeBewegen = setInterval(derdeAfbeeldingVeranderen,3000);



var vierdeAfbeeldingVeranderen = function () {
  mijnVierdeAfbeelding.setAttribute("src",mijnVierdeAfb[y]);
  y++;
  if(y>=mijnVierdeAfb.length){
    y = 0;
  }
};
var vierdeBewegen = setInterval(vierdeAfbeeldingVeranderen,3000);


























a.onmouseover=function () {
  if(a.style.backgroundImage = "url('Amped FV.jpg')"){
    a.style.backgroundImage = "url('Amped FA.jpg')";
  };
};
a.onmouseout=function () {
  if(a.style.backgroundImage = "url('Amped FA')"){
    a.style.backgroundImage = "url('Amped FV.jpg')";
  }
}
b.onmouseover=function () {
  if(b.style.backgroundImage = "url('Amped IV.jpg')"){
    b.style.backgroundImage = "url('Amped IA.jpg')";
  }
}
b.onmouseout=function () {
  if(b.style.backgroundImage = "url('Amped IA')"){
    b.style.backgroundImage = "url('Amped IV.jpg')";
  }
}
c.onmouseover=function () {
  if(c.style.backgroundImage = "url('Amped TV.jpg')"){
    c.style.backgroundImage = "url('Amped TA.jpg')";
  }
}
c.onmouseout=function () {
  if(c.style.backgroundImage = "url('Amped TA')"){
    c.style.backgroundImage = "url('Amped TV.jpg')";
  }
}
d.onmouseover=function () {
  if(d.style.backgroundImage = "url('Amped SV.jpg')"){
    d.style.backgroundImage = "url('Amped SA.jpg')";
  }
}
d.onmouseout=function () {
  if(d.style.backgroundImage = "url('Amped SA')"){
    d.style.backgroundImage = "url('Amped SV.jpg')";
  }
}


e.onmouseover=function () {
  if(e.style.backgroundImage = "url('Foamies FV.jpg')"){
    e.style.backgroundImage = "url('Foamies FA.jpg')";
  }
}
e.onmouseout=function () {
  if(e.style.backgroundImage = "url('Foamies FA')"){
    e.style.backgroundImage = "url('Foamies FV.jpg')";
  }
}
f.onmouseover=function () {
  if(f.style.backgroundImage = "url('Foamies IV.jpg')"){
    f.style.backgroundImage = "url('Foamies IA.jpg')";
  }
}
f.onmouseout=function () {
  if(f.style.backgroundImage = "url('Foamies IA')"){
    f.style.backgroundImage = "url('Foamies IV.jpg')";
  }
}
g.onmouseover=function () {
  if(g.style.backgroundImage = "url('Foamies TV.jpg')"){
    g.style.backgroundImage = "url('Foamies TA.jpg')";
  }
}
g.onmouseout=function () {
  if(g.style.backgroundImage = "url('Foamies TA')"){
    g.style.backgroundImage = "url('Foamies TV.jpg')";
  }
}
h.onmouseover=function () {
  if(h.style.backgroundImage = "url('Foamies SV.jpg')"){
    h.style.backgroundImage = "url('Foamies SA.jpg')";
  }
}
h.onmouseout=function () {
  if(h.style.backgroundImage = "url('Foamies SA')"){
    h.style.backgroundImage = "url('Foamies SV.jpg')";
  }
}



i.onmouseover=function () {
  if(i.style.backgroundImage = "url('Gidgets FV.jpg')"){
    i.style.backgroundImage = "url('Gidgets FA.jpg')";
  }
}
i.onmouseout=function () {
  if(i.style.backgroundImage = "url('Gidgets FA')"){
    i.style.backgroundImage = "url('Gidgets FV.jpg')";
  }
}
j.onmouseover=function () {
  if(j.style.backgroundImage = "url('Gidgets IV.jpg')"){
    j.style.backgroundImage = "url('Gidgets IA.jpg')";
  }
}
j.onmouseout=function () {
  if(j.style.backgroundImage = "url('Gidgets IA')"){
    j.style.backgroundImage = "url('Gidgets IV.jpg')";
  }
}
k.onmouseover=function () {
  if(k.style.backgroundImage = "url('Gidgets TV.jpg')"){
    k.style.backgroundImage = "url('Gidgets TA.jpg')";
  }
}
k.onmouseout=function () {
  if(k.style.backgroundImage = "url('Gidgets TA')"){
    k.style.backgroundImage = "url('Gidgets TV.jpg')";
  }
}
l.onmouseover=function () {
  if(l.style.backgroundImage = "url('Gidgets SV.jpg')"){
    l.style.backgroundImage = "url('Gidgets SA.jpg')";
  }
}
l.onmouseout=function () {
  if(l.style.backgroundImage = "url('Gidgets SA')"){
    l.style.backgroundImage = "url('Gidgets SV.jpg')";
  }
}
