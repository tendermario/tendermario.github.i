$(function() {

  var $lightbox1 = $('.lightbox-ordr a').simpleLightbox( { captionSelector: 'self'});
  var $lightbox2 = $('.lightbox-heavyvis a').simpleLightbox( { captionSelector: 'self'});

  $(".lightbox-ordr").find("a").attr("title", "Technologies used: JavaScript, Express, EJS, Node.js, Postgres database hosted on Heroku, incorporated Twilio API");
  $(".lightbox-heavyvis").find("a").attr("title", "Technologies used: JavaScript, Three.js, Express, EJS, Node.js");

  $('#heavyvis-swap').on("click", function() {
    var src = $('#short').attr("src").replace("-short.gif", ".gif");
    $('#short').attr("src", src);
    $('#short').hide();
    $('#short').fadeIn();
    $(this).slideUp(500);

})();