import React, { useCallback, useContext, useMemo, useState } from 'react';

import { BrowserContext } from '../../contexts/browser';
import './styles.css';

type Props = {
  perPage: number;
  total: number;
  onPageChanged: (currentPage: number) => void;
};
const Pagination: React.FC<Props> = ({ perPage, total, onPageChanged }) => {
  const { isMobile } = useContext(BrowserContext);
  const [page, setPage] = useState<number>(1);
  const totalPages = useMemo(() => Math.ceil(total / perPage), [total, perPage]);
  const showPages = useMemo(() => {
    const oneSideQty = isMobile ? 1 : 2;
    const pages: number[] = [];
    for (let i = page - oneSideQty; i <= page + oneSideQty; i += 1) {
      if (i > 0 && i <= totalPages) {
        pages.push(i);
      }
    }
    return pages;
  }, [isMobile, page]);
  const onPageClicked = useCallback(
    pageNumber => () => {
      setPage(pageNumber);
      onPageChanged(pageNumber);
    },
    [onPageChanged, setPage],
  );

  return (
    <div className="pagination">
      <nav>
        {((isMobile && page > 2) || (!isMobile && page > 3)) && (
          <span className="prev page" onClick={onPageClicked(showPages[0] - 1)} />
        )}
        {showPages.map(pageNumber => {
          return (
            <span
              key={pageNumber}
              className={`page ${pageNumber === page ? 'current' : ''}`}
              onClick={onPageClicked(pageNumber)}
            >
              {pageNumber}
            </span>
          );
        })}
        {((isMobile && page < totalPages - 1) || (!isMobile && page < totalPages - 2)) && (
          <span className="next page" onClick={onPageClicked(showPages[showPages.length - 1] + 1)} />
        )}
      </nav>
      <p className="results-count">Showing 1–12 of 20 results</p>
    </div>
  );
};

export default Pagination;
