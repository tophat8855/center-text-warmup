var consoleWidth = 80;

function center(string) {
  var stringLength = string.length;
  var whiteSpaceLength = consoleWidth - stringLength;
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
