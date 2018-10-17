import React, { Component } from 'react';
import Modal from 'react-modal';
import Card from './Card';
import '../App.css';

const modalStyle = {
  content: {
    backgroundColor: '#313131',
    borderWidth: 1,
    borderColor: '#262626'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.44)'
  }
};
Modal.setAppElement('#root');

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.bookClicked = {};
  }

  onClick = (book) => {
    console.log(book);
    this.bookClicked = book;
    this.setState({ showModal: !this.state.showModal });
  }

  closeModal = () => {
    this.setState({ showModal: !this.state.showModal });
    this.bookClicked = {};
  }

  render() {
    const { books, sections, onSearch, booksOnTheShelf, handleChange } = this.props;
    const { showModal } = this.state;
    return (
      <div className="card-flex-container">
        {books && Array.isArray(books) && books.map((book, i) => (
          <Card
            key={book.id}
            books={books}
            book={book}
            onSearch={onSearch}
            booksOnTheShelf={booksOnTheShelf}
            handleChange={handleChange}
            onClick={this.onClick}
            sections={sections}
          />
        ))}
        <Modal
          isOpen={showModal}
          style={modalStyle}
          onRequestClose={this.closeModal}
        >
          <div className="modal-container">
            <div className="modal-upper">
              <div className="">
                <div style={{ width: 128, height: 189, backgroundImage: `url(${this.bookClicked.imageLinks && this.bookClicked.imageLinks.smallThumbnail})`, marginRight: 16, marginBottom: 16 }}></div>
                <p>{this.bookClicked.averageRating}</p>
              </div>
              <div className="modal-upper-content">
                <div className="modal-upper-content-titles">
                  <h2>{this.bookClicked.title}</h2>
                  {this.bookClicked && this.bookClicked.subtitle ? <h2>{': ' + this.bookClicked.subtitle}</h2> : null}
                </div>
                <p>{this.bookClicked.authors}</p>
                <p>{this.bookClicked.categories}</p>
                <p>{this.bookClicked.publisher}</p>
                <p>{this.bookClicked.publishedDate}</p>
                <p>{this.bookClicked.shelf}</p>
              </div>
            </div>
            <div className="modal-lower">
              {this.bookClicked.description}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}