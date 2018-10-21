import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './components/BookShelf'
import Search from './components/Search'
import { getThemeStyle } from './utils/theme';
import * as BooksAPI from './api/BooksAPI'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      loading: true,
      darkTheme: true
    }
    this.sections = [{ name: 'currentlyReading', title: 'Currently Reading' }, { name: 'wantToRead', title: 'Want To Read' }, { name: 'read', title: 'Read' }];
    this.themeStyle = getThemeStyle(true);
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
          loading: false
        }))
      })
      .catch(err => console.log(err));
  }

  onThemeChange = () => {
    this.themeStyle = getThemeStyle(!this.state.darkTheme);
    this.setState({ darkTheme: !this.state.darkTheme });
  }

  handleChange = (book, shelf, flagAdded = false) => {
    console.log('handleChange ', book);
    BooksAPI.update(book, shelf)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err))
    if (flagAdded) {
      this.setState(prevState => ({
        books: [...prevState.books, book]
      }))
    }
    else {
      this.setState(prevState => ({
        books: [...prevState.books]
      }))
    }
  }

  render() {
    return (
      <div style={{ background: this.themeStyle.background }} className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
            handleChange={this.handleChange}
            sections={this.sections}
            loading={this.state.loading}
            onThemeChange={this.onThemeChange}
            darkTheme={this.state.darkTheme}
            themeStyle={this.themeStyle}
          />
        )} />
        <Route path='/search' render={() => (
          <Search
            sections={this.sections}
            booksOnTheShelf={this.state.books}
            handleChange={this.handleChange}
            themeStyle={this.themeStyle}
          />
        )} />
      </div>
    )
  }
}

export default App;