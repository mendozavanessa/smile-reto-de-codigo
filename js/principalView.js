$(document).ready(function() {
  $('.flexslider').flexslider({
    touch: true,
    pauseOnAction: false,
    pauseOnHover: false,
    animation: 'slide'
  });
  if ($('.menu-colum').attr('hidden', true)) {
    $('.menu-colum').removeClass('hidden');
    $('#icon').click(function() {
      $('.menu-colum').toggle('slow');
    });
  }
});
