import React from 'react';
import "./card-filter.styles.css";

export const CardFilter = ({ placeholder, handleOnChange}) => {
    return (<input
          type="search"
          className="search"
          placeholder={placeholder}
          onChange={handleOnChange}
        /> );
}