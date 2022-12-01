// input - string list of calories per food item
// each food item is on a new line; each elf's food is separated by an additional blank line

//output - number- how many Calories are being carried by the Elf carrying the most Calories

const calorieList = document.querySelector('pre').innerHTML

// split calorieList by /n/n (double new line) to get each elf's items
// map each elf onto a subarray of items, by splitting at /n
const calorieListByElf = calorieList.split(/\n\n/).map(list => list.split(/\n/))

// iterate through the array
   //for each subarray, reduce, convert elements to Number, and add 
let totalCaloriesByElf = calorieListByElf.map(list => list.reduce((prev, curr) => prev + Number(curr), 0))

//return the max of the resulting array 
let max = Math.max(...totalCaloriesByElf)
console.log(max)

//67633


//Part 2 - Find the calories carried by the top 3 elves and return the total calories

let top3CaloriesSum = totalCaloriesByElf.sort((a, b) => b - a).slice(0, 3).reduce((prev, curr) => prev + curr, 0)
console.log(top3CaloriesSum)