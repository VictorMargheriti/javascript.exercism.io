//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  const distance = Math.sqrt(x**2 + y**2)
  let points
  if(distance > 10){
      points = 0;
  } else if(distance > 5){
      points = 1;
  } else if(distance > 1){
      points = 5;
  } else {
      points = 10;
  }
  return points
}
