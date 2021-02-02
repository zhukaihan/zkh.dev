$(document).ready(function () {
  $.getJSON("http://zkh.io:3000", function (data) {
      console.log(data);
  });
});
