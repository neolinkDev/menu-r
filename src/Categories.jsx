// import React from 'react';

import PropTypes from 'prop-types';

export const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {
        categories.map( ( category, i ) => {
          return(
            <button 
              type="button"
              className='filter-btn'
              key={ i }
              onClick={ () => filterItems( category ) }
            >
              { category }
            </button>
          )
        })
      }
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  filterItems: PropTypes.func.isRequired,
}