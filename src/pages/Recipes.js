import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Recipes() {
    const searches = [
        'Jollof Rice',
        'Egusi Soup',
        'Pounded Yam',
        'Suya',
        'Akara',
        'Fried Rice',
        'Efo Riro',
        'Moi Moi',
        'Amala',
        'Pepper Soup'
      ];
      
  return (
    <div>
        <div className='previous-searches section'>
            <h2>Previous Searches</h2>
            <div className='previous-searches-container'>
                {searches.map((search, index)=>(
                    <div style={{animationDelay: index * .1+ "s"}} className='search-item' key={index}> 
                        {search}
                    </div>
                ))}
            </div>
            <div className='search-box'>
                <input type="text" placeholder='Search...'></input>
                <button className='btn'> <FontAwesomeIcon icon={faSearch} /> </button>

            </div>
        </div>
    </div>
  )
}

export default Recipes