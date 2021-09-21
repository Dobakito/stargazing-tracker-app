/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Label, Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as JsSearch from 'js-search';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../Actions/userActions';

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');
  const users = useSelector(state => state.searchReducer.users);
  const search = new JsSearch.Search('username');
  search.addDocument(users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const handleResultSelect = e => {
    setValue(e.target.value);
  };

  const handleSearchChange = e => {
    let value = e.target.value;
    setValue(value);
    if (value.length < 1) {
      return setResults([]);
    }
    const re = new RegExp(_.escapeRegExp(value), 'i');
    const isMatch = result => re.test(result.username);
    console.log(isMatch);
    setResults(_.filter(users, isMatch));
  };

  const resultRenderer = ({ id, username }) => (
    <Label fluid as={Link} to={`/user/${id}`} content={username} />
  );

  return (
    <Search
      onResultSelect={handleResultSelect}
      onSearchChange={handleSearchChange}
      noResultsMessage='No users found.'
      defaultValue='Search for Users.'
      resultRenderer={resultRenderer}
      results={results}
      value={value}
    />
  );
};

export default SearchBar;
