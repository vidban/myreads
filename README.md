# **MyReads Project**

A bookshelf app that allows one to select and categorize books that one has read, is currently reading, or wants to read.

This project emphasizes using React to add interactivity to a provided template by refactoring the static code. The API server and the client library used to persist information as one interacts with the application, is provided by Udacity.



## *To get started:*

* install all project dependencies with `npm install`
* start the development server with `npm start`



## *Folder Structure*

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms - to use with the app.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon
│   └── index.html
└── src
    ├── App.css # Styles for the app. 
    ├── App.js # The root of the  app. 
    ├── App.test.js # For testing.- provided with create-react-app 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. 
    ├── icons # Helpful images for the app. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # DOM rendering only.
```



## *App Functionality*

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading  
* Want to Read  
* Read  

Each book has a control that lets one select the shelf for that book. When one selects a different shelf, the book moves there.
The default value for the control is the book's current shelf.

The main page also has a link to /search, a search page that allows one to find books to add to ones' library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets one add the book to ones' library.

When a book is on a bookshelf, it has the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

On navigating back to the main page from the search page, all of the selections one has made on the search page are instantly visible on the respective shelves.
you



#**Important**

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend



### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

