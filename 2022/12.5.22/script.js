//12.5.22 - Part 1
//After the rearrangement procedure completes, what crate ends up on top of each stack? Return as a string of capital letters

//input- starting stacks, rearrangement procedure

/*
Starting stacks: 
            [M] [S] [S]            
        [M] [N] [L] [T] [Q]        
[G]     [P] [C] [F] [G] [T]        
[B]     [J] [D] [P] [V] [F] [F]    
[D]     [D] [G] [C] [Z] [H] [B] [G]
[C] [G] [Q] [L] [N] [D] [M] [D] [Q]
[P] [V] [S] [S] [B] [B] [Z] [M] [C]
[R] [H] [N] [P] [J] [Q] [B] [C] [F]
 1   2   3   4   5   6   7   8   9 
*/

//in each subarray, 0 represents bottom of stack
const startingStacks = [
  ['R', 'P', 'C', 'D', 'B', 'G'], 
  ['H', 'V', 'G'], 
  ['N', 'S', 'Q', 'D', 'J', 'P', 'M'], 
  ['P', 'S', 'L', 'G', 'D', 'C', 'N', 'M'], 
  ['J', 'B', 'N', 'C', 'P', 'F', 'L', 'S'], 
  ['Q', 'B', 'D', 'Z', 'V', 'G', 'T', 'S'], 
  ['B', 'Z', 'M', 'H', 'F', 'T', 'Q'], 
  ['C', 'M', 'D', 'B', 'F'], 
  ['F', 'C', 'Q', 'G']
]

//each step look like e.g "move 1 from 7 to 4"
const rearrangementProcedure = document.querySelector('pre').innerHTML.split(/\n/)

const steps = rearrangementProcedure.map(step => {
  //[numberOfCrates, fromPile, toPile]
  return step.match(/\d+/g).map(el => Number(el))
})

function rearrangeWithCrane9000(steps, startingStacks) {
  //splice() creates a shallow copy, but you need a deep copy to avoid mutating the input, since it's a 2D array 
  const stacks = JSON.parse(JSON.stringify(startingStacks))
  steps.forEach(([numberOfCrates, fromPile, toPile]) => {
  for (let i = 0; i < numberOfCrates; i++) {
    let crate = stacks[fromPile - 1].pop()
    stacks[toPile - 1].push(crate)
  }  
})

const topCrates = stacks.reduce((list, currentStack) => list + currentStack[currentStack.length - 1], '')
return topCrates
}



//Part 2
/*The new crane has the ability to pick up and move multiple crates at once. Before the rearrangement process finishes, update your simulation so that the Elves know where they should stand to be ready to unload the final supplies. After the rearrangement procedure completes, what crate ends up on top of each stack?*/

function rearrangeWithCrane9001(steps, startingStacks) {
  const stacks = JSON.parse(JSON.stringify(startingStacks))
  steps.forEach(([numberOfCrates, fromPile, toPile]) => {
    let crates = stacks[fromPile - 1].splice(-numberOfCrates, numberOfCrates)
    stacks[toPile - 1] = stacks[toPile - 1].concat(crates)
  })
  const topCrates = stacks.reduce((list, currentStack) => list + currentStack[currentStack.length - 1], '')
  return topCrates
}

console.log(rearrangeWithCrane9000(steps, startingStacks))
//TLNGFGMFN

console.log(rearrangeWithCrane9001(steps, startingStacks))
//FGLQJCMBD