import React, { useState, useEffect } from 'react';
import ResultElement from "./ResultElement"
import "../assets/css/results.css"
import { useLocation } from 'react-router-dom';
import loadinggif from '../assets/img/loading.gif';
import { useNavigate } from 'react-router-dom';


function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let searchQuery;
 
 
 
 
  useEffect(() => {
    const fetchData = async () => {
      try{
        searchQuery = queryParams.get('q');
        if(!searchQuery){
          navigate('/404'); // Navigate to the 404 page
          return null;
        }
      } catch(error){
       
          navigate('/404'); // Navigate to the 404 page
          return null; // Return null to prevent further rendering
        
      }
      try {

       
        setIsLoading(true); // Set loading status to true
        const response = await fetch('https://dlr.onrender.com/api/v1/search?q=' + searchQuery);
        const data = await response.json();
       setResults(data.rules);
        // Save the response in session storage as JSON
        sessionStorage.setItem('results', JSON.stringify(data.rules));
       //console.log(data.rules);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setIsLoading(false); // Set loading status back to false after the response is fetched
      }
    };

    fetchData();
  }, [1]);
 

 
  return  (
    <div className='results'>
      <a className='btn' href='/'>Go Back</a>
      {isLoading ? (
        <div className='loading'>
          <img src={loadinggif} alt="Loading GIF" />
        </div>
      ) : Object.entries(results).length > 0 ? (
        Object.entries(results).map(([id, result]) => (
          <ResultElement key={id} id={id} title={result.title} text={result.highlighted[0]} year={result.year} />
        ))
      ) : (
        <p className='empty-result'>Nothing found 😭</p>
      )}
    </div>
  );
}

export default Results;


 
