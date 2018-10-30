import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import BookList from './BookList';
import { search } from '../api/BooksAPI';
import '../App.css';

export default class Search extends Component {
  state = {
    searchQuery: '',
    queryResult: undefined,
    loading: false
  }

  onChangeQuery = (e) => {
    this.setState({
      searchQuery: e.target.value,
      loading: true
    });
    search(e.target.value)
      .then((res) => {
        this.setState({ queryResult: res, loading: false })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { queryResult, loading } = this.state;
    const { booksOnTheShelf, handleChange, sections, themeStyle } = this.props;

    return (
      <div className="search-container">
        <div className="search-books-bar">
          <Link to="/" component={BookShelf} className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchQuery}
              onChange={this.onChangeQuery}
            />
          </div>
        </div>
        <div style={{ background: themeStyle.background }} className="search-books-results">
          <PulseLoader
            className="loader"
            sizeUnit={"px"}
            size={14}
            color={themeStyle.action}
            loading={loading}
          />
          <BookList
            onSearch
            books={queryResult}
            sections={sections}
            booksOnTheShelf={booksOnTheShelf}
            handleChange={handleChange}
            themeStyle={themeStyle}
          />
        </div>
      </div >
    );
  }
}

Search.propTypes = {
  sections: PropTypes.array.isRequired,
  booksOnTheShelf: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  themeStyle: PropTypes.object.isRequired,
}