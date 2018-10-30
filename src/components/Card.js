import React, { Component } from 'react';
import classnames from 'classnames';
import Rating from 'react-stars';
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

  shouldPushNewBook = () => {
    const { booksOnTheShelf, book } = this.props;
    return booksOnTheShelf && booksOnTheShelf.filter(b => b.id === book.id).length === 0;
  }

  getBookReference = () => {
    const { books, book, booksOnTheShelf, onSearch } = this.props;
    this.shouldPushNewBook = this.shouldPushNewBook();
    const array = onSearch && !this.shouldPushNewBook ? booksOnTheShelf : books;
    const bookIndex = this.findIndex(book.id, array);
    return array[bookIndex];
  }

  onChange = (shelf) => {
    const { handleChange } = this.props;
    const ref = this.getBookReference();
    ref.shelf = shelf;
    handleChange(ref, shelf, this.shouldPushNewBook);
  }

  render() {
    const { book, books, booksOnTheShelf, onSearch, onClick, sections, themeStyle } = this.props;
    const onShelf = onSearch ? booksOnTheShelf && booksOnTheShelf.find(b => b.id === book.id) : books && books.find(b => b.id === book.id);
    const shelfTitle = onShelf && sections.filter(s => s.name === onShelf.shelf)[0].title;
    return (
      <div key={book.id} style={{ background: themeStyle.cards }} className={classnames('card', { 'card-onshelf': onSearch && onShelf })}>
        <div className="card-left" style={{ width: 128, height: 189, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }} />
        <div className="card-right">
          <div className="card-right-headers">
            <h1 style={{ color: themeStyle.textOpacity1 }}>{book.title}</h1>
            <h2 style={{ color: themeStyle.textOpacity2 }}>By: {book.authors && book.authors.map((a, i) => (i === book.authors.length - 1 ? a : a + ', '))}</h2>
            <div className="card-right-details">
              <ul>
                <li style={{ color: themeStyle.textOpacity2 }}>Published: {book.publishedDate && book.publishedDate.substring(0, 4)}</li>
                {onSearch && onShelf ? <li style={{ color: themeStyle.textOpacity2 }} className="onShelf">Shelf: {shelfTitle}</li> : null}
              </ul>
              <Rating
                count={5}
                value={book.averageRating}
                edit={onShelf ? true : false}
                onChange={(newRating) => console.log(newRating)}
                size={20}
                color2={'#BD00FF'} />
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
                themeStyle={themeStyle}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

