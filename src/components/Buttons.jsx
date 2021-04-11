const Buttons = ({ btnContent, btnId }) => {
  return (
    <div className="col-sm-2">
      <button type="button" className="btn btn-primary mb-2" id={btnId}>
        {btnContent}
      </button>
    </div>
  );
};

export default Buttons;
