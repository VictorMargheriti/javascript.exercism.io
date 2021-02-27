//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (arr) => {
  const COLORS = [
    'Black',
    'Brown',
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Violet',
    'Grey',
    'White',
  ];
  let colorA = COLORS.indexOf(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))
  let colorB = COLORS.indexOf(arr[1].charAt(0).toUpperCase() + arr[1].slice(1))

  return colorA * 10 + colorB
};

