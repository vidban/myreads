import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    books: [],
    updatedBookList: []
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
    BooksAPI.update(book, bookShlf).then((obj)=> {
      this.setState({updatedBookList: obj })
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
            currentBookList={this.state.updatedBookList}
            onUpdateShelf={(book, bookShlf) => {
              this.onHandleShelfUpdate(book, bookShlf)
            }} />
        )} />
      </div>
      </Router>
    )
  }
}

export default BooksApp
