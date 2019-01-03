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

fillOneCell = (e) => {
  $(e.target).toggleClass('selected');
  $('td').on('mouseenter',function(){
    $(this).toggleClass('selected');
  }).mouseup(function(){
    $('td').off('mouseenter');
  });


}

allDay = (e) => {
    $('td').addClass('selected');
}

checkForRangeEntry = (day) => {
this.state.initialState[day];
}


render() {
   //console.log(this.state.initialState['mo']);
    return (
      Object.keys(this.state.initialState).map((day, index) => {
        var arrayOfSelectedCells = this.state.initialState[day];
          arrayOfSelectedCells.map((range, index) => {
             bt = range.bt;
             et = range.et;
             countOfSelectedCellsInARow = Math.round((et - bt) / 60);

             console.log(countOfSelectedCellsInARow);
             console.log(bt);
             console.log(et);
            // console.log($("td"));
            // if (($("td").data("value") < et) && ($("td").data("value") >= bt)) {
               $('td').addClass("selected");
            // }


          });
        return (
    <tr id="tableRow" key={day}>
    <th scope="row" style={this.props.border}>
      {day.toUpperCase()}
    </th>
    <td style={Object.assign({}, this.props.back, this.props.border, this.props.noneTopBorder)} onMouseDown={this.allDay}>
    </td>
    <td style={this.props.border} data-value={0} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={60} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={120} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={180} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={240} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={300} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={360} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={420} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={480} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={540} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={600} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={660} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={720} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={780} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={840} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={900} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={960} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1020} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1080} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1140} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1200} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1260} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1320} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1380} onMouseDown={this.fillOneCell}>
    </td>
    </tr>
  );
})

  );

  }

}

export default DayOfWeek;
