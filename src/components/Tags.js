import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const Tags = (props) => {
  const { tags } = props;
  const liItems = tags.map((tag) => (
    <li
      key={uuid()}
      className="textPlaceholder tag"
    >
      <a
        rel="noopener noreferrer"
        aria-label={tag}
        href="#projects"
      >
        {tag}
      </a>
    </li>
  ));
  return (
    <ul className="container tags">
      {liItems}
    </ul>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(String).isRequired,
};

export default Tags;
