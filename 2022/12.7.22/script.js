//12.7.22 - Part 1

/*
 The total size of a directory is the sum of the sizes of the files it contains, directly or indirectly. 

 To begin, find all of the directories with a total size of at most 100000, then calculate the sum of their total sizes. In the example above, these directories are a and e; the sum of their total sizes is 95437 (94853 + 584). (As in this example, this process can count files more than once!)

Determine the total size of each directory.

Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?
*/

//input 
const terminalLogs = document.querySelector('pre').innerHTML.split(/\n/)
// if it starts with $, it's a command; else, it's a listed file or directory 


//recursive function 
function calcDirectorySize(dir) {


}

function sizeOfDirectoriesOver100000(rootDir) {
  const directoriesBySize = {}


}

//every time we reach a dir, we need to get its total file size and add it to our array 

//then filter the array for values >= 100000, and reduce to find their sum 

