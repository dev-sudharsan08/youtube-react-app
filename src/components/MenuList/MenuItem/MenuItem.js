import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  // console.log(props)

  return (
    <li className="nav-item">
      <NavLink className="nav-link" aria-current="page" to={props.url}>
        {props.navigation}
      </NavLink>
    </li>
  );
}

MenuItem.propTypes = {
  navigation: PropTypes.string,
  url: PropTypes.string
};

export default MenuItem;
