// node assignment4/problem2.js


// Counting leaves
function countLeaves(days) {
    
    // Declaring countLeaves() variables
    let numLeaves = [];
    let count = 0;
    let leaves = 0;
    let totalLeaves = 0;

    // Adding the number of leaves each day into an array
    for(let i=1; i<=days; i++)
    {
        leaves += 10;
        numLeaves[count] = leaves;
        count++;
    }
    // Putting the items in the array into a string while also counting the total amount of leaves
    let imsg = "(";
    for(let n=0; n<numLeaves.length; n++)
        {
            imsg += numLeaves[n];
            // counting the leaves
            totalLeaves += numLeaves[n]
            if (n+1 < numLeaves.length)
                {
                    imsg += " + ";
                }
        }
    imsg += ")";
    // putting the whole string together
    let msg = totalLeaves + " " + imsg;
    return msg;
}

// Counting the Leaf Colors
function categorizeLeafColors(leaves) {
     let colorCount ={};
     let value = 0;
     
    for (let i = 0; i < leaves.length; i++)
    { 
        // finding the color and the index of the first/ last instance of it
        const color = (item) => item == leaves[i];
        let firstIndex = leaves.findIndex(color);
        let lastIndex = leaves.findLastIndex(color);

        // if color is > 1
        if (firstIndex != lastIndex)
            {
                value += 1
                colorCount[leaves[i]] = value;
            }
        else
            colorCount[leaves[i]] = 1;
  
    }

    return colorCount;
}

console.log(countLeaves(1))
console.log(countLeaves(2))
console.log(countLeaves(4));
console.log(countLeaves(5))

console.log(categorizeLeafColors(["red", "yellow", "red", "brown"]))
console.log(categorizeLeafColors(["orange", "orange", "orange"]))
console.log(categorizeLeafColors([]))