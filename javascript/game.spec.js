require("./game.js");

describe("The test environment", function () {
  it("should pass", function () {
    expect(true).toBe(true);
  });

  it("should access game", function () {
    expect(Game).toBeDefined();
  });
});

describe("Your specs...", function () {
  // it ...
  it("Should be no Rock question when system clock is 12:00", function () {
    const game = new Game().createRockQuestion(1);
    const now = new Date("2022-10-26T12:00");
    expect(game).toBe(
      now.getHours() == 12 && now.getMinutes() == 00
        ? null
        : "Rock Question 1"
    );
  });
});
