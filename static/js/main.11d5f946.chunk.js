(this.webpackJsonpmars=this.webpackJsonpmars||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(6),s=a.n(c),l=(a(12),a(1)),o=a(2),i=a(4),d=a(3),u=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).setStyle=function(e){var t="sq btn m-0 rounded-0 btn-";return t+="1"===e.val?"success":"2"===e.val?"danger":"0"===e.val?"light":"secondary"},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("button",{className:this.setStyle(this.props.square),onClick:function(){return e.props.gOnClick(e.props.row,e.props.col)}})}}]),a}(r.Component),h=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("span",{className:"grid"},this.props.setGrid.map((function(t){return n.a.createElement("div",null,t.map((function(t){return n.a.createElement(u,{square:t,row:t.r,col:t.c,gOnClick:e.props.aOnClick})})))})))}}]),a}(r.Component),p=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("span",{className:"menu"},n.a.createElement("button",{className:"btn-default m-2 btn-block opt",onClick:this.props.startSearch},"START SEARCH"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-check"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"set-squares",value:"1",checked:"1"===this.props.activeOption,onChange:function(t){return e.props.optionChange(t.target.value)},className:"set-squares"}),"Set Start")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"set-squares",value:"2",checked:"2"===this.props.activeOption,onChange:function(t){return e.props.optionChange(t.target.value)},className:"set-squares"}),"Set Destination")),n.a.createElement("div",{className:"form-check"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"set-squares",value:"3",checked:"3"===this.props.activeOption,onChange:function(t){return e.props.optionChange(t.target.value)},className:"set-squares"}),"Set Obstacles"))),n.a.createElement("label",null,n.a.createElement("input",{name:"diag",type:"checkbox",checked:this.props.diag,onChange:function(t){return e.props.diagChange(t.target.checked)}}),"Allow Diagonal Paths"),n.a.createElement("button",{className:"btn-default m-2 btn-block opt",onClick:this.props.clrObs},"CLEAR OBSTACLES"),n.a.createElement("div",null,n.a.createElement("button",{className:"btn-default m-2 btn-block opt",onClick:this.props.rstBrd},"RESET BOARD")))}}]),a}(r.Component);for(var v=function(e,t,a,r){console.log("reached bfs");for(var n=Array(20).fill().map((function(e){return Array(20).fill("")})),c=0;c<20;c++)for(var s=0;s<20;s++)n[c][s]={r:c,c:s,val:a[c][s].val,d:0,visited:!1};for(var l=0;l<20;l++)for(var o=0;o<20;o++)"3"===n[l][o].val&&(n[l][o].visited=!0);var i,d=[],u=n[e][t];for(d.push(u),u.visited=!0;d.length;){if("2"===(i=d.pop()).val)return console.log("found"),console.log(i.d),i.d;i.r-1>=0&&i.c-1>=0&&!1===n[i.r-1][i.c-1].visited&&(n[i.r-1][i.c-1].d=i.d+1,n[i.r-1][i.c-1].visited=!0,d.push(n[i.r-1][i.c-1])),i.r-1>=0&&i.c+1<20&&!1===n[i.r-1][i.c+1].visited&&(n[i.r-1][i.c+1].d=i.d+1,n[i.r-1][i.c+1].visited=!0,d.push(n[i.r-1][i.c+1])),i.r+1<20&&i.c-1>=0&&!1===n[i.r+1][i.c-1].visited&&(n[i.r+1][i.c-1].d=i.d+1,n[i.r+1][i.c-1].visited=!0,d.push(n[i.r+1][i.c-1])),i.r+1<20&&i.c+1<20&&!1===n[i.r+1][i.c+1].visited&&(n[i.r+1][i.c+1].d=i.d+1,n[i.r+1][i.c+1].visited=!0,d.push(n[i.r+1][i.c+1])),i.r-1>=0&&!1===n[i.r-1][i.c].visited&&(n[i.r-1][i.c].d=i.d+1,n[i.r-1][i.c].visited=!0,d.push(n[i.r-1][i.c])),i.r+1<20&&!1===n[i.r+1][i.c].visited&&(n[i.r+1][i.c].d=i.d+1,n[i.r+1][i.c].visited=!0,d.push(n[i.r+1][i.c])),i.c-1>=0&&!1===n[i.r][i.c-1].visited&&(n[i.r][i.c-1].d=i.d+1,n[i.r][i.c-1].visited=!0,d.push(n[i.r][i.c-1])),i.c+1<20&&!1===n[i.r][i.c+1].visited&&(n[i.r][i.c+1].d=i.d+1,n[i.r][i.c+1].visited=!0,d.push(n[i.r][i.c+1]))}},f=Array(20).fill().map((function(e){return Array(20).fill("")})),m=0;m<20;m++)for(var g=0;g<20;g++)f[m][g]={r:m,c:g,val:"0"};f[9][3].val="1",f[9][16].val="2";var C=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={diagSelected:!1,selectedOption:"3",startRow:9,startCol:3,endRow:9,endCol:16,currentGrid:f},e.handleOptionChange=function(t){e.setState({selectedOption:t})},e.handleDiagChange=function(t){e.setState({diagSelected:t})},e.handleClearObs=function(){for(var t=Array(20).fill().map((function(e){return Array(20).fill("")})),a=0;a<20;a++)for(var r=0;r<20;r++)t[a][r]={r:a,c:r,val:"0"};t[e.state.startRow][e.state.startCol].val="1",t[e.state.endRow][e.state.endCol].val="2",e.setState({currentGrid:t})},e.handleResetBoard=function(){for(var t=Array(20).fill().map((function(e){return Array(20).fill("")})),a=0;a<20;a++)for(var r=0;r<20;r++)t[a][r]={r:a,c:r,val:"0"};e.setState({startRow:9,startCol:3,endRow:9,endCol:16}),t[9][3].val="1",t[9][16].val="2",e.setState({currentGrid:t})},e.handleClick=function(t,a){var r=e.state.currentGrid,n=e.state.selectedOption;if("1"===n||"2"===n){if(e.state.startRow===t&&e.state.startCol===a||e.state.endRow===t&&e.state.endCol===a)return;"1"===n?(r[e.state.startRow][e.state.startCol].val="0",r[t][a].val="1",e.setState({startRow:t,startCol:a})):(r[e.state.endRow][e.state.endCol].val="0",r[t][a].val="2",e.setState({endRow:t,endCol:a}))}else if("3"===n){if(e.state.startRow===t&&e.state.startCol===a||e.state.endRow===t&&e.state.endCol===a)return;r[t][a].val="0"===r[t][a].val?"3":"0"}e.setState({currentGrid:r})},e.handleSearch=function(){console.log("reached handle"),v(e.state.startRow,e.state.startCol,e.state.currentGrid,e.state.diagSelected)},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p,{optionChange:this.handleOptionChange,activeOption:this.state.selectedOption,clrObs:this.handleClearObs,rstBrd:this.handleResetBoard,startSearch:this.handleSearch,diag:this.state.diagSelected,diagChange:this.handleDiagChange}),n.a.createElement(h,{setGrid:this.state.currentGrid,aOnClick:this.handleClick}))}}]),a}(r.Component);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.11d5f946.chunk.js.map