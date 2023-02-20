import { createContext, useContext } from "react";

const SelectedBooksContext = createContext(null);

export const SelectedBooksProvider = SelectedBooksContext.Provider;

export const useSelectedBooks = () => useContext(SelectedBooksContext);