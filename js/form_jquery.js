$(function () {
  $("#contact_form").submit(function () {
    var name = $("#fname").val();
    var email = $("#femail").val();
    var title = $("#ftitle").val();
    var text = $("#ftext").val();
    var check = $("#fcheck").val();
    var output = "";

    if (name == "" || email == "" || title == "" || text == "" || check == "") {
      output += "Fill in all fields";
    } else if (check != 121) {
      output += "Invalid result";
    } else if (!(email.indexOf("@") > 0)) {
      output += "The e-mail address is not valid";
    } else {
      $("#msg").html("<span class = 'ok'> Message sent </span>");
      return false;
    }

    $("#msg").html("<span class = 'error'>" + output + "</span>");
    return false;
  });
});

$("#signup_form").submit(function () {
  var email = $("#femail").val();
  var pass = $("#fpassword").val();
  var pass2 = $("#fpassword2").val();
  var output = "";

  if (email == "" || pass == "" || pass2 == "") {
    output += "Enter all details";
  } else if (pass.length < 8) {
    output += "Password should be at least 8 characters long";
  } else if (pass != pass2) {
    output += "Re enter password";
  } else if (!(email.indexOf("@") > 0)) {
    output += "The email address is not valid";
  } else {
    $("#fmsg").html("<span class='ok'>Submit Successful!</span>");
    return false;
  }

  $("#fmsg").html("<span class='error'>" + output + "</span>");
  return false;
});
