import React from "react";
import './SearchBox.css';

const SearchBox = () => {
    return(
          <div className='center'>
          	<div className='form center pa4 br3 shadow-5'>
          		<input className='f4 pa2 w-90 center' type='text'/>
          		<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Search</button>
          	</div>
          </div>
    );
}

export default SearchBox;