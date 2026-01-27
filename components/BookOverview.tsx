import Image from "next/image";
import React from "react";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  coverUrl,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Category:{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>
          <p className="flex gap-1 items-center">
            <Image src="./icons/star.svg" alt="star" width={20} height={20} />
            <p>
              <span className="text-light-200 font-semibold">{rating}</span>/5
            </p>
          </p>
        </div>

        <div className="book-copies">
          <p>
            Total Books:{" "}
            <span className="text-light-200 font-semibold">{totalCopies}</span>
          </p>
          <p>
            Available Books:{" "}
            <span className="text-light-200 font-semi-bold">
              {availableCopies}
            </span>
          </p>
        </div>

        <p className="book-description">{description}</p>
      </div>
    </section>
  );
};

export default BookOverview;
