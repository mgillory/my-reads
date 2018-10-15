import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { FaSearch } from "react-icons/fa";
import Search from './Search';
import BookList from './BookList';
import '../App.css';

export default class BookShelf extends Component {
  render() {
    const {
      books, sections, handleChange, loading,
    } = this.props;
    console.log(books);

    const renderSections = sections.map(section => (
      <div key={section.name} className="bookshelf">
        <h2 className="bookshelf-title">{section.title}</h2>
        <div className="bookshelf-books">
          <PulseLoader
            className="loader"
            sizeUnit="px"
            size={14}
            color="#123abc"
            loading={loading}
          />
          <BookList
            books={books.filter(book => book.shelf === section.name)}
            handleChange={handleChange}
            sections={sections}
          />
        </div>
      </div>
    ));

    return (
      <div className="home-container">
        <header>
          <div className="logo">
            <h1 id="my">my</h1>
            <h1 id="reads">reads</h1>
          </div>
          <Link to="/search">
            <button className="btn btn-3 btn-3e">
              Search <FaSearch className="search-icon" />
            </button>
          </Link>
        </header>
        <div className="list-books-content">
          <div>
            {renderSections}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>

        <Route path="/search" component={Search} />
      </div>
    );
  }
}