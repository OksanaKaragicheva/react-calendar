import React, { Component } from 'react';
import $ from 'jquery';


let bt = 0;
let et = 0;
let countOfSelectedCellsInARow = 0;

class DayOfWeek extends Component {
  constructor(props) {
   super(props);
   this.state = {
     initialState: {
  "mo": [
       {
         "bt": 240,
         "et": 779
       }
  ],
  "tu": [
  ],
  "we": [
  ],
  "th": [
    {
         "bt": 240,
         "et": 779
    },
    {
         "bt": 1140,
         "et": 1319
    }
  ],
  "fr": [
    {
         "bt": 660,
         "et": 1019
    }
  ],
  "sa": [
       {
         "bt": 0,
         "et": 1439
       }
     ],
  "su": []
}

};
}

render() {
    let days = Object.keys(this.state.initialState).map(
      (day, index) => <DayRow dayName = {day} border = {this.props.border} borderAll={this.props.borderAll}/>
    );
    return (
          <div>
           {days}
          </div>
    );
  }
}

class DayRow extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    {/*TODO: hour color should be computed according to day and hour/index and
       pass to hour as prop*/}
    let hours = [...Array(24)].map((el, index) => <Hour border={this.props.border}/>)
    return (
        <tr key={this.props.dayName}>
        <DayCell dayName = {this.props.dayName} border = {this.props.border} />
        <AllDay borderAll={this.props.borderAll} />
        {hours}
        </tr>
    );
  }
}


class DayCell extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (<th scope="row" style={this.props.border} onMouseDown={this.allDay}>
      {this.props.dayName.toUpperCase()}
    </th>);
  }
}

class AllDay extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return ( <td style={this.props.borderAll}></td>);
  }
}

class Hour extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    {/*TODO: cell color shoud be set here from prop
      Cell click should be handled to change state of the cell if needed
      Mouse move should be used to change selection of current cell if needed
      Use rule: mouse move should be in the same row. When mouse go out from
      selection row, just stop selection, clear selected items. The same rule if
      selection start to overlap some existent selection in the row.
      When selection is started, save status that selection is started,
      save first cell index, update its state in the object.
      While selection continue, update next cells. If selection is canceled,
      clear selection from first started to last valid cell*/}

    return ( <td style={this.props.border} data-value={0}> </td>);
  }
}

export default DayOfWeek;
