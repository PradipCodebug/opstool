const Dropdowns = ({ labelName, optionList }) => {
  return (
    <>
      <label className="col-sm-3 col-form-label">{labelName}</label>
      <div className="form-group col-sm-6">
        <select className="form-control" id="exampleFormControlSelect1">
          {optionList.map((systemName) => (
            <option id={systemName}>{systemName}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdowns;
