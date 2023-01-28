import { useState } from 'react';
import { CARDS_ON_PAGE } from '../../const';
import { Guitar } from '../../types/types';


const DEFAULT_NUMBER = 1;

export function usePagination(guitarsList: Guitar[]) {
  const [pageNumber, setPageNumber] = useState(DEFAULT_NUMBER);
  const endSlicing = pageNumber * CARDS_ON_PAGE;
  const beginSlicing = endSlicing - CARDS_ON_PAGE;
  const guitars = guitarsList?.slice(beginSlicing, endSlicing);

  return {
    guitars,
    setPageNumber,
    pageNumber,
  };
}
