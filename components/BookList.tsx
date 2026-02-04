import React from "react";
import BookCard from "./BookCard";

interface Props {
  title: string;
  containerClassName?: string;
  books: Book[];
}

const BookList = ({ title, containerClassName, books }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="text-4xl text-light-100">{title}</h2>
      <ul className="book-list">
        {books.map((book) => (
          <BookCard {...book} key={book.title}/>
        ))}
      </ul>
    </section>
  );
};

export default BookList;
