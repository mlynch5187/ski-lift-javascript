var Skier = require('./Skier');

class Lift  {
  constructor() {
    this.inService = true;
    this.limit = 3;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, ticket_status)  {
    var skier = new Skier(name, ticket_status)
    this.skiers.push(skier)
  }
}

module.exports = Lift;
