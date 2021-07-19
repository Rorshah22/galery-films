export const createPages = (pages, pagesCount, currentPage) => {
  if (pagesCount > 5) {
    if (currentPage > 4) {
      if (currentPage < 14) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
          if (i === pagesCount) break;
        }
      } else {
        for (let i = currentPage - 3; i <= currentPage + 2; i++) {
          pages.push(i);
          if (i === pagesCount) break;
        }
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
  }
};
