import { useState } from 'react';
import './App.css';

var notesAvailable = ["2000", "500", "200", "100", "50", "20", "10", "5", "1"];
var billAmt, custAmt;
var noOfNotes = document.getElementsByClassName("notes");

function App() {

  const [billAmtEntered, setbilAmtEntered] = useState(false);
  const [buttonText, setbuttonText] = useState("Next");

  function handleBillEntry(e){
    billAmt = e.target.value;
  }
  function handleCustEntry(e){
    custAmt = e.target.value;
  }

  function checkAmt(){
    if(custAmt > 0){
      var difference = custAmt - billAmt;
      calculateNotes(difference);
    }else{

    }
  }

  function calculateNotes(diff){
    var amtLeft = diff;
    for(var i = 0; i < notesAvailable.length ; i++){
      var noteCount = Math.trunc(amtLeft / notesAvailable[i]);
      noOfNotes[i].innerHTML = noteCount;
      amtLeft = amtLeft % notesAvailable[i];
    }
  }

  return (
    <div className="App">
      <div className="title">
        <p className="main-title">Cash Register</p>
        <p className="sub-title">Enter the bill and customer amount
        <br/>Find the least number of notes to be returned!</p>
      </div>
      <div className="bill-entry">
        <label htmlFor="bill-amount">Bill Amount:</label>
        <input type="number" className="bill-amount" onChange={(e) => handleBillEntry(e)}></input>
      <div className="get-cash">
        <button className="next-btn">Next</button>
      </div>
      </div>
      <div className="customer-cash">
        <label htmlFor="cash-given">Cash Given:</label>
        <input type="number" className="cash-given" onChange={(e) => handleCustEntry(e)}></input>
      </div>
      <div className="get-notes">
        <button className="notes-btn" onClick={checkAmt}>Check</button>
      </div>
      <div className="notes-returned">
        <table className="notes-table">
          <tbody>
            <tr>
              <th>No. of Notes</th>
              <td className="notes"></td>
              <td className="notes"></td>
              <td className="notes"></td>
              <td className="notes"></td>
              <td className="notes"></td>
              <td className="notes"></td>
              <td className="notes"></td>
              <td className="notes"></td>
              <td className="notes"></td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
