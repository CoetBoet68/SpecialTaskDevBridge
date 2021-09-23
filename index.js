function componentToHex(c) {
  var comHex = c.toString(16);
  return comHex.length == 1 ? "0" + comHex : comHex;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + ((+r) << 16) + ((+g) << 8) + (+b)).toString(16).slice(1);
}

function submit(){
	var red = document.getElementById("red").value;
	var green = document.getElementById("green").value;
	var blue = document.getElementById("blue").value;
	var hex = rgbToHex(red, green,blue);
	document.getElementById('hex').innerHTML=hex;
}
