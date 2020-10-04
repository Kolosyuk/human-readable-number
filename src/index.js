module.exports = function toReadable(number) {
  const collection = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const collection10 = ['0', '0', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const strNumber = number.toString();
  if (number < 20) return collection[number]
  if (strNumber.length === 3) {
    if (/[^00$]/.test(strNumber.substring(1))) {
      return `${collection[strNumber[0]]} hundred ${toReadable(Number.parseInt(strNumber.substring(1)))}`
    } else {
      return `${collection[strNumber[0]]} hundred`
    }
  }
  if (number % 10 === 0) return `${collection10[strNumber[0]]}`
  return `${collection10[strNumber[0]]} ${toReadable(strNumber.substring(1))}`
}
