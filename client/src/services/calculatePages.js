export const calculatePages = (currentPage, pageCount) => {
  const pages = [];

  if (pageCount <= 10) {
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 6) {
      for (let i = 1; i <= 8; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(pageCount);
    } else if (currentPage > 6 && currentPage < pageCount - 4) {
      pages.push(1);
      pages.push("...");
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(pageCount);
    } else {
      pages.push(1);
      pages.push("...");
      for (let i = pageCount - 7; i <= pageCount; i++) {
        pages.push(i);
      }
    }
  }

  return pages;
};
