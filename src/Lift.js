var Skier = require('./Skier');

class Lift  {
  constructor() {
    this.inService = true;
    this.limit = 3;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, ticket_status)  {
    if (this.skiers.length < 2 && ticket_status === true)  {
      var skier = new Skier(name, ticket_status)
      this.skiers.push(skier)
    } else if (this.skiers.length >= 2) {
      return `Sorry, ${name}. Please wait for the next lift!`
    } else if (ticket_status === false) {
      return `Sorry, ${name}. You need a lift ticket!`
    }
  }
}

module.exports = Lift;
