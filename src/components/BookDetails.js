import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li>
      <div>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </div>
      <button
        className="remove-btn"
        onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
      >
        Finished
      </button>
    </li>
  );
};

export default BookDetails;
