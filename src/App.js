import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'



class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <Router>
      <div className="app">
        <Route exact path='/' render={() => 
          <BookList />
        } />  
        <Route path='/search' render={() => (
          <SearchBooks 
            books={this.state.books}
          />
        )} />
      </div>
      </Router>
    )
  }
}

export default BooksApp
