import React from 'react';
import PropTypes from 'prop-types';
import Tags from './Tags';

const Project = (props) => {
  const {
    id,
    image,
    title,
    shortDescription,
    longDescription,
    tags,
    desktop,
    linkLive,
    linkSource,
    setModal,
    setModalInfo,
  } = props;

  const popUpModal = () => {
    setModalInfo(() => (
      {
        id,
        image,
        title,
        longDescription,
        tags,
        linkLive,
        linkSource,
      }
    ));
    setModal(true);
  };

  let cardClasses = 'card';
  let projectImage = <img src={image} alt={title} />;

  if (id === 'card-1') {
    cardClasses += ' featured';
    projectImage = (
      <div className="featured-container">
        <img src={image} alt={title} />
      </div>
    );
  } else {
    cardClasses += ' other';
    if (desktop) {
      cardClasses += ' other-desktop';
    }
  }

  let info = (
    <div className="info">
      <h3>{title}</h3>
      <p>{shortDescription}</p>
      <Tags tags={tags} />
    </div>
  );

  if (id === 'special' && desktop) {
    info = null;
  }

  let cardButton = null;

  if (!desktop || id === 'special' || id === 'card-1') {
    cardButton = (
      <a
        className="interaction"
        rel="noopener noreferrer"
        href={`#${id}`}
        aria-label="see project"
        onClick={popUpModal}
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
      {projectImage}
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
  longDescription: PropTypes.string.isRequired,
  linkSource: PropTypes.string.isRequired,
  linkLive: PropTypes.string.isRequired,
  setModal: PropTypes.func.isRequired,
  setModalInfo: PropTypes.func.isRequired,
};

export default Project;
