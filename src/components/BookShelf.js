import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import Search from './Search';
import Footer from './Footer';
import ThemeSwitcher from './ThemeSwitcher';
import BookList from './BookList';
import '../App.css';

export default class BookShelf extends Component {
  render() {
    const {
      books, sections, handleChange, loading, onThemeChange, darkTheme, themeStyle
    } = this.props;

    const renderSections = sections.map(section => (
      <div key={section.name} className="bookshelf">
        <h2 style={{ color: themeStyle.text }} className="bookshelf-title">{section.title}</h2>
        <div className="bookshelf-books">
          <PulseLoader
            className="loader"
            sizeUnit="px"
            size={14}
            color={themeStyle.action}
            loading={loading}
          />
          <BookList
            books={books.filter(book => book.shelf === section.name)}
            handleChange={handleChange}
            sections={sections}
            themeStyle={themeStyle}
          />
        </div>
      </div>
    ));

    return (
      <div>
        <header style={{ background: themeStyle.header }}>
          <div className="logo">
            <h1 id="my" style={{ color: themeStyle.text }}>my</h1>
            <h1 id="reads">reads</h1>
          </div>
          <div className="theme-and-search">
            <ThemeSwitcher themeStyle={themeStyle} divClass="header-theme-selector" pClass="header-theme-selector-p" onThemeChange={onThemeChange} darkTheme={darkTheme} />
            <Link to="/search">
              <button className="btn btn-3 btn-3e">
                Search <i style={{ color: '#fff', fontSize: 21 }} className="search-icon ion-ios-search" />
              </button>
            </Link>
          </div>
        </header>
        <main>
          <div className="list-books-content">
            {renderSections}
          </div>
        </main>
        <Footer onThemeChange={onThemeChange} themeStyle={themeStyle} darkTheme={darkTheme} />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>

        <Route path="/search" component={Search} />
      </div>
    );
  }
}