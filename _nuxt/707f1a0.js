(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{501:function(t,e,r){"use strict";r(8),r(10),r(15),r(16);var n=r(2),c=(r(3),r(24),r(11),r(26),r(60),r(475),r(40),r(476),r(477),r(478),r(479),r(480),r(481),r(482),r(483),r(484),r(485),r(486),r(487),r(488),r(41),r(59),r(9),r(66),r(294),r(1)),o=r(89),l=r(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),_=v.reduce((function(t,e){return t["offset"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),y=v.reduce((function(t,e){return t["order"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(O),offset:Object.keys(_),order:Object.keys(y)};function h(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var m=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},_),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=m.get(l);if(!d){var v,O;for(O in d=[],j)j[O].forEach((function(t){var e=r[t],n=h(O,t,e);n&&d.push(n)}));var _=d.some((function(t){return t.startsWith("col-")}));d.push((v={col:!_||!r.cols},Object(n.a)(v,"col-".concat(r.cols),r.cols),Object(n.a)(v,"offset-".concat(r.offset),r.offset),Object(n.a)(v,"order-".concat(r.order),r.order),Object(n.a)(v,"align-self-".concat(r.alignSelf),r.alignSelf),v)),m.set(l,d)}return t(r.tag,Object(o.a)(data,{class:d}),c)}})},513:function(t,e,r){"use strict";r.r(e);var n=r(198),c=r(287),o=r(203),l=r(57),f=r(501),d=r(455),v=r(166),O=r(531),_=r(58),component=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("div",{attrs:{"max-width":"100%"}},[e(o.a,{staticClass:"ma-2 mb-4",attrs:{color:"grey lighten-5",outlined:""}},[e(d.a,[e(O.a,{attrs:{dense:""}},[e(f.a,{attrs:{cols:"12"}},[e(o.a,{attrs:{color:"#79C2C8",theme:"dark"}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("div",[e(l.d,{staticClass:"text-h5"},[t._v("\n                    SPAC\n                  ")]),t._v(" "),e(l.b,[t._v("\n                    South Phil Adventist College\n                    "),e("div",[e("h5",[t._v("B.S. Computer Science")]),t._v("\n                      June 2012 - March 2016\n                    ")])]),t._v(" "),e(l.a,[e(c.a,{staticClass:"ms-2",attrs:{variant:"outlined",size:"small"}},[t._v("\n                      Site\n                    ")])],1)],1),t._v(" "),e(n.a,{staticClass:"ma-3",attrs:{size:"125",rounded:"0"}},[e(v.a,{attrs:{src:"https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.18169-9/420406_284267174976878_804264553_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFzRiPu5WnRxHzr8csxGomjuWUEodIC0wO5ZQSh0gLTA5uWQAiIbc2SY7-4Rmpil7pymMrvrx8akXkNJJaczzIX&_nc_ohc=bObayabytWsAX_ZOo21&_nc_ht=scontent.fdvo2-1.fna&_nc_e2o=f&oh=00_AfCdgo_KO8rXcskq384ABXIP_o3jH0aJzu5P8y20dUe-kQ&oe=64E3EF0A"}})],1)],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);