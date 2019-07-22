function startGame() {
  var leftBlock = $('#left-block')[0];
  var rightBlock = $('#right-block')[0];

  var leftImages = $('#left-block > [data-image-id]');
  var rightImages = $('#right-block > [data-image-id]');
  var leftRect = leftBlock.getBoundingClientRect();
  var rightRect = rightBlock.getBoundingClientRect();

  function randomPosition(images, parentElement) {
    $(images).addClass("hidden");
    var $image = $(images[randomInteger(0, images.length - 1)]);
    var size = randomInteger(276 / 2, 276 * 1.5);
    $image.width(size);
    $image.height(size);

    var pos = getNewPosition(parentElement, size);
    $image.css({position: 'relative', top: pos[0], left: pos[1]});
    $image.removeClass('hidden');
  }

  var leftTimer;
  var rightTimer;

  function showImages() {

    leftTimer = setTimeout(function run() {
      clearTimeout(leftTimer);
      randomPosition(leftImages, {height: leftRect.height, width: leftRect.width});
      leftTimer = setTimeout(run, randomInteger(1000, 2000));
    }, randomInteger(1000, 2000));

    rightTimer = setTimeout(function run() {
      clearTimeout(rightTimer);
      randomPosition(rightImages, {height: rightRect.height, width: rightRect.width});
      rightTimer = setTimeout(run, randomInteger(1000, 2000));
    }, randomInteger(1000, 2000));

  }

  showImages();
};

function getNewPosition(element, size) {
  var h = element.height - size;
  var w = element.width - size;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}


$(window).resize(function () {
  location.reload();
});

$(document).ready(startGame);
