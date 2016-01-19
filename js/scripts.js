var triangles = function(sideOne, sideTwo, sideThree) {
  if (sideOne <= (sideTwo + sideThree) && sideTwo <= (sideOne + sideThree) && sideThree <= (sideOne + sideTwo)) {
    if(sideOne === sideTwo && sideTwo === sideThree) {
      return "equilateral";
    } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
      return "isosceles";
    } else {
      return "scalene";
    }
  } else {
    return "not a triangle";
  }
};

$(document).ready(function(){
  console.log();
  $("form#triangles").submit(function(event){
    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());
    var result = triangles(sideOne, sideTwo, sideThree);

    sideOne = parseInt($("input#sideOne").val(""));
    sideTwo = parseInt($("input#sideTwo").val(""));
    sideThree = parseInt($("input#sideThree").val(""));

  $("#result").text(result);
  $("#result").show(result);

  event.preventDefault();
  });
});
