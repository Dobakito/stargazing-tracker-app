/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Label, Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../Actions/userActions';

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');
  const badAllUsers = useSelector(state => state.searchReducer.users);
  const currentUser = useSelector(state => state.userReducer.user);
  const users = _.reject(badAllUsers, currentUser);

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
    setResults(_.filter(users, isMatch));
  };

  const resultRenderer = ({ username }) => (
    <Label as={Link} to={`/user/${username}`} content={username} />
  );

  return (
    <Search
      onResultSelect={handleResultSelect}
      onSearchChange={handleSearchChange}
      noResultsMessage='No users found.'
      resultRenderer={resultRenderer}
      results={results}
      value={value}
    />
  );
};

export default SearchBar;
