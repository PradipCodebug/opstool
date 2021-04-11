const InputField = ({ textContent, fieldId }) => {
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
          placeholder="AccountNumber"
        />
      </div>
    </>
  );
};

export default InputField;
