$(document).ready(function() {
  $("#age-form").submit(function(e) {
  e.preventDefault()
  const age = parseInt($("#age-input").val());
  console.log(age)

  if (age >= 18) {
    $('#voting-age').show();
    $('#too-young').hide();
  } else {
    $('#too-young').show()
    $('voting-age').hide()
  }
  });
});