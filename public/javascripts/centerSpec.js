describe('center string', function () {
  it ('centers a short string', function() {
    var string = "this is a short line";

    var result = center(string, 80);

    expect(result).toEqual('                              this is a short line                              ');
  });

  it ('centers a long string', function() {
    var string = 'this is a really long line that has a lot of characters';

    var result = center(string, 80);

    expect(result).toEqual('            this is a really long line that has a lot of characters             ');
  });
});

describe('centerLines', function() {
  it ('centers a group of lines', function() {
    var lines = "this is a short line\nthis is a really long line that has a lot of characters\nand this is\nshort";

    var result = centerLines(lines);

    expect(result).toEqual('                 this is a short line                  \nthis is a really long line that has a lot of characters\n                      and this is                      \n                         short                         ')
  });
});
