(this.webpackJsonpmars=this.webpackJsonpmars||[]).push([[0],{12:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(6),s=r.n(c),o=(r(12),r(1)),l=r(2),i=r(4),d=r(3),u=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).setStyle=function(e){var t="sq btn m-0 rounded-0 btn-";return t+="1"===e.val?"success":"2"===e.val?"danger":"0"===e.val?"light":"3"===e.val?"secondary":"warning"},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("button",{className:this.setStyle(this.props.square),onClick:function(){return e.props.gOnClick(e.props.row,e.props.col)}})}}]),r}(a.Component),v=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("span",{className:"grid"},n.a.createElement("p",null,this.props.notFound),this.props.setGrid.map((function(t){return n.a.createElement("div",null,t.map((function(t){return n.a.createElement(u,{square:t,row:t.r,col:t.c,gOnClick:e.props.aOnClick})})))})))}}]),r}(a.Component),p=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("span",{className:"menu"},n.a.createElement("button",{className:"btn-default m-2 btn-block opt",onClick:this.props.startSearch},"START SEARCH"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-check"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"set-squares",value:"1",checked:"1"===this.props.activeOption,onChange:function(t){return e.props.optionChange(t.target.value)},className:"set-squares"}),"Set Start")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"set-squares",value:"2",checked:"2"===this.props.activeOption,onChange:function(t){return e.props.optionChange(t.target.value)},className:"set-squares"}),"Set Destination")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"set-squares",value:"3",checked:"3"===this.props.activeOption,onChange:function(t){return e.props.optionChange(t.target.value)},className:"set-squares"}),"Set Obstacles"))),n.a.createElement("label",null,n.a.createElement("input",{name:"diag",type:"checkbox",checked:this.props.diag,onChange:function(t){return e.props.diagChange(t.target.checked)}}),"Allow Diagonal Paths"),n.a.createElement("button",{className:"btn-default m-2 btn-block opt",onClick:this.props.clrObs},"CLEAR OBSTACLES"),n.a.createElement("div",null,n.a.createElement("button",{className:"btn-default m-2 btn-block opt",onClick:this.props.rstBrd},"RESET BOARD")))}}]),r}(a.Component);for(var h=function(e,t,r,a){console.log("reached bfs");for(var n=Array(20).fill().map((function(e){return Array(20).fill("")})),c=Array(20).fill().map((function(e){return Array(20).fill("")})),s=!1,o=0;o<20;o++)for(var l=0;l<20;l++)n[o][l]={r:o,c:l,val:"4"===r[o][l].val?"0":r[o][l].val,d:0,visited:!1,prevR:0,prevC:0},c[o][l]={r:o,c:l,val:"4"===r[o][l].val?"0":r[o][l].val};for(var i=0;i<20;i++)for(var d=0;d<20;d++)"3"===n[i][d].val&&(n[i][d].visited=!0);var u,v=[],p=n[e][t];for(v.push(p),p.visited=!0;v.length;){if("2"===(u=v.shift()).val){s=!0;break}u.r-1>=0&&!1===n[u.r-1][u.c].visited&&(n[u.r-1][u.c].d=u.d+1,n[u.r-1][u.c].visited=!0,n[u.r-1][u.c].prevR=u.r,n[u.r-1][u.c].prevC=u.c,v.push(n[u.r-1][u.c])),u.r+1<20&&!1===n[u.r+1][u.c].visited&&(n[u.r+1][u.c].d=u.d+1,n[u.r+1][u.c].visited=!0,n[u.r+1][u.c].prevR=u.r,n[u.r+1][u.c].prevC=u.c,v.push(n[u.r+1][u.c])),u.c-1>=0&&!1===n[u.r][u.c-1].visited&&(n[u.r][u.c-1].d=u.d+1,n[u.r][u.c-1].visited=!0,n[u.r][u.c-1].prevR=u.r,n[u.r][u.c-1].prevC=u.c,v.push(n[u.r][u.c-1])),u.c+1<20&&!1===n[u.r][u.c+1].visited&&(n[u.r][u.c+1].d=u.d+1,n[u.r][u.c+1].visited=!0,n[u.r][u.c+1].prevR=u.r,n[u.r][u.c+1].prevC=u.c,v.push(n[u.r][u.c+1])),!0===a&&(u.r-1>=0&&u.c-1>=0&&!1===n[u.r-1][u.c-1].visited&&(n[u.r-1][u.c-1].d=u.d+1,n[u.r-1][u.c-1].visited=!0,n[u.r-1][u.c-1].prevR=u.r,n[u.r-1][u.c-1].prevC=u.c,v.push(n[u.r-1][u.c-1])),u.r-1>=0&&u.c+1<20&&!1===n[u.r-1][u.c+1].visited&&(n[u.r-1][u.c+1].d=u.d+1,n[u.r-1][u.c+1].visited=!0,n[u.r-1][u.c+1].prevR=u.r,n[u.r-1][u.c+1].prevC=u.c,v.push(n[u.r-1][u.c+1])),u.r+1<20&&u.c-1>=0&&!1===n[u.r+1][u.c-1].visited&&(n[u.r+1][u.c-1].d=u.d+1,n[u.r+1][u.c-1].visited=!0,n[u.r+1][u.c-1].prevR=u.r,n[u.r+1][u.c-1].prevC=u.c,v.push(n[u.r+1][u.c-1])),u.r+1<20&&u.c+1<20&&!1===n[u.r+1][u.c+1].visited&&(n[u.r+1][u.c+1].d=u.d+1,n[u.r+1][u.c+1].visited=!0,n[u.r+1][u.c+1].prevR=u.r,n[u.r+1][u.c+1].prevC=u.c,v.push(n[u.r+1][u.c+1])))}if(s){for(u=n[u.prevR][u.prevC];"1"!==u.val;)c[u.r][u.c].val="4",u=n[u.prevR][u.prevC];return c}return s},f=Array(20).fill().map((function(e){return Array(20).fill("")})),m=0;m<20;m++)for(var C=0;C<20;C++)f[m][C]={r:m,c:C,val:"0"};f[9][3].val="1",f[9][16].val="2";var g=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={diagSelected:!1,selectedOption:"3",startRow:9,startCol:3,endRow:9,endCol:16,currentGrid:f,notFoundMsg:""},e.handleOptionChange=function(t){e.setState({selectedOption:t})},e.handleDiagChange=function(t){e.setState({diagSelected:t})},e.handleClearObs=function(){for(var t=Array(20).fill().map((function(e){return Array(20).fill("")})),r=0;r<20;r++)for(var a=0;a<20;a++)t[r][a]={r:r,c:a,val:"0"};t[e.state.startRow][e.state.startCol].val="1",t[e.state.endRow][e.state.endCol].val="2",e.setState({currentGrid:t,notFoundMsg:""})},e.handleResetBoard=function(){for(var t=Array(20).fill().map((function(e){return Array(20).fill("")})),r=0;r<20;r++)for(var a=0;a<20;a++)t[r][a]={r:r,c:a,val:"0"};e.setState({startRow:9,startCol:3,endRow:9,endCol:16}),t[9][3].val="1",t[9][16].val="2",e.setState({currentGrid:t,notFoundMsg:""})},e.handleClick=function(t,r){e.setState({notFoundMsg:""});var a=e.state.currentGrid,n=e.state.selectedOption;if("1"===n||"2"===n){if(e.state.startRow===t&&e.state.startCol===r||e.state.endRow===t&&e.state.endCol===r)return;"1"===n?(a[e.state.startRow][e.state.startCol].val="0",a[t][r].val="1",e.setState({startRow:t,startCol:r})):(a[e.state.endRow][e.state.endCol].val="0",a[t][r].val="2",e.setState({endRow:t,endCol:r}))}else if("3"===n){if(e.state.startRow===t&&e.state.startCol===r||e.state.endRow===t&&e.state.endCol===r)return;a[t][r].val="3"!==a[t][r].val?"3":"0"}e.setState({currentGrid:a})},e.handleSearch=function(){console.log("reached handle");var t=h(e.state.startRow,e.state.startCol,e.state.currentGrid,e.state.diagSelected);console.log(t),t?e.setState({currentGrid:t,notFoundMsg:""}):e.setState({notFoundMsg:"NO PATH AVAILABLE"})},e}return Object(l.a)(r,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p,{optionChange:this.handleOptionChange,activeOption:this.state.selectedOption,clrObs:this.handleClearObs,rstBrd:this.handleResetBoard,startSearch:this.handleSearch,diag:this.state.diagSelected,diagChange:this.handleDiagChange}),n.a.createElement(v,{setGrid:this.state.currentGrid,aOnClick:this.handleClick,notFound:this.state.notFoundMsg}))}}]),r}(a.Component);r(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,r){e.exports=r(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.773cac84.chunk.js.map