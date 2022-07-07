const _idHelperBooks = (array, id) => array.find(item => item.id === id); // helper func finds first id matching params

const findAuthorById = (authors, id) => _idHelperBooks(authors, id); // helper func used with (authors and id args)

  /* findAuthorById
  Another method
  for(let i = 0; i < authors.length; i++){
     if(authors[i].id === id){
       return authors[i];
     }
   }
   return `ID not found: ${author.id}. Please try another.`;
  
   **Can be used to solve findBookById aswell**
   */



const findBookById = (books, id) => _idHelperBooks(books, id); // helper func used with (books and id args)

function partitionBooksByBorrowedStatus(books) {
let partitionArr = [[], []]
  for(let item of books) {
    let returnedStatus = item.borrows[0].returned;
    if (returnedStatus === false){
      partitionArr[0].push(item);
    } else {
      partitionArr[1].push(item);
    }
  }
return partitionArr;
}

function getBorrowersForBook(book, accounts) {
  return accounts.reduce((acc, account) => {
    let matchingBorrower = book.borrows.find(borrow => borrow.id === account.id);
    
    if(matchingBorrower) acc.push({...account, ...matchingBorrower})
    return acc;
}, []);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};


