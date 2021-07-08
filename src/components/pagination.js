import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../store/actions';
import { createPages } from './pageCreator';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.page);

  const pagesCount = 15;
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  const startArr = ['start', 'prev'];
  const endArr = ['next', 'end'];
  const newPages = startArr.concat(pages, endArr);

  const classStyle = (currentPage, page) => {
    if (page === 'start') return 'page-btn start-page';
    if (page === 'prev') return 'page-btn prev-page';
    if (page === 'end') return 'page-btn end-page';
    if (page === 'next') return 'page-btn next-page';
    return currentPage === page ? 'page-btn active' : 'page-btn';
  };

  const disableBtn = (currentPage, page) => {
    let disabled = false;
    if (currentPage === 1 && page === 'start') return (disabled = true);
    if (currentPage === 1 && page === 'prev') return (disabled = true);
    if (currentPage === 15 && page === 'next') return (disabled = true);
    // eslint-disable-next-line no-unused-vars
    if (currentPage === 15 && page === 'end') return (disabled = true);
  };

  return (
    <div className="pagination-buttons">
      {newPages.map((page, index) => {
        return (
          <button
            key={index}
            className={classStyle(currentPage, page)}
            onClick={() => {
              if (page === 'start') page = 1;
              if (page === 'end') page = 15;
              if (page === 'prev') page = currentPage - 1;
              if (page === 'next') page = currentPage + 1;
              return dispatch(setPage(page));
            }}
            disabled={disableBtn(currentPage, page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
