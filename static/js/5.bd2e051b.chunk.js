(this["webpackJsonp2019-ncov"]=this["webpackJsonp2019-ncov"]||[]).push([[5],{421:function(t,e,o){"use strict";o.r(e);var a=o(16),n=o(0),r=o.n(n),c=(o(287),o(174),o(45)),s=(o(360),o(361),o(58)),i=o.n(s);o(385),o(411),o(419);e.default=function(t){var e=t.province,o=(t.data,t.onClick,Object(n.useState)(!0)),s=Object(a.a)(o,2),u=s[0],d=s[1];Object(n.useEffect)((function(){d(!1)}),[e]);var l=Object(n.useState)(null),p=Object(a.a)(l,2),A=p[0],f=p[1];return Object(n.useEffect)((function(){i.a.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTWq32Sh-nuY61nzNCYauMYbiOZhIE8TfnyRhu1hnVs-i-oLdOO65Ax0VHDtcctn44l7NEUhy7gHZUm/pub?output=csv",{download:!0,complete:function(t){for(var e={NSW:"AU-NSW",ACT:"AU-ACT",NT:"AU-NT",WA:"AU-WA",VIC:"AU-VIC",QLD:"AU-QLD",SA:"AU-SA",TAS:"AU-TAS"},o=[["state","confirmed"]],a=1;a<t.data.length;a++)o.push([e[t.data[a][0]],parseInt(t.data[a][1])]);f(o)}})}),[e]),u?r.a.createElement("div",{className:"loading"},"Loading..."):r.a.createElement(c.a,{width:window.innerWidth<960?"100%":"auto",left:"auto",align:"right",top:"40%",chartType:"GeoChart",data:A,options:{region:"AU",colorAxis:{colors:["rgb(245,236,91)","rgb(218,221,82)","rgb(153,195,84)","rgb(55,125,67)"]},backgroundColor:"white",datalessRegionColor:"rgb(216,221,224)",defaultColor:"#f5f5f5",resolution:"provinces"},mapsApiKey:"YOUR_KEY_HERE",rootProps:{"data-testid":"3"}})}}}]);
//# sourceMappingURL=5.bd2e051b.chunk.js.map