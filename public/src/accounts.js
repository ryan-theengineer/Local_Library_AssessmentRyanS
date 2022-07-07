const _idHelperAccounts = (array, id) => array.find(item => item.id === id); // helper func

const findAccountById = (accounts, id) => _idHelperAccounts(accounts, id);

const sortAccountsByLastName = accounts => accounts.sort(({name: {last: nameOne}}, {name: {last: nameTwo}}) => nameOne > nameTwo ? 1 : -1); //destructring
  

  /* Two different methods
    return accounts.sort((a, b) => {
    if(a.name.last < b.name.last) return -1;
    if(a.name.last > b.name.last) return 1;
   return 0;
  }); // normal sort method

  // return accounts.sort((acctA, acctB) => acctA.name.last.toLowerCase() > acctB.name.last.toLowerCase() ? 1 : -1); */
  // one line sort

function getTotalNumberOfBorrows(account, books) {
  let total = [];
  for(let book in books) {
    let tracker = books[book].borrows.find(borrow => borrow.id === account.id); // tracker to detemine if ids are ===
    if(tracker) total.push(tracker); // if ids match
  }
  return total.length; // return how many are borrowed by checking tracker length
}

function getBooksPossessedByAccount(account, books, authors) {
  return (books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned).map((book) => {
    book["author"] = authors.find((author) => author.id === book.authorId);
  return book;
})); // return the book that is found using filter
}
// one line function determines if book.borrows.id == account.id passed in, and if it is not returned
// map function sets the author of book to be the first author found within passed argument.id


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
