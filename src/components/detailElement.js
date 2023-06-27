// ReplicableComponent.js
import React from 'react';
import "../assets/css/resultselement.css"

const DetailElement = ({ text }) => {
  return (
    <div className='results-element'>
      

        <div  className='element'>
        
        <div className='section-text' dangerouslySetInnerHTML={{ __html: text }} />
        </div>
            
    </div>
  );
};

export default DetailElement;
