(function(e){function t(t){for(var o,i,s=t[0],l=t[1],c=t[2],d=0,h=[];d<s.length;d++)i=s[d],r[i]&&h.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/wapp/5b46178f8a85047466d91ea3/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([7,0]),n()})({7:function(e,t,n){e.exports=n("Vtdi")},"9IM0":function(e,t,n){"use strict";var o=n("mG9t"),r=n.n(o);r.a},"Cq+6":function(e,t,n){},Dfll:function(e,t,n){},O0Nc:function(e,t,n){},QtCJ:function(e,t,n){},T3rJ:function(e,t,n){"use strict";var o=n("nl0h"),r=n.n(o);r.a},UbLb:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var o=n("Kw5r"),r=(n("O0Nc"),n("QtCJ"),n("UbLb"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root",attrs:{id:"app"},on:{keyup:[function(t){return("button"in t||115===t.keyCode)&&t.ctrlKey?(t.preventDefault(),e.save(t)):null},function(t){return("button"in t||114===t.keyCode)&&t.ctrlKey?(t.preventDefault(),e.refresh(t)):null}]}},[n("NoteliteHeader",{staticClass:"header",attrs:{notifyMessage:e.notifyMessage,headerTitle:e.noteTitle,noteCreator:e.noteCreator,showMarkedDown:e.showMarkedDown,color:e.color},on:{save:e.save,refresh:e.refresh,toggleShowMarkedDown:e.toggleShowMarkedDown}}),n("NoteText",{attrs:{noteText:e.noteText,noteCreator:e.noteCreator,showMarkedDown:e.showMarkedDown},on:{save:e.save,refresh:e.refresh,textChange:e.textChange}}),n("Author",{attrs:{authorName:e.authorName}})],1)}),a=[],i=n("24Ii"),s=n.n(i),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header",style:{backgroundColor:e.color}},[n("div",{staticClass:"left-title"},[n("span",{staticClass:"header-title"},[e._v(e._s(e.headerTitle))])]),n("div",{staticClass:"right-buttons"},[n("span",{staticClass:"notify-message",style:{color:"Error"===e.notifyMessage?"#C51162":"#018786"}},[e._v("\n      "+e._s(e.notifyMessage)+"\n    ")]),e.showMarkedDownText?n("i",{on:{click:e.toggleShowMarkedDown}},[e._v("\n      "+e._s(e.showMarkedDownText)+"\n    ")]):e._e(),n("i",{staticClass:"action-icon",on:{click:function(t){e.noteCreator?e.save():e.refresh()}}},[e._v("\n      "+e._s(e.noteCreator?"launch":"input")+"\n    ")])])])},c=[],u={name:"NoteliteHeader",props:{noteCreator:Boolean,headerTitle:String,color:String,notifyMessage:String,showMarkedDown:Boolean},methods:{refresh:function(){this.$emit("refresh")},save:function(){this.$emit("save")},toggleShowMarkedDown:function(){this.$emit("toggleShowMarkedDown")}},computed:{showMarkedDownText:function(){return this.noteCreator?this.noteCreator&&!this.showMarkedDown?"visibility":this.noteCreator&&this.showMarkedDown?"edit":void 0:""}}},d=u,h=(n("Xrmx"),n("KHd+")),f=Object(h["a"])(d,l,c,!1,null,"67dc1805",null),p=f.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-root"},[e.noteCreator&&!e.showMarkedDown?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.editableNoteText,expression:"editableNoteText"}],staticClass:"textarea",attrs:{autofocus:"",placeholder:e.placeHolder},domProps:{value:e.editableNoteText},on:{change:e.changed,input:function(t){t.target.composing||(e.editableNoteText=t.target.value)}}}):e._e(),!e.noteCreator||e.showMarkedDown?n("div",{staticClass:"marked-down-text",domProps:{innerHTML:e._s(e.markedDownNoteText)}}):e._e()])},v=[],g=n("M55E"),m=n.n(g),x=new m.a.Converter,C={name:"NoteText",props:{noteText:String,noteCreator:Boolean,noteColorObj:Object,showMarkedDown:Boolean},data:function(){return{editableNoteText:this.noteText}},methods:{changed:function(){this.$emit("textChange",this.editableNoteText)}},computed:{placeHolder:function(){return this.noteCreator?"What's on your mind?":"This note is empty."},markedDownNoteText:function(){return x.makeHtml(this.noteText)}},watch:{noteText:function(){this.editableNoteText=this.noteText}}},b=C,y=(n("T3rJ"),Object(h["a"])(b,w,v,!1,null,"4c8a3b3c",null)),T=y.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"author"},[e._v("\n  A note by "+e._s(e.authorName)+"\n")])},k=[],D={name:"Author",props:{authorName:String}},_=D,N=(n("9IM0"),Object(h["a"])(_,M,k,!1,null,"4783a745",null)),O=N.exports,S=(n("f3/d"),window),j=S.W,A=S.R,E=function(e){j.loadData().then(function(t){var n=t.user.name,o=t.creator,r=t.customize,a=r.headerColor,i=r.titleText;e.authorName=n,e.noteCreator=o,a&&(e.color=a),i&&(e.noteTitle=i)}),j.onChangeValue(function(t){var n=t.key,o=t.value;"headerColor"===n?e.color=o:"titleText"===n&&(e.noteTitle=o)}),j.changeCustomize(A.identity),j.start()},H={sevrer:"https://weblite.me:3090"},P=window,$=P.W,J={name:"App",components:{NoteliteHeader:p,NoteText:T,Author:O},data:function(){return{id:$&&$.wisId||"1",noteCreator:!0,authorName:"amin",noteText:"",noteTitle:"notelite",color:"#ffd600",notifyMessage:"",showMarkedDown:!1}},methods:{textChange:function(e){this.noteText=e},refresh:function(){var e=this;s.a.get("".concat(H.sevrer,"/loadNote/").concat(this.id)).set("Access-Control-Allow-Origin","*").end(function(t,n){t||null==n.body?e.notifyMessage="Error":(e.textChange(n.body.text),e.notifyMessage="Refreshed"),setTimeout(function(){return e.notifyMessage=""},2e3)})},save:function(){var e=this;s.a.post("".concat(H.sevrer,"/saveNote")).set("Access-Control-Allow-Origin","*").send({id:this.id,text:this.noteText}).end(function(t){e.notifyMessage=t?"Error":"Saved",setTimeout(function(){return e.notifyMessage=""},2e3)})},toggleShowMarkedDown:function(){this.showMarkedDown=!this.showMarkedDown}},created:function(){$&&E(this)},mounted:function(){this.refresh()}},q=J,B=(n("nq7X"),Object(h["a"])(q,r,a,!1,null,"2960614c",null)),I=B.exports;new o["a"]({el:"#app",render:function(e){return e(I)}})},Xrmx:function(e,t,n){"use strict";var o=n("Cq+6"),r=n.n(o);r.a},mG9t:function(e,t,n){},nl0h:function(e,t,n){},nq7X:function(e,t,n){"use strict";var o=n("Dfll"),r=n.n(o);r.a}});
//# sourceMappingURL=app.4d8556c9.js.map