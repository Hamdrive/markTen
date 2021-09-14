import { useState, useEffect } from 'react';
import './App.css';

var notesAvailable = ["2000", "500", "200", "100", "50", "20", "10", "5", "1"];
var billAmt, custAmt, noOfNotes, placeMessage, notesTable;

function App() {

  const [showSecondInput, setshowSecondInput] = useState(false);

  useEffect(() => {
    noOfNotes = document.querySelectorAll(".notes");
    placeMessage = document.querySelector(".message");
    notesTable = document.querySelector(".notes-returned")
  }, [])

  function handleBillEntry(e){
    billAmt = Number(e.target.value);
    if(!billAmt || billAmt < 1){
      setshowSecondInput(false)
    } else {
      setshowSecondInput(true)
    }
  }
  function handleCustEntry(e){
    custAmt = Number(e.target.value);
  }

  function checkAmt(){
    var difference = custAmt - billAmt;

    if (difference === 0){
      showMessage("Customer has given exact change!")
      notesTable.style.display = "none"
    } else if(billAmt <= custAmt && difference >= 0){
      calculateNotes(difference);
      showMessage("Give the following denominations to the customer")
    } else {
      showMessage("I'm afraid you cannot afford these items")
      for(var i = 0; i < noOfNotes.length ; i++){
        noOfNotes[i].innerHTML = "-";
      }
    }
  }

  function calculateNotes(diff){
    notesTable.style.display = "block"
    var amtLeft = diff;
    for(var i = 0; i < notesAvailable.length ; i++){
      var noteCount = Math.trunc(amtLeft / notesAvailable[i]);
      noOfNotes[i].innerHTML = noteCount;
      amtLeft = amtLeft % notesAvailable[i];
    }
  }

  function CustomerCash(){
    if(billAmt){
      return (
        <div className="customer-cash">
          <label htmlFor="cash-given">Cash Given:</label>
          <input type="number" className="cash-given" min="0" onChange={(e) => handleCustEntry(e)}></input>
          <button className="notes-btn" onClick={checkAmt}>Get Change</button>
        </div>
      )
    }
    return ;
  }

  function showMessage(message){
    placeMessage.style.display = "block"
    placeMessage.querySelector("p").innerHTML = message;
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
        <input type="number" className="bill-amount" min="0" onChange={(e) => handleBillEntry(e)}></input>
      </div>
      { showSecondInput ? <CustomerCash /> : null }
      <div className="message">
        <p></p>
      </div>
      <div className="notes-returned">
        <table className="notes-table">
          <tbody>
            <tr>
              <th>No. of Notes</th>
              <td className="notes">-</td>
              <td className="notes">-</td>
              <td className="notes">-</td>
              <td className="notes">-</td>
              <td className="notes">-</td>
              <td className="notes">-</td>
              <td className="notes">-</td>
              <td className="notes">-</td>
              <td className="notes">-</td>
            </tr>
            <tr>
              <th>Denominations</th>
              <td>₹ 2000</td>
              <td>₹ 500</td>
              <td>₹ 200</td>
              <td>₹ 100</td>
              <td>₹ 50</td>
              <td>₹ 20</td>
              <td>₹ 10</td>
              <td>₹ 5</td>
              <td>₹ 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
