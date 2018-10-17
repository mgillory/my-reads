import React, { Component } from 'react';
import Modal from 'react-modal';
import Card from './Card';
import ModalContent from './ModalContent';
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
          <ModalContent book={this.bookClicked} />
        </Modal>
      </div>
    );
  }
}