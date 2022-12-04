//12.3.22 Part 1
const rucksacksList = document.querySelector('pre').innerHTML.trim()

// split by /n to get each rucksack
// split each round into an array of 2 values [opponentPlay, yourPlay]
const rucksacks = rucksacksList.split(/\n/)
const rucksacksByCompartment = rucksacks.map(sack => [sack.slice(0, sack.length / 2), sack.slice(sack.length / 2)])

function calcPriority(item) {
    if (item === item.toLowerCase()) {
        return item.charCodeAt(0) - 96
    } else {
        return item.charCodeAt(0) - 38
    }
}

//for each subarray
//find the item (character) that appears in each element of the array 
// calculate its priority and map the array to that value

const misplacedItemPriorities = rucksacksByCompartment.map(([compartment1, compartment2]) => {
    const misplacedItem = compartment1.split('').find(item => compartment2.split('').includes(item))
    return calcPriority(misplacedItem)
})

//reduce to add all the resulting proritites and return the sum

const sumOfPriorities = misplacedItemPriorities.reduce((prev, curr) => prev + curr, 0)
console.log(sumOfPriorities)

//12.3.22 Part 2

const badges = []

for (let i = 0; i < rucksacks.length - 2; i += 3) {
    const elf1 = rucksacks[i].split('')
    const elf2 = rucksacks[i + 1].split('')
    const elf3 = rucksacks[i + 2].split('')
    const badge = elf1.find(item => elf2.includes(item) && elf3.includes(item))
    badges.push(badge)
}

const sumOfBadgePriorities = badges.reduce((prev, curr) => prev + calcPriority(curr), 0)
console.log(sumOfBadgePriorities)