const ftoc = (fah) => {
  const cel = (fah - 32) / 1.8;
  const rounded = (Math.round(cel *10) / 10);
  
  return rounded;
} 

const ctof = (cel) => {
  const fah = 1.8 * cel + 32;
  const rounded = Math.round(fah *10) / 10;

  return rounded;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
