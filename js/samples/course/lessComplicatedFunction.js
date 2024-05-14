export const isArrayOfNumbers = data => data.some(isNaN)

export const findLargestNumberInArray = data => {
    let largestNumber = 0;
        
    for (let i = 0; i < data.length; i++) {
        if (largestNumber < data[i]) {
            largestNumber = data[i]       
        }
    }
    
    return largestNumber
}

export const findLargestWordInArray = data => {
    let largestWord = ""
    for (let i = 0; i < data.length; i++) {
        if (largestWord.length < data[i].length) {
            largestWord = data[i]       
        }
    }
    
    return largestWord
}

export const findLargestInArray = data => {
    if (!isArrayOfNumbers(data)) {
        return findLargestNumberInArray(data)
    }

    return findLargestWordInArray(data)
}
