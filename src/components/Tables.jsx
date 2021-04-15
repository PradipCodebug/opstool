const Tables = ({ tableData }) => {
  return (
    <table
      style={{
        fontFamily: "sans-serif",
        width: "100%",
        border: "1px solid black",
      }}
    >
      <thead
        style={{
          border: "1px solid black",
        }}
      >
        <th>System Name</th>
        <th>Account Number</th>
        <th>Scenarios</th>
      </thead>

      {tableData.map((eachDataSet) => (
        <tr
          style={{
            border: "1px solid black",
          }}
        >
          <td>{eachDataSet.systemsName}</td>
          <td>{eachDataSet.accountNumber}</td>
          <td>{eachDataSet.scenarios}</td>
        </tr>
      ))}
    </table>
  );
};

export default Tables;
