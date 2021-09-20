/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useReducer } from 'react';
// import { getAllUsers } from '../Actions/userActions';
import { useState } from 'react';
import _ from 'lodash';
import { Label, Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as JsSearch from 'js-search';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');
  const users = useSelector(state => state.searchReducer.users);
  const search = new JsSearch.Search('username');
  search.addDocument(users);

  const handleResultSelect = (e, { result }) => {
    setValue([]);
  };

  const handleSearchChange = e => {
    let value = e.target.value;
    setValue(value);
    if (value.length < 1) {
      return setResults([]);
    }
    const re = new RegExp(_.escapeRegExp(value), 'i');
    const isMatch = result => re.test(result.username);
    setResults(_.filter(users, isMatch));
  };

  const resultRenderer = ({ id, username }) => (
    <Label as={Link} to={`/user/${id}`} content={username} />
  );

  return (
    <Search
      onResultSelect={handleResultSelect}
      onSearchChange={handleSearchChange}
      resultRenderer={resultRenderer}
      results={results}
      value={value}
    />
  );
};

export default SearchBar;
