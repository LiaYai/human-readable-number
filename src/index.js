module.exports = function toReadable (number) {
    let result = [];
    const toTwentyNumbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen', 
        'eighteen',
        'nineteen'
    ];
    const tensNumbers = [
        'zero',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];
    const hundreds = Math.trunc(number / 100);
    const tens = Math.trunc(number % 100 / 10);
    const units = Math.trunc(number % 10);
          
    if (number === 0) {
        result.push(toTwentyNumbers[0])
    };
    if (hundreds) {
        result.push(toTwentyNumbers[hundreds]+ ' hundred');
    };
    if (tens || units) {
        if (tens >= 2) {
            result.push(tensNumbers[tens]);
            if (units) {
                result.push(toTwentyNumbers[units])};
        } else {
            result.push(toTwentyNumbers[number % 100]);
        };
    };

    return result.join(' ');
}
