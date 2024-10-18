import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("happening");
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            value={newBook.title}
            placeholder="Title of book..."
            id="title"
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            value={newBook.author}
            placeholder="Type in Author..."
            id="author"
            onChange={handleInputChange}
          />
          <button
            style={{
              backgroundColor: "plum",
              fontWeight: "500",
              borderStyle: "none",
              borderRadius: "10px",
            }}
            onClick={handleSubmit}
          >
            Add Book
          </button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, idx) => {
          return (
            <div
              key={idx}
              style={{ backgroundColor: "plum" }}
              className="bookCard"
            >
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookshelf;
