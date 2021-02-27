//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    // all 3 sides are same length
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] 
      && this.sides[0] > 0){
      return true;
    } 
    return false;
  }

  get isIsosceles() {
    // 2 sides are same length
    let sortedSides = this.sides.sort();
    if (sortedSides[0] + sortedSides[1] >= sortedSides[2] 
      && (sortedSides[0] === sortedSides[1] || sortedSides[1] === sortedSides[2])){
      return true;
    } 
    return false;
  }

  get isScalene() {
    // all sides have diff lengths
    let sortedSides = this.sides.sort();
    if (sortedSides[0] + sortedSides[1] >= sortedSides[2]
      && sortedSides[0] !== sortedSides[1] && sortedSides[1] !== sortedSides[2]){
      return true
    } return false;
  }
}