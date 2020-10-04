module.exports = function toReadable(number) {
  let collection = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let collection10 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred';
  if (number.toString().length === 1) return collection[number]
  if (number.toString().length === 3) {
    if (/[^00$]/.test(number.toString().substring(1))) {
      return `${collection[number.toString()[0]]} ${hundred} ${toReadable(number.toString().substring(1))}`
    } else {
      return `${collection[number.toString()[0]]} ${hundred}`
    }
  }
  if (number.toString().length === 2 && number >= 20) {
    if (number % 10 === 0) return `${collection10[number.toString()[0] - 2]}`
    return `${collection10[number.toString()[0] - 2]} ${toReadable(number.toString().substring(1))}`
  } else if (number >= 10) {
    return `${collection[number]}`
  } else {
    return `${toReadable(number.toString().substring(1))}`
  }
}