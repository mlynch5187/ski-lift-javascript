var Skier = require('./Skier');

class Lift  {
  constructor() {
    this.inService = true;
    this.limit = 3;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, ticket_status)  {
    if (this.skiers.length < 2)  {
      var skier = new Skier(name, ticket_status)
      this.skiers.push(skier)
    } else {
      return `Sorry, ${name}. Please wait for the next lift!`
    }
  }
}

module.exports = Lift;
