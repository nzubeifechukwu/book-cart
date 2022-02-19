import React, { useState } from "react";
import { booksData } from "./data";

const Book = () => {
  const [books, setBooks] = useState(booksData);
  const title = "You have " + books.length + " books in your cart";
  const clearBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <>
      <h1>{title}</h1>
      <section className="bookList">
        {books.map((book) => {
          const { id, title, author, price, image } = { ...book };
          return (
            <section key={id} className="book">
              <img src={image} alt="" />
              <article className="bookDesc">
                <h2>{title}</h2>
                <h3>{author}</h3>
                <h4>{price}</h4>
              </article>
              <button className="removeBtn" onClick={() => clearBook(id)}>
                remove
              </button>
            </section>
          );
        })}
      </section>
      <button className="clearBtn" onClick={() => setBooks([])}>
        Clear all books
      </button>
    </>
  );
};

export default Book;
