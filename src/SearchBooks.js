import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'



class SearchBooks extends Component {
    static propTypes = {
        onUpdateShelf: PropTypes.func.isRequired,
    }

    state = {
        books: [],
        shelf: 'none'
    }

    search(query) {
        let self = this
        if (query){
            BooksAPI.search(query).then((books) => {
                (books.length>0) ? self.updateBooks(books) : self.updateBooks([])
            })
        }else {
            self.updateBooks([])
        }
    }

    // TODO: Manage book state across pages more precisely by iteration over the obj returned by update method of BooksAPI

    updateBooks = function(books) {
        if (books){
            let fbooks = books.filter((book) => book.imageLinks)
            if (Object.keys(this.props.currentBookList).length>0){
                this.checkBookState(this.props.currentBookList.currentlyReading,fbooks,'currentlyReading')
                this.checkBookState(this.props.currentBookList.read,fbooks,'read')
                this.checkBookState(this.props.currentBookList.wantToRead,fbooks,'wantToRead')
            }
            this.setState({books: fbooks})
        } else {
            this.setState({books})
        }     
    }

    updateShelf = (book, e) => {
        this.setState({shelf: e.target.value })
        this.props.onUpdateShelf(book, e.target.value)
    }

    checkBookState = function(shelf,fbooks,shelfName){
        for (let bookId of shelf){
            for (let book of fbooks){
                if (bookId === book.id){
                    book.shelf = shelfName
                }
            }
        }
    }

   render(){
        const {books} = this.state
       
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link 
                to='/'
                className="close-search"
                >Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    onChange={(event) => this.search(event.target.value)}
                    />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {books.map((book) => (
                      <li key={book.id}>
                          <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail })`}}></div>
                            <div className="book-shelf-changer">
                              <select value={(book.shelf) ? book.shelf : this.state.shelf} onChange={this.updateShelf.bind(this, book)}>
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
}

// function search(query, self) {
//     if (query){
//         BooksAPI.search(query, 20).then((books) => {
//             self.updateBooks(books)
//         })
//     }else {
//         self.updateBooks([])
//     }
    
// }



export default SearchBooks