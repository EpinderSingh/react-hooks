import React, { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [displayModal, setDisplayModal] = useState(true);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };
  const confirmDeleteModal = () => {
    setDisplayModal(false);
  };

  return (
    displayModal && (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {modalIsOpen && (
          <Modal onCancle={closeModalHandler} ondelete={confirmDeleteModal} />
        )}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    )
  );
};

export default Todo;
