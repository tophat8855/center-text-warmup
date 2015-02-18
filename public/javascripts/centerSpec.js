describe('center string', function () {
  it ('centers a short string', function() {
    var string = "this is a short line";

    var result = center(string);

    expect(result).toEqual('                              this is a short line                              ');
  });
});
