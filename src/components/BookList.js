import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Card from './Card';
import ModalContent from './ModalContent';
import '../App.css';

Modal.setAppElement('#root');

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.bookClicked = {};
    this.modalStyle = {
      content: {
        backgroundColor: props.themeStyle.background,
        borderWidth: 1,
        borderColor: '#262626'
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.44)'
      }
    };
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
    const { books, sections, onSearch, booksOnTheShelf, handleChange, themeStyle } = this.props;
    const { showModal } = this.state;
    this.modalStyle.content.backgroundColor = themeStyle.background;
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
            themeStyle={themeStyle}
          />
        ))}
        <Modal
          isOpen={showModal}
          style={this.modalStyle}
          onRequestClose={this.closeModal}
        >
          <ModalContent
            book={this.bookClicked}
            themeStyle={themeStyle} />
        </Modal>
      </div>
    );
  }
}

BookList.propTypes = {
  onSearch: PropTypes.bool,
  booksOnTheShelf: PropTypes.array,
  books: PropTypes.array,
  handleChange: PropTypes.func.isRequired,
  sections: PropTypes.array.isRequired,
  themeStyle: PropTypes.object.isRequired,
}