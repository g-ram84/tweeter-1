// Creates a working character-counter
$(document).ready(function() {
  $('textarea').keyup(function() {
    const input = $(this);
    const form = input.closest("form");
    const counter = form.find(".counter");
    const newChars = input.val().length;
    const charRemaining = 140 - newChars;
    counter.html(charRemaining);
    if (charRemaining < 0) {
      counter.addClass("belowZero");
    }
    if (charRemaining >= 0) {
      counter.removeClass("belowZero");
    }
  });
});
