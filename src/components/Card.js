import React, { Component } from 'react';
import classnames from 'classnames';
import Dropdown from './Dropdown';
import '../App.css';

export default class Card extends Component {
  findIndex = (id, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return i;
      }
    }
  }

  onChange = (shelf) => {
    const { books, book, handleChange, booksOnTheShelf, onSearch } = this.props;
    const shouldPushNewBook = booksOnTheShelf && booksOnTheShelf.filter(b => b.id === book.id).length === 0;
    const array = onSearch && !shouldPushNewBook ? booksOnTheShelf : books;
    const bookIndex = this.findIndex(book.id, array);
    array[bookIndex].shelf = shelf;
    handleChange(array[bookIndex], shelf, shouldPushNewBook);
  }

  isBookOnTheShelf = (bookId) => {
    const { booksOnTheShelf, books, onSearch, sections } = this.props;
    const book = onSearch ? booksOnTheShelf && booksOnTheShelf.find(book => book.id === bookId) : books && books.find(book => book.id === bookId);
    if (book) {
      this.onShelf = sections.find(s => s.name === book.shelf);
      return book.shelf;
    }
    return false;
  }

  render() {
    const { book, books, booksOnTheShelf, onSearch, onClick, sections } = this.props;
    const onShelf = onSearch ? booksOnTheShelf && booksOnTheShelf.find(b => b.id === book.id) : books && books.find(b => b.id === book.id);
    return (
      <div key={book.id} className={classnames('card', { 'card-onshelf': onSearch && onShelf })}>
        <div className="card-left" style={{ width: 128, height: 189, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }} />
        <div className="card-right">
          <div className="card-right-headers">
            <h1>{book.title}</h1>
            <h2>By: {book.authors && book.authors.map((a, i) => (i === book.authors.length - 1 ? a : a + ', '))}</h2>
            <div className="card-right-details">
              <ul>
                <li>Published: {book.publishedDate && book.publishedDate.substring(0, 4)}</li>
                <li>Pages: {book.pageCount}</li>
              </ul>
              {onSearch && onShelf ? <p className="onShelf">Shelf: {onShelf.shelf}</p> : null}
            </div>
          </div>
          <div className="card-right-cta">
            <div className="card-right-cta-container">
              <div id="readmore" onClick={() => onClick(book)}>Read more...</div>
              <Dropdown
                title='Add to'
                list={sections}
                book={book}
                shelf={(onShelf && onShelf.shelf) || 'none'}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

