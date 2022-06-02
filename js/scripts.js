function tri(event) {
  if (sideOne === sideTwo === sideThree) {
    return "equilaterial";
  } else if ((sideOne === sideTwo) != sideThree) {
    return "isosceles";
  } else if ((sideOne + sideTw) <= sideThree) {
    return "Not a Triangle";
  }  else if ((sideOne + sideThree) <= sideTwo) {
    return "Not a Triangle";
  } else if ((sideThree + sideTwo) <= sideOne) {
    return "Not a Triangle";
  } else {
    return "scalene";
  }
};

const whatTriangle = function(sideOne, sideTwo, sideThree) {
  return sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo);
};

$(document).ready(function() {
  $("form#triCalc").submit(function(event) {

    const number1 = parseInt($("input#sideOne").val());
    const number2 = parseInt($("input#sideTwo").val());
    const number3 = parseInt($("input#sideThree").val());
    let result = triangle (sideOne, sideTwo, sideThree);
    
    number1 = parseInt($("#input1").val(""));
    number2 = parseInt($("#input2").val(""));
    number3 = parseInt($("#input3").val(""));
    
    $("#output").append(result);
    $("#output").show();
    event.preventDefault();
  });
});