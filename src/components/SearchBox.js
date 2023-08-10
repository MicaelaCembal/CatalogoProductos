import React from 'react';

function SearchBox() {
  return (
    <div className="search-box position-relative overflow-hidden w-100">
      <div className="search-wrap">
        <div className="close-button position-absolute">
          <svg className="close" width="22" height="22">
            <use xlinkHref="#close"></use>
          </svg>
        </div>
        <form id="search-form" className="text-center pt-3" action="" method="">
          <input type="text" className="search-input fs-5 p-4 bg-transparent" placeholder="Search..." />
          <svg className="search" width="22" height="22">
            <use xlinkHref="#search"></use>
          </svg>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;