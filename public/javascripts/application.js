(document).ready(function(){
var person = function() {

    var individual = function(type) {
    return "The Students first name is  " + first;
  };
   var color = function(color) {
    return "this individual has an eye color of " + eyecolor + "eyes";
  };
   return {individual: individual, color: color};
}();

    console.log(person.first);
    console.log(person.last);
    console.log(person.individual("kiran"));
    console.log(person.color("red"));
});

