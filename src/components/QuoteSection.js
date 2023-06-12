import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function QuoteSection() {
  return (
    <div className='section quote'>
        <p className='quote-text'> <FontAwesomeIcon icon={faQuoteLeft}/> Nigerian dishes are a true embodiment of the saying 'food is love.' The care and attention put into preparing each meal is evident in every mouthwatering bite. The beauty of Nigerian dishes lies in their diversity and complexity, from the fiery jollof rice to the comforting egusi soup. Each bite is a journey through a culinary wonderland.</p>
        <p className='quote-author'> ~ Mallam Sadiqu</p>
    </div>
  )
}

export default QuoteSection