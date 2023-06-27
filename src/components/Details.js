// ReplicableComponent.js
import React from 'react';
//import "../assets/css/resultselement.css"
import DetailElement from "./detailElement"
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const ResultElement = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let searchQuery ;
    

    const goBack = () => {
      navigate(-1); // Go back to the immediate previous URL
    };

    const data = JSON.parse(sessionStorage.getItem('results'));
    let queries, title ;
    
    try{
        searchQuery = queryParams.get('id');
        if(!searchQuery){
            navigate('/404'); // Navigate to the 404 page
            return null;
          }
        queries = data[searchQuery];
        title = queries.title;
        queries = queries.section_text;
      } catch(error){
       
          navigate('/404'); // Navigate to the 404 page
          return null; // Return null to prevent further rendering
      
      }
    
    
    
  return (
    <div className='details-element'>
        <div className='results section_url'>
            <a className='btn' onClick={goBack}>Go Back</a>
        
          
        </div>
        <div className='results-element'>
        <h1 className='title-details'>{title}</h1>
        </div>
    {
       Object.values( queries).map((query, id)=>(
            <DetailElement key={id} text={query} />
        ))
    }
       
    
            
    </div>
  );
};

export default ResultElement;
