const formatter = Intl.NumberFormat('pt-BR');

function formatNumber(value) {
  let formatedValue = formatter.format(Math.abs(value).toFixed(2));
  console.log(formatedValue);
  let formated = value >= 0 ? `R$ ${formatedValue}` : `- R$ ${formatedValue}`;
  return formated;
}
function formatPercent(value) {
  const twoDecimals = value.toFixed(2);
  return twoDecimals.replace('.', ',') + '%';
}

export { formatNumber, formatPercent };
