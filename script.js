function dec() {
  var txt = document.getElementById("txt").value;
  var key = 3;
  var res = "";
  for (var i = 0; i < txt.length; i++) {
    var ch = txt.charCodeAt(i);
    if (ch >= 65 && ch <= 90) {
      res += String.fromCharCode(((ch - 65 - key + 26) % 26) + 65);
    } else if (ch >= 97 && ch <= 122) {
      res += String.fromCharCode(((ch - 97 - key + 26) % 26) + 97);
    } else {
      res += txt.charAt(i);
    }
  }
  document.getElementById("res").innerText = res;
}
