export const round = (number, decimal_places = 2) => {
  return Math.round((number + Number.EPSILON) * 100) / 100;
}