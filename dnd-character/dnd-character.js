//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (constitution) => {
  if(constitution < 3) throw new Error("Ability scores must be at least 3");
  if(constitution > 18) throw new Error("Ability scores can be at most 18");
  return Math.floor((constitution - 10)/2);
};

export class Character {
  strength = Character.rollAbility();
  dexterity = Character.rollAbility();
  constitution = Character.rollAbility();
  intelligence = Character.rollAbility();
  wisdom = Character.rollAbility();
  charisma = Character.rollAbility();
  hitpoints = abilityModifier(this.constitution) + 10;
  
  static rollAbility() {
    let rollFourTimes = []
    for(let i=0; i<4; i++){
      rollFourTimes.push(Math.floor(Math.random() * 6 + 1));
    } 
    rollFourTimes.sort().shift();
    let stats = rollFourTimes[0] + rollFourTimes[1] + rollFourTimes[2];
    return stats;
  }

  get strength() {
    return this.rollAbility;
  }

  get dexterity() {
    return this.rollAbility;
  }

  get constitution() {
    return this.rollAbility;
  }

  get intelligence() {
    return this.rollAbility;
  }

  get wisdom() {
    return this.rollAbility;
  }

  get charisma() {
    return this.rollAbility;
  }

  get hitpoints() {
    return this.hitpoints;
  }
}
