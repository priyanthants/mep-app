(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1J32":function(l,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r});var e=t("8Y7J"),u=t("SVse"),o=(t("Z5vn"),e.ub({encapsulation:2,styles:[],data:{}}));function i(l){return e.Sb(0,[(l()(),e.wb(0,0,null,null,3,"div",[["class","alert-icon alert-icon-top"]],null,null,null,null,null)),(l()(),e.wb(1,0,null,null,2,"i",[],null,null,null,null,null)),e.Nb(512,null,u.F,u.G,[e.t,e.u,e.l,e.G]),e.vb(3,278528,null,0,u.l,[u.F],{ngClass:[0,"ngClass"]},null)],function(l,n){l(n,3,0,n.component.icon)},null)}function r(l){return e.Sb(2,[(l()(),e.wb(0,0,null,null,6,"div",[["class","alert alert-light alert-elevate"],["role","alert"]],null,null,null,null,null)),e.Nb(512,null,u.F,u.G,[e.t,e.u,e.l,e.G]),e.vb(2,278528,null,0,u.l,[u.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e.lb(16777216,null,null,1,null,i)),e.vb(4,16384,null,0,u.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.wb(5,0,null,null,1,"div",[["class","alert-text"]],null,null,null,null,null)),e.Hb(null,0)],function(l,n){var t=n.component;l(n,2,0,"alert alert-light alert-elevate",t.classes),l(n,4,0,t.icon)},null)}},I4KA:function(l,n,t){"use strict";t.d(n,"a",function(){return e});class e{constructor(){}ngOnInit(){}changeCodeVisibility(){this.viewItem.isCodeVisible=!this.viewItem.isCodeVisible}hasExampleSource(){return!!this.viewItem&&!!(this.viewItem.cssCode||this.viewItem.htmlCode||this.viewItem.scssCode||this.viewItem.tsCode)}}},IbkX:function(l,n,t){"use strict";var e=t("8Y7J");const u=new e.r("WindowToken","undefined"!=typeof window&&window.document?{providedIn:"root",factory:()=>window}:void 0);var o=t("XNiG"),i=t("SVse");t.d(n,"c",function(){return r}),t.d(n,"a",function(){return c}),t.d(n,"b",function(){return s});let r=(()=>{class l{constructor(l,n){this.document=l,this.window=n,this.config={},this.copySubject=new o.a,this.copyResponse$=this.copySubject.asObservable()}configure(l){this.config=l}get isSupported(){return!!this.document.queryCommandSupported&&!!this.document.queryCommandSupported("copy")&&!!this.window}isTargetValid(l){if(l instanceof HTMLInputElement||l instanceof HTMLTextAreaElement){if(l.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');return!0}throw new Error("Target should be input or textarea")}copyFromInputElement(l){try{this.selectTarget(l);const t=this.copyText();return this.clearSelection(l,this.window),t&&this.isCopySuccessInIE11()}catch(n){return!1}}isCopySuccessInIE11(){const l=this.window.clipboardData;return!(l&&l.getData&&!l.getData("Text"))}copyFromContent(l,n=this.document.body){if(this.tempTextArea&&!n.contains(this.tempTextArea)&&this.destroy(this.tempTextArea.parentElement),!this.tempTextArea){this.tempTextArea=this.createTempTextArea(this.document,this.window);try{n.appendChild(this.tempTextArea)}catch(e){throw new Error("Container should be a Dom element")}}this.tempTextArea.value=l;const t=this.copyFromInputElement(this.tempTextArea);return this.config.cleanUpAfterCopy&&this.destroy(this.tempTextArea.parentElement),t}destroy(l=this.document.body){this.tempTextArea&&(l.removeChild(this.tempTextArea),this.tempTextArea=void 0)}selectTarget(l){return l.select(),l.setSelectionRange(0,l.value.length),l.value.length}copyText(){return this.document.execCommand("copy")}clearSelection(l,n){l&&l.focus(),n.getSelection().removeAllRanges()}createTempTextArea(l,n){const t="rtl"===l.documentElement.getAttribute("dir");let e;return(e=l.createElement("textarea")).style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[t?"right":"left"]="-9999px",e.style.top=(n.pageYOffset||l.documentElement.scrollTop)+"px",e.setAttribute("readonly",""),e}pushCopyReponse(l){this.copySubject.next(l)}}return l.ngInjectableDef=Object(e.V)({factory:function(){return new l(Object(e.Z)(i.d),Object(e.Z)(u,8))},token:l,providedIn:"root"}),l})();class c{constructor(l){this.clipboardSrv=l,this.cbOnSuccess=new e.n,this.cbOnError=new e.n}ngOnInit(){}ngOnDestroy(){this.clipboardSrv.destroy(this.container)}onClick(l){this.clipboardSrv.isSupported?this.targetElm&&this.clipboardSrv.isTargetValid(this.targetElm)?this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm),this.targetElm.value,l):this.cbContent&&this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent,this.container),this.cbContent,l):this.handleResult(!1,void 0,l)}handleResult(l,n,t){let e={isSuccess:l,event:t};l?(e=Object.assign(e,{content:n,successMessage:this.cbSuccessMsg}),this.cbOnSuccess.emit(e)):this.cbOnError.emit(e),this.clipboardSrv.pushCopyReponse(e)}}class s{}},V1Rr:function(l,n,t){"use strict";t.d(n,"a",function(){return e});class e{}},Z5vn:function(l,n,t){"use strict";t.d(n,"a",function(){return e});class e{constructor(){this.classes=""}ngOnInit(){this.icon&&(this.classes+=" kt-alert--icon")}}},hfLi:function(l,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return o});var e=t("8Y7J"),u=(t("gik1"),e.ub({encapsulation:2,styles:[],data:{}}));function o(l){return e.Sb(0,[e.Hb(null,0)],null,null)}},tmQX:function(l,n,t){"use strict";var e=t("8Y7J"),u=t("Rlre"),o=t("rWV4"),i=t("IbkX"),r=t("dJsq"),c=t("omvX"),s=t("SVse"),a=t("WWfB"),b=t("rBL6"),d=t("TtxX"),p=t("wL5p"),m=t("edsS"),h=t("vcQ0"),v=t("sA/u"),w=t("6Sed"),f=t("qkyu"),g=t("hfLi"),C=t("gik1"),I=t("zxnB"),y=t("cUpR");t("I4KA"),t.d(n,"a",function(){return k}),t.d(n,"b",function(){return H});var k=e.ub({encapsulation:0,styles:[["[_nghost-%COMP%]   .kt-portlet.kt-portlet--ngviewer[_ngcontent-%COMP%]   .kt-portlet__body[_ngcontent-%COMP%]{padding:1.75rem}[_nghost-%COMP%]   .kt-portlet.kt-portlet--ngviewer[_ngcontent-%COMP%]   .kt-portlet__body[_ngcontent-%COMP%]   .kt-portlet__code.kt-portlet__code--show[_ngcontent-%COMP%]{margin-bottom:20px}"]],data:{}});function S(l){return e.Sb(0,[(l()(),e.wb(0,0,null,null,1,"button",[["class","btn btn-clean btn-sm btn-icon btn-icon-md"],["title","View Source"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.changeCodeVisibility()&&e),e},null,null)),(l()(),e.wb(1,0,null,null,0,"i",[["class","la la-code"]],null,null,null,null,null))],null,null)}function x(l){return e.Sb(0,[(l()(),e.wb(0,0,null,null,3,"div",[["class","kt-portlet__preview"]],null,null,null,null,null)),(l()(),e.wb(1,0,null,null,2,"div",[["class","kt-alert kt-alert--icon kt-alert--air kt-alert--square alert alert-dismissible kt-margin-bottom-30"],["role","alert"]],null,null,null,null,null)),(l()(),e.wb(2,0,null,null,1,"div",[["class","kt-alert__text"]],[[8,"innerHTML",1]],null,null,null,null)),e.Mb(3,2)],null,function(l,n){var t=n.component,u=e.Rb(n,2,0,l(n,3,0,e.Ib(n.parent.parent,0),t.viewItem.beforeCodeDescription,"html"));l(n,2,0,u)})}function _(l){return e.Sb(0,[(l()(),e.wb(0,16777216,null,null,9,"mat-tab",[["label","HTML"]],null,null,null,u.d,u.a)),e.vb(1,770048,[[1,4]],2,o.c,[e.R],{textLabel:[0,"textLabel"]},null),e.Ob(603979776,2,{templateLabel:0}),e.Ob(335544320,3,{_explicitContent:0}),(l()(),e.wb(4,0,null,0,2,"a",[["class","kt-portlet__code-copy"],["href","javascript:;"],["ngxClipboard",""],["title","Copy example source"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Ib(l,5).onClick(t.target)&&u),u},null,null)),e.vb(5,212992,null,0,i.a,[i.c],{targetElm:[0,"targetElm"],cbContent:[1,"cbContent"]},null),(l()(),e.wb(6,0,null,null,0,"i",[["class","la la-copy"]],null,null,null,null,null)),(l()(),e.wb(7,0,null,0,2,"pre",[],null,null,null,null,null)),(l()(),e.wb(8,0,null,null,1,"code",[],[[2,"hljs",null],[8,"innerHTML",1]],null,null,null,null)),e.vb(9,540672,null,0,r.b,[r.c,e.B],{code:[0,"code"]},null),(l()(),e.lb(0,null,null,0))],function(l,n){var t=n.component;l(n,1,0,"HTML"),l(n,5,0,"",t.viewItem.htmlCode),l(n,9,0,t.viewItem.htmlCode)},function(l,n){l(n,8,0,!0,e.Ib(n,9).highlightedCode)})}function T(l){return e.Sb(0,[(l()(),e.wb(0,16777216,null,null,9,"mat-tab",[["label","TS"]],null,null,null,u.d,u.a)),e.vb(1,770048,[[1,4]],2,o.c,[e.R],{textLabel:[0,"textLabel"]},null),e.Ob(603979776,4,{templateLabel:0}),e.Ob(335544320,5,{_explicitContent:0}),(l()(),e.wb(4,0,null,0,2,"a",[["class","kt-portlet__code-copy"],["href","javascript:;"],["ngxClipboard",""],["title","Copy example source"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Ib(l,5).onClick(t.target)&&u),u},null,null)),e.vb(5,212992,null,0,i.a,[i.c],{targetElm:[0,"targetElm"],cbContent:[1,"cbContent"]},null),(l()(),e.wb(6,0,null,null,0,"i",[["class","la la-copy"]],null,null,null,null,null)),(l()(),e.wb(7,0,null,0,2,"pre",[],null,null,null,null,null)),(l()(),e.wb(8,0,null,null,1,"code",[],[[2,"hljs",null],[8,"innerHTML",1]],null,null,null,null)),e.vb(9,540672,null,0,r.b,[r.c,e.B],{code:[0,"code"]},null),(l()(),e.lb(0,null,null,0))],function(l,n){var t=n.component;l(n,1,0,"TS"),l(n,5,0,"",t.viewItem.tsCode),l(n,9,0,t.viewItem.tsCode)},function(l,n){l(n,8,0,!0,e.Ib(n,9).highlightedCode)})}function O(l){return e.Sb(0,[(l()(),e.wb(0,16777216,null,null,9,"mat-tab",[["label","CSS"]],null,null,null,u.d,u.a)),e.vb(1,770048,[[1,4]],2,o.c,[e.R],{textLabel:[0,"textLabel"]},null),e.Ob(603979776,6,{templateLabel:0}),e.Ob(335544320,7,{_explicitContent:0}),(l()(),e.wb(4,0,null,0,2,"a",[["class","kt-portlet__code-copy"],["href","javascript:;"],["ngxClipboard",""],["title","Copy example source"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Ib(l,5).onClick(t.target)&&u),u},null,null)),e.vb(5,212992,null,0,i.a,[i.c],{targetElm:[0,"targetElm"],cbContent:[1,"cbContent"]},null),(l()(),e.wb(6,0,null,null,0,"i",[["class","la la-copy"]],null,null,null,null,null)),(l()(),e.wb(7,0,null,0,2,"pre",[],null,null,null,null,null)),(l()(),e.wb(8,0,null,null,1,"code",[],[[2,"hljs",null],[8,"innerHTML",1]],null,null,null,null)),e.vb(9,540672,null,0,r.b,[r.c,e.B],{code:[0,"code"]},null),(l()(),e.lb(0,null,null,0))],function(l,n){var t=n.component;l(n,1,0,"CSS"),l(n,5,0,"",t.viewItem.cssCode),l(n,9,0,t.viewItem.cssCode)},function(l,n){l(n,8,0,!0,e.Ib(n,9).highlightedCode)})}function E(l){return e.Sb(0,[(l()(),e.wb(0,16777216,null,null,9,"mat-tab",[["label","SCSS"]],null,null,null,u.d,u.a)),e.vb(1,770048,[[1,4]],2,o.c,[e.R],{textLabel:[0,"textLabel"]},null),e.Ob(603979776,8,{templateLabel:0}),e.Ob(335544320,9,{_explicitContent:0}),(l()(),e.wb(4,0,null,0,2,"a",[["class","kt-portlet__code-copy"],["href","javascript:;"],["ngxClipboard",""],["title","Copy example source"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Ib(l,5).onClick(t.target)&&u),u},null,null)),e.vb(5,212992,null,0,i.a,[i.c],{targetElm:[0,"targetElm"],cbContent:[1,"cbContent"]},null),(l()(),e.wb(6,0,null,null,0,"i",[["class","la la-copy"]],null,null,null,null,null)),(l()(),e.wb(7,0,null,0,2,"pre",[],null,null,null,null,null)),(l()(),e.wb(8,0,null,null,1,"code",[],[[2,"hljs",null],[8,"innerHTML",1]],null,null,null,null)),e.vb(9,540672,null,0,r.b,[r.c,e.B],{code:[0,"code"]},null),(l()(),e.lb(0,null,null,0))],function(l,n){var t=n.component;l(n,1,0,"SCSS"),l(n,5,0,"",t.viewItem.scssCode),l(n,9,0,t.viewItem.scssCode)},function(l,n){l(n,8,0,!0,e.Ib(n,9).highlightedCode)})}function R(l){return e.Sb(0,[(l()(),e.wb(0,0,null,null,10,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,u.c,u.b)),e.vb(1,3325952,null,1,o.g,[e.l,e.i,[2,o.a],[2,c.a]],null,null),e.Ob(603979776,1,{_tabs:1}),(l()(),e.lb(16777216,null,null,1,null,_)),e.vb(4,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.lb(16777216,null,null,1,null,T)),e.vb(6,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.lb(16777216,null,null,1,null,O)),e.vb(8,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.lb(16777216,null,null,1,null,E)),e.vb(10,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,4,0,t.viewItem.htmlCode),l(n,6,0,t.viewItem.tsCode),l(n,8,0,t.viewItem.cssCode),l(n,10,0,t.viewItem.scssCode)},function(l,n){l(n,0,0,e.Ib(n,1).dynamicHeight,"below"===e.Ib(n,1).headerPosition)})}function L(l){return e.Sb(0,[(l()(),e.wb(0,0,null,null,5,"div",[["class","kt-portlet__preview kt-portlet__code"]],null,null,null,null,null)),e.Nb(512,null,s.F,s.G,[e.t,e.u,e.l,e.G]),e.vb(2,278528,null,0,s.l,[s.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Lb(3,{"kt-portlet__code--show":0}),(l()(),e.lb(16777216,null,null,1,null,R)),e.vb(5,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component,e=l(n,3,0,t.viewItem.isCodeVisible);l(n,2,0,"kt-portlet__preview kt-portlet__code",e),l(n,5,0,t.viewItem.isCodeVisible)},null)}function A(l){return e.Sb(0,[(l()(),e.wb(0,0,null,null,1,"div",[["class","kt-portlet__preview"]],[[8,"innerHTML",1]],null,null,null,null)),e.Mb(1,2)],null,function(l,n){var t=n.component,u=e.Rb(n,0,0,l(n,1,0,e.Ib(n.parent.parent,0),t.viewItem.afterCodeTitle,"html"));l(n,0,0,u)})}function M(l){return e.Sb(0,[(l()(),e.wb(0,0,null,null,1,"div",[["class","kt-portlet__preview"]],[[8,"innerHTML",1]],null,null,null,null)),e.Mb(1,2)],null,function(l,n){var t=n.component,u=e.Rb(n,0,0,l(n,1,0,e.Ib(n.parent.parent,0),t.viewItem.afterCodeDescription,"html"));l(n,0,0,u)})}function j(l){return e.Sb(0,[(l()(),e.wb(0,0,null,null,23,"kt-portlet",[],null,null,null,a.b,a.a)),e.Nb(512,null,s.F,s.G,[e.t,e.u,e.l,e.G]),e.vb(2,278528,null,0,s.l,[s.F],{ngClass:[0,"ngClass"]},null),e.vb(3,4308992,null,0,b.a,[e.l,d.b,p.a],null,null),(l()(),e.wb(4,0,null,0,5,"kt-portlet-header",[],[[8,"className",0],[1,"ktSticky",0]],[["window","resize"],["window","scroll"]],function(l,n,t){var u=!0;return"window:resize"===n&&(u=!1!==e.Ib(l,5).onResize()&&u),"window:scroll"===n&&(u=!1!==e.Ib(l,5).onScroll()&&u),u},m.b,m.a)),e.vb(5,4440064,null,0,h.a,[e.l,e.D,v.a],{title:[0,"title"]},null),(l()(),e.wb(6,0,null,2,3,null,null,null,null,null,null,null)),(l()(),e.wb(7,0,null,null,2,"div",[["class","kt-portlet__head-group"]],null,null,null,null,null)),(l()(),e.lb(16777216,null,null,1,null,S)),e.vb(9,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.wb(10,0,null,0,11,"kt-portlet-body",[],[[8,"className",0]],null,null,w.b,w.a)),e.vb(11,114688,null,0,f.a,[],null,null),(l()(),e.lb(16777216,null,0,1,null,x)),e.vb(13,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.lb(16777216,null,0,1,null,L)),e.vb(15,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.wb(16,0,null,0,1,"div",[["class","kt-portlet__preview"]],null,null,null,null,null)),e.Hb(null,0),(l()(),e.lb(16777216,null,0,1,null,A)),e.vb(19,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.lb(16777216,null,0,1,null,M)),e.vb(21,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(l()(),e.wb(22,0,null,0,1,"kt-portlet-footer",[],[[8,"className",0]],null,null,g.b,g.a)),e.vb(23,114688,null,0,C.a,[],null,null)],function(l,n){var t=n.component;l(n,2,0,"kt-portlet--ngviewer"),l(n,3,0),l(n,5,0,t.viewItem.beforeCodeTitle),l(n,9,0,t.hasExampleSource()),l(n,11,0),l(n,13,0,t.viewItem.beforeCodeDescription),l(n,15,0,t.hasExampleSource()),l(n,19,0,t.viewItem.afterCodeTitle),l(n,21,0,t.viewItem.afterCodeDescription),l(n,23,0)},function(l,n){l(n,4,0,e.Ib(n,5).classes,e.Ib(n,5).stickyDirective),l(n,10,0,e.Ib(n,11).classList),l(n,22,0,e.Ib(n,23).classList)})}function H(l){return e.Sb(0,[e.Kb(0,I.a,[y.b]),(l()(),e.lb(16777216,null,null,1,null,j)),e.vb(2,16384,null,0,s.n,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.viewItem)},null)}}}]);