/*Below are the examples of Swipe js files*/


$("#item").swipe({
  swipe:function(event, direction, distance, duration, fingerCount) {
    $(this).remove("You swiped " + direction );
  }
});


/*Swipe to Left*/
$("#swipe").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount)
   {
    //This only fires when the user swipes left
  }
});


/*Distance Threshold*/
$("#threshold").swipe({
  swipe:function(event, direction, distance, duration, fingerCount){
    $(this).text("You swiped " + direction + " for " + distance + "px" );
  },
  threshold:100
});


/*Distance Threshold*/



