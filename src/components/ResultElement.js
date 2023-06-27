// ReplicableComponent.js
import React from 'react';
import "../assets/css/resultselement.css"
const ResultElement = ({ id, title, text, year }) => {
  return (
    <div className='results-element'>
        <div  className='element'>
        
        <a href={`/details?id=${id}`} className='title'><h2>{title}</h2></a>

        <div className='year'>
                  
                  <div>{year}</div>
                 
        </div>
        <div className='highlited' dangerouslySetInnerHTML={{ __html: text }} />
        </div>
            
    </div>
  );
};

export default ResultElement;
