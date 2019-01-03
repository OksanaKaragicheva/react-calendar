import React, { Component } from 'react';
import './App.css';
import DayOfWeek from "./Components/DayOfWeek";
import Head from "./Components/Head";

const back = {"background": "#8F9BA6"};
const border = {"borderBottom": "2px solid black", "verticalAlign": "middle"};
const noneBorder = {"borderTop": "1px solid white", "borderRight": "1px solid white"};
const noneTopBorder = {"borderTop": "1px solid white"};
const noneLeftBorder = {"borderLeft": "2px solid white"};


class App extends Component {
  clearFunc = () => {

  }


  render() {

    return (
     <div className="table">
      <table className="table-bordered">
       <tbody>
         <Head colspan={2} border={border} noneBorder={noneBorder} noneTopBorder={noneTopBorder} noneLeftBorder={noneLeftBorder} />
         <DayOfWeek head="MO" back={back} border={border} />

       </tbody>
      </table>
      <div id="buttons">
      <button type="button" className="btn" id="clearBtn" onClick={this.clearFunc}>Clear</button>
      <button type="button" className="btn" id="saveBtn">Save<br></br>Changes</button>
      </div>
     </div>
        );
  }
}


export default App;
