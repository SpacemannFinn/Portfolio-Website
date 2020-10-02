$(document).ready(function () {

  var bgArray = ['1.png', '2.png', '3.png'];
  $('body').css({'background-image': 'url(bgimages/' + bgArray[Math.floor(Math.random() * bgArray.length)] + ')'});
});