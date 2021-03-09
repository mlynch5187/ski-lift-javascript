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
  }
}

module.exports = Skier;
