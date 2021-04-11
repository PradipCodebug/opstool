const CheckBoxes = ({ boxName, boxId }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id={boxId}
        value={boxName}
      />
      <label className="form-check-label" for={boxId}>
        {boxName}
      </label>
    </div>
  );
};

export default CheckBoxes;
