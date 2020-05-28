import React, { useCallback, useContext, useMemo } from 'react';

import { BrowserContext } from '../../contexts/browser';
import './styles.css';

type Props = {
  page: number;
  perPage: number;
  total: number;
  onPageChanged: (currentPage: number) => void;
};
const Pagination: React.FC<Props> = ({ page, perPage, total, onPageChanged }) => {
  const { isMobile } = useContext(BrowserContext);
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
  }, [isMobile, page, totalPages]);
  const onPageClicked = useCallback(pageNumber => (): void => onPageChanged(pageNumber), [onPageChanged]);
  const [fromItem, toItem] = useMemo(() => {
    const from = (page - 1) * perPage + 1;
    const to = page * perPage;
    return [from, total < to ? total : to];
  }, [page, perPage, total]);

  return (
    <div className="pagination">
      <nav>
        {((isMobile && page > 2) || (!isMobile && page > 3)) && (
          <span className="prev page" onClick={onPageClicked(showPages[0] - 1)} />
        )}
        {showPages.length > 1 &&
          showPages.map(pageNumber => {
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
      <p className="results-count">
        Showing {fromItem} - {toItem} of {total} results
      </p>
    </div>
  );
};

export default Pagination;
