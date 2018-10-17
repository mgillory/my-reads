import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './components/BookShelf'
import Search from './components/Search'
import * as BooksAPI from './api/BooksAPI'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      loading: true,
      tois: 0
    }
    this.sections = [{ name: 'currentlyReading', title: 'Currently Reading' }, { name: 'wantToRead', title: 'Want To Read' }, { name: 'read', title: 'Read' }];
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
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
            handleChange={this.handleChange}
            sections={this.sections}
            loading={this.state.loading}
          />
        )} />
        <Route path='/search' render={() => (
          <Search
            sections={this.sections}
            booksOnTheShelf={this.state.books}
            handleChange={this.handleChange}
          />
        )} />
      </div>
    )
  }
}

export default App;