  // //pretty much stolen from: http://css-plus.com/2010/06/how-to-make-a-jquery-drop-down-menu-with-a-css-fall-back/
  // // Remove classes from ul's to cancel CSS fallback:
  // $("nav ul.child").removeClass("child");
  // $("nav ul.grandchild").removeClass("grandchild");
  // //mouseover an unordered list
  // $("#nav li").has("ul").hover(function() {
  //   //fade in to the sub menu:
  //   $(this).addClass("current").children("ul").css("display","block");
  // }, function() {
  //   //when the mouse moves, remove the "current" class, set display to none
  //   $(this).removeClass("current").children("ul").stop(true, true).css("display", "none");
  // });



  var nav = document.getElementById("nav");
  var navlist = document.querySelectorAll("ul");
  var navlistArray = Array.prototype.slice.call(navlist);

  for (var i = 0; i < navlistArray.length; i++) {
    if (navlistArray[i].classList) {
      navlistArray[i].classList.remove("child");
    }
  }

  var tablist = nav.children;

  for (var i = 0; i < tablist.length; i++) {
    tablist[i].addEventListener("mouseover", function(event) {
      var children = event.currentTarget.children;
      for (var i = 0; i < children.length; i++) {
        if (children[i].tagName === "UL") {
          children[i].style.display = "block";
        }
      }
    })

    tablist[i].addEventListener("mouseleave", function(event) {
      var children = event.currentTarget.children;
      for (var i = 0; i < children.length; i++) {
        if (children[i].tagName === "UL") {
          children[i].style.display = "none";
        }
      }
    })
  }
