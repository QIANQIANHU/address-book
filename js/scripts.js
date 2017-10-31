//business logic
function Result(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Result.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  // $("#add-movie").click(function() {
  //   $(#"new-movies").append("<div class="new-movie">" +
  //                             "<label></label>" +
  //                             "<input type="radio" name="moviename">"
  //                             "</div>" +
  //                           "</div>");
  // });
  $("form#new-info").submit(function(event) {
    event.preventDefault();
      $(".result").last().click(function() {
        $("#show-ticket").show();
        $("#show-ticket h2").text(newResult.firstName);
        $(".first-name").text(newResult.firstName);
        $(".last-name").text(newResult.lastName);
      });

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var moviename = $("input:radio[name=moviename]:checked").val();

    var newResult = new Result(inputtedFirstName, inputtedLastName);

    $("ul#ticket").append("<li><span class='result'>" + newResult.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
