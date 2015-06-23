
var nav = document.getElementById("nav");
var navlist = document.querySelectorAll("ul");
var navlistArray = Array.prototype.slice.call(navlist);

for (var i=0; i < navlistArray.length; i++){
  if (navlistArray[i].classList){
    navlistArray[i].classList.remove("child");
  }
}

var tablist = nav.children;

for (var i=0; i < tablist.length; i++){
  tablist[i].addEventListener("mouseover", function(event){
    var children = event.currentTarget.children;
    for(var i=0; i < children.length; i++) {
      if(children[i].tagName==="UL"){
        children[i].style.display = "block";
      }
    }
  })

  tablist[i].addEventListener("mouseleave", function(event){
    var children = event.currentTarget.children;
    for(var i=0; i < children.length; i++) {
      if(children[i].tagName==="UL"){
        children[i].style.display = "none";
      }
    }
  })
}






