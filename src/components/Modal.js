const Modal = (props) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onClick}>
        Cancle
      </button>
      <button className="btn">Confirm</button>
    </div>
  );
};

export default Modal;
