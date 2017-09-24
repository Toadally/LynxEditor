$(document).ready(function(){
  $("#sidebar").addClass(theme);
  $("#top-selector").addClass(theme);
  $("body").addClass(theme);
  //$("#top-selector").css("border-bottom","1px solid "+$(".ace_gutter").css("color"));
  //$(".header").css("border-bottom","1px solid "+$(".ace_gutter").css("color"));
  //$("#sidebar").css("border-right","1px solid "+$(".ace_gutter").css("color"));
//  $(".footer").css("border-top","1px solid "+$(".ace_gutter").css("color"));
  var n = $("#top-selector div").length;
  var w = (100/n);
  $("#top-selector div").width(w+'%');
  $(".ace_gutter").ready(function(){
  $("#top-selector").css("color",$(".ace_gutter").css("color"));
  $("#sidebar").css("color",$(".ace_gutter").css("color"));});



  $("#top-selector div").hover(function(){

    $(this).find("i").fadeIn(125);



  }, function(){

    $(this).find("i").fadeOut(125);

  });

  $(".tab").hover(function(){
    if(!$(this).hasClass("activeTab")){
      $(this).css("background",getLightOrDark($("."+theme).css("background-color"), 0.025));
    }
  }, function(){

    if(!$(this).hasClass("activeTab")){
      $(this).css("background","transparent");
    };

  });

  $(".tab").click(function(){

    $(this).siblings().find("span").removeClass('active');

    $(this).siblings().css("background","transparent");

    $(this).siblings().removeClass('activeTab');
    $(this).find('span').addClass("active");
    $(this).addClass('activeTab');

    $(this).css("background",getLightOrDark($("."+theme).css("background-color"), 0.1));

  });

  $("#top-selector i").click(function(){
    $(this).parent().css("transition","none");
    $(this).parent().css("position","relative");
    $(this).parent().animate({
      "left":"-100%"
    }, 75, function(){$(this).remove()});


  });

  function getLightOrDark(color, intensity){

    if(color == "transparent" || color == "null"){
      return "rgba(255,255,255,"+intensity+")";
    }


    var c = color.substring(1);      // strip #
    var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >>  8) & 0xff;  // extract green
    var b = (rgb >>  0) & 0xff;  // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b + 0.1; // per ITU-R BT.709

    if (luma == 0) { return "rgba(0,0,0,"+intensity+")"};
    if (luma < 40) {
      return "rgba(255,255,255,"+intensity+")";
    } else {
      return "rgba(0,0,0,"+intensity+")";
    }


  }
});
