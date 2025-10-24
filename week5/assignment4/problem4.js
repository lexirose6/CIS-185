// node assignment4/problem4.js

// Creating a Pyramid
function createPyramid(height) {
    let stars = "";
    let count = height;
    for (let i = 1; i<= height; i++)
    {
        
        for (let j = 1; j<=i; j++)
        {
            // adding the spaces while counting down
            while (count > i)
            { 
                    stars += " "; 
                    count --;
            }
            
            // add the star
            stars += "*";

            // the extra stars
            if (j != i)
                stars += "*";
            
        }
        // reset counter
        count = height;
        stars += "\n";
        
    }
   return stars;
}

// Number Staircase
function createNumberStaircase(steps) {
    let numstring = ""
    for (let i = 1; i <= steps; i++)
    {
        for(let j = 1; j <= i; j++)
        {
            //adding counter to string
            numstring += j;
        }
        numstring += "\n"
    }
    return numstring
}

// Creating a checkerboard
function createCheckerboard(size) {
    let string = ""
    for (let i = 0; i < size; i++)
        {
            for (let j = 0; j < size; j++)
             {
                string += "X";
                string += "O";
                // skipping a count to avoid excess x's & o's
                j++ 
             }
              
            string += "\n"
        }
        
    return string;
}


console.log(createPyramid(3))
console.log(createPyramid(4))

console.log(createNumberStaircase(5))
console.log(createNumberStaircase(10))
console.log(createCheckerboard(6))
