describe('triangles', function() {

  it("is not a triangle with an input that has two sides <= the third", function() {
    expect(triangles(2,2,5000)).to.equal("not a triangle");
  });

  it("is an equilateral triangle", function() {
    expect(triangles(5,5,5)).to.equal("equilateral");
  });

});
