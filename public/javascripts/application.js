var person = function(first, last, age, eyecolor) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.eyecolor = eyecolor;
}


$(document).ready(function() {
//   +
  $( '.person_form' ).on('submit', function(e) {
    e.preventDefault();
    // console.log( $( this ).serialize() );
    $.ajax({
      url: '/person',
      type: 'post',
      data: $(this).serialize()
      // success: function(result) {
      //   var hydratedThing = new person(result);
      //   console.log(hydratedThing.first);
      // }
      })
    .done(function(data){
      console.log(data);
      $(".people").append(data)
    })
    });
  });
