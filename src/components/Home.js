import React, { useState, useEffect } from 'react';
import "../assets/css/home.css"
import { useNavigate } from 'react-router-dom';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
  

  const handleSearch = async () => {
    try {
        navigate(`/results?q=${searchQuery}`)
    } catch (error) {
      console.error('Error fetching search results:', error);
    } 
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
   
      try {

        const response = await fetch('https://dlr.onrender.com/api/v1/index');
        const data = await response.json();
     
       
       console.log(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } 
    };

    fetchData();
  }, [1]);

  return (
    <div>
        <div className='top-nav'>
            <span className='bg-light'>
                <a href='https://dlr.onrender.com/'>Judicial</a>
            </span>
            <span className='bg-dark'>
                Search
            </span>
        </div>

        <div id="container">
            <div className="search">
                <div className='mb'>
                <input
              type="text"
              placeholder="Search Here"
              name="search"
              className="searchbar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
                <button type="submit" className="search_button" onClick={handleSearch}>Go</button> 
            </div>

                <div className='keywords'>
                  
                    <span>tender</span>
                    <span>kill</span>
                    <span>criminal</span>
                    <span>wife killing</span>
                    <span>army</span>
                </div>
                
            </div>
           
        </div>
   </div>
  );
}

export default Home;
