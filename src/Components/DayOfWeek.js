import React, { Component } from 'react';

//import $ from 'jquery';

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

handleDayHourMouseClick(day, hour, e){
  //change state object to add new bt/be or extend existent bt/be
  //or ignore if needed
  console.log(day, hour);
}
handleDayHourMouseMove(day, hour, e){

}

render() {
    let days = Object.keys(this.state.initialState).map(
      (day, index) => <DayRow dayName = {day}
                              border = {this.props.border}
                              borderAll={this.props.borderAll}
                              dayState = {this.state.initialState[day]}
                              onClick = {this.handleDayHourMouseClick}
                              onMove = {this.handleDayHourMouseMove}/>
    );
    return (<React.Fragment> {days} </React.Fragment>);
  }
}

class DayRow extends Component {
  constructor(props) {
    super(props);
  }

  ifGrey(d, h) {
      return !d.every( el => h*60 < el.bt || h*60 > el.et );
  }

  render () {
    let hours = [...Array(24)].map((el, index) =>
        <Hour border={this.props.border}
          cellGrey = {this.ifGrey(this.props.dayState, index)}
          borderAll={this.props.borderAll}
          hourProp = {{OnClickHandler: this.props.onClick,
                      OnMoveHandler: this.props.onMove,
                      day: this.props.dayName,
                      hour: index}}
        />)
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
    return (<th scope="row" style={this.props.border}>
      {this.props.dayName.toUpperCase()}
    </th>);
  }
}

class AllDay extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    //TODO: Add onMouseDown which should use callback from DayOfWeek and
    //parameter dayName callback should change day state to all day selected
    return ( <td style={this.props.borderAll}></td>);
  }
}

class Hour extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    {/*TODO:
      Use rule: mouse move should be in the same row. When mouse go out from
      selection row, just stop selection, clear selected items. The same rule if
      selection start to overlap some existent selection in the row.
      When selection is started, save status that selection is started,
      save first cell index, update its state in the object.
      While selection continue, update next cells. If selection is canceled,
      clear selection from first started to last valid cell*/}

    return ( <td  style={this.props.cellGrey ? this.props.borderAll : this.props.border }
                  onMouseDown={
                    (e) => this.props.hourProp.OnClickHandler(
                        this.props.hourProp.day,
                        this.props.hourProp.hour, e)} >
             </td>
            );
  }
}

export default DayOfWeek;
