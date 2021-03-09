var Skier = require('./Skier');

class Lift  {
  constructor(limit) {
    this.inService = true;
    if (limit === undefined)  {
      this.limit = 3;
    } else {
      this.limit = limit
    }
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, ticket_status)  {
    if (this.skiers.length < this.limit && ticket_status === true)  {
      var skier = new Skier(name, ticket_status)
      this.skiers.push(skier)
    } else if (this.skiers.length >= this.limit) {
      return `Sorry, ${name}. Please wait for the next lift!`
    } else if (ticket_status === false) {
      return `Sorry, ${name}. You need a lift ticket!`
    }
  }

  startLift() {
    this.safetyBar = 'down';
  }
}

module.exports = Lift;
