$(document).ready(function() {
  if ($('.menu-colum').attr('hidden', true)) {
    $('.menu-colum').removeClass('hidden');
    $('#icon').click(function() {
      $('.menu-colum').toggle('slow');
    });
  }
  var tweetArea = $('#tweet-area');
  var tweetBtn = $('#tweet-btn');
  var messages = $('#messages');
  var countDinamic = $('#count');
  var MAXCHARACTERS = 140;

  tweetArea.on('keyup', function(event) {
    console.log($.trim($(this).val()).length);
    if ($.trim($(this).val()).length) {
      var total = MAXCHARACTERS - $.trim($(this).val()).length;
      tweetBtn.prop('disabled', false);
      countDinamic.text(MAXCHARACTERS - $.trim($(this).val()).length);
      console.log($.trim($(this).val()));
      if ($.trim($(this).val()).length > MAXCHARACTERS) {
        tweetBtn.prop('disabled', true);
      }
      // countDinamic.toggle('seagreen', 10 <= total && total < 20);
      // countDinamic.toggle('orangered', total < 10);
    } else {
      tweetBtn.prop('disabled', true);
      countDinamic.text(MAXCHARACTERS);
      // console.log('la cadena esta vacia');
    }
    // Versión 0.0.4
    var text = $(this).val().split('');
    var acum = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] === '\n') {
        acum++;
      }
      if (acum) {
        $(this).rows = acum + 2;
      }
    }
    // Versión 0.0.5 (Extra)
    if (($.trim($(this).val()).length / $(this).cols) < $(this).rows) {
      $(this).rows = ($.trim($(this).val()).length / $(this).cols) + 2;
    }
  });

  tweetArea.on('keydown', function(event) {
    countDinamic.text(MAXCHARACTERS - tweetArea.val().length);
  });

  tweetBtn.on('click', function(event) {
    event.preventDefault();
    // console.log(tweetArea.val());
    // console.log(tweetArea.val().lenght);
    $('#image-post').attr('src', '');
    messages.prepend('<div><span></span><img class="tweet2"></img></div>');
    var hours = moment().format('LT');
    $('#messages div:first-child span').append(document.createTextNode(tweetArea.val()));
    $('#messages div:first-child span').append(document.createTextNode(' '));
    $('#messages div:first-child span').append(document.createTextNode(hours));
    $('.tweet2').html('<img src="#"></img>');
    var url = localStorage.url;
    $('.tweet2').attr('src', url);
    $('.tweet2').attr('class', 'display-block img-responsive');
    tweetArea.val('');
    tweetArea.focus();
    tweetBtn.prop('disabled', true);
    countDinamic.text(MAXCHARACTERS);
  });
  // Adding data
  var $smileAccounts = JSON.parse(localStorage.getItem('users'));
  var $indexNumber = localStorage.getItem('indexNumber');
  var $userIdent = $('.userIdent');
  var $genderL = $('.genderL');
  $userIdent.text($smileAccounts[$indexNumber].name);
  if ($smileAccounts[$indexNumber].gender === 'girl') {
    $genderL.text('a');
  } else {
    $genderL.text('o');
  }
  if ($('.menu-colum').attr('hidden', true)) {
    $('.menu-colum').removeClass('hidden');
    $('#options').click(function() {
      $('.menu-colum').toggle('slow');
    });
  }
});
