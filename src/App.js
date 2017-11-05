import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'



class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: []
  }

  componentDidMount() {
    this.getAllBooks()

  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  onHandleShelfUpdate(book, bookShlf) {
    BooksAPI.update(book, bookShlf).then(()=> {
      this.getAllBooks()
    })
  }

  render() {
    return (
      <Router>
      <div className="app">
        <Route exact path='/' render={() => 
          <BookList
            books={this.state.books} 
            onUpdateShelf={(book, bookShlf) => {
              this.onHandleShelfUpdate(book, bookShlf)
            }}/>
        } />  
        <Route path='/search' render={() => (
          <SearchBooks 
            books={this.state.searchBooks}
          />
        )} />
      </div>
      </Router>
    )
  }
}

export default BooksApp
