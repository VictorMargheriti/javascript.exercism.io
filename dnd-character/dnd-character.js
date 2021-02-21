//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = () => {
  return Math.floor((constitution - 10)/2);
};

export class Character {
  static rollAbility() {
    let rollFourTimes = []
    const diceRoll = () => {
      return Math.floor(Math.random() * 6 + 1);
    }
      for(let i=0; i<4; i++){
        rollFourTimes.push(diceRoll());
      }
      rollFourTimes.sort();
      rollFourTimes.shift();
      let stats = rollFourTimes[0] + rollFourTimes[1] + rollFourTimes[2];
  }

  get strength() {
    return this.rollAbility();
  }

  get dexterity() {
    return this.rollAbility();
  }

  get constitution() {
    return this.rollAbility();
  }

  get intelligence() {
    return this.rollAbility();
  }

  get wisdom() {
    return this.rollAbility();
  }

  get charisma() {
    return this.rollAbility();
  }

  get hitpoints() {
    return abilityModifier() + 10
  }
}
