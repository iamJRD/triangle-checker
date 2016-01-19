var triangles = function(sideOne, sideTwo, sideThree) {
  if (sideOne <= (sideTwo + sideThree) && sideTwo <= (sideOne + sideThree) && sideThree <= (sideOne + sideTwo)) {
    if(sideOne === sideTwo && sideTwo === sideThree) {
      return "equilateral";
    } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
      return "isosceles";
    }
  } else {
    return "not a triangle";
  }

};
