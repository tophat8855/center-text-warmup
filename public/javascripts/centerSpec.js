describe('center string', function () {
  it ('centers a short string', function() {
    var string = "this is a short line";

    var result = center(string);

    expect(result).toEqual('                              this is a short line                              ');
  });

  it ('centers a long string', function() {
    var string = 'this is a really long line that has a lot of characters';

    var result = center(string);

    expect(result).toEqual('            this is a really long line that has a lot of characters             ');
  });
});
