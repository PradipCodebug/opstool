const Dropdowns = ({ labelName, optionList, onChange }) => {
  return (
    <>
      <label className="col-sm-3 col-form-label">{labelName}</label>
      <div className="form-group col-sm-6">
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={(e) => onChange(e)}
        >
          {optionList.map((systemName) => (
            <option id={systemName}>{systemName}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdowns;
