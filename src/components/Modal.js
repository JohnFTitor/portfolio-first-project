import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../assets/icons/close-icon.svg';
import Tags from './Tags';

const Modal = (props) => {
  const {
    modalInfo,
    modal,
    setModal,
  } = props;

  const {
    id,
    image,
    title,
    longDescription,
    tags,
    linkLive,
    linkSource,
  } = modalInfo;

  if (modal) {
    return (
      <div className="container modalParent">
        <div id={id} className="container content modal">
          <div className="container headline">
            <h3>{title}</h3>
            <button
              type="button"
              id="closeButtonPopup"
              onClick={() => setModal(false)}
            >
              <img src={CloseIcon} alt="Close Icon" />
            </button>
          </div>
          <Tags tags={tags} />
          <div className="card featured modal-grid">
            <div className="container projectImg">
              <img src={image} alt={title} />
            </div>
            <div className="modal-info">
              <p>{longDescription}</p>
              <div className="popUpButtons">
                <a
                  rel="noopener noreferrer"
                  href={linkLive}
                  aria-label="see live"
                  target="_blank"
                  className="interaction"
                >
                  See Live
                </a>
                <a
                  rel="noopener noreferrer"
                  href={linkSource}
                  aria-label="see source"
                  target="_blank"
                  className="interaction"
                >
                  See Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

Modal.propTypes = {
  modalInfo: PropTypes.objectOf(String).isRequired,
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default Modal;
