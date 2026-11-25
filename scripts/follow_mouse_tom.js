let elt = document.getElementById("follow");

function istouchDevice() {
  try {document.createEvent("TouchEvent"); return true;
  } catch (e) {return false;}
}

const move = (e) => {
  try {
    var x = !istouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !istouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  elt.style.left = x - 60 + "px";
};

document.addEventListener("mousemove", (e) => {move(e);});