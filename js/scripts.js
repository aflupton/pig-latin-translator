// business logic


// user interface logic
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var sentence = ($("input#latin").val());




    $(".output").text("");
    }

    $("#result").show();
  });
});
