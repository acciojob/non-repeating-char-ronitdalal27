function firstNonRepeatedChar(s) {
	// Create an object to store character counts
    const charCount = {};

    // Count the occurrence of each character
    for (const char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first non-repeated character
    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Return null if no non-repeated character is found
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
