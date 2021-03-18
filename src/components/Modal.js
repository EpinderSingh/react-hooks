const Modal = (props) => {
  console.log(props);
  const cancleHandler = () => {
    props.onCancle();
  };

  const confirmHandler = () => {
    props.ondelete();
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancleHandler}>
        Cancle
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
