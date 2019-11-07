// Input color verification

function parse(s, base) {
    for (let i = 0; i < s.length; i++) {
      if (!('0123456789abcdefABCDEF'.includes(s[i]))) {
        return NaN;
      }
    }
    let parsed = parseInt(s, base);
    if ((parsed < 0) || (parsed > 255)) {
      return NaN;
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
    return [r, g, b];
  }
  
  // Decimal RGB
  
  function RGBToDecimal(intList) {
    return [
      +(intList[0] / 255).toFixed(2),
      +(intList[1] / 255).toFixed(2),
      +(intList[2] / 255).toFixed(2)
    ];
  }
  
  // Output
  
  function getInput() {
    let errorMessage = document.getElementById("error");
    let outputMessage = document.getElementById("output");
    let colorString = document.getElementById("colorInput").value;
    
    if (colorString.indexOf(",") == -1) {
      var colorRGB = hexToRGB(colorString);
    } else {
      var colorRGB = splitRGB(colorString);
    }
    if ((isNaN(colorRGB[0]) || isNaN(colorRGB[1])) || (isNaN(colorRGB[2]))) {
      errorMessage.style.display = "block";
      outputMessage.style.display = "none";
    }
    else {
      errorMessage.style.display = "none";
      let finalResult = RGBToDecimal(colorRGB);
      document.getElementById("colorOutput").innerText = finalResult;
      outputMessage.style.display = "block";
    }
  }