import Header from "./components/Header"
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import About from './components/About'
import Addbook from "./components/AddBook"
import Books from "./components/Book/Books"
import BookDetail from "./components/Book/BookDetail"

import React from "react";
function App() {
  return <React.Fragment>
    <header>
      <Header></Header>
    </header>
    <main>
      <Routes>
        <Route path='/'element={<Home/>} exact></Route>
        <Route path='/aboutus' element={<About/>} exact></Route>
        <Route path='/add' element={<Addbook/>} exact></Route>
        <Route path='/books' element={<Books/>} exact></Route>
        <Route path="/books/:id" element={<BookDetail/>} exact></Route>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
