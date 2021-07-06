import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setPage } from '../store/actions';
import { loadGallery } from '../store/actions';
import { createPages } from './pageCreator';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.page);

  const pagesCount = 15;
  const pages = [];
  console.log(currentPage);
  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(loadGallery(currentPage));
  }, [currentPage, dispatch]);

  return (
    <div className="pagination-buttons">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={+currentPage === page ? 'page-btn active' : 'page-btn'}
            // onClick={handleClick}
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
