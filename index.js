var para = document.getElementById("paragraph");

function myCss(){
  var font = document.getElementById("select").value;

  switch(font){
    case "arial":
      para.style.fontFamily = "arial";
      break;

    case "monospace":
      para.style.fontFamily = "monospace";
      break;

    case "georgia":
      para.style.fontFamily = "gerogia";
      break;

    case "fantasy":
      para.style.fontFamily = "fantasy";
      break;
      case "default":
        para.style.fontFamily = "";
        break;
    }
  }
  
  // font size;
  var slider = document.getElementById("ranger");
  var output = document.getElementById("size");
  output.innerHTML = slider.value;
  
  slider.oninput = function(){
    output.innerHTML = this.value;
    var number = this.value;
    var string = number.toString();
    para.style.fontSize = number + "px";
  }
  
  // font color;
  var  black = document.getElementById("black");
  var red = document.getElementById("red");
  var  green = document.getElementById("green");
  var  blue = document.getElementById("blue");
  
  black.addEventListener("click", function(){
    para.style.color = "black"
  });
  
  red.addEventListener("click", function(){
    para.style.color = "red"
  });
  
  green.addEventListener("click", function(){
    para.style.color = "green"
  });
  
  blue.addEventListener("click", function(){
    para.style.color = "blue"
  });
  
  
  // font style;
  
  var normal = document.getElementById("normal");
  var cursive = document.getElementById("cursive");
  var light = document.getElementById("light");
  var bold = document.getElementById("bold");
  
  normal.addEventListener("click", function(){
    para.style.fontStyle = "normal";
  });
  
  cursive.addEventListener("click", function(){
    para.style.fontStyle = "italic";
  });
  
  light.addEventListener("click", function(){
    para.style.fontWeight = "lighter"
  });
  
  bold.addEventListener("click", function(){
    para.style.fontWeight = "bold";
  });