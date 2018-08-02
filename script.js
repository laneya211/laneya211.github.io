window.onload = function(){
  document.getElementByID("img")
    .onclick = function(){
      changeImage();
    }
    var i = 0;
    function changeImage() {
      var list = ["shortribs.jpg","heralbumcover.jpg", "IMG-5317.jpg" ];
      i++;
      if (i > 3) {
        i = 0;
      }
      var newImg = list[i];
      document.getElementByID("img").src = newImg;
    }
}
