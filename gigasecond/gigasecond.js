//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let seconds = 1000000000000 + Date.parse(date);
  return new Date(seconds);
};
