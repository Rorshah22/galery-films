import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../store/actions';
import { createPages } from './pageCreator';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.page);

  const pagesCount = 15;
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  // заглушка пагинации
  const startArr = ['start', 'prev'];
  const endArr = ['end', 'next'];
  const newPages = startArr.concat(pages, endArr);
  const classStyle = (currentPage, page) => {
    if (page === 'start') {
      return 'page-btn start-page';
    }
    if (page === 'prev') {
      return 'page-btn prev-page';
    }
    if (page === 'end') {
      return 'page-btn end-page';
    }
    if (page === 'next') {
      return 'page-btn next-page';
    }

    return currentPage === page ? 'page-btn active' : 'page-btn';
  };

  return (
    <div className="pagination-buttons">
      {newPages.map((page, index) => {
        return (
          <button
            key={index}
            className={classStyle(currentPage, page)}
            onClick={() => dispatch(setPage(page))}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
