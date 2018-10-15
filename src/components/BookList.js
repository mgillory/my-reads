import React, { Component } from 'react';
import Modal from 'react-modal';
import classnames from 'classnames';
import {
  IoIosArrowDown
} from "react-icons/io";
import Dropdown from './Dropdown';
import '../App.css';

Modal.setAppElement('#root');

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.bookClicked = {};
  }

  findIndex = (id) => {
    const { books } = this.props;
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === id) {
        return i;
      }
    }
  }

  onChange = (shelf, book) => {
    const { books, handleChange, booksOnTheShelf } = this.props;
    const bookIndex = this.findIndex(book.id);
    books[bookIndex].shelf = shelf;
    handleChange(books[bookIndex], shelf, booksOnTheShelf ? true : false);
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

  onClick = (book) => {
    this.bookClicked = book;
    this.setState({ showModal: !this.state.showModal });
  }

  closeModal = () => {
    this.setState({ showModal: !this.state.showModal });
    this.bookClicked = {};
  }

  render() {
    const { books, sections, onSearch } = this.props;
    const { showModal } = this.state;
    return (
      <div className="card-flex-container">
        {books && Array.isArray(books) && books.map((book, i) => (
          <div key={book.id} className={classnames('card', { 'card-onshelf': onSearch && this.isBookOnTheShelf(book.id) })}>
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
                  {onSearch && this.isBookOnTheShelf(book.id) ? <p className="onShelf">Shelf: {this.onShelf && this.onShelf.title}</p> : null}
                </div>
              </div>
              <div className="card-right-cta">
                <div className="card-right-cta-container">
                  <div id="readmore">Read more...</div>
                  <Dropdown
                    title='Add to'
                    list={sections}
                    book={book}
                    isBookOnTheShelf={this.isBookOnTheShelf}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <Modal
          isOpen={showModal}
          className='modal'
          overlayClassName='modal-overlay'
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2>{this.bookClicked.title}</h2>
          <p>{this.bookClicked.authors}</p>
          <a className='modal-close-button' onClick={this.closeModal}></a>
        </Modal>
      </div>
    );
  }
}