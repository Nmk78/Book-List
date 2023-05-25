import { BookContext } from "../Context/Book_context";
import { useContext } from "react";

export const useBooksContext = () => {
      const context = useContext(BookContext);

      if (!context) {
            throw Error("useBooksContext must be used inside a BookContextProvider");
      }

      return context

}