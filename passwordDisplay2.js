function passwordShow() {
    var x = document.getElementById("input4");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    var x = document.getElementById("input5");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }