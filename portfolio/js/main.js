$(document).ready(function(){
    $("#includedContent").load("html/footer.html");
    $(".nav-link").click(function() {
        var section = $(this).attr("href");
        $('html, body').animate({   
            scrollTop: $(section).offset().top + -60
        }, 2000);
    });
});


var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }

  $(function () {
    showText("#test", "Hello, World!", 0, 500);   
  });