
// Highest word count (45 mins)

// Write a function that given a string returns an array containing
// the most frequent word in it. If the top frequency is shared by more than
// one word, the array will contain all of them (the order is not relevant).
// Your implementation should exclude anything that is not a word
// (e.g. punctuation and numbers), and use lodash methods where possible.
// If the input is an empty string, return an empty array.
// If the input is not a string, an error should be thrown.
// TIP: You'll need to use a regex.

var _ = require('lodash');

function highestWordCount (str) {
    if (typeof str !== 'string') {
        throw new Error();
    } 
    if (!str) return [];
    const freqObj = _.countBy(
        str.split(/\s+/)
            .map(word => word.replace(/[^a-zA-Z]/g, ''))
        )
    const freqArray = Object.entries(freqObj);
    const maxCount = _.max(freqArray.map(([, count]) => count));
    return freqArray
        .filter(([, count]) => count === maxCount)
        .map(([word]) => word)
        .filter(word => word !== '');
}


module.exports = highestWordCount;
