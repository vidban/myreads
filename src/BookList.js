import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    updateShelf = (bookId, e) => {
        console.log(bookId, e.target.value)
        // if (this.props.onUpdateShelf)
        //     this.props.onUpdateShelf(bookId, bookShlf)
    }

    render() {
        const { books } = this.props
        let self = this

        let currentlyReading = books.filter(book => book.shelf==='currentlyReading')
        let wantToRead = books.filter(book => book.shelf==='wantToRead')
        let read = books.filter(book => book.shelf==='read')


        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  {bookShelf(self,'Currently Reading', currentlyReading)}
                  {bookShelf(self, 'Want to Read', wantToRead)}
                  {bookShelf(self, 'Read', read)}
              </div>
            </div> 
            <div className="open-search">
              <Link
                to='/search'>Add a book</Link>
            </div>
          </div>
        )
    }
}

function bookShelf(self, shelf, booksInShelf){
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {booksInShelf.map((book) => (
              <li key={book.id}>
                  <div className="book">
                  <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail })` }}></div>
                      <div className="book-shelf-changer">
                      <select defaultValue={book.shelf} onChange={self.updateShelf.bind(this, book.id)}>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                      </select>
                      </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                  </div>
              </li>
          ))}
          </ol>
        </div>
      </div> 
    )
}

export default BookList