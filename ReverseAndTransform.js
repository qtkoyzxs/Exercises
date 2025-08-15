function reverseAndTransform(words) {
    const result = [];
    
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let reversedWord = '';
        
        
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        
        
        result.push(reversedWord.toUpperCase());
    }
    
    return result;
}


const originalArray = ['apple', 'banana', 'cherry', 'date'];
const transformedArray = reverseAndTransform(originalArray);

console.log('Original:', originalArray);
console.log('Transformed:', transformedArray);


function reverseAndTransformV2(words) {
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let reversedWord = '';
        let j = word.length - 1;
        
        while (j >= 0) {
            reversedWord += word[j];
            j--;
        }
        
        result.push(reversedWord.toUpperCase());
    }
    
    return result;
};