"use strict";

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log("Already issued");
        } else {
            this.isIssued = true;
            console.log("Book issued");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log("Book returned");
    }
}

const books = [
    new Book("Java", "Amit", "101"),
    new Book("Python", "Rahul", "102"),
    new Book("HTML", "Sumit", "103")
];

console.log("Available Books:");

books.filter(b => !b.isIssued).forEach(b => {
    console.log(b.title, b.author, b.ISBN);
});

let searchISBN = "102";

let book = books.find(b => b.ISBN === searchISBN);

if (book) {
    book.issueBook();
} else {
    console.log("Book not found");
}