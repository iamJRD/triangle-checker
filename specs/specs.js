describe('triangles', function() {

  it("is not a triangle with an input that has two sides <= the third", function() {
    expect(triangles(2,2,5000)).to.equal("Not a triangle");
  });

});
