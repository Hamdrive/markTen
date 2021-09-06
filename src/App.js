import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title">
        <p className="main-title">Cash Register</p>
        <p className="sub-title">Enter the bill and customer amount
        <br/>Find the least number of notes to be returned!</p>
      </div>
      <div className="bill-entry">
        <label for="bill-amount">Bill Amount:</label>
        <input type="number" className="bill-amount"></input>
      </div>
      <div className="customer-cash">
        <label for="cash-given">Cash Given:</label>
        <input type="number" className="cash-given"></input>
      </div>
      <div className="get-notes">
        <button className="notes-btn"></button>
      </div>
      <div className="notes-returned">
        <table className="notes-table">
          <tr>
            <th>No. of Notes</th>
            <td></td>
          </tr>
          <tr>
            <th>Denominations</th>
            <td>2000</td>
            <td>500</td>
            <td>200</td>
            <td>100</td>
            <td>50</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
