import { Book } from "./Book";

const btnSave = document.getElementById("btnSave");
const btnList = document.getElementById("btnList");
const tblBook = document.getElementById("tblBook") as HTMLTableElement;
const iptTitle = document.getElementById("iptTitle") as HTMLInputElement;
const iptWriter = document.getElementById("iptWriter") as HTMLInputElement;
const iptYear = document.getElementById("iptYear") as HTMLInputElement;
const pgrTitle = document.getElementById("pgrTitle") as HTMLParagraphElement;
const pgrWriter = document.getElementById("pgrWriter") as HTMLParagraphElement;
const pgrYear = document.getElementById("pgrYear") as HTMLParagraphElement;

const books: Book[] = [];

function saveBook() {
  const book = new Book();
  book.title = iptTitle.value;
  book.writer = iptWriter.value;
  book.year = parseInt(iptYear.value);

  books.push(book);
}

function listBook() {
  let book: Book;

  tblBook.innerHTML = "";

  for (book of books) {
    tblBook.innerHTML =
      tblBook.innerHTML +
      `<tr> <td>${book.title}</td> <td>${book.writer}</td> <td>${book.year}</td> </tr>`;
  }
}

btnSave?.addEventListener("click", saveBook);
btnList?.addEventListener("click", listBook);
