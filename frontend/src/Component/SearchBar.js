/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer } from 'react';
import { getAllUsers } from '../Actions/userActions';
import _ from 'lodash';
import { searchReducer } from '../Reducers/searchReducer';
import { Label, Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const [state, dispatch] = useReducer(searchReducer);
  const { results, users, value } = state;

  const handleSearchChange = (e, data) => {
    dispatch({ type: 'START_SEARCH', query: data.value });
    if (data.value.length === 0) {
      dispatch({ type: 'CLEAN_QUERY' });
      return;
    }
    const re = new RegExp(_.escapeRegExp(data.value), 'i');
    const isMatch = result => re.test(result.username);
    dispatch({
      type: 'FINISH_SEARCH',
      results: _.filter(users, isMatch),
    });
  };
  const resultRenderer = ({ username, id }) => (
    <Label as={Link} to={`/user/${id}`} content={username} />
  );

  return (
    <Search
      onResultSelect={() => dispatch({ type: 'CLEAN_QUERY' })}
      onSearchChange={handleSearchChange}
      resultRenderer={resultRenderer}
      results={results}
      value={value}
    />
  );
};

export default SearchBar;
