class TennisService {
  constructor() {
    this._p1Score = 0;
    this._p2Score = 0;
    this._scoreMapping = new Map([
      [0, "love"],
      [1, "fifteen"],
      [2, "thirty"],
      [3, "forty"],
    ]);
  }

  score() {
    return this.differentScore()
      ? this.isGamePoint()
        ? this.gamePoint()
          ? this.winnerScore()
          : this.advScore()
        : this.getDifferentScore()
      : this.isGamePoint()
      ? this.deuce()
      : this.getSameScore();
  }
  
  getSameScore() {
    return `${this.sameScoreMapping()} all`;
  }

  sameScoreMapping() {
    return this._scoreMapping.get(this._p1Score);
  }

  getDifferentScore() {
    return `${this.getP1Score()} ${this.getP2Score()}`;
  }

  getP2Score() {
    return this._scoreMapping.get(this._p2Score);
  }

  getP1Score() {
    return this._scoreMapping.get(this._p1Score);
  }

  deuce() {
    return "deuce";
  }

  advScore() {
    return `${this.setHigherPlayer()} adv`;
  }

  winnerScore() {
    return `${this.setHigherPlayer()} win`;
  }

  gamePoint() {
    return Math.abs(this._p1Score - this._p2Score) == 2;
  }

  setHigherPlayer() {
    return this._p1Score > this._p2Score ? "p1" : "p2";
  }

  differentScore() {
    return this._p1Score != this._p2Score;
  }

  isGamePoint() {
    return this._p1Score > 3 || this._p2Score > 3;
  }

  p1Score() {
    this._p1Score++;
  }

  p2Score() {
    this._p2Score++;
  }
}

module.exports = TennisService;
