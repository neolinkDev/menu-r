// import React from 'react';

import PropTypes from 'prop-types';

// componente
export const Menu = ({ items }) => {

  return (
    <div>
      <div className="section-center">
        {
          items.map( menuItem => {
            // desestructuramos
            const { id, title, price, img, desc } = menuItem;

            return (
              <article 
                key={ id }
                className='menu-item'
              >
                <img 
                  src={ img }
                  lt={ title } 
                  className="photo"
                />
                <div className="item-info">
                  <header>
                    <h4>{ title }</h4>
                    <h4 className="price">${ price }</h4>
                  </header>
                  <p className="item-text">{ desc }</p>
                </div>
              </article>
            );
          })
        }
      </div>
    </div>
  );
}

Menu.propTypes = {
  items: PropTypes.array,
}