import { useState } from 'react';
import './App.css';

var notesAvailable = ["2000", "500", "200", "100", "50", "20", "10", "5", "1"];
var billAmt, custAmt;
var noOfNotes = document.getElementsByClassName("notes");
var placeMessage = document.getElementById("message")

function App() {

  const [showSecondInput, setshowSecondInput] = useState(false);
  const [buttonText, setbuttonText] = useState("Next");

  function handleBillEntry(e){
    billAmt = e.target.value;
    if(!billAmt){
      setshowSecondInput(false)
    } else {
      setshowSecondInput(true)
    }
  }
  function handleCustEntry(e){
    custAmt = e.target.value;
  }

  function checkAmt(){
    placeMessage.style.display = "none";
    if(billAmt > 0){
      if(custAmt >= billAmt){
        var difference = custAmt - billAmt;
        calculateNotes(difference);
      } else {
        showMessage("I'm afraid you cannot afford these items")
      }
    }else{
      showMessage("Enter a real bill amount")
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

  function CustomerCash(){
    if(billAmt){
      return (
        <div className="customer-cash">
          <label htmlFor="cash-given">Cash Given:</label>
          <input type="number" className="cash-given" onChange={(e) => handleCustEntry(e)}></input>
          <button className="notes-btn" onClick={checkAmt}>Check</button>
        </div>
      )
    }
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
        <input type="number" className="bill-amount" onChange={(e) => handleBillEntry(e)}></input>
      </div>
      { showSecondInput ? <CustomerCash /> : null }
      <div id="message">
        <p></p>
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
