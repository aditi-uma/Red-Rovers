(this.webpackJsonpmars=this.webpackJsonpmars||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){e.exports=a.p+"static/media/logo192.0e4047e2.png"},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(6),s=a.n(c),l=(a(13),a(7)),o=a(1),i=a(2),d=a(4),u=a(3),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).setStyle=function(e){var t="sq border btn m-0 rounded-0 btn-";return t+="1"===e.val?"success":"2"===e.val?"danger":"0"===e.val?"light":"3"===e.val?"secondary":"warning"},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("button",{className:this.setStyle(this.props.square),onClick:function(){return e.props.gOnClick(e.props.row,e.props.col)}})}}]),a}(r.Component),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("span",null,n.a.createElement("span",null,this.props.notFound),n.a.createElement("span",{className:"grid"},this.props.setGrid.map((function(t){return n.a.createElement("div",null,t.map((function(t){return n.a.createElement(p,{square:t,row:t.r,col:t.c,gOnClick:e.props.aOnClick})})))}))))}}]),a}(r.Component),h=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("img",{className:"logo",src:a(14),alt:"image gayab"}),n.a.createElement("span",{className:"menusp"},n.a.createElement("button",{className:"btn-default m-2 btn-block opt",onClick:this.props.startSearch},"START SEARCH"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-check"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"set-squares",value:"1",checked:"1"===this.props.activeOption,onChange:function(t){return e.props.optionChange(t.target.value)},className:"set-squares"}),"Set Start")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"set-squares",value:"2",checked:"2"===this.props.activeOption,onChange:function(t){return e.props.optionChange(t.target.value)},className:"set-squares"}),"Set Destination")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"set-squares",value:"3",checked:"3"===this.props.activeOption,onChange:function(t){return e.props.optionChange(t.target.value)},className:"set-squares"}),"Set Obstacles"))),n.a.createElement("label",null,n.a.createElement("input",{name:"diag",type:"checkbox",checked:this.props.diag,onChange:function(t){return e.props.diagChange(t.target.checked)}}),"Allow Diagonal Paths"),n.a.createElement("button",{className:"btn-default m-2 btn-block opt",onClick:this.props.clrObs},"CLEAR OBSTACLES"),n.a.createElement("div",null,n.a.createElement("button",{className:"btn-default m-2 btn-block opt",onClick:this.props.rstBrd},"RESET BOARD"))))}}]),r}(r.Component),m=20,f=23;for(var g=function(e,t,a,r){console.log("reached bfs");for(var n=Array(m).fill().map((function(e){return Array(f).fill("")})),c=Array(m).fill().map((function(e){return Array(f).fill("")})),s=!1,l=0;l<m;l++)for(var o=0;o<f;o++)n[l][o]={r:l,c:o,val:"4"===a[l][o].val?"0":a[l][o].val,d:0,visited:"3"===a[l][o].val,prevR:0,prevC:0},c[l][o]={r:l,c:o,val:"4"===a[l][o].val?"0":a[l][o].val};var i,d=[],u=n[e][t];for(d.push(u),u.visited=!0;d.length;){if("2"===(i=d.shift()).val){s=!0;break}i.r-1>=0&&!1===n[i.r-1][i.c].visited&&(n[i.r-1][i.c].d=i.d+1,n[i.r-1][i.c].visited=!0,n[i.r-1][i.c].prevR=i.r,n[i.r-1][i.c].prevC=i.c,d.push(n[i.r-1][i.c])),i.r+1<m&&!1===n[i.r+1][i.c].visited&&(n[i.r+1][i.c].d=i.d+1,n[i.r+1][i.c].visited=!0,n[i.r+1][i.c].prevR=i.r,n[i.r+1][i.c].prevC=i.c,d.push(n[i.r+1][i.c])),i.c-1>=0&&!1===n[i.r][i.c-1].visited&&(n[i.r][i.c-1].d=i.d+1,n[i.r][i.c-1].visited=!0,n[i.r][i.c-1].prevR=i.r,n[i.r][i.c-1].prevC=i.c,d.push(n[i.r][i.c-1])),i.c+1<f&&!1===n[i.r][i.c+1].visited&&(n[i.r][i.c+1].d=i.d+1,n[i.r][i.c+1].visited=!0,n[i.r][i.c+1].prevR=i.r,n[i.r][i.c+1].prevC=i.c,d.push(n[i.r][i.c+1])),!0===r&&(i.r-1>=0&&i.c-1>=0&&!1===n[i.r-1][i.c-1].visited&&(n[i.r-1][i.c-1].d=i.d+1,n[i.r-1][i.c-1].visited=!0,n[i.r-1][i.c-1].prevR=i.r,n[i.r-1][i.c-1].prevC=i.c,d.push(n[i.r-1][i.c-1])),i.r-1>=0&&i.c+1<f&&!1===n[i.r-1][i.c+1].visited&&(n[i.r-1][i.c+1].d=i.d+1,n[i.r-1][i.c+1].visited=!0,n[i.r-1][i.c+1].prevR=i.r,n[i.r-1][i.c+1].prevC=i.c,d.push(n[i.r-1][i.c+1])),i.r+1<m&&i.c-1>=0&&!1===n[i.r+1][i.c-1].visited&&(n[i.r+1][i.c-1].d=i.d+1,n[i.r+1][i.c-1].visited=!0,n[i.r+1][i.c-1].prevR=i.r,n[i.r+1][i.c-1].prevC=i.c,d.push(n[i.r+1][i.c-1])),i.r+1<m&&i.c+1<f&&!1===n[i.r+1][i.c+1].visited&&(n[i.r+1][i.c+1].d=i.d+1,n[i.r+1][i.c+1].visited=!0,n[i.r+1][i.c+1].prevR=i.r,n[i.r+1][i.c+1].prevC=i.c,d.push(n[i.r+1][i.c+1])))}var p=i.d;if(console.log(p),s){for(i=n[i.prevR][i.prevC];"1"!==i.val;)c[i.r][i.c].val="4",i=n[i.prevR][i.prevC];return[s,p,c]}return[s,p,c]},C=Array(20).fill().map((function(e){return Array(23).fill("")})),b=0;b<20;b++)for(var E=0;E<23;E++)C[b][E]={r:b,c:E,val:"0"};C[9][3].val="1",C[9][19].val="2";var O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={diagSelected:!1,selectedOption:"3",startRow:9,startCol:3,endRow:9,endCol:19,currentGrid:C,notFoundMsg:"",pathLength:0},e.handleOptionChange=function(t){e.setState({selectedOption:t})},e.handleDiagChange=function(t){e.setState({diagSelected:t})},e.handleClearObs=function(){for(var t=Array(20).fill().map((function(e){return Array(23).fill("")})),a=0;a<20;a++)for(var r=0;r<23;r++)t[a][r]={r:a,c:r,val:"0"};t[e.state.startRow][e.state.startCol].val="1",t[e.state.endRow][e.state.endCol].val="2",e.setState({currentGrid:t,notFoundMsg:"",pathLength:0})},e.handleResetBoard=function(){for(var t=Array(20).fill().map((function(e){return Array(23).fill("")})),a=0;a<20;a++)for(var r=0;r<23;r++)t[a][r]={r:a,c:r,val:"0"};e.setState({startRow:9,startCol:3,endRow:9,endCol:19}),t[9][3].val="1",t[9][19].val="2",e.setState({currentGrid:t,notFoundMsg:"",pathLength:0})},e.handleClick=function(t,a){e.setState({notFoundMsg:""});var r=e.state.currentGrid,n=e.state.selectedOption;if("1"===n||"2"===n){if(e.state.startRow===t&&e.state.startCol===a||e.state.endRow===t&&e.state.endCol===a)return;"1"===n?(r[e.state.startRow][e.state.startCol].val="0",r[t][a].val="1",e.setState({startRow:t,startCol:a})):(r[e.state.endRow][e.state.endCol].val="0",r[t][a].val="2",e.setState({endRow:t,endCol:a}))}else if("3"===n){if(e.state.startRow===t&&e.state.startCol===a||e.state.endRow===t&&e.state.endCol===a)return;r[t][a].val="3"!==r[t][a].val?"3":"0"}e.setState({currentGrid:r})},e.handleSearch=function(){console.log("reached handle");var t=g(e.state.startRow,e.state.startCol,e.state.currentGrid,e.state.diagSelected),a=Object(l.a)(t,3),r=a[0],c=a[1],s=a[2];r?e.setState({currentGrid:s,notFoundMsg:"",pathLength:c}):e.setState({currentGrid:s,notFoundMsg:n.a.createElement("p",{className:"err"},"NO PATH AVAILABLE"),pathLength:0})},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(h,{optionChange:this.handleOptionChange,activeOption:this.state.selectedOption,clrObs:this.handleClearObs,rstBrd:this.handleResetBoard,startSearch:this.handleSearch,diag:this.state.diagSelected,diagChange:this.handleDiagChange}),n.a.createElement(v,{setGrid:this.state.currentGrid,aOnClick:this.handleClick,notFound:this.state.notFoundMsg}),n.a.createElement("div",{className:"length"},n.a.createElement("div",null,"Path Length"),n.a.createElement("div",null,this.state.pathLength)))}}]),a}(r.Component);a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.cd169f9a.chunk.js.map