// node assignment4/problem5.js

// Reversing Array
function reverseArray(arr) {
    let reverseArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        //adds items to begginning of array
        reverseArr.unshift(arr[i]);
    }
    return reverseArr;
}

// Remove Duplicates
function removeDuplicates(arr) {
    let newArr = [];
    for(let i=0; i < arr.length; i++)
    {
        // finding the first / last index of the selected item
        const element = (item) => item == arr[i];
        let firstIndex = arr.findIndex(element);
        let lastIndex = arr.findLastIndex(element);

        // Inlcuding only the first duplicated item
        if (firstIndex != i)
        {
            // Checking for duplicates through indexes
            if (lastIndex != firstIndex)
                continue
            else
                newArr.push(arr[i])
        }  
        else 
            newArr.push(arr[i]) 

    }

    return newArr;
}

// Rotating Array
function rotateArray(arr, positions) {
    let lastItem;
    // if positions is greater than the arr length
    if (positions > arr)
    {
        positions = positions % arr;
    }
    // rotating the array
    for (let i = 0; i < positions; i++)
    {
        lastItem = arr.pop();
        arr.unshift(lastItem)
    }
    return arr;
}

// Find Second Largest
function findSecondLargest(numbers) {
    // checking for non-unique items
    const sameItem = (item) => item == numbers[0];
    if (numbers.every(sameItem))
        return null;

    // sorting the array
    numbers.sort();

    //comparing the numbers
    numbers.sort((a,b) => a - b);

    // the number less than the highest number
    let secondLargeNum = (item) => (item < numbers[numbers.length - 1]);
    let index = numbers.findLastIndex(secondLargeNum)
 
    return numbers[index];
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([]));

console.log(removeDuplicates(["a", "b", "a", "c"]));
console.log(removeDuplicates([1, 2, 2, 3, 1, 4]))

console.log(rotateArray([1, 2, 3, 4], 1));
console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([1, 2, 3], 4));

console.log(findSecondLargest([10, 20, 30, 40]));
console.log(findSecondLargest([5, 5, 5]));
console.log(findSecondLargest([100, 50, 100, 75]));
