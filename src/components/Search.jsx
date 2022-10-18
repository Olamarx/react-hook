/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (term) {
        (async () => {
          const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: term,
            },
          });
          setResults(data.query.search);
        })();
      }
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => (
    <div className="item" key={result.pageid}>
      <div className="right floated content">
        <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
      </div>
      <div className="content">
        <div className="header">
          {result.title}
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        {/* {result.snippet} */}
      </div>
    </div>
  ));

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Enter Search Term</label>
          <input
            id="search"
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
