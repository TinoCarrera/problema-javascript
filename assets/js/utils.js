export const formatDate = (date) => {
  let d1 = new Date(date);
  let d2 = new Date();

  let d1Y = d1.getFullYear();
  let d1M = d1.getMonth();

  let d2Y = d2.getFullYear();
  let d2M = d2.getMonth();

  return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
}
