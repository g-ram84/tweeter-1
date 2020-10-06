// Creates a working character-counter
$(document).ready(function() {
  $('textarea').keyup(function() {
    let input = $(this);
    let form = input.closest("form");
    let counter = form.find(".counter");
    let newChars = input.val().length;
    let charRemaining = 140 - newChars;
    counter.html(charRemaining)
    if (charRemaining < 0) {
      counter.addClass("belowZero");
    } 
    if (charRemaining >= 0) {
      counter.removeClass("belowZero");
    }
  })
});
