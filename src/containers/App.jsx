import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { LocalStorageService, LS_KEYS } from '../services/localStorage';
import { BooksProvider } from '../hooks/use-books';
import { SelectedBooksProvider } from '../hooks/use-selectedBooks';
import { CheckAutho } from './checkAutho';
import { Layout } from '../routes/Layout';
import { Signin } from '../routes/Signin';
import { BookList } from '../routes/BookList';
import { CartPage } from '../routes/CartPage';
import { PageNotFound } from '../routes/PageNotFound';
import { SpecificBook } from '../routes/SpecificBook';
import data from "../books.json";
import './App.css';

export const App = () => {

  const [books, setBooks] = useState(data.books);

  const [selectedBooks, setSelectedBooks] = useState(
    LocalStorageService.get(LS_KEYS.SELECTEDBOOKS) || []
  )

  return (
    <BooksProvider value={books}>
      <SelectedBooksProvider value={selectedBooks}>
        <div className="wrapper">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Signin />} />
              <Route path='books' element={
                <CheckAutho>
                  <BookList />
                </CheckAutho>
              } />
              <Route path='books/:id' element={
                <CheckAutho>
                  <SpecificBook />
                </CheckAutho>
              } />
              <Route path='cart' element={
                <CheckAutho>
                  <CartPage />
                </CheckAutho>
              } />
              <Route path='*' element={<PageNotFound />} />
            </Route>
          </Routes>
        </div>
      </SelectedBooksProvider>
    </BooksProvider>
  );
}
