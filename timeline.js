"use strict";

var selectedImg = document.getElementById("selected_img");

var timeline = document.getElementsByClassName("timeline");

selectedImg.innerHTML = timeline[0].innerHTML;

for (var i = 0; i < timeline.length; i++) {
  timeline[i].addEventListener("click", function() {
    selectedImg.innerHTML = this.innerHTML;
  });
}
