import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "La sombra del viento", author: "Carlos Ruiz Zafon", id: 1 },
    { title: "Momo", author: "Michael Ende", id: 2 },
  ]);

  const addBook = (title, author) => {
    // setBooks([...books, {title:title, author:author, id:books.length}])
    // Shorter expression
    setBooks([...books, { title, author, id: books.length }]);
  };

  const removeBook = (id) => {
    // Keep in the array if the id of the current book in the iteration loop is not the passed id
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
