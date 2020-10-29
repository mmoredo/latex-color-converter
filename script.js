// Input color verification

function parse(s, base) {
  const verification = "0123456789abcdefABCDEF";
  for (let i = 0; i < s.length; i++) {
    if (!verification.includes(s[i])) {
      return null;
    }
  }
  let parsed = parseInt(s, base);
  if (parsed < 0 || parsed > 255) {
    return null;
  }
  return parsed;
}

// Hexadecimal to RGB

function hexToRGB(colorHex) {
  var colorHex = colorHex.replace("#", "").trim();
  var r = parse(colorHex.substring(0, 2), 16);
  var g = parse(colorHex.substring(2, 4), 16);
  var b = parse(colorHex.substring(4, 6), 16);
  return [r, g, b];
}

// RGB Split

function splitRGB(stringRGB) {
  var stringRGB = stringRGB.replace("(", "").replace(")", "").trim();
  var colorList = stringRGB.split(",");
  var r = parse(colorList[0], 10);
  var g = parse(colorList[1], 10);
  var b = parse(colorList[2], 10);
  console.log(r, g, b);
  return [r, g, b];
}

// Decimal RGB

function RGBToDecimal(intList) {
  return [
    +(intList[0] / 255).toFixed(2),
    +(intList[1] / 255).toFixed(2),
    +(intList[2] / 255).toFixed(2),
  ];
}

// Null

function isNull() {
  for (var i = 0; i < arguments.length; i++) {
    if (
      typeof arguments[i] === "undefined" ||
      arguments[i] === undefined ||
      arguments[i] == null ||
      arguments[i] === NaN ||
      isNaN(arguments[i])
    )
      return true;
  }
  return false;
}

// Open panel

function openPanel() {
  var panel = document.getElementById("panel");
  if (panel.style.display === "none") {
    panel.style.backgroundColor = "rgba(36,29,51,0.8)";
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
}

// Output

function getInput() {
  let errorMessage = document.getElementById("error");
  let colorString = document.getElementById("input").value;
  var result = document.getElementById("textarea");
  var sample = document.getElementById("color-sample");
  var colorRGB;
  var finalResult;
  if (colorString.indexOf(",") == -1) {
    colorRGB = hexToRGB(colorString);
  } else {
    colorRGB = splitRGB(colorString);
  }
  if (isNull(colorRGB[0]) || isNull(colorRGB[1]) || isNull(colorRGB[2])) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    finalResult = RGBToDecimal(colorRGB);
    var finalColor = `rgb(${colorRGB})`;
    result.style.display = "inline-flex";
    result.style.border = `2px solid ${finalColor}`;
    result.style.backgroundColor = 'rgba(' + colorRGB + ', 0.3)';
    sample.style.display = 'inline-flex';
    sample.style.backgroundColor = finalColor;
    var allOutputs = document.getElementsByClassName("color-output");
    for (var i = 0; i < allOutputs.length; i++) {
      allOutputs[i].innerText = '{' + finalResult + '}';
    }
  }
};