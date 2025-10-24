// node assignment4/problem3.js

// Calculating Average score
function calculateAverage(scores) {
    let totalScores = 0;
    let avgScores = 0;
    // iterates through the scores array and adds the items if items are present.
    if (scores.length > 0)
    {
        for(let i=0; i<scores.length; i++)
        {
            totalScores += scores[i];
        }
       avgScores = totalScores/scores.length;
       return avgScores;
    }
    
    else {return 0};
}

// Dropping lowest score
function dropLowestScore(scores) {
    let newscores = [];
    let dropped = scores[0];
    for(let i=0; i<scores.length; i++)
    {
        newscores[i] = scores[i];
        
        // finding the lowest score
        if (newscores[i] < dropped)
        {
            dropped = newscores[i];
        }
    }
    // Removing the lowest score
    const index = newscores.indexOf(dropped);
    newscores.splice(index, 1);
    return newscores;
}

// Letter grade corresponding to number score
function getLetterGrade(score) {
    let letter = ""
    if (score <= 66)
        letter = "F";
    else if (score <= 69)
        letter = "D";
    else if (score <= 75)
        letter = "C";
    else if (score <= 84)
        letter = "B";
    else if (score > 84)
        letter = "A";

    return letter;
}

// Curving Grades
function curveGrades(scores, curveAmount) {
    if (scores.length > 0)
        {
            // iterating throught the scores 
            for(let i=0; i< scores.length; i++)
            {
                // adding the curve amount to each score
                scores[i] += curveAmount;
                if (scores[i] > 100)
                    scores[i] = 100;
            }
            return scores;
        }
}


console.log(calculateAverage([80, 90, 70]));
console.log(calculateAverage([100, 50, 75]))
console.log(calculateAverage([]))

console.log(dropLowestScore([80, 90, 70, 85]));
console.log(dropLowestScore([50, 50, 75, 100]))

console.log(getLetterGrade(95))
console.log(getLetterGrade(82))
console.log(getLetterGrade(58));

console.log(curveGrades([85, 95, 70], 10))
console.log(curveGrades([90, 96, 80], 5))