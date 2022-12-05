//Part 1
//In how many assignment pairs does one range fully contain the other?
//16-80,80-87   => [["16-80", "80-87"], ["3-4", "4-4"]]

const pairAssignments = document.querySelector('pre').innerHTML.split(/\n/).map(pair => pair.split(','))

//declare count variable; set to 0
//loop - for each pair
// if range1Min <= range2Min && range1Max >= range2Max, increment count, 
// else if range2Min >= range1Min && range2Max >= range1Max, increment count

let fullyContainedRanges = 0

pairAssignments.forEach(([range1, range2]) => {
  const range1Min = Number(range1.split('-')[0])
  const range1Max = Number(range1.split('-')[1])
  const range2Min = Number(range2.split('-')[0])
  const range2Max = Number(range2.split('-')[1])

  if ((range1Min <= range2Min && range1Max >= range2Max) ||
      (range2Min <= range1Min && range2Max >= range1Max)) {
    fullyContainedRanges++
  }
})

console.log(fullyContainedRanges) 

//Part 2
//It seems like there is still quite a bit of duplicate work planned. Instead, the Elves would like to know the number of pairs that overlap at all.

let overlappingRanges = 0 

for (let i = 0; i < pairAssignments.length; i++) {
  [range1, range2] = pairAssignments[i]

  const range1Min = Number(range1.split('-')[0])
  const range1Max = Number(range1.split('-')[1])
  const range2Min = Number(range2.split('-')[0])
  const range2Max = Number(range2.split('-')[1])

  //if the ranges don't overlap, continue
  if ((range1Min < range2Min && range1Max < range2Min) ||
      (range2Min < range1Min) && range2Max < range1Min) {
    continue
  } else {
    //else, increment overlappingRanges
    overlappingRanges++
  }
}

console.log(overlappingRanges)