class Skier {
  constructor(name, ticket_status) {
    this.name = name;
    this.hasLiftTicket = ticket_status
    this.skillLevel = 1
    this.nextSlope = 'green circle';
  }

  takeLesson()  {
    this.skillLevel++
  }

  pickSlope() {
    if (this.skillLevel === 3)  {
      this.nextSlope = 'blue square'
    }
    else if (this.skillLevel >= 5) {
      this.nextSlope = 'black diamond'
    }
  }
}

module.exports = Skier;
