import React from 'react';
import PropTypes from 'prop-types';
import Tags from './Tags';

const Project = (props) => {
  const {
    id,
    image,
    title,
    shortDescription,
    tags,
    desktop,
  } = props;

  let cardClasses = 'card';

  if (id === 'card-1') {
    cardClasses += ' featured';
  } else {
    cardClasses += ' other';
    if (desktop) {
      cardClasses += ' other-desktop';
    }
  }

  let info = null;

  if (id !== 'special') {
    info = (
      <div className="info">
        <h3>{title}</h3>
        <p>{shortDescription}</p>
        <Tags tags={tags} />
      </div>
    );
  }

  let cardButton = null;

  if (!desktop || id === 'special' || id === 'card-1') {
    cardButton = (
      <a
        className="interaction"
        rel="noopener noreferrer"
        href={`#${id}`}
        aria-label="see project"
      >
        See Project
      </a>
    );

    if (id === 'card-1') {
      info = (
        <div className="info">
          <h3>{title}</h3>
          <p>{shortDescription}</p>
          <Tags tags={tags} />
          {cardButton}
        </div>
      );
      cardButton = null;
    }
  }

  return (
    <div className={cardClasses}>
      <img src={image} alt={title} />
      {info}
      {cardButton}
    </div>
  );
};

Project.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(String).isRequired,
  desktop: PropTypes.bool.isRequired,
};

export default Project;
