function center(string, width) {
  var stringLength = string.length;
  var whiteSpaceLength = width - stringLength;
  var frontWhiteSpaceLength = Math.floor(whiteSpaceLength / 2);
  var backWhiteSpaceLength = whiteSpaceLength - frontWhiteSpaceLength;
  var array = [];

  for (var i = 0; i < frontWhiteSpaceLength; i++) {
    array.push(' ');
  }

  array.push(string);

  for (i = 0; i < backWhiteSpaceLength; i++) {
    array.push(' ');
  }
  var resultingString = array.join('');

  return resultingString;
}

function centerLines(strings) {
  var stringArray = strings.split('\n');
  var longest = 0;
  for (var i = 0; i < stringArray.length; i++) {
    if(stringArray[i].length > longest) {
      longest = stringArray[i].length;
    }
  }

  var resultingArray = [];
  for (i = 0; i < stringArray.length; i++) {
    var centeredLine = center(stringArray[i], longest);
    resultingArray.push(centeredLine);
  }

  resultingString = resultingArray.join('\n');

  return resultingString;
}
