const { findAccountById } = require("./accounts");

const _getTotal = myArr => myArr.length; // helper function

const getTotalBooksCount = books => _getTotal(books); // helper func call = books array.length

const getTotalAccountsCount = accounts => _getTotal(accounts); // helper func call = accounts array.length

const getBooksBorrowedCount = books => {
  // create a filter for only unreturned books
  const totalBooks = books.filter(book => book.borrows[0].returned === false);

  return totalBooks.reduce((sum, books) => { // accumlator 
    sum = Object.keys(books).length;  // accumulate the sum of object keys 
    sum++ // add to counter per length of object keys
    return sum; // return the counter
  }, 0);
}; // end of function



const getMostCommonGenres = books => {
  
  const _getGenreCount = (genre) => { //helper function writes a return statement for later use
  let count = 0; // counter
  for(let book of books){
    if(book.genre === genre) count++; // genres === add to counter
  }
  return {name: genre, count}; // name = genre, count = end of counter after if conditional 
}

// stored variable to hold accumlator
const mostCommon = books.reduce((acc, book) => { // reduce adds to accumlator when the genre is defined
  if(!acc.includes(book.genre)) acc.push(book.genre);
  return acc; // return acc with each book genre pushed inside
}, []);

// store the reduced variable in a new sorted variable
let sortedArr = mostCommon.map(genre => _getGenreCount(genre)); // map mostCommon with helper function
// for each genre pushed into mostCommon call _getGenreCount to add to counter and print a new {name: count:} object
  sortedArr.sort((genA, genB) => genA.count < genB.count ? 1 : -1); // sort mostCommon in an ordered list
return sortedArr.slice(0, 5); // returns a list starting at array index [0] and ending at array index [4]
} // end of getMostCommonGenres function


function getMostPopularBooks(books) {
  // .map sets each book in the books array with their name: as the book title
const popular = books.map(book => ({name: book.title, count: book.borrows.length})); // count of most popular as the length of how many people have borrowed
  
popular.sort((popA, popB) => popB.count - popA.count) // sorts the popular variable after setting their name and count

  return popular.slice(0, 5); // return the popular variable with just array index [0]-[4] (top five)
} // end of getMostPopularBooks func

 const getMostPopularAuthors = (books, authors) => {
  let topAuthors = []; //stores the full list of authors
  for(let author of authors) {
    let authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for(let book of books) {
      if (author.id === book.authorId){
        count += book.borrows.length;
      }
    }
    let authorList = {name: authorName, count: count};
    topAuthors.push(authorList);
  }
  topAuthors.sort(((topA, topB) => topB.count - topA.count)) // sort by popularity
  return topAuthors.slice(0, 5); // returns only the top five
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
