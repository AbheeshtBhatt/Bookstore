import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import DeleteBook from './pages/deleteBook'
import CreateBooks from './pages/createBooks'
import EditBook from './pages/editBook'
import ShowBook from './pages/showBook'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
    </Routes>
  )
}

export default App
