import React, { useState, useEffect, useRef } from 'react';
import { IoSearch, IoClose } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickOutside } from 'react-click-outside-hook';
// import MoonLoader from 'react-spinners/MoonLoader';
import { urlFor, client } from '../lib/client';
import  SearchDetail  from './SearchDetail';

const SearchBar = ({ searchBarExhaust }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const isEmpty = !suggestions || suggestions.length === 0;
  // console.log("search in searchbar ", searchBarExhaust )
  
  const changeHandler = (searchQuery) => {
    // e.preventDefault();
    setLoading(true);
    let matches = []
    if (searchQuery.length > 0) {
      matches = searchBarExhaust.filter(exhaust => {
        const regex = new RegExp(`${searchQuery}`, "gi");
          return exhaust.name.match(regex)
      })
    }
    console.log("matches", matches)
    setSuggestions(matches)
    setSearchQuery(searchQuery);
    if (matches.length >= 1)  {
      setLoading(false);
    }   
  }

  console.log("sugesstion: ", suggestions)
  
  const expandContainer = () => {
    setExpanded(true);
  }

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    setSuggestions([]);
    if(inputRef.current)
      inputRef.current.value = "";
  }

  useEffect(() => {
    if (isClickedOutside) 
      collapseContainer();
  }, [isClickedOutside]);


  const containerVariants = {
    expanded: {
      height: "30em",
      'margin-top': "27rem"
    },
    collapsed: {
      height: "2.9em",
    }
  }

  const containerTransition = { type: 'spring', damping: 22, stiffness: 150}

  return (
    <motion.div className="searchBar-container"
      animate={ isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      ref={parentRef}
      transition={containerTransition}
      >
        <div className="searchInput-container">
          <span className="searchIcon"> <IoSearch /></span>
        
        <input 
          className="searchInput" 
          placeholder="Search for Exhaustion " 
          onFocus={expandContainer}
          ref={inputRef}
          value={searchQuery}
          onChange={e => changeHandler(e.target.value)}
          />
        <AnimatePresence>
          {isExpanded && (
            <motion.span 
            key="close-icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit= {{ opacity: 0 }}
            className="closeIcon" 
            onClick={collapseContainer}
            transition={{ duration: 0.2 }}
            > 
            <IoClose />
            </motion.span>
          )} 
        </AnimatePresence>
        </div> 
          {isExpanded && <span className="LineSeperator"></span> }
        {isExpanded && 
            <div className="search-Content">
            {isLoading && 
              <div className="loadingWrapper">
                {/* <MoonLoader loading color="#000" size={20} /> */}
              </div> }
            {!isLoading && !isEmpty && <>
              {suggestions.map((suggestion) => (
                <SearchDetail 
                  key={suggestion.id}
                  image={suggestion.image[0]} 
                  name={suggestion.name} 
                  price={suggestion.price}
                  path={suggestion.path} />
              ))}
            </>}
              
          </div>    
        }
        
    </motion.div>
  )
}

export default SearchBar