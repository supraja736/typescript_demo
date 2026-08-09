class Book {
    title: string;
    author: string;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayBook(): void {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Pages:", this.pages);
    }
}

const book1 = new Book("The Alchemist", "Paulo Coelho", 208);
book1.displayBook();