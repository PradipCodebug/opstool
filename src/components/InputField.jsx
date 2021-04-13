const InputField = ({ textContent, fieldId, value, onChange }) => {
  return (
    <>
      <label for="inputAccountNumber" className="col-sm-3 col-form-label">
        Account Number
      </label>
      <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          id="inputAccountNumber"
          value={value}
          placeholder="AccountNumber"
          onChange={(e) => onChange(e)}
        />
      </div>
    </>
  );
};

export default InputField;
