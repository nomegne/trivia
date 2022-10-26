require('./game.js');

describe("The test environment", function() {
  it("should pass", function() {
    expect(true).toBe(true);
  });

  it("should access game", function() {
    expect(Game).toBeDefined();
  });

  it("should get out of the penalty box"), function() {
    expect(isGettingOutOfPenaltyBox).toBe(true);
  }

});

describe("Your specs...", function() {
  // it
});
