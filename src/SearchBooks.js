import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {
    state = {
        books: []
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

    updateBooks = function(books) {
        
        if (books){
            let fbooks = books.filter((book) => book.imageLinks)
            this.setState({books: fbooks})
        } else {
            this.setState({books})
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
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
                              <select>
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