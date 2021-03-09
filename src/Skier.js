class Skier {
  constructor(name, ticket_status) {
    this.name = name;
    this.hasLiftTicket = ticket_status
    this.skillLevel = 1
    this.nextSlope = 'green circle';
  }
}

module.exports = Skier;
