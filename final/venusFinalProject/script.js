$('#menu-btn').click(function (){
  $("#sidebar, #main").animate({
    marginLeft: "-200px"
  }, 2000);
});

$('#blog-btn').click(function (){
  $("#blog").slideDown();
});