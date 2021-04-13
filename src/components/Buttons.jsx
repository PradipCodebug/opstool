//Stateless Functional Components - which is why this is a constant function instead of Class

const Buttons = ({ btnContent, btnId, onClick }) => {
  return (
    <div className="col-sm-2">
      <button
        type="button"
        className="btn btn-primary mb-2"
        id={btnId}
        onClick={onClick}
      >
        {btnContent}
      </button>
    </div>
  );
};

export default Buttons;
