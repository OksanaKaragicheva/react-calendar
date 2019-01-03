import React, { Component } from 'react';
import $ from 'jquery';


const Head = (props) => {
  return (
<tr id="tableRow">
<th scope="row" style={Object.assign({}, props.noneLeftBorder, props.noneTopBorder, props.border)} colSpan={props.colspan}>
ALL DAY &#8659;
</th>
<td className="position" style={Object.assign({}, props.back, props.border, props.noneTopBorder)}>
00:00
</td>
<td style={Object.assign({}, props.noneBorder, props.border, props.noneLeftBorder)} data-value={0}>
</td>
<td style={Object.assign({}, props.noneTopBorder, props.border)} data-value={60}>
</td>
<td className="position" style={Object.assign({}, props.noneTopBorder, props.border)} data-value={120}>
03:00
</td>
<td style={Object.assign({}, props.noneBorder, props.border, props.noneLeftBorder)} data-value={180}>
</td>
<td style={Object.assign({}, props.noneTopBorder, props.border)} data-value={240}>
</td>
<td className="position" style={Object.assign({}, props.noneTopBorder, props.border)} data-value={300}>
06:00
</td>
<td style={Object.assign({}, props.noneBorder, props.border, props.noneLeftBorder)} data-value={360}>
</td>
<td style={Object.assign({}, props.noneTopBorder, props.border)} data-value={420}>
</td>
<td className="position" style={Object.assign({}, props.noneTopBorder, props.border)} data-value={480}>
09:00
</td>
<td style={Object.assign({}, props.noneBorder, props.border, props.noneLeftBorder)} data-value={540}>
</td>
<td style={Object.assign({}, props.noneTopBorder, props.border)} data-value={600}>
</td>
<td className="position" style={Object.assign({}, props.noneTopBorder, props.border)} data-value={660}>
12:00
</td>
<td style={Object.assign({}, props.noneBorder, props.border, props.noneLeftBorder)} data-value={720}>
</td>
<td style={Object.assign({}, props.noneTopBorder, props.border)} data-value={780}>
</td>
<td className="position" style={Object.assign({}, props.noneTopBorder, props.border)} data-value={840}>
15:00
</td>
<td style={Object.assign({}, props.noneBorder, props.border, props.noneLeftBorder)} data-value={900}>
</td>
<td style={Object.assign({}, props.noneTopBorder, props.border)} data-value={960}>
</td>
<td className="position" style={Object.assign({}, props.noneTopBorder, props.border)} data-value={1020}>
18:00
</td>
<td style={Object.assign({}, props.noneBorder, props.border, props.noneLeftBorder)} data-value={1080}>
</td>
<td style={Object.assign({}, props.noneTopBorder, props.border)} data-value={1140}>
</td>
<td className="position" style={Object.assign({}, props.noneTopBorder, props.border)} data-value={1200}>
21:00
</td>
<td style={Object.assign({}, props.noneBorder, props.border, props.noneLeftBorder)} data-value={1260}>
</td>
<td style={Object.assign({}, props.noneTopBorder, props.border)} data-value={1320}>
</td>

</tr>
);
};


export default Head;
