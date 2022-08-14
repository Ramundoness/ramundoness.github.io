$(document).ready(function() {

  $("#cover-pic, #pic-description").hide();

  $("#cover-trace").hover(function() {
    $("#cover-pic").fadeIn();
  }, function() {
    $("#cover-pic").fadeOut();
  });

  $('#cover-trace').mousemove(function(event){
    //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
    var mousex = event.pageX - $('#cover-pic').offset().left;
    var mousey = event.pageY - $('#cover-pic').offset().top;
    
    
    //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.
    
    //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
    var imgx = (mousex - 300) / 30;
    var imgy = (mousey - 200) / 30;
    
    //Adds a translation css styles to the image element
    $('#cover-pic').css("transform", "translate(" + imgx + "px," + imgy + "px)");

  });

  //This function will fire every time the user mouses off of the image. It resets the translation back to 0.
  $('#cover-trace').mouseout(function(){
    $('#cover-pic').css("transform", "translate(0px,0px)");
  });


  $("#sidebar-button").click(function() {
    if ($(".sidebar-wrapper").hasClass("sidebar-active") == true) {
      setTimeout(function() {
        $('body').removeClass('no-scroll');
      }, 300);
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-wrapper").removeClass("sidebar-active");
    } else {
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-wrapper").addClass("sidebar-active");
    }
  });

  $(".page-wrapper").click(function() {
    if ($(".sidebar-wrapper").hasClass("sidebar-active") == true) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-wrapper").removeClass("sidebar-active");
    }
  });

  $("a").click(function() {
    $("body").removeClass("no-scroll");
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 500);
    setTimeout(function() {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-wrapper").removeClass("sidebar-active");
    }, 500);
    return false
  });

})