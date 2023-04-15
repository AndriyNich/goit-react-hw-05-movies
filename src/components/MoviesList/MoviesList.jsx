import { Link } from 'react-router-dom';
import { List } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ data }) => {
  return (
    { data } && (
      <List>
        {data.map(elem => (
          <li key={elem.id}>
            <Link to={`movies/${elem.id}`}>{elem.title}</Link>
          </li>
        ))}
      </List>
    )
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
