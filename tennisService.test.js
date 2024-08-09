const TennisService = require("./tennisService");

class TennisServiceTest {
  beforeEach() {
    this.tennisService = new TennisService();
  }

  loveAll() {
    test("love all", () => {
      this.scoreShouldBe("love all");
    });
  }

  fifteenLove() {
    test("fifteen love", () => {
      this.setP1Score(1);
      this.scoreShouldBe("fifteen love");
    });
  }

  thirtyLove() {
    test("thirty love", () => {
      this.setP1Score(2);
      this.scoreShouldBe("thirty love");
    });
  }

  fortyLove() {
    test("forty love", () => {
      this.setP1Score(3);
      this.scoreShouldBe("forty love");
    });
  }

  loveFifteen() {
    test("love fifteen", () => {
      this.setP2Score(1);
      this.scoreShouldBe("love fifteen");
    });
  }

  loveThirty() {
    test("love thirty", () => {
      this.setP2Score(2);
      this.scoreShouldBe("love thirty");
    });
  }

  loveForty() {
    test("love forty", () => {
      this.setP2Score(3);
      this.scoreShouldBe("love forty");
    });
  }

  fifteenAll() {
    test("fifteen all", () => {
      this.setP1Score(1);
      this.setP2Score(1);
      this.scoreShouldBe("fifteen all");
    });
  }

  thirtyAll() {
    test("thirty all", () => {
      this.setP1Score(2);
      this.setP2Score(2);
      this.scoreShouldBe("thirty all");
    });
  }

  fortyAll() {
    test("forty all", () => {
      this.setP1Score(3);
      this.setP2Score(3);
      this.scoreShouldBe("forty all");
    });
  }

  p1Adv() {
    test("p1 Adv", () => {
      this.setP1Score(4);
      this.setP2Score(3);
      this.scoreShouldBe("p1 adv");
    });
  }

  p2Adv() {
    test("p2 Adv", () => {
      this.setP1Score(3);
      this.setP2Score(4);
      this.scoreShouldBe("p2 adv");
    });
  }

  p1Win() {
    test("p1 win", () => {
      this.setP1Score(5);
      this.setP2Score(3);
      this.scoreShouldBe("p1 win");
    });
  }

  p2Win() {
    test("p2 win", () => {
      this.setP1Score(3);
      this.setP2Score(5);
      this.scoreShouldBe("p2 win");
    });
  }

  deuce() {
    test("deuce", () => {
      this.setP1Score(4);
      this.setP2Score(4);
      this.scoreShouldBe("deuce");
    });
  }

  scoreShouldBe(expected) {
    expect(this.tennisService.score()).toBe(expected);
  }

  setP1Score(score) {
    for (let i = 0; i < score; i++) {
      this.tennisService.p1Score();
    }
  }

  setP2Score(score) {
    for (let i = 0; i < score; i++) {
      this.tennisService.p2Score();
    }
  }

  runAllTests() {
    describe("TennisService", () => {
      beforeEach(() => this.beforeEach());

      describe("Regular Scores", () => {
        this.loveAll();
        this.fifteenLove();
        this.thirtyLove();
        this.fortyLove();
        this.loveFifteen();
        this.loveThirty();
        this.loveForty();
      });

      describe("Equal Scores", () => {
        this.fifteenAll();
        this.thirtyAll();
        this.fortyAll();
        this.deuce();
      });

      describe("Advantage and Win", () => {
        this.p1Adv();
        this.p2Adv();
        this.p1Win();
        this.p2Win();
      });
    });
  }
}

const tennisServiceTest = new TennisServiceTest();
tennisServiceTest.runAllTests();
