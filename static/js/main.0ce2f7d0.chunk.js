(this.webpackJsonpjunior=this.webpackJsonpjunior||[]).push([[0],{18:function(t,e,s){},20:function(t,e,s){},22:function(t,e,s){"use strict";s.r(e);var c=s(0),a=s(2),n=s.n(a),r=s(10),i=s.n(r),o=(s(18),s(8)),l=s.n(o),d=s(1),u=s(11),j=s(3),h=s(4),b=s(6),O=s(5),x=(s(20),s(21),function(t){Object(b.a)(s,t);var e=Object(O.a)(s);function s(t){var c;return Object(j.a)(this,s),(c=e.call(this,t)).state={},c}return Object(h.a)(s,[{key:"render",value:function(){return Object(c.jsx)(n.a.Fragment,{children:Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(c.jsx)("a",{className:"navbar-brand",children:"Delivery DashBoard"})})})}}]),s}(a.Component)),m=function(t){Object(b.a)(s,t);var e=Object(O.a)(s);function s(){var t;return Object(j.a)(this,s),(t=e.call(this)).updateWindowDimensions=function(){t.setState({width:window.innerWidth,height:window.innerHeight}),console.log(t.state)},t.state={},t}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.updateWindowDimensions()}},{key:"render",value:function(){var t=this,e={tableRow:{fontSize:this.state.width<786?"12px":"14px"}};return Object(c.jsx)("div",{className:"table-responsive",children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{className:"thead-dark",children:Object(c.jsxs)("tr",{style:e.tableRow,children:[Object(c.jsx)("th",{scope:"col",children:"#"}),Object(c.jsx)("th",{scope:"col",children:"Awbno"}),Object(c.jsx)("th",{scope:"col",children:"Carrier"}),Object(c.jsx)("th",{scope:"col",children:"Source"}),Object(c.jsx)("th",{scope:"col",children:"Destination"}),Object(c.jsx)("th",{scope:"col",children:"Start Date"}),Object(c.jsx)("th",{scope:"col",children:"ETD"}),Object(c.jsx)("th",{scope:"col",children:"Status"})]})}),Object(c.jsx)("tbody",{children:this.props.dummy.map((function(s,a){return Object(c.jsxs)("tr",{style:e.tableRow,children:[Object(c.jsx)("th",{scope:"row",children:a+1}),Object(c.jsx)("td",{className:"pointer",onClick:function(){return t.props.handleShowTrack(s._id)},children:s.awbno}),Object(c.jsx)("td",{children:s.carrier}),Object(c.jsx)("td",{children:s.from?s.from:""}),Object(c.jsx)("td",{children:s.to?s.to:""}),Object(c.jsx)("td",{children:s.pickup_date}),Object(c.jsx)("td",{children:s.extra_fields?s.extra_fields.expected_delivery_date:""}),Object(c.jsx)("td",{className:"DEL"===s.current_status_code?"btn btn-success":"btn btn-warning",children:"DEL"===s.current_status_code?"DELIVERD":"In-TRANSIT"})]})}))})]})})}}]),s}(a.Component),p=s(12),f=(s(9),function(t){console.log(t.selectedCard);var e=window.innerWidth;return Object(c.jsx)("div",{className:"d-flex p-2 scroll "+(e<768?"":"justify-content-center"),children:Object.entries(t.statusList).map((function(e){var s=Object(p.a)(e,2),a=s[0],n=s[1];return Object(c.jsx)("div",{className:"card mx-2"+(t.selectedCard===a?"text-white bg-info":""),style:{minWidth:"100px"},children:Object(c.jsxs)("div",{className:"card-body p-1 pointer",onClick:function(){return t.clickHandle(a)},children:[Object(c.jsx)("h4",{className:"card-title",children:a}),Object(c.jsx)("p",{className:"text-right display-4 mb-1",children:n})]})})}))})}),v=s.p+"static/media/warehouse.147c9c0b.svg",y=s.p+"static/media/destination.5336278d.svg",w={fontSize:window.innerWidth<786?"12px":"14px"},g=function(t){console.log(t);var e=t.track.scan.sort((function(t,e){return t.time-e.time}));return Object(c.jsx)("div",{children:e.map((function(t){return Object(c.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(c.jsxs)("div",{className:"d-flex flex-column text-center w-25",children:["DELIVERED"===t.status_detail?Object(c.jsx)("img",{src:y,className:"mx-auto",alt:"warehouse",width:"26px",height:"26px"}):"",Object(c.jsx)("div",{style:w,children:"|"}),Object(c.jsx)("div",{style:w,children:"|"}),Object(c.jsx)("div",{style:w,children:"|"}),"BOOKED"===t.status_detail?Object(c.jsx)("img",{src:v,className:"mx-auto",alt:"warehouse",width:"26px",height:"26px"}):""]}),Object(c.jsx)("ul",{className:"list-group w-100",style:Object(d.a)({"justify-content":"center"},w),children:Object(c.jsxs)("li",{className:"list-group-item p-1 align-middle",children:[t.location,Object(c.jsx)("div",{className:"small text-center",children:t.time})]})})]})}))})},N=function(t){Object(b.a)(s,t);var e=Object(O.a)(s);function s(t){var c;return Object(j.a)(this,s),(c=e.call(this,t)).handleEvent=function(t){console.log(t);var e=c.state.dataArray.filter((function(e){return e.current_status_code===t}));c.setState({dumyArray:e}),c.setState({selected:t}),console.log(c.state)},c.showTrack=function(t){var e=c.state.dumyArray.filter((function(e){return e._id===t}));c.setState({currentOrder:e[0]}),c.setState({isShowTrack:!0})},c.hideTrack=function(){c.setState({isShowTrack:!1})},c.style={hide:{color:"blue"}},c.state={dataArray:[],dumyArray:[],status:{DEL:0,INT:0,OOD:0,DEX:0,NFI:0},selected:"DEL",isShowTrack:!1,currentOrder:null},c}return Object(h.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)(f,{selectedCard:this.state.selected,clickHandle:this.handleEvent,statusList:this.state.status})}),Object(c.jsx)("div",{className:"col-12 col-sm-4",children:Object(c.jsx)("div",{className:"card p-2",children:this.state.isShowTrack&&this.state.currentOrder.scan?Object(c.jsxs)("span",{children:[Object(c.jsx)("p",{className:"pointer",style:this.style.hide,onClick:this.hideTrack,children:"Hide"}),Object(c.jsx)(g,{track:this.state.currentOrder})]}):"Click to show"})}),Object(c.jsx)("div",{className:"col-12 col-sm-8",children:Object(c.jsx)("div",{children:Object(c.jsx)(m,{handleShowTrack:this.showTrack,dummy:this.state.dumyArray},"1")})})]})]})}},{key:"componentDidMount",value:function(){var t=this,e={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer tTU3gFVUdP"},body:JSON.stringify({email:"suyashshrivastava651@gmail.com"})};fetch("https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",e).then(function(){var e=Object(u.a)(l.a.mark((function e(s){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.json();case 2:if(c=e.sent,s.ok){e.next=6;break}return a=c&&c.message||s.status,e.abrupt("return",Promise.reject(a));case 6:c.map((function(e){if("DEL"===e.current_status_code){var s=Object(d.a)(Object(d.a)({},t.state.status),{},{DEL:t.state.status.DEL+1});t.setState({status:s})}else if("INT"===e.current_status_code){var c=Object(d.a)(Object(d.a)({},t.state.status),{},{INT:t.state.status.INT+1});t.setState({status:c})}else if("OOD"===e.current_status_code){var a=Object(d.a)(Object(d.a)({},t.state.status),{},{OOD:t.state.status.OOD+1});t.setState({status:a})}else if("DEX"===e.current_status_code){var n=Object(d.a)(Object(d.a)({},t.state.status),{},{DEX:t.state.status.DEX+1});t.setState({status:n})}else if("NFI"===e.current_status_code){var r=Object(d.a)(Object(d.a)({},t.state.status),{},{NFI:t.state.status.NFI+1});t.setState({status:r})}})),n=c.filter((function(e){return e.current_status_code===t.state.selected})),t.setState({dumyArray:n}),t.setState({dataArray:c}),console.log(t.state.status);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.setState({errorMessage:e.toString()}),console.error("There was an error!",e)}))}}]),s}(a.Component),k=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,23)).then((function(e){var s=e.getCLS,c=e.getFID,a=e.getFCP,n=e.getLCP,r=e.getTTFB;s(t),c(t),a(t),n(t),r(t)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),k()},9:function(t,e,s){}},[[22,1,2]]]);
//# sourceMappingURL=main.0ce2f7d0.chunk.js.map