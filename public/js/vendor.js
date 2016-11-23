/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 DataTables 1.10.10
 ©2008-2015 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&db(a)}function eb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(m.models.oSearch,a[b])}function fb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;b&&!h.isArray(b)&&(a.aDataSort=[b])}function gb(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,
width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function hb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==e;)a.hasOwnProperty(d)&&
(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=
(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(fb(c),J(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=Q(g),i=b.mRender?Q(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&
(c(g.sort)||c(g.type)||c(g.filter));b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return R(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=
d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function U(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&Z(a);v(a,null,"column-sizing",[a])}function $(a,b){var c=aa(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function ba(a,b){var c=aa(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function ca(a){return aa(a,
"bVisible").length}function aa(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,u;e=0;for(f=b.length;e<f;e++)if(l=b[e],u=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){u[i]===k&&(u[i]=B(a,i,e,"type"));q=d[g](u[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function ib(a,
b,c,d){var e,f,g,j,i,o,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){o=b[e];var q=o.targets!==k?o.targets:o.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],o)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],o);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,o)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,
{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function ma(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});
if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function jb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\./g,".")})}function Q(a){if(h.isPlainObject(a)){var b=
{};h.each(a,function(a,c){c&&(b[a]=Q(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);for(var i=0,o=j.length;i<o;i++){f=j[i].match(da);g=j[i].match(V);if(f){j[i]=j[i].replace(da,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=
j.join(".");if(h.isArray(a)){i=0;for(o=a.length;i<o;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function R(a){if(h.isPlainObject(a))return R(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||
-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,o=e.length-1;i<o;i++){g=e[i].match(da);j=e[i].match(V);if(g){e[i]=e[i].replace(da,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(o=d.length;j<o;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(da,"")]=
d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function na(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function oa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function ea(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=
Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,o,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],u=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),R(a)(d,b.getAttribute(c)))}},S=function(a){if(c===k||
c===i)j=l[i],o=h.trim(a.innerHTML),j&&j._bAttrSrc?(R(j.mData._)(d,o),u(j.mData.sort,a),u(j.mData.type,a),u(j.mData.filter,a)):q?(j._setter||(j._setter=R(j.mData)),j._setter(d,o)):d[i]=o;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)S(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)S(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&R(a.rowId)(d,b);return{data:d,cells:e}}function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,h,l,q;if(null===
e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){h=a.aoColumns[l];i=c?d[l]:H.createElement(h.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if(!c||h.mRender||h.mData!==l)i.innerHTML=B(a,b,l,"display");h.sClass&&(i.className+=" "+h.sClass);h.bVisible&&!c?j.appendChild(i):!h.bVisible&&c&&i.parentNode.removeChild(i);h.fnCreatedCell&&h.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}v(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role",
"row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?pa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function kb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,o=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),
i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,o);i&&fa(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(o.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(o.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}
function ga(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,o;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(o=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+o]!==k&&g[d][f].cell==g[d][f+o].cell;){for(c=
0;c<i;c++)j[d+c][f+o]=1;o++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",o)}}}}function O(a){var b=v(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,o=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&
!lb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:o;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var u=d[c%e];q._sRowStripe!=u&&(h(l).removeClass(q._sRowStripe).addClass(u),q._sRowStripe=u)}v(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ca(a),
"class":a.oClasses.sRowEmpty}).html(c))[0];v(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,o,i]);v(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,o,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));v(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&mb(a);d?ha(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=
!1}function nb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,o,l,q,u=0;u<f.length;u++){g=null;j=f[u];if("<"==j){i=h("<div/>")[0];o=f[u+1];if("'"==o||'"'==o){l="";for(q=2;f[u+q]!=o;)l+=f[u+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(o=l.split("."),
i.id=o[0].substr(1,o[0].length-1),i.className=o[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;u+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=ob(a);else if("f"==j&&d.bFilter)g=pb(a);else if("r"==j&&d.bProcessing)g=qb(a);else if("t"==j)g=rb(a);else if("i"==j&&d.bInfo)g=sb(a);else if("p"==j&&d.bPaginate)g=tb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(o=i.length;q<o;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&
(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function fa(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,o,l,q,u;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;o=g;u=1===l?!0:!1;for(j=0;j<l;j++)for(g=
0;g<q;g++)a[f+g][o+j]={cell:e,unique:u},a[f+g].nTr=d}e=e.nextSibling}}}function qa(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],fa(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ra(a,b,c){v(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,
j=a.oInstance,i=function(b){v(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var o=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&o?o:h.extend(!0,b,o);delete g.data}o={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=v(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=
b;v(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(o,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(o,g)),g.data=f)}function lb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),ra(a,ub(a),function(b){vb(a,b)}),!1):!0}function ub(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,o,
l,q=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var k=function(a,b){j.push({name:a,value:b})};k("sEcho",a.iDraw);k("iColumns",c);k("sColumns",D(b,"sName").join(","));k("iDisplayStart",g);k("iDisplayLength",i);var S={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)o=b[g],l=f[g],i="function"==typeof o.mData?"function":o.mData,S.columns.push({data:i,name:o.sName,searchable:o.bSearchable,orderable:o.bSortable,search:{value:l.sSearch,
regex:l.bRegex}}),k("mDataProp_"+g,i),d.bFilter&&(k("sSearch_"+g,l.sSearch),k("bRegex_"+g,l.bRegex),k("bSearchable_"+g,o.bSearchable)),d.bSort&&k("bSortable_"+g,o.bSortable);d.bFilter&&(k("sSearch",e.sSearch),k("bRegex",e.bRegex));d.bSort&&(h.each(q,function(a,b){S.order.push({column:b.col,dir:b.dir});k("iSortCol_"+a,b.col);k("sSortDir_"+a,b.dir)}),k("iSortingCols",q.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:S:b?j:S}function vb(a,b){var c=sa(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=
b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}na(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||ta(a,b);a.bAjaxDataGet=!0;C(a,!1)}function sa(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||
b[c]:""!==c?Q(c)(b):b}function pb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?"":this.value;b!=e.sSearch&&(ha(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==
a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",g?ua(f,g):f).bind("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});return b[0]}function ha(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;
d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){wb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)xb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);yb(a)}else f(b);a.bFiltered=!0;v(a,null,"search",[a])}function yb(a){for(var b=m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,o=c.length;i<o;i++)e=c[i],d=a.aoData[e],b[f](a,
d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function xb(a,b,c,d,e,f){if(""!==b)for(var g=a.aiDisplay,d=Qa(b,d,e,f),e=g.length-1;0<=e;e--)b=a.aoData[g[e]]._aFilterData[c],d.test(b)||g.splice(e,1)}function wb(a,b,c,d,e,f){var d=Qa(b,d,e,f),e=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,g;0!==m.ext.search.length&&(c=!0);g=zb(a);if(0>=b.length)a.aiDisplay=f.slice();else{if(g||c||e.length>b.length||0!==b.indexOf(e)||a.bSorted)a.aiDisplay=f.slice();b=a.aiDisplay;for(c=b.length-1;0<=
c;c--)d.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)}}function Qa(a,b,c,d){a=b?a:va(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function va(a){return a.replace(Yb,"\\$1")}function zb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<
g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(wa.innerHTML=i,i=Zb?wa.textContent:wa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Ab(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Bb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,
bCaseInsensitive:a.caseInsensitive}}function sb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Cb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Cb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&
(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Db(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Db(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/
e)))}function ia(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){nb(a);kb(a);ga(a,a.aoHeader);ga(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=w(f.sWidth));v(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ra(a,[],function(c){var f=sa(a,c);for(b=0;b<f.length;b++)N(a,f[b]);a.iInitDisplayStart=d;T(a);C(a,!1);ta(a,c)},a):(C(a,!1),ta(a))}else setTimeout(function(){ia(a)},200)}
function ta(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&U(a);v(a,null,"plugin-init",[a,b]);v(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);v(a,null,"length",[a,c])}function ob(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);
a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).bind("change.DT",function(){Ra(a,h(this).val());O(a)});h(a.nTable).bind("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function tb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+
"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==
b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(v(a,null,"page",[a]),c&&O(a));return b}function qb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");v(a,null,"processing",[a,b])}function rb(a){var b=h(a.nTable);b.attr("role",
"grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),o=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:w(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||
"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:w(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:w(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(o.removeAttr("id").css("margin-left",0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),
k=b[0],f=b[1],u=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(u.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=u;a.aoDrawCallback.push({fn:Z,sName:"scrolling"});return i[0]}function Z(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,o=j.children("table"),j=a.nScrollBody,l=h(j),q=j.style,u=h(a.nScrollFoot).children("div"),
m=u.children("table"),n=h(a.nTHead),p=h(a.nTable),t=p[0],v=t.style,r=a.nTFoot?h(a.nTFoot):null,Eb=a.oBrowser,Ua=Eb.bScrollOversize,s,L,P,x,y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,U(a);else{a.scrollBarVis=L;p.children("thead, tfoot").remove();x=n.clone().prependTo(p);n=n.find("tr");L=x.find("tr");x.find("th, td").removeAttr("tabindex");
r&&(P=r.clone().prependTo(p),s=r.find("tr"),P=P.find("tr"));c||(q.width="100%",f[0].style.width="100%");h.each(qa(a,x),function(b,c){B=$(a,b);c.style.width=a.aoColumns[B].sWidth});r&&I(function(a){a.style.width=""},P);f=p.outerWidth();if(""===c){v.width="100%";if(Ua&&(p.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))v.width=w(p.outerWidth()-b);f=p.outerWidth()}else""!==d&&(v.width=w(d),f=p.outerWidth());I(C,L);I(function(a){A.push(a.innerHTML);y.push(w(h(a).css("width")))},
L);I(function(a,b){a.style.width=y[b]},n);h(L).height(0);r&&(I(C,P),I(function(a){z.push(w(h(a).css("width")))},P),I(function(a,b){a.style.width=z[b]},s),h(P).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+A[b]+"</div>";a.style.width=y[b]},L);r&&I(function(a,b){a.innerHTML="";a.style.width=z[b]},P);if(p.outerWidth()<f){s=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(Ua&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))v.width=
w(s-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else s="100%";q.width=w(s);g.width=w(s);r&&(a.nScrollFoot.style.width=w(s));!e&&Ua&&(q.height=w(t.offsetHeight+b));c=p.outerWidth();o[0].style.width=w(c);i.width=w(c);d=p.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+(Eb.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";r&&(m[0].style.width=w(c),u[0].style.width=w(c),u[0].style[e]=d?b+"px":"0px");l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=
0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=aa(a,"bVisible"),o=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,u=!1,m,n,p=a.oBrowser,d=p.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)n=c[i[m]],null!==n.sWidth&&
(n.sWidth=Fb(n.sWidthOrig,k),u=!0);if(d||!u&&!f&&!e&&j==ca(a)&&j==o.length)for(m=0;m<j;m++)i=$(a,m),null!==i&&(c[i].sWidth=w(o.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var t=h("<tr/>").appendTo(j.find("tbody"));j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");o=qa(a,j.find("thead")[0]);for(m=0;m<i.length;m++)n=c[i[m]],o[m].style.width=null!==n.sWidthOrig&&
""!==n.sWidthOrig?w(n.sWidthOrig):"",n.sWidthOrig&&f&&h(o[m]).append(h("<div/>").css({width:n.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)u=i[m],n=c[u],h(Gb(a,u)).clone(!1).append(n.sContentPadding).appendTo(t);n=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):
l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(o[m]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(o[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=w(k-g);b.style.width=w(e);n.remove()}l&&(b.style.width=w(l));if((l||f)&&!a._reszEvt)b=function(){h(E).bind("resize.DT-"+a.sInstance,ua(function(){U(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function ua(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=
k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}}function Fb(a,b){if(!a)return 0;var c=h("<div/>").css("width",w(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Gb(a,b){var c=Hb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Hb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace($b,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function w(a){return null===
a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var o=[];f=function(a){a.length&&!h.isArray(a[0])?o.push(a):h.merge(o,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<o.length;a++){i=o[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||"string",o[a]._idx===k&&(o[a]._idx=h.inArray(o[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:o[a][1],
index:o[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function mb(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Ib(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];
return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Jb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort",
"asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Va(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=
b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Wa(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Va(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Va(a,c,b.shiftKey,d))})}function xa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=
0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Ib(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ba(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function ya(a){if(a.oFeatures.bStateSave&&
!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Ab(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Ab(a.aoPreSearchCols[d])}})};v(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Kb(a){var b,c,d=a.aoColumns;if(a.oFeatures.bStateSave){var e=a.fnStateLoadCallback.call(a.oInstance,a);if(e&&e.time&&(b=v(a,"aoStateLoadParams",
"stateLoadParams",[a,e]),-1===h.inArray(!1,b)&&(b=a.iStateDuration,!(0<b&&e.time<+new Date-1E3*b)&&d.length===e.columns.length))){a.oLoadedState=h.extend(!0,{},e);e.start!==k&&(a._iDisplayStart=e.start,a.iInitDisplayStart=e.start);e.length!==k&&(a._iDisplayLength=e.length);e.order!==k&&(a.aaSorting=[],h.each(e.order,function(b,c){a.aaSorting.push(c[0]>=d.length?[0,c[1]]:c)}));e.search!==k&&h.extend(a.oPreviousSearch,Bb(e.search));b=0;for(c=e.columns.length;b<c;b++){var f=e.columns[b];f.visible!==
k&&(d[b].bVisible=f.visible);f.search!==k&&h.extend(a.aoPreSearchCols[b],Bb(f.search))}v(a,"aoStateLoaded","stateLoaded",[a,e])}}}function za(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&v(a,null,"error",[a,d,c]),"alert"==
b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Lb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Wa(a,b,c){h(a).bind("click.DT",b,function(b){a.blur();c(b)}).bind("keypress.DT",
b,function(a){13===a.which&&(a.preventDefault(),c(a))}).bind("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function v(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=
a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Aa(a,b){var c=[],c=Mb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function db(a){h.each({num:function(b){return Ba(b,
a)},"num-fmt":function(b){return Ba(b,a,Xa)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Xa)}},function(b,c){s.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(s.type.search[b+a]=s.type.search.html)})}function Nb(a){return function(){var b=[za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m,s,t,p,r,Ya={},Ob=/[\r\n]/g,Ca=/<.*?>/g,ac=/^[\w\+\-]/,bc=/[\w\+\-]$/,Yb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
"g"),Xa=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Pb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Qb=function(a,b){Ya[b]||(Ya[b]=RegExp(va(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Ya[b],"."):a},Za=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Qb(a,b));c&&d&&(a=a.replace(Xa,""));return!isNaN(parseFloat(a))&&isFinite(a)},Rb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===
typeof a)?null:Za(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Sb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);
return b},pa=function(a){var b=[],c,d,e=a.length,f,g=0;d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b},A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},da=/\[.*?\]$/,V=/\(\)$/,wa=h("<div>")[0],Zb=wa.textContent!==k,$b=/<.*?>/g;m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(za(this[s.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),
d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&Z(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],
h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};
this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);
(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return za(this[s.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=
s.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=s.internal;for(var e in m.ext.internal)e&&(this[e]=Nb(e));this.each(function(){var e={},e=1<d?Lb(e,a,!0):a,g=0,j,i=this.getAttribute("id"),o=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{eb(l);fb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(e,q.data()));var u=m.settings,g=0;for(j=u.length;g<j;g++){var p=u[g];if(p.nTable==
this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){g=e.bRetrieve!==k?e.bRetrieve:l.bRetrieve;if(c||g)return p.oInstance;if(e.bDestroy!==k?e.bDestroy:l.bDestroy){p.oInstance.fnDestroy();break}else{K(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){u.splice(g,1);break}}if(null===i||""===i)this.id=i="DataTables_Table_"+m.ext._unique++;var n=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:i,sTableId:i});n.nTable=this;n.oApi=b.internal;
n.oInit=e;u.push(n);n.oInstance=1===b.length?b:q.dataTable();eb(e);e.oLanguage&&Fa(e.oLanguage);e.aLengthMenu&&!e.iDisplayLength&&(e.iDisplayLength=h.isArray(e.aLengthMenu[0])?e.aLengthMenu[0][0]:e.aLengthMenu[0]);e=Lb(h.extend(!0,{},l),e);F(n.oFeatures,e,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(n,e,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu",
"sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(n.oScroll,e,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(n.oLanguage,e,"fnInfoCallback");z(n,"aoDrawCallback",
e.fnDrawCallback,"user");z(n,"aoServerParams",e.fnServerParams,"user");z(n,"aoStateSaveParams",e.fnStateSaveParams,"user");z(n,"aoStateLoadParams",e.fnStateLoadParams,"user");z(n,"aoStateLoaded",e.fnStateLoaded,"user");z(n,"aoRowCallback",e.fnRowCallback,"user");z(n,"aoRowCreatedCallback",e.fnCreatedRow,"user");z(n,"aoHeaderCallback",e.fnHeaderCallback,"user");z(n,"aoFooterCallback",e.fnFooterCallback,"user");z(n,"aoInitComplete",e.fnInitComplete,"user");z(n,"aoPreDrawCallback",e.fnPreDrawCallback,
"user");n.rowIdFn=Q(e.rowId);gb(n);i=n.oClasses;e.bJQueryUI?(h.extend(i,m.ext.oJUIClasses,e.oClasses),e.sDom===l.sDom&&"lfrtip"===l.sDom&&(n.sDom='<"H"lfr>t<"F"ip>'),n.renderer)?h.isPlainObject(n.renderer)&&!n.renderer.header&&(n.renderer.header="jqueryui"):n.renderer="jqueryui":h.extend(i,m.ext.classes,e.oClasses);q.addClass(i.sTable);n.iInitDisplayStart===k&&(n.iInitDisplayStart=e.iDisplayStart,n._iDisplayStart=e.iDisplayStart);null!==e.iDeferLoading&&(n.bDeferLoading=!0,g=h.isArray(e.iDeferLoading),
n._iRecordsDisplay=g?e.iDeferLoading[0]:e.iDeferLoading,n._iRecordsTotal=g?e.iDeferLoading[1]:e.iDeferLoading);var t=n.oLanguage;h.extend(!0,t,e.oLanguage);""!==t.sUrl&&(h.ajax({dataType:"json",url:t.sUrl,success:function(a){Fa(a);J(l.oLanguage,a);h.extend(true,t,a);ia(n)},error:function(){ia(n)}}),o=!0);null===e.asStripeClasses&&(n.asStripeClasses=[i.sStripeOdd,i.sStripeEven]);var g=n.asStripeClasses,r=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(g,function(a){return r.hasClass(a)}))&&
(h("tbody tr",this).removeClass(g.join(" ")),n.asDestroyStripes=g.slice());u=[];g=this.getElementsByTagName("thead");0!==g.length&&(fa(n.aoHeader,g[0]),u=qa(n));if(null===e.aoColumns){p=[];g=0;for(j=u.length;g<j;g++)p.push(null)}else p=e.aoColumns;g=0;for(j=p.length;g<j;g++)Ga(n,u?u[g]:null);ib(n,e.aoColumnDefs,p,function(a,b){la(n,a,b)});if(r.length){var s=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(r[0]).children("th, td").each(function(a,b){var c=n.aoColumns[a];if(c.mData===
a){var d=s(b,"sort")||s(b,"order"),e=s(b,"filter")||s(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(n,a)}}})}var w=n.oFeatures;e.bStateSave&&(w.bStateSave=!0,Kb(n,e),z(n,"aoDrawCallback",ya,"state_save"));if(e.aaSorting===k){u=n.aaSorting;g=0;for(j=u.length;g<j;g++)u[g][1]=n.aoColumns[g].asSorting[0]}xa(n);w.bSort&&z(n,"aoDrawCallback",function(){if(n.bSorted){var a=W(n),b={};h.each(a,function(a,
c){b[c.src]=c.dir});v(n,null,"order",[n,a,b]);Jb(n)}});z(n,"aoDrawCallback",function(){(n.bSorted||y(n)==="ssp"||w.bDeferRender)&&xa(n)},"sc");g=q.children("caption").each(function(){this._captionSide=q.css("caption-side")});j=q.children("thead");0===j.length&&(j=h("<thead/>").appendTo(this));n.nTHead=j[0];j=q.children("tbody");0===j.length&&(j=h("<tbody/>").appendTo(this));n.nTBody=j[0];j=q.children("tfoot");if(0===j.length&&0<g.length&&(""!==n.oScroll.sX||""!==n.oScroll.sY))j=h("<tfoot/>").appendTo(this);
0===j.length||0===j.children().length?q.addClass(i.sNoFooter):0<j.length&&(n.nTFoot=j[0],fa(n.aoFooter,n.nTFoot));if(e.aaData)for(g=0;g<e.aaData.length;g++)N(n,e.aaData[g]);else(n.bDeferLoading||"dom"==y(n))&&ma(n,h(n.nTBody).children("tr"));n.aiDisplay=n.aiDisplayMaster.slice();n.bInitialised=!0;!1===o&&ia(n)}});b=null;return this};var Tb=[],x=Array.prototype,cc=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=
h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};t=function(a,b){if(!(this instanceof t))return new t(a,b);var c=[],d=function(a){(a=cc(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=pa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};
t.extend(this,this,Tb)};m.Api=t;h.extend(t.prototype,{any:function(){return 0!==this.count()},concat:x.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(x.filter)b=x.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,
b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:x.join,indexOf:x.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,o,l=this.context,m,p,r=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var n=new t(l[g]);if("table"===b)f=c.call(n,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(n,l[g],this[g],g),f!==k&&e.push(f);
else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){p=this[g];"column-rows"===b&&(m=Da(l[g],r.opts));i=0;for(o=p.length;i<o;i++)f=p[i],f="cell"===b?c.call(n,l[g],f.row,f.column,g,i):c.call(n,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new t(l,a?e.concat.apply([],e):e),b=a.selector,b.rows=r.rows,b.cols=r.cols,b.opts=r.opts,a):this},lastIndexOf:x.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(x.map)b=
x.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:x.pop,push:x.push,reduce:x.reduce||function(a,b){return hb(this,a,b,0,this.length,1)},reduceRight:x.reduceRight||function(a,b){return hb(this,a,b,this.length-1,-1,-1)},reverse:x.reverse,selector:null,shift:x.shift,sort:x.sort,splice:x.splice,toArray:function(){return x.slice.call(this)},to$:function(){return h(this)},
toJQuery:function(){return h(this)},unique:function(){return new t(this.context,pa(this))},unshift:x.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(h.isArray(a))for(var c=
0,d=a.length;c<d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Tb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var k=f.length;i<k;i++)if(f[i].name===g){i=f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};t.registerPlural=r=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?
new t(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});r("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});r("tables().body()",
"table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});r("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});r("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});r("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",
function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});p("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),
recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ra(b,a)})});var Ub=function(a,b,c){if(c){var d=new t(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ra(a,[],function(c){na(a);for(var c=sa(a,c),d=0,e=c.length;d<e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<
a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});p("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",
function(c){Ub(c,!1===b,a)})});var $a=function(a,b,c,d,e){var f=[],g,j,i,o,l,m;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(o=b.length;i<o;i++){j=b[i]&&b[i].split?b[i].split(","):[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=s.selector[a];if(a.length){i=0;for(o=a.length;i<o;i++)f=a[i](d,e,f)}return pa(f)},ab=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",
order:"current",page:"all"},a)},bb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,
function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var e=b;return $a("row",a,function(a){var b=Pb(a);if(b!==null&&!e)return[b];var j=Da(c,e);if(b!==null&&h.inArray(b,j)!==-1)return[b];if(!a)return j;if(typeof a==="function")return h.map(j,
function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Sb(ja(c.aoData,j,"nTr"));if(a.nodeName&&h.inArray(a,b)!==-1)return[a._DT_RowIndex];if(typeof a==="string"&&a.charAt(0)==="#"){j=c.aIds[a.replace(/^#/,"")];if(j!==k)return[j.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,
"rows",function(a,b){return ja(a.aoData,b,"_aData")},1)});r("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});r("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){ea(b,c,a)})});r("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});r("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,
d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new t(c,b)});r("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,o,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(o=l.length;i<o;i++)l[i]._DT_CellIndex.row=g}oa(b.aiDisplayMaster,c);oa(b.aiDisplay,c);oa(a[d],c,!1);
Sa(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ma(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return bb(this.rows(a,b))});p("row().data()",function(a){var b=
this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=a;ea(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:N(b,a)});return this.row(b[0])});var cb=function(a,b){var c=a.context;if(c.length&&
(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Vb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new t(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];
a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=ca(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&cb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===
a)cb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ca(d),e.push(c[0]))};f(a,b);c._details&&c._details.remove();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Vb(this,
!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Vb(this,!1);return this});p(["row().child.remove()","row().child().remove()"],function(){cb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var dc=/^(.+):(name|visIdx|visible)$/,Wb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&
(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return $a("column",e,function(a){var b=Pb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Wb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(dc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});
return[m[m.length+b]]}return[$(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null})}else return h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray()},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});r("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});r("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});r("columns().data()",
"column().data()",function(){return this.iterator("column-rows",Wb,1)});r("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});r("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});r("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,
e,"anCells",b)},1)});r("columns().visible()","column().visible()",function(a,b){return this.iterator("column",function(c,d){if(a===k)return c.aoColumns[d].bVisible;var e=c.aoColumns,f=e[d],g=c.aoData,j,i,m;if(a!==k&&f.bVisible!==a){if(a){var l=h.inArray(!0,D(e,"bVisible"),d+1);j=0;for(i=g.length;j<i;j++)m=g[j].nTr,e=g[j].anCells,m&&m.insertBefore(e[d],e[l]||null)}else h(D(c.aoData,"anCells",d)).detach();f.bVisible=a;ga(c,c.aoHeader);ga(c,c.aoFooter);if(b===k||b)U(c),(c.oScroll.sX||c.oScroll.sY)&&
Z(c);v(c,null,"column-visibility",[c,d,a,b]);ya(c)}})});r("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?ba(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){U(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return $(c,b);if("fromData"===a||"toVisible"===a)return ba(c,b)}});p("column()",function(a,b){return bb(this.columns(a,
b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=ab(c),f=b.aoData,g=Da(b,e),j=Sb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,m=b.aoColumns.length,o,p,t,r,s,v;return $a("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){o=[];p=0;for(t=g.length;p<t;p++){l=g[p];for(r=0;r<m;r++){s={row:l,column:r};if(c){v=f[l];a(s,B(b,l,r),v.anCells?
v.anCells[r]:null)&&o.push(s)}else o.push(s)}}return o}return h.isPlainObject(a)?[a]:i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray()},b,e)});var d=this.columns(b,c),e=this.rows(a,c),f,g,j,i,m,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(m=d[b].length;i<m;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});r("cells().nodes()","cell().node()",function(){return this.iterator("cell",
function(a,b,c){return(a=a.aoData[b].anCells)?a[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});r("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});r("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});r("cells().indexes()","cell().index()",function(){return this.iterator("cell",
function(a,b,c){return{row:b,column:c,columnVisible:ba(a,c)}},1)});r("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){ea(b,c,a,d)})});p("cell()",function(a,b,c){return bb(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;jb(b[0],c[0].row,c[0].column,a);ea(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===
k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:h.isArray(a[0])||(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()",
"column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ha(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});r("columns().search()","column().search()",function(a,
b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ha(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?
this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){ya(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:
null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new t(c):c};m.util={throttle:ua,escapeRegex:va};m.camelToHungarian=J;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);
a[0].match(/\.dt\b/)||(a[0]+=".dt");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",function(a){na(a)})});p("settings()",function(){return new t(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=
b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),p;b.bDestroying=!0;v(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.unbind(".DT").find(":not(tbody *)").unbind(".DT");h(E).unbind(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];xa(b);
h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=
b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=Q(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);
return a.replace("%d",c)});m.version="1.10.10";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,
sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,
bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+
a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},
oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},
m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],
aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",
iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?
1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};
m.ext=s={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(s,{afnFiltering:s.search,aTypes:s.type.detect,ofnSearch:s.type.search,oSort:s.type.order,afnSortData:s.order,aoFeatures:s.feature,oApi:s.internal,oStdClasses:s.classes,
oPagination:s.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",
sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",
sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Xb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",
sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Xb+" ui-corner-tl ui-corner-tr",sJUIFooter:Xb+
" ui-corner-bl ui-corner-br"});var Mb=m.ext.pager;h.extend(Mb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[Aa(a,b)]},simple_numbers:function(a,b){return["previous",Aa(a,b),"next"]},full_numbers:function(a,b){return["first","previous",Aa(a,b),"next","last"]},_numbers:Aa,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||
{},k,l,m=0,p=function(b,d){var n,r,t,s,v=function(b){Ta(a,b.data.action,true)};n=0;for(r=d.length;n<r;n++){s=d[n];if(h.isArray(s)){t=h("<"+(s.DT_el||"div")+"/>").appendTo(b);p(t,s)}else{k=null;l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":k=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":k=j.sPrevious;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":k=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":k=
j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:k=s+1;l=e===s?g.sPageButtonActive:""}if(k!==null){t=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"aria-label":i[s],"data-dt-idx":m,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(k).appendTo(b);Wa(t,{action:s},v);m++}}}},r;try{r=h(b).find(H.activeElement).data("dt-idx")}catch(n){}p(h(b).empty(),d);r&&h(b).find("[data-dt-idx="+r+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=
b.oLanguage.sDecimal;return Za(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&(!ac.test(a)||!bc.test(a)))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":
null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Ob," ").replace(Ca,""):""},string:function(a){return M(a)?a:"string"===typeof a?a.replace(Ob," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Qb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(s.type.order,{"date-pre":function(a){return Date.parse(a)||0},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():
a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});db("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,
b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:
h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return f;f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):
a}}}};h.extend(m.ext.internal,{_fnExternApiFunc:Nb,_fnBuildAjax:ra,_fnAjaxUpdate:lb,_fnAjaxParameters:ub,_fnAjaxUpdateDraw:vb,_fnAjaxDataSrc:sa,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:U,_fnVisibleToColumnIndex:$,_fnColumnIndexToVisible:ba,_fnVisbleColumns:ca,_fnGetColumns:aa,_fnColumnTypes:Ia,_fnApplyColumnDefs:ib,_fnHungarianMap:Y,_fnCamelToHungarian:J,_fnLanguageCompat:Fa,_fnBrowserDetect:gb,_fnAddData:N,_fnAddTr:ma,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:
null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:jb,_fnSplitObjNotation:La,_fnGetObjectDataFn:Q,_fnSetObjectDataFn:R,_fnGetDataMaster:Ma,_fnClearTable:na,_fnDeleteIndex:oa,_fnInvalidate:ea,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:kb,_fnDrawHead:ga,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:nb,_fnDetectHeader:fa,_fnGetUniqueThs:qa,_fnFeatureHtmlFilter:pb,_fnFilterComplete:ha,_fnFilterCustom:yb,_fnFilterColumn:xb,_fnFilter:wb,_fnFilterCreateSearch:Qa,
_fnEscapeRegex:va,_fnFilterData:zb,_fnFeatureHtmlInfo:sb,_fnUpdateInfo:Cb,_fnInfoMacros:Db,_fnInitialise:ia,_fnInitComplete:ta,_fnLengthChange:Ra,_fnFeatureHtmlLength:ob,_fnFeatureHtmlPaginate:tb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:qb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:rb,_fnScrollDraw:Z,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:ua,_fnConvertToWidth:Fb,_fnGetWidestNode:Gb,_fnGetMaxLenString:Hb,_fnStringToCss:w,_fnSortFlatten:W,_fnSort:mb,_fnSortAria:Jb,_fnSortListener:Va,
_fnSortAttachListener:Oa,_fnSortingClasses:xa,_fnSortData:Ib,_fnSaveState:ya,_fnLoadState:Kb,_fnSettingsFromNode:za,_fnLog:K,_fnMap:F,_fnBindAction:Wa,_fnCallbackReg:z,_fnCallbackFire:v,_fnLengthOverflow:Sa,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});

/*! DataTables Bootstrap 3 integration
 * ©2011-2015 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for Bootstrap 3. This requires Bootstrap 3 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See http://datatables.net/manual/styling/bootstrap
 * for further information.
 */
(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				// Require DataTables, which attaches to jQuery, including
				// jQuery if needed and have a $ property so we can access the
				// jQuery object that is used
				$ = require('datatables.net')(root, $).$;
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


/* Set the defaults for DataTables initialisation */
$.extend( true, DataTable.defaults, {
	dom:
		"<'row'<'col-sm-6'l><'col-sm-6'f>>" +
		"<'row'<'col-sm-12'tr>>" +
		"<'row'<'col-sm-5'i><'col-sm-7'p>>",
	renderer: 'bootstrap'
} );


/* Default class modification */
$.extend( DataTable.ext.classes, {
	sWrapper:      "dataTables_wrapper form-inline dt-bootstrap",
	sFilterInput:  "form-control input-sm",
	sLengthSelect: "form-control input-sm",
	sProcessing:   "dataTables_processing panel panel-default"
} );


/* Bootstrap paging button renderer */
DataTable.ext.renderer.pageButton.bootstrap = function ( settings, host, idx, buttons, page, pages ) {
	var api     = new DataTable.Api( settings );
	var classes = settings.oClasses;
	var lang    = settings.oLanguage.oPaginate;
	var aria = settings.oLanguage.oAria.paginate || {};
	var btnDisplay, btnClass, counter=0;

	var attach = function( container, buttons ) {
		var i, ien, node, button;
		var clickHandler = function ( e ) {
			e.preventDefault();
			if ( !$(e.currentTarget).hasClass('disabled') && api.page() != e.data.action ) {
				api.page( e.data.action ).draw( 'page' );
			}
		};

		for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
			button = buttons[i];

			if ( $.isArray( button ) ) {
				attach( container, button );
			}
			else {
				btnDisplay = '';
				btnClass = '';

				switch ( button ) {
					case 'ellipsis':
						btnDisplay = '&#x2026;';
						btnClass = 'disabled';
						break;

					case 'first':
						btnDisplay = lang.sFirst;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'previous':
						btnDisplay = lang.sPrevious;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'next':
						btnDisplay = lang.sNext;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					case 'last':
						btnDisplay = lang.sLast;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					default:
						btnDisplay = button + 1;
						btnClass = page === button ?
							'active' : '';
						break;
				}

				if ( btnDisplay ) {
					node = $('<li>', {
							'class': classes.sPageButton+' '+btnClass,
							'id': idx === 0 && typeof button === 'string' ?
								settings.sTableId +'_'+ button :
								null
						} )
						.append( $('<a>', {
								'href': '#',
								'aria-controls': settings.sTableId,
								'aria-label': aria[ button ],
								'data-dt-idx': counter,
								'tabindex': settings.iTabIndex
							} )
							.html( btnDisplay )
						)
						.appendTo( container );

					settings.oApi._fnBindAction(
						node, {action: button}, clickHandler
					);

					counter++;
				}
			}
		}
	};

	// IE9 throws an 'unknown error' if document.activeElement is used
	// inside an iframe or frame. 
	var activeEl;

	try {
		// Because this approach is destroying and recreating the paging
		// elements, focus is lost on the select button which is bad for
		// accessibility. So we want to restore focus once the draw has
		// completed
		activeEl = $(host).find(document.activeElement).data('dt-idx');
	}
	catch (e) {}

	attach(
		$(host).empty().html('<ul class="pagination"/>').children('ul'),
		buttons
	);

	if ( activeEl ) {
		$(host).find( '[data-dt-idx='+activeEl+']' ).focus();
	}
};


/*
 * TableTools Bootstrap compatibility
 * Required TableTools 2.1+
 */
if ( DataTable.TableTools ) {
	// Set the classes that TableTools uses to something suitable for Bootstrap
	$.extend( true, DataTable.TableTools.classes, {
		"container": "DTTT btn-group",
		"buttons": {
			"normal": "btn btn-default",
			"disabled": "disabled"
		},
		"collection": {
			"container": "DTTT_dropdown dropdown-menu",
			"buttons": {
				"normal": "",
				"disabled": "disabled"
			}
		},
		"print": {
			"info": "DTTT_print_info"
		},
		"select": {
			"row": "active"
		}
	} );

	// Have the collection use a bootstrap compatible drop down
	$.extend( true, DataTable.TableTools.DEFAULTS.oTags, {
		"collection": {
			"container": "ul",
			"button": "li",
			"liner": "a"
		}
	} );
}


return DataTable;
}));
/*
Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){window.CKEDITOR&&window.CKEDITOR.dom||(window.CKEDITOR||(window.CKEDITOR=function(){var a=/(^|.*[\\\/])ckeditor\.js(?:\?.*|;.*)?$/i,e={timestamp:"F969",version:"4.5.4 (Standard)",revision:"d4677a3",rnd:Math.floor(900*Math.random())+100,_:{pending:[],basePathSrcPattern:a},status:"unloaded",basePath:function(){var b=window.CKEDITOR_BASEPATH||"";if(!b)for(var c=document.getElementsByTagName("script"),e=0;e<c.length;e++){var f=c[e].src.match(a);if(f){b=f[1];break}}-1==b.indexOf(":/")&&"//"!=
b.slice(0,2)&&(b=0===b.indexOf("/")?location.href.match(/^.*?:\/\/[^\/]*/)[0]+b:location.href.match(/^[^\?]*\/(?:)/)[0]+b);if(!b)throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';return b}(),getUrl:function(a){-1==a.indexOf(":/")&&0!==a.indexOf("/")&&(a=this.basePath+a);this.timestamp&&"/"!=a.charAt(a.length-1)&&!/[&?]t=/.test(a)&&(a+=(0<=a.indexOf("?")?"\x26":"?")+"t\x3d"+this.timestamp);
return a},domReady:function(){function a(){try{document.addEventListener?(document.removeEventListener("DOMContentLoaded",a,!1),b()):document.attachEvent&&"complete"===document.readyState&&(document.detachEvent("onreadystatechange",a),b())}catch(f){}}function b(){for(var a;a=c.shift();)a()}var c=[];return function(f){function b(){try{document.documentElement.doScroll("left")}catch(g){setTimeout(b,1);return}a()}c.push(f);"complete"===document.readyState&&setTimeout(a,1);if(1==c.length)if(document.addEventListener)document.addEventListener("DOMContentLoaded",
a,!1),window.addEventListener("load",a,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",a);window.attachEvent("onload",a);f=!1;try{f=!window.frameElement}catch(k){}document.documentElement.doScroll&&f&&b()}}}()},b=window.CKEDITOR_GETURL;if(b){var c=e.getUrl;e.getUrl=function(a){return b.call(e,a)||c.call(e,a)}}return e}()),CKEDITOR.event||(CKEDITOR.event=function(){},CKEDITOR.event.implementOn=function(a){var e=CKEDITOR.event.prototype,b;for(b in e)null==a[b]&&(a[b]=e[b])},
CKEDITOR.event.prototype=function(){function a(a){var d=e(this);return d[a]||(d[a]=new b(a))}var e=function(a){a=a.getPrivate&&a.getPrivate()||a._||(a._={});return a.events||(a.events={})},b=function(a){this.name=a;this.listeners=[]};b.prototype={getListenerIndex:function(a){for(var b=0,m=this.listeners;b<m.length;b++)if(m[b].fn==a)return b;return-1}};return{define:function(b,d){var m=a.call(this,b);CKEDITOR.tools.extend(m,d,!0)},on:function(b,d,m,e,f){function h(a,g,f,h){a={name:b,sender:this,editor:a,
data:g,listenerData:e,stop:f,cancel:h,removeListener:k};return!1===d.call(m,a)?!1:a.data}function k(){n.removeListener(b,d)}var g=a.call(this,b);if(0>g.getListenerIndex(d)){g=g.listeners;m||(m=this);isNaN(f)&&(f=10);var n=this;h.fn=d;h.priority=f;for(var u=g.length-1;0<=u;u--)if(g[u].priority<=f)return g.splice(u+1,0,h),{removeListener:k};g.unshift(h)}return{removeListener:k}},once:function(){var a=Array.prototype.slice.call(arguments),b=a[1];a[1]=function(a){a.removeListener();return b.apply(this,
arguments)};return this.on.apply(this,a)},capture:function(){CKEDITOR.event.useCapture=1;var a=this.on.apply(this,arguments);CKEDITOR.event.useCapture=0;return a},fire:function(){var a=0,b=function(){a=1},m=0,l=function(){m=1};return function(f,h,k){var g=e(this)[f];f=a;var n=m;a=m=0;if(g){var u=g.listeners;if(u.length)for(var u=u.slice(0),q,v=0;v<u.length;v++){if(g.errorProof)try{q=u[v].call(this,k,h,b,l)}catch(t){}else q=u[v].call(this,k,h,b,l);!1===q?m=1:"undefined"!=typeof q&&(h=q);if(a||m)break}}h=
m?!1:"undefined"==typeof h?!0:h;a=f;m=n;return h}}(),fireOnce:function(a,b,m){b=this.fire(a,b,m);delete e(this)[a];return b},removeListener:function(a,b){var m=e(this)[a];if(m){var l=m.getListenerIndex(b);0<=l&&m.listeners.splice(l,1)}},removeAllListeners:function(){var a=e(this),b;for(b in a)delete a[b]},hasListeners:function(a){return(a=e(this)[a])&&0<a.listeners.length}}}()),CKEDITOR.editor||(CKEDITOR.editor=function(){CKEDITOR._.pending.push([this,arguments]);CKEDITOR.event.call(this)},CKEDITOR.editor.prototype.fire=
function(a,e){a in{instanceReady:1,loaded:1}&&(this[a]=!0);return CKEDITOR.event.prototype.fire.call(this,a,e,this)},CKEDITOR.editor.prototype.fireOnce=function(a,e){a in{instanceReady:1,loaded:1}&&(this[a]=!0);return CKEDITOR.event.prototype.fireOnce.call(this,a,e,this)},CKEDITOR.event.implementOn(CKEDITOR.editor.prototype)),CKEDITOR.env||(CKEDITOR.env=function(){var a=navigator.userAgent.toLowerCase(),e=a.match(/edge[ \/](\d+.?\d*)/),b=-1<a.indexOf("trident/"),b=!(!e&&!b),b={ie:b,edge:!!e,webkit:!b&&
-1<a.indexOf(" applewebkit/"),air:-1<a.indexOf(" adobeair/"),mac:-1<a.indexOf("macintosh"),quirks:"BackCompat"==document.compatMode&&(!document.documentMode||10>document.documentMode),mobile:-1<a.indexOf("mobile"),iOS:/(ipad|iphone|ipod)/.test(a),isCustomDomain:function(){if(!this.ie)return!1;var a=document.domain,b=window.location.hostname;return a!=b&&a!="["+b+"]"},secure:"https:"==location.protocol};b.gecko="Gecko"==navigator.product&&!b.webkit&&!b.ie;b.webkit&&(-1<a.indexOf("chrome")?b.chrome=
!0:b.safari=!0);var c=0;b.ie&&(c=e?parseFloat(e[1]):b.quirks||!document.documentMode?parseFloat(a.match(/msie (\d+)/)[1]):document.documentMode,b.ie9Compat=9==c,b.ie8Compat=8==c,b.ie7Compat=7==c,b.ie6Compat=7>c||b.quirks);b.gecko&&(e=a.match(/rv:([\d\.]+)/))&&(e=e[1].split("."),c=1E4*e[0]+100*(e[1]||0)+1*(e[2]||0));b.air&&(c=parseFloat(a.match(/ adobeair\/(\d+)/)[1]));b.webkit&&(c=parseFloat(a.match(/ applewebkit\/(\d+)/)[1]));b.version=c;b.isCompatible=!(b.ie&&7>c)&&!(b.gecko&&4E4>c)&&!(b.webkit&&
534>c);b.hidpi=2<=window.devicePixelRatio;b.needsBrFiller=b.gecko||b.webkit||b.ie&&10<c;b.needsNbspFiller=b.ie&&11>c;b.cssClass="cke_browser_"+(b.ie?"ie":b.gecko?"gecko":b.webkit?"webkit":"unknown");b.quirks&&(b.cssClass+=" cke_browser_quirks");b.ie&&(b.cssClass+=" cke_browser_ie"+(b.quirks?"6 cke_browser_iequirks":b.version));b.air&&(b.cssClass+=" cke_browser_air");b.iOS&&(b.cssClass+=" cke_browser_ios");b.hidpi&&(b.cssClass+=" cke_hidpi");return b}()),"unloaded"==CKEDITOR.status&&function(){CKEDITOR.event.implementOn(CKEDITOR);
CKEDITOR.loadFullCore=function(){if("basic_ready"!=CKEDITOR.status)CKEDITOR.loadFullCore._load=1;else{delete CKEDITOR.loadFullCore;var a=document.createElement("script");a.type="text/javascript";a.src=CKEDITOR.basePath+"ckeditor.js";document.getElementsByTagName("head")[0].appendChild(a)}};CKEDITOR.loadFullCoreTimeout=0;CKEDITOR.add=function(a){(this._.pending||(this._.pending=[])).push(a)};(function(){CKEDITOR.domReady(function(){var a=CKEDITOR.loadFullCore,e=CKEDITOR.loadFullCoreTimeout;a&&(CKEDITOR.status=
"basic_ready",a&&a._load?a():e&&setTimeout(function(){CKEDITOR.loadFullCore&&CKEDITOR.loadFullCore()},1E3*e))})})();CKEDITOR.status="basic_loaded"}(),"use strict",CKEDITOR.VERBOSITY_WARN=1,CKEDITOR.VERBOSITY_ERROR=2,CKEDITOR.verbosity=CKEDITOR.VERBOSITY_WARN|CKEDITOR.VERBOSITY_ERROR,CKEDITOR.warn=function(a,e){CKEDITOR.verbosity&CKEDITOR.VERBOSITY_WARN&&CKEDITOR.fire("log",{type:"warn",errorCode:a,additionalData:e})},CKEDITOR.error=function(a,e){CKEDITOR.verbosity&CKEDITOR.VERBOSITY_ERROR&&CKEDITOR.fire("log",
{type:"error",errorCode:a,additionalData:e})},CKEDITOR.on("log",function(a){if(window.console&&window.console.log){var e=console[a.data.type]?a.data.type:"log",b=a.data.errorCode;if(a=a.data.additionalData)console[e]("[CKEDITOR] "+b,a);else console[e]("[CKEDITOR] "+b);console[e]("[CKEDITOR] For more information go to http://docs.ckeditor.com/#!/guide/dev_errors-section-"+b)}},null,null,999),CKEDITOR.dom={},function(){var a=[],e=CKEDITOR.env.gecko?"-moz-":CKEDITOR.env.webkit?"-webkit-":CKEDITOR.env.ie?
"-ms-":"",b=/&/g,c=/>/g,d=/</g,m=/"/g,l=/&(lt|gt|amp|quot|nbsp|shy|#\d{1,5});/g,f={lt:"\x3c",gt:"\x3e",amp:"\x26",quot:'"',nbsp:" ",shy:"­"},h=function(a,g){return"#"==g[0]?String.fromCharCode(parseInt(g.slice(1),10)):f[g]};CKEDITOR.on("reset",function(){a=[]});CKEDITOR.tools={arrayCompare:function(a,g){if(!a&&!g)return!0;if(!a||!g||a.length!=g.length)return!1;for(var b=0;b<a.length;b++)if(a[b]!=g[b])return!1;return!0},getIndex:function(a,g){for(var b=0;b<a.length;++b)if(g(a[b]))return b;return-1},
clone:function(a){var g;if(a&&a instanceof Array){g=[];for(var b=0;b<a.length;b++)g[b]=CKEDITOR.tools.clone(a[b]);return g}if(null===a||"object"!=typeof a||a instanceof String||a instanceof Number||a instanceof Boolean||a instanceof Date||a instanceof RegExp||a.nodeType||a.window===a)return a;g=new a.constructor;for(b in a)g[b]=CKEDITOR.tools.clone(a[b]);return g},capitalize:function(a,g){return a.charAt(0).toUpperCase()+(g?a.slice(1):a.slice(1).toLowerCase())},extend:function(a){var g=arguments.length,
b,f;"boolean"==typeof(b=arguments[g-1])?g--:"boolean"==typeof(b=arguments[g-2])&&(f=arguments[g-1],g-=2);for(var h=1;h<g;h++){var c=arguments[h],d;for(d in c)if(!0===b||null==a[d])if(!f||d in f)a[d]=c[d]}return a},prototypedCopy:function(a){var g=function(){};g.prototype=a;return new g},copy:function(a){var g={},b;for(b in a)g[b]=a[b];return g},isArray:function(a){return"[object Array]"==Object.prototype.toString.call(a)},isEmpty:function(a){for(var g in a)if(a.hasOwnProperty(g))return!1;return!0},
cssVendorPrefix:function(a,g,b){if(b)return e+a+":"+g+";"+a+":"+g;b={};b[a]=g;b[e+a]=g;return b},cssStyleToDomStyle:function(){var a=document.createElement("div").style,g="undefined"!=typeof a.cssFloat?"cssFloat":"undefined"!=typeof a.styleFloat?"styleFloat":"float";return function(a){return"float"==a?g:a.replace(/-./g,function(a){return a.substr(1).toUpperCase()})}}(),buildStyleHtml:function(a){a=[].concat(a);for(var g,b=[],f=0;f<a.length;f++)if(g=a[f])/@import|[{}]/.test(g)?b.push("\x3cstyle\x3e"+
g+"\x3c/style\x3e"):b.push('\x3clink type\x3d"text/css" rel\x3dstylesheet href\x3d"'+g+'"\x3e');return b.join("")},htmlEncode:function(a){return void 0===a||null===a?"":String(a).replace(b,"\x26amp;").replace(c,"\x26gt;").replace(d,"\x26lt;")},htmlDecode:function(a){return a.replace(l,h)},htmlEncodeAttr:function(a){return CKEDITOR.tools.htmlEncode(a).replace(m,"\x26quot;")},htmlDecodeAttr:function(a){return CKEDITOR.tools.htmlDecode(a)},transformPlainTextToHtml:function(a,g){var b=g==CKEDITOR.ENTER_BR,
f=this.htmlEncode(a.replace(/\r\n/g,"\n")),f=f.replace(/\t/g,"\x26nbsp;\x26nbsp; \x26nbsp;"),h=g==CKEDITOR.ENTER_P?"p":"div";if(!b){var c=/\n{2}/g;if(c.test(f))var d="\x3c"+h+"\x3e",m="\x3c/"+h+"\x3e",f=d+f.replace(c,function(){return m+d})+m}f=f.replace(/\n/g,"\x3cbr\x3e");b||(f=f.replace(new RegExp("\x3cbr\x3e(?\x3d\x3c/"+h+"\x3e)"),function(a){return CKEDITOR.tools.repeat(a,2)}));f=f.replace(/^ | $/g,"\x26nbsp;");return f=f.replace(/(>|\s) /g,function(a,g){return g+"\x26nbsp;"}).replace(/ (?=<)/g,
"\x26nbsp;")},getNextNumber:function(){var a=0;return function(){return++a}}(),getNextId:function(){return"cke_"+this.getNextNumber()},getUniqueId:function(){for(var a="e",g=0;8>g;g++)a+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return a},override:function(a,g){var b=g(a);b.prototype=a.prototype;return b},setTimeout:function(a,g,b,f,h){h||(h=window);b||(b=h);return h.setTimeout(function(){f?a.apply(b,[].concat(f)):a.apply(b)},g||0)},trim:function(){var a=/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;
return function(g){return g.replace(a,"")}}(),ltrim:function(){var a=/^[ \t\n\r]+/g;return function(g){return g.replace(a,"")}}(),rtrim:function(){var a=/[ \t\n\r]+$/g;return function(g){return g.replace(a,"")}}(),indexOf:function(a,g){if("function"==typeof g)for(var b=0,f=a.length;b<f;b++){if(g(a[b]))return b}else{if(a.indexOf)return a.indexOf(g);b=0;for(f=a.length;b<f;b++)if(a[b]===g)return b}return-1},search:function(a,g){var b=CKEDITOR.tools.indexOf(a,g);return 0<=b?a[b]:null},bind:function(a,
g){return function(){return a.apply(g,arguments)}},createClass:function(a){var g=a.$,b=a.base,f=a.privates||a._,h=a.proto;a=a.statics;!g&&(g=function(){b&&this.base.apply(this,arguments)});if(f)var c=g,g=function(){var a=this._||(this._={}),g;for(g in f){var b=f[g];a[g]="function"==typeof b?CKEDITOR.tools.bind(b,this):b}c.apply(this,arguments)};b&&(g.prototype=this.prototypedCopy(b.prototype),g.prototype.constructor=g,g.base=b,g.baseProto=b.prototype,g.prototype.base=function(){this.base=b.prototype.base;
b.apply(this,arguments);this.base=arguments.callee});h&&this.extend(g.prototype,h,!0);a&&this.extend(g,a,!0);return g},addFunction:function(b,g){return a.push(function(){return b.apply(g||this,arguments)})-1},removeFunction:function(b){a[b]=null},callFunction:function(b){var g=a[b];return g&&g.apply(window,Array.prototype.slice.call(arguments,1))},cssLength:function(){var a=/^-?\d+\.?\d*px$/,g;return function(b){g=CKEDITOR.tools.trim(b+"")+"px";return a.test(g)?g:b||""}}(),convertToPx:function(){var a;
return function(g){a||(a=CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"\x3e\x3c/div\x3e',CKEDITOR.document),CKEDITOR.document.getBody().append(a));return/%$/.test(g)?g:(a.setStyle("width",g),a.$.clientWidth)}}(),repeat:function(a,g){return Array(g+1).join(a)},tryThese:function(){for(var a,g=0,b=arguments.length;g<b;g++){var f=arguments[g];try{a=f();break}catch(h){}}return a},genKey:function(){return Array.prototype.slice.call(arguments).join("-")},
defer:function(a){return function(){var g=arguments,b=this;window.setTimeout(function(){a.apply(b,g)},0)}},normalizeCssText:function(a,g){var b=[],f,h=CKEDITOR.tools.parseCssText(a,!0,g);for(f in h)b.push(f+":"+h[f]);b.sort();return b.length?b.join(";")+";":""},convertRgbToHex:function(a){return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi,function(a,b,f,h){a=[b,f,h];for(b=0;3>b;b++)a[b]=("0"+parseInt(a[b],10).toString(16)).slice(-2);return"#"+a.join("")})},parseCssText:function(a,
g,b){var f={};b&&(b=new CKEDITOR.dom.element("span"),b.setAttribute("style",a),a=CKEDITOR.tools.convertRgbToHex(b.getAttribute("style")||""));if(!a||";"==a)return f;a.replace(/&quot;/g,'"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,b,h){g&&(b=b.toLowerCase(),"font-family"==b&&(h=h.toLowerCase().replace(/["']/g,"").replace(/\s*,\s*/g,",")),h=CKEDITOR.tools.trim(h));f[b]=h});return f},writeCssText:function(a,g){var b,f=[];for(b in a)f.push(b+":"+a[b]);g&&f.sort();return f.join("; ")},
objectCompare:function(a,g,b){var f;if(!a&&!g)return!0;if(!a||!g)return!1;for(f in a)if(a[f]!=g[f])return!1;if(!b)for(f in g)if(a[f]!=g[f])return!1;return!0},objectKeys:function(a){var g=[],b;for(b in a)g.push(b);return g},convertArrayToObject:function(a,g){var b={};1==arguments.length&&(g=!0);for(var f=0,h=a.length;f<h;++f)b[a[f]]=g;return b},fixDomain:function(){for(var a;;)try{a=window.parent.document.domain;break}catch(g){a=a?a.replace(/.+?(?:\.|$)/,""):document.domain;if(!a)break;document.domain=
a}return!!a},eventsBuffer:function(a,g,b){function f(){c=(new Date).getTime();h=!1;b?g.call(b):g()}var h,c=0;return{input:function(){if(!h){var g=(new Date).getTime()-c;g<a?h=setTimeout(f,a-g):f()}},reset:function(){h&&clearTimeout(h);h=c=0}}},enableHtml5Elements:function(a,g){for(var b="abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video".split(" "),f=b.length,h;f--;)h=a.createElement(b[f]),
g&&a.appendChild(h)},checkIfAnyArrayItemMatches:function(a,g){for(var b=0,f=a.length;b<f;++b)if(a[b].match(g))return!0;return!1},checkIfAnyObjectPropertyMatches:function(a,g){for(var b in a)if(b.match(g))return!0;return!1},transparentImageData:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw\x3d\x3d"}}(),CKEDITOR.dtd=function(){var a=CKEDITOR.tools.extend,e=function(a,g){for(var b=CKEDITOR.tools.clone(a),f=1;f<arguments.length;f++){g=arguments[f];for(var h in g)delete b[h]}return b},
b={},c={},d={address:1,article:1,aside:1,blockquote:1,details:1,div:1,dl:1,fieldset:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,menu:1,nav:1,ol:1,p:1,pre:1,section:1,table:1,ul:1},m={command:1,link:1,meta:1,noscript:1,script:1,style:1},l={},f={"#":1},h={center:1,dir:1,noframes:1};a(b,{a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,
label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,u:1,"var":1,video:1,wbr:1},f,{acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1});a(c,d,b,h);e={a:e(b,{a:1,button:1}),abbr:b,address:c,area:l,article:c,aside:c,audio:a({source:1,track:1},c),b:b,base:l,bdi:b,bdo:b,blockquote:c,body:c,br:l,button:e(b,{a:1,button:1}),canvas:b,caption:c,cite:b,code:b,col:l,colgroup:{col:1},
command:l,datalist:a({option:1},b),dd:c,del:b,details:a({summary:1},c),dfn:b,div:c,dl:{dt:1,dd:1},dt:c,em:b,embed:l,fieldset:a({legend:1},c),figcaption:c,figure:a({figcaption:1},c),footer:c,form:c,h1:b,h2:b,h3:b,h4:b,h5:b,h6:b,head:a({title:1,base:1},m),header:c,hgroup:{h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},hr:l,html:a({head:1,body:1},c,m),i:b,iframe:f,img:l,input:l,ins:b,kbd:b,keygen:l,label:b,legend:b,li:c,link:l,main:c,map:c,mark:b,menu:a({li:1},c),meta:l,meter:e(b,{meter:1}),nav:c,noscript:a({link:1,
meta:1,style:1},b),object:a({param:1},b),ol:{li:1},optgroup:{option:1},option:f,output:b,p:b,param:l,pre:b,progress:e(b,{progress:1}),q:b,rp:b,rt:b,ruby:a({rp:1,rt:1},b),s:b,samp:b,script:f,section:c,select:{optgroup:1,option:1},small:b,source:l,span:b,strong:b,style:f,sub:b,summary:a({h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},b),sup:b,table:{caption:1,colgroup:1,thead:1,tfoot:1,tbody:1,tr:1},tbody:{tr:1},td:c,textarea:f,tfoot:{tr:1},th:c,thead:{tr:1},time:e(b,{time:1}),title:f,tr:{th:1,td:1},track:l,u:b,ul:{li:1},
"var":b,video:a({source:1,track:1},c),wbr:l,acronym:b,applet:a({param:1},c),basefont:l,big:b,center:c,dialog:l,dir:{li:1},font:b,isindex:l,noframes:c,strike:b,tt:b};a(e,{$block:a({audio:1,dd:1,dt:1,figcaption:1,li:1,video:1},d,h),$blockLimit:{article:1,aside:1,audio:1,body:1,caption:1,details:1,dir:1,div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1,form:1,header:1,hgroup:1,main:1,menu:1,nav:1,ol:1,section:1,table:1,td:1,th:1,tr:1,ul:1,video:1},$cdata:{script:1,style:1},$editable:{address:1,article:1,
aside:1,blockquote:1,body:1,details:1,div:1,fieldset:1,figcaption:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,main:1,nav:1,p:1,pre:1,section:1},$empty:{area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1},$inline:b,$list:{dl:1,ol:1,ul:1},$listItem:{dd:1,dt:1,li:1},$nonBodyContent:a({body:1,head:1,html:1},e.head),$nonEditable:{applet:1,audio:1,button:1,embed:1,iframe:1,map:1,object:1,
option:1,param:1,script:1,textarea:1,video:1},$object:{applet:1,audio:1,button:1,hr:1,iframe:1,img:1,input:1,object:1,select:1,table:1,textarea:1,video:1},$removeEmpty:{abbr:1,acronym:1,b:1,bdi:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,mark:1,meter:1,output:1,q:1,ruby:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,time:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,
td:1,tfoot:1,th:1,thead:1,tr:1},$transparent:{a:1,audio:1,canvas:1,del:1,ins:1,map:1,noscript:1,object:1,video:1},$intermediate:{caption:1,colgroup:1,dd:1,dt:1,figcaption:1,legend:1,li:1,optgroup:1,option:1,rp:1,rt:1,summary:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1}});return e}(),CKEDITOR.dom.event=function(a){this.$=a},CKEDITOR.dom.event.prototype={getKey:function(){return this.$.keyCode||this.$.which},getKeystroke:function(){var a=this.getKey();if(this.$.ctrlKey||this.$.metaKey)a+=CKEDITOR.CTRL;
this.$.shiftKey&&(a+=CKEDITOR.SHIFT);this.$.altKey&&(a+=CKEDITOR.ALT);return a},preventDefault:function(a){var e=this.$;e.preventDefault?e.preventDefault():e.returnValue=!1;a&&this.stopPropagation()},stopPropagation:function(){var a=this.$;a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},getTarget:function(){var a=this.$.target||this.$.srcElement;return a?new CKEDITOR.dom.node(a):null},getPhase:function(){return this.$.eventPhase||2},getPageOffset:function(){var a=this.getTarget().getDocument().$;
return{x:this.$.pageX||this.$.clientX+(a.documentElement.scrollLeft||a.body.scrollLeft),y:this.$.pageY||this.$.clientY+(a.documentElement.scrollTop||a.body.scrollTop)}}},CKEDITOR.CTRL=1114112,CKEDITOR.SHIFT=2228224,CKEDITOR.ALT=4456448,CKEDITOR.EVENT_PHASE_CAPTURING=1,CKEDITOR.EVENT_PHASE_AT_TARGET=2,CKEDITOR.EVENT_PHASE_BUBBLING=3,CKEDITOR.dom.domObject=function(a){a&&(this.$=a)},CKEDITOR.dom.domObject.prototype=function(){var a=function(a,b){return function(c){"undefined"!=typeof CKEDITOR&&a.fire(b,
new CKEDITOR.dom.event(c))}};return{getPrivate:function(){var a;(a=this.getCustomData("_"))||this.setCustomData("_",a={});return a},on:function(e){var b=this.getCustomData("_cke_nativeListeners");b||(b={},this.setCustomData("_cke_nativeListeners",b));b[e]||(b=b[e]=a(this,e),this.$.addEventListener?this.$.addEventListener(e,b,!!CKEDITOR.event.useCapture):this.$.attachEvent&&this.$.attachEvent("on"+e,b));return CKEDITOR.event.prototype.on.apply(this,arguments)},removeListener:function(a){CKEDITOR.event.prototype.removeListener.apply(this,
arguments);if(!this.hasListeners(a)){var b=this.getCustomData("_cke_nativeListeners"),c=b&&b[a];c&&(this.$.removeEventListener?this.$.removeEventListener(a,c,!1):this.$.detachEvent&&this.$.detachEvent("on"+a,c),delete b[a])}},removeAllListeners:function(){var a=this.getCustomData("_cke_nativeListeners"),b;for(b in a){var c=a[b];this.$.detachEvent?this.$.detachEvent("on"+b,c):this.$.removeEventListener&&this.$.removeEventListener(b,c,!1);delete a[b]}CKEDITOR.event.prototype.removeAllListeners.call(this)}}}(),
function(a){var e={};CKEDITOR.on("reset",function(){e={}});a.equals=function(a){try{return a&&a.$===this.$}catch(c){return!1}};a.setCustomData=function(a,c){var d=this.getUniqueId();(e[d]||(e[d]={}))[a]=c;return this};a.getCustomData=function(a){var c=this.$["data-cke-expando"];return(c=c&&e[c])&&a in c?c[a]:null};a.removeCustomData=function(a){var c=this.$["data-cke-expando"],c=c&&e[c],d,m;c&&(d=c[a],m=a in c,delete c[a]);return m?d:null};a.clearCustomData=function(){this.removeAllListeners();var a=
this.$["data-cke-expando"];a&&delete e[a]};a.getUniqueId=function(){return this.$["data-cke-expando"]||(this.$["data-cke-expando"]=CKEDITOR.tools.getNextNumber())};CKEDITOR.event.implementOn(a)}(CKEDITOR.dom.domObject.prototype),CKEDITOR.dom.node=function(a){return a?new CKEDITOR.dom[a.nodeType==CKEDITOR.NODE_DOCUMENT?"document":a.nodeType==CKEDITOR.NODE_ELEMENT?"element":a.nodeType==CKEDITOR.NODE_TEXT?"text":a.nodeType==CKEDITOR.NODE_COMMENT?"comment":a.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT?
"documentFragment":"domObject"](a):this},CKEDITOR.dom.node.prototype=new CKEDITOR.dom.domObject,CKEDITOR.NODE_ELEMENT=1,CKEDITOR.NODE_DOCUMENT=9,CKEDITOR.NODE_TEXT=3,CKEDITOR.NODE_COMMENT=8,CKEDITOR.NODE_DOCUMENT_FRAGMENT=11,CKEDITOR.POSITION_IDENTICAL=0,CKEDITOR.POSITION_DISCONNECTED=1,CKEDITOR.POSITION_FOLLOWING=2,CKEDITOR.POSITION_PRECEDING=4,CKEDITOR.POSITION_IS_CONTAINED=8,CKEDITOR.POSITION_CONTAINS=16,CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype,{appendTo:function(a,e){a.append(this,e);
return a},clone:function(a,e){function b(c){c["data-cke-expando"]&&(c["data-cke-expando"]=!1);if(c.nodeType==CKEDITOR.NODE_ELEMENT||c.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT)if(e||c.nodeType!=CKEDITOR.NODE_ELEMENT||c.removeAttribute("id",!1),a){c=c.childNodes;for(var d=0;d<c.length;d++)b(c[d])}}function c(b){if(b.type==CKEDITOR.NODE_ELEMENT||b.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT){if(b.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var d=b.getName();":"==d[0]&&b.renameNode(d.substring(1))}if(a)for(d=0;d<
b.getChildCount();d++)c(b.getChild(d))}}var d=this.$.cloneNode(a);b(d);d=new CKEDITOR.dom.node(d);CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(this.type==CKEDITOR.NODE_ELEMENT||this.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)&&c(d);return d},hasPrevious:function(){return!!this.$.previousSibling},hasNext:function(){return!!this.$.nextSibling},insertAfter:function(a){a.$.parentNode.insertBefore(this.$,a.$.nextSibling);return a},insertBefore:function(a){a.$.parentNode.insertBefore(this.$,a.$);return a},insertBeforeMe:function(a){this.$.parentNode.insertBefore(a.$,
this.$);return a},getAddress:function(a){for(var e=[],b=this.getDocument().$.documentElement,c=this.$;c&&c!=b;){var d=c.parentNode;d&&e.unshift(this.getIndex.call({$:c},a));c=d}return e},getDocument:function(){return new CKEDITOR.dom.document(this.$.ownerDocument||this.$.parentNode.ownerDocument)},getIndex:function(a){function e(a,b){var f=b?a.nextSibling:a.previousSibling;return f&&f.nodeType==CKEDITOR.NODE_TEXT?f.nodeValue?f:e(f,b):null}var b=this.$,c=-1,d;if(!this.$.parentNode||a&&b.nodeType==
CKEDITOR.NODE_TEXT&&!b.nodeValue&&!e(b)&&!e(b,!0))return-1;do if(!a||b==this.$||b.nodeType!=CKEDITOR.NODE_TEXT||!d&&b.nodeValue)c++,d=b.nodeType==CKEDITOR.NODE_TEXT;while(b=b.previousSibling);return c},getNextSourceNode:function(a,e,b){if(b&&!b.call){var c=b;b=function(a){return!a.equals(c)}}a=!a&&this.getFirst&&this.getFirst();var d;if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&!1===b(this,!0))return null;a=this.getNext()}for(;!a&&(d=(d||this).getParent());){if(b&&!1===b(d,!0))return null;a=d.getNext()}return!a||
b&&!1===b(a)?null:e&&e!=a.type?a.getNextSourceNode(!1,e,b):a},getPreviousSourceNode:function(a,e,b){if(b&&!b.call){var c=b;b=function(a){return!a.equals(c)}}a=!a&&this.getLast&&this.getLast();var d;if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&!1===b(this,!0))return null;a=this.getPrevious()}for(;!a&&(d=(d||this).getParent());){if(b&&!1===b(d,!0))return null;a=d.getPrevious()}return!a||b&&!1===b(a)?null:e&&a.type!=e?a.getPreviousSourceNode(!1,e,b):a},getPrevious:function(a){var e=this.$,b;do b=(e=
e.previousSibling)&&10!=e.nodeType&&new CKEDITOR.dom.node(e);while(b&&a&&!a(b));return b},getNext:function(a){var e=this.$,b;do b=(e=e.nextSibling)&&new CKEDITOR.dom.node(e);while(b&&a&&!a(b));return b},getParent:function(a){var e=this.$.parentNode;return e&&(e.nodeType==CKEDITOR.NODE_ELEMENT||a&&e.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT)?new CKEDITOR.dom.node(e):null},getParents:function(a){var e=this,b=[];do b[a?"push":"unshift"](e);while(e=e.getParent());return b},getCommonAncestor:function(a){if(a.equals(this))return this;
if(a.contains&&a.contains(this))return a;var e=this.contains?this:this.getParent();do if(e.contains(a))return e;while(e=e.getParent());return null},getPosition:function(a){var e=this.$,b=a.$;if(e.compareDocumentPosition)return e.compareDocumentPosition(b);if(e==b)return CKEDITOR.POSITION_IDENTICAL;if(this.type==CKEDITOR.NODE_ELEMENT&&a.type==CKEDITOR.NODE_ELEMENT){if(e.contains){if(e.contains(b))return CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING;if(b.contains(e))return CKEDITOR.POSITION_IS_CONTAINED+
CKEDITOR.POSITION_FOLLOWING}if("sourceIndex"in e)return 0>e.sourceIndex||0>b.sourceIndex?CKEDITOR.POSITION_DISCONNECTED:e.sourceIndex<b.sourceIndex?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING}e=this.getAddress();a=a.getAddress();for(var b=Math.min(e.length,a.length),c=0;c<b;c++)if(e[c]!=a[c])return e[c]<a[c]?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING;return e.length<a.length?CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING},
getAscendant:function(a,e){var b=this.$,c,d;e||(b=b.parentNode);"function"==typeof a?(d=!0,c=a):(d=!1,c=function(b){b="string"==typeof b.nodeName?b.nodeName.toLowerCase():"";return"string"==typeof a?b==a:b in a});for(;b;){if(c(d?new CKEDITOR.dom.node(b):b))return new CKEDITOR.dom.node(b);try{b=b.parentNode}catch(m){b=null}}return null},hasAscendant:function(a,e){var b=this.$;e||(b=b.parentNode);for(;b;){if(b.nodeName&&b.nodeName.toLowerCase()==a)return!0;b=b.parentNode}return!1},move:function(a,e){a.append(this.remove(),
e)},remove:function(a){var e=this.$,b=e.parentNode;if(b){if(a)for(;a=e.firstChild;)b.insertBefore(e.removeChild(a),e);b.removeChild(e)}return this},replace:function(a){this.insertBefore(a);a.remove()},trim:function(){this.ltrim();this.rtrim()},ltrim:function(){for(var a;this.getFirst&&(a=this.getFirst());){if(a.type==CKEDITOR.NODE_TEXT){var e=CKEDITOR.tools.ltrim(a.getText()),b=a.getLength();if(e)e.length<b&&(a.split(b-e.length),this.$.removeChild(this.$.firstChild));else{a.remove();continue}}break}},
rtrim:function(){for(var a;this.getLast&&(a=this.getLast());){if(a.type==CKEDITOR.NODE_TEXT){var e=CKEDITOR.tools.rtrim(a.getText()),b=a.getLength();if(e)e.length<b&&(a.split(e.length),this.$.lastChild.parentNode.removeChild(this.$.lastChild));else{a.remove();continue}}break}CKEDITOR.env.needsBrFiller&&(a=this.$.lastChild)&&1==a.type&&"br"==a.nodeName.toLowerCase()&&a.parentNode.removeChild(a)},isReadOnly:function(a){var e=this;this.type!=CKEDITOR.NODE_ELEMENT&&(e=this.getParent());CKEDITOR.env.edge&&
e&&e.is("textarea")&&(a=!0);if(!a&&e&&"undefined"!=typeof e.$.isContentEditable)return!(e.$.isContentEditable||e.data("cke-editable"));for(;e;){if(e.data("cke-editable"))return!1;if(e.hasAttribute("contenteditable"))return"false"==e.getAttribute("contenteditable");e=e.getParent()}return!0}}),CKEDITOR.dom.window=function(a){CKEDITOR.dom.domObject.call(this,a)},CKEDITOR.dom.window.prototype=new CKEDITOR.dom.domObject,CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype,{focus:function(){this.$.focus()},
getViewPaneSize:function(){var a=this.$.document,e="CSS1Compat"==a.compatMode;return{width:(e?a.documentElement.clientWidth:a.body.clientWidth)||0,height:(e?a.documentElement.clientHeight:a.body.clientHeight)||0}},getScrollPosition:function(){var a=this.$;if("pageXOffset"in a)return{x:a.pageXOffset||0,y:a.pageYOffset||0};a=a.document;return{x:a.documentElement.scrollLeft||a.body.scrollLeft||0,y:a.documentElement.scrollTop||a.body.scrollTop||0}},getFrame:function(){var a=this.$.frameElement;return a?
new CKEDITOR.dom.element.get(a):null}}),CKEDITOR.dom.document=function(a){CKEDITOR.dom.domObject.call(this,a)},CKEDITOR.dom.document.prototype=new CKEDITOR.dom.domObject,CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype,{type:CKEDITOR.NODE_DOCUMENT,appendStyleSheet:function(a){if(this.$.createStyleSheet)this.$.createStyleSheet(a);else{var e=new CKEDITOR.dom.element("link");e.setAttributes({rel:"stylesheet",type:"text/css",href:a});this.getHead().append(e)}},appendStyleText:function(a){if(this.$.createStyleSheet){var e=
this.$.createStyleSheet("");e.cssText=a}else{var b=new CKEDITOR.dom.element("style",this);b.append(new CKEDITOR.dom.text(a,this));this.getHead().append(b)}return e||b.$.sheet},createElement:function(a,e){var b=new CKEDITOR.dom.element(a,this);e&&(e.attributes&&b.setAttributes(e.attributes),e.styles&&b.setStyles(e.styles));return b},createText:function(a){return new CKEDITOR.dom.text(a,this)},focus:function(){this.getWindow().focus()},getActive:function(){var a;try{a=this.$.activeElement}catch(e){return null}return new CKEDITOR.dom.element(a)},
getById:function(a){return(a=this.$.getElementById(a))?new CKEDITOR.dom.element(a):null},getByAddress:function(a,e){for(var b=this.$.documentElement,c=0;b&&c<a.length;c++){var d=a[c];if(e)for(var m=-1,l=0;l<b.childNodes.length;l++){var f=b.childNodes[l];if(!0!==e||3!=f.nodeType||!f.previousSibling||3!=f.previousSibling.nodeType)if(m++,m==d){b=f;break}}else b=b.childNodes[d]}return b?new CKEDITOR.dom.node(b):null},getElementsByTag:function(a,e){CKEDITOR.env.ie&&8>=document.documentMode||!e||(a=e+":"+
a);return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a))},getHead:function(){var a=this.$.getElementsByTagName("head")[0];return a=a?new CKEDITOR.dom.element(a):this.getDocumentElement().append(new CKEDITOR.dom.element("head"),!0)},getBody:function(){return new CKEDITOR.dom.element(this.$.body)},getDocumentElement:function(){return new CKEDITOR.dom.element(this.$.documentElement)},getWindow:function(){return new CKEDITOR.dom.window(this.$.parentWindow||this.$.defaultView)},write:function(a){this.$.open("text/html",
"replace");CKEDITOR.env.ie&&(a=a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i,'$\x26\n\x3cscript data-cke-temp\x3d"1"\x3e('+CKEDITOR.tools.fixDomain+")();\x3c/script\x3e"));this.$.write(a);this.$.close()},find:function(a){return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a))},findOne:function(a){return(a=this.$.querySelector(a))?new CKEDITOR.dom.element(a):null},_getHtml5ShivFrag:function(){var a=this.getCustomData("html5ShivFrag");a||(a=this.$.createDocumentFragment(),CKEDITOR.tools.enableHtml5Elements(a,
!0),this.setCustomData("html5ShivFrag",a));return a}}),CKEDITOR.dom.nodeList=function(a){this.$=a},CKEDITOR.dom.nodeList.prototype={count:function(){return this.$.length},getItem:function(a){return 0>a||a>=this.$.length?null:(a=this.$[a])?new CKEDITOR.dom.node(a):null}},CKEDITOR.dom.element=function(a,e){"string"==typeof a&&(a=(e?e.$:document).createElement(a));CKEDITOR.dom.domObject.call(this,a)},CKEDITOR.dom.element.get=function(a){return(a="string"==typeof a?document.getElementById(a)||document.getElementsByName(a)[0]:
a)&&(a.$?a:new CKEDITOR.dom.element(a))},CKEDITOR.dom.element.prototype=new CKEDITOR.dom.node,CKEDITOR.dom.element.createFromHtml=function(a,e){var b=new CKEDITOR.dom.element("div",e);b.setHtml(a);return b.getFirst().remove()},CKEDITOR.dom.element.setMarker=function(a,e,b,c){var d=e.getCustomData("list_marker_id")||e.setCustomData("list_marker_id",CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"),m=e.getCustomData("list_marker_names")||e.setCustomData("list_marker_names",{}).getCustomData("list_marker_names");
a[d]=e;m[b]=1;return e.setCustomData(b,c)},CKEDITOR.dom.element.clearAllMarkers=function(a){for(var e in a)CKEDITOR.dom.element.clearMarkers(a,a[e],1)},CKEDITOR.dom.element.clearMarkers=function(a,e,b){var c=e.getCustomData("list_marker_names"),d=e.getCustomData("list_marker_id"),m;for(m in c)e.removeCustomData(m);e.removeCustomData("list_marker_names");b&&(e.removeCustomData("list_marker_id"),delete a[d])},function(){function a(a,b){return-1<(" "+a+" ").replace(m," ").indexOf(" "+b+" ")}function e(a){var b=
!0;a.$.id||(a.$.id="cke_tmp_"+CKEDITOR.tools.getNextNumber(),b=!1);return function(){b||a.removeAttribute("id")}}function b(a,b){return"#"+a.$.id+" "+b.split(/,\s*/).join(", #"+a.$.id+" ")}function c(a){for(var b=0,k=0,g=l[a].length;k<g;k++)b+=parseInt(this.getComputedStyle(l[a][k])||0,10)||0;return b}var d=!!document.createElement("span").classList,m=/[\n\t\r]/g;CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_ELEMENT,addClass:d?function(a){this.$.classList.add(a);return this}:
function(b){var h=this.$.className;h&&(a(h,b)||(h+=" "+b));this.$.className=h||b;return this},removeClass:d?function(a){var b=this.$;b.classList.remove(a);b.className||b.removeAttribute("class");return this}:function(b){var h=this.getAttribute("class");h&&a(h,b)&&((h=h.replace(new RegExp("(?:^|\\s+)"+b+"(?\x3d\\s|$)"),"").replace(/^\s+/,""))?this.setAttribute("class",h):this.removeAttribute("class"));return this},hasClass:function(b){return a(this.$.className,b)},append:function(a,b){"string"==typeof a&&
(a=this.getDocument().createElement(a));b?this.$.insertBefore(a.$,this.$.firstChild):this.$.appendChild(a.$);return a},appendHtml:function(a){if(this.$.childNodes.length){var b=new CKEDITOR.dom.element("div",this.getDocument());b.setHtml(a);b.moveChildren(this)}else this.setHtml(a)},appendText:function(a){null!=this.$.text&&CKEDITOR.env.ie&&9>CKEDITOR.env.version?this.$.text+=a:this.append(new CKEDITOR.dom.text(a))},appendBogus:function(a){if(a||CKEDITOR.env.needsBrFiller){for(a=this.getLast();a&&
a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.rtrim(a.getText());)a=a.getPrevious();a&&a.is&&a.is("br")||(a=this.getDocument().createElement("br"),CKEDITOR.env.gecko&&a.setAttribute("type","_moz"),this.append(a))}},breakParent:function(a,b){var k=new CKEDITOR.dom.range(this.getDocument());k.setStartAfter(this);k.setEndAfter(a);var g=k.extractContents(!1,b||!1);k.insertNode(this.remove());g.insertAfterNode(this)},contains:document.compareDocumentPosition?function(a){return!!(this.$.compareDocumentPosition(a.$)&
16)}:function(a){var b=this.$;return a.type!=CKEDITOR.NODE_ELEMENT?b.contains(a.getParent().$):b!=a.$&&b.contains(a.$)},focus:function(){function a(){try{this.$.focus()}catch(b){}}return function(b){b?CKEDITOR.tools.setTimeout(a,100,this):a.call(this)}}(),getHtml:function(){var a=this.$.innerHTML;return CKEDITOR.env.ie?a.replace(/<\?[^>]*>/g,""):a},getOuterHtml:function(){if(this.$.outerHTML)return this.$.outerHTML.replace(/<\?[^>]*>/,"");var a=this.$.ownerDocument.createElement("div");a.appendChild(this.$.cloneNode(!0));
return a.innerHTML},getClientRect:function(){var a=CKEDITOR.tools.extend({},this.$.getBoundingClientRect());!a.width&&(a.width=a.right-a.left);!a.height&&(a.height=a.bottom-a.top);return a},setHtml:CKEDITOR.env.ie&&9>CKEDITOR.env.version?function(a){try{var b=this.$;if(this.getParent())return b.innerHTML=a;var k=this.getDocument()._getHtml5ShivFrag();k.appendChild(b);b.innerHTML=a;k.removeChild(b);return a}catch(g){this.$.innerHTML="";b=new CKEDITOR.dom.element("body",this.getDocument());b.$.innerHTML=
a;for(b=b.getChildren();b.count();)this.append(b.getItem(0));return a}}:function(a){return this.$.innerHTML=a},setText:function(){var a=document.createElement("p");a.innerHTML="x";a=a.textContent;return function(b){this.$[a?"textContent":"innerText"]=b}}(),getAttribute:function(){var a=function(a){return this.$.getAttribute(a,2)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){switch(a){case "class":a="className";break;case "http-equiv":a="httpEquiv";break;case "name":return this.$.name;
case "tabindex":return a=this.$.getAttribute(a,2),0!==a&&0===this.$.tabIndex&&(a=null),a;case "checked":return a=this.$.attributes.getNamedItem(a),(a.specified?a.nodeValue:this.$.checked)?"checked":null;case "hspace":case "value":return this.$[a];case "style":return this.$.style.cssText;case "contenteditable":case "contentEditable":return this.$.attributes.getNamedItem("contentEditable").specified?this.$.getAttribute("contentEditable"):null}return this.$.getAttribute(a,2)}:a}(),getChildren:function(){return new CKEDITOR.dom.nodeList(this.$.childNodes)},
getComputedStyle:document.defaultView&&document.defaultView.getComputedStyle?function(a){var b=this.getWindow().$.getComputedStyle(this.$,null);return b?b.getPropertyValue(a):""}:function(a){return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)]},getDtd:function(){var a=CKEDITOR.dtd[this.getName()];this.getDtd=function(){return a};return a},getElementsByTag:CKEDITOR.dom.document.prototype.getElementsByTag,getTabIndex:function(){var a=this.$.tabIndex;return 0!==a||CKEDITOR.dtd.$tabIndex[this.getName()]||
0===parseInt(this.getAttribute("tabindex"),10)?a:-1},getText:function(){return this.$.textContent||this.$.innerText||""},getWindow:function(){return this.getDocument().getWindow()},getId:function(){return this.$.id||null},getNameAtt:function(){return this.$.name||null},getName:function(){var a=this.$.nodeName.toLowerCase();if(CKEDITOR.env.ie&&8>=document.documentMode){var b=this.$.scopeName;"HTML"!=b&&(a=b.toLowerCase()+":"+a)}this.getName=function(){return a};return this.getName()},getValue:function(){return this.$.value},
getFirst:function(a){var b=this.$.firstChild;(b=b&&new CKEDITOR.dom.node(b))&&a&&!a(b)&&(b=b.getNext(a));return b},getLast:function(a){var b=this.$.lastChild;(b=b&&new CKEDITOR.dom.node(b))&&a&&!a(b)&&(b=b.getPrevious(a));return b},getStyle:function(a){return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]},is:function(){var a=this.getName();if("object"==typeof arguments[0])return!!arguments[0][a];for(var b=0;b<arguments.length;b++)if(arguments[b]==a)return!0;return!1},isEditable:function(a){var b=
this.getName();return this.isReadOnly()||"none"==this.getComputedStyle("display")||"hidden"==this.getComputedStyle("visibility")||CKEDITOR.dtd.$nonEditable[b]||CKEDITOR.dtd.$empty[b]||this.is("a")&&(this.data("cke-saved-name")||this.hasAttribute("name"))&&!this.getChildCount()?!1:!1!==a?(a=CKEDITOR.dtd[b]||CKEDITOR.dtd.span,!(!a||!a["#"])):!0},isIdentical:function(a){var b=this.clone(0,1);a=a.clone(0,1);b.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);
a.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);if(b.$.isEqualNode)return b.$.style.cssText=CKEDITOR.tools.normalizeCssText(b.$.style.cssText),a.$.style.cssText=CKEDITOR.tools.normalizeCssText(a.$.style.cssText),b.$.isEqualNode(a.$);b=b.getOuterHtml();a=a.getOuterHtml();if(CKEDITOR.env.ie&&9>CKEDITOR.env.version&&this.is("a")){var k=this.getParent();k.type==CKEDITOR.NODE_ELEMENT&&(k=k.clone(),k.setHtml(b),b=k.getHtml(),k.setHtml(a),a=k.getHtml())}return b==
a},isVisible:function(){var a=(this.$.offsetHeight||this.$.offsetWidth)&&"hidden"!=this.getComputedStyle("visibility"),b,k;a&&CKEDITOR.env.webkit&&(b=this.getWindow(),!b.equals(CKEDITOR.document.getWindow())&&(k=b.$.frameElement)&&(a=(new CKEDITOR.dom.element(k)).isVisible()));return!!a},isEmptyInlineRemoveable:function(){if(!CKEDITOR.dtd.$removeEmpty[this.getName()])return!1;for(var a=this.getChildren(),b=0,k=a.count();b<k;b++){var g=a.getItem(b);if(g.type!=CKEDITOR.NODE_ELEMENT||!g.data("cke-bookmark"))if(g.type==
CKEDITOR.NODE_ELEMENT&&!g.isEmptyInlineRemoveable()||g.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(g.getText()))return!1}return!0},hasAttributes:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(){for(var a=this.$.attributes,b=0;b<a.length;b++){var k=a[b];switch(k.nodeName){case "class":if(this.getAttribute("class"))return!0;case "data-cke-expando":continue;default:if(k.specified)return!0}}return!1}:function(){var a=this.$.attributes,b=a.length,k={"data-cke-expando":1,_moz_dirty:1};
return 0<b&&(2<b||!k[a[0].nodeName]||2==b&&!k[a[1].nodeName])},hasAttribute:function(){function a(b){var f=this.$.attributes.getNamedItem(b);if("input"==this.getName())switch(b){case "class":return 0<this.$.className.length;case "checked":return!!this.$.checked;case "value":return b=this.getAttribute("type"),"checkbox"==b||"radio"==b?"on"!=this.$.value:!!this.$.value}return f?f.specified:!1}return CKEDITOR.env.ie?8>CKEDITOR.env.version?function(b){return"name"==b?!!this.$.name:a.call(this,b)}:a:function(a){return!!this.$.attributes.getNamedItem(a)}}(),
hide:function(){this.setStyle("display","none")},moveChildren:function(a,b){var k=this.$;a=a.$;if(k!=a){var g;if(b)for(;g=k.lastChild;)a.insertBefore(k.removeChild(g),a.firstChild);else for(;g=k.firstChild;)a.appendChild(k.removeChild(g))}},mergeSiblings:function(){function a(b,f,g){if(f&&f.type==CKEDITOR.NODE_ELEMENT){for(var c=[];f.data("cke-bookmark")||f.isEmptyInlineRemoveable();)if(c.push(f),f=g?f.getNext():f.getPrevious(),!f||f.type!=CKEDITOR.NODE_ELEMENT)return;if(b.isIdentical(f)){for(var d=
g?b.getLast():b.getFirst();c.length;)c.shift().move(b,!g);f.moveChildren(b,!g);f.remove();d&&d.type==CKEDITOR.NODE_ELEMENT&&d.mergeSiblings()}}}return function(b){if(!1===b||CKEDITOR.dtd.$removeEmpty[this.getName()]||this.is("a"))a(this,this.getNext(),!0),a(this,this.getPrevious())}}(),show:function(){this.setStyles({display:"",visibility:""})},setAttribute:function(){var a=function(a,b){this.$.setAttribute(a,b);return this};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(b,
c){"class"==b?this.$.className=c:"style"==b?this.$.style.cssText=c:"tabindex"==b?this.$.tabIndex=c:"checked"==b?this.$.checked=c:"contenteditable"==b?a.call(this,"contentEditable",c):a.apply(this,arguments);return this}:CKEDITOR.env.ie8Compat&&CKEDITOR.env.secure?function(b,c){if("src"==b&&c.match(/^http:\/\//))try{a.apply(this,arguments)}catch(g){}else a.apply(this,arguments);return this}:a}(),setAttributes:function(a){for(var b in a)this.setAttribute(b,a[b]);return this},setValue:function(a){this.$.value=
a;return this},removeAttribute:function(){var a=function(a){this.$.removeAttribute(a)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){"class"==a?a="className":"tabindex"==a?a="tabIndex":"contenteditable"==a&&(a="contentEditable");this.$.removeAttribute(a)}:a}(),removeAttributes:function(a){if(CKEDITOR.tools.isArray(a))for(var b=0;b<a.length;b++)this.removeAttribute(a[b]);else for(b in a)a.hasOwnProperty(b)&&this.removeAttribute(b)},removeStyle:function(a){var b=
this.$.style;if(b.removeProperty||"border"!=a&&"margin"!=a&&"padding"!=a)b.removeProperty?b.removeProperty(a):b.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a)),this.$.style.cssText||this.removeAttribute("style");else{var c=["top","left","right","bottom"],g;"border"==a&&(g=["color","style","width"]);for(var b=[],d=0;d<c.length;d++)if(g)for(var e=0;e<g.length;e++)b.push([a,c[d],g[e]].join("-"));else b.push([a,c[d]].join("-"));for(a=0;a<b.length;a++)this.removeStyle(b[a])}},setStyle:function(a,
b){this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]=b;return this},setStyles:function(a){for(var b in a)this.setStyle(b,a[b]);return this},setOpacity:function(a){CKEDITOR.env.ie&&9>CKEDITOR.env.version?(a=Math.round(100*a),this.setStyle("filter",100<=a?"":"progid:DXImageTransform.Microsoft.Alpha(opacity\x3d"+a+")")):this.setStyle("opacity",a)},unselectable:function(){this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select","none"));if(CKEDITOR.env.ie){this.setAttribute("unselectable","on");for(var a,
b=this.getElementsByTag("*"),c=0,g=b.count();c<g;c++)a=b.getItem(c),a.setAttribute("unselectable","on")}},getPositionedAncestor:function(){for(var a=this;"html"!=a.getName();){if("static"!=a.getComputedStyle("position"))return a;a=a.getParent()}return null},getDocumentPosition:function(a){var b=0,c=0,g=this.getDocument(),d=g.getBody(),e="BackCompat"==g.$.compatMode;if(document.documentElement.getBoundingClientRect){var m=this.$.getBoundingClientRect(),l=g.$.documentElement,t=l.clientTop||d.$.clientTop||
0,p=l.clientLeft||d.$.clientLeft||0,w=!0;CKEDITOR.env.ie&&(w=g.getDocumentElement().contains(this),g=g.getBody().contains(this),w=e&&g||!e&&w);w&&(CKEDITOR.env.webkit||CKEDITOR.env.ie&&12<=CKEDITOR.env.version?(b=d.$.scrollLeft||l.scrollLeft,c=d.$.scrollTop||l.scrollTop):(c=e?d.$:l,b=c.scrollLeft,c=c.scrollTop),b=m.left+b-p,c=m.top+c-t)}else for(t=this,p=null;t&&"body"!=t.getName()&&"html"!=t.getName();){b+=t.$.offsetLeft-t.$.scrollLeft;c+=t.$.offsetTop-t.$.scrollTop;t.equals(this)||(b+=t.$.clientLeft||
0,c+=t.$.clientTop||0);for(;p&&!p.equals(t);)b-=p.$.scrollLeft,c-=p.$.scrollTop,p=p.getParent();p=t;t=(m=t.$.offsetParent)?new CKEDITOR.dom.element(m):null}a&&(m=this.getWindow(),t=a.getWindow(),!m.equals(t)&&m.$.frameElement&&(a=(new CKEDITOR.dom.element(m.$.frameElement)).getDocumentPosition(a),b+=a.x,c+=a.y));document.documentElement.getBoundingClientRect||!CKEDITOR.env.gecko||e||(b+=this.$.clientLeft?1:0,c+=this.$.clientTop?1:0);return{x:b,y:c}},scrollIntoView:function(a){var b=this.getParent();
if(b){do if((b.$.clientWidth&&b.$.clientWidth<b.$.scrollWidth||b.$.clientHeight&&b.$.clientHeight<b.$.scrollHeight)&&!b.is("body")&&this.scrollIntoParent(b,a,1),b.is("html")){var c=b.getWindow();try{var g=c.$.frameElement;g&&(b=new CKEDITOR.dom.element(g))}catch(d){}}while(b=b.getParent())}},scrollIntoParent:function(a,b,c){var g,d,e,m;function l(b,g){/body|html/.test(a.getName())?a.getWindow().$.scrollBy(b,g):(a.$.scrollLeft+=b,a.$.scrollTop+=g)}function t(a,b){var g={x:0,y:0};if(!a.is(w?"body":
"html")){var c=a.$.getBoundingClientRect();g.x=c.left;g.y=c.top}c=a.getWindow();c.equals(b)||(c=t(CKEDITOR.dom.element.get(c.$.frameElement),b),g.x+=c.x,g.y+=c.y);return g}function p(a,b){return parseInt(a.getComputedStyle("margin-"+b)||0,10)||0}!a&&(a=this.getWindow());e=a.getDocument();var w="BackCompat"==e.$.compatMode;a instanceof CKEDITOR.dom.window&&(a=w?e.getBody():e.getDocumentElement());e=a.getWindow();d=t(this,e);var x=t(a,e),B=this.$.offsetHeight;g=this.$.offsetWidth;var r=a.$.clientHeight,
z=a.$.clientWidth;e=d.x-p(this,"left")-x.x||0;m=d.y-p(this,"top")-x.y||0;g=d.x+g+p(this,"right")-(x.x+z)||0;d=d.y+B+p(this,"bottom")-(x.y+r)||0;(0>m||0<d)&&l(0,!0===b?m:!1===b?d:0>m?m:d);c&&(0>e||0<g)&&l(0>e?e:g,0)},setState:function(a,b,c){b=b||"cke";switch(a){case CKEDITOR.TRISTATE_ON:this.addClass(b+"_on");this.removeClass(b+"_off");this.removeClass(b+"_disabled");c&&this.setAttribute("aria-pressed",!0);c&&this.removeAttribute("aria-disabled");break;case CKEDITOR.TRISTATE_DISABLED:this.addClass(b+
"_disabled");this.removeClass(b+"_off");this.removeClass(b+"_on");c&&this.setAttribute("aria-disabled",!0);c&&this.removeAttribute("aria-pressed");break;default:this.addClass(b+"_off"),this.removeClass(b+"_on"),this.removeClass(b+"_disabled"),c&&this.removeAttribute("aria-pressed"),c&&this.removeAttribute("aria-disabled")}},getFrameDocument:function(){var a=this.$;try{a.contentWindow.document}catch(b){a.src=a.src}return a&&new CKEDITOR.dom.document(a.contentWindow.document)},copyAttributes:function(a,
b){var c=this.$.attributes;b=b||{};for(var g=0;g<c.length;g++){var d=c[g],e=d.nodeName.toLowerCase(),m;if(!(e in b))if("checked"==e&&(m=this.getAttribute(e)))a.setAttribute(e,m);else if(!CKEDITOR.env.ie||this.hasAttribute(e))m=this.getAttribute(e),null===m&&(m=d.nodeValue),a.setAttribute(e,m)}""!==this.$.style.cssText&&(a.$.style.cssText=this.$.style.cssText)},renameNode:function(a){if(this.getName()!=a){var b=this.getDocument();a=new CKEDITOR.dom.element(a,b);this.copyAttributes(a);this.moveChildren(a);
this.getParent(!0)&&this.$.parentNode.replaceChild(a.$,this.$);a.$["data-cke-expando"]=this.$["data-cke-expando"];this.$=a.$;delete this.getName}},getChild:function(){function a(b,c){var g=b.childNodes;if(0<=c&&c<g.length)return g[c]}return function(b){var c=this.$;if(b.slice)for(b=b.slice();0<b.length&&c;)c=a(c,b.shift());else c=a(c,b);return c?new CKEDITOR.dom.node(c):null}}(),getChildCount:function(){return this.$.childNodes.length},disableContextMenu:function(){function a(b){return b.type==CKEDITOR.NODE_ELEMENT&&
b.hasClass("cke_enable_context_menu")}this.on("contextmenu",function(b){b.data.getTarget().getAscendant(a,!0)||b.data.preventDefault()})},getDirection:function(a){return a?this.getComputedStyle("direction")||this.getDirection()||this.getParent()&&this.getParent().getDirection(1)||this.getDocument().$.dir||"ltr":this.getStyle("direction")||this.getAttribute("dir")},data:function(a,b){a="data-"+a;if(void 0===b)return this.getAttribute(a);!1===b?this.removeAttribute(a):this.setAttribute(a,b);return null},
getEditor:function(){var a=CKEDITOR.instances,b,c;for(b in a)if(c=a[b],c.element.equals(this)&&c.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO)return c;return null},find:function(a){var c=e(this);a=new CKEDITOR.dom.nodeList(this.$.querySelectorAll(b(this,a)));c();return a},findOne:function(a){var c=e(this);a=this.$.querySelector(b(this,a));c();return a?new CKEDITOR.dom.element(a):null},forEach:function(a,b,c){if(!(c||b&&this.type!=b))var g=a(this);if(!1!==g){c=this.getChildren();for(var d=0;d<c.count();d++)g=
c.getItem(d),g.type==CKEDITOR.NODE_ELEMENT?g.forEach(a,b):b&&g.type!=b||a(g)}}});var l={width:["border-left-width","border-right-width","padding-left","padding-right"],height:["border-top-width","border-bottom-width","padding-top","padding-bottom"]};CKEDITOR.dom.element.prototype.setSize=function(a,b,d){"number"==typeof b&&(!d||CKEDITOR.env.ie&&CKEDITOR.env.quirks||(b-=c.call(this,a)),this.setStyle(a,b+"px"))};CKEDITOR.dom.element.prototype.getSize=function(a,b){var d=Math.max(this.$["offset"+CKEDITOR.tools.capitalize(a)],
this.$["client"+CKEDITOR.tools.capitalize(a)])||0;b&&(d-=c.call(this,a));return d}}(),CKEDITOR.dom.documentFragment=function(a){a=a||CKEDITOR.document;this.$=a.type==CKEDITOR.NODE_DOCUMENT?a.$.createDocumentFragment():a},CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype,CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,insertAfterNode:function(a){a=a.$;a.parentNode.insertBefore(this.$,a.nextSibling)},getHtml:function(){var a=new CKEDITOR.dom.element("div");this.clone(1,
1).appendTo(a);return a.getHtml().replace(/\s*data-cke-expando=".*?"/g,"")}},!0,{append:1,appendBogus:1,clone:1,getFirst:1,getHtml:1,getLast:1,getParent:1,getNext:1,getPrevious:1,appendTo:1,moveChildren:1,insertBefore:1,insertAfterNode:1,replace:1,trim:1,type:1,ltrim:1,rtrim:1,getDocument:1,getChildCount:1,getChild:1,getChildren:1}),function(){function a(a,b){var g=this.range;if(this._.end)return null;if(!this._.start){this._.start=1;if(g.collapsed)return this.end(),null;g.optimize()}var c,d=g.startContainer;
c=g.endContainer;var f=g.startOffset,k=g.endOffset,h,e=this.guard,m=this.type,n=a?"getPreviousSourceNode":"getNextSourceNode";if(!a&&!this._.guardLTR){var l=c.type==CKEDITOR.NODE_ELEMENT?c:c.getParent(),A=c.type==CKEDITOR.NODE_ELEMENT?c.getChild(k):c.getNext();this._.guardLTR=function(a,b){return(!b||!l.equals(a))&&(!A||!a.equals(A))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(g.root))}}if(a&&!this._.guardRTL){var C=d.type==CKEDITOR.NODE_ELEMENT?d:d.getParent(),G=d.type==CKEDITOR.NODE_ELEMENT?
f?d.getChild(f-1):null:d.getPrevious();this._.guardRTL=function(a,b){return(!b||!C.equals(a))&&(!G||!a.equals(G))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(g.root))}}var F=a?this._.guardRTL:this._.guardLTR;h=e?function(a,b){return!1===F(a,b)?!1:e(a,b)}:F;this.current?c=this.current[n](!1,m,h):(a?c.type==CKEDITOR.NODE_ELEMENT&&(c=0<k?c.getChild(k-1):!1===h(c,!0)?null:c.getPreviousSourceNode(!0,m,h)):(c=d,c.type==CKEDITOR.NODE_ELEMENT&&((c=c.getChild(f))||(c=!1===h(d,!0)?null:d.getNextSourceNode(!0,
m,h)))),c&&!1===h(c)&&(c=null));for(;c&&!this._.end;){this.current=c;if(!this.evaluator||!1!==this.evaluator(c)){if(!b)return c}else if(b&&this.evaluator)return!1;c=c[n](!1,m,h)}this.end();return this.current=null}function e(b){for(var g,c=null;g=a.call(this,b);)c=g;return c}CKEDITOR.dom.walker=CKEDITOR.tools.createClass({$:function(a){this.range=a;this._={}},proto:{end:function(){this._.end=1},next:function(){return a.call(this)},previous:function(){return a.call(this,1)},checkForward:function(){return!1!==
a.call(this,0,1)},checkBackward:function(){return!1!==a.call(this,1,1)},lastForward:function(){return e.call(this)},lastBackward:function(){return e.call(this,1)},reset:function(){delete this.current;this._={}}}});var b={block:1,"list-item":1,table:1,"table-row-group":1,"table-header-group":1,"table-footer-group":1,"table-row":1,"table-column-group":1,"table-column":1,"table-cell":1,"table-caption":1},c={absolute:1,fixed:1};CKEDITOR.dom.element.prototype.isBlockBoundary=function(a){return"none"!=
this.getComputedStyle("float")||this.getComputedStyle("position")in c||!b[this.getComputedStyle("display")]?!!(this.is(CKEDITOR.dtd.$block)||a&&this.is(a)):!0};CKEDITOR.dom.walker.blockBoundary=function(a){return function(b){return!(b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary(a))}};CKEDITOR.dom.walker.listItemBoundary=function(){return this.blockBoundary({br:1})};CKEDITOR.dom.walker.bookmark=function(a,b){function g(a){return a&&a.getName&&"span"==a.getName()&&a.data("cke-bookmark")}return function(c){var d,
f;d=c&&c.type!=CKEDITOR.NODE_ELEMENT&&(f=c.getParent())&&g(f);d=a?d:d||g(c);return!!(b^d)}};CKEDITOR.dom.walker.whitespaces=function(a){return function(b){var g;b&&b.type==CKEDITOR.NODE_TEXT&&(g=!CKEDITOR.tools.trim(b.getText())||CKEDITOR.env.webkit&&"​"==b.getText());return!!(a^g)}};CKEDITOR.dom.walker.invisible=function(a){var b=CKEDITOR.dom.walker.whitespaces(),g=CKEDITOR.env.webkit?1:0;return function(c){b(c)?c=1:(c.type==CKEDITOR.NODE_TEXT&&(c=c.getParent()),c=c.$.offsetWidth<=g);return!!(a^
c)}};CKEDITOR.dom.walker.nodeType=function(a,b){return function(g){return!!(b^g.type==a)}};CKEDITOR.dom.walker.bogus=function(a){function b(a){return!m(a)&&!l(a)}return function(g){var c=CKEDITOR.env.needsBrFiller?g.is&&g.is("br"):g.getText&&d.test(g.getText());c&&(c=g.getParent(),g=g.getNext(b),c=c.isBlockBoundary()&&(!g||g.type==CKEDITOR.NODE_ELEMENT&&g.isBlockBoundary()));return!!(a^c)}};CKEDITOR.dom.walker.temp=function(a){return function(b){b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent());b=
b&&b.hasAttribute("data-cke-temp");return!!(a^b)}};var d=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,m=CKEDITOR.dom.walker.whitespaces(),l=CKEDITOR.dom.walker.bookmark(),f=CKEDITOR.dom.walker.temp(),h=function(a){return l(a)||m(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.is(CKEDITOR.dtd.$inline)&&!a.is(CKEDITOR.dtd.$empty)};CKEDITOR.dom.walker.ignored=function(a){return function(b){b=m(b)||l(b)||f(b);return!!(a^b)}};var k=CKEDITOR.dom.walker.ignored();CKEDITOR.dom.walker.empty=function(a){return function(b){for(var g=
0,c=b.getChildCount();g<c;++g)if(!k(b.getChild(g)))return!!a;return!a}};var g=CKEDITOR.dom.walker.empty(),n=CKEDITOR.dom.walker.validEmptyBlockContainers=CKEDITOR.tools.extend(function(a){var b={},g;for(g in a)CKEDITOR.dtd[g]["#"]&&(b[g]=1);return b}(CKEDITOR.dtd.$block),{caption:1,td:1,th:1});CKEDITOR.dom.walker.editable=function(a){return function(b){b=k(b)?!1:b.type==CKEDITOR.NODE_TEXT||b.type==CKEDITOR.NODE_ELEMENT&&(b.is(CKEDITOR.dtd.$inline)||b.is("hr")||"false"==b.getAttribute("contenteditable")||
!CKEDITOR.env.needsBrFiller&&b.is(n)&&g(b))?!0:!1;return!!(a^b)}};CKEDITOR.dom.element.prototype.getBogus=function(){var a=this;do a=a.getPreviousSourceNode();while(h(a));return a&&(CKEDITOR.env.needsBrFiller?a.is&&a.is("br"):a.getText&&d.test(a.getText()))?a:!1}}(),CKEDITOR.dom.range=function(a){this.endOffset=this.endContainer=this.startOffset=this.startContainer=null;this.collapsed=!0;var e=a instanceof CKEDITOR.dom.document;this.document=e?a:a.getDocument();this.root=e?a.getBody():a},function(){function a(a){a.collapsed=
a.startContainer&&a.endContainer&&a.startContainer.equals(a.endContainer)&&a.startOffset==a.endOffset}function e(a,b,c,d,f){function k(a,b,g,c){var d=g?a.getPrevious():a.getNext();if(c&&m)return d;r||c?b.append(a.clone(!0,f),g):(a.remove(),l&&b.append(a));return d}function h(){var a,b,g,c=Math.min(D.length,N.length);for(a=0;a<c;a++)if(b=D[a],g=N[a],!b.equals(g))return a;return a-1}function e(){var b=R-1,c=F&&I&&!z.equals(E);b<P-1||b<T-1||c?(c?a.moveToPosition(E,CKEDITOR.POSITION_BEFORE_START):T==
b+1&&G?a.moveToPosition(N[b],CKEDITOR.POSITION_BEFORE_END):a.moveToPosition(N[b+1],CKEDITOR.POSITION_BEFORE_START),d&&(b=D[b+1])&&b.type==CKEDITOR.NODE_ELEMENT&&(c=CKEDITOR.dom.element.createFromHtml('\x3cspan data-cke-bookmark\x3d"1" style\x3d"display:none"\x3e\x26nbsp;\x3c/span\x3e',a.document),c.insertAfter(b),b.mergeSiblings(!1),a.moveToBookmark({startNode:c}))):a.collapse(!0)}a.optimizeBookmark();var m=0===b,l=1==b,r=2==b;b=r||l;var z=a.startContainer,E=a.endContainer,y=a.startOffset,A=a.endOffset,
C,G,F,I,H,K;if(r&&E.type==CKEDITOR.NODE_TEXT&&z.equals(E))z=a.document.createText(z.substring(y,A)),c.append(z);else{E.type==CKEDITOR.NODE_TEXT?r?K=!0:E=E.split(A):0<E.getChildCount()?A>=E.getChildCount()?(E=E.getChild(A-1),G=!0):E=E.getChild(A):I=G=!0;z.type==CKEDITOR.NODE_TEXT?r?H=!0:z.split(y):0<z.getChildCount()?0===y?(z=z.getChild(y),C=!0):z=z.getChild(y-1):F=C=!0;for(var D=z.getParents(),N=E.getParents(),R=h(),P=D.length-1,T=N.length-1,O=c,Y,M,W,U=-1,J=R;J<=P;J++){M=D[J];W=M.getNext();for(J!=
P||M.equals(N[J])&&P<T?b&&(Y=O.append(M.clone(0,f))):C?k(M,O,!1,F):H&&O.append(a.document.createText(M.substring(y)));W;){if(W.equals(N[J])){U=J;break}W=k(W,O)}O=Y}O=c;for(J=R;J<=T;J++)if(c=N[J],W=c.getPrevious(),c.equals(D[J]))b&&(O=O.getChild(0));else{J!=T||c.equals(D[J])&&T<P?b&&(Y=O.append(c.clone(0,f))):G?k(c,O,!1,I):K&&O.append(a.document.createText(c.substring(0,A)));if(J>U)for(;W;)W=k(W,O,!0);O=Y}r||e()}}function b(){var a=!1,b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(!0),
d=CKEDITOR.dom.walker.bogus();return function(f){return c(f)||b(f)?!0:d(f)&&!a?a=!0:f.type==CKEDITOR.NODE_TEXT&&(f.hasAscendant("pre")||CKEDITOR.tools.trim(f.getText()).length)||f.type==CKEDITOR.NODE_ELEMENT&&!f.is(m)?!1:!0}}function c(a){var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(1);return function(d){return c(d)||b(d)?!0:!a&&l(d)||d.type==CKEDITOR.NODE_ELEMENT&&d.is(CKEDITOR.dtd.$removeEmpty)}}function d(a){return function(){var b;return this[a?"getPreviousNode":"getNextNode"](function(a){!b&&
k(a)&&(b=a);return h(a)&&!(l(a)&&a.equals(b))})}}var m={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},l=CKEDITOR.dom.walker.bogus(),f=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,h=CKEDITOR.dom.walker.editable(),k=CKEDITOR.dom.walker.ignored(!0);CKEDITOR.dom.range.prototype={clone:function(){var a=new CKEDITOR.dom.range(this.root);a._setStartContainer(this.startContainer);a.startOffset=this.startOffset;
a._setEndContainer(this.endContainer);a.endOffset=this.endOffset;a.collapsed=this.collapsed;return a},collapse:function(a){a?(this._setEndContainer(this.startContainer),this.endOffset=this.startOffset):(this._setStartContainer(this.endContainer),this.startOffset=this.endOffset);this.collapsed=!0},cloneContents:function(a){var b=new CKEDITOR.dom.documentFragment(this.document);this.collapsed||e(this,2,b,!1,"undefined"==typeof a?!0:a);return b},deleteContents:function(a){this.collapsed||e(this,0,null,
a)},extractContents:function(a,b){var c=new CKEDITOR.dom.documentFragment(this.document);this.collapsed||e(this,1,c,a,"undefined"==typeof b?!0:b);return c},createBookmark:function(a){var b,c,d,f,k=this.collapsed;b=this.document.createElement("span");b.data("cke-bookmark",1);b.setStyle("display","none");b.setHtml("\x26nbsp;");a&&(d="cke_bm_"+CKEDITOR.tools.getNextNumber(),b.setAttribute("id",d+(k?"C":"S")));k||(c=b.clone(),c.setHtml("\x26nbsp;"),a&&c.setAttribute("id",d+"E"),f=this.clone(),f.collapse(),
f.insertNode(c));f=this.clone();f.collapse(!0);f.insertNode(b);c?(this.setStartAfter(b),this.setEndBefore(c)):this.moveToPosition(b,CKEDITOR.POSITION_AFTER_END);return{startNode:a?d+(k?"C":"S"):b,endNode:a?d+"E":c,serializable:a,collapsed:k}},createBookmark2:function(){function a(g){var c=g.container,d=g.offset,f;f=c;var k=d;f=f.type!=CKEDITOR.NODE_ELEMENT||0===k||k==f.getChildCount()?0:f.getChild(k-1).type==CKEDITOR.NODE_TEXT&&f.getChild(k).type==CKEDITOR.NODE_TEXT;f&&(c=c.getChild(d-1),d=c.getLength());
c.type==CKEDITOR.NODE_ELEMENT&&1<d&&(d=c.getChild(d-1).getIndex(!0)+1);if(c.type==CKEDITOR.NODE_TEXT){f=c;for(k=0;(f=f.getPrevious())&&f.type==CKEDITOR.NODE_TEXT;)k+=f.getLength();f=k;c.getText()?d+=f:(k=c.getPrevious(b),f?(d=f,c=k?k.getNext():c.getParent().getFirst()):(c=c.getParent(),d=k?k.getIndex(!0)+1:0))}g.container=c;g.offset=d}var b=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT,!0);return function(b){var c=this.collapsed,d={container:this.startContainer,offset:this.startOffset},f={container:this.endContainer,
offset:this.endOffset};b&&(a(d),c||a(f));return{start:d.container.getAddress(b),end:c?null:f.container.getAddress(b),startOffset:d.offset,endOffset:f.offset,normalized:b,collapsed:c,is2:!0}}}(),moveToBookmark:function(a){if(a.is2){var b=this.document.getByAddress(a.start,a.normalized),c=a.startOffset,d=a.end&&this.document.getByAddress(a.end,a.normalized);a=a.endOffset;this.setStart(b,c);d?this.setEnd(d,a):this.collapse(!0)}else b=(c=a.serializable)?this.document.getById(a.startNode):a.startNode,
a=c?this.document.getById(a.endNode):a.endNode,this.setStartBefore(b),b.remove(),a?(this.setEndBefore(a),a.remove()):this.collapse(!0)},getBoundaryNodes:function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,d=this.endOffset,f;if(a.type==CKEDITOR.NODE_ELEMENT)if(f=a.getChildCount(),f>c)a=a.getChild(c);else if(1>f)a=a.getPreviousSourceNode();else{for(a=a.$;a.lastChild;)a=a.lastChild;a=new CKEDITOR.dom.node(a);a=a.getNextSourceNode()||a}if(b.type==CKEDITOR.NODE_ELEMENT)if(f=b.getChildCount(),
f>d)b=b.getChild(d).getPreviousSourceNode(!0);else if(1>f)b=b.getPreviousSourceNode();else{for(b=b.$;b.lastChild;)b=b.lastChild;b=new CKEDITOR.dom.node(b)}a.getPosition(b)&CKEDITOR.POSITION_FOLLOWING&&(a=b);return{startNode:a,endNode:b}},getCommonAncestor:function(a,b){var c=this.startContainer,d=this.endContainer,c=c.equals(d)?a&&c.type==CKEDITOR.NODE_ELEMENT&&this.startOffset==this.endOffset-1?c.getChild(this.startOffset):c:c.getCommonAncestor(d);return b&&!c.is?c.getParent():c},optimize:function(){var a=
this.startContainer,b=this.startOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setStartAfter(a):this.setStartBefore(a));a=this.endContainer;b=this.endOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setEndAfter(a):this.setEndBefore(a))},optimizeBookmark:function(){var a=this.startContainer,b=this.endContainer;a.is&&a.is("span")&&a.data("cke-bookmark")&&this.setStartAt(a,CKEDITOR.POSITION_BEFORE_START);b&&b.is&&b.is("span")&&b.data("cke-bookmark")&&this.setEndAt(b,CKEDITOR.POSITION_AFTER_END)},
trim:function(a,b){var c=this.startContainer,d=this.startOffset,f=this.collapsed;if((!a||f)&&c&&c.type==CKEDITOR.NODE_TEXT){if(d)if(d>=c.getLength())d=c.getIndex()+1,c=c.getParent();else{var k=c.split(d),d=c.getIndex()+1,c=c.getParent();this.startContainer.equals(this.endContainer)?this.setEnd(k,this.endOffset-this.startOffset):c.equals(this.endContainer)&&(this.endOffset+=1)}else d=c.getIndex(),c=c.getParent();this.setStart(c,d);if(f){this.collapse(!0);return}}c=this.endContainer;d=this.endOffset;
b||f||!c||c.type!=CKEDITOR.NODE_TEXT||(d?(d>=c.getLength()||c.split(d),d=c.getIndex()+1):d=c.getIndex(),c=c.getParent(),this.setEnd(c,d))},enlarge:function(a,b){function c(a){return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("contenteditable")?null:a}var d=new RegExp(/[^\s\ufeff]/);switch(a){case CKEDITOR.ENLARGE_INLINE:var f=1;case CKEDITOR.ENLARGE_ELEMENT:var k=function(a,b){var g=new CKEDITOR.dom.range(e);g.setStart(a,b);g.setEndAt(e,CKEDITOR.POSITION_BEFORE_END);var g=new CKEDITOR.dom.walker(g),
c;for(g.guard=function(a){return!(a.type==CKEDITOR.NODE_ELEMENT&&a.isBlockBoundary())};c=g.next();){if(c.type!=CKEDITOR.NODE_TEXT)return!1;C=c!=a?c.getText():c.substring(b);if(d.test(C))return!1}return!0};if(this.collapsed)break;var h=this.getCommonAncestor(),e=this.root,m,l,r,z,E,y=!1,A,C;A=this.startContainer;var G=this.startOffset;A.type==CKEDITOR.NODE_TEXT?(G&&(A=!CKEDITOR.tools.trim(A.substring(0,G)).length&&A,y=!!A),A&&((z=A.getPrevious())||(r=A.getParent()))):(G&&(z=A.getChild(G-1)||A.getLast()),
z||(r=A));for(r=c(r);r||z;){if(r&&!z){!E&&r.equals(h)&&(E=!0);if(f?r.isBlockBoundary():!e.contains(r))break;y&&"inline"==r.getComputedStyle("display")||(y=!1,E?m=r:this.setStartBefore(r));z=r.getPrevious()}for(;z;)if(A=!1,z.type==CKEDITOR.NODE_COMMENT)z=z.getPrevious();else{if(z.type==CKEDITOR.NODE_TEXT)C=z.getText(),d.test(C)&&(z=null),A=/[\s\ufeff]$/.test(C);else if((z.$.offsetWidth>(CKEDITOR.env.webkit?1:0)||b&&z.is("br"))&&!z.data("cke-bookmark"))if(y&&CKEDITOR.dtd.$removeEmpty[z.getName()]){C=
z.getText();if(d.test(C))z=null;else for(var G=z.$.getElementsByTagName("*"),F=0,I;I=G[F++];)if(!CKEDITOR.dtd.$removeEmpty[I.nodeName.toLowerCase()]){z=null;break}z&&(A=!!C.length)}else z=null;A&&(y?E?m=r:r&&this.setStartBefore(r):y=!0);if(z){A=z.getPrevious();if(!r&&!A){r=z;z=null;break}z=A}else r=null}r&&(r=c(r.getParent()))}A=this.endContainer;G=this.endOffset;r=z=null;E=y=!1;A.type==CKEDITOR.NODE_TEXT?CKEDITOR.tools.trim(A.substring(G)).length?y=!0:(y=!A.getLength(),G==A.getLength()?(z=A.getNext())||
(r=A.getParent()):k(A,G)&&(r=A.getParent())):(z=A.getChild(G))||(r=A);for(;r||z;){if(r&&!z){!E&&r.equals(h)&&(E=!0);if(f?r.isBlockBoundary():!e.contains(r))break;y&&"inline"==r.getComputedStyle("display")||(y=!1,E?l=r:r&&this.setEndAfter(r));z=r.getNext()}for(;z;){A=!1;if(z.type==CKEDITOR.NODE_TEXT)C=z.getText(),k(z,0)||(z=null),A=/^[\s\ufeff]/.test(C);else if(z.type==CKEDITOR.NODE_ELEMENT){if((0<z.$.offsetWidth||b&&z.is("br"))&&!z.data("cke-bookmark"))if(y&&CKEDITOR.dtd.$removeEmpty[z.getName()]){C=
z.getText();if(d.test(C))z=null;else for(G=z.$.getElementsByTagName("*"),F=0;I=G[F++];)if(!CKEDITOR.dtd.$removeEmpty[I.nodeName.toLowerCase()]){z=null;break}z&&(A=!!C.length)}else z=null}else A=1;A&&y&&(E?l=r:this.setEndAfter(r));if(z){A=z.getNext();if(!r&&!A){r=z;z=null;break}z=A}else r=null}r&&(r=c(r.getParent()))}m&&l&&(h=m.contains(l)?l:m,this.setStartBefore(h),this.setEndAfter(h));break;case CKEDITOR.ENLARGE_BLOCK_CONTENTS:case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:r=new CKEDITOR.dom.range(this.root);
e=this.root;r.setStartAt(e,CKEDITOR.POSITION_AFTER_START);r.setEnd(this.startContainer,this.startOffset);r=new CKEDITOR.dom.walker(r);var H,K,D=CKEDITOR.dom.walker.blockBoundary(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:null),N=null,R=function(a){if(a.type==CKEDITOR.NODE_ELEMENT&&"false"==a.getAttribute("contenteditable"))if(N){if(N.equals(a)){N=null;return}}else N=a;else if(N)return;var b=D(a);b||(H=a);return b},f=function(a){var b=R(a);!b&&a.is&&a.is("br")&&(K=a);return b};r.guard=R;r=r.lastBackward();
H=H||e;this.setStartAt(H,!H.is("br")&&(!r&&this.checkStartOfBlock()||r&&H.contains(r))?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_AFTER_END);if(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS){r=this.clone();r=new CKEDITOR.dom.walker(r);var P=CKEDITOR.dom.walker.whitespaces(),T=CKEDITOR.dom.walker.bookmark();r.evaluator=function(a){return!P(a)&&!T(a)};if((r=r.previous())&&r.type==CKEDITOR.NODE_ELEMENT&&r.is("br"))break}r=this.clone();r.collapse();r.setEndAt(e,CKEDITOR.POSITION_BEFORE_END);r=new CKEDITOR.dom.walker(r);
r.guard=a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?f:R;H=N=K=null;r=r.lastForward();H=H||e;this.setEndAt(H,!r&&this.checkEndOfBlock()||r&&H.contains(r)?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_BEFORE_START);K&&this.setEndAfter(K)}},shrink:function(a,b,c){if(!this.collapsed){a=a||CKEDITOR.SHRINK_TEXT;var d=this.clone(),f=this.startContainer,k=this.endContainer,h=this.startOffset,e=this.endOffset,m=1,l=1;f&&f.type==CKEDITOR.NODE_TEXT&&(h?h>=f.getLength()?d.setStartAfter(f):(d.setStartBefore(f),m=
0):d.setStartBefore(f));k&&k.type==CKEDITOR.NODE_TEXT&&(e?e>=k.getLength()?d.setEndAfter(k):(d.setEndAfter(k),l=0):d.setEndBefore(k));var d=new CKEDITOR.dom.walker(d),r=CKEDITOR.dom.walker.bookmark();d.evaluator=function(b){return b.type==(a==CKEDITOR.SHRINK_ELEMENT?CKEDITOR.NODE_ELEMENT:CKEDITOR.NODE_TEXT)};var z;d.guard=function(b,d){if(r(b))return!0;if(a==CKEDITOR.SHRINK_ELEMENT&&b.type==CKEDITOR.NODE_TEXT||d&&b.equals(z)||!1===c&&b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary()||b.type==CKEDITOR.NODE_ELEMENT&&
b.hasAttribute("contenteditable"))return!1;d||b.type!=CKEDITOR.NODE_ELEMENT||(z=b);return!0};m&&(f=d[a==CKEDITOR.SHRINK_ELEMENT?"lastForward":"next"]())&&this.setStartAt(f,b?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_START);l&&(d.reset(),(d=d[a==CKEDITOR.SHRINK_ELEMENT?"lastBackward":"previous"]())&&this.setEndAt(d,b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_END));return!(!m&&!l)}},insertNode:function(a){this.optimizeBookmark();this.trim(!1,!0);var b=this.startContainer,c=b.getChild(this.startOffset);
c?a.insertBefore(c):b.append(a);a.getParent()&&a.getParent().equals(this.endContainer)&&this.endOffset++;this.setStartBefore(a)},moveToPosition:function(a,b){this.setStartAt(a,b);this.collapse(!0)},moveToRange:function(a){this.setStart(a.startContainer,a.startOffset);this.setEnd(a.endContainer,a.endOffset)},selectNodeContents:function(a){this.setStart(a,0);this.setEnd(a,a.type==CKEDITOR.NODE_TEXT?a.getLength():a.getChildCount())},setStart:function(b,c){b.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[b.getName()]&&
(c=b.getIndex(),b=b.getParent());this._setStartContainer(b);this.startOffset=c;this.endContainer||(this._setEndContainer(b),this.endOffset=c);a(this)},setEnd:function(b,c){b.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[b.getName()]&&(c=b.getIndex()+1,b=b.getParent());this._setEndContainer(b);this.endOffset=c;this.startContainer||(this._setStartContainer(b),this.startOffset=c);a(this)},setStartAfter:function(a){this.setStart(a.getParent(),a.getIndex()+1)},setStartBefore:function(a){this.setStart(a.getParent(),
a.getIndex())},setEndAfter:function(a){this.setEnd(a.getParent(),a.getIndex()+1)},setEndBefore:function(a){this.setEnd(a.getParent(),a.getIndex())},setStartAt:function(b,c){switch(c){case CKEDITOR.POSITION_AFTER_START:this.setStart(b,0);break;case CKEDITOR.POSITION_BEFORE_END:b.type==CKEDITOR.NODE_TEXT?this.setStart(b,b.getLength()):this.setStart(b,b.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setStartBefore(b);break;case CKEDITOR.POSITION_AFTER_END:this.setStartAfter(b)}a(this)},
setEndAt:function(b,c){switch(c){case CKEDITOR.POSITION_AFTER_START:this.setEnd(b,0);break;case CKEDITOR.POSITION_BEFORE_END:b.type==CKEDITOR.NODE_TEXT?this.setEnd(b,b.getLength()):this.setEnd(b,b.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setEndBefore(b);break;case CKEDITOR.POSITION_AFTER_END:this.setEndAfter(b)}a(this)},fixBlock:function(a,b){var c=this.createBookmark(),d=this.document.createElement(b);this.collapse(a);this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);this.extractContents().appendTo(d);
d.trim();this.insertNode(d);var f=d.getBogus();f&&f.remove();d.appendBogus();this.moveToBookmark(c);return d},splitBlock:function(a,b){var c=new CKEDITOR.dom.elementPath(this.startContainer,this.root),d=new CKEDITOR.dom.elementPath(this.endContainer,this.root),f=c.block,k=d.block,h=null;if(!c.blockLimit.equals(d.blockLimit))return null;"br"!=a&&(f||(f=this.fixBlock(!0,a),k=(new CKEDITOR.dom.elementPath(this.endContainer,this.root)).block),k||(k=this.fixBlock(!1,a)));c=f&&this.checkStartOfBlock();
d=k&&this.checkEndOfBlock();this.deleteContents();f&&f.equals(k)&&(d?(h=new CKEDITOR.dom.elementPath(this.startContainer,this.root),this.moveToPosition(k,CKEDITOR.POSITION_AFTER_END),k=null):c?(h=new CKEDITOR.dom.elementPath(this.startContainer,this.root),this.moveToPosition(f,CKEDITOR.POSITION_BEFORE_START),f=null):(k=this.splitElement(f,b||!1),f.is("ul","ol")||f.appendBogus()));return{previousBlock:f,nextBlock:k,wasStartOfBlock:c,wasEndOfBlock:d,elementPath:h}},splitElement:function(a,b){if(!this.collapsed)return null;
this.setEndAt(a,CKEDITOR.POSITION_BEFORE_END);var c=this.extractContents(!1,b||!1),d=a.clone(!1,b||!1);c.appendTo(d);d.insertAfter(a);this.moveToPosition(a,CKEDITOR.POSITION_AFTER_END);return d},removeEmptyBlocksAtEnd:function(){function a(g){return function(a){return b(a)||c(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.isEmptyInlineRemoveable()||g.is("table")&&a.is("caption")?!1:!0}}var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(!1);return function(b){for(var c=this.createBookmark(),
d=this[b?"endPath":"startPath"](),f=d.block||d.blockLimit,k;f&&!f.equals(d.root)&&!f.getFirst(a(f));)k=f.getParent(),this[b?"setEndAt":"setStartAt"](f,CKEDITOR.POSITION_AFTER_END),f.remove(1),f=k;this.moveToBookmark(c)}}(),startPath:function(){return new CKEDITOR.dom.elementPath(this.startContainer,this.root)},endPath:function(){return new CKEDITOR.dom.elementPath(this.endContainer,this.root)},checkBoundaryOfElement:function(a,b){var d=b==CKEDITOR.START,f=this.clone();f.collapse(d);f[d?"setStartAt":
"setEndAt"](a,d?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END);f=new CKEDITOR.dom.walker(f);f.evaluator=c(d);return f[d?"checkBackward":"checkForward"]()},checkStartOfBlock:function(){var a=this.startContainer,c=this.startOffset;CKEDITOR.env.ie&&c&&a.type==CKEDITOR.NODE_TEXT&&(a=CKEDITOR.tools.ltrim(a.substring(0,c)),f.test(a)&&this.trim(0,1));this.trim();a=new CKEDITOR.dom.elementPath(this.startContainer,this.root);c=this.clone();c.collapse(!0);c.setStartAt(a.block||a.blockLimit,CKEDITOR.POSITION_AFTER_START);
a=new CKEDITOR.dom.walker(c);a.evaluator=b();return a.checkBackward()},checkEndOfBlock:function(){var a=this.endContainer,c=this.endOffset;CKEDITOR.env.ie&&a.type==CKEDITOR.NODE_TEXT&&(a=CKEDITOR.tools.rtrim(a.substring(c)),f.test(a)&&this.trim(1,0));this.trim();a=new CKEDITOR.dom.elementPath(this.endContainer,this.root);c=this.clone();c.collapse(!1);c.setEndAt(a.block||a.blockLimit,CKEDITOR.POSITION_BEFORE_END);a=new CKEDITOR.dom.walker(c);a.evaluator=b();return a.checkForward()},getPreviousNode:function(a,
b,c){var d=this.clone();d.collapse(1);d.setStartAt(c||this.root,CKEDITOR.POSITION_AFTER_START);c=new CKEDITOR.dom.walker(d);c.evaluator=a;c.guard=b;return c.previous()},getNextNode:function(a,b,c){var d=this.clone();d.collapse();d.setEndAt(c||this.root,CKEDITOR.POSITION_BEFORE_END);c=new CKEDITOR.dom.walker(d);c.evaluator=a;c.guard=b;return c.next()},checkReadOnly:function(){function a(b,c){for(;b;){if(b.type==CKEDITOR.NODE_ELEMENT){if("false"==b.getAttribute("contentEditable")&&!b.data("cke-editable"))return 0;
if(b.is("html")||"true"==b.getAttribute("contentEditable")&&(b.contains(c)||b.equals(c)))break}b=b.getParent()}return 1}return function(){var b=this.startContainer,c=this.endContainer;return!(a(b,c)&&a(c,b))}}(),moveToElementEditablePosition:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&!a.isEditable(!1))return this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START),!0;for(var c=0;a;){if(a.type==CKEDITOR.NODE_TEXT){b&&this.endContainer&&this.checkEndOfBlock()&&f.test(a.getText())?
this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START):this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);c=1;break}if(a.type==CKEDITOR.NODE_ELEMENT)if(a.isEditable())this.moveToPosition(a,b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_START),c=1;else if(b&&a.is("br")&&this.endContainer&&this.checkEndOfBlock())this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START);else if("false"==a.getAttribute("contenteditable")&&a.is(CKEDITOR.dtd.$block))return this.setStartBefore(a),
this.setEndAfter(a),!0;var d=a,h=c,e=void 0;d.type==CKEDITOR.NODE_ELEMENT&&d.isEditable(!1)&&(e=d[b?"getLast":"getFirst"](k));h||e||(e=d[b?"getPrevious":"getNext"](k));a=e}return!!c},moveToClosestEditablePosition:function(a,b){var c,d=0,f,k,h=[CKEDITOR.POSITION_AFTER_END,CKEDITOR.POSITION_BEFORE_START];a?(c=new CKEDITOR.dom.range(this.root),c.moveToPosition(a,h[b?0:1])):c=this.clone();if(a&&!a.is(CKEDITOR.dtd.$block))d=1;else if(f=c[b?"getNextEditableNode":"getPreviousEditableNode"]())d=1,(k=f.type==
CKEDITOR.NODE_ELEMENT)&&f.is(CKEDITOR.dtd.$block)&&"false"==f.getAttribute("contenteditable")?(c.setStartAt(f,CKEDITOR.POSITION_BEFORE_START),c.setEndAt(f,CKEDITOR.POSITION_AFTER_END)):!CKEDITOR.env.needsBrFiller&&k&&f.is(CKEDITOR.dom.walker.validEmptyBlockContainers)?(c.setEnd(f,0),c.collapse()):c.moveToPosition(f,h[b?1:0]);d&&this.moveToRange(c);return!!d},moveToElementEditStart:function(a){return this.moveToElementEditablePosition(a)},moveToElementEditEnd:function(a){return this.moveToElementEditablePosition(a,
!0)},getEnclosedNode:function(){var a=this.clone();a.optimize();if(a.startContainer.type!=CKEDITOR.NODE_ELEMENT||a.endContainer.type!=CKEDITOR.NODE_ELEMENT)return null;var a=new CKEDITOR.dom.walker(a),b=CKEDITOR.dom.walker.bookmark(!1,!0),c=CKEDITOR.dom.walker.whitespaces(!0);a.evaluator=function(a){return c(a)&&b(a)};var d=a.next();a.reset();return d&&d.equals(a.previous())?d:null},getTouchedStartNode:function(){var a=this.startContainer;return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.startOffset)||
a},getTouchedEndNode:function(){var a=this.endContainer;return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.endOffset-1)||a},getNextEditableNode:d(),getPreviousEditableNode:d(1),scrollIntoView:function(){var a=new CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e",this.document),b,c,d,f=this.clone();f.optimize();(d=f.startContainer.type==CKEDITOR.NODE_TEXT)?(c=f.startContainer.getText(),b=f.startContainer.split(f.startOffset),a.insertAfter(f.startContainer)):
f.insertNode(a);a.scrollIntoView();d&&(f.startContainer.setText(c),b.remove());a.remove()},_setStartContainer:function(a){this.startContainer=a},_setEndContainer:function(a){this.endContainer=a}}}(),CKEDITOR.POSITION_AFTER_START=1,CKEDITOR.POSITION_BEFORE_END=2,CKEDITOR.POSITION_BEFORE_START=3,CKEDITOR.POSITION_AFTER_END=4,CKEDITOR.ENLARGE_ELEMENT=1,CKEDITOR.ENLARGE_BLOCK_CONTENTS=2,CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS=3,CKEDITOR.ENLARGE_INLINE=4,CKEDITOR.START=1,CKEDITOR.END=2,CKEDITOR.SHRINK_ELEMENT=
1,CKEDITOR.SHRINK_TEXT=2,"use strict",function(){function a(a){1>arguments.length||(this.range=a,this.forceBrBreak=0,this.enlargeBr=1,this.enforceRealBlocks=0,this._||(this._={}))}function e(a){var b=[];a.forEach(function(a){if("true"==a.getAttribute("contenteditable"))return b.push(a),!1},CKEDITOR.NODE_ELEMENT,!0);return b}function b(a,c,d,f){a:{null==f&&(f=e(d));for(var h;h=f.shift();)if(h.getDtd().p){f={element:h,remaining:f};break a}f=null}if(!f)return 0;if((h=CKEDITOR.filter.instances[f.element.data("cke-filter")])&&
!h.check(c))return b(a,c,d,f.remaining);c=new CKEDITOR.dom.range(f.element);c.selectNodeContents(f.element);c=c.createIterator();c.enlargeBr=a.enlargeBr;c.enforceRealBlocks=a.enforceRealBlocks;c.activeFilter=c.filter=h;a._.nestedEditable={element:f.element,container:d,remaining:f.remaining,iterator:c};return 1}function c(a,b,c){if(!b)return!1;a=a.clone();a.collapse(!c);return a.checkBoundaryOfElement(b,c?CKEDITOR.START:CKEDITOR.END)}var d=/^[\r\n\t ]+$/,m=CKEDITOR.dom.walker.bookmark(!1,!0),l=CKEDITOR.dom.walker.whitespaces(!0),
f=function(a){return m(a)&&l(a)},h={dd:1,dt:1,li:1};a.prototype={getNextParagraph:function(a){var g,e,l,q,v;a=a||"p";if(this._.nestedEditable){if(g=this._.nestedEditable.iterator.getNextParagraph(a))return this.activeFilter=this._.nestedEditable.iterator.activeFilter,g;this.activeFilter=this.filter;if(b(this,a,this._.nestedEditable.container,this._.nestedEditable.remaining))return this.activeFilter=this._.nestedEditable.iterator.activeFilter,this._.nestedEditable.iterator.getNextParagraph(a);this._.nestedEditable=
null}if(!this.range.root.getDtd()[a])return null;if(!this._.started){var t=this.range.clone();e=t.startPath();var p=t.endPath(),w=!t.collapsed&&c(t,e.block),x=!t.collapsed&&c(t,p.block,1);t.shrink(CKEDITOR.SHRINK_ELEMENT,!0);w&&t.setStartAt(e.block,CKEDITOR.POSITION_BEFORE_END);x&&t.setEndAt(p.block,CKEDITOR.POSITION_AFTER_START);e=t.endContainer.hasAscendant("pre",!0)||t.startContainer.hasAscendant("pre",!0);t.enlarge(this.forceBrBreak&&!e||!this.enlargeBr?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:CKEDITOR.ENLARGE_BLOCK_CONTENTS);
t.collapsed||(e=new CKEDITOR.dom.walker(t.clone()),p=CKEDITOR.dom.walker.bookmark(!0,!0),e.evaluator=p,this._.nextNode=e.next(),e=new CKEDITOR.dom.walker(t.clone()),e.evaluator=p,e=e.previous(),this._.lastNode=e.getNextSourceNode(!0,null,t.root),this._.lastNode&&this._.lastNode.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(this._.lastNode.getText())&&this._.lastNode.getParent().isBlockBoundary()&&(p=this.range.clone(),p.moveToPosition(this._.lastNode,CKEDITOR.POSITION_AFTER_END),p.checkEndOfBlock()&&
(p=new CKEDITOR.dom.elementPath(p.endContainer,p.root),this._.lastNode=(p.block||p.blockLimit).getNextSourceNode(!0))),this._.lastNode&&t.root.contains(this._.lastNode)||(this._.lastNode=this._.docEndMarker=t.document.createText(""),this._.lastNode.insertAfter(e)),t=null);this._.started=1;e=t}p=this._.nextNode;t=this._.lastNode;for(this._.nextNode=null;p;){var w=0,x=p.hasAscendant("pre"),B=p.type!=CKEDITOR.NODE_ELEMENT,r=0;if(B)p.type==CKEDITOR.NODE_TEXT&&d.test(p.getText())&&(B=0);else{var z=p.getName();
if(CKEDITOR.dtd.$block[z]&&"false"==p.getAttribute("contenteditable")){g=p;b(this,a,g);break}else if(p.isBlockBoundary(this.forceBrBreak&&!x&&{br:1})){if("br"==z)B=1;else if(!e&&!p.getChildCount()&&"hr"!=z){g=p;l=p.equals(t);break}e&&(e.setEndAt(p,CKEDITOR.POSITION_BEFORE_START),"br"!=z&&(this._.nextNode=p));w=1}else{if(p.getFirst()){e||(e=this.range.clone(),e.setStartAt(p,CKEDITOR.POSITION_BEFORE_START));p=p.getFirst();continue}B=1}}B&&!e&&(e=this.range.clone(),e.setStartAt(p,CKEDITOR.POSITION_BEFORE_START));
l=(!w||B)&&p.equals(t);if(e&&!w)for(;!p.getNext(f)&&!l;){z=p.getParent();if(z.isBlockBoundary(this.forceBrBreak&&!x&&{br:1})){w=1;B=0;l||z.equals(t);e.setEndAt(z,CKEDITOR.POSITION_BEFORE_END);break}p=z;B=1;l=p.equals(t);r=1}B&&e.setEndAt(p,CKEDITOR.POSITION_AFTER_END);p=this._getNextSourceNode(p,r,t);if((l=!p)||w&&e)break}if(!g){if(!e)return this._.docEndMarker&&this._.docEndMarker.remove(),this._.nextNode=null;g=new CKEDITOR.dom.elementPath(e.startContainer,e.root);p=g.blockLimit;w={div:1,th:1,td:1};
g=g.block;!g&&p&&!this.enforceRealBlocks&&w[p.getName()]&&e.checkStartOfBlock()&&e.checkEndOfBlock()&&!p.equals(e.root)?g=p:!g||this.enforceRealBlocks&&g.is(h)?(g=this.range.document.createElement(a),e.extractContents().appendTo(g),g.trim(),e.insertNode(g),q=v=!0):"li"!=g.getName()?e.checkStartOfBlock()&&e.checkEndOfBlock()||(g=g.clone(!1),e.extractContents().appendTo(g),g.trim(),v=e.splitBlock(),q=!v.wasStartOfBlock,v=!v.wasEndOfBlock,e.insertNode(g)):l||(this._.nextNode=g.equals(t)?null:this._getNextSourceNode(e.getBoundaryNodes().endNode,
1,t))}q&&(q=g.getPrevious())&&q.type==CKEDITOR.NODE_ELEMENT&&("br"==q.getName()?q.remove():q.getLast()&&"br"==q.getLast().$.nodeName.toLowerCase()&&q.getLast().remove());v&&(q=g.getLast())&&q.type==CKEDITOR.NODE_ELEMENT&&"br"==q.getName()&&(!CKEDITOR.env.needsBrFiller||q.getPrevious(m)||q.getNext(m))&&q.remove();this._.nextNode||(this._.nextNode=l||g.equals(t)||!t?null:this._getNextSourceNode(g,1,t));return g},_getNextSourceNode:function(a,b,c){function d(a){return!(a.equals(c)||a.equals(f))}var f=
this.range.root;for(a=a.getNextSourceNode(b,null,d);!m(a);)a=a.getNextSourceNode(b,null,d);return a}};CKEDITOR.dom.range.prototype.createIterator=function(){return new a(this)}}(),CKEDITOR.command=function(a,e){this.uiItems=[];this.exec=function(b){if(this.state==CKEDITOR.TRISTATE_DISABLED||!this.checkAllowed())return!1;this.editorFocus&&a.focus();return!1===this.fire("exec")?!0:!1!==e.exec.call(this,a,b)};this.refresh=function(a,b){if(!this.readOnly&&a.readOnly)return!0;if(this.context&&!b.isContextFor(this.context)||
!this.checkAllowed(!0))return this.disable(),!0;this.startDisabled||this.enable();this.modes&&!this.modes[a.mode]&&this.disable();return!1===this.fire("refresh",{editor:a,path:b})?!0:e.refresh&&!1!==e.refresh.apply(this,arguments)};var b;this.checkAllowed=function(c){return c||"boolean"!=typeof b?b=a.activeFilter.checkFeature(this):b};CKEDITOR.tools.extend(this,e,{modes:{wysiwyg:1},editorFocus:1,contextSensitive:!!e.context,state:CKEDITOR.TRISTATE_DISABLED});CKEDITOR.event.call(this)},CKEDITOR.command.prototype=
{enable:function(){this.state==CKEDITOR.TRISTATE_DISABLED&&this.checkAllowed()&&this.setState(this.preserveState&&"undefined"!=typeof this.previousState?this.previousState:CKEDITOR.TRISTATE_OFF)},disable:function(){this.setState(CKEDITOR.TRISTATE_DISABLED)},setState:function(a){if(this.state==a||a!=CKEDITOR.TRISTATE_DISABLED&&!this.checkAllowed())return!1;this.previousState=this.state;this.state=a;this.fire("state");return!0},toggleState:function(){this.state==CKEDITOR.TRISTATE_OFF?this.setState(CKEDITOR.TRISTATE_ON):
this.state==CKEDITOR.TRISTATE_ON&&this.setState(CKEDITOR.TRISTATE_OFF)}},CKEDITOR.event.implementOn(CKEDITOR.command.prototype),CKEDITOR.ENTER_P=1,CKEDITOR.ENTER_BR=2,CKEDITOR.ENTER_DIV=3,CKEDITOR.config={customConfig:"config.js",autoUpdateElement:!0,language:"",defaultLanguage:"en",contentsLangDirection:"",enterMode:CKEDITOR.ENTER_P,forceEnterMode:!1,shiftEnterMode:CKEDITOR.ENTER_BR,docType:"\x3c!DOCTYPE html\x3e",bodyId:"",bodyClass:"",fullPage:!1,height:200,extraPlugins:"",removePlugins:"",protectedSource:[],
tabIndex:0,width:"",baseFloatZIndex:1E4,blockedKeystrokes:[CKEDITOR.CTRL+66,CKEDITOR.CTRL+73,CKEDITOR.CTRL+85]},function(){function a(a,b,c,d,g){var f,k;a=[];for(f in b){k=b[f];k="boolean"==typeof k?{}:"function"==typeof k?{match:k}:F(k);"$"!=f.charAt(0)&&(k.elements=f);c&&(k.featureName=c.toLowerCase());var e=k;e.elements=l(e.elements,/\s+/)||null;e.propertiesOnly=e.propertiesOnly||!0===e.elements;var h=/\s*,\s*/,m=void 0;for(m in K){e[m]=l(e[m],h)||null;var r=e,z=D[m],t=l(e[D[m]],h),B=e[m],p=[],
E=!0,n=void 0;t?E=!1:t={};for(n in B)"!"==n.charAt(0)&&(n=n.slice(1),p.push(n),t[n]=!0,E=!1);for(;n=p.pop();)B[n]=B["!"+n],delete B["!"+n];r[z]=(E?!1:t)||null}e.match=e.match||null;d.push(k);a.push(k)}b=g.elements;g=g.generic;var v;c=0;for(d=a.length;c<d;++c){f=F(a[c]);k=!0===f.classes||!0===f.styles||!0===f.attributes;e=f;m=z=h=void 0;for(h in K)e[h]=w(e[h]);r=!0;for(m in D){h=D[m];z=e[h];t=[];B=void 0;for(B in z)-1<B.indexOf("*")?t.push(new RegExp("^"+B.replace(/\*/g,".*")+"$")):t.push(B);z=t;z.length&&
(e[h]=z,r=!1)}e.nothingRequired=r;e.noProperties=!(e.attributes||e.classes||e.styles);if(!0===f.elements||null===f.elements)g[k?"unshift":"push"](f);else for(v in e=f.elements,delete f.elements,e)if(b[v])b[v][k?"unshift":"push"](f);else b[v]=[f]}}function e(a,c,d,g){if(!a.match||a.match(c))if(g||f(a,c))if(a.propertiesOnly||(d.valid=!0),d.allAttributes||(d.allAttributes=b(a.attributes,c.attributes,d.validAttributes)),d.allStyles||(d.allStyles=b(a.styles,c.styles,d.validStyles)),!d.allClasses){a=a.classes;
c=c.classes;g=d.validClasses;if(a)if(!0===a)a=!0;else{for(var k=0,e=c.length,h;k<e;++k)h=c[k],g[h]||(g[h]=a(h));a=!1}else a=!1;d.allClasses=a}}function b(a,b,c){if(!a)return!1;if(!0===a)return!0;for(var d in b)c[d]||(c[d]=a(d));return!1}function c(a,b,c){if(!a.match||a.match(b)){if(a.noProperties)return!1;c.hadInvalidAttribute=d(a.attributes,b.attributes)||c.hadInvalidAttribute;c.hadInvalidStyle=d(a.styles,b.styles)||c.hadInvalidStyle;a=a.classes;b=b.classes;if(a){for(var f=!1,g=!0===a,k=b.length;k--;)if(g||
a(b[k]))b.splice(k,1),f=!0;a=f}else a=!1;c.hadInvalidClass=a||c.hadInvalidClass}}function d(a,b){if(!a)return!1;var c=!1,d=!0===a,f;for(f in b)if(d||a(f))delete b[f],c=!0;return c}function m(a,b,c){if(a.disabled||a.customConfig&&!c||!b)return!1;a._.cachedChecks={};return!0}function l(a,b){if(!a)return!1;if(!0===a)return a;if("string"==typeof a)return a=I(a),"*"==a?!0:CKEDITOR.tools.convertArrayToObject(a.split(b));if(CKEDITOR.tools.isArray(a))return a.length?CKEDITOR.tools.convertArrayToObject(a):
!1;var c={},d=0,f;for(f in a)c[f]=a[f],d++;return d?c:!1}function f(a,b){if(a.nothingRequired)return!0;var c,d,f,g;if(f=a.requiredClasses)for(g=b.classes,c=0;c<f.length;++c)if(d=f[c],"string"==typeof d){if(-1==CKEDITOR.tools.indexOf(g,d))return!1}else if(!CKEDITOR.tools.checkIfAnyArrayItemMatches(g,d))return!1;return h(b.styles,a.requiredStyles)&&h(b.attributes,a.requiredAttributes)}function h(a,b){if(!b)return!0;for(var c=0,d;c<b.length;++c)if(d=b[c],"string"==typeof d){if(!(d in a))return!1}else if(!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(a,
d))return!1;return!0}function k(a){if(!a)return{};a=a.split(/\s*,\s*/).sort();for(var b={};a.length;)b[a.shift()]="cke-test";return b}function g(a){var b,c,d,f,g={},k=1;for(a=I(a);b=a.match(N);)(c=b[2])?(d=n(c,"styles"),f=n(c,"attrs"),c=n(c,"classes")):d=f=c=null,g["$"+k++]={elements:b[1],classes:c,styles:d,attributes:f},a=a.slice(b[0].length);return g}function n(a,b){var c=a.match(R[b]);return c?I(c[1]):null}function u(a){var b=a.styleBackup=a.attributes.style,c=a.classBackup=a.attributes["class"];
a.styles||(a.styles=CKEDITOR.tools.parseCssText(b||"",1));a.classes||(a.classes=c?c.split(/\s+/):[])}function q(a,b,d,f){var g=0,k;f.toHtml&&(b.name=b.name.replace(P,"$1"));if(f.doCallbacks&&a.elementCallbacks){a:{k=a.elementCallbacks;for(var h=0,m=k.length,r;h<m;++h)if(r=k[h](b)){k=r;break a}k=void 0}if(k)return k}if(f.doTransform&&(k=a._.transformations[b.name])){u(b);for(h=0;h<k.length;++h)z(a,b,k[h]);t(b)}if(f.doFilter){a:{h=b.name;m=a._;a=m.allowedRules.elements[h];k=m.allowedRules.generic;h=
m.disallowedRules.elements[h];m=m.disallowedRules.generic;r=f.skipRequired;var l={valid:!1,validAttributes:{},validClasses:{},validStyles:{},allAttributes:!1,allClasses:!1,allStyles:!1,hadInvalidAttribute:!1,hadInvalidClass:!1,hadInvalidStyle:!1},D,B;if(a||k){u(b);if(h)for(D=0,B=h.length;D<B;++D)if(!1===c(h[D],b,l)){a=null;break a}if(m)for(D=0,B=m.length;D<B;++D)c(m[D],b,l);if(a)for(D=0,B=a.length;D<B;++D)e(a[D],b,l,r);if(k)for(D=0,B=k.length;D<B;++D)e(k[D],b,l,r);a=l}else a=null}if(!a||!a.valid)return d.push(b),
1;B=a.validAttributes;var w=a.validStyles;k=a.validClasses;var h=b.attributes,n=b.styles,m=b.classes;r=b.classBackup;var E=b.styleBackup,v,y,A=[],l=[],x=/^data-cke-/;D=!1;delete h.style;delete h["class"];delete b.classBackup;delete b.styleBackup;if(!a.allAttributes)for(v in h)B[v]||(x.test(v)?v==(y=v.replace(/^data-cke-saved-/,""))||B[y]||(delete h[v],D=!0):(delete h[v],D=!0));if(!a.allStyles||a.hadInvalidStyle){for(v in n)a.allStyles||w[v]?A.push(v+":"+n[v]):D=!0;A.length&&(h.style=A.sort().join("; "))}else E&&
(h.style=E);if(!a.allClasses||a.hadInvalidClass){for(v=0;v<m.length;++v)(a.allClasses||k[m[v]])&&l.push(m[v]);l.length&&(h["class"]=l.sort().join(" "));r&&l.length<r.split(/\s+/).length&&(D=!0)}else r&&(h["class"]=r);D&&(g=1);if(!f.skipFinalValidation&&!p(b))return d.push(b),1}f.toHtml&&(b.name=b.name.replace(T,"cke:$1"));return g}function v(a){var b=[],c;for(c in a)-1<c.indexOf("*")&&b.push(c.replace(/\*/g,".*"));return b.length?new RegExp("^(?:"+b.join("|")+")$"):null}function t(a){var b=a.attributes,
c;delete b.style;delete b["class"];if(c=CKEDITOR.tools.writeCssText(a.styles,!0))b.style=c;a.classes.length&&(b["class"]=a.classes.sort().join(" "))}function p(a){switch(a.name){case "a":if(!(a.children.length||a.attributes.name||a.attributes.id))return!1;break;case "img":if(!a.attributes.src)return!1}return!0}function w(a){if(!a)return!1;if(!0===a)return!0;var b=v(a);return function(c){return c in a||b&&c.match(b)}}function x(){return new CKEDITOR.htmlParser.element("br")}function B(a){return a.type==
CKEDITOR.NODE_ELEMENT&&("br"==a.name||G.$block[a.name])}function r(a,b,c){var d=a.name;if(G.$empty[d]||!a.children.length)"hr"==d&&"br"==b?a.replaceWith(x()):(a.parent&&c.push({check:"it",el:a.parent}),a.remove());else if(G.$block[d]||"tr"==d)if("br"==b)a.previous&&!B(a.previous)&&(b=x(),b.insertBefore(a)),a.next&&!B(a.next)&&(b=x(),b.insertAfter(a)),a.replaceWithChildren();else{var d=a.children,f;b:{f=G[b];for(var g=0,k=d.length,e;g<k;++g)if(e=d[g],e.type==CKEDITOR.NODE_ELEMENT&&!f[e.name]){f=!1;
break b}f=!0}if(f)a.name=b,a.attributes={},c.push({check:"parent-down",el:a});else{f=a.parent;for(var g=f.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||"body"==f.name,h,m,k=d.length;0<k;)e=d[--k],g&&(e.type==CKEDITOR.NODE_TEXT||e.type==CKEDITOR.NODE_ELEMENT&&G.$inline[e.name])?(h||(h=new CKEDITOR.htmlParser.element(b),h.insertAfter(a),c.push({check:"parent-down",el:h})),h.add(e,0)):(h=null,m=G[f.name]||G.span,e.insertAfter(a),f.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||e.type!=CKEDITOR.NODE_ELEMENT||m[e.name]||
c.push({check:"el-up",el:e}));a.remove()}}else d in{style:1,script:1}?a.remove():(a.parent&&c.push({check:"it",el:a.parent}),a.replaceWithChildren())}function z(a,b,c){var d,f;for(d=0;d<c.length;++d)if(f=c[d],!(f.check&&!a.check(f.check,!1)||f.left&&!f.left(b))){f.right(b,O);break}}function E(a,b){var c=b.getDefinition(),d=c.attributes,f=c.styles,g,k,e,h;if(a.name!=c.element)return!1;for(g in d)if("class"==g)for(c=d[g].split(/\s+/),e=a.classes.join("|");h=c.pop();){if(-1==e.indexOf(h))return!1}else if(a.attributes[g]!=
d[g])return!1;for(k in f)if(a.styles[k]!=f[k])return!1;return!0}function y(a,b){var c,d;"string"==typeof a?c=a:a instanceof CKEDITOR.style?d=a:(c=a[0],d=a[1]);return[{element:c,left:d,right:function(a,c){c.transform(a,b)}}]}function A(a){return function(b){return E(b,a)}}function C(a){return function(b,c){c[a](b)}}var G=CKEDITOR.dtd,F=CKEDITOR.tools.copy,I=CKEDITOR.tools.trim,H=["","p","br","div"];CKEDITOR.FILTER_SKIP_TREE=2;CKEDITOR.filter=function(a){this.allowedContent=[];this.disallowedContent=
[];this.elementCallbacks=null;this.disabled=!1;this.editor=null;this.id=CKEDITOR.tools.getNextNumber();this._={allowedRules:{elements:{},generic:[]},disallowedRules:{elements:{},generic:[]},transformations:{},cachedTests:{}};CKEDITOR.filter.instances[this.id]=this;if(a instanceof CKEDITOR.editor){a=this.editor=a;this.customConfig=!0;var b=a.config.allowedContent;!0===b?this.disabled=!0:(b||(this.customConfig=!1),this.allow(b,"config",1),this.allow(a.config.extraAllowedContent,"extra",1),this.allow(H[a.enterMode]+
" "+H[a.shiftEnterMode],"default",1),this.disallow(a.config.disallowedContent))}else this.customConfig=!1,this.allow(a,"default",1)};CKEDITOR.filter.instances={};CKEDITOR.filter.prototype={allow:function(b,c,d){if(!m(this,b,d))return!1;var f,k;if("string"==typeof b)b=g(b);else if(b instanceof CKEDITOR.style){if(b.toAllowedContentRules)return this.allow(b.toAllowedContentRules(this.editor),c,d);f=b.getDefinition();b={};d=f.attributes;b[f.element]=f={styles:f.styles,requiredStyles:f.styles&&CKEDITOR.tools.objectKeys(f.styles)};
d&&(d=F(d),f.classes=d["class"]?d["class"].split(/\s+/):null,f.requiredClasses=f.classes,delete d["class"],f.attributes=d,f.requiredAttributes=d&&CKEDITOR.tools.objectKeys(d))}else if(CKEDITOR.tools.isArray(b)){for(f=0;f<b.length;++f)k=this.allow(b[f],c,d);return k}a(this,b,c,this.allowedContent,this._.allowedRules);return!0},applyTo:function(a,b,c,d){if(this.disabled)return!1;var f=this,g=[],k=this.editor&&this.editor.config.protectedSource,e,h=!1,m={doFilter:!c,doTransform:!0,doCallbacks:!0,toHtml:b};
a.forEach(function(a){if(a.type==CKEDITOR.NODE_ELEMENT){if("off"==a.attributes["data-cke-filter"])return!1;if(!b||"span"!=a.name||!~CKEDITOR.tools.objectKeys(a.attributes).join("|").indexOf("data-cke-"))if(e=q(f,a,g,m),e&1)h=!0;else if(e&2)return!1}else if(a.type==CKEDITOR.NODE_COMMENT&&a.value.match(/^\{cke_protected\}(?!\{C\})/)){var c;a:{var d=decodeURIComponent(a.value.replace(/^\{cke_protected\}/,""));c=[];var r,l,D;if(k)for(l=0;l<k.length;++l)if((D=d.match(k[l]))&&D[0].length==d.length){c=!0;
break a}d=CKEDITOR.htmlParser.fragment.fromHtml(d);1==d.children.length&&(r=d.children[0]).type==CKEDITOR.NODE_ELEMENT&&q(f,r,c,m);c=!c.length}c||g.push(a)}},null,!0);g.length&&(h=!0);var l;a=[];d=H[d||(this.editor?this.editor.enterMode:CKEDITOR.ENTER_P)];for(var D;c=g.pop();)c.type==CKEDITOR.NODE_ELEMENT?r(c,d,a):c.remove();for(;l=a.pop();)if(c=l.el,c.parent)switch(D=G[c.parent.name]||G.span,l.check){case "it":G.$removeEmpty[c.name]&&!c.children.length?r(c,d,a):p(c)||r(c,d,a);break;case "el-up":c.parent.type==
CKEDITOR.NODE_DOCUMENT_FRAGMENT||D[c.name]||r(c,d,a);break;case "parent-down":c.parent.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||D[c.name]||r(c.parent,d,a)}return h},checkFeature:function(a){if(this.disabled||!a)return!0;a.toFeature&&(a=a.toFeature(this.editor));return!a.requiredContent||this.check(a.requiredContent)},disable:function(){this.disabled=!0},disallow:function(b){if(!m(this,b,!0))return!1;"string"==typeof b&&(b=g(b));a(this,b,null,this.disallowedContent,this._.disallowedRules);return!0},
addContentForms:function(a){if(!this.disabled&&a){var b,c,d=[],f;for(b=0;b<a.length&&!f;++b)c=a[b],("string"==typeof c||c instanceof CKEDITOR.style)&&this.check(c)&&(f=c);if(f){for(b=0;b<a.length;++b)d.push(y(a[b],f));this.addTransformations(d)}}},addElementCallback:function(a){this.elementCallbacks||(this.elementCallbacks=[]);this.elementCallbacks.push(a)},addFeature:function(a){if(this.disabled||!a)return!0;a.toFeature&&(a=a.toFeature(this.editor));this.allow(a.allowedContent,a.name);this.addTransformations(a.contentTransformations);
this.addContentForms(a.contentForms);return a.requiredContent&&(this.customConfig||this.disallowedContent.length)?this.check(a.requiredContent):!0},addTransformations:function(a){var b,c;if(!this.disabled&&a){var d=this._.transformations,f;for(f=0;f<a.length;++f){b=a[f];var g=void 0,k=void 0,e=void 0,h=void 0,m=void 0,r=void 0;c=[];for(k=0;k<b.length;++k)e=b[k],"string"==typeof e?(e=e.split(/\s*:\s*/),h=e[0],m=null,r=e[1]):(h=e.check,m=e.left,r=e.right),g||(g=e,g=g.element?g.element:h?h.match(/^([a-z0-9]+)/i)[0]:
g.left.getDefinition().element),m instanceof CKEDITOR.style&&(m=A(m)),c.push({check:h==g?null:h,left:m,right:"string"==typeof r?C(r):r});b=g;d[b]||(d[b]=[]);d[b].push(c)}}},check:function(a,b,c){if(this.disabled)return!0;if(CKEDITOR.tools.isArray(a)){for(var d=a.length;d--;)if(this.check(a[d],b,c))return!0;return!1}var f,e;if("string"==typeof a){e=a+"\x3c"+(!1===b?"0":"1")+(c?"1":"0")+"\x3e";if(e in this._.cachedChecks)return this._.cachedChecks[e];d=g(a).$1;f=d.styles;var h=d.classes;d.name=d.elements;
d.classes=h=h?h.split(/\s*,\s*/):[];d.styles=k(f);d.attributes=k(d.attributes);d.children=[];h.length&&(d.attributes["class"]=h.join(" "));f&&(d.attributes.style=CKEDITOR.tools.writeCssText(d.styles));f=d}else d=a.getDefinition(),f=d.styles,h=d.attributes||{},f?(f=F(f),h.style=CKEDITOR.tools.writeCssText(f,!0)):f={},f={name:d.element,attributes:h,classes:h["class"]?h["class"].split(/\s+/):[],styles:f,children:[]};var h=CKEDITOR.tools.clone(f),m=[],r;if(!1!==b&&(r=this._.transformations[f.name])){for(d=
0;d<r.length;++d)z(this,f,r[d]);t(f)}q(this,h,m,{doFilter:!0,doTransform:!1!==b,skipRequired:!c,skipFinalValidation:!c});b=0<m.length?!1:CKEDITOR.tools.objectCompare(f.attributes,h.attributes,!0)?!0:!1;"string"==typeof a&&(this._.cachedChecks[e]=b);return b},getAllowedEnterMode:function(){var a=["p","div","br"],b={p:CKEDITOR.ENTER_P,div:CKEDITOR.ENTER_DIV,br:CKEDITOR.ENTER_BR};return function(c,d){var f=a.slice(),g;if(this.check(H[c]))return c;for(d||(f=f.reverse());g=f.pop();)if(this.check(g))return b[g];
return CKEDITOR.ENTER_BR}}(),destroy:function(){delete CKEDITOR.filter.instances[this.id];delete this._;delete this.allowedContent;delete this.disallowedContent}};var K={styles:1,attributes:1,classes:1},D={styles:"requiredStyles",attributes:"requiredAttributes",classes:"requiredClasses"},N=/^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i,R={styles:/{([^}]+)}/,attrs:/\[([^\]]+)\]/,classes:/\(([^\)]+)\)/},P=/^cke:(object|embed|param)$/,
T=/^(object|embed|param)$/,O=CKEDITOR.filter.transformationsTools={sizeToStyle:function(a){this.lengthToStyle(a,"width");this.lengthToStyle(a,"height")},sizeToAttribute:function(a){this.lengthToAttribute(a,"width");this.lengthToAttribute(a,"height")},lengthToStyle:function(a,b,c){c=c||b;if(!(c in a.styles)){var d=a.attributes[b];d&&(/^\d+$/.test(d)&&(d+="px"),a.styles[c]=d)}delete a.attributes[b]},lengthToAttribute:function(a,b,c){c=c||b;if(!(c in a.attributes)){var d=a.styles[b],f=d&&d.match(/^(\d+)(?:\.\d*)?px$/);
f?a.attributes[c]=f[1]:"cke-test"==d&&(a.attributes[c]="cke-test")}delete a.styles[b]},alignmentToStyle:function(a){if(!("float"in a.styles)){var b=a.attributes.align;if("left"==b||"right"==b)a.styles["float"]=b}delete a.attributes.align},alignmentToAttribute:function(a){if(!("align"in a.attributes)){var b=a.styles["float"];if("left"==b||"right"==b)a.attributes.align=b}delete a.styles["float"]},matchesStyle:E,transform:function(a,b){if("string"==typeof b)a.name=b;else{var c=b.getDefinition(),d=c.styles,
f=c.attributes,g,k,e,h;a.name=c.element;for(g in f)if("class"==g)for(c=a.classes.join("|"),e=f[g].split(/\s+/);h=e.pop();)-1==c.indexOf(h)&&a.classes.push(h);else a.attributes[g]=f[g];for(k in d)a.styles[k]=d[k]}}}}(),function(){CKEDITOR.focusManager=function(a){if(a.focusManager)return a.focusManager;this.hasFocus=!1;this.currentActive=null;this._={editor:a};return this};CKEDITOR.focusManager._={blurDelay:200};CKEDITOR.focusManager.prototype={focus:function(a){this._.timer&&clearTimeout(this._.timer);
a&&(this.currentActive=a);this.hasFocus||this._.locked||((a=CKEDITOR.currentInstance)&&a.focusManager.blur(1),this.hasFocus=!0,(a=this._.editor.container)&&a.addClass("cke_focus"),this._.editor.fire("focus"))},lock:function(){this._.locked=1},unlock:function(){delete this._.locked},blur:function(a){function e(){if(this.hasFocus){this.hasFocus=!1;var a=this._.editor.container;a&&a.removeClass("cke_focus");this._.editor.fire("blur")}}if(!this._.locked){this._.timer&&clearTimeout(this._.timer);var b=
CKEDITOR.focusManager._.blurDelay;a||!b?e.call(this):this._.timer=CKEDITOR.tools.setTimeout(function(){delete this._.timer;e.call(this)},b,this)}},add:function(a,e){var b=a.getCustomData("focusmanager");if(!b||b!=this){b&&b.remove(a);var b="focus",c="blur";e&&(CKEDITOR.env.ie?(b="focusin",c="focusout"):CKEDITOR.event.useCapture=1);var d={blur:function(){a.equals(this.currentActive)&&this.blur()},focus:function(){this.focus(a)}};a.on(b,d.focus,this);a.on(c,d.blur,this);e&&(CKEDITOR.event.useCapture=
0);a.setCustomData("focusmanager",this);a.setCustomData("focusmanager_handlers",d)}},remove:function(a){a.removeCustomData("focusmanager");var e=a.removeCustomData("focusmanager_handlers");a.removeListener("blur",e.blur);a.removeListener("focus",e.focus)}}}(),CKEDITOR.keystrokeHandler=function(a){if(a.keystrokeHandler)return a.keystrokeHandler;this.keystrokes={};this.blockedKeystrokes={};this._={editor:a};return this},function(){var a,e=function(b){b=b.data;var d=b.getKeystroke(),e=this.keystrokes[d],
l=this._.editor;a=!1===l.fire("key",{keyCode:d,domEvent:b});a||(e&&(a=!1!==l.execCommand(e,{from:"keystrokeHandler"})),a||(a=!!this.blockedKeystrokes[d]));a&&b.preventDefault(!0);return!a},b=function(b){a&&(a=!1,b.data.preventDefault(!0))};CKEDITOR.keystrokeHandler.prototype={attach:function(a){a.on("keydown",e,this);if(CKEDITOR.env.gecko&&CKEDITOR.env.mac)a.on("keypress",b,this)}}}(),function(){CKEDITOR.lang={languages:{af:1,ar:1,bg:1,bn:1,bs:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,"en-au":1,"en-ca":1,"en-gb":1,
en:1,eo:1,es:1,et:1,eu:1,fa:1,fi:1,fo:1,"fr-ca":1,fr:1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,ku:1,lt:1,lv:1,mk:1,mn:1,ms:1,nb:1,nl:1,no:1,pl:1,"pt-br":1,pt:1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,"sr-latn":1,sr:1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,"zh-cn":1,zh:1},rtl:{ar:1,fa:1,he:1,ku:1,ug:1},load:function(a,e,b){a&&CKEDITOR.lang.languages[a]||(a=this.detect(e,a));var c=this;e=function(){c[a].dir=c.rtl[a]?"rtl":"ltr";b(a,c[a])};this[a]?e():CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/"+
a+".js"),e,this)},detect:function(a,e){var b=this.languages;e=e||navigator.userLanguage||navigator.language||a;var c=e.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),d=c[1],c=c[2];b[d+"-"+c]?d=d+"-"+c:b[d]||(d=null);CKEDITOR.lang.detect=d?function(){return d}:function(a){return a};return d||a}}}(),CKEDITOR.scriptLoader=function(){var a={},e={};return{load:function(b,c,d,m){var l="string"==typeof b;l&&(b=[b]);d||(d=CKEDITOR);var f=b.length,h=[],k=[],g=function(a){c&&(l?c.call(d,a):c.call(d,h,k))};if(0===
f)g(!0);else{var n=function(a,b){(b?h:k).push(a);0>=--f&&(m&&CKEDITOR.document.getDocumentElement().removeStyle("cursor"),g(b))},u=function(b,c){a[b]=1;var d=e[b];delete e[b];for(var f=0;f<d.length;f++)d[f](b,c)},q=function(b){if(a[b])n(b,!0);else{var d=e[b]||(e[b]=[]);d.push(n);if(!(1<d.length)){var f=new CKEDITOR.dom.element("script");f.setAttributes({type:"text/javascript",src:b});c&&(CKEDITOR.env.ie&&11>CKEDITOR.env.version?f.$.onreadystatechange=function(){if("loaded"==f.$.readyState||"complete"==
f.$.readyState)f.$.onreadystatechange=null,u(b,!0)}:(f.$.onload=function(){setTimeout(function(){u(b,!0)},0)},f.$.onerror=function(){u(b,!1)}));f.appendTo(CKEDITOR.document.getHead())}}};m&&CKEDITOR.document.getDocumentElement().setStyle("cursor","wait");for(var v=0;v<f;v++)q(b[v])}},queue:function(){function a(){var b;(b=c[0])&&this.load(b.scriptUrl,b.callback,CKEDITOR,0)}var c=[];return function(d,e){var l=this;c.push({scriptUrl:d,callback:function(){e&&e.apply(this,arguments);c.shift();a.call(l)}});
1==c.length&&a.call(this)}}()}}(),CKEDITOR.resourceManager=function(a,e){this.basePath=a;this.fileName=e;this.registered={};this.loaded={};this.externals={};this._={waitingList:{}}},CKEDITOR.resourceManager.prototype={add:function(a,e){if(this.registered[a])throw Error('[CKEDITOR.resourceManager.add] The resource name "'+a+'" is already registered.');var b=this.registered[a]=e||{};b.name=a;b.path=this.getPath(a);CKEDITOR.fire(a+CKEDITOR.tools.capitalize(this.fileName)+"Ready",b);return this.get(a)},
get:function(a){return this.registered[a]||null},getPath:function(a){var e=this.externals[a];return CKEDITOR.getUrl(e&&e.dir||this.basePath+a+"/")},getFilePath:function(a){var e=this.externals[a];return CKEDITOR.getUrl(this.getPath(a)+(e?e.file:this.fileName+".js"))},addExternal:function(a,e,b){a=a.split(",");for(var c=0;c<a.length;c++){var d=a[c];b||(e=e.replace(/[^\/]+$/,function(a){b=a;return""}));this.externals[d]={dir:e,file:b||this.fileName+".js"}}},load:function(a,e,b){CKEDITOR.tools.isArray(a)||
(a=a?[a]:[]);for(var c=this.loaded,d=this.registered,m=[],l={},f={},h=0;h<a.length;h++){var k=a[h];if(k)if(c[k]||d[k])f[k]=this.get(k);else{var g=this.getFilePath(k);m.push(g);g in l||(l[g]=[]);l[g].push(k)}}CKEDITOR.scriptLoader.load(m,function(a,d){if(d.length)throw Error('[CKEDITOR.resourceManager.load] Resource name "'+l[d[0]].join(",")+'" was not found at "'+d[0]+'".');for(var g=0;g<a.length;g++)for(var k=l[a[g]],h=0;h<k.length;h++){var m=k[h];f[m]=this.get(m);c[m]=1}e.call(b,f)},this)}},CKEDITOR.plugins=
new CKEDITOR.resourceManager("plugins/","plugin"),CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugins.load,function(a){var e={};return function(b,c,d){var m={},l=function(b){a.call(this,b,function(a){CKEDITOR.tools.extend(m,a);var b=[],f;for(f in a){var n=a[f],u=n&&n.requires;if(!e[f]){if(n.icons)for(var q=n.icons.split(","),v=q.length;v--;)CKEDITOR.skin.addIcon(q[v],n.path+"icons/"+(CKEDITOR.env.hidpi&&n.hidpi?"hidpi/":"")+q[v]+".png");e[f]=1}if(u)for(u.split&&(u=u.split(",")),n=0;n<u.length;n++)m[u[n]]||
b.push(u[n])}if(b.length)l.call(this,b);else{for(f in m)n=m[f],n.onLoad&&!n.onLoad._called&&(!1===n.onLoad()&&delete m[f],n.onLoad._called=1);c&&c.call(d||window,m)}},this)};l.call(this,b)}}),CKEDITOR.plugins.setLang=function(a,e,b){var c=this.get(a);a=c.langEntries||(c.langEntries={});c=c.lang||(c.lang=[]);c.split&&(c=c.split(","));-1==CKEDITOR.tools.indexOf(c,e)&&c.push(e);a[e]=b},CKEDITOR.ui=function(a){if(a.ui)return a.ui;this.items={};this.instances={};this.editor=a;this._={handlers:{}};return this},
CKEDITOR.ui.prototype={add:function(a,e,b){b.name=a.toLowerCase();var c=this.items[a]={type:e,command:b.command||null,args:Array.prototype.slice.call(arguments,2)};CKEDITOR.tools.extend(c,b)},get:function(a){return this.instances[a]},create:function(a){var e=this.items[a],b=e&&this._.handlers[e.type],c=e&&e.command&&this.editor.getCommand(e.command),b=b&&b.create.apply(this,e.args);this.instances[a]=b;c&&c.uiItems.push(b);b&&!b.type&&(b.type=e.type);return b},addHandler:function(a,e){this._.handlers[a]=
e},space:function(a){return CKEDITOR.document.getById(this.spaceId(a))},spaceId:function(a){return this.editor.id+"_"+a}},CKEDITOR.event.implementOn(CKEDITOR.ui),function(){function a(a,d,g){CKEDITOR.event.call(this);a=a&&CKEDITOR.tools.clone(a);if(void 0!==d){if(!(d instanceof CKEDITOR.dom.element))throw Error("Expect element of type CKEDITOR.dom.element.");if(!g)throw Error("One of the element modes must be specified.");if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&g==CKEDITOR.ELEMENT_MODE_INLINE)throw Error("Inline element mode is not supported on IE quirks.");
if(!b(d,g))throw Error('The specified element mode is not supported on element: "'+d.getName()+'".');this.element=d;this.elementMode=g;this.name=this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO&&(d.getId()||d.getNameAtt())}else this.elementMode=CKEDITOR.ELEMENT_MODE_NONE;this._={};this.commands={};this.templates={};this.name=this.name||e();this.id=CKEDITOR.tools.getNextId();this.status="unloaded";this.config=CKEDITOR.tools.prototypedCopy(CKEDITOR.config);this.ui=new CKEDITOR.ui(this);this.focusManager=
new CKEDITOR.focusManager(this);this.keystrokeHandler=new CKEDITOR.keystrokeHandler(this);this.on("readOnly",c);this.on("selectionChange",function(a){m(this,a.data.path)});this.on("activeFilterChange",function(){m(this,this.elementPath(),!0)});this.on("mode",c);this.on("instanceReady",function(){this.config.startupFocus&&this.focus()});CKEDITOR.fire("instanceCreated",null,this);CKEDITOR.add(this);CKEDITOR.tools.setTimeout(function(){f(this,a)},0,this)}function e(){do var a="editor"+ ++q;while(CKEDITOR.instances[a]);
return a}function b(a,b){return b==CKEDITOR.ELEMENT_MODE_INLINE?a.is(CKEDITOR.dtd.$editable)||a.is("textarea"):b==CKEDITOR.ELEMENT_MODE_REPLACE?!a.is(CKEDITOR.dtd.$nonBodyContent):1}function c(){var a=this.commands,b;for(b in a)d(this,a[b])}function d(a,b){b[b.startDisabled?"disable":a.readOnly&&!b.readOnly?"disable":b.modes[a.mode]?"enable":"disable"]()}function m(a,b,c){if(b){var d,f,g=a.commands;for(f in g)d=g[f],(c||d.contextSensitive)&&d.refresh(a,b)}}function l(a){var b=a.config.customConfig;
if(!b)return!1;var b=CKEDITOR.getUrl(b),c=v[b]||(v[b]={});c.fn?(c.fn.call(a,a.config),CKEDITOR.getUrl(a.config.customConfig)!=b&&l(a)||a.fireOnce("customConfigLoaded")):CKEDITOR.scriptLoader.queue(b,function(){c.fn=CKEDITOR.editorConfig?CKEDITOR.editorConfig:function(){};l(a)});return!0}function f(a,b){a.on("customConfigLoaded",function(){if(b){if(b.on)for(var c in b.on)a.on(c,b.on[c]);CKEDITOR.tools.extend(a.config,b,!0);delete a.config.on}c=a.config;a.readOnly=c.readOnly?!0:a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?
a.element.is("textarea")?a.element.hasAttribute("disabled")||a.element.hasAttribute("readonly"):a.element.isReadOnly():a.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?a.element.hasAttribute("disabled")||a.element.hasAttribute("readonly"):!1;a.blockless=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?!(a.element.is("textarea")||CKEDITOR.dtd[a.element.getName()].p):!1;a.tabIndex=c.tabIndex||a.element&&a.element.getAttribute("tabindex")||0;a.activeEnterMode=a.enterMode=a.blockless?CKEDITOR.ENTER_BR:c.enterMode;
a.activeShiftEnterMode=a.shiftEnterMode=a.blockless?CKEDITOR.ENTER_BR:c.shiftEnterMode;c.skin&&(CKEDITOR.skinName=c.skin);a.fireOnce("configLoaded");a.dataProcessor=new CKEDITOR.htmlDataProcessor(a);a.filter=a.activeFilter=new CKEDITOR.filter(a);h(a)});b&&null!=b.customConfig&&(a.config.customConfig=b.customConfig);l(a)||a.fireOnce("customConfigLoaded")}function h(a){CKEDITOR.skin.loadPart("editor",function(){k(a)})}function k(a){CKEDITOR.lang.load(a.config.language,a.config.defaultLanguage,function(b,
c){var d=a.config.title;a.langCode=b;a.lang=CKEDITOR.tools.prototypedCopy(c);a.title="string"==typeof d||!1===d?d:[a.lang.editor,a.name].join(", ");a.config.contentsLangDirection||(a.config.contentsLangDirection=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.getDirection(1):a.lang.dir);a.fire("langLoaded");g(a)})}function g(a){a.getStylesSet(function(b){a.once("loaded",function(){a.fire("stylesSet",{styles:b})},null,null,1);n(a)})}function n(a){var b=a.config,c=b.plugins,d=b.extraPlugins,f=
b.removePlugins;if(d)var g=new RegExp("(?:^|,)(?:"+d.replace(/\s*,\s*/g,"|")+")(?\x3d,|$)","g"),c=c.replace(g,""),c=c+(","+d);if(f)var k=new RegExp("(?:^|,)(?:"+f.replace(/\s*,\s*/g,"|")+")(?\x3d,|$)","g"),c=c.replace(k,"");CKEDITOR.env.air&&(c+=",adobeair");CKEDITOR.plugins.load(c.split(","),function(c){var d=[],f=[],g=[];a.plugins=c;for(var e in c){var h=c[e],m=h.lang,r=null,l=h.requires,D;CKEDITOR.tools.isArray(l)&&(l=l.join(","));if(l&&(D=l.match(k)))for(;l=D.pop();)CKEDITOR.error("editor-plugin-required",
{plugin:l.replace(",",""),requiredBy:e});m&&!a.lang[e]&&(m.split&&(m=m.split(",")),0<=CKEDITOR.tools.indexOf(m,a.langCode)?r=a.langCode:(r=a.langCode.replace(/-.*/,""),r=r!=a.langCode&&0<=CKEDITOR.tools.indexOf(m,r)?r:0<=CKEDITOR.tools.indexOf(m,"en")?"en":m[0]),h.langEntries&&h.langEntries[r]?(a.lang[e]=h.langEntries[r],r=null):g.push(CKEDITOR.getUrl(h.path+"lang/"+r+".js")));f.push(r);d.push(h)}CKEDITOR.scriptLoader.load(g,function(){for(var c=["beforeInit","init","afterInit"],g=0;g<c.length;g++)for(var k=
0;k<d.length;k++){var e=d[k];0===g&&f[k]&&e.lang&&e.langEntries&&(a.lang[e.name]=e.langEntries[f[k]]);if(e[c[g]])e[c[g]](a)}a.fireOnce("pluginsLoaded");b.keystrokes&&a.setKeystroke(a.config.keystrokes);for(k=0;k<a.config.blockedKeystrokes.length;k++)a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[k]]=1;a.status="loaded";a.fireOnce("loaded");CKEDITOR.fire("instanceLoaded",null,a)})})}function u(){var a=this.element;if(a&&this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO){var b=this.getData();
this.config.htmlEncodeOutput&&(b=CKEDITOR.tools.htmlEncode(b));a.is("textarea")?a.setValue(b):a.setHtml(b);return!0}return!1}a.prototype=CKEDITOR.editor.prototype;CKEDITOR.editor=a;var q=0,v={};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{addCommand:function(a,b){b.name=a.toLowerCase();var c=new CKEDITOR.command(this,b);this.mode&&d(this,c);return this.commands[a]=c},_attachToForm:function(){function a(b){c.updateElement();c._.required&&!d.getValue()&&!1===c.fire("required")&&b.data.preventDefault()}
function b(a){return!!(a&&a.call&&a.apply)}var c=this,d=c.element,f=new CKEDITOR.dom.element(d.$.form);d.is("textarea")&&f&&(f.on("submit",a),b(f.$.submit)&&(f.$.submit=CKEDITOR.tools.override(f.$.submit,function(b){return function(){a();b.apply?b.apply(this):b()}})),c.on("destroy",function(){f.removeListener("submit",a)}))},destroy:function(a){this.fire("beforeDestroy");!a&&u.call(this);this.editable(null);this.filter.destroy();delete this.filter;delete this.activeFilter;this.status="destroyed";
this.fire("destroy");this.removeAllListeners();CKEDITOR.remove(this);CKEDITOR.fire("instanceDestroyed",null,this)},elementPath:function(a){if(!a){a=this.getSelection();if(!a)return null;a=a.getStartElement()}return a?new CKEDITOR.dom.elementPath(a,this.editable()):null},createRange:function(){var a=this.editable();return a?new CKEDITOR.dom.range(a):null},execCommand:function(a,b){var c=this.getCommand(a),d={name:a,commandData:b,command:c};return c&&c.state!=CKEDITOR.TRISTATE_DISABLED&&!1!==this.fire("beforeCommandExec",
d)&&(d.returnValue=c.exec(d.commandData),!c.async&&!1!==this.fire("afterCommandExec",d))?d.returnValue:!1},getCommand:function(a){return this.commands[a]},getData:function(a){!a&&this.fire("beforeGetData");var b=this._.data;"string"!=typeof b&&(b=(b=this.element)&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?b.is("textarea")?b.getValue():b.getHtml():"");b={dataValue:b};!a&&this.fire("getData",b);return b.dataValue},getSnapshot:function(){var a=this.fire("getSnapshot");"string"!=typeof a&&(a=(a=
this.element)&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?a.is("textarea")?a.getValue():a.getHtml():"");return a},loadSnapshot:function(a){this.fire("loadSnapshot",a)},setData:function(a,b,c){var d=!0,f=b;b&&"object"==typeof b&&(c=b.internal,f=b.callback,d=!b.noSnapshot);!c&&d&&this.fire("saveSnapshot");if(f||!c)this.once("dataReady",function(a){!c&&d&&this.fire("saveSnapshot");f&&f.call(a.editor)});a={dataValue:a};!c&&this.fire("setData",a);this._.data=a.dataValue;!c&&this.fire("afterSetData",
a)},setReadOnly:function(a){a=null==a||a;this.readOnly!=a&&(this.readOnly=a,this.keystrokeHandler.blockedKeystrokes[8]=+a,this.editable().setReadOnly(a),this.fire("readOnly"))},insertHtml:function(a,b,c){this.fire("insertHtml",{dataValue:a,mode:b,range:c})},insertText:function(a){this.fire("insertText",a)},insertElement:function(a){this.fire("insertElement",a)},getSelectedHtml:function(a){var b=this.editable(),c=this.getSelection(),c=c&&c.getRanges();if(!b||!c||0===c.length)return null;b=b.getHtmlFromRange(c[0]);
return a?b.getHtml():b},extractSelectedHtml:function(a,b){var c=this.editable(),d=this.getSelection().getRanges();if(!c||0===d.length)return null;d=d[0];c=c.extractHtmlFromRange(d,b);b||this.getSelection().selectRanges([d]);return a?c.getHtml():c},focus:function(){this.fire("beforeFocus")},checkDirty:function(){return"ready"==this.status&&this._.previousValue!==this.getSnapshot()},resetDirty:function(){this._.previousValue=this.getSnapshot()},updateElement:function(){return u.call(this)},setKeystroke:function(){for(var a=
this.keystrokeHandler.keystrokes,b=CKEDITOR.tools.isArray(arguments[0])?arguments[0]:[[].slice.call(arguments,0)],c,d,f=b.length;f--;)c=b[f],d=0,CKEDITOR.tools.isArray(c)&&(d=c[1],c=c[0]),d?a[c]=d:delete a[c]},addFeature:function(a){return this.filter.addFeature(a)},setActiveFilter:function(a){a||(a=this.filter);this.activeFilter!==a&&(this.activeFilter=a,this.fire("activeFilterChange"),a===this.filter?this.setActiveEnterMode(null,null):this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode),
a.getAllowedEnterMode(this.shiftEnterMode,!0)))},setActiveEnterMode:function(a,b){a=a?this.blockless?CKEDITOR.ENTER_BR:a:this.enterMode;b=b?this.blockless?CKEDITOR.ENTER_BR:b:this.shiftEnterMode;if(this.activeEnterMode!=a||this.activeShiftEnterMode!=b)this.activeEnterMode=a,this.activeShiftEnterMode=b,this.fire("activeEnterModeChange")},showNotification:function(a){alert(a)}})}(),CKEDITOR.ELEMENT_MODE_NONE=0,CKEDITOR.ELEMENT_MODE_REPLACE=1,CKEDITOR.ELEMENT_MODE_APPENDTO=2,CKEDITOR.ELEMENT_MODE_INLINE=
3,CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\x3e)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g}},function(){var a=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,e={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},
onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(b){for(var c,d,m=0,l;c=this._.htmlPartsRegex.exec(b);){d=c.index;if(d>m)if(m=b.substring(m,d),l)l.push(m);else this.onText(m);m=this._.htmlPartsRegex.lastIndex;if(d=c[1])if(d=d.toLowerCase(),l&&CKEDITOR.dtd.$cdata[d]&&(this.onCDATA(l.join("")),l=null),!l){this.onTagClose(d);continue}if(l)l.push(c[0]);else if(d=c[3]){if(d=d.toLowerCase(),!/="/.test(d)){var f={},h,k=c[4];c=!!c[5];if(k)for(;h=a.exec(k);){var g=h[1].toLowerCase();
h=h[2]||h[3]||h[4]||"";f[g]=!h&&e[g]?g:CKEDITOR.tools.htmlDecodeAttr(h)}this.onTagOpen(d,f,c);!l&&CKEDITOR.dtd.$cdata[d]&&(l=[])}}else if(d=c[2])this.onComment(d)}if(b.length>m)this.onText(b.substring(m,b.length))}}}(),CKEDITOR.htmlParser.basicWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[]}},proto:{openTag:function(a){this._.output.push("\x3c",a)},openTagClose:function(a,e){e?this._.output.push(" /\x3e"):this._.output.push("\x3e")},attribute:function(a,e){"string"==typeof e&&(e=
CKEDITOR.tools.htmlEncodeAttr(e));this._.output.push(" ",a,'\x3d"',e,'"')},closeTag:function(a){this._.output.push("\x3c/",a,"\x3e")},text:function(a){this._.output.push(a)},comment:function(a){this._.output.push("\x3c!--",a,"--\x3e")},write:function(a){this._.output.push(a)},reset:function(){this._.output=[];this._.indent=!1},getHtml:function(a){var e=this._.output.join("");a&&this.reset();return e}}}),"use strict",function(){CKEDITOR.htmlParser.node=function(){};CKEDITOR.htmlParser.node.prototype=
{remove:function(){var a=this.parent.children,e=CKEDITOR.tools.indexOf(a,this),b=this.previous,c=this.next;b&&(b.next=c);c&&(c.previous=b);a.splice(e,1);this.parent=null},replaceWith:function(a){var e=this.parent.children,b=CKEDITOR.tools.indexOf(e,this),c=a.previous=this.previous,d=a.next=this.next;c&&(c.next=a);d&&(d.previous=a);e[b]=a;a.parent=this.parent;this.parent=null},insertAfter:function(a){var e=a.parent.children,b=CKEDITOR.tools.indexOf(e,a),c=a.next;e.splice(b+1,0,this);this.next=a.next;
this.previous=a;a.next=this;c&&(c.previous=this);this.parent=a.parent},insertBefore:function(a){var e=a.parent.children,b=CKEDITOR.tools.indexOf(e,a);e.splice(b,0,this);this.next=a;(this.previous=a.previous)&&(a.previous.next=this);a.previous=this;this.parent=a.parent},getAscendant:function(a){var e="function"==typeof a?a:"string"==typeof a?function(b){return b.name==a}:function(b){return b.name in a},b=this.parent;for(;b&&b.type==CKEDITOR.NODE_ELEMENT;){if(e(b))return b;b=b.parent}return null},wrapWith:function(a){this.replaceWith(a);
a.add(this);return a},getIndex:function(){return CKEDITOR.tools.indexOf(this.parent.children,this)},getFilterContext:function(a){return a||{}}}}(),"use strict",CKEDITOR.htmlParser.comment=function(a){this.value=a;this._={isBlockLike:!1}},CKEDITOR.htmlParser.comment.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_COMMENT,filter:function(a,e){var b=this.value;if(!(b=a.onComment(e,b,this)))return this.remove(),!1;if("string"!=typeof b)return this.replaceWith(b),!1;this.value=
b;return!0},writeHtml:function(a,e){e&&this.filter(e);a.comment(this.value)}}),"use strict",function(){CKEDITOR.htmlParser.text=function(a){this.value=a;this._={isBlockLike:!1}};CKEDITOR.htmlParser.text.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(a,e){if(!(this.value=a.onText(e,this.value,this)))return this.remove(),!1},writeHtml:function(a,e){e&&this.filter(e);a.text(this.value)}})}(),"use strict",function(){CKEDITOR.htmlParser.cdata=function(a){this.value=
a};CKEDITOR.htmlParser.cdata.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(){},writeHtml:function(a){a.write(this.value)}})}(),"use strict",CKEDITOR.htmlParser.fragment=function(){this.children=[];this.parent=null;this._={isBlockLike:!0,hasInlineStarted:!1}},function(){function a(a){return a.attributes["data-cke-survive"]?!1:"a"==a.name&&a.attributes.href||CKEDITOR.dtd.$removeEmpty[a.name]}var e=CKEDITOR.tools.extend({table:1,ul:1,ol:1,dl:1},
CKEDITOR.dtd.table,CKEDITOR.dtd.ul,CKEDITOR.dtd.ol,CKEDITOR.dtd.dl),b={ol:1,ul:1},c=CKEDITOR.tools.extend({},{html:1},CKEDITOR.dtd.html,CKEDITOR.dtd.body,CKEDITOR.dtd.head,{style:1,script:1}),d={ul:"li",ol:"li",dl:"dd",table:"tbody",tbody:"tr",thead:"tr",tfoot:"tr",tr:"td"};CKEDITOR.htmlParser.fragment.fromHtml=function(m,l,f){function h(a){var b;if(0<p.length)for(var c=0;c<p.length;c++){var d=p[c],f=d.name,g=CKEDITOR.dtd[f],e=x.name&&CKEDITOR.dtd[x.name];e&&!e[f]||a&&g&&!g[a]&&CKEDITOR.dtd[a]?f==
x.name&&(n(x,x.parent,1),c--):(b||(k(),b=1),d=d.clone(),d.parent=x,x=d,p.splice(c,1),c--)}}function k(){for(;w.length;)n(w.shift(),x)}function g(a){if(a._.isBlockLike&&"pre"!=a.name&&"textarea"!=a.name){var b=a.children.length,c=a.children[b-1],d;c&&c.type==CKEDITOR.NODE_TEXT&&((d=CKEDITOR.tools.rtrim(c.value))?c.value=d:a.children.length=b-1)}}function n(b,c,d){c=c||x||t;var k=x;void 0===b.previous&&(u(c,b)&&(x=c,v.onTagOpen(f,{}),b.returnPoint=c=x),g(b),a(b)&&!b.children.length||c.add(b),"pre"==
b.name&&(r=!1),"textarea"==b.name&&(B=!1));b.returnPoint?(x=b.returnPoint,delete b.returnPoint):x=d?c:k}function u(a,b){if((a==t||"body"==a.name)&&f&&(!a.name||CKEDITOR.dtd[a.name][f])){var c,d;return(c=b.attributes&&(d=b.attributes["data-cke-real-element-type"])?d:b.name)&&c in CKEDITOR.dtd.$inline&&!(c in CKEDITOR.dtd.head)&&!b.isOrphan||b.type==CKEDITOR.NODE_TEXT}}function q(a,b){return a in CKEDITOR.dtd.$listItem||a in CKEDITOR.dtd.$tableContent?a==b||"dt"==a&&"dd"==b||"dd"==a&&"dt"==b:!1}var v=
new CKEDITOR.htmlParser,t=l instanceof CKEDITOR.htmlParser.element?l:"string"==typeof l?new CKEDITOR.htmlParser.element(l):new CKEDITOR.htmlParser.fragment,p=[],w=[],x=t,B="textarea"==t.name,r="pre"==t.name;v.onTagOpen=function(d,f,g,m){f=new CKEDITOR.htmlParser.element(d,f);f.isUnknown&&g&&(f.isEmpty=!0);f.isOptionalClose=m;if(a(f))p.push(f);else{if("pre"==d)r=!0;else{if("br"==d&&r){x.add(new CKEDITOR.htmlParser.text("\n"));return}"textarea"==d&&(B=!0)}if("br"==d)w.push(f);else{for(;!(m=(g=x.name)?
CKEDITOR.dtd[g]||(x._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c,f.isUnknown||x.isUnknown||m[d]);)if(x.isOptionalClose)v.onTagClose(g);else if(d in b&&g in b)g=x.children,(g=g[g.length-1])&&"li"==g.name||n(g=new CKEDITOR.htmlParser.element("li"),x),!f.returnPoint&&(f.returnPoint=x),x=g;else if(d in CKEDITOR.dtd.$listItem&&!q(d,g))v.onTagOpen("li"==d?"ul":"dl",{},0,1);else if(g in e&&!q(d,g))!f.returnPoint&&(f.returnPoint=x),x=x.parent;else if(g in CKEDITOR.dtd.$inline&&p.unshift(x),x.parent)n(x,
x.parent,1);else{f.isOrphan=1;break}h(d);k();f.parent=x;f.isEmpty?n(f):x=f}}};v.onTagClose=function(a){for(var b=p.length-1;0<=b;b--)if(a==p[b].name){p.splice(b,1);return}for(var c=[],d=[],g=x;g!=t&&g.name!=a;)g._.isBlockLike||d.unshift(g),c.push(g),g=g.returnPoint||g.parent;if(g!=t){for(b=0;b<c.length;b++){var e=c[b];n(e,e.parent)}x=g;g._.isBlockLike&&k();n(g,g.parent);g==x&&(x=x.parent);p=p.concat(d)}"body"==a&&(f=!1)};v.onText=function(a){if(!(x._.hasInlineStarted&&!w.length||r||B)&&(a=CKEDITOR.tools.ltrim(a),
0===a.length))return;var b=x.name,g=b?CKEDITOR.dtd[b]||(x._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c;if(!B&&!g["#"]&&b in e)v.onTagOpen(d[b]||""),v.onText(a);else{k();h();r||B||(a=a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," "));a=new CKEDITOR.htmlParser.text(a);if(u(x,a))this.onTagOpen(f,{},0,1);x.add(a)}};v.onCDATA=function(a){x.add(new CKEDITOR.htmlParser.cdata(a))};v.onComment=function(a){k();h();x.add(new CKEDITOR.htmlParser.comment(a))};v.parse(m);for(k();x!=t;)n(x,x.parent,1);g(t);return t};
CKEDITOR.htmlParser.fragment.prototype={type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,add:function(a,b){isNaN(b)&&(b=this.children.length);var c=0<b?this.children[b-1]:null;if(c){if(a._.isBlockLike&&c.type==CKEDITOR.NODE_TEXT&&(c.value=CKEDITOR.tools.rtrim(c.value),0===c.value.length)){this.children.pop();this.add(a);return}c.next=a}a.previous=c;a.parent=this;this.children.splice(b,0,a);this._.hasInlineStarted||(this._.hasInlineStarted=a.type==CKEDITOR.NODE_TEXT||a.type==CKEDITOR.NODE_ELEMENT&&!a._.isBlockLike)},
filter:function(a,b){b=this.getFilterContext(b);a.onRoot(b,this);this.filterChildren(a,!1,b)},filterChildren:function(a,b,c){if(this.childrenFilteredBy!=a.id){c=this.getFilterContext(c);if(b&&!this.parent)a.onRoot(c,this);this.childrenFilteredBy=a.id;for(b=0;b<this.children.length;b++)!1===this.children[b].filter(a,c)&&b--}},writeHtml:function(a,b){b&&this.filter(b);this.writeChildrenHtml(a)},writeChildrenHtml:function(a,b,c){var d=this.getFilterContext();if(c&&!this.parent&&b)b.onRoot(d,this);b&&
this.filterChildren(b,!1,d);b=0;c=this.children;for(d=c.length;b<d;b++)c[b].writeHtml(a)},forEach:function(a,b,c){if(!(c||b&&this.type!=b))var d=a(this);if(!1!==d){c=this.children;for(var k=0;k<c.length;k++)d=c[k],d.type==CKEDITOR.NODE_ELEMENT?d.forEach(a,b):b&&d.type!=b||a(d)}},getFilterContext:function(a){return a||{}}}}(),"use strict",function(){function a(){this.rules=[]}function e(b,c,d,e){var l,f;for(l in c)(f=b[l])||(f=b[l]=new a),f.add(c[l],d,e)}CKEDITOR.htmlParser.filter=CKEDITOR.tools.createClass({$:function(b){this.id=
CKEDITOR.tools.getNextNumber();this.elementNameRules=new a;this.attributeNameRules=new a;this.elementsRules={};this.attributesRules={};this.textRules=new a;this.commentRules=new a;this.rootRules=new a;b&&this.addRules(b,10)},proto:{addRules:function(a,c){var d;"number"==typeof c?d=c:c&&"priority"in c&&(d=c.priority);"number"!=typeof d&&(d=10);"object"!=typeof c&&(c={});a.elementNames&&this.elementNameRules.addMany(a.elementNames,d,c);a.attributeNames&&this.attributeNameRules.addMany(a.attributeNames,
d,c);a.elements&&e(this.elementsRules,a.elements,d,c);a.attributes&&e(this.attributesRules,a.attributes,d,c);a.text&&this.textRules.add(a.text,d,c);a.comment&&this.commentRules.add(a.comment,d,c);a.root&&this.rootRules.add(a.root,d,c)},applyTo:function(a){a.filter(this)},onElementName:function(a,c){return this.elementNameRules.execOnName(a,c)},onAttributeName:function(a,c){return this.attributeNameRules.execOnName(a,c)},onText:function(a,c,d){return this.textRules.exec(a,c,d)},onComment:function(a,
c,d){return this.commentRules.exec(a,c,d)},onRoot:function(a,c){return this.rootRules.exec(a,c)},onElement:function(a,c){for(var d=[this.elementsRules["^"],this.elementsRules[c.name],this.elementsRules.$],e,l=0;3>l;l++)if(e=d[l]){e=e.exec(a,c,this);if(!1===e)return null;if(e&&e!=c)return this.onNode(a,e);if(c.parent&&!c.name)break}return c},onNode:function(a,c){var d=c.type;return d==CKEDITOR.NODE_ELEMENT?this.onElement(a,c):d==CKEDITOR.NODE_TEXT?new CKEDITOR.htmlParser.text(this.onText(a,c.value)):
d==CKEDITOR.NODE_COMMENT?new CKEDITOR.htmlParser.comment(this.onComment(a,c.value)):null},onAttribute:function(a,c,d,e){return(d=this.attributesRules[d])?d.exec(a,e,c,this):e}}});CKEDITOR.htmlParser.filterRulesGroup=a;a.prototype={add:function(a,c,d){this.rules.splice(this.findIndex(c),0,{value:a,priority:c,options:d})},addMany:function(a,c,d){for(var e=[this.findIndex(c),0],l=0,f=a.length;l<f;l++)e.push({value:a[l],priority:c,options:d});this.rules.splice.apply(this.rules,e)},findIndex:function(a){for(var c=
this.rules,d=c.length-1;0<=d&&a<c[d].priority;)d--;return d+1},exec:function(a,c){var d=c instanceof CKEDITOR.htmlParser.node||c instanceof CKEDITOR.htmlParser.fragment,e=Array.prototype.slice.call(arguments,1),l=this.rules,f=l.length,h,k,g,n;for(n=0;n<f;n++)if(d&&(h=c.type,k=c.name),g=l[n],!(a.nonEditable&&!g.options.applyToAll||a.nestedEditable&&g.options.excludeNestedEditable)){g=g.value.apply(null,e);if(!1===g||d&&g&&(g.name!=k||g.type!=h))return g;null!=g&&(e[0]=c=g)}return c},execOnName:function(a,
c){for(var d=0,e=this.rules,l=e.length,f;c&&d<l;d++)f=e[d],a.nonEditable&&!f.options.applyToAll||a.nestedEditable&&f.options.excludeNestedEditable||(c=c.replace(f.value[0],f.value[1]));return c}}}(),function(){function a(a,f){function g(a){return a||CKEDITOR.env.needsNbspFiller?new CKEDITOR.htmlParser.text(" "):new CKEDITOR.htmlParser.element("br",{"data-cke-bogus":1})}function e(a,d){return function(f){if(f.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var e=[],h=b(f),r,l;if(h)for(k(h,1)&&e.push(h);h;)m(h)&&
(r=c(h))&&k(r)&&((l=c(r))&&!m(l)?e.push(r):(g(D).insertAfter(r),r.remove())),h=h.previous;for(h=0;h<e.length;h++)e[h].remove();if(e=!a||!1!==("function"==typeof d?d(f):d))D||CKEDITOR.env.needsBrFiller||f.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT?D||CKEDITOR.env.needsBrFiller||!(7<document.documentMode||f.name in CKEDITOR.dtd.tr||f.name in CKEDITOR.dtd.$listItem)?(e=b(f),e=!e||"form"==f.name&&"input"==e.name):e=!1:e=!1;e&&f.add(g(a))}}}function k(a,b){if((!D||CKEDITOR.env.needsBrFiller)&&a.type==CKEDITOR.NODE_ELEMENT&&
"br"==a.name&&!a.attributes["data-cke-eol"])return!0;var c;return a.type==CKEDITOR.NODE_TEXT&&(c=a.value.match(p))&&(c.index&&((new CKEDITOR.htmlParser.text(a.value.substring(0,c.index))).insertBefore(a),a.value=c[0]),!CKEDITOR.env.needsBrFiller&&D&&(!b||a.parent.name in B)||!D&&((c=a.previous)&&"br"==c.name||!c||m(c)))?!0:!1}var h={elements:{}},D="html"==f,B=CKEDITOR.tools.extend({},r),z;for(z in B)"#"in x[z]||delete B[z];for(z in B)h.elements[z]=e(D,a.config.fillEmptyBlocks);h.root=e(D,!1);h.elements.br=
function(a){return function(b){if(b.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var f=b.attributes;if("data-cke-bogus"in f||"data-cke-eol"in f)delete f["data-cke-bogus"];else{for(f=b.next;f&&d(f);)f=f.next;var e=c(b);!f&&m(b.parent)?l(b.parent,g(a)):m(f)&&e&&!m(e)&&g(a).insertBefore(f)}}}}(D);return h}function e(a,b){return a!=CKEDITOR.ENTER_BR&&!1!==b?a==CKEDITOR.ENTER_DIV?"div":"p":!1}function b(a){for(a=a.children[a.children.length-1];a&&d(a);)a=a.previous;return a}function c(a){for(a=a.previous;a&&
d(a);)a=a.previous;return a}function d(a){return a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(a.value)||a.type==CKEDITOR.NODE_ELEMENT&&a.attributes["data-cke-bookmark"]}function m(a){return a&&(a.type==CKEDITOR.NODE_ELEMENT&&a.name in r||a.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)}function l(a,b){var c=a.children[a.children.length-1];a.children.push(b);b.parent=a;c&&(c.next=b,b.previous=c)}function f(a){a=a.attributes;"false"!=a.contenteditable&&(a["data-cke-editable"]=a.contenteditable?"true":1);
a.contenteditable="false"}function h(a){a=a.attributes;switch(a["data-cke-editable"]){case "true":a.contenteditable="true";break;case "1":delete a.contenteditable}}function k(a){return a.replace(C,function(a,b,c){return"\x3c"+b+c.replace(G,function(a,b){return F.test(b)&&-1==c.indexOf("data-cke-saved-"+b)?" data-cke-saved-"+a+" data-cke-"+CKEDITOR.rnd+"-"+a:a})+"\x3e"})}function g(a,b){return a.replace(b,function(a,b,c){0===a.indexOf("\x3ctextarea")&&(a=b+q(c).replace(/</g,"\x26lt;").replace(/>/g,
"\x26gt;")+"\x3c/textarea\x3e");return"\x3ccke:encoded\x3e"+encodeURIComponent(a)+"\x3c/cke:encoded\x3e"})}function n(a){return a.replace(K,function(a,b){return decodeURIComponent(b)})}function u(a){return a.replace(/\x3c!--(?!{cke_protected})[\s\S]+?--\x3e/g,function(a){return"\x3c!--"+w+"{C}"+encodeURIComponent(a).replace(/--/g,"%2D%2D")+"--\x3e"})}function q(a){return a.replace(/\x3c!--\{cke_protected\}\{C\}([\s\S]+?)--\x3e/g,function(a,b){return decodeURIComponent(b)})}function v(a,b){var c=b._.dataStore;
return a.replace(/\x3c!--\{cke_protected\}([\s\S]+?)--\x3e/g,function(a,b){return decodeURIComponent(b)}).replace(/\{cke_protected_(\d+)\}/g,function(a,b){return c&&c[b]||""})}function t(a,b){var c=[],d=b.config.protectedSource,f=b._.dataStore||(b._.dataStore={id:1}),g=/<\!--\{cke_temp(comment)?\}(\d*?)--\x3e/g,d=[/<script[\s\S]*?(<\/script>|$)/gi,/<noscript[\s\S]*?<\/noscript>/gi,/<meta[\s\S]*?\/?>/gi].concat(d);a=a.replace(/\x3c!--[\s\S]*?--\x3e/g,function(a){return"\x3c!--{cke_tempcomment}"+(c.push(a)-
1)+"--\x3e"});for(var e=0;e<d.length;e++)a=a.replace(d[e],function(a){a=a.replace(g,function(a,b,d){return c[d]});return/cke_temp(comment)?/.test(a)?a:"\x3c!--{cke_temp}"+(c.push(a)-1)+"--\x3e"});a=a.replace(g,function(a,b,d){return"\x3c!--"+w+(b?"{C}":"")+encodeURIComponent(c[d]).replace(/--/g,"%2D%2D")+"--\x3e"});a=a.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=\/>]+))+\s*\/?>/g,function(a){return a.replace(/\x3c!--\{cke_protected\}([^>]*)--\x3e/g,function(a,b){f[f.id]=
decodeURIComponent(b);return"{cke_protected_"+f.id++ +"}"})});return a=a.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g,function(a,c,d,f){return"\x3c"+c+d+"\x3e"+v(q(f),b)+"\x3c/"+c+"\x3e"})}CKEDITOR.htmlDataProcessor=function(b){var c,d,f=this;this.editor=b;this.dataFilter=c=new CKEDITOR.htmlParser.filter;this.htmlFilter=d=new CKEDITOR.htmlParser.filter;this.writer=new CKEDITOR.htmlParser.basicWriter;c.addRules(z);c.addRules(E,{applyToAll:!0});c.addRules(a(b,"data"),{applyToAll:!0});
d.addRules(y);d.addRules(A,{applyToAll:!0});d.addRules(a(b,"html"),{applyToAll:!0});b.on("toHtml",function(a){a=a.data;var c=a.dataValue,d,c=t(c,b),c=g(c,H),c=k(c),c=g(c,I),c=c.replace(D,"$1cke:$2"),c=c.replace(R,"\x3ccke:$1$2\x3e\x3c/cke:$1\x3e"),c=c.replace(/(<pre\b[^>]*>)(\r\n|\n)/g,"$1$2$2"),c=c.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi,"$1data-cke-"+CKEDITOR.rnd+"-$2");d=a.context||b.editable().getName();var f;CKEDITOR.env.ie&&9>CKEDITOR.env.version&&"pre"==d&&(d="div",c="\x3cpre\x3e"+c+"\x3c/pre\x3e",
f=1);d=b.document.createElement(d);d.setHtml("a"+c);c=d.getHtml().substr(1);c=c.replace(new RegExp("data-cke-"+CKEDITOR.rnd+"-","ig"),"");f&&(c=c.replace(/^<pre>|<\/pre>$/gi,""));c=c.replace(N,"$1$2");c=n(c);c=q(c);d=!1===a.fixForBody?!1:e(a.enterMode,b.config.autoParagraph);c=CKEDITOR.htmlParser.fragment.fromHtml(c,a.context,d);d&&(f=c,!f.children.length&&CKEDITOR.dtd[f.name][d]&&(d=new CKEDITOR.htmlParser.element(d),f.add(d)));a.dataValue=c},null,null,5);b.on("toHtml",function(a){a.data.filter.applyTo(a.data.dataValue,
!0,a.data.dontFilter,a.data.enterMode)&&b.fire("dataFiltered")},null,null,6);b.on("toHtml",function(a){a.data.dataValue.filterChildren(f.dataFilter,!0)},null,null,10);b.on("toHtml",function(a){a=a.data;var b=a.dataValue,c=new CKEDITOR.htmlParser.basicWriter;b.writeChildrenHtml(c);b=c.getHtml(!0);a.dataValue=u(b)},null,null,15);b.on("toDataFormat",function(a){var c=a.data.dataValue;a.data.enterMode!=CKEDITOR.ENTER_BR&&(c=c.replace(/^<br *\/?>/i,""));a.data.dataValue=CKEDITOR.htmlParser.fragment.fromHtml(c,
a.data.context,e(a.data.enterMode,b.config.autoParagraph))},null,null,5);b.on("toDataFormat",function(a){a.data.dataValue.filterChildren(f.htmlFilter,!0)},null,null,10);b.on("toDataFormat",function(a){a.data.filter.applyTo(a.data.dataValue,!1,!0)},null,null,11);b.on("toDataFormat",function(a){var c=a.data.dataValue,d=f.writer;d.reset();c.writeChildrenHtml(d);c=d.getHtml(!0);c=q(c);c=v(c,b);a.data.dataValue=c},null,null,15)};CKEDITOR.htmlDataProcessor.prototype={toHtml:function(a,b,c,d){var f=this.editor,
g,e,k,h;b&&"object"==typeof b?(g=b.context,c=b.fixForBody,d=b.dontFilter,e=b.filter,k=b.enterMode,h=b.protectedWhitespaces):g=b;g||null===g||(g=f.editable().getName());return f.fire("toHtml",{dataValue:a,context:g,fixForBody:c,dontFilter:d,filter:e||f.filter,enterMode:k||f.enterMode,protectedWhitespaces:h}).dataValue},toDataFormat:function(a,b){var c,d,f;b&&(c=b.context,d=b.filter,f=b.enterMode);c||null===c||(c=this.editor.editable().getName());return this.editor.fire("toDataFormat",{dataValue:a,
filter:d||this.editor.filter,context:c,enterMode:f||this.editor.enterMode}).dataValue}};var p=/(?:&nbsp;|\xa0)$/,w="{cke_protected}",x=CKEDITOR.dtd,B="caption colgroup col thead tfoot tbody".split(" "),r=CKEDITOR.tools.extend({},x.$blockLimit,x.$block),z={elements:{input:f,textarea:f}},E={attributeNames:[[/^on/,"data-cke-pa-on"],[/^data-cke-expando$/,""]]},y={elements:{embed:function(a){var b=a.parent;if(b&&"object"==b.name){var c=b.attributes.width,b=b.attributes.height;c&&(a.attributes.width=c);
b&&(a.attributes.height=b)}},a:function(a){var b=a.attributes;if(!(a.children.length||b.name||b.id||a.attributes["data-cke-saved-name"]))return!1}}},A={elementNames:[[/^cke:/,""],[/^\?xml:namespace$/,""]],attributeNames:[[/^data-cke-(saved|pa)-/,""],[/^data-cke-.*/,""],["hidefocus",""]],elements:{$:function(a){var b=a.attributes;if(b){if(b["data-cke-temp"])return!1;for(var c=["name","href","src"],d,f=0;f<c.length;f++)d="data-cke-saved-"+c[f],d in b&&delete b[c[f]]}return a},table:function(a){a.children.slice(0).sort(function(a,
b){var c,d;a.type==CKEDITOR.NODE_ELEMENT&&b.type==a.type&&(c=CKEDITOR.tools.indexOf(B,a.name),d=CKEDITOR.tools.indexOf(B,b.name));-1<c&&-1<d&&c!=d||(c=a.parent?a.getIndex():-1,d=b.parent?b.getIndex():-1);return c>d?1:-1})},param:function(a){a.children=[];a.isEmpty=!0;return a},span:function(a){"Apple-style-span"==a.attributes["class"]&&delete a.name},html:function(a){delete a.attributes.contenteditable;delete a.attributes["class"]},body:function(a){delete a.attributes.spellcheck;delete a.attributes.contenteditable},
style:function(a){var b=a.children[0];b&&b.value&&(b.value=CKEDITOR.tools.trim(b.value));a.attributes.type||(a.attributes.type="text/css")},title:function(a){var b=a.children[0];!b&&l(a,b=new CKEDITOR.htmlParser.text);b.value=a.attributes["data-cke-title"]||""},input:h,textarea:h},attributes:{"class":function(a){return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g,""))||!1}}};CKEDITOR.env.ie&&(A.attributes.style=function(a){return a.replace(/(^|;)([^\:]+)/g,function(a){return a.toLowerCase()})});
var C=/<(a|area|img|input|source)\b([^>]*)>/gi,G=/([\w-:]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,F=/^(href|src|name)$/i,I=/(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,H=/(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi,K=/<cke:encoded>([^<]*)<\/cke:encoded>/gi,D=/(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi,N=/(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi,R=/<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi}(),"use strict",CKEDITOR.htmlParser.element=
function(a,e){this.name=a;this.attributes=e||{};this.children=[];var b=a||"",c=b.match(/^cke:(.*)/);c&&(b=c[1]);b=!!(CKEDITOR.dtd.$nonBodyContent[b]||CKEDITOR.dtd.$block[b]||CKEDITOR.dtd.$listItem[b]||CKEDITOR.dtd.$tableContent[b]||CKEDITOR.dtd.$nonEditable[b]||"br"==b);this.isEmpty=!!CKEDITOR.dtd.$empty[a];this.isUnknown=!CKEDITOR.dtd[a];this._={isBlockLike:b,hasInlineStarted:this.isEmpty||!b}},CKEDITOR.htmlParser.cssStyle=function(a){var e={};((a instanceof CKEDITOR.htmlParser.element?a.attributes.style:
a)||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,c,d){"font-family"==c&&(d=d.replace(/["']/g,""));e[c.toLowerCase()]=d});return{rules:e,populate:function(a){var c=this.toString();c&&(a instanceof CKEDITOR.dom.element?a.setAttribute("style",c):a instanceof CKEDITOR.htmlParser.element?a.attributes.style=c:a.style=c)},toString:function(){var a=[],c;for(c in e)e[c]&&a.push(c,":",e[c],";");return a.join("")}}},function(){function a(a){return function(b){return b.type==
CKEDITOR.NODE_ELEMENT&&("string"==typeof a?b.name==a:b.name in a)}}var e=function(a,b){a=a[0];b=b[0];return a<b?-1:a>b?1:0},b=CKEDITOR.htmlParser.fragment.prototype;CKEDITOR.htmlParser.element.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_ELEMENT,add:b.add,clone:function(){return new CKEDITOR.htmlParser.element(this.name,this.attributes)},filter:function(a,b){var e=this,l,f;b=e.getFilterContext(b);if(b.off)return!0;if(!e.parent)a.onRoot(b,e);for(;;){l=e.name;if(!(f=
a.onElementName(b,l)))return this.remove(),!1;e.name=f;if(!(e=a.onElement(b,e)))return this.remove(),!1;if(e!==this)return this.replaceWith(e),!1;if(e.name==l)break;if(e.type!=CKEDITOR.NODE_ELEMENT)return this.replaceWith(e),!1;if(!e.name)return this.replaceWithChildren(),!1}l=e.attributes;var h,k;for(h in l){for(f=l[h];;)if(k=a.onAttributeName(b,h))if(k!=h)delete l[h],h=k;else break;else{delete l[h];break}k&&(!1===(f=a.onAttribute(b,e,k,f))?delete l[k]:l[k]=f)}e.isEmpty||this.filterChildren(a,!1,
b);return!0},filterChildren:b.filterChildren,writeHtml:function(a,b){b&&this.filter(b);var m=this.name,l=[],f=this.attributes,h,k;a.openTag(m,f);for(h in f)l.push([h,f[h]]);a.sortAttributes&&l.sort(e);h=0;for(k=l.length;h<k;h++)f=l[h],a.attribute(f[0],f[1]);a.openTagClose(m,this.isEmpty);this.writeChildrenHtml(a);this.isEmpty||a.closeTag(m)},writeChildrenHtml:b.writeChildrenHtml,replaceWithChildren:function(){for(var a=this.children,b=a.length;b;)a[--b].insertAfter(this);this.remove()},forEach:b.forEach,
getFirst:function(b){if(!b)return this.children.length?this.children[0]:null;"function"!=typeof b&&(b=a(b));for(var d=0,e=this.children.length;d<e;++d)if(b(this.children[d]))return this.children[d];return null},getHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;this.writeChildrenHtml(a);return a.getHtml()},setHtml:function(a){a=this.children=CKEDITOR.htmlParser.fragment.fromHtml(a).children;for(var b=0,e=a.length;b<e;++b)a[b].parent=this},getOuterHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;
this.writeHtml(a);return a.getHtml()},split:function(a){for(var b=this.children.splice(a,this.children.length-a),e=this.clone(),l=0;l<b.length;++l)b[l].parent=e;e.children=b;b[0]&&(b[0].previous=null);0<a&&(this.children[a-1].next=null);this.parent.add(e,this.getIndex()+1);return e},addClass:function(a){if(!this.hasClass(a)){var b=this.attributes["class"]||"";this.attributes["class"]=b+(b?" ":"")+a}},removeClass:function(a){var b=this.attributes["class"];b&&((b=CKEDITOR.tools.trim(b.replace(new RegExp("(?:\\s+|^)"+
a+"(?:\\s+|$)")," ")))?this.attributes["class"]=b:delete this.attributes["class"])},hasClass:function(a){var b=this.attributes["class"];return b?(new RegExp("(?:^|\\s)"+a+"(?\x3d\\s|$)")).test(b):!1},getFilterContext:function(a){var b=[];a||(a={off:!1,nonEditable:!1,nestedEditable:!1});a.off||"off"!=this.attributes["data-cke-processor"]||b.push("off",!0);a.nonEditable||"false"!=this.attributes.contenteditable?a.nonEditable&&!a.nestedEditable&&"true"==this.attributes.contenteditable&&b.push("nestedEditable",
!0):b.push("nonEditable",!0);if(b.length){a=CKEDITOR.tools.copy(a);for(var e=0;e<b.length;e+=2)a[b[e]]=b[e+1]}return a}},!0)}(),function(){var a={},e=/{([^}]+)}/g,b=/([\\'])/g,c=/\n/g,d=/\r/g;CKEDITOR.template=function(m){if(a[m])this.output=a[m];else{var l=m.replace(b,"\\$1").replace(c,"\\n").replace(d,"\\r").replace(e,function(a,b){return"',data['"+b+"']\x3d\x3dundefined?'{"+b+"}':data['"+b+"'],'"});this.output=a[m]=Function("data","buffer","return buffer?buffer.push('"+l+"'):['"+l+"'].join('');")}}}(),
delete CKEDITOR.loadFullCore,CKEDITOR.instances={},CKEDITOR.document=new CKEDITOR.dom.document(document),CKEDITOR.add=function(a){CKEDITOR.instances[a.name]=a;a.on("focus",function(){CKEDITOR.currentInstance!=a&&(CKEDITOR.currentInstance=a,CKEDITOR.fire("currentInstance"))});a.on("blur",function(){CKEDITOR.currentInstance==a&&(CKEDITOR.currentInstance=null,CKEDITOR.fire("currentInstance"))});CKEDITOR.fire("instance",null,a)},CKEDITOR.remove=function(a){delete CKEDITOR.instances[a.name]},function(){var a=
{};CKEDITOR.addTemplate=function(e,b){var c=a[e];if(c)return c;c={name:e,source:b};CKEDITOR.fire("template",c);return a[e]=new CKEDITOR.template(c.source)};CKEDITOR.getTemplate=function(e){return a[e]}}(),function(){var a=[];CKEDITOR.addCss=function(e){a.push(e)};CKEDITOR.getCss=function(){return a.join("\n")}}(),CKEDITOR.on("instanceDestroyed",function(){CKEDITOR.tools.isEmpty(this.instances)&&CKEDITOR.fire("reset")}),CKEDITOR.TRISTATE_ON=1,CKEDITOR.TRISTATE_OFF=2,CKEDITOR.TRISTATE_DISABLED=0,function(){CKEDITOR.inline=
function(a,e){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var b=new CKEDITOR.editor(e,a,CKEDITOR.ELEMENT_MODE_INLINE),c=a.is("textarea")?a:null;c?(b.setData(c.getValue(),null,!0),a=CKEDITOR.dom.element.createFromHtml('\x3cdiv contenteditable\x3d"'+!!b.readOnly+'" class\x3d"cke_textarea_inline"\x3e'+c.getValue()+"\x3c/div\x3e",CKEDITOR.document),a.insertAfter(c),
c.hide(),c.$.form&&b._attachToForm()):b.setData(a.getHtml(),null,!0);b.on("loaded",function(){b.fire("uiReady");b.editable(a);b.container=a;b.ui.contentsElement=a;b.setData(b.getData(1));b.resetDirty();b.fire("contentDom");b.mode="wysiwyg";b.fire("mode");b.status="ready";b.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,b)},null,null,1E4);b.on("destroy",function(){c&&(b.container.clearCustomData(),b.container.remove(),c.show());b.element.clearCustomData();delete b.element});return b};
CKEDITOR.inlineAll=function(){var a,e,b;for(b in CKEDITOR.dtd.$editable)for(var c=CKEDITOR.document.getElementsByTag(b),d=0,m=c.count();d<m;d++)a=c.getItem(d),"true"==a.getAttribute("contenteditable")&&(e={element:a,config:{}},!1!==CKEDITOR.fire("inline",e)&&CKEDITOR.inline(a,e.config))};CKEDITOR.domReady(function(){!CKEDITOR.disableAutoInline&&CKEDITOR.inlineAll()})}(),CKEDITOR.replaceClass="ckeditor",function(){function a(a,d,m,l){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);
if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var f=new CKEDITOR.editor(d,a,l);l==CKEDITOR.ELEMENT_MODE_REPLACE&&(a.setStyle("visibility","hidden"),f._.required=a.hasAttribute("required"),a.removeAttribute("required"));m&&f.setData(m,null,!0);f.on("loaded",function(){b(f);l==CKEDITOR.ELEMENT_MODE_REPLACE&&f.config.autoUpdateElement&&a.$.form&&f._attachToForm();f.setMode(f.config.startupMode,function(){f.resetDirty();f.status="ready";
f.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,f)})});f.on("destroy",e);return f}function e(){var a=this.container,b=this.element;a&&(a.clearCustomData(),a.remove());b&&(b.clearCustomData(),this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&(b.show(),this._.required&&b.setAttribute("required","required")),delete this.element)}function b(a){var b=a.name,e=a.element,l=a.elementMode,f=a.fire("uiSpace",{space:"top",html:""}).html,h=a.fire("uiSpace",{space:"bottom",html:""}).html,k=new CKEDITOR.template('\x3c{outerEl} id\x3d"cke_{name}" class\x3d"{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} '+
CKEDITOR.env.cssClass+'"  dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"application"'+(a.title?' aria-labelledby\x3d"cke_{name}_arialbl"':"")+"\x3e"+(a.title?'\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e':"")+'\x3c{outerEl} class\x3d"cke_inner cke_reset" role\x3d"presentation"\x3e{topHtml}\x3c{outerEl} id\x3d"{contentId}" class\x3d"cke_contents cke_reset" role\x3d"presentation"\x3e\x3c/{outerEl}\x3e{bottomHtml}\x3c/{outerEl}\x3e\x3c/{outerEl}\x3e'),
b=CKEDITOR.dom.element.createFromHtml(k.output({id:a.id,name:b,langDir:a.lang.dir,langCode:a.langCode,voiceLabel:a.title,topHtml:f?'\x3cspan id\x3d"'+a.ui.spaceId("top")+'" class\x3d"cke_top cke_reset_all" role\x3d"presentation" style\x3d"height:auto"\x3e'+f+"\x3c/span\x3e":"",contentId:a.ui.spaceId("contents"),bottomHtml:h?'\x3cspan id\x3d"'+a.ui.spaceId("bottom")+'" class\x3d"cke_bottom cke_reset_all" role\x3d"presentation"\x3e'+h+"\x3c/span\x3e":"",outerEl:CKEDITOR.env.ie?"span":"div"}));l==CKEDITOR.ELEMENT_MODE_REPLACE?
(e.hide(),b.insertAfter(e)):e.append(b);a.container=b;a.ui.contentsElement=a.ui.space("contents");f&&a.ui.space("top").unselectable();h&&a.ui.space("bottom").unselectable();e=a.config.width;l=a.config.height;e&&b.setStyle("width",CKEDITOR.tools.cssLength(e));l&&a.ui.space("contents").setStyle("height",CKEDITOR.tools.cssLength(l));b.disableContextMenu();CKEDITOR.env.webkit&&b.on("focus",function(){a.focus()});a.fireOnce("uiReady")}CKEDITOR.replace=function(b,d){return a(b,d,null,CKEDITOR.ELEMENT_MODE_REPLACE)};
CKEDITOR.appendTo=function(b,d,e){return a(b,d,e,CKEDITOR.ELEMENT_MODE_APPENDTO)};CKEDITOR.replaceAll=function(){for(var a=document.getElementsByTagName("textarea"),b=0;b<a.length;b++){var e=null,l=a[b];if(l.name||l.id){if("string"==typeof arguments[0]){if(!(new RegExp("(?:^|\\s)"+arguments[0]+"(?:$|\\s)")).test(l.className))continue}else if("function"==typeof arguments[0]&&(e={},!1===arguments[0](l,e)))continue;this.replace(l,e)}}};CKEDITOR.editor.prototype.addMode=function(a,b){(this._.modes||(this._.modes=
{}))[a]=b};CKEDITOR.editor.prototype.setMode=function(a,b){var e=this,l=this._.modes;if(a!=e.mode&&l&&l[a]){e.fire("beforeSetMode",a);if(e.mode){var f=e.checkDirty(),l=e._.previousModeData,h,k=0;e.fire("beforeModeUnload");e.editable(0);e._.previousMode=e.mode;e._.previousModeData=h=e.getData(1);"source"==e.mode&&l==h&&(e.fire("lockSnapshot",{forceUpdate:!0}),k=1);e.ui.space("contents").setHtml("");e.mode=""}else e._.previousModeData=e.getData(1);this._.modes[a](function(){e.mode=a;void 0!==f&&!f&&
e.resetDirty();k?e.fire("unlockSnapshot"):"wysiwyg"==a&&e.fire("saveSnapshot");setTimeout(function(){e.fire("mode");b&&b.call(e)},0)})}};CKEDITOR.editor.prototype.resize=function(a,b,e,l){var f=this.container,h=this.ui.space("contents"),k=CKEDITOR.env.webkit&&this.document&&this.document.getWindow().$.frameElement;l=l?this.container.getFirst(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_inner")}):f;l.setSize("width",a,!0);k&&(k.style.width="1%");var g=(l.$.offsetHeight||0)-(h.$.clientHeight||
0),f=Math.max(b-(e?0:g),0);b=e?b+g:b;h.setStyle("height",f+"px");k&&(k.style.width="100%");this.fire("resize",{outerHeight:b,contentsHeight:f,outerWidth:a||l.getSize("width")})};CKEDITOR.editor.prototype.getResizable=function(a){return a?this.ui.space("contents"):this.container};CKEDITOR.domReady(function(){CKEDITOR.replaceClass&&CKEDITOR.replaceAll(CKEDITOR.replaceClass)})}(),CKEDITOR.config.startupMode="wysiwyg",function(){function a(a){var b=a.editor,d=a.data.path,f=d.blockLimit,g=a.data.selection,
k=g.getRanges()[0],h;if(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)if(g=e(g,d))g.appendBogus(),h=CKEDITOR.env.ie;l(b,d.block,f)&&k.collapsed&&!k.getCommonAncestor().isReadOnly()&&(d=k.clone(),d.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS),f=new CKEDITOR.dom.walker(d),f.guard=function(a){return!c(a)||a.type==CKEDITOR.NODE_COMMENT||a.isReadOnly()},!f.checkForward()||d.checkStartOfBlock()&&d.checkEndOfBlock())&&(b=k.fixBlock(!0,b.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p"),CKEDITOR.env.needsBrFiller||
(b=b.getFirst(c))&&b.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(b.getText()).match(/^(?:&nbsp;|\xa0)$/)&&b.remove(),h=1,a.cancel());h&&k.select()}function e(a,b){if(a.isFake)return 0;var d=b.block||b.blockLimit,f=d&&d.getLast(c);if(!(!d||!d.isBlockBoundary()||f&&f.type==CKEDITOR.NODE_ELEMENT&&f.isBlockBoundary()||d.is("pre")||d.getBogus()))return d}function b(a){var b=a.data.getTarget();b.is("input")&&(b=b.getAttribute("type"),"submit"!=b&&"reset"!=b||a.data.preventDefault())}function c(a){return g(a)&&
n(a)}function d(a,b){return function(c){var d=c.data.$.toElement||c.data.$.fromElement||c.data.$.relatedTarget;(d=d&&d.nodeType==CKEDITOR.NODE_ELEMENT?new CKEDITOR.dom.element(d):null)&&(b.equals(d)||b.contains(d))||a.call(this,c)}}function m(a){function b(a){return function(b,f){f&&b.type==CKEDITOR.NODE_ELEMENT&&b.is(g)&&(d=b);if(!(f||!c(b)||a&&q(b)))return!1}}var d,f=a.getRanges()[0];a=a.root;var g={table:1,ul:1,ol:1,dl:1};if(f.startPath().contains(g)){var e=f.clone();e.collapse(1);e.setStartAt(a,
CKEDITOR.POSITION_AFTER_START);a=new CKEDITOR.dom.walker(e);a.guard=b();a.checkBackward();if(d)return e=f.clone(),e.collapse(),e.setEndAt(d,CKEDITOR.POSITION_AFTER_END),a=new CKEDITOR.dom.walker(e),a.guard=b(!0),d=!1,a.checkForward(),d}return null}function l(a,b,c){return!1!==a.config.autoParagraph&&a.activeEnterMode!=CKEDITOR.ENTER_BR&&(a.editable().equals(c)&&!b||b&&"true"==b.getAttribute("contenteditable"))}function f(a){return a.activeEnterMode!=CKEDITOR.ENTER_BR&&!1!==a.config.autoParagraph?
a.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p":!1}function h(a){var b=a.editor;b.getSelection().scrollIntoView();setTimeout(function(){b.fire("saveSnapshot")},0)}function k(a,b,c){var d=a.getCommonAncestor(b);for(b=a=c?b:a;(a=a.getParent())&&!d.equals(a)&&1==a.getChildCount();)b=a;b.remove()}CKEDITOR.editable=CKEDITOR.tools.createClass({base:CKEDITOR.dom.element,$:function(a,b){this.base(b.$||b);this.editor=a;this.status="unloaded";this.hasFocus=!1;this.setup()},proto:{focus:function(){var a;if(CKEDITOR.env.webkit&&
!this.hasFocus&&(a=this.editor._.previousActive||this.getDocument().getActive(),this.contains(a))){a.focus();return}try{this.$[CKEDITOR.env.ie&&this.getDocument().equals(CKEDITOR.document)?"setActive":"focus"]()}catch(b){if(!CKEDITOR.env.ie)throw b;}CKEDITOR.env.safari&&!this.isInline()&&(a=CKEDITOR.document.getActive(),a.equals(this.getWindow().getFrame())||this.getWindow().focus())},on:function(a,b){var c=Array.prototype.slice.call(arguments,0);CKEDITOR.env.ie&&/^focus|blur$/.exec(a)&&(a="focus"==
a?"focusin":"focusout",b=d(b,this),c[0]=a,c[1]=b);return CKEDITOR.dom.element.prototype.on.apply(this,c)},attachListener:function(a){!this._.listeners&&(this._.listeners=[]);var b=Array.prototype.slice.call(arguments,1),b=a.on.apply(a,b);this._.listeners.push(b);return b},clearListeners:function(){var a=this._.listeners;try{for(;a.length;)a.pop().removeListener()}catch(b){}},restoreAttrs:function(){var a=this._.attrChanges,b,c;for(c in a)a.hasOwnProperty(c)&&(b=a[c],null!==b?this.setAttribute(c,b):
this.removeAttribute(c))},attachClass:function(a){var b=this.getCustomData("classes");this.hasClass(a)||(!b&&(b=[]),b.push(a),this.setCustomData("classes",b),this.addClass(a))},changeAttr:function(a,b){var c=this.getAttribute(a);b!==c&&(!this._.attrChanges&&(this._.attrChanges={}),a in this._.attrChanges||(this._.attrChanges[a]=c),this.setAttribute(a,b))},insertText:function(a){this.editor.focus();this.insertHtml(this.transformPlainTextToHtml(a),"text")},transformPlainTextToHtml:function(a){var b=
this.editor.getSelection().getStartElement().hasAscendant("pre",!0)?CKEDITOR.ENTER_BR:this.editor.activeEnterMode;return CKEDITOR.tools.transformPlainTextToHtml(a,b)},insertHtml:function(a,b,c){var d=this.editor;d.focus();d.fire("saveSnapshot");c||(c=d.getSelection().getRanges()[0]);t(this,b||"html",a,c);c.select();h(this);this.editor.fire("afterInsertHtml",{})},insertHtmlIntoRange:function(a,b,c){t(this,c||"html",a,b);this.editor.fire("afterInsertHtml",{intoRange:b})},insertElement:function(a,b){var d=
this.editor;d.focus();d.fire("saveSnapshot");var f=d.activeEnterMode,d=d.getSelection(),g=a.getName(),g=CKEDITOR.dtd.$block[g];b||(b=d.getRanges()[0]);this.insertElementIntoRange(a,b)&&(b.moveToPosition(a,CKEDITOR.POSITION_AFTER_END),g&&((g=a.getNext(function(a){return c(a)&&!q(a)}))&&g.type==CKEDITOR.NODE_ELEMENT&&g.is(CKEDITOR.dtd.$block)?g.getDtd()["#"]?b.moveToElementEditStart(g):b.moveToElementEditEnd(a):g||f==CKEDITOR.ENTER_BR||(g=b.fixBlock(!0,f==CKEDITOR.ENTER_DIV?"div":"p"),b.moveToElementEditStart(g))));
d.selectRanges([b]);h(this)},insertElementIntoSelection:function(a){this.insertElement(a)},insertElementIntoRange:function(a,b){var c=this.editor,d=c.config.enterMode,f=a.getName(),g=CKEDITOR.dtd.$block[f];if(b.checkReadOnly())return!1;b.deleteContents(1);b.startContainer.type==CKEDITOR.NODE_ELEMENT&&b.startContainer.is({tr:1,table:1,tbody:1,thead:1,tfoot:1})&&p(b);var e,k;if(g)for(;(e=b.getCommonAncestor(0,1))&&(k=CKEDITOR.dtd[e.getName()])&&(!k||!k[f]);)e.getName()in CKEDITOR.dtd.span?b.splitElement(e):
b.checkStartOfBlock()&&b.checkEndOfBlock()?(b.setStartBefore(e),b.collapse(!0),e.remove()):b.splitBlock(d==CKEDITOR.ENTER_DIV?"div":"p",c.editable());b.insertNode(a);return!0},setData:function(a,b){b||(a=this.editor.dataProcessor.toHtml(a));this.setHtml(a);this.fixInitialSelection();"unloaded"==this.status&&(this.status="ready");this.editor.fire("dataReady")},getData:function(a){var b=this.getHtml();a||(b=this.editor.dataProcessor.toDataFormat(b));return b},setReadOnly:function(a){this.setAttribute("contenteditable",
!a)},detach:function(){this.removeClass("cke_editable");this.status="detached";var a=this.editor;this._.detach();delete a.document;delete a.window},isInline:function(){return this.getDocument().equals(CKEDITOR.document)},fixInitialSelection:function(){function a(){var b=c.getDocument().$,d=b.getSelection(),f;a:if(d.anchorNode&&d.anchorNode==c.$)f=!0;else{if(CKEDITOR.env.webkit&&(f=c.getDocument().getActive())&&f.equals(c)&&!d.anchorNode){f=!0;break a}f=void 0}f&&(f=new CKEDITOR.dom.range(c),f.moveToElementEditStart(c),
b=b.createRange(),b.setStart(f.startContainer.$,f.startOffset),b.collapse(!0),d.removeAllRanges(),d.addRange(b))}function b(){var a=c.getDocument().$,d=a.selection,f=c.getDocument().getActive();"None"==d.type&&f.equals(c)&&(d=new CKEDITOR.dom.range(c),a=a.body.createTextRange(),d.moveToElementEditStart(c),d=d.startContainer,d.type!=CKEDITOR.NODE_ELEMENT&&(d=d.getParent()),a.moveToElementText(d.$),a.collapse(!0),a.select())}var c=this;if(CKEDITOR.env.ie&&(9>CKEDITOR.env.version||CKEDITOR.env.quirks))this.hasFocus&&
(this.focus(),b());else if(this.hasFocus)this.focus(),a();else this.once("focus",function(){a()},null,null,-999)},getHtmlFromRange:function(a){if(a.collapsed)return new CKEDITOR.dom.documentFragment(a.document);a={doc:this.getDocument(),range:a.clone()};w.eol.detect(a,this);w.bogus.exclude(a);w.cell.shrink(a);a.fragment=a.range.cloneContents();w.tree.rebuild(a,this);w.eol.fix(a,this);return new CKEDITOR.dom.documentFragment(a.fragment.$)},extractHtmlFromRange:function(a,b){var c=x,d={range:a,doc:a.document},
f=this.getHtmlFromRange(a);if(a.collapsed)return a.optimize(),f;a.enlarge(CKEDITOR.ENLARGE_INLINE,1);c.table.detectPurge(d);d.bookmark=a.createBookmark();delete d.range;var g=this.editor.createRange();g.moveToPosition(d.bookmark.startNode,CKEDITOR.POSITION_BEFORE_START);d.targetBookmark=g.createBookmark();c.list.detectMerge(d,this);c.table.detectRanges(d,this);c.block.detectMerge(d,this);d.tableContentsRanges?(c.table.deleteRanges(d),a.moveToBookmark(d.bookmark),d.range=a):(a.moveToBookmark(d.bookmark),
d.range=a,a.extractContents(c.detectExtractMerge(d)));a.moveToBookmark(d.targetBookmark);a.optimize();c.fixUneditableRangePosition(a);c.list.merge(d,this);c.table.purge(d,this);c.block.merge(d,this);if(b){c=a.startPath();if(d=a.checkStartOfBlock()&&a.checkEndOfBlock()&&c.block&&!a.root.equals(c.block)){a:{var d=c.block.getElementsByTag("span"),g=0,e;if(d)for(;e=d.getItem(g++);)if(!n(e)){d=!0;break a}d=!1}d=!d}d&&(a.moveToPosition(c.block,CKEDITOR.POSITION_BEFORE_START),c.block.remove())}else c.autoParagraph(this.editor,
a),u(a.startContainer)&&a.startContainer.appendBogus();a.startContainer.mergeSiblings();return f},setup:function(){var a=this.editor;this.attachListener(a,"beforeGetData",function(){var b=this.getData();this.is("textarea")||!1!==a.config.ignoreEmptyParagraph&&(b=b.replace(v,function(a,b){return b}));a.setData(b,null,1)},this);this.attachListener(a,"getSnapshot",function(a){a.data=this.getData(1)},this);this.attachListener(a,"afterSetData",function(){this.setData(a.getData(1))},this);this.attachListener(a,
"loadSnapshot",function(a){this.setData(a.data,1)},this);this.attachListener(a,"beforeFocus",function(){var b=a.getSelection();(b=b&&b.getNative())&&"Control"==b.type||this.focus()},this);this.attachListener(a,"insertHtml",function(a){this.insertHtml(a.data.dataValue,a.data.mode,a.data.range)},this);this.attachListener(a,"insertElement",function(a){this.insertElement(a.data)},this);this.attachListener(a,"insertText",function(a){this.insertText(a.data)},this);this.setReadOnly(a.readOnly);this.attachClass("cke_editable");
a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?this.attachClass("cke_editable_inline"):a.elementMode!=CKEDITOR.ELEMENT_MODE_REPLACE&&a.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO||this.attachClass("cke_editable_themed");this.attachClass("cke_contents_"+a.config.contentsLangDirection);a.keystrokeHandler.blockedKeystrokes[8]=+a.readOnly;a.keystrokeHandler.attach(this);this.on("blur",function(){this.hasFocus=!1},null,null,-1);this.on("focus",function(){this.hasFocus=!0},null,null,-1);a.focusManager.add(this);
this.equals(CKEDITOR.document.getActive())&&(this.hasFocus=!0,a.once("contentDom",function(){a.focusManager.focus(this)},this));this.isInline()&&this.changeAttr("tabindex",a.tabIndex);if(!this.is("textarea")){a.document=this.getDocument();a.window=this.getWindow();var d=a.document;this.changeAttr("spellcheck",!a.config.disableNativeSpellChecker);var f=a.config.contentsLangDirection;this.getDirection(1)!=f&&this.changeAttr("dir",f);var e=CKEDITOR.getCss();e&&(f=d.getHead(),f.getCustomData("stylesheet")||
(e=d.appendStyleText(e),e=new CKEDITOR.dom.element(e.ownerNode||e.owningElement),f.setCustomData("stylesheet",e),e.data("cke-temp",1)));f=d.getCustomData("stylesheet_ref")||0;d.setCustomData("stylesheet_ref",f+1);this.setCustomData("cke_includeReadonly",!a.config.disableReadonlyStyling);this.attachListener(this,"click",function(a){a=a.data;var b=(new CKEDITOR.dom.elementPath(a.getTarget(),this)).contains("a");b&&2!=a.$.button&&b.isReadOnly()&&a.preventDefault()});var h={8:1,46:1};this.attachListener(a,
"key",function(b){if(a.readOnly)return!0;var c=b.data.domEvent.getKey(),d;if(c in h){b=a.getSelection();var f,e=b.getRanges()[0],k=e.startPath(),l,D,r,c=8==c;CKEDITOR.env.ie&&11>CKEDITOR.env.version&&(f=b.getSelectedElement())||(f=m(b))?(a.fire("saveSnapshot"),e.moveToPosition(f,CKEDITOR.POSITION_BEFORE_START),f.remove(),e.select(),a.fire("saveSnapshot"),d=1):e.collapsed&&((l=k.block)&&(r=l[c?"getPrevious":"getNext"](g))&&r.type==CKEDITOR.NODE_ELEMENT&&r.is("table")&&e[c?"checkStartOfBlock":"checkEndOfBlock"]()?
(a.fire("saveSnapshot"),e[c?"checkEndOfBlock":"checkStartOfBlock"]()&&l.remove(),e["moveToElementEdit"+(c?"End":"Start")](r),e.select(),a.fire("saveSnapshot"),d=1):k.blockLimit&&k.blockLimit.is("td")&&(D=k.blockLimit.getAscendant("table"))&&e.checkBoundaryOfElement(D,c?CKEDITOR.START:CKEDITOR.END)&&(r=D[c?"getPrevious":"getNext"](g))?(a.fire("saveSnapshot"),e["moveToElementEdit"+(c?"End":"Start")](r),e.checkStartOfBlock()&&e.checkEndOfBlock()?r.remove():e.select(),a.fire("saveSnapshot"),d=1):(D=k.contains(["td",
"th","caption"]))&&e.checkBoundaryOfElement(D,c?CKEDITOR.START:CKEDITOR.END)&&(d=1))}return!d});a.blockless&&CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller&&this.attachListener(this,"keyup",function(b){b.data.getKeystroke()in h&&!this.getFirst(c)&&(this.appendBogus(),b=a.createRange(),b.moveToPosition(this,CKEDITOR.POSITION_AFTER_START),b.select())});this.attachListener(this,"dblclick",function(b){if(a.readOnly)return!1;b={element:b.data.getTarget()};a.fire("doubleclick",b)});CKEDITOR.env.ie&&this.attachListener(this,
"click",b);CKEDITOR.env.ie&&!CKEDITOR.env.edge||this.attachListener(this,"mousedown",function(b){var c=b.data.getTarget();c.is("img","hr","input","textarea","select")&&!c.isReadOnly()&&(a.getSelection().selectElement(c),c.is("input","textarea","select")&&b.data.preventDefault())});CKEDITOR.env.edge&&this.attachListener(this,"mouseup",function(b){(b=b.data.getTarget())&&b.is("img")&&a.getSelection().selectElement(b)});CKEDITOR.env.gecko&&this.attachListener(this,"mouseup",function(b){if(2==b.data.$.button&&
(b=b.data.getTarget(),!b.getOuterHtml().replace(v,""))){var c=a.createRange();c.moveToElementEditStart(b);c.select(!0)}});CKEDITOR.env.webkit&&(this.attachListener(this,"click",function(a){a.data.getTarget().is("input","select")&&a.data.preventDefault()}),this.attachListener(this,"mouseup",function(a){a.data.getTarget().is("input","textarea")&&a.data.preventDefault()}));CKEDITOR.env.webkit&&this.attachListener(a,"key",function(b){if(a.readOnly)return!0;b=b.data.domEvent.getKey();if(b in h){var c=
8==b,d=a.getSelection().getRanges()[0];b=d.startPath();if(d.collapsed)a:{var f=b.block;if(f&&d[c?"checkStartOfBlock":"checkEndOfBlock"]()&&d.moveToClosestEditablePosition(f,!c)&&d.collapsed){if(d.startContainer.type==CKEDITOR.NODE_ELEMENT){var g=d.startContainer.getChild(d.startOffset-(c?1:0));if(g&&g.type==CKEDITOR.NODE_ELEMENT&&g.is("hr")){a.fire("saveSnapshot");g.remove();b=!0;break a}}d=d.startPath().block;if(!d||d&&d.contains(f))b=void 0;else{a.fire("saveSnapshot");var e;(e=(c?d:f).getBogus())&&
e.remove();e=a.getSelection();g=e.createBookmarks();(c?f:d).moveChildren(c?d:f,!1);b.lastElement.mergeSiblings();k(f,d,!c);e.selectBookmarks(g);b=!0}}else b=!1}else c=d,e=b.block,d=c.endPath().block,e&&d&&!e.equals(d)?(a.fire("saveSnapshot"),(f=e.getBogus())&&f.remove(),c.enlarge(CKEDITOR.ENLARGE_INLINE),c.deleteContents(),d.getParent()&&(d.moveChildren(e,!1),b.lastElement.mergeSiblings(),k(e,d,!0)),c=a.getSelection().getRanges()[0],c.collapse(1),c.optimize(),""===c.startContainer.getHtml()&&c.startContainer.appendBogus(),
c.select(),b=!0):b=!1;if(!b)return;a.getSelection().scrollIntoView();a.fire("saveSnapshot");return!1}},this,null,100)}}},_:{detach:function(){this.editor.setData(this.editor.getData(),0,1);this.clearListeners();this.restoreAttrs();var a;if(a=this.removeCustomData("classes"))for(;a.length;)this.removeClass(a.pop());if(!this.is("textarea")){a=this.getDocument();var b=a.getHead();if(b.getCustomData("stylesheet")){var c=a.getCustomData("stylesheet_ref");--c?a.setCustomData("stylesheet_ref",c):(a.removeCustomData("stylesheet_ref"),
b.removeCustomData("stylesheet").remove())}}this.editor.fire("contentDomUnload");delete this.editor}}});CKEDITOR.editor.prototype.editable=function(a){var b=this._.editable;if(b&&a)return 0;arguments.length&&(b=this._.editable=a?a instanceof CKEDITOR.editable?a:new CKEDITOR.editable(this,a):(b&&b.detach(),null));return b};CKEDITOR.on("instanceLoaded",function(b){var c=b.editor;c.on("insertElement",function(a){a=a.data;a.type==CKEDITOR.NODE_ELEMENT&&(a.is("input")||a.is("textarea"))&&("false"!=a.getAttribute("contentEditable")&&
a.data("cke-editable",a.hasAttribute("contenteditable")?"true":"1"),a.setAttribute("contentEditable",!1))});c.on("selectionChange",function(b){if(!c.readOnly){var d=c.getSelection();d&&!d.isLocked&&(d=c.checkDirty(),c.fire("lockSnapshot"),a(b),c.fire("unlockSnapshot"),!d&&c.resetDirty())}})});CKEDITOR.on("instanceCreated",function(a){var b=a.editor;b.on("mode",function(){var a=b.editable();if(a&&a.isInline()){var c=b.title;a.changeAttr("role","textbox");a.changeAttr("aria-label",c);c&&a.changeAttr("title",
c);var d=b.fire("ariaEditorHelpLabel",{}).label;if(d&&(c=this.ui.space(this.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?"top":"contents"))){var f=CKEDITOR.tools.getNextId(),d=CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"'+f+'" class\x3d"cke_voice_label"\x3e'+d+"\x3c/span\x3e");c.append(d);a.changeAttr("aria-describedby",f)}}})});CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}");var g=CKEDITOR.dom.walker.whitespaces(!0),
n=CKEDITOR.dom.walker.bookmark(!1,!0),u=CKEDITOR.dom.walker.empty(),q=CKEDITOR.dom.walker.bogus(),v=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi,t=function(){function a(b){return b.type==CKEDITOR.NODE_ELEMENT}function b(c,d){var f,g,e,k,h=[],l=d.range.startContainer;f=d.range.startPath();for(var l=m[l.getName()],n=0,w=c.getChildren(),v=w.count(),p=-1,z=-1,t=0,E=f.contains(m.$list);n<v;++n)f=w.getItem(n),a(f)?(e=
f.getName(),E&&e in CKEDITOR.dtd.$list?h=h.concat(b(f,d)):(k=!!l[e],"br"!=e||!f.data("cke-eol")||n&&n!=v-1||(t=(g=n?h[n-1].node:w.getItem(n+1))&&(!a(g)||!g.is("br")),g=g&&a(g)&&m.$block[g.getName()]),-1!=p||k||(p=n),k||(z=n),h.push({isElement:1,isLineBreak:t,isBlock:f.isBlockBoundary(),hasBlockSibling:g,node:f,name:e,allowed:k}),g=t=0)):h.push({isElement:0,node:f,allowed:1});-1<p&&(h[p].firstNotAllowed=1);-1<z&&(h[z].lastNotAllowed=1);return h}function d(b,c){var f=[],g=b.getChildren(),e=g.count(),
k,h=0,l=m[c],r=!b.is(m.$inline)||b.is("br");for(r&&f.push(" ");h<e;h++)k=g.getItem(h),a(k)&&!k.is(l)?f=f.concat(d(k,c)):f.push(k);r&&f.push(" ");return f}function g(b){return a(b.startContainer)&&b.startContainer.getChild(b.startOffset-1)}function e(b){return b&&a(b)&&(b.is(m.$removeEmpty)||b.is("a")&&!b.isBlockBoundary())}function k(b,c,d,f){var g=b.clone(),e,h;g.setEndAt(c,CKEDITOR.POSITION_BEFORE_END);(e=(new CKEDITOR.dom.walker(g)).next())&&a(e)&&n[e.getName()]&&(h=e.getPrevious())&&a(h)&&!h.getParent().equals(b.startContainer)&&
d.contains(h)&&f.contains(e)&&e.isIdentical(h)&&(e.moveChildren(h),e.remove(),k(b,c,d,f))}function h(b,c){function d(b,c){if(c.isBlock&&c.isElement&&!c.node.is("br")&&a(b)&&b.is("br"))return b.remove(),1}var f=c.endContainer.getChild(c.endOffset),g=c.endContainer.getChild(c.endOffset-1);f&&d(f,b[b.length-1]);g&&d(g,b[0])&&(c.setEnd(c.endContainer,c.endOffset-1),c.collapse())}var m=CKEDITOR.dtd,n={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,li:1,pre:1,dl:1,blockquote:1},w={p:1,div:1,h1:1,h2:1,
h3:1,h4:1,h5:1,h6:1},v=CKEDITOR.tools.extend({},m.$inline);delete v.br;return function(n,D,p,t){var q=n.editor,x=!1;"unfiltered_html"==D&&(D="html",x=!0);if(!t.checkReadOnly()){var u=(new CKEDITOR.dom.elementPath(t.startContainer,t.root)).blockLimit||t.root;n={type:D,dontFilter:x,editable:n,editor:q,range:t,blockLimit:u,mergeCandidates:[],zombies:[]};D=n.range;t=n.mergeCandidates;var F,M;"text"==n.type&&D.shrink(CKEDITOR.SHRINK_ELEMENT,!0,!1)&&(F=CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e",
D.document),D.insertNode(F),D.setStartAfter(F));x=new CKEDITOR.dom.elementPath(D.startContainer);n.endPath=u=new CKEDITOR.dom.elementPath(D.endContainer);if(!D.collapsed){var q=u.block||u.blockLimit,W=D.getCommonAncestor();q&&!q.equals(W)&&!q.contains(W)&&D.checkEndOfBlock()&&n.zombies.push(q);D.deleteContents()}for(;(M=g(D))&&a(M)&&M.isBlockBoundary()&&x.contains(M);)D.moveToPosition(M,CKEDITOR.POSITION_BEFORE_END);k(D,n.blockLimit,x,u);F&&(D.setEndBefore(F),D.collapse(),F.remove());F=D.startPath();
if(q=F.contains(e,!1,1))D.splitElement(q),n.inlineStylesRoot=q,n.inlineStylesPeak=F.lastElement;F=D.createBookmark();(q=F.startNode.getPrevious(c))&&a(q)&&e(q)&&t.push(q);(q=F.startNode.getNext(c))&&a(q)&&e(q)&&t.push(q);for(q=F.startNode;(q=q.getParent())&&e(q);)t.push(q);D.moveToBookmark(F);if(F=p){F=n.range;if("text"==n.type&&n.inlineStylesRoot){M=n.inlineStylesPeak;D=M.getDocument().createText("{cke-peak}");for(t=n.inlineStylesRoot.getParent();!M.equals(t);)D=D.appendTo(M.clone()),M=M.getParent();
p=D.getOuterHtml().split("{cke-peak}").join(p)}M=n.blockLimit.getName();if(/^\s+|\s+$/.test(p)&&"span"in CKEDITOR.dtd[M]){var U='\x3cspan data-cke-marker\x3d"1"\x3e\x26nbsp;\x3c/span\x3e';p=U+p+U}p=n.editor.dataProcessor.toHtml(p,{context:null,fixForBody:!1,protectedWhitespaces:!!U,dontFilter:n.dontFilter,filter:n.editor.activeFilter,enterMode:n.editor.activeEnterMode});M=F.document.createElement("body");M.setHtml(p);U&&(M.getFirst().remove(),M.getLast().remove());if((U=F.startPath().block)&&(1!=
U.getChildCount()||!U.getBogus()))a:{var J;if(1==M.getChildCount()&&a(J=M.getFirst())&&J.is(w)&&!J.hasAttribute("contenteditable")){U=J.getElementsByTag("*");F=0;for(t=U.count();F<t;F++)if(D=U.getItem(F),!D.is(v))break a;J.moveChildren(J.getParent(1));J.remove()}}n.dataWrapper=M;F=p}if(F){J=n.range;F=J.document;var L;M=n.blockLimit;t=0;var S,U=[],Q,aa;p=q=0;var V,da;D=J.startContainer;var x=n.endPath.elements[0],ba,u=x.getPosition(D),W=!!x.getCommonAncestor(D)&&u!=CKEDITOR.POSITION_IDENTICAL&&!(u&
CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED);D=b(n.dataWrapper,n);for(h(D,J);t<D.length;t++){u=D[t];if(L=u.isLineBreak){L=J;V=M;var X=void 0,ea=void 0;u.hasBlockSibling?L=1:(X=L.startContainer.getAscendant(m.$block,1))&&X.is({div:1,p:1})?(ea=X.getPosition(V),ea==CKEDITOR.POSITION_IDENTICAL||ea==CKEDITOR.POSITION_CONTAINS?L=0:(V=L.splitElement(X),L.moveToPosition(V,CKEDITOR.POSITION_AFTER_START),L=1)):L=0}if(L)p=0<t;else{L=J.startPath();!u.isBlock&&l(n.editor,L.block,L.blockLimit)&&(aa=
f(n.editor))&&(aa=F.createElement(aa),aa.appendBogus(),J.insertNode(aa),CKEDITOR.env.needsBrFiller&&(S=aa.getBogus())&&S.remove(),J.moveToPosition(aa,CKEDITOR.POSITION_BEFORE_END));if((L=J.startPath().block)&&!L.equals(Q)){if(S=L.getBogus())S.remove(),U.push(L);Q=L}u.firstNotAllowed&&(q=1);if(q&&u.isElement){L=J.startContainer;for(V=null;L&&!m[L.getName()][u.name];){if(L.equals(M)){L=null;break}V=L;L=L.getParent()}if(L)V&&(da=J.splitElement(V),n.zombies.push(da),n.zombies.push(V));else{V=M.getName();
ba=!t;L=t==D.length-1;V=d(u.node,V);for(var X=[],ea=V.length,ca=0,ga=void 0,fa=0,ia=-1;ca<ea;ca++)ga=V[ca]," "==ga?(fa||ba&&!ca||(X.push(new CKEDITOR.dom.text(" ")),ia=X.length),fa=1):(X.push(ga),fa=0);L&&ia==X.length&&X.pop();ba=X}}if(ba){for(;L=ba.pop();)J.insertNode(L);ba=0}else J.insertNode(u.node);u.lastNotAllowed&&t<D.length-1&&((da=W?x:da)&&J.setEndAt(da,CKEDITOR.POSITION_AFTER_START),q=0);J.collapse()}}1!=D.length?S=!1:(S=D[0],S=S.isElement&&"false"==S.node.getAttribute("contenteditable"));
S&&(p=!0,L=D[0].node,J.setStartAt(L,CKEDITOR.POSITION_BEFORE_START),J.setEndAt(L,CKEDITOR.POSITION_AFTER_END));n.dontMoveCaret=p;n.bogusNeededBlocks=U}S=n.range;var Z;da=n.bogusNeededBlocks;for(ba=S.createBookmark();Q=n.zombies.pop();)Q.getParent()&&(aa=S.clone(),aa.moveToElementEditStart(Q),aa.removeEmptyBlocksAtEnd());if(da)for(;Q=da.pop();)CKEDITOR.env.needsBrFiller?Q.appendBogus():Q.append(S.document.createText(" "));for(;Q=n.mergeCandidates.pop();)Q.mergeSiblings();S.moveToBookmark(ba);if(!n.dontMoveCaret){for(Q=
g(S);Q&&a(Q)&&!Q.is(m.$empty);){if(Q.isBlockBoundary())S.moveToPosition(Q,CKEDITOR.POSITION_BEFORE_END);else{if(e(Q)&&Q.getHtml().match(/(\s|&nbsp;)$/g)){Z=null;break}Z=S.clone();Z.moveToPosition(Q,CKEDITOR.POSITION_BEFORE_END)}Q=Q.getLast(c)}Z&&S.moveToRange(Z)}}}}(),p=function(){function a(b){b=new CKEDITOR.dom.walker(b);b.guard=function(a,b){if(b)return!1;if(a.type==CKEDITOR.NODE_ELEMENT)return a.is(CKEDITOR.dtd.$tableContent)};b.evaluator=function(a){return a.type==CKEDITOR.NODE_ELEMENT};return b}
function b(a,c,d){c=a.getDocument().createElement(c);a.append(c,d);return c}function c(a){var b=a.count(),d;for(b;0<b--;)d=a.getItem(b),CKEDITOR.tools.trim(d.getHtml())||(d.appendBogus(),CKEDITOR.env.ie&&9>CKEDITOR.env.version&&d.getChildCount()&&d.getFirst().remove())}return function(d){var f=d.startContainer,g=f.getAscendant("table",1),e=!1;c(g.getElementsByTag("td"));c(g.getElementsByTag("th"));g=d.clone();g.setStart(f,0);g=a(g).lastBackward();g||(g=d.clone(),g.setEndAt(f,CKEDITOR.POSITION_BEFORE_END),
g=a(g).lastForward(),e=!0);g||(g=f);g.is("table")?(d.setStartAt(g,CKEDITOR.POSITION_BEFORE_START),d.collapse(!0),g.remove()):(g.is({tbody:1,thead:1,tfoot:1})&&(g=b(g,"tr",e)),g.is("tr")&&(g=b(g,g.getParent().is("thead")?"th":"td",e)),(f=g.getBogus())&&f.remove(),d.moveToPosition(g,e?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END))}}(),w={eol:{detect:function(a,b){var c=a.range,d=c.clone(),f=c.clone(),g=new CKEDITOR.dom.elementPath(c.startContainer,b),e=new CKEDITOR.dom.elementPath(c.endContainer,
b);d.collapse(1);f.collapse();g.block&&d.checkBoundaryOfElement(g.block,CKEDITOR.END)&&(c.setStartAfter(g.block),a.prependEolBr=1);e.block&&f.checkBoundaryOfElement(e.block,CKEDITOR.START)&&(c.setEndBefore(e.block),a.appendEolBr=1)},fix:function(a,b){var c=b.getDocument(),d;a.appendEolBr&&(d=this.createEolBr(c),a.fragment.append(d));!a.prependEolBr||d&&!d.getPrevious()||a.fragment.append(this.createEolBr(c),1)},createEolBr:function(a){return a.createElement("br",{attributes:{"data-cke-eol":1}})}},
bogus:{exclude:function(a){var b=a.range.getBoundaryNodes(),c=b.startNode,b=b.endNode;!b||!q(b)||c&&c.equals(b)||a.range.setEndBefore(b)}},tree:{rebuild:function(a,b){var c=a.range,d=c.getCommonAncestor(),f=new CKEDITOR.dom.elementPath(d,b),g=new CKEDITOR.dom.elementPath(c.startContainer,b),c=new CKEDITOR.dom.elementPath(c.endContainer,b),e;d.type==CKEDITOR.NODE_TEXT&&(d=d.getParent());if(f.blockLimit.is({tr:1,table:1})){var k=f.contains("table").getParent();e=function(a){return!a.equals(k)}}else if(f.block&&
f.block.is(CKEDITOR.dtd.$listItem)&&(g=g.contains(CKEDITOR.dtd.$list),c=c.contains(CKEDITOR.dtd.$list),!g.equals(c))){var h=f.contains(CKEDITOR.dtd.$list).getParent();e=function(a){return!a.equals(h)}}e||(e=function(a){return!a.equals(f.block)&&!a.equals(f.blockLimit)});this.rebuildFragment(a,b,d,e)},rebuildFragment:function(a,b,c,d){for(var f;c&&!c.equals(b)&&d(c);)f=c.clone(0,1),a.fragment.appendTo(f),a.fragment=f,c=c.getParent()}},cell:{shrink:function(a){a=a.range;var b=a.startContainer,c=a.endContainer,
d=a.startOffset,f=a.endOffset;b.type==CKEDITOR.NODE_ELEMENT&&b.equals(c)&&b.is("tr")&&++d==f&&a.shrink(CKEDITOR.SHRINK_TEXT)}}},x=function(){function a(b,c){var d=b.getParent();if(d.is(CKEDITOR.dtd.$inline))b[c?"insertBefore":"insertAfter"](d)}function b(c,d,f){a(d);a(f,1);for(var g;g=f.getNext();)g.insertAfter(d),d=g;u(c)&&c.remove()}function c(a,b){var d=new CKEDITOR.dom.range(a);d.setStartAfter(b.startNode);d.setEndBefore(b.endNode);return d}return{list:{detectMerge:function(a,b){var d=c(b,a.bookmark),
f=d.startPath(),g=d.endPath(),e=f.contains(CKEDITOR.dtd.$list),k=g.contains(CKEDITOR.dtd.$list);a.mergeList=e&&k&&e.getParent().equals(k.getParent())&&!e.equals(k);a.mergeListItems=f.block&&g.block&&f.block.is(CKEDITOR.dtd.$listItem)&&g.block.is(CKEDITOR.dtd.$listItem);if(a.mergeList||a.mergeListItems)d=d.clone(),d.setStartBefore(a.bookmark.startNode),d.setEndAfter(a.bookmark.endNode),a.mergeListBookmark=d.createBookmark()},merge:function(a,c){if(a.mergeListBookmark){var d=a.mergeListBookmark.startNode,
f=a.mergeListBookmark.endNode,g=new CKEDITOR.dom.elementPath(d,c),e=new CKEDITOR.dom.elementPath(f,c);if(a.mergeList){var k=g.contains(CKEDITOR.dtd.$list),h=e.contains(CKEDITOR.dtd.$list);k.equals(h)||(h.moveChildren(k),h.remove())}a.mergeListItems&&(g=g.contains(CKEDITOR.dtd.$listItem),e=e.contains(CKEDITOR.dtd.$listItem),g.equals(e)||b(e,d,f));d.remove();f.remove()}}},block:{detectMerge:function(a,b){if(!a.tableContentsRanges&&!a.mergeListBookmark){var c=new CKEDITOR.dom.range(b);c.setStartBefore(a.bookmark.startNode);
c.setEndAfter(a.bookmark.endNode);a.mergeBlockBookmark=c.createBookmark()}},merge:function(a,c){if(a.mergeBlockBookmark&&!a.purgeTableBookmark){var d=a.mergeBlockBookmark.startNode,f=a.mergeBlockBookmark.endNode,g=new CKEDITOR.dom.elementPath(d,c),e=new CKEDITOR.dom.elementPath(f,c),g=g.block,e=e.block;g&&e&&!g.equals(e)&&b(e,d,f);d.remove();f.remove()}}},table:function(){function a(c){var f=[],g,e=new CKEDITOR.dom.walker(c),k=c.startPath().contains(d),h=c.endPath().contains(d),m={};e.guard=function(a,
e){if(a.type==CKEDITOR.NODE_ELEMENT){var l="visited_"+(e?"out":"in");if(a.getCustomData(l))return;CKEDITOR.dom.element.setMarker(m,a,l,1)}if(e&&k&&a.equals(k))g=c.clone(),g.setEndAt(k,CKEDITOR.POSITION_BEFORE_END),f.push(g);else if(!e&&h&&a.equals(h))g=c.clone(),g.setStartAt(h,CKEDITOR.POSITION_AFTER_START),f.push(g);else{if(l=!e)l=a.type==CKEDITOR.NODE_ELEMENT&&a.is(d)&&(!k||b(a,k))&&(!h||b(a,h));l&&(g=c.clone(),g.selectNodeContents(a),f.push(g))}};e.lastForward();CKEDITOR.dom.element.clearAllMarkers(m);
return f}function b(a,c){var d=CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED,f=a.getPosition(c);return f===CKEDITOR.POSITION_IDENTICAL?!1:0===(f&d)}var d={td:1,th:1,caption:1};return{detectPurge:function(a){var b=a.range,c=b.clone();c.enlarge(CKEDITOR.ENLARGE_ELEMENT);var c=new CKEDITOR.dom.walker(c),f=0;c.evaluator=function(a){a.type==CKEDITOR.NODE_ELEMENT&&a.is(d)&&++f};c.checkForward();if(1<f){var c=b.startPath().contains("table"),g=b.endPath().contains("table");c&&g&&b.checkBoundaryOfElement(c,
CKEDITOR.START)&&b.checkBoundaryOfElement(g,CKEDITOR.END)&&(b=a.range.clone(),b.setStartBefore(c),b.setEndAfter(g),a.purgeTableBookmark=b.createBookmark())}},detectRanges:function(f,g){var e=c(g,f.bookmark),k=e.clone(),h,m,l=e.getCommonAncestor();l.is(CKEDITOR.dtd.$tableContent)&&!l.is(d)&&(l=l.getAscendant("table",!0));m=l;l=new CKEDITOR.dom.elementPath(e.startContainer,m);m=new CKEDITOR.dom.elementPath(e.endContainer,m);l=l.contains("table");m=m.contains("table");if(l||m)l&&m&&b(l,m)?(f.tableSurroundingRange=
k,k.setStartAt(l,CKEDITOR.POSITION_AFTER_END),k.setEndAt(m,CKEDITOR.POSITION_BEFORE_START),k=e.clone(),k.setEndAt(l,CKEDITOR.POSITION_AFTER_END),h=e.clone(),h.setStartAt(m,CKEDITOR.POSITION_BEFORE_START),h=a(k).concat(a(h))):l?m||(f.tableSurroundingRange=k,k.setStartAt(l,CKEDITOR.POSITION_AFTER_END),e.setEndAt(l,CKEDITOR.POSITION_AFTER_END)):(f.tableSurroundingRange=k,k.setEndAt(m,CKEDITOR.POSITION_BEFORE_START),e.setStartAt(m,CKEDITOR.POSITION_AFTER_START)),f.tableContentsRanges=h?h:a(e)},deleteRanges:function(a){for(var b;b=
a.tableContentsRanges.pop();)b.extractContents(),u(b.startContainer)&&b.startContainer.appendBogus();a.tableSurroundingRange&&a.tableSurroundingRange.extractContents()},purge:function(a){if(a.purgeTableBookmark){var b=a.doc,c=a.range.clone(),b=b.createElement("p");b.insertBefore(a.purgeTableBookmark.startNode);c.moveToBookmark(a.purgeTableBookmark);c.deleteContents();a.range.moveToPosition(b,CKEDITOR.POSITION_AFTER_START)}}}}(),detectExtractMerge:function(a){return!(a.range.startPath().contains(CKEDITOR.dtd.$listItem)&&
a.range.endPath().contains(CKEDITOR.dtd.$listItem))},fixUneditableRangePosition:function(a){a.startContainer.getDtd()["#"]||a.moveToClosestEditablePosition(null,!0)},autoParagraph:function(a,b){var c=b.startPath(),d;l(a,c.block,c.blockLimit)&&(d=f(a))&&(d=b.document.createElement(d),d.appendBogus(),b.insertNode(d),b.moveToPosition(d,CKEDITOR.POSITION_AFTER_START))}}}()}(),function(){function a(){var a=this._.fakeSelection,b;a&&(b=this.getSelection(1),b&&b.isHidden()||(a.reset(),a=0));if(!a&&(a=b||
this.getSelection(1),!a||a.getType()==CKEDITOR.SELECTION_NONE))return;this.fire("selectionCheck",a);b=this.elementPath();b.compare(this._.selectionPreviousPath)||(CKEDITOR.env.webkit&&(this._.previousActive=this.document.getActive()),this._.selectionPreviousPath=b,this.fire("selectionChange",{selection:a,path:b}))}function e(){v=!0;q||(b.call(this),q=CKEDITOR.tools.setTimeout(b,200,this))}function b(){q=null;v&&(CKEDITOR.tools.setTimeout(a,0,this),v=!1)}function c(a){return t(a)||a.type==CKEDITOR.NODE_ELEMENT&&
!a.is(CKEDITOR.dtd.$empty)?!0:!1}function d(a){function b(c,d){return c&&c.type!=CKEDITOR.NODE_TEXT?a.clone()["moveToElementEdit"+(d?"End":"Start")](c):!1}if(!(a.root instanceof CKEDITOR.editable))return!1;var d=a.startContainer,f=a.getPreviousNode(c,null,d),g=a.getNextNode(c,null,d);return b(f)||b(g,1)||!(f||g||d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()&&d.getBogus())?!0:!1}function m(a){return a.getCustomData("cke-fillingChar")}function l(a,b){var c=a&&a.removeCustomData("cke-fillingChar");
if(c){if(!1!==b){var d,g=a.getDocument().getSelection().getNative(),e=g&&"None"!=g.type&&g.getRangeAt(0);1<c.getLength()&&e&&e.intersectsNode(c.$)&&(d=h(g),e=g.focusNode==c.$&&0<g.focusOffset,g.anchorNode==c.$&&0<g.anchorOffset&&d[0].offset--,e&&d[1].offset--)}c.setText(f(c.getText()));d&&k(a.getDocument().$,d)}}function f(a){return a.replace(/\u200B( )?/g,function(a){return a[1]?" ":""})}function h(a){return[{node:a.anchorNode,offset:a.anchorOffset},{node:a.focusNode,offset:a.focusOffset}]}function k(a,
b){var c=a.getSelection(),d=a.createRange();d.setStart(b[0].node,b[0].offset);d.collapse(!0);c.removeAllRanges();c.addRange(d);c.extend(b[1].node,b[1].offset)}function g(a){var b=CKEDITOR.dom.element.createFromHtml('\x3cdiv data-cke-hidden-sel\x3d"1" data-cke-temp\x3d"1" style\x3d"'+(CKEDITOR.env.ie?"display:none":"position:fixed;top:0;left:-1000px")+'"\x3e\x26nbsp;\x3c/div\x3e',a.document);a.fire("lockSnapshot");a.editable().append(b);var c=a.getSelection(1),d=a.createRange(),f=c.root.on("selectionchange",
function(a){a.cancel()},null,null,0);d.setStartAt(b,CKEDITOR.POSITION_AFTER_START);d.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);c.selectRanges([d]);f.removeListener();a.fire("unlockSnapshot");a._.hiddenSelectionContainer=b}function n(a){var b={37:1,39:1,8:1,46:1};return function(c){var d=c.data.getKeystroke();if(b[d]){var f=a.getSelection().getRanges(),g=f[0];1==f.length&&g.collapsed&&(d=g[38>d?"getPreviousEditableNode":"getNextEditableNode"]())&&d.type==CKEDITOR.NODE_ELEMENT&&"false"==d.getAttribute("contenteditable")&&
(a.getSelection().fake(d),c.data.preventDefault(),c.cancel())}}}function u(a){for(var b=0;b<a.length;b++){var c=a[b];c.getCommonAncestor().isReadOnly()&&a.splice(b,1);if(!c.collapsed){if(c.startContainer.isReadOnly())for(var d=c.startContainer,f;d&&!((f=d.type==CKEDITOR.NODE_ELEMENT)&&d.is("body")||!d.isReadOnly());)f&&"false"==d.getAttribute("contentEditable")&&c.setStartAfter(d),d=d.getParent();d=c.startContainer;f=c.endContainer;var g=c.startOffset,e=c.endOffset,k=c.clone();d&&d.type==CKEDITOR.NODE_TEXT&&
(g>=d.getLength()?k.setStartAfter(d):k.setStartBefore(d));f&&f.type==CKEDITOR.NODE_TEXT&&(e?k.setEndAfter(f):k.setEndBefore(f));d=new CKEDITOR.dom.walker(k);d.evaluator=function(d){if(d.type==CKEDITOR.NODE_ELEMENT&&d.isReadOnly()){var f=c.clone();c.setEndBefore(d);c.collapsed&&a.splice(b--,1);d.getPosition(k.endContainer)&CKEDITOR.POSITION_CONTAINS||(f.setStartAfter(d),f.collapsed||a.splice(b+1,0,f));return!0}return!1};d.next()}}return a}var q,v,t=CKEDITOR.dom.walker.invisible(1),p=function(){function a(b){return function(a){var c=
a.editor.createRange();c.moveToClosestEditablePosition(a.selected,b)&&a.editor.getSelection().selectRanges([c]);return!1}}function b(a){return function(b){var c=b.editor,d=c.createRange(),f;(f=d.moveToClosestEditablePosition(b.selected,a))||(f=d.moveToClosestEditablePosition(b.selected,!a));f&&c.getSelection().selectRanges([d]);c.fire("saveSnapshot");b.selected.remove();f||(d.moveToElementEditablePosition(c.editable()),c.getSelection().selectRanges([d]));c.fire("saveSnapshot");return!1}}var c=a(),
d=a(1);return{37:c,38:c,39:d,40:d,8:b(),46:b(1)}}();CKEDITOR.on("instanceCreated",function(b){function c(){var a=d.getSelection();a&&a.removeAllRanges()}var d=b.editor;d.on("contentDom",function(){function b(){p=new CKEDITOR.dom.selection(d.getSelection());p.lock()}function c(){g.removeListener("mouseup",c);m.removeListener("mouseup",c);var a=CKEDITOR.document.$.selection,b=a.createRange();"None"!=a.type&&b.parentElement().ownerDocument==f.$&&b.select()}var f=d.document,g=CKEDITOR.document,k=d.editable(),
h=f.getBody(),m=f.getDocumentElement(),r=k.isInline(),D,p;CKEDITOR.env.gecko&&k.attachListener(k,"focus",function(a){a.removeListener();0!==D&&(a=d.getSelection().getNative())&&a.isCollapsed&&a.anchorNode==k.$&&(a=d.createRange(),a.moveToElementEditStart(k),a.select())},null,null,-2);k.attachListener(k,CKEDITOR.env.webkit?"DOMFocusIn":"focus",function(){D&&CKEDITOR.env.webkit&&(D=d._.previousActive&&d._.previousActive.equals(f.getActive()));d.unlockSelection(D);D=0},null,null,-1);k.attachListener(k,
"mousedown",function(){D=0});if(CKEDITOR.env.ie||r)w?k.attachListener(k,"beforedeactivate",b,null,null,-1):k.attachListener(d,"selectionCheck",b,null,null,-1),k.attachListener(k,CKEDITOR.env.webkit?"DOMFocusOut":"blur",function(){d.lockSelection(p);D=1},null,null,-1),k.attachListener(k,"mousedown",function(){D=0});if(CKEDITOR.env.ie&&!r){var v;k.attachListener(k,"mousedown",function(a){2==a.data.$.button&&((a=d.document.getSelection())&&a.getType()!=CKEDITOR.SELECTION_NONE||(v=d.window.getScrollPosition()))});
k.attachListener(k,"mouseup",function(a){2==a.data.$.button&&v&&(d.document.$.documentElement.scrollLeft=v.x,d.document.$.documentElement.scrollTop=v.y);v=null});if("BackCompat"!=f.$.compatMode){if(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)m.on("mousedown",function(a){function b(a){a=a.data.$;if(d){var c=h.$.createTextRange();try{c.moveToPoint(a.clientX,a.clientY)}catch(f){}d.setEndPoint(0>e.compareEndPoints("StartToStart",c)?"EndToEnd":"StartToStart",c);d.select()}}function c(){m.removeListener("mousemove",
b);g.removeListener("mouseup",c);m.removeListener("mouseup",c);d.select()}a=a.data;if(a.getTarget().is("html")&&a.$.y<m.$.clientHeight&&a.$.x<m.$.clientWidth){var d=h.$.createTextRange();try{d.moveToPoint(a.$.clientX,a.$.clientY)}catch(f){}var e=d.duplicate();m.on("mousemove",b);g.on("mouseup",c);m.on("mouseup",c)}});if(7<CKEDITOR.env.version&&11>CKEDITOR.env.version)m.on("mousedown",function(a){a.data.getTarget().is("html")&&(g.on("mouseup",c),m.on("mouseup",c))})}}k.attachListener(k,"selectionchange",
a,d);k.attachListener(k,"keyup",e,d);k.attachListener(k,CKEDITOR.env.webkit?"DOMFocusIn":"focus",function(){d.forceNextSelectionCheck();d.selectionChange(1)});if(r&&(CKEDITOR.env.webkit||CKEDITOR.env.gecko)){var t;k.attachListener(k,"mousedown",function(){t=1});k.attachListener(f.getDocumentElement(),"mouseup",function(){t&&e.call(d);t=0})}else k.attachListener(CKEDITOR.env.ie?k:f.getDocumentElement(),"mouseup",e,d);CKEDITOR.env.webkit&&k.attachListener(f,"keydown",function(a){switch(a.data.getKey()){case 13:case 33:case 34:case 35:case 36:case 37:case 39:case 8:case 45:case 46:l(k)}},
null,null,-1);k.attachListener(k,"keydown",n(d),null,null,-1)});d.on("setData",function(){d.unlockSelection();CKEDITOR.env.webkit&&c()});d.on("contentDomUnload",function(){d.unlockSelection()});if(CKEDITOR.env.ie9Compat)d.on("beforeDestroy",c,null,null,9);d.on("dataReady",function(){delete d._.fakeSelection;delete d._.hiddenSelectionContainer;d.selectionChange(1)});d.on("loadSnapshot",function(){var a=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT),b=d.editable().getLast(a);b&&b.hasAttribute("data-cke-hidden-sel")&&
(b.remove(),CKEDITOR.env.gecko&&(a=d.editable().getFirst(a))&&a.is("br")&&a.getAttribute("_moz_editor_bogus_node")&&a.remove())},null,null,100);d.on("key",function(a){if("wysiwyg"==d.mode){var b=d.getSelection();if(b.isFake){var c=p[a.data.keyCode];if(c)return c({editor:d,selected:b.getSelectedElement(),selection:b,keyEvent:a})}}})});CKEDITOR.on("instanceReady",function(a){function b(){var a=d.editable();if(a&&(a=m(a))){var c=d.document.$.getSelection();"None"==c.type||c.anchorNode!=a.$&&c.focusNode!=
a.$||(e=h(c));g=a.getText();a.setText(f(g))}}function c(){var a=d.editable();a&&(a=m(a))&&(a.setText(g),e&&(k(d.document.$,e),e=null))}var d=a.editor,g,e;CKEDITOR.env.webkit&&(d.on("selectionChange",function(){var a=d.editable(),b=m(a);b&&(b.getCustomData("ready")?l(a):b.setCustomData("ready",1))},null,null,-1),d.on("beforeSetMode",function(){l(d.editable())},null,null,-1),d.on("beforeUndoImage",b),d.on("afterUndoImage",c),d.on("beforeGetData",b,null,null,0),d.on("getData",c))});CKEDITOR.editor.prototype.selectionChange=
function(b){(b?a:e).call(this)};CKEDITOR.editor.prototype.getSelection=function(a){return!this._.savedSelection&&!this._.fakeSelection||a?(a=this.editable())&&"wysiwyg"==this.mode?new CKEDITOR.dom.selection(a):null:this._.savedSelection||this._.fakeSelection};CKEDITOR.editor.prototype.lockSelection=function(a){a=a||this.getSelection(1);return a.getType()!=CKEDITOR.SELECTION_NONE?(!a.isLocked&&a.lock(),this._.savedSelection=a,!0):!1};CKEDITOR.editor.prototype.unlockSelection=function(a){var b=this._.savedSelection;
return b?(b.unlock(a),delete this._.savedSelection,!0):!1};CKEDITOR.editor.prototype.forceNextSelectionCheck=function(){delete this._.selectionPreviousPath};CKEDITOR.dom.document.prototype.getSelection=function(){return new CKEDITOR.dom.selection(this)};CKEDITOR.dom.range.prototype.select=function(){var a=this.root instanceof CKEDITOR.editable?this.root.editor.getSelection():new CKEDITOR.dom.selection(this.root);a.selectRanges([this]);return a};CKEDITOR.SELECTION_NONE=1;CKEDITOR.SELECTION_TEXT=2;
CKEDITOR.SELECTION_ELEMENT=3;var w="function"!=typeof window.getSelection,x=1;CKEDITOR.dom.selection=function(a){if(a instanceof CKEDITOR.dom.selection){var b=a;a=a.root}var c=a instanceof CKEDITOR.dom.element;this.rev=b?b.rev:x++;this.document=a instanceof CKEDITOR.dom.document?a:a.getDocument();this.root=c?a:this.document.getBody();this.isLocked=0;this._={cache:{}};if(b)return CKEDITOR.tools.extend(this._.cache,b._.cache),this.isFake=b.isFake,this.isLocked=b.isLocked,this;a=this.getNative();var d,
f;if(a)if(a.getRangeAt)d=(f=a.rangeCount&&a.getRangeAt(0))&&new CKEDITOR.dom.node(f.commonAncestorContainer);else{try{f=a.createRange()}catch(g){}d=f&&CKEDITOR.dom.element.get(f.item&&f.item(0)||f.parentElement())}if(!d||d.type!=CKEDITOR.NODE_ELEMENT&&d.type!=CKEDITOR.NODE_TEXT||!this.root.equals(d)&&!this.root.contains(d))this._.cache.type=CKEDITOR.SELECTION_NONE,this._.cache.startElement=null,this._.cache.selectedElement=null,this._.cache.selectedText="",this._.cache.ranges=new CKEDITOR.dom.rangeList;
return this};var B={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};CKEDITOR.dom.selection.prototype={getNative:function(){return void 0!==this._.cache.nativeSel?this._.cache.nativeSel:this._.cache.nativeSel=w?this.document.$.selection:this.document.getWindow().$.getSelection()},getType:w?function(){var a=this._.cache;if(a.type)return a.type;var b=CKEDITOR.SELECTION_NONE;try{var c=this.getNative(),d=c.type;
"Text"==d&&(b=CKEDITOR.SELECTION_TEXT);"Control"==d&&(b=CKEDITOR.SELECTION_ELEMENT);c.createRange().parentElement()&&(b=CKEDITOR.SELECTION_TEXT)}catch(f){}return a.type=b}:function(){var a=this._.cache;if(a.type)return a.type;var b=CKEDITOR.SELECTION_TEXT,c=this.getNative();if(!c||!c.rangeCount)b=CKEDITOR.SELECTION_NONE;else if(1==c.rangeCount){var c=c.getRangeAt(0),d=c.startContainer;d==c.endContainer&&1==d.nodeType&&1==c.endOffset-c.startOffset&&B[d.childNodes[c.startOffset].nodeName.toLowerCase()]&&
(b=CKEDITOR.SELECTION_ELEMENT)}return a.type=b},getRanges:function(){var a=w?function(){function a(b){return(new CKEDITOR.dom.node(b)).getIndex()}var b=function(b,c){b=b.duplicate();b.collapse(c);var d=b.parentElement();if(!d.hasChildNodes())return{container:d,offset:0};for(var f=d.children,g,e,k=b.duplicate(),h=0,m=f.length-1,l=-1,n,p;h<=m;)if(l=Math.floor((h+m)/2),g=f[l],k.moveToElementText(g),n=k.compareEndPoints("StartToStart",b),0<n)m=l-1;else if(0>n)h=l+1;else return{container:d,offset:a(g)};
if(-1==l||l==f.length-1&&0>n){k.moveToElementText(d);k.setEndPoint("StartToStart",b);k=k.text.replace(/(\r\n|\r)/g,"\n").length;f=d.childNodes;if(!k)return g=f[f.length-1],g.nodeType!=CKEDITOR.NODE_TEXT?{container:d,offset:f.length}:{container:g,offset:g.nodeValue.length};for(d=f.length;0<k&&0<d;)e=f[--d],e.nodeType==CKEDITOR.NODE_TEXT&&(p=e,k-=e.nodeValue.length);return{container:p,offset:-k}}k.collapse(0<n?!0:!1);k.setEndPoint(0<n?"StartToStart":"EndToStart",b);k=k.text.replace(/(\r\n|\r)/g,"\n").length;
if(!k)return{container:d,offset:a(g)+(0<n?0:1)};for(;0<k;)try{e=g[0<n?"previousSibling":"nextSibling"],e.nodeType==CKEDITOR.NODE_TEXT&&(k-=e.nodeValue.length,p=e),g=e}catch(w){return{container:d,offset:a(g)}}return{container:p,offset:0<n?-k:p.nodeValue.length+k}};return function(){var a=this.getNative(),c=a&&a.createRange(),d=this.getType();if(!a)return[];if(d==CKEDITOR.SELECTION_TEXT)return a=new CKEDITOR.dom.range(this.root),d=b(c,!0),a.setStart(new CKEDITOR.dom.node(d.container),d.offset),d=b(c),
a.setEnd(new CKEDITOR.dom.node(d.container),d.offset),a.endContainer.getPosition(a.startContainer)&CKEDITOR.POSITION_PRECEDING&&a.endOffset<=a.startContainer.getIndex()&&a.collapse(),[a];if(d==CKEDITOR.SELECTION_ELEMENT){for(var d=[],f=0;f<c.length;f++){for(var g=c.item(f),e=g.parentNode,k=0,a=new CKEDITOR.dom.range(this.root);k<e.childNodes.length&&e.childNodes[k]!=g;k++);a.setStart(new CKEDITOR.dom.node(e),k);a.setEnd(new CKEDITOR.dom.node(e),k+1);d.push(a)}return d}return[]}}():function(){var a=
[],b,c=this.getNative();if(!c)return a;for(var d=0;d<c.rangeCount;d++){var f=c.getRangeAt(d);b=new CKEDITOR.dom.range(this.root);b.setStart(new CKEDITOR.dom.node(f.startContainer),f.startOffset);b.setEnd(new CKEDITOR.dom.node(f.endContainer),f.endOffset);a.push(b)}return a};return function(b){var c=this._.cache,d=c.ranges;d||(c.ranges=d=new CKEDITOR.dom.rangeList(a.call(this)));return b?u(new CKEDITOR.dom.rangeList(d.slice())):d}}(),getStartElement:function(){var a=this._.cache;if(void 0!==a.startElement)return a.startElement;
var b;switch(this.getType()){case CKEDITOR.SELECTION_ELEMENT:return this.getSelectedElement();case CKEDITOR.SELECTION_TEXT:var c=this.getRanges()[0];if(c){if(c.collapsed)b=c.startContainer,b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent());else{for(c.optimize();b=c.startContainer,c.startOffset==(b.getChildCount?b.getChildCount():b.getLength())&&!b.isBlockBoundary();)c.setStartAfter(b);b=c.startContainer;if(b.type!=CKEDITOR.NODE_ELEMENT)return b.getParent();if((b=b.getChild(c.startOffset))&&b.type==
CKEDITOR.NODE_ELEMENT)for(c=b.getFirst();c&&c.type==CKEDITOR.NODE_ELEMENT;)b=c,c=c.getFirst();else b=c.startContainer}b=b.$}}return a.startElement=b?new CKEDITOR.dom.element(b):null},getSelectedElement:function(){var a=this._.cache;if(void 0!==a.selectedElement)return a.selectedElement;var b=this,c=CKEDITOR.tools.tryThese(function(){return b.getNative().createRange().item(0)},function(){for(var a=b.getRanges()[0].clone(),c,d,f=2;f&&!((c=a.getEnclosedNode())&&c.type==CKEDITOR.NODE_ELEMENT&&B[c.getName()]&&
(d=c));f--)a.shrink(CKEDITOR.SHRINK_ELEMENT);return d&&d.$});return a.selectedElement=c?new CKEDITOR.dom.element(c):null},getSelectedText:function(){var a=this._.cache;if(void 0!==a.selectedText)return a.selectedText;var b=this.getNative(),b=w?"Control"==b.type?"":b.createRange().text:b.toString();return a.selectedText=b},lock:function(){this.getRanges();this.getStartElement();this.getSelectedElement();this.getSelectedText();this._.cache.nativeSel=null;this.isLocked=1},unlock:function(a){if(this.isLocked){if(a)var b=
this.getSelectedElement(),c=!b&&this.getRanges(),d=this.isFake;this.isLocked=0;this.reset();a&&(a=b||c[0]&&c[0].getCommonAncestor())&&a.getAscendant("body",1)&&(d?this.fake(b):b?this.selectElement(b):this.selectRanges(c))}},reset:function(){this._.cache={};this.isFake=0;var a=this.root.editor;if(a&&a._.fakeSelection)if(this.rev==a._.fakeSelection.rev){delete a._.fakeSelection;var b=a._.hiddenSelectionContainer;if(b){var c=a.checkDirty();a.fire("lockSnapshot");b.remove();a.fire("unlockSnapshot");!c&&
a.resetDirty()}delete a._.hiddenSelectionContainer}else CKEDITOR.warn("selection-fake-reset");this.rev=x++},selectElement:function(a){var b=new CKEDITOR.dom.range(this.root);b.setStartBefore(a);b.setEndAfter(a);this.selectRanges([b])},selectRanges:function(a){var b=this.root.editor,b=b&&b._.hiddenSelectionContainer;this.reset();if(b)for(var b=this.root,c,f=0;f<a.length;++f)c=a[f],c.endContainer.equals(b)&&(c.endOffset=Math.min(c.endOffset,b.getChildCount()));if(a.length)if(this.isLocked){var g=CKEDITOR.document.getActive();
this.unlock();this.selectRanges(a);this.lock();g&&!g.equals(this.root)&&g.focus()}else{var e;a:{var k,h;if(1==a.length&&!(h=a[0]).collapsed&&(e=h.getEnclosedNode())&&e.type==CKEDITOR.NODE_ELEMENT&&(h=h.clone(),h.shrink(CKEDITOR.SHRINK_ELEMENT,!0),(k=h.getEnclosedNode())&&k.type==CKEDITOR.NODE_ELEMENT&&(e=k),"false"==e.getAttribute("contenteditable")))break a;e=void 0}if(e)this.fake(e);else{if(w){h=CKEDITOR.dom.walker.whitespaces(!0);k=/\ufeff|\u00a0/;b={table:1,tbody:1,tr:1};1<a.length&&(e=a[a.length-
1],a[0].setEnd(e.endContainer,e.endOffset));e=a[0];a=e.collapsed;var m,n,p;if((c=e.getEnclosedNode())&&c.type==CKEDITOR.NODE_ELEMENT&&c.getName()in B&&(!c.is("a")||!c.getText()))try{p=c.$.createControlRange();p.addElement(c.$);p.select();return}catch(D){}if(e.startContainer.type==CKEDITOR.NODE_ELEMENT&&e.startContainer.getName()in b||e.endContainer.type==CKEDITOR.NODE_ELEMENT&&e.endContainer.getName()in b)e.shrink(CKEDITOR.NODE_ELEMENT,!0),a=e.collapsed;p=e.createBookmark();b=p.startNode;a||(g=p.endNode);
p=e.document.$.body.createTextRange();p.moveToElementText(b.$);p.moveStart("character",1);g?(k=e.document.$.body.createTextRange(),k.moveToElementText(g.$),p.setEndPoint("EndToEnd",k),p.moveEnd("character",-1)):(m=b.getNext(h),n=b.hasAscendant("pre"),m=!(m&&m.getText&&m.getText().match(k))&&(n||!b.hasPrevious()||b.getPrevious().is&&b.getPrevious().is("br")),n=e.document.createElement("span"),n.setHtml("\x26#65279;"),n.insertBefore(b),m&&e.document.createText("﻿").insertBefore(b));e.setStartBefore(b);
b.remove();a?(m?(p.moveStart("character",-1),p.select(),e.document.$.selection.clear()):p.select(),e.moveToPosition(n,CKEDITOR.POSITION_BEFORE_START),n.remove()):(e.setEndBefore(g),g.remove(),p.select())}else{g=this.getNative();if(!g)return;this.removeAllRanges();for(p=0;p<a.length;p++){if(p<a.length-1&&(m=a[p],n=a[p+1],k=m.clone(),k.setStart(m.endContainer,m.endOffset),k.setEnd(n.startContainer,n.startOffset),!k.collapsed&&(k.shrink(CKEDITOR.NODE_ELEMENT,!0),e=k.getCommonAncestor(),k=k.getEnclosedNode(),
e.isReadOnly()||k&&k.isReadOnly()))){n.setStart(m.startContainer,m.startOffset);a.splice(p--,1);continue}e=a[p];n=this.document.$.createRange();e.collapsed&&CKEDITOR.env.webkit&&d(e)&&(m=this.root,l(m,!1),k=m.getDocument().createText("​"),m.setCustomData("cke-fillingChar",k),e.insertNode(k),(m=k.getNext())&&!k.getPrevious()&&m.type==CKEDITOR.NODE_ELEMENT&&"br"==m.getName()?(l(this.root),e.moveToPosition(m,CKEDITOR.POSITION_BEFORE_START)):e.moveToPosition(k,CKEDITOR.POSITION_AFTER_END));n.setStart(e.startContainer.$,
e.startOffset);try{n.setEnd(e.endContainer.$,e.endOffset)}catch(v){if(0<=v.toString().indexOf("NS_ERROR_ILLEGAL_VALUE"))e.collapse(1),n.setEnd(e.endContainer.$,e.endOffset);else throw v;}g.addRange(n)}}this.reset();this.root.fire("selectionchange")}}},fake:function(a){var b=this.root.editor;this.reset();g(b);var c=this._.cache,d=new CKEDITOR.dom.range(this.root);d.setStartBefore(a);d.setEndAfter(a);c.ranges=new CKEDITOR.dom.rangeList(d);c.selectedElement=c.startElement=a;c.type=CKEDITOR.SELECTION_ELEMENT;
c.selectedText=c.nativeSel=null;this.isFake=1;this.rev=x++;b._.fakeSelection=this;this.root.fire("selectionchange")},isHidden:function(){var a=this.getCommonAncestor();a&&a.type==CKEDITOR.NODE_TEXT&&(a=a.getParent());return!(!a||!a.data("cke-hidden-sel"))},createBookmarks:function(a){a=this.getRanges().createBookmarks(a);this.isFake&&(a.isFake=1);return a},createBookmarks2:function(a){a=this.getRanges().createBookmarks2(a);this.isFake&&(a.isFake=1);return a},selectBookmarks:function(a){for(var b=
[],c,d=0;d<a.length;d++){var f=new CKEDITOR.dom.range(this.root);f.moveToBookmark(a[d]);b.push(f)}a.isFake&&(c=b[0].getEnclosedNode(),c&&c.type==CKEDITOR.NODE_ELEMENT||(CKEDITOR.warn("selection-not-fake"),a.isFake=0));a.isFake?this.fake(c):this.selectRanges(b);return this},getCommonAncestor:function(){var a=this.getRanges();return a.length?a[0].startContainer.getCommonAncestor(a[a.length-1].endContainer):null},scrollIntoView:function(){this.type!=CKEDITOR.SELECTION_NONE&&this.getRanges()[0].scrollIntoView()},
removeAllRanges:function(){if(this.getType()!=CKEDITOR.SELECTION_NONE){var a=this.getNative();try{a&&a[w?"empty":"removeAllRanges"]()}catch(b){}this.reset()}}}}(),"use strict",CKEDITOR.STYLE_BLOCK=1,CKEDITOR.STYLE_INLINE=2,CKEDITOR.STYLE_OBJECT=3,function(){function a(a,b){for(var c,d;(a=a.getParent())&&!a.equals(b);)if(a.getAttribute("data-nostyle"))c=a;else if(!d){var f=a.getAttribute("contentEditable");"false"==f?c=a:"true"==f&&(d=1)}return c}function e(a,b,c,d){return(a.getPosition(b)|d)==d&&
(!c.childRule||c.childRule(a))}function b(c){var f=c.document;if(c.collapsed)f=w(this,f),c.insertNode(f),c.moveToPosition(f,CKEDITOR.POSITION_BEFORE_END);else{var g=this.element,k=this._.definition,h,m=k.ignoreReadonly,l=m||k.includeReadonly;null==l&&(l=c.root.getCustomData("cke_includeReadonly"));var n=CKEDITOR.dtd[g];n||(h=!0,n=CKEDITOR.dtd.span);c.enlarge(CKEDITOR.ENLARGE_INLINE,1);c.trim();var p=c.createBookmark(),t=p.startNode,q=p.endNode,x=t,r;if(!m){var u=c.getCommonAncestor(),m=a(t,u),u=a(q,
u);m&&(x=m.getNextSourceNode(!0));u&&(q=u)}for(x.getPosition(q)==CKEDITOR.POSITION_FOLLOWING&&(x=0);x;){m=!1;if(x.equals(q))x=null,m=!0;else{var B=x.type==CKEDITOR.NODE_ELEMENT?x.getName():null,u=B&&"false"==x.getAttribute("contentEditable"),z=B&&x.getAttribute("data-nostyle");if(B&&x.data("cke-bookmark")){x=x.getNextSourceNode(!0);continue}if(u&&l&&CKEDITOR.dtd.$block[B])for(var E=x,y=d(E),A=void 0,C=y.length,G=0,E=C&&new CKEDITOR.dom.range(E.getDocument());G<C;++G){var A=y[G],ga=CKEDITOR.filter.instances[A.data("cke-filter")];
if(ga?ga.check(this):1)E.selectNodeContents(A),b.call(this,E)}y=B?!n[B]||z?0:u&&!l?0:e(x,q,k,H):1;if(y)if(A=x.getParent(),y=k,C=g,G=h,!A||!(A.getDtd()||CKEDITOR.dtd.span)[C]&&!G||y.parentRule&&!y.parentRule(A))m=!0;else{if(r||B&&CKEDITOR.dtd.$removeEmpty[B]&&(x.getPosition(q)|H)!=H||(r=c.clone(),r.setStartBefore(x)),B=x.type,B==CKEDITOR.NODE_TEXT||u||B==CKEDITOR.NODE_ELEMENT&&!x.getChildCount()){for(var B=x,fa;(m=!B.getNext(F))&&(fa=B.getParent(),n[fa.getName()])&&e(fa,t,k,K);)B=fa;r.setEndAfter(B)}}else m=
!0;x=x.getNextSourceNode(z||u)}if(m&&r&&!r.collapsed){for(var m=w(this,f),u=m.hasAttributes(),z=r.getCommonAncestor(),B={},y={},A={},C={},I,Z,ha;m&&z;){if(z.getName()==g){for(I in k.attributes)!C[I]&&(ha=z.getAttribute(Z))&&(m.getAttribute(I)==ha?y[I]=1:C[I]=1);for(Z in k.styles)!A[Z]&&(ha=z.getStyle(Z))&&(m.getStyle(Z)==ha?B[Z]=1:A[Z]=1)}z=z.getParent()}for(I in y)m.removeAttribute(I);for(Z in B)m.removeStyle(Z);u&&!m.hasAttributes()&&(m=null);m?(r.extractContents().appendTo(m),r.insertNode(m),v.call(this,
m),m.mergeSiblings(),CKEDITOR.env.ie||m.$.normalize()):(m=new CKEDITOR.dom.element("span"),r.extractContents().appendTo(m),r.insertNode(m),v.call(this,m),m.remove(!0));r=null}}c.moveToBookmark(p);c.shrink(CKEDITOR.SHRINK_TEXT);c.shrink(CKEDITOR.NODE_ELEMENT,!0)}}function c(a){function b(){for(var a=new CKEDITOR.dom.elementPath(d.getParent()),c=new CKEDITOR.dom.elementPath(m.getParent()),f=null,g=null,e=0;e<a.elements.length;e++){var k=a.elements[e];if(k==a.block||k==a.blockLimit)break;l.checkElementRemovable(k,
!0)&&(f=k)}for(e=0;e<c.elements.length;e++){k=c.elements[e];if(k==c.block||k==c.blockLimit)break;l.checkElementRemovable(k,!0)&&(g=k)}g&&m.breakParent(g);f&&d.breakParent(f)}a.enlarge(CKEDITOR.ENLARGE_INLINE,1);var c=a.createBookmark(),d=c.startNode;if(a.collapsed){for(var f=new CKEDITOR.dom.elementPath(d.getParent(),a.root),g,e=0,k;e<f.elements.length&&(k=f.elements[e])&&k!=f.block&&k!=f.blockLimit;e++)if(this.checkElementRemovable(k)){var h;a.collapsed&&(a.checkBoundaryOfElement(k,CKEDITOR.END)||
(h=a.checkBoundaryOfElement(k,CKEDITOR.START)))?(g=k,g.match=h?"start":"end"):(k.mergeSiblings(),k.is(this.element)?q.call(this,k):t(k,r(this)[k.getName()]))}if(g){k=d;for(e=0;;e++){h=f.elements[e];if(h.equals(g))break;else if(h.match)continue;else h=h.clone();h.append(k);k=h}k["start"==g.match?"insertBefore":"insertAfter"](g)}}else{var m=c.endNode,l=this;b();for(f=d;!f.equals(m);)g=f.getNextSourceNode(),f.type==CKEDITOR.NODE_ELEMENT&&this.checkElementRemovable(f)&&(f.getName()==this.element?q.call(this,
f):t(f,r(this)[f.getName()]),g.type==CKEDITOR.NODE_ELEMENT&&g.contains(d)&&(b(),g=d.getNext())),f=g}a.moveToBookmark(c);a.shrink(CKEDITOR.NODE_ELEMENT,!0)}function d(a){var b=[];a.forEach(function(a){if("true"==a.getAttribute("contenteditable"))return b.push(a),!1},CKEDITOR.NODE_ELEMENT,!0);return b}function m(a){var b=a.getEnclosedNode()||a.getCommonAncestor(!1,!0);(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1))&&!a.isReadOnly()&&x(a,this)}function l(a){var b=a.getCommonAncestor(!0,
!0);if(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1)){var b=this._.definition,c=b.attributes;if(c)for(var d in c)a.removeAttribute(d,c[d]);if(b.styles)for(var f in b.styles)b.styles.hasOwnProperty(f)&&a.removeStyle(f)}}function f(a){var b=a.createBookmark(!0),c=a.createIterator();c.enforceRealBlocks=!0;this._.enterMode&&(c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR);for(var d,f=a.document,g;d=c.getNextParagraph();)!d.isReadOnly()&&(c.activeFilter?c.activeFilter.check(this):
1)&&(g=w(this,f,d),k(d,g));a.moveToBookmark(b)}function h(a){var b=a.createBookmark(1),c=a.createIterator();c.enforceRealBlocks=!0;c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR;for(var d,f;d=c.getNextParagraph();)this.checkElementRemovable(d)&&(d.is("pre")?((f=this._.enterMode==CKEDITOR.ENTER_BR?null:a.document.createElement(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))&&d.copyAttributes(f),k(d,f)):q.call(this,d));a.moveToBookmark(b)}function k(a,b){var c=!b;c&&(b=a.getDocument().createElement("div"),
a.copyAttributes(b));var d=b&&b.is("pre"),f=a.is("pre"),e=!d&&f;if(d&&!f){f=b;(e=a.getBogus())&&e.remove();e=a.getHtml();e=n(e,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,"");e=e.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1");e=e.replace(/([ \t\n\r]+|&nbsp;)/g," ");e=e.replace(/<br\b[^>]*>/gi,"\n");if(CKEDITOR.env.ie){var k=a.getDocument().createElement("div");k.append(f);f.$.outerHTML="\x3cpre\x3e"+e+"\x3c/pre\x3e";f.copyAttributes(k.getFirst());f=k.getFirst().remove()}else f.setHtml(e);b=f}else e?b=u(c?
[a.getHtml()]:g(a),b):a.moveChildren(b);b.replace(a);if(d){var c=b,h;(h=c.getPrevious(I))&&h.type==CKEDITOR.NODE_ELEMENT&&h.is("pre")&&(d=n(h.getHtml(),/\n$/,"")+"\n\n"+n(c.getHtml(),/^\n/,""),CKEDITOR.env.ie?c.$.outerHTML="\x3cpre\x3e"+d+"\x3c/pre\x3e":c.setHtml(d),h.remove())}else c&&p(b)}function g(a){var b=[];n(a.getOuterHtml(),/(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi,function(a,b,c){return b+"\x3c/pre\x3e"+c+"\x3cpre\x3e"}).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(a,
c){b.push(c)});return b}function n(a,b,c){var d="",f="";a=a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi,function(a,b,c){b&&(d=b);c&&(f=c);return""});return d+a.replace(b,c)+f}function u(a,b){var c;1<a.length&&(c=new CKEDITOR.dom.documentFragment(b.getDocument()));for(var d=0;d<a.length;d++){var f=a[d],f=f.replace(/(\r\n|\r)/g,"\n"),f=n(f,/^[ \t]*\n/,""),f=n(f,/\n$/,""),f=n(f,/^[ \t]+|[ \t]+$/g,function(a,b){return 1==a.length?"\x26nbsp;":b?" "+CKEDITOR.tools.repeat("\x26nbsp;",
a.length-1):CKEDITOR.tools.repeat("\x26nbsp;",a.length-1)+" "}),f=f.replace(/\n/g,"\x3cbr\x3e"),f=f.replace(/[ \t]{2,}/g,function(a){return CKEDITOR.tools.repeat("\x26nbsp;",a.length-1)+" "});if(c){var g=b.clone();g.setHtml(f);c.append(g)}else b.setHtml(f)}return c||b}function q(a,b){var c=this._.definition,d=c.attributes,c=c.styles,f=r(this)[a.getName()],g=CKEDITOR.tools.isEmpty(d)&&CKEDITOR.tools.isEmpty(c),e;for(e in d)if("class"!=e&&!this._.definition.fullMatch||a.getAttribute(e)==z(e,d[e]))b&&
"data-"==e.slice(0,5)||(g=a.hasAttribute(e),a.removeAttribute(e));for(var k in c)this._.definition.fullMatch&&a.getStyle(k)!=z(k,c[k],!0)||(g=g||!!a.getStyle(k),a.removeStyle(k));t(a,f,y[a.getName()]);g&&(this._.definition.alwaysRemoveElement?p(a,1):!CKEDITOR.dtd.$block[a.getName()]||this._.enterMode==CKEDITOR.ENTER_BR&&!a.hasAttributes()?p(a):a.renameNode(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))}function v(a){for(var b=r(this),c=a.getElementsByTag(this.element),d,f=c.count();0<=--f;)d=c.getItem(f),
d.isReadOnly()||q.call(this,d,!0);for(var g in b)if(g!=this.element)for(c=a.getElementsByTag(g),f=c.count()-1;0<=f;f--)d=c.getItem(f),d.isReadOnly()||t(d,b[g])}function t(a,b,c){if(b=b&&b.attributes)for(var d=0;d<b.length;d++){var f=b[d][0],g;if(g=a.getAttribute(f)){var e=b[d][1];(null===e||e.test&&e.test(g)||"string"==typeof e&&g==e)&&a.removeAttribute(f)}}c||p(a)}function p(a,b){if(!a.hasAttributes()||b)if(CKEDITOR.dtd.$block[a.getName()]){var c=a.getPrevious(I),d=a.getNext(I);!c||c.type!=CKEDITOR.NODE_TEXT&&
c.isBlockBoundary({br:1})||a.append("br",1);!d||d.type!=CKEDITOR.NODE_TEXT&&d.isBlockBoundary({br:1})||a.append("br");a.remove(!0)}else c=a.getFirst(),d=a.getLast(),a.remove(!0),c&&(c.type==CKEDITOR.NODE_ELEMENT&&c.mergeSiblings(),d&&!c.equals(d)&&d.type==CKEDITOR.NODE_ELEMENT&&d.mergeSiblings())}function w(a,b,c){var d;d=a.element;"*"==d&&(d="span");d=new CKEDITOR.dom.element(d,b);c&&c.copyAttributes(d);d=x(d,a);b.getCustomData("doc_processing_style")&&d.hasAttribute("id")?d.removeAttribute("id"):
b.setCustomData("doc_processing_style",1);return d}function x(a,b){var c=b._.definition,d=c.attributes,c=CKEDITOR.style.getStyleText(c);if(d)for(var f in d)a.setAttribute(f,d[f]);c&&a.setAttribute("style",c);return a}function B(a,b){for(var c in a)a[c]=a[c].replace(G,function(a,c){return b[c]})}function r(a){if(a._.overrides)return a._.overrides;var b=a._.overrides={},c=a._.definition.overrides;if(c){CKEDITOR.tools.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++){var f=c[d],g,e;"string"==typeof f?
g=f.toLowerCase():(g=f.element?f.element.toLowerCase():a.element,e=f.attributes);f=b[g]||(b[g]={});if(e){var f=f.attributes=f.attributes||[],k;for(k in e)f.push([k.toLowerCase(),e[k]])}}}return b}function z(a,b,c){var d=new CKEDITOR.dom.element("span");d[c?"setStyle":"setAttribute"](a,b);return d[c?"getStyle":"getAttribute"](a)}function E(a,b,c){var d=a.document,f=a.getRanges();b=b?this.removeFromRange:this.applyToRange;for(var g,e=f.createIterator();g=e.getNextRange();)b.call(this,g,c);a.selectRanges(f);
d.removeCustomData("doc_processing_style")}var y={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,details:1,datagrid:1,datalist:1},A={a:1,blockquote:1,embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1,audio:1,video:1},C=/\s*(?:;\s*|$)/,G=/#\((.+?)\)/g,F=CKEDITOR.dom.walker.bookmark(0,1),I=CKEDITOR.dom.walker.whitespaces(1);
CKEDITOR.style=function(a,b){if("string"==typeof a.type)return new CKEDITOR.style.customHandlers[a.type](a);var c=a.attributes;c&&c.style&&(a.styles=CKEDITOR.tools.extend({},a.styles,CKEDITOR.tools.parseCssText(c.style)),delete c.style);b&&(a=CKEDITOR.tools.clone(a),B(a.attributes,b),B(a.styles,b));c=this.element=a.element?"string"==typeof a.element?a.element.toLowerCase():a.element:"*";this.type=a.type||(y[c]?CKEDITOR.STYLE_BLOCK:A[c]?CKEDITOR.STYLE_OBJECT:CKEDITOR.STYLE_INLINE);"object"==typeof this.element&&
(this.type=CKEDITOR.STYLE_OBJECT);this._={definition:a}};CKEDITOR.style.prototype={apply:function(a){if(a instanceof CKEDITOR.dom.document)return E.call(this,a.getSelection());if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode;b||(this._.enterMode=a.activeEnterMode);E.call(this,a.getSelection(),0,a);this._.enterMode=b}},remove:function(a){if(a instanceof CKEDITOR.dom.document)return E.call(this,a.getSelection(),1);if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode;
b||(this._.enterMode=a.activeEnterMode);E.call(this,a.getSelection(),1,a);this._.enterMode=b}},applyToRange:function(a){this.applyToRange=this.type==CKEDITOR.STYLE_INLINE?b:this.type==CKEDITOR.STYLE_BLOCK?f:this.type==CKEDITOR.STYLE_OBJECT?m:null;return this.applyToRange(a)},removeFromRange:function(a){this.removeFromRange=this.type==CKEDITOR.STYLE_INLINE?c:this.type==CKEDITOR.STYLE_BLOCK?h:this.type==CKEDITOR.STYLE_OBJECT?l:null;return this.removeFromRange(a)},applyToObject:function(a){x(a,this)},
checkActive:function(a,b){switch(this.type){case CKEDITOR.STYLE_BLOCK:return this.checkElementRemovable(a.block||a.blockLimit,!0,b);case CKEDITOR.STYLE_OBJECT:case CKEDITOR.STYLE_INLINE:for(var c=a.elements,d=0,f;d<c.length;d++)if(f=c[d],this.type!=CKEDITOR.STYLE_INLINE||f!=a.block&&f!=a.blockLimit){if(this.type==CKEDITOR.STYLE_OBJECT){var g=f.getName();if(!("string"==typeof this.element?g==this.element:g in this.element))continue}if(this.checkElementRemovable(f,!0,b))return!0}}return!1},checkApplicable:function(a,
b,c){b&&b instanceof CKEDITOR.filter&&(c=b);if(c&&!c.check(this))return!1;switch(this.type){case CKEDITOR.STYLE_OBJECT:return!!a.contains(this.element);case CKEDITOR.STYLE_BLOCK:return!!a.blockLimit.getDtd()[this.element]}return!0},checkElementMatch:function(a,b){var c=this._.definition;if(!a||!c.ignoreReadonly&&a.isReadOnly())return!1;var d=a.getName();if("string"==typeof this.element?d==this.element:d in this.element){if(!b&&!a.hasAttributes())return!0;if(d=c._AC)c=d;else{var d={},f=0,g=c.attributes;
if(g)for(var e in g)f++,d[e]=g[e];if(e=CKEDITOR.style.getStyleText(c))d.style||f++,d.style=e;d._length=f;c=c._AC=d}if(c._length){for(var k in c)if("_length"!=k){f=a.getAttribute(k)||"";if("style"==k)a:{d=c[k];"string"==typeof d&&(d=CKEDITOR.tools.parseCssText(d));"string"==typeof f&&(f=CKEDITOR.tools.parseCssText(f,!0));e=void 0;for(e in d)if(!(e in f)||f[e]!=d[e]&&"inherit"!=d[e]&&"inherit"!=f[e]){d=!1;break a}d=!0}else d=c[k]==f;if(d){if(!b)return!0}else if(b)return!1}if(b)return!0}else return!0}return!1},
checkElementRemovable:function(a,b,c){if(this.checkElementMatch(a,b,c))return!0;if(b=r(this)[a.getName()]){var d;if(!(b=b.attributes))return!0;for(c=0;c<b.length;c++)if(d=b[c][0],d=a.getAttribute(d)){var f=b[c][1];if(null===f)return!0;if("string"==typeof f){if(d==f)return!0}else if(f.test(d))return!0}}return!1},buildPreview:function(a){var b=this._.definition,c=[],d=b.element;"bdo"==d&&(d="span");var c=["\x3c",d],f=b.attributes;if(f)for(var g in f)c.push(" ",g,'\x3d"',f[g],'"');(f=CKEDITOR.style.getStyleText(b))&&
c.push(' style\x3d"',f,'"');c.push("\x3e",a||b.name,"\x3c/",d,"\x3e");return c.join("")},getDefinition:function(){return this._.definition}};CKEDITOR.style.getStyleText=function(a){var b=a._ST;if(b)return b;var b=a.styles,c=a.attributes&&a.attributes.style||"",d="";c.length&&(c=c.replace(C,";"));for(var f in b){var g=b[f],e=(f+":"+g).replace(C,";");"inherit"==g?d+=e:c+=e}c.length&&(c=CKEDITOR.tools.normalizeCssText(c,!0));return a._ST=c+d};CKEDITOR.style.customHandlers={};CKEDITOR.style.addCustomHandler=
function(a){var b=function(a){this._={definition:a};this.setup&&this.setup(a)};b.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype),{assignedTo:CKEDITOR.STYLE_OBJECT},a,!0);return this.customHandlers[a.type]=b};var H=CKEDITOR.POSITION_PRECEDING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED,K=CKEDITOR.POSITION_FOLLOWING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED}(),CKEDITOR.styleCommand=function(a,e){this.requiredContent=this.allowedContent=
this.style=a;CKEDITOR.tools.extend(this,e,!0)},CKEDITOR.styleCommand.prototype.exec=function(a){a.focus();this.state==CKEDITOR.TRISTATE_OFF?a.applyStyle(this.style):this.state==CKEDITOR.TRISTATE_ON&&a.removeStyle(this.style)},CKEDITOR.stylesSet=new CKEDITOR.resourceManager("","stylesSet"),CKEDITOR.addStylesSet=CKEDITOR.tools.bind(CKEDITOR.stylesSet.add,CKEDITOR.stylesSet),CKEDITOR.loadStylesSet=function(a,e,b){CKEDITOR.stylesSet.addExternal(a,e,"");CKEDITOR.stylesSet.load(a,b)},CKEDITOR.tools.extend(CKEDITOR.editor.prototype,
{attachStyleStateChange:function(a,e){var b=this._.styleStateChangeCallbacks;b||(b=this._.styleStateChangeCallbacks=[],this.on("selectionChange",function(a){for(var d=0;d<b.length;d++){var e=b[d],l=e.style.checkActive(a.data.path,this)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF;e.fn.call(this,l)}}));b.push({style:a,fn:e})},applyStyle:function(a){a.apply(this)},removeStyle:function(a){a.remove(this)},getStylesSet:function(a){if(this._.stylesDefinitions)a(this._.stylesDefinitions);else{var e=this,b=
e.config.stylesCombo_stylesSet||e.config.stylesSet;if(!1===b)a(null);else if(b instanceof Array)e._.stylesDefinitions=b,a(b);else{b||(b="default");var b=b.split(":"),c=b[0];CKEDITOR.stylesSet.addExternal(c,b[1]?b.slice(1).join(":"):CKEDITOR.getUrl("styles.js"),"");CKEDITOR.stylesSet.load(c,function(b){e._.stylesDefinitions=b[c];a(e._.stylesDefinitions)})}}}}),CKEDITOR.dom.comment=function(a,e){"string"==typeof a&&(a=(e?e.$:document).createComment(a));CKEDITOR.dom.domObject.call(this,a)},CKEDITOR.dom.comment.prototype=
new CKEDITOR.dom.node,CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,{type:CKEDITOR.NODE_COMMENT,getOuterHtml:function(){return"\x3c!--"+this.$.nodeValue+"--\x3e"}}),"use strict",function(){var a={},e={},b;for(b in CKEDITOR.dtd.$blockLimit)b in CKEDITOR.dtd.$list||(a[b]=1);for(b in CKEDITOR.dtd.$block)b in CKEDITOR.dtd.$blockLimit||b in CKEDITOR.dtd.$empty||(e[b]=1);CKEDITOR.dom.elementPath=function(b,d){var m=null,l=null,f=[],h=b,k;d=d||b.getDocument().getBody();do if(h.type==CKEDITOR.NODE_ELEMENT){f.push(h);
if(!this.lastElement&&(this.lastElement=h,h.is(CKEDITOR.dtd.$object)||"false"==h.getAttribute("contenteditable")))continue;if(h.equals(d))break;if(!l&&(k=h.getName(),"true"==h.getAttribute("contenteditable")?l=h:!m&&e[k]&&(m=h),a[k])){if(k=!m&&"div"==k){a:{k=h.getChildren();for(var g=0,n=k.count();g<n;g++){var u=k.getItem(g);if(u.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$block[u.getName()]){k=!0;break a}}k=!1}k=!k}k?m=h:l=h}}while(h=h.getParent());l||(l=d);this.block=m;this.blockLimit=l;this.root=
d;this.elements=f}}(),CKEDITOR.dom.elementPath.prototype={compare:function(a){var e=this.elements;a=a&&a.elements;if(!a||e.length!=a.length)return!1;for(var b=0;b<e.length;b++)if(!e[b].equals(a[b]))return!1;return!0},contains:function(a,e,b){var c;"string"==typeof a&&(c=function(b){return b.getName()==a});a instanceof CKEDITOR.dom.element?c=function(b){return b.equals(a)}:CKEDITOR.tools.isArray(a)?c=function(b){return-1<CKEDITOR.tools.indexOf(a,b.getName())}:"function"==typeof a?c=a:"object"==typeof a&&
(c=function(b){return b.getName()in a});var d=this.elements,m=d.length;e&&m--;b&&(d=Array.prototype.slice.call(d,0),d.reverse());for(e=0;e<m;e++)if(c(d[e]))return d[e];return null},isContextFor:function(a){var e;return a in CKEDITOR.dtd.$block?(e=this.contains(CKEDITOR.dtd.$intermediate)||this.root.equals(this.block)&&this.block||this.blockLimit,!!e.getDtd()[a]):!0},direction:function(){return(this.block||this.blockLimit||this.root).getDirection(1)}},CKEDITOR.dom.text=function(a,e){"string"==typeof a&&
(a=(e?e.$:document).createTextNode(a));this.$=a},CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node,CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return this.$.nodeValue},setText:function(a){this.$.nodeValue=a},split:function(a){var e=this.$.parentNode,b=e.childNodes.length,c=this.getLength(),d=this.getDocument(),m=new CKEDITOR.dom.text(this.$.splitText(a),d);e.childNodes.length==b&&(a>=c?(m=d.createText(""),
m.insertAfter(this)):(a=d.createText(""),a.insertAfter(m),a.remove()));return m},substring:function(a,e){return"number"!=typeof e?this.$.nodeValue.substr(a):this.$.nodeValue.substring(a,e)}}),function(){function a(a,c,d){var e=a.serializable,l=c[d?"endContainer":"startContainer"],f=d?"endOffset":"startOffset",h=e?c.document.getById(a.startNode):a.startNode;a=e?c.document.getById(a.endNode):a.endNode;l.equals(h.getPrevious())?(c.startOffset=c.startOffset-l.getLength()-a.getPrevious().getLength(),l=
a.getNext()):l.equals(a.getPrevious())&&(c.startOffset-=l.getLength(),l=a.getNext());l.equals(h.getParent())&&c[f]++;l.equals(a.getParent())&&c[f]++;c[d?"endContainer":"startContainer"]=l;return c}CKEDITOR.dom.rangeList=function(a){if(a instanceof CKEDITOR.dom.rangeList)return a;a?a instanceof CKEDITOR.dom.range&&(a=[a]):a=[];return CKEDITOR.tools.extend(a,e)};var e={createIterator:function(){var a=this,c=CKEDITOR.dom.walker.bookmark(),d=[],e;return{getNextRange:function(l){e=void 0===e?0:e+1;var f=
a[e];if(f&&1<a.length){if(!e)for(var h=a.length-1;0<=h;h--)d.unshift(a[h].createBookmark(!0));if(l)for(var k=0;a[e+k+1];){var g=f.document;l=0;h=g.getById(d[k].endNode);for(g=g.getById(d[k+1].startNode);;){h=h.getNextSourceNode(!1);if(g.equals(h))l=1;else if(c(h)||h.type==CKEDITOR.NODE_ELEMENT&&h.isBlockBoundary())continue;break}if(!l)break;k++}for(f.moveToBookmark(d.shift());k--;)h=a[++e],h.moveToBookmark(d.shift()),f.setEnd(h.endContainer,h.endOffset)}return f}}},createBookmarks:function(b){for(var c=
[],d,e=0;e<this.length;e++){c.push(d=this[e].createBookmark(b,!0));for(var l=e+1;l<this.length;l++)this[l]=a(d,this[l]),this[l]=a(d,this[l],!0)}return c},createBookmarks2:function(a){for(var c=[],d=0;d<this.length;d++)c.push(this[d].createBookmark2(a));return c},moveToBookmarks:function(a){for(var c=0;c<this.length;c++)this[c].moveToBookmark(a[c])}}}(),function(){function a(){return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1]||"skins/"+CKEDITOR.skinName.split(",")[0]+"/")}function e(b){var c=
CKEDITOR.skin["ua_"+b],d=CKEDITOR.env;if(c)for(var c=c.split(",").sort(function(a,b){return a>b?-1:1}),f=0,e;f<c.length;f++)if(e=c[f],d.ie&&(e.replace(/^ie/,"")==d.version||d.quirks&&"iequirks"==e)&&(e="ie"),d[e]){b+="_"+c[f];break}return CKEDITOR.getUrl(a()+b+".css")}function b(a,b){m[a]||(CKEDITOR.document.appendStyleSheet(e(a)),m[a]=1);b&&b()}function c(a){var b=a.getById(l);b||(b=a.getHead().append("style"),b.setAttribute("id",l),b.setAttribute("type","text/css"));return b}function d(a,b,c){var d,
f,e;if(CKEDITOR.env.webkit)for(b=b.split("}").slice(0,-1),f=0;f<b.length;f++)b[f]=b[f].split("{");for(var h=0;h<a.length;h++)if(CKEDITOR.env.webkit)for(f=0;f<b.length;f++){e=b[f][1];for(d=0;d<c.length;d++)e=e.replace(c[d][0],c[d][1]);a[h].$.sheet.addRule(b[f][0],e)}else{e=b;for(d=0;d<c.length;d++)e=e.replace(c[d][0],c[d][1]);CKEDITOR.env.ie&&11>CKEDITOR.env.version?a[h].$.styleSheet.cssText+=e:a[h].$.innerHTML+=e}}var m={};CKEDITOR.skin={path:a,loadPart:function(c,d){CKEDITOR.skin.name!=CKEDITOR.skinName.split(",")[0]?
CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a()+"skin.js"),function(){b(c,d)}):b(c,d)},getPath:function(a){return CKEDITOR.getUrl(e(a))},icons:{},addIcon:function(a,b,c,d){a=a.toLowerCase();this.icons[a]||(this.icons[a]={path:b,offset:c||0,bgsize:d||"16px"})},getIconStyle:function(a,b,c,d,f){var e;a&&(a=a.toLowerCase(),b&&(e=this.icons[a+"-rtl"]),e||(e=this.icons[a]));a=c||e&&e.path||"";d=d||e&&e.offset;f=f||e&&e.bgsize||"16px";return a&&"background-image:url("+CKEDITOR.getUrl(a)+");background-position:0 "+
d+"px;background-size:"+f+";"}};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{getUiColor:function(){return this.uiColor},setUiColor:function(a){var b=c(CKEDITOR.document);return(this.setUiColor=function(a){this.uiColor=a;var c=CKEDITOR.skin.chameleon,e="",k="";"function"==typeof c&&(e=c(this,"editor"),k=c(this,"panel"));a=[[h,a]];d([b],e,a);d(f,k,a)}).call(this,a)}});var l="cke_ui_color",f=[],h=/\$color/g;CKEDITOR.on("instanceLoaded",function(a){if(!CKEDITOR.env.ie||!CKEDITOR.env.quirks){var b=
a.editor;a=function(a){a=(a.data[0]||a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument();if(!a.getById("cke_ui_color")){a=c(a);f.push(a);var e=b.getUiColor();e&&d([a],CKEDITOR.skin.chameleon(b,"panel"),[[h,e]])}};b.on("panelShow",a);b.on("menuShow",a);b.config.uiColor&&b.setUiColor(b.config.uiColor)}})}(),function(){if(CKEDITOR.env.webkit)CKEDITOR.env.hc=!1;else{var a=CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"width:0;height:0;position:absolute;left:-10000px;border:1px solid;border-color:red blue"\x3e\x3c/div\x3e',
CKEDITOR.document);a.appendTo(CKEDITOR.document.getHead());try{var e=a.getComputedStyle("border-top-color"),b=a.getComputedStyle("border-right-color");CKEDITOR.env.hc=!(!e||e!=b)}catch(c){CKEDITOR.env.hc=!1}a.remove()}CKEDITOR.env.hc&&(CKEDITOR.env.cssClass+=" cke_hc");CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}");CKEDITOR.status="loaded";CKEDITOR.fireOnce("loaded");if(a=CKEDITOR._.pending)for(delete CKEDITOR._.pending,e=0;e<a.length;e++)CKEDITOR.editor.prototype.constructor.apply(a[e][0],
a[e][1]),CKEDITOR.add(a[e][0])}(),CKEDITOR.skin.name="moono",CKEDITOR.skin.ua_editor="ie,iequirks,ie7,ie8,gecko",CKEDITOR.skin.ua_dialog="ie,iequirks,ie7,ie8",CKEDITOR.skin.chameleon=function(){var a=function(){return function(a,b){for(var e=a.match(/[^#]./g),l=0;3>l;l++){var f=l,h;h=parseInt(e[l],16);h=("0"+(0>b?0|h*(1+b):0|h+(255-h)*b).toString(16)).slice(-2);e[f]=h}return"#"+e.join("")}}(),e=function(){var a=new CKEDITOR.template("background:#{to};background-image:linear-gradient(to bottom,{from},{to});filter:progid:DXImageTransform.Microsoft.gradient(gradientType\x3d0,startColorstr\x3d'{from}',endColorstr\x3d'{to}');");
return function(b,e){return a.output({from:b,to:e})}}(),b={editor:new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ {defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_bottom [{defaultGradient}border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [{defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [{defaultGradient}outline-color:{defaultBorder};border-top-color:{defaultBorder};] {id} .cke_dialog_tab [{lightGradient}border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [{mediumGradient}] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} .cke_toolgroup [{lightGradient}border-color:{defaultBorder};] {id} a.cke_button_off:hover, {id} a.cke_button_off:focus, {id} a.cke_button_off:active [{mediumGradient}] {id} .cke_button_on [{ckeButtonOn}] {id} .cke_toolbar_separator [background-color: {ckeToolbarSeparator};] {id} .cke_combo_button [border-color:{defaultBorder};{lightGradient}] {id} a.cke_combo_button:hover, {id} a.cke_combo_button:focus, {id} .cke_combo_on a.cke_combo_button [border-color:{defaultBorder};{mediumGradient}] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover, {id} a.cke_path_item:focus, {id} a.cke_path_item:active [background-color:{elementsPathBg};] {id}.cke_panel [border-color:{defaultBorder};] "),
panel:new CKEDITOR.template(".cke_panel_grouptitle [{lightGradient}border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:focus.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:focus.cke_colorauto, a:focus.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")};
return function(c,d){var m=c.uiColor,m={id:"."+c.id,defaultBorder:a(m,-.1),defaultGradient:e(a(m,.9),m),lightGradient:e(a(m,1),a(m,.7)),mediumGradient:e(a(m,.8),a(m,.5)),ckeButtonOn:e(a(m,.6),a(m,.7)),ckeResizer:a(m,-.4),ckeToolbarSeparator:a(m,.5),ckeColorauto:a(m,.8),dialogBody:a(m,.7),dialogTabSelected:e("#FFFFFF","#FFFFFF"),dialogTabSelectedBorder:"#FFF",elementsPathColor:a(m,-.6),elementsPathBg:m,menubuttonIcon:a(m,.5),menubuttonIconHover:a(m,.3)};return b[d].output(m).replace(/\[/g,"{").replace(/\]/g,
"}")}}(),CKEDITOR.plugins.add("dialogui",{onLoad:function(){var a=function(a){this._||(this._={});this._["default"]=this._.initValue=a["default"]||"";this._.required=a.required||!1;for(var b=[this._],c=1;c<arguments.length;c++)b.push(arguments[c]);b.push(!0);CKEDITOR.tools.extend.apply(CKEDITOR.tools,b);return this._},e={build:function(a,b,c){return new CKEDITOR.ui.dialog.textInput(a,b,c)}},b={build:function(a,b,c){return new CKEDITOR.ui.dialog[b.type](a,b,c)}},c={isChanged:function(){return this.getValue()!=
this.getInitValue()},reset:function(a){this.setValue(this.getInitValue(),a)},setInitValue:function(){this._.initValue=this.getValue()},resetInitValue:function(){this._.initValue=this._["default"]},getInitValue:function(){return this._.initValue}},d=CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onChange:function(a,b){this._.domOnChangeRegistered||(a.on("load",function(){this.getInputElement().on("change",function(){a.parts.dialog.isVisible()&&this.fire("change",{value:this.getValue()})},
this)},this),this._.domOnChangeRegistered=!0);this.on("change",b)}},!0),m=/^on([A-Z]\w+)/,l=function(a){for(var b in a)(m.test(b)||"title"==b||"type"==b)&&delete a[b];return a},f=function(a){a=a.data.getKeystroke();a==CKEDITOR.SHIFT+CKEDITOR.ALT+36?this.setDirectionMarker("ltr"):a==CKEDITOR.SHIFT+CKEDITOR.ALT+35&&this.setDirectionMarker("rtl")};CKEDITOR.tools.extend(CKEDITOR.ui.dialog,{labeledElement:function(b,c,d,f){if(!(4>arguments.length)){var e=a.call(this,c);e.labelId=CKEDITOR.tools.getNextId()+
"_label";this._.children=[];var m={role:c.role||"presentation"};c.includeLabel&&(m["aria-labelledby"]=e.labelId);CKEDITOR.ui.dialog.uiElement.call(this,b,c,d,"div",null,m,function(){var a=[],d=c.required?" cke_required":"";"horizontal"!=c.labelLayout?a.push('\x3clabel class\x3d"cke_dialog_ui_labeled_label'+d+'" ',' id\x3d"'+e.labelId+'"',e.inputId?' for\x3d"'+e.inputId+'"':"",(c.labelStyle?' style\x3d"'+c.labelStyle+'"':"")+"\x3e",c.label,"\x3c/label\x3e",'\x3cdiv class\x3d"cke_dialog_ui_labeled_content"',
c.controlStyle?' style\x3d"'+c.controlStyle+'"':"",' role\x3d"presentation"\x3e',f.call(this,b,c),"\x3c/div\x3e"):(d={type:"hbox",widths:c.widths,padding:0,children:[{type:"html",html:'\x3clabel class\x3d"cke_dialog_ui_labeled_label'+d+'" id\x3d"'+e.labelId+'" for\x3d"'+e.inputId+'"'+(c.labelStyle?' style\x3d"'+c.labelStyle+'"':"")+"\x3e"+CKEDITOR.tools.htmlEncode(c.label)+"\x3c/label\x3e"},{type:"html",html:'\x3cspan class\x3d"cke_dialog_ui_labeled_content"'+(c.controlStyle?' style\x3d"'+c.controlStyle+
'"':"")+"\x3e"+f.call(this,b,c)+"\x3c/span\x3e"}]},CKEDITOR.dialog._.uiElementBuilders.hbox.build(b,d,a));return a.join("")})}},textInput:function(b,c,d){if(!(3>arguments.length)){a.call(this,c);var e=this._.inputId=CKEDITOR.tools.getNextId()+"_textInput",m={"class":"cke_dialog_ui_input_"+c.type,id:e,type:c.type};c.validate&&(this.validate=c.validate);c.maxLength&&(m.maxlength=c.maxLength);c.size&&(m.size=c.size);c.inputStyle&&(m.style=c.inputStyle);var l=this,v=!1;b.on("load",function(){l.getInputElement().on("keydown",
function(a){13==a.data.getKeystroke()&&(v=!0)});l.getInputElement().on("keyup",function(a){13==a.data.getKeystroke()&&v&&(b.getButton("ok")&&setTimeout(function(){b.getButton("ok").click()},0),v=!1);l.bidi&&f.call(l,a)},null,null,1E3)});CKEDITOR.ui.dialog.labeledElement.call(this,b,c,d,function(){var a=['\x3cdiv class\x3d"cke_dialog_ui_input_',c.type,'" role\x3d"presentation"'];c.width&&a.push('style\x3d"width:'+c.width+'" ');a.push("\x3e\x3cinput ");m["aria-labelledby"]=this._.labelId;this._.required&&
(m["aria-required"]=this._.required);for(var b in m)a.push(b+'\x3d"'+m[b]+'" ');a.push(" /\x3e\x3c/div\x3e");return a.join("")})}},textarea:function(b,c,d){if(!(3>arguments.length)){a.call(this,c);var e=this,m=this._.inputId=CKEDITOR.tools.getNextId()+"_textarea",l={};c.validate&&(this.validate=c.validate);l.rows=c.rows||5;l.cols=c.cols||20;l["class"]="cke_dialog_ui_input_textarea "+(c["class"]||"");"undefined"!=typeof c.inputStyle&&(l.style=c.inputStyle);c.dir&&(l.dir=c.dir);if(e.bidi)b.on("load",
function(){e.getInputElement().on("keyup",f)},e);CKEDITOR.ui.dialog.labeledElement.call(this,b,c,d,function(){l["aria-labelledby"]=this._.labelId;this._.required&&(l["aria-required"]=this._.required);var a=['\x3cdiv class\x3d"cke_dialog_ui_input_textarea" role\x3d"presentation"\x3e\x3ctextarea id\x3d"',m,'" '],b;for(b in l)a.push(b+'\x3d"'+CKEDITOR.tools.htmlEncode(l[b])+'" ');a.push("\x3e",CKEDITOR.tools.htmlEncode(e._["default"]),"\x3c/textarea\x3e\x3c/div\x3e");return a.join("")})}},checkbox:function(b,
c,d){if(!(3>arguments.length)){var f=a.call(this,c,{"default":!!c["default"]});c.validate&&(this.validate=c.validate);CKEDITOR.ui.dialog.uiElement.call(this,b,c,d,"span",null,null,function(){var a=CKEDITOR.tools.extend({},c,{id:c.id?c.id+"_checkbox":CKEDITOR.tools.getNextId()+"_checkbox"},!0),d=[],e=CKEDITOR.tools.getNextId()+"_label",g={"class":"cke_dialog_ui_checkbox_input",type:"checkbox","aria-labelledby":e};l(a);c["default"]&&(g.checked="checked");"undefined"!=typeof a.inputStyle&&(a.style=a.inputStyle);
f.checkbox=new CKEDITOR.ui.dialog.uiElement(b,a,d,"input",null,g);d.push(' \x3clabel id\x3d"',e,'" for\x3d"',g.id,'"'+(c.labelStyle?' style\x3d"'+c.labelStyle+'"':"")+"\x3e",CKEDITOR.tools.htmlEncode(c.label),"\x3c/label\x3e");return d.join("")})}},radio:function(b,c,d){if(!(3>arguments.length)){a.call(this,c);this._["default"]||(this._["default"]=this._.initValue=c.items[0][1]);c.validate&&(this.validate=c.validate);var f=[],e=this;c.role="radiogroup";c.includeLabel=!0;CKEDITOR.ui.dialog.labeledElement.call(this,
b,c,d,function(){for(var a=[],d=[],g=(c.id?c.id:CKEDITOR.tools.getNextId())+"_radio",m=0;m<c.items.length;m++){var w=c.items[m],x=void 0!==w[2]?w[2]:w[0],B=void 0!==w[1]?w[1]:w[0],r=CKEDITOR.tools.getNextId()+"_radio_input",z=r+"_label",r=CKEDITOR.tools.extend({},c,{id:r,title:null,type:null},!0),x=CKEDITOR.tools.extend({},r,{title:x},!0),E={type:"radio","class":"cke_dialog_ui_radio_input",name:g,value:B,"aria-labelledby":z},y=[];e._["default"]==B&&(E.checked="checked");l(r);l(x);"undefined"!=typeof r.inputStyle&&
(r.style=r.inputStyle);r.keyboardFocusable=!0;f.push(new CKEDITOR.ui.dialog.uiElement(b,r,y,"input",null,E));y.push(" ");new CKEDITOR.ui.dialog.uiElement(b,x,y,"label",null,{id:z,"for":E.id},w[0]);a.push(y.join(""))}new CKEDITOR.ui.dialog.hbox(b,f,a,d);return d.join("")});this._.children=f}},button:function(b,c,d){if(arguments.length){"function"==typeof c&&(c=c(b.getParentEditor()));a.call(this,c,{disabled:c.disabled||!1});CKEDITOR.event.implementOn(this);var f=this;b.on("load",function(){var a=this.getElement();
(function(){a.on("click",function(a){f.click();a.data.preventDefault()});a.on("keydown",function(a){a.data.getKeystroke()in{32:1}&&(f.click(),a.data.preventDefault())})})();a.unselectable()},this);var e=CKEDITOR.tools.extend({},c);delete e.style;var m=CKEDITOR.tools.getNextId()+"_label";CKEDITOR.ui.dialog.uiElement.call(this,b,e,d,"a",null,{style:c.style,href:"javascript:void(0)",title:c.label,hidefocus:"true","class":c["class"],role:"button","aria-labelledby":m},'\x3cspan id\x3d"'+m+'" class\x3d"cke_dialog_ui_button"\x3e'+
CKEDITOR.tools.htmlEncode(c.label)+"\x3c/span\x3e")}},select:function(b,c,d){if(!(3>arguments.length)){var f=a.call(this,c);c.validate&&(this.validate=c.validate);f.inputId=CKEDITOR.tools.getNextId()+"_select";CKEDITOR.ui.dialog.labeledElement.call(this,b,c,d,function(){var a=CKEDITOR.tools.extend({},c,{id:c.id?c.id+"_select":CKEDITOR.tools.getNextId()+"_select"},!0),d=[],e=[],g={id:f.inputId,"class":"cke_dialog_ui_input_select","aria-labelledby":this._.labelId};d.push('\x3cdiv class\x3d"cke_dialog_ui_input_',
c.type,'" role\x3d"presentation"');c.width&&d.push('style\x3d"width:'+c.width+'" ');d.push("\x3e");void 0!==c.size&&(g.size=c.size);void 0!==c.multiple&&(g.multiple=c.multiple);l(a);for(var m=0,w;m<c.items.length&&(w=c.items[m]);m++)e.push('\x3coption value\x3d"',CKEDITOR.tools.htmlEncode(void 0!==w[1]?w[1]:w[0]).replace(/"/g,"\x26quot;"),'" /\x3e ',CKEDITOR.tools.htmlEncode(w[0]));"undefined"!=typeof a.inputStyle&&(a.style=a.inputStyle);f.select=new CKEDITOR.ui.dialog.uiElement(b,a,d,"select",null,
g,e.join(""));d.push("\x3c/div\x3e");return d.join("")})}},file:function(b,c,d){if(!(3>arguments.length)){void 0===c["default"]&&(c["default"]="");var f=CKEDITOR.tools.extend(a.call(this,c),{definition:c,buttons:[]});c.validate&&(this.validate=c.validate);b.on("load",function(){CKEDITOR.document.getById(f.frameId).getParent().addClass("cke_dialog_ui_input_file")});CKEDITOR.ui.dialog.labeledElement.call(this,b,c,d,function(){f.frameId=CKEDITOR.tools.getNextId()+"_fileInput";var a=['\x3ciframe frameborder\x3d"0" allowtransparency\x3d"0" class\x3d"cke_dialog_ui_input_file" role\x3d"presentation" id\x3d"',
f.frameId,'" title\x3d"',c.label,'" src\x3d"javascript:void('];a.push(CKEDITOR.env.ie?"(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"})()":"0");a.push(')"\x3e\x3c/iframe\x3e');return a.join("")})}},fileButton:function(b,c,d){var f=this;if(!(3>arguments.length)){a.call(this,c);c.validate&&(this.validate=c.validate);var e=CKEDITOR.tools.extend({},c),m=e.onClick;e.className=(e.className?e.className+" ":"")+"cke_dialog_ui_button";e.onClick=function(a){var d=
c["for"];m&&!1===m.call(this,a)||(b.getContentElement(d[0],d[1]).submit(),this.disable())};b.on("load",function(){b.getContentElement(c["for"][0],c["for"][1])._.buttons.push(f)});CKEDITOR.ui.dialog.button.call(this,b,e,d)}},html:function(){var a=/^\s*<[\w:]+\s+([^>]*)?>/,b=/^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/,c=/\/$/;return function(d,f,e){if(!(3>arguments.length)){var m=[],l=f.html;"\x3c"!=l.charAt(0)&&(l="\x3cspan\x3e"+l+"\x3c/span\x3e");var p=f.focus;if(p){var w=this.focus;this.focus=function(){("function"==
typeof p?p:w).call(this);this.fire("focus")};f.isFocusable&&(this.isFocusable=this.isFocusable);this.keyboardFocusable=!0}CKEDITOR.ui.dialog.uiElement.call(this,d,f,m,"span",null,null,"");m=m.join("").match(a);l=l.match(b)||["","",""];c.test(l[1])&&(l[1]=l[1].slice(0,-1),l[2]="/"+l[2]);e.push([l[1]," ",m[1]||"",l[2]].join(""))}}}(),fieldset:function(a,b,c,d,f){var e=f.label;this._={children:b};CKEDITOR.ui.dialog.uiElement.call(this,a,f,d,"fieldset",null,null,function(){var a=[];e&&a.push("\x3clegend"+
(f.labelStyle?' style\x3d"'+f.labelStyle+'"':"")+"\x3e"+e+"\x3c/legend\x3e");for(var b=0;b<c.length;b++)a.push(c[b]);return a.join("")})}},!0);CKEDITOR.ui.dialog.html.prototype=new CKEDITOR.ui.dialog.uiElement;CKEDITOR.ui.dialog.labeledElement.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setLabel:function(a){var b=CKEDITOR.document.getById(this._.labelId);1>b.getChildCount()?(new CKEDITOR.dom.text(a,CKEDITOR.document)).appendTo(b):b.getChild(0).$.nodeValue=a;return this},getLabel:function(){var a=
CKEDITOR.document.getById(this._.labelId);return!a||1>a.getChildCount()?"":a.getChild(0).getText()},eventProcessors:d},!0);CKEDITOR.ui.dialog.button.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{click:function(){return this._.disabled?!1:this.fire("click",{dialog:this._.dialog})},enable:function(){this._.disabled=!1;var a=this.getElement();a&&a.removeClass("cke_disabled")},disable:function(){this._.disabled=!0;this.getElement().addClass("cke_disabled")},isVisible:function(){return this.getElement().getFirst().isVisible()},
isEnabled:function(){return!this._.disabled},eventProcessors:CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onClick:function(a,b){this.on("click",function(){b.apply(this,arguments)})}},!0),accessKeyUp:function(){this.click()},accessKeyDown:function(){this.focus()},keyboardFocusable:!0},!0);CKEDITOR.ui.dialog.textInput.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return CKEDITOR.document.getById(this._.inputId)},
focus:function(){var a=this.selectParentTab();setTimeout(function(){var b=a.getInputElement();b&&b.$.focus()},0)},select:function(){var a=this.selectParentTab();setTimeout(function(){var b=a.getInputElement();b&&(b.$.focus(),b.$.select())},0)},accessKeyUp:function(){this.select()},setValue:function(a){if(this.bidi){var b=a&&a.charAt(0);(b="‪"==b?"ltr":"‫"==b?"rtl":null)&&(a=a.slice(1));this.setDirectionMarker(b)}a||(a="");return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this,arguments)},
getValue:function(){var a=CKEDITOR.ui.dialog.uiElement.prototype.getValue.call(this);if(this.bidi&&a){var b=this.getDirectionMarker();b&&(a=("ltr"==b?"‪":"‫")+a)}return a},setDirectionMarker:function(a){var b=this.getInputElement();a?b.setAttributes({dir:a,"data-cke-dir-marker":a}):this.getDirectionMarker()&&b.removeAttributes(["dir","data-cke-dir-marker"])},getDirectionMarker:function(){return this.getInputElement().data("cke-dir-marker")},keyboardFocusable:!0},c,!0);CKEDITOR.ui.dialog.textarea.prototype=
new CKEDITOR.ui.dialog.textInput;CKEDITOR.ui.dialog.select.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return this._.select.getElement()},add:function(a,b,c){var d=new CKEDITOR.dom.element("option",this.getDialog().getParentEditor().document),f=this.getInputElement().$;d.$.text=a;d.$.value=void 0===b||null===b?a:b;void 0===c||null===c?CKEDITOR.env.ie?f.add(d.$):f.add(d.$,null):f.add(d.$,c);return this},remove:function(a){this.getInputElement().$.remove(a);
return this},clear:function(){for(var a=this.getInputElement().$;0<a.length;)a.remove(0);return this},keyboardFocusable:!0},c,!0);CKEDITOR.ui.dialog.checkbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getInputElement:function(){return this._.checkbox.getElement()},setValue:function(a,b){this.getInputElement().$.checked=a;!b&&this.fire("change",{value:a})},getValue:function(){return this.getInputElement().$.checked},accessKeyUp:function(){this.setValue(!this.getValue())},eventProcessors:{onChange:function(a,
b){if(!CKEDITOR.env.ie||8<CKEDITOR.env.version)return d.onChange.apply(this,arguments);a.on("load",function(){var a=this._.checkbox.getElement();a.on("propertychange",function(b){b=b.data.$;"checked"==b.propertyName&&this.fire("change",{value:a.$.checked})},this)},this);this.on("change",b);return null}},keyboardFocusable:!0},c,!0);CKEDITOR.ui.dialog.radio.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setValue:function(a,b){for(var c=this._.children,d,f=0;f<c.length&&(d=c[f]);f++)d.getElement().$.checked=
d.getValue()==a;!b&&this.fire("change",{value:a})},getValue:function(){for(var a=this._.children,b=0;b<a.length;b++)if(a[b].getElement().$.checked)return a[b].getValue();return null},accessKeyUp:function(){var a=this._.children,b;for(b=0;b<a.length;b++)if(a[b].getElement().$.checked){a[b].getElement().focus();return}a[0].getElement().focus()},eventProcessors:{onChange:function(a,b){if(!CKEDITOR.env.ie||8<CKEDITOR.env.version)return d.onChange.apply(this,arguments);a.on("load",function(){for(var a=
this._.children,b=this,c=0;c<a.length;c++)a[c].getElement().on("propertychange",function(a){a=a.data.$;"checked"==a.propertyName&&this.$.checked&&b.fire("change",{value:this.getAttribute("value")})})},this);this.on("change",b);return null}}},c,!0);CKEDITOR.ui.dialog.file.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,c,{getInputElement:function(){var a=CKEDITOR.document.getById(this._.frameId).getFrameDocument();return 0<a.$.forms.length?new CKEDITOR.dom.element(a.$.forms[0].elements[0]):
this.getElement()},submit:function(){this.getInputElement().getParent().$.submit();return this},getAction:function(){return this.getInputElement().getParent().$.action},registerEvents:function(a){var b=/^on([A-Z]\w+)/,c,d=function(a,b,c,d){a.on("formLoaded",function(){a.getInputElement().on(c,d,a)})},f;for(f in a)if(c=f.match(b))this.eventProcessors[f]?this.eventProcessors[f].call(this,this._.dialog,a[f]):d(this,this._.dialog,c[1].toLowerCase(),a[f]);return this},reset:function(){function a(){c.$.open();
var h="";d.size&&(h=d.size-(CKEDITOR.env.ie?7:0));var x=b.frameId+"_input";c.$.write(['\x3chtml dir\x3d"'+l+'" lang\x3d"'+p+'"\x3e\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e\x3cbody style\x3d"margin: 0; overflow: hidden; background: transparent;"\x3e','\x3cform enctype\x3d"multipart/form-data" method\x3d"POST" dir\x3d"'+l+'" lang\x3d"'+p+'" action\x3d"',CKEDITOR.tools.htmlEncode(d.action),'"\x3e\x3clabel id\x3d"',b.labelId,'" for\x3d"',x,'" style\x3d"display:none"\x3e',CKEDITOR.tools.htmlEncode(d.label),
'\x3c/label\x3e\x3cinput style\x3d"width:100%" id\x3d"',x,'" aria-labelledby\x3d"',b.labelId,'" type\x3d"file" name\x3d"',CKEDITOR.tools.htmlEncode(d.id||"cke_upload"),'" size\x3d"',CKEDITOR.tools.htmlEncode(0<h?h:""),'" /\x3e\x3c/form\x3e\x3c/body\x3e\x3c/html\x3e\x3cscript\x3e',CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+")();":"","window.parent.CKEDITOR.tools.callFunction("+e+");","window.onbeforeunload \x3d function() {window.parent.CKEDITOR.tools.callFunction("+m+")}","\x3c/script\x3e"].join(""));
c.$.close();for(h=0;h<f.length;h++)f[h].enable()}var b=this._,c=CKEDITOR.document.getById(b.frameId).getFrameDocument(),d=b.definition,f=b.buttons,e=this.formLoadedNumber,m=this.formUnloadNumber,l=b.dialog._.editor.lang.dir,p=b.dialog._.editor.langCode;e||(e=this.formLoadedNumber=CKEDITOR.tools.addFunction(function(){this.fire("formLoaded")},this),m=this.formUnloadNumber=CKEDITOR.tools.addFunction(function(){this.getInputElement().clearCustomData()},this),this.getDialog()._.editor.on("destroy",function(){CKEDITOR.tools.removeFunction(e);
CKEDITOR.tools.removeFunction(m)}));CKEDITOR.env.gecko?setTimeout(a,500):a()},getValue:function(){return this.getInputElement().$.value||""},setInitValue:function(){this._.initValue=""},eventProcessors:{onChange:function(a,b){this._.domOnChangeRegistered||(this.on("formLoaded",function(){this.getInputElement().on("change",function(){this.fire("change",{value:this.getValue()})},this)},this),this._.domOnChangeRegistered=!0);this.on("change",b)}},keyboardFocusable:!0},!0);CKEDITOR.ui.dialog.fileButton.prototype=
new CKEDITOR.ui.dialog.button;CKEDITOR.ui.dialog.fieldset.prototype=CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype);CKEDITOR.dialog.addUIElement("text",e);CKEDITOR.dialog.addUIElement("password",e);CKEDITOR.dialog.addUIElement("textarea",b);CKEDITOR.dialog.addUIElement("checkbox",b);CKEDITOR.dialog.addUIElement("radio",b);CKEDITOR.dialog.addUIElement("button",b);CKEDITOR.dialog.addUIElement("select",b);CKEDITOR.dialog.addUIElement("file",b);CKEDITOR.dialog.addUIElement("fileButton",b);CKEDITOR.dialog.addUIElement("html",
b);CKEDITOR.dialog.addUIElement("fieldset",{build:function(a,b,c){for(var d=b.children,f,e=[],m=[],l=0;l<d.length&&(f=d[l]);l++){var p=[];e.push(p);m.push(CKEDITOR.dialog._.uiElementBuilders[f.type].build(a,f,p))}return new CKEDITOR.ui.dialog[b.type](a,m,e,c,b)}})}}),CKEDITOR.DIALOG_RESIZE_NONE=0,CKEDITOR.DIALOG_RESIZE_WIDTH=1,CKEDITOR.DIALOG_RESIZE_HEIGHT=2,CKEDITOR.DIALOG_RESIZE_BOTH=3,CKEDITOR.DIALOG_STATE_IDLE=1,CKEDITOR.DIALOG_STATE_BUSY=2,function(){function a(){for(var a=this._.tabIdList.length,
b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId)+a,c=b-1;c>b-a;c--)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a];return null}function e(){for(var a=this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId),c=b+1;c<b+a;c++)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a];return null}function b(a,b){for(var c=a.$.getElementsByTagName("input"),d=0,f=c.length;d<f;d++){var e=new CKEDITOR.dom.element(c[d]);
"text"==e.getAttribute("type").toLowerCase()&&(b?(e.setAttribute("value",e.getCustomData("fake_value")||""),e.removeCustomData("fake_value")):(e.setCustomData("fake_value",e.getAttribute("value")),e.setAttribute("value","")))}}function c(a,b){var c=this.getInputElement();c&&(a?c.removeAttribute("aria-invalid"):c.setAttribute("aria-invalid",!0));a||(this.select?this.select():this.focus());b&&alert(b);this.fire("validated",{valid:a,msg:b})}function d(){var a=this.getInputElement();a&&a.removeAttribute("aria-invalid")}
function m(a){var b=CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog",t).output({id:CKEDITOR.tools.getNextNumber(),editorId:a.id,langDir:a.lang.dir,langCode:a.langCode,editorDialogClass:"cke_editor_"+a.name.replace(/\./g,"\\.")+"_dialog",closeTitle:a.lang.common.close,hidpi:CKEDITOR.env.hidpi?"cke_hidpi":""})),c=b.getChild([0,0,0,0,0]),d=c.getChild(0),f=c.getChild(1);a.plugins.clipboard&&CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(c);!CKEDITOR.env.ie||CKEDITOR.env.quirks||
CKEDITOR.env.edge||(a="javascript:void(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"}())",CKEDITOR.dom.element.createFromHtml('\x3ciframe frameBorder\x3d"0" class\x3d"cke_iframe_shim" src\x3d"'+a+'" tabIndex\x3d"-1"\x3e\x3c/iframe\x3e').appendTo(c.getParent()));d.unselectable();f.unselectable();return{element:b,parts:{dialog:b.getChild(0),title:d,close:f,tabs:c.getChild(2),contents:c.getChild([3,0,0,0]),footer:c.getChild([3,0,1,0])}}}function l(a,
b,c){this.element=b;this.focusIndex=c;this.tabIndex=0;this.isFocusable=function(){return!b.getAttribute("disabled")&&b.isVisible()};this.focus=function(){a._.currentFocusIndex=this.focusIndex;this.element.focus()};b.on("keydown",function(a){a.data.getKeystroke()in{32:1,13:1}&&this.fire("click")});b.on("focus",function(){this.fire("mouseover")});b.on("blur",function(){this.fire("mouseout")})}function f(a){function b(){a.layout()}var c=CKEDITOR.document.getWindow();c.on("resize",b);a.on("hide",function(){c.removeListener("resize",
b)})}function h(a,b){this._={dialog:a};CKEDITOR.tools.extend(this,b)}function k(a){function b(c){var h=a.getSize(),m=CKEDITOR.document.getWindow().getViewPaneSize(),l=c.data.$.screenX,n=c.data.$.screenY,p=l-d.x,w=n-d.y;d={x:l,y:n};f.x+=p;f.y+=w;a.move(f.x+k[3]<g?-k[3]:f.x-k[1]>m.width-h.width-g?m.width-h.width+("rtl"==e.lang.dir?0:k[1]):f.x,f.y+k[0]<g?-k[0]:f.y-k[2]>m.height-h.height-g?m.height-h.height+k[2]:f.y,1);c.data.preventDefault()}function c(){CKEDITOR.document.removeListener("mousemove",
b);CKEDITOR.document.removeListener("mouseup",c);if(CKEDITOR.env.ie6Compat){var a=y.getChild(0).getFrameDocument();a.removeListener("mousemove",b);a.removeListener("mouseup",c)}}var d=null,f=null,e=a.getParentEditor(),g=e.config.dialog_magnetDistance,k=CKEDITOR.skin.margins||[0,0,0,0];"undefined"==typeof g&&(g=20);a.parts.title.on("mousedown",function(e){d={x:e.data.$.screenX,y:e.data.$.screenY};CKEDITOR.document.on("mousemove",b);CKEDITOR.document.on("mouseup",c);f=a.getPosition();if(CKEDITOR.env.ie6Compat){var g=
y.getChild(0).getFrameDocument();g.on("mousemove",b);g.on("mouseup",c)}e.data.preventDefault()},a)}function g(a){function b(c){var n="rtl"==e.lang.dir,p=l.width,w=l.height,x=p+(c.data.$.screenX-m.x)*(n?-1:1)*(a._.moved?1:2),v=w+(c.data.$.screenY-m.y)*(a._.moved?1:2),r=a._.element.getFirst(),r=n&&r.getComputedStyle("right"),t=a.getPosition();t.y+v>h.height&&(v=h.height-t.y);(n?r:t.x)+x>h.width&&(x=h.width-(n?r:t.x));if(f==CKEDITOR.DIALOG_RESIZE_WIDTH||f==CKEDITOR.DIALOG_RESIZE_BOTH)p=Math.max(d.minWidth||
0,x-g);if(f==CKEDITOR.DIALOG_RESIZE_HEIGHT||f==CKEDITOR.DIALOG_RESIZE_BOTH)w=Math.max(d.minHeight||0,v-k);a.resize(p,w);a._.moved||a.layout();c.data.preventDefault()}function c(){CKEDITOR.document.removeListener("mouseup",c);CKEDITOR.document.removeListener("mousemove",b);n&&(n.remove(),n=null);if(CKEDITOR.env.ie6Compat){var a=y.getChild(0).getFrameDocument();a.removeListener("mouseup",c);a.removeListener("mousemove",b)}}var d=a.definition,f=d.resizable;if(f!=CKEDITOR.DIALOG_RESIZE_NONE){var e=a.getParentEditor(),
g,k,h,m,l,n,p=CKEDITOR.tools.addFunction(function(d){l=a.getSize();var f=a.parts.contents;f.$.getElementsByTagName("iframe").length&&(n=CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_dialog_resize_cover" style\x3d"height: 100%; position: absolute; width: 100%;"\x3e\x3c/div\x3e'),f.append(n));k=l.height-a.parts.contents.getSize("height",!(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.quirks));g=l.width-a.parts.contents.getSize("width",1);m={x:d.screenX,y:d.screenY};h=CKEDITOR.document.getWindow().getViewPaneSize();
CKEDITOR.document.on("mousemove",b);CKEDITOR.document.on("mouseup",c);CKEDITOR.env.ie6Compat&&(f=y.getChild(0).getFrameDocument(),f.on("mousemove",b),f.on("mouseup",c));d.preventDefault&&d.preventDefault()});a.on("load",function(){var b="";f==CKEDITOR.DIALOG_RESIZE_WIDTH?b=" cke_resizer_horizontal":f==CKEDITOR.DIALOG_RESIZE_HEIGHT&&(b=" cke_resizer_vertical");b=CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_resizer'+b+" cke_resizer_"+e.lang.dir+'" title\x3d"'+CKEDITOR.tools.htmlEncode(e.lang.common.resize)+
'" onmousedown\x3d"CKEDITOR.tools.callFunction('+p+', event )"\x3e'+("ltr"==e.lang.dir?"◢":"◣")+"\x3c/div\x3e");a.parts.footer.append(b,1)});e.on("destroy",function(){CKEDITOR.tools.removeFunction(p)})}}function n(a){a.data.preventDefault(1)}function u(a){var b=CKEDITOR.document.getWindow(),c=a.config,d=c.dialog_backgroundCoverColor||"white",f=c.dialog_backgroundCoverOpacity,e=c.baseFloatZIndex,c=CKEDITOR.tools.genKey(d,f,e),g=E[c];g?g.show():(e=['\x3cdiv tabIndex\x3d"-1" style\x3d"position: ',CKEDITOR.env.ie6Compat?
"absolute":"fixed","; z-index: ",e,"; top: 0px; left: 0px; ",CKEDITOR.env.ie6Compat?"":"background-color: "+d,'" class\x3d"cke_dialog_background_cover"\x3e'],CKEDITOR.env.ie6Compat&&(d="\x3chtml\x3e\x3cbody style\x3d\\'background-color:"+d+";\\'\x3e\x3c/body\x3e\x3c/html\x3e",e.push('\x3ciframe hidefocus\x3d"true" frameborder\x3d"0" id\x3d"cke_dialog_background_iframe" src\x3d"javascript:'),e.push("void((function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.write( '"+
d+"' );document.close();")+"})())"),e.push('" style\x3d"position:absolute;left:0;top:0;width:100%;height: 100%;filter: progid:DXImageTransform.Microsoft.Alpha(opacity\x3d0)"\x3e\x3c/iframe\x3e')),e.push("\x3c/div\x3e"),g=CKEDITOR.dom.element.createFromHtml(e.join("")),g.setOpacity(void 0!==f?f:.5),g.on("keydown",n),g.on("keypress",n),g.on("keyup",n),g.appendTo(CKEDITOR.document.getBody()),E[c]=g);a.focusManager.add(g);y=g;a=function(){var a=b.getViewPaneSize();g.setStyles({width:a.width+"px",height:a.height+
"px"})};var k=function(){var a=b.getScrollPosition(),c=CKEDITOR.dialog._.currentTop;g.setStyles({left:a.x+"px",top:a.y+"px"});if(c){do a=c.getPosition(),c.move(a.x,a.y);while(c=c._.parentDialog)}};z=a;b.on("resize",a);a();CKEDITOR.env.mac&&CKEDITOR.env.webkit||g.focus();if(CKEDITOR.env.ie6Compat){var h=function(){k();arguments.callee.prevScrollHandler.apply(this,arguments)};b.$.setTimeout(function(){h.prevScrollHandler=window.onscroll||function(){};window.onscroll=h},0);k()}}function q(a){y&&(a.focusManager.remove(y),
a=CKEDITOR.document.getWindow(),y.hide(),a.removeListener("resize",z),CKEDITOR.env.ie6Compat&&a.$.setTimeout(function(){window.onscroll=window.onscroll&&window.onscroll.prevScrollHandler||null},0),z=null)}var v=CKEDITOR.tools.cssLength,t='\x3cdiv class\x3d"cke_reset_all {editorId} {editorDialogClass} {hidpi}" dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"dialog" aria-labelledby\x3d"cke_dialog_title_{id}"\x3e\x3ctable class\x3d"cke_dialog '+CKEDITOR.env.cssClass+' cke_{langDir}" style\x3d"position:absolute" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd role\x3d"presentation"\x3e\x3cdiv class\x3d"cke_dialog_body" role\x3d"presentation"\x3e\x3cdiv id\x3d"cke_dialog_title_{id}" class\x3d"cke_dialog_title" role\x3d"presentation"\x3e\x3c/div\x3e\x3ca id\x3d"cke_dialog_close_button_{id}" class\x3d"cke_dialog_close_button" href\x3d"javascript:void(0)" title\x3d"{closeTitle}" role\x3d"button"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e\x3cdiv id\x3d"cke_dialog_tabs_{id}" class\x3d"cke_dialog_tabs" role\x3d"tablist"\x3e\x3c/div\x3e\x3ctable class\x3d"cke_dialog_contents" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_contents_{id}" class\x3d"cke_dialog_contents_body" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_footer_{id}" class\x3d"cke_dialog_footer" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e';
CKEDITOR.dialog=function(b,f){function h(){var a=y._.focusList;a.sort(function(a,b){return a.tabIndex!=b.tabIndex?b.tabIndex-a.tabIndex:a.focusIndex-b.focusIndex});for(var b=a.length,c=0;c<b;c++)a[c].focusIndex=c}function l(a){var b=y._.focusList;a=a||0;if(!(1>b.length)){var c=y._.currentFocusIndex;y._.tabBarMode&&0>a&&(c=0);try{b[c].getInputElement().$.blur()}catch(d){}var f=c,e=1<y._.pageCount;do{f+=a;if(e&&!y._.tabBarMode&&(f==b.length||-1==f)){y._.tabBarMode=!0;y._.tabs[y._.currentTabId][0].focus();
y._.currentFocusIndex=-1;return}f=(f+b.length)%b.length;if(f==c)break}while(a&&!b[f].isFocusable());b[f].focus();"text"==b[f].type&&b[f].select()}}function n(c){if(y==CKEDITOR.dialog._.currentTop){var d=c.data.getKeystroke(),f="rtl"==b.lang.dir,g=[37,38,39,40];u=z=0;if(9==d||d==CKEDITOR.SHIFT+9)l(d==CKEDITOR.SHIFT+9?-1:1),u=1;else if(d==CKEDITOR.ALT+121&&!y._.tabBarMode&&1<y.getPageCount())y._.tabBarMode=!0,y._.tabs[y._.currentTabId][0].focus(),y._.currentFocusIndex=-1,u=1;else if(-1!=CKEDITOR.tools.indexOf(g,
d)&&y._.tabBarMode)d=-1!=CKEDITOR.tools.indexOf([f?39:37,38],d)?a.call(y):e.call(y),y.selectPage(d),y._.tabs[d][0].focus(),u=1;else if(13!=d&&32!=d||!y._.tabBarMode)if(13==d)d=c.data.getTarget(),d.is("a","button","select","textarea")||d.is("input")&&"button"==d.$.type||((d=this.getButton("ok"))&&CKEDITOR.tools.setTimeout(d.click,0,d),u=1),z=1;else if(27==d)(d=this.getButton("cancel"))?CKEDITOR.tools.setTimeout(d.click,0,d):!1!==this.fire("cancel",{hide:!0}).hide&&this.hide(),z=1;else return;else this.selectPage(this._.currentTabId),
this._.tabBarMode=!1,this._.currentFocusIndex=-1,l(1),u=1;w(c)}}function w(a){u?a.data.preventDefault(1):z&&a.data.stopPropagation()}var x=CKEDITOR.dialog._.dialogDefinitions[f],v=CKEDITOR.tools.clone(p),t=b.config.dialog_buttonsOrder||"OS",q=b.lang.dir,B={},u,z;("OS"==t&&CKEDITOR.env.mac||"rtl"==t&&"ltr"==q||"ltr"==t&&"rtl"==q)&&v.buttons.reverse();x=CKEDITOR.tools.extend(x(b),v);x=CKEDITOR.tools.clone(x);x=new r(this,x);v=m(b);this._={editor:b,element:v.element,name:f,contentSize:{width:0,height:0},
size:{width:0,height:0},contents:{},buttons:{},accessKeyMap:{},tabs:{},tabIdList:[],currentTabId:null,currentTabIndex:null,pageCount:0,lastTab:null,tabBarMode:!1,focusList:[],currentFocusIndex:0,hasFocus:!1};this.parts=v.parts;CKEDITOR.tools.setTimeout(function(){b.fire("ariaWidget",this.parts.contents)},0,this);v={position:CKEDITOR.env.ie6Compat?"absolute":"fixed",top:0,visibility:"hidden"};v["rtl"==q?"right":"left"]=0;this.parts.dialog.setStyles(v);CKEDITOR.event.call(this);this.definition=x=CKEDITOR.fire("dialogDefinition",
{name:f,definition:x},b).definition;if(!("removeDialogTabs"in b._)&&b.config.removeDialogTabs){v=b.config.removeDialogTabs.split(";");for(q=0;q<v.length;q++)if(t=v[q].split(":"),2==t.length){var E=t[0];B[E]||(B[E]=[]);B[E].push(t[1])}b._.removeDialogTabs=B}if(b._.removeDialogTabs&&(B=b._.removeDialogTabs[f]))for(q=0;q<B.length;q++)x.removeContents(B[q]);if(x.onLoad)this.on("load",x.onLoad);if(x.onShow)this.on("show",x.onShow);if(x.onHide)this.on("hide",x.onHide);if(x.onOk)this.on("ok",function(a){b.fire("saveSnapshot");
setTimeout(function(){b.fire("saveSnapshot")},0);!1===x.onOk.call(this,a)&&(a.data.hide=!1)});this.state=CKEDITOR.DIALOG_STATE_IDLE;if(x.onCancel)this.on("cancel",function(a){!1===x.onCancel.call(this,a)&&(a.data.hide=!1)});var y=this,A=function(a){var b=y._.contents,c=!1,d;for(d in b)for(var f in b[d])if(c=a.call(this,b[d][f]))return};this.on("ok",function(a){A(function(b){if(b.validate){var d=b.validate(this),f="string"==typeof d||!1===d;f&&(a.data.hide=!1,a.stop());c.call(b,!f,"string"==typeof d?
d:void 0);return f}})},this,null,0);this.on("cancel",function(a){A(function(c){if(c.isChanged())return b.config.dialog_noConfirmCancel||confirm(b.lang.common.confirmCancel)||(a.data.hide=!1),!0})},this,null,0);this.parts.close.on("click",function(a){!1!==this.fire("cancel",{hide:!0}).hide&&this.hide();a.data.preventDefault()},this);this.changeFocus=l;var C=this._.element;b.focusManager.add(C,1);this.on("show",function(){C.on("keydown",n,this);if(CKEDITOR.env.gecko)C.on("keypress",w,this)});this.on("hide",
function(){C.removeListener("keydown",n);CKEDITOR.env.gecko&&C.removeListener("keypress",w);A(function(a){d.apply(a)})});this.on("iframeAdded",function(a){(new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document)).on("keydown",n,this,null,0)});this.on("show",function(){h();var a=1<y._.pageCount;b.config.dialog_startupFocusTab&&a?(y._.tabBarMode=!0,y._.tabs[y._.currentTabId][0].focus(),y._.currentFocusIndex=-1):this._.hasFocus||(this._.currentFocusIndex=a?-1:this._.focusList.length-1,x.onFocus?
(a=x.onFocus.call(this))&&a.focus():l(1))},this,null,4294967295);if(CKEDITOR.env.ie6Compat)this.on("load",function(){var a=this.getElement(),b=a.getFirst();b.remove();b.appendTo(a)},this);k(this);g(this);(new CKEDITOR.dom.text(x.title,CKEDITOR.document)).appendTo(this.parts.title);for(q=0;q<x.contents.length;q++)(B=x.contents[q])&&this.addPage(B);this.parts.tabs.on("click",function(a){var b=a.data.getTarget();b.hasClass("cke_dialog_tab")&&(b=b.$.id,this.selectPage(b.substring(4,b.lastIndexOf("_"))),
this._.tabBarMode&&(this._.tabBarMode=!1,this._.currentFocusIndex=-1,l(1)),a.data.preventDefault())},this);q=[];B=CKEDITOR.dialog._.uiElementBuilders.hbox.build(this,{type:"hbox",className:"cke_dialog_footer_buttons",widths:[],children:x.buttons},q).getChild();this.parts.footer.setHtml(q.join(""));for(q=0;q<B.length;q++)this._.buttons[B[q].id]=B[q]};CKEDITOR.dialog.prototype={destroy:function(){this.hide();this._.element.remove()},resize:function(){return function(a,b){this._.contentSize&&this._.contentSize.width==
a&&this._.contentSize.height==b||(CKEDITOR.dialog.fire("resize",{dialog:this,width:a,height:b},this._.editor),this.fire("resize",{width:a,height:b},this._.editor),this.parts.contents.setStyles({width:a+"px",height:b+"px"}),"rtl"==this._.editor.lang.dir&&this._.position&&(this._.position.x=CKEDITOR.document.getWindow().getViewPaneSize().width-this._.contentSize.width-parseInt(this._.element.getFirst().getStyle("right"),10)),this._.contentSize={width:a,height:b})}}(),getSize:function(){var a=this._.element.getFirst();
return{width:a.$.offsetWidth||0,height:a.$.offsetHeight||0}},move:function(a,b,c){var d=this._.element.getFirst(),f="rtl"==this._.editor.lang.dir,e="fixed"==d.getComputedStyle("position");CKEDITOR.env.ie&&d.setStyle("zoom","100%");e&&this._.position&&this._.position.x==a&&this._.position.y==b||(this._.position={x:a,y:b},e||(e=CKEDITOR.document.getWindow().getScrollPosition(),a+=e.x,b+=e.y),f&&(e=this.getSize(),a=CKEDITOR.document.getWindow().getViewPaneSize().width-e.width-a),b={top:(0<b?b:0)+"px"},
b[f?"right":"left"]=(0<a?a:0)+"px",d.setStyles(b),c&&(this._.moved=1))},getPosition:function(){return CKEDITOR.tools.extend({},this._.position)},show:function(){var a=this._.element,b=this.definition;a.getParent()&&a.getParent().equals(CKEDITOR.document.getBody())?a.setStyle("display","block"):a.appendTo(CKEDITOR.document.getBody());this.resize(this._.contentSize&&this._.contentSize.width||b.width||b.minWidth,this._.contentSize&&this._.contentSize.height||b.height||b.minHeight);this.reset();this.selectPage(this.definition.contents[0].id);
null===CKEDITOR.dialog._.currentZIndex&&(CKEDITOR.dialog._.currentZIndex=this._.editor.config.baseFloatZIndex);this._.element.getFirst().setStyle("z-index",CKEDITOR.dialog._.currentZIndex+=10);null===CKEDITOR.dialog._.currentTop?(CKEDITOR.dialog._.currentTop=this,this._.parentDialog=null,u(this._.editor)):(this._.parentDialog=CKEDITOR.dialog._.currentTop,this._.parentDialog.getElement().getFirst().$.style.zIndex-=Math.floor(this._.editor.config.baseFloatZIndex/2),CKEDITOR.dialog._.currentTop=this);
a.on("keydown",C);a.on("keyup",G);this._.hasFocus=!1;for(var c in b.contents)if(b.contents[c]){var a=b.contents[c],d=this._.tabs[a.id],e=a.requiredContent,g=0;if(d){for(var k in this._.contents[a.id]){var h=this._.contents[a.id][k];"hbox"!=h.type&&"vbox"!=h.type&&h.getInputElement()&&(h.requiredContent&&!this._.editor.activeFilter.check(h.requiredContent)?h.disable():(h.enable(),g++))}!g||e&&!this._.editor.activeFilter.check(e)?d[0].addClass("cke_dialog_tab_disabled"):d[0].removeClass("cke_dialog_tab_disabled")}}CKEDITOR.tools.setTimeout(function(){this.layout();
f(this);this.parts.dialog.setStyle("visibility","");this.fireOnce("load",{});CKEDITOR.ui.fire("ready",this);this.fire("show",{});this._.editor.fire("dialogShow",this);this._.parentDialog||this._.editor.focusManager.lock();this.foreach(function(a){a.setInitValue&&a.setInitValue()})},100,this)},layout:function(){var a=this.parts.dialog,b=this.getSize(),c=CKEDITOR.document.getWindow().getViewPaneSize(),d=(c.width-b.width)/2,f=(c.height-b.height)/2;CKEDITOR.env.ie6Compat||(b.height+(0<f?f:0)>c.height||
b.width+(0<d?d:0)>c.width?a.setStyle("position","absolute"):a.setStyle("position","fixed"));this.move(this._.moved?this._.position.x:d,this._.moved?this._.position.y:f)},foreach:function(a){for(var b in this._.contents)for(var c in this._.contents[b])a.call(this,this._.contents[b][c]);return this},reset:function(){var a=function(a){a.reset&&a.reset(1)};return function(){this.foreach(a);return this}}(),setupContent:function(){var a=arguments;this.foreach(function(b){b.setup&&b.setup.apply(b,a)})},
commitContent:function(){var a=arguments;this.foreach(function(b){CKEDITOR.env.ie&&this._.currentFocusIndex==b.focusIndex&&b.getInputElement().$.blur();b.commit&&b.commit.apply(b,a)})},hide:function(){if(this.parts.dialog.isVisible()){this.fire("hide",{});this._.editor.fire("dialogHide",this);this.selectPage(this._.tabIdList[0]);var a=this._.element;a.setStyle("display","none");this.parts.dialog.setStyle("visibility","hidden");for(I(this);CKEDITOR.dialog._.currentTop!=this;)CKEDITOR.dialog._.currentTop.hide();
if(this._.parentDialog){var b=this._.parentDialog.getElement().getFirst();b.setStyle("z-index",parseInt(b.$.style.zIndex,10)+Math.floor(this._.editor.config.baseFloatZIndex/2))}else q(this._.editor);if(CKEDITOR.dialog._.currentTop=this._.parentDialog)CKEDITOR.dialog._.currentZIndex-=10;else{CKEDITOR.dialog._.currentZIndex=null;a.removeListener("keydown",C);a.removeListener("keyup",G);var c=this._.editor;c.focus();setTimeout(function(){c.focusManager.unlock();CKEDITOR.env.iOS&&c.window.focus()},0)}delete this._.parentDialog;
this.foreach(function(a){a.resetInitValue&&a.resetInitValue()});this.setState(CKEDITOR.DIALOG_STATE_IDLE)}},addPage:function(a){if(!a.requiredContent||this._.editor.filter.check(a.requiredContent)){for(var b=[],c=a.label?' title\x3d"'+CKEDITOR.tools.htmlEncode(a.label)+'"':"",d=CKEDITOR.dialog._.uiElementBuilders.vbox.build(this,{type:"vbox",className:"cke_dialog_page_contents",children:a.elements,expand:!!a.expand,padding:a.padding,style:a.style||"width: 100%;"},b),f=this._.contents[a.id]={},e=d.getChild(),
g=0;d=e.shift();)d.notAllowed||"hbox"==d.type||"vbox"==d.type||g++,f[d.id]=d,"function"==typeof d.getChild&&e.push.apply(e,d.getChild());g||(a.hidden=!0);b=CKEDITOR.dom.element.createFromHtml(b.join(""));b.setAttribute("role","tabpanel");d=CKEDITOR.env;f="cke_"+a.id+"_"+CKEDITOR.tools.getNextNumber();c=CKEDITOR.dom.element.createFromHtml(['\x3ca class\x3d"cke_dialog_tab"',0<this._.pageCount?" cke_last":"cke_first",c,a.hidden?' style\x3d"display:none"':"",' id\x3d"',f,'"',d.gecko&&!d.hc?"":' href\x3d"javascript:void(0)"',
' tabIndex\x3d"-1" hidefocus\x3d"true" role\x3d"tab"\x3e',a.label,"\x3c/a\x3e"].join(""));b.setAttribute("aria-labelledby",f);this._.tabs[a.id]=[c,b];this._.tabIdList.push(a.id);!a.hidden&&this._.pageCount++;this._.lastTab=c;this.updateStyle();b.setAttribute("name",a.id);b.appendTo(this.parts.contents);c.unselectable();this.parts.tabs.append(c);a.accessKey&&(F(this,this,"CTRL+"+a.accessKey,K,H),this._.accessKeyMap["CTRL+"+a.accessKey]=a.id)}},selectPage:function(a){if(this._.currentTabId!=a&&!this._.tabs[a][0].hasClass("cke_dialog_tab_disabled")&&
!1!==this.fire("selectPage",{page:a,currentPage:this._.currentTabId})){for(var c in this._.tabs){var d=this._.tabs[c][0],f=this._.tabs[c][1];c!=a&&(d.removeClass("cke_dialog_tab_selected"),f.hide());f.setAttribute("aria-hidden",c!=a)}var e=this._.tabs[a];e[0].addClass("cke_dialog_tab_selected");CKEDITOR.env.ie6Compat||CKEDITOR.env.ie7Compat?(b(e[1]),e[1].show(),setTimeout(function(){b(e[1],1)},0)):e[1].show();this._.currentTabId=a;this._.currentTabIndex=CKEDITOR.tools.indexOf(this._.tabIdList,a)}},
updateStyle:function(){this.parts.dialog[(1===this._.pageCount?"add":"remove")+"Class"]("cke_single_page")},hidePage:function(b){var c=this._.tabs[b]&&this._.tabs[b][0];c&&1!=this._.pageCount&&c.isVisible()&&(b==this._.currentTabId&&this.selectPage(a.call(this)),c.hide(),this._.pageCount--,this.updateStyle())},showPage:function(a){if(a=this._.tabs[a]&&this._.tabs[a][0])a.show(),this._.pageCount++,this.updateStyle()},getElement:function(){return this._.element},getName:function(){return this._.name},
getContentElement:function(a,b){var c=this._.contents[a];return c&&c[b]},getValueOf:function(a,b){return this.getContentElement(a,b).getValue()},setValueOf:function(a,b,c){return this.getContentElement(a,b).setValue(c)},getButton:function(a){return this._.buttons[a]},click:function(a){return this._.buttons[a].click()},disableButton:function(a){return this._.buttons[a].disable()},enableButton:function(a){return this._.buttons[a].enable()},getPageCount:function(){return this._.pageCount},getParentEditor:function(){return this._.editor},
getSelectedElement:function(){return this.getParentEditor().getSelection().getSelectedElement()},addFocusable:function(a,b){if("undefined"==typeof b)b=this._.focusList.length,this._.focusList.push(new l(this,a,b));else{this._.focusList.splice(b,0,new l(this,a,b));for(var c=b+1;c<this._.focusList.length;c++)this._.focusList[c].focusIndex++}},setState:function(a){if(this.state!=a){this.state=a;if(a==CKEDITOR.DIALOG_STATE_BUSY){if(!this.parts.spinner){var b=this.getParentEditor().lang.dir,c={attributes:{"class":"cke_dialog_spinner"},
styles:{"float":"rtl"==b?"right":"left"}};c.styles["margin-"+("rtl"==b?"left":"right")]="8px";this.parts.spinner=CKEDITOR.document.createElement("div",c);this.parts.spinner.setHtml("\x26#8987;");this.parts.spinner.appendTo(this.parts.title,1)}this.parts.spinner.show();this.getButton("ok").disable()}else a==CKEDITOR.DIALOG_STATE_IDLE&&(this.parts.spinner&&this.parts.spinner.hide(),this.getButton("ok").enable());this.fire("state",a)}}};CKEDITOR.tools.extend(CKEDITOR.dialog,{add:function(a,b){this._.dialogDefinitions[a]&&
"function"!=typeof b||(this._.dialogDefinitions[a]=b)},exists:function(a){return!!this._.dialogDefinitions[a]},getCurrent:function(){return CKEDITOR.dialog._.currentTop},isTabEnabled:function(a,b,c){a=a.config.removeDialogTabs;return!(a&&a.match(new RegExp("(?:^|;)"+b+":"+c+"(?:$|;)","i")))},okButton:function(){var a=function(a,b){b=b||{};return CKEDITOR.tools.extend({id:"ok",type:"button",label:a.lang.common.ok,"class":"cke_dialog_ui_button_ok",onClick:function(a){a=a.data.dialog;!1!==a.fire("ok",
{hide:!0}).hide&&a.hide()}},b,!0)};a.type="button";a.override=function(b){return CKEDITOR.tools.extend(function(c){return a(c,b)},{type:"button"},!0)};return a}(),cancelButton:function(){var a=function(a,b){b=b||{};return CKEDITOR.tools.extend({id:"cancel",type:"button",label:a.lang.common.cancel,"class":"cke_dialog_ui_button_cancel",onClick:function(a){a=a.data.dialog;!1!==a.fire("cancel",{hide:!0}).hide&&a.hide()}},b,!0)};a.type="button";a.override=function(b){return CKEDITOR.tools.extend(function(c){return a(c,
b)},{type:"button"},!0)};return a}(),addUIElement:function(a,b){this._.uiElementBuilders[a]=b}});CKEDITOR.dialog._={uiElementBuilders:{},dialogDefinitions:{},currentTop:null,currentZIndex:null};CKEDITOR.event.implementOn(CKEDITOR.dialog);CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype);var p={resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:600,minHeight:400,buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton]},w=function(a,b,c){for(var d=0,f;f=a[d];d++)if(f.id==b||c&&f[c]&&(f=w(f[c],
b,c)))return f;return null},x=function(a,b,c,d,f){if(c){for(var e=0,g;g=a[e];e++){if(g.id==c)return a.splice(e,0,b),b;if(d&&g[d]&&(g=x(g[d],b,c,d,!0)))return g}if(f)return null}a.push(b);return b},B=function(a,b,c){for(var d=0,f;f=a[d];d++){if(f.id==b)return a.splice(d,1);if(c&&f[c]&&(f=B(f[c],b,c)))return f}return null},r=function(a,b){this.dialog=a;for(var c=b.contents,d=0,f;f=c[d];d++)c[d]=f&&new h(a,f);CKEDITOR.tools.extend(this,b)};r.prototype={getContents:function(a){return w(this.contents,
a)},getButton:function(a){return w(this.buttons,a)},addContents:function(a,b){return x(this.contents,a,b)},addButton:function(a,b){return x(this.buttons,a,b)},removeContents:function(a){B(this.contents,a)},removeButton:function(a){B(this.buttons,a)}};h.prototype={get:function(a){return w(this.elements,a,"children")},add:function(a,b){return x(this.elements,a,b,"children")},remove:function(a){B(this.elements,a,"children")}};var z,E={},y,A={},C=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=
a.data.$.altKey,d=a.data.$.shiftKey,f=String.fromCharCode(a.data.$.keyCode);(b=A[(b?"CTRL+":"")+(c?"ALT+":"")+(d?"SHIFT+":"")+f])&&b.length&&(b=b[b.length-1],b.keydown&&b.keydown.call(b.uiElement,b.dialog,b.key),a.data.preventDefault())},G=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=a.data.$.altKey,d=a.data.$.shiftKey,f=String.fromCharCode(a.data.$.keyCode);(b=A[(b?"CTRL+":"")+(c?"ALT+":"")+(d?"SHIFT+":"")+f])&&b.length&&(b=b[b.length-1],b.keyup&&(b.keyup.call(b.uiElement,b.dialog,b.key),
a.data.preventDefault()))},F=function(a,b,c,d,f){(A[c]||(A[c]=[])).push({uiElement:a,dialog:b,key:c,keyup:f||a.accessKeyUp,keydown:d||a.accessKeyDown})},I=function(a){for(var b in A){for(var c=A[b],d=c.length-1;0<=d;d--)c[d].dialog!=a&&c[d].uiElement!=a||c.splice(d,1);0===c.length&&delete A[b]}},H=function(a,b){a._.accessKeyMap[b]&&a.selectPage(a._.accessKeyMap[b])},K=function(){};(function(){CKEDITOR.ui.dialog={uiElement:function(a,b,c,d,f,e,g){if(!(4>arguments.length)){var k=(d.call?d(b):d)||"div",
h=["\x3c",k," "],m=(f&&f.call?f(b):f)||{},l=(e&&e.call?e(b):e)||{},n=(g&&g.call?g.call(this,a,b):g)||"",p=this.domId=l.id||CKEDITOR.tools.getNextId()+"_uiElement";b.requiredContent&&!a.getParentEditor().filter.check(b.requiredContent)&&(m.display="none",this.notAllowed=!0);l.id=p;var w={};b.type&&(w["cke_dialog_ui_"+b.type]=1);b.className&&(w[b.className]=1);b.disabled&&(w.cke_disabled=1);for(var x=l["class"]&&l["class"].split?l["class"].split(" "):[],p=0;p<x.length;p++)x[p]&&(w[x[p]]=1);x=[];for(p in w)x.push(p);
l["class"]=x.join(" ");b.title&&(l.title=b.title);w=(b.style||"").split(";");b.align&&(x=b.align,m["margin-left"]="left"==x?0:"auto",m["margin-right"]="right"==x?0:"auto");for(p in m)w.push(p+":"+m[p]);b.hidden&&w.push("display:none");for(p=w.length-1;0<=p;p--)""===w[p]&&w.splice(p,1);0<w.length&&(l.style=(l.style?l.style+"; ":"")+w.join("; "));for(p in l)h.push(p+'\x3d"'+CKEDITOR.tools.htmlEncode(l[p])+'" ');h.push("\x3e",n,"\x3c/",k,"\x3e");c.push(h.join(""));(this._||(this._={})).dialog=a;"boolean"==
typeof b.isChanged&&(this.isChanged=function(){return b.isChanged});"function"==typeof b.isChanged&&(this.isChanged=b.isChanged);"function"==typeof b.setValue&&(this.setValue=CKEDITOR.tools.override(this.setValue,function(a){return function(c){a.call(this,b.setValue.call(this,c))}}));"function"==typeof b.getValue&&(this.getValue=CKEDITOR.tools.override(this.getValue,function(a){return function(){return b.getValue.call(this,a.call(this))}}));CKEDITOR.event.implementOn(this);this.registerEvents(b);
this.accessKeyUp&&this.accessKeyDown&&b.accessKey&&F(this,a,"CTRL+"+b.accessKey);var v=this;a.on("load",function(){var b=v.getInputElement();if(b){var c=v.type in{checkbox:1,ratio:1}&&CKEDITOR.env.ie&&8>CKEDITOR.env.version?"cke_dialog_ui_focused":"";b.on("focus",function(){a._.tabBarMode=!1;a._.hasFocus=!0;v.fire("focus");c&&this.addClass(c)});b.on("blur",function(){v.fire("blur");c&&this.removeClass(c)})}});CKEDITOR.tools.extend(this,b);this.keyboardFocusable&&(this.tabIndex=b.tabIndex||0,this.focusIndex=
a._.focusList.push(this)-1,this.on("focus",function(){a._.currentFocusIndex=v.focusIndex}))}},hbox:function(a,b,c,d,f){if(!(4>arguments.length)){this._||(this._={});var e=this._.children=b,g=f&&f.widths||null,k=f&&f.height||null,h,m={role:"presentation"};f&&f.align&&(m.align=f.align);CKEDITOR.ui.dialog.uiElement.call(this,a,f||{type:"hbox"},d,"table",{},m,function(){var a=['\x3ctbody\x3e\x3ctr class\x3d"cke_dialog_ui_hbox"\x3e'];for(h=0;h<c.length;h++){var b="cke_dialog_ui_hbox_child",d=[];0===h&&
(b="cke_dialog_ui_hbox_first");h==c.length-1&&(b="cke_dialog_ui_hbox_last");a.push('\x3ctd class\x3d"',b,'" role\x3d"presentation" ');g?g[h]&&d.push("width:"+v(g[h])):d.push("width:"+Math.floor(100/c.length)+"%");k&&d.push("height:"+v(k));f&&void 0!==f.padding&&d.push("padding:"+v(f.padding));CKEDITOR.env.ie&&CKEDITOR.env.quirks&&e[h].align&&d.push("text-align:"+e[h].align);0<d.length&&a.push('style\x3d"'+d.join("; ")+'" ');a.push("\x3e",c[h],"\x3c/td\x3e")}a.push("\x3c/tr\x3e\x3c/tbody\x3e");return a.join("")})}},
vbox:function(a,b,c,d,f){if(!(3>arguments.length)){this._||(this._={});var e=this._.children=b,g=f&&f.width||null,k=f&&f.heights||null;CKEDITOR.ui.dialog.uiElement.call(this,a,f||{type:"vbox"},d,"div",null,{role:"presentation"},function(){var b=['\x3ctable role\x3d"presentation" cellspacing\x3d"0" border\x3d"0" '];b.push('style\x3d"');f&&f.expand&&b.push("height:100%;");b.push("width:"+v(g||"100%"),";");CKEDITOR.env.webkit&&b.push("float:none;");b.push('"');b.push('align\x3d"',CKEDITOR.tools.htmlEncode(f&&
f.align||("ltr"==a.getParentEditor().lang.dir?"left":"right")),'" ');b.push("\x3e\x3ctbody\x3e");for(var d=0;d<c.length;d++){var h=[];b.push('\x3ctr\x3e\x3ctd role\x3d"presentation" ');g&&h.push("width:"+v(g||"100%"));k?h.push("height:"+v(k[d])):f&&f.expand&&h.push("height:"+Math.floor(100/c.length)+"%");f&&void 0!==f.padding&&h.push("padding:"+v(f.padding));CKEDITOR.env.ie&&CKEDITOR.env.quirks&&e[d].align&&h.push("text-align:"+e[d].align);0<h.length&&b.push('style\x3d"',h.join("; "),'" ');b.push(' class\x3d"cke_dialog_ui_vbox_child"\x3e',
c[d],"\x3c/td\x3e\x3c/tr\x3e")}b.push("\x3c/tbody\x3e\x3c/table\x3e");return b.join("")})}}}})();CKEDITOR.ui.dialog.uiElement.prototype={getElement:function(){return CKEDITOR.document.getById(this.domId)},getInputElement:function(){return this.getElement()},getDialog:function(){return this._.dialog},setValue:function(a,b){this.getInputElement().setValue(a);!b&&this.fire("change",{value:a});return this},getValue:function(){return this.getInputElement().getValue()},isChanged:function(){return!1},selectParentTab:function(){for(var a=
this.getInputElement();(a=a.getParent())&&-1==a.$.className.search("cke_dialog_page_contents"););if(!a)return this;a=a.getAttribute("name");this._.dialog._.currentTabId!=a&&this._.dialog.selectPage(a);return this},focus:function(){this.selectParentTab().getInputElement().focus();return this},registerEvents:function(a){var b=/^on([A-Z]\w+)/,c,d=function(a,b,c,d){b.on("load",function(){a.getInputElement().on(c,d,a)})},f;for(f in a)if(c=f.match(b))this.eventProcessors[f]?this.eventProcessors[f].call(this,
this._.dialog,a[f]):d(this,this._.dialog,c[1].toLowerCase(),a[f]);return this},eventProcessors:{onLoad:function(a,b){a.on("load",b,this)},onShow:function(a,b){a.on("show",b,this)},onHide:function(a,b){a.on("hide",b,this)}},accessKeyDown:function(){this.focus()},accessKeyUp:function(){},disable:function(){var a=this.getElement();this.getInputElement().setAttribute("disabled","true");a.addClass("cke_disabled")},enable:function(){var a=this.getElement();this.getInputElement().removeAttribute("disabled");
a.removeClass("cke_disabled")},isEnabled:function(){return!this.getElement().hasClass("cke_disabled")},isVisible:function(){return this.getInputElement().isVisible()},isFocusable:function(){return this.isEnabled()&&this.isVisible()?!0:!1}};CKEDITOR.ui.dialog.hbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getChild:function(a){if(1>arguments.length)return this._.children.concat();a.splice||(a=[a]);return 2>a.length?this._.children[a[0]]:this._.children[a[0]]&&this._.children[a[0]].getChild?
this._.children[a[0]].getChild(a.slice(1,a.length)):null}},!0);CKEDITOR.ui.dialog.vbox.prototype=new CKEDITOR.ui.dialog.hbox;(function(){var a={build:function(a,b,c){for(var d=b.children,f,e=[],g=[],k=0;k<d.length&&(f=d[k]);k++){var h=[];e.push(h);g.push(CKEDITOR.dialog._.uiElementBuilders[f.type].build(a,f,h))}return new CKEDITOR.ui.dialog[b.type](a,g,e,c,b)}};CKEDITOR.dialog.addUIElement("hbox",a);CKEDITOR.dialog.addUIElement("vbox",a)})();CKEDITOR.dialogCommand=function(a,b){this.dialogName=a;
CKEDITOR.tools.extend(this,b,!0)};CKEDITOR.dialogCommand.prototype={exec:function(a){a.openDialog(this.dialogName)},canUndo:!1,editorFocus:1};(function(){var a=/^([a]|[^a])+$/,b=/^\d*$/,c=/^\d*(?:\.\d+)?$/,d=/^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/,f=/^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,e=/^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/;CKEDITOR.VALIDATE_OR=1;CKEDITOR.VALIDATE_AND=2;CKEDITOR.dialog.validate={functions:function(){var a=arguments;return function(){var b=this&&this.getValue?this.getValue():
a[0],c,d=CKEDITOR.VALIDATE_AND,f=[],e;for(e=0;e<a.length;e++)if("function"==typeof a[e])f.push(a[e]);else break;e<a.length&&"string"==typeof a[e]&&(c=a[e],e++);e<a.length&&"number"==typeof a[e]&&(d=a[e]);var g=d==CKEDITOR.VALIDATE_AND?!0:!1;for(e=0;e<f.length;e++)g=d==CKEDITOR.VALIDATE_AND?g&&f[e](b):g||f[e](b);return g?!0:c}},regex:function(a,b){return function(c){c=this&&this.getValue?this.getValue():c;return a.test(c)?!0:b}},notEmpty:function(b){return this.regex(a,b)},integer:function(a){return this.regex(b,
a)},number:function(a){return this.regex(c,a)},cssLength:function(a){return this.functions(function(a){return f.test(CKEDITOR.tools.trim(a))},a)},htmlLength:function(a){return this.functions(function(a){return d.test(CKEDITOR.tools.trim(a))},a)},inlineStyle:function(a){return this.functions(function(a){return e.test(CKEDITOR.tools.trim(a))},a)},equals:function(a,b){return this.functions(function(b){return b==a},b)},notEqual:function(a,b){return this.functions(function(b){return b!=a},b)}};CKEDITOR.on("instanceDestroyed",
function(a){if(CKEDITOR.tools.isEmpty(CKEDITOR.instances)){for(var b;b=CKEDITOR.dialog._.currentTop;)b.hide();for(var c in E)E[c].remove();E={}}a=a.editor._.storedDialogs;for(var d in a)a[d].destroy()})})();CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{openDialog:function(a,b){var c=null,d=CKEDITOR.dialog._.dialogDefinitions[a];null===CKEDITOR.dialog._.currentTop&&u(this);if("function"==typeof d)c=this._.storedDialogs||(this._.storedDialogs={}),c=c[a]||(c[a]=new CKEDITOR.dialog(this,a)),b&&b.call(c,
c),c.show();else{if("failed"==d)throw q(this),Error('[CKEDITOR.dialog.openDialog] Dialog "'+a+'" failed when loading definition.');"string"==typeof d&&CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(d),function(){"function"!=typeof CKEDITOR.dialog._.dialogDefinitions[a]&&(CKEDITOR.dialog._.dialogDefinitions[a]="failed");this.openDialog(a,b)},this,0,1)}CKEDITOR.skin.loadPart("dialog");return c}})}(),CKEDITOR.plugins.add("dialog",{requires:"dialogui",init:function(a){a.on("doubleclick",function(e){e.data.dialog&&
a.openDialog(e.data.dialog)},null,null,999)}}),function(){CKEDITOR.plugins.add("a11yhelp",{requires:"dialog",availableLangs:{af:1,ar:1,bg:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,en:1,"en-gb":1,eo:1,es:1,et:1,fa:1,fi:1,fo:1,fr:1,"fr-ca":1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,it:1,ja:1,km:1,ko:1,ku:1,lt:1,lv:1,mk:1,mn:1,nb:1,nl:1,no:1,pl:1,pt:1,"pt-br":1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,sr:1,"sr-latn":1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,zh:1,"zh-cn":1},init:function(a){var e=this;a.addCommand("a11yHelp",{exec:function(){var b=
a.langCode,b=e.availableLangs[b]?b:e.availableLangs[b.replace(/-.*/,"")]?b.replace(/-.*/,""):"en";CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e.path+"dialogs/lang/"+b+".js"),function(){a.lang.a11yhelp=e.langEntries[b];a.openDialog("a11yHelp")})},modes:{wysiwyg:1,source:1},readOnly:1,canUndo:!1});a.setKeystroke(CKEDITOR.ALT+48,"a11yHelp");CKEDITOR.dialog.add("a11yHelp",this.path+"dialogs/a11yhelp.js");a.on("ariaEditorHelpLabel",function(b){b.data.label=a.lang.common.editorHelp})}})}(),CKEDITOR.plugins.add("about",
{requires:"dialog",init:function(a){var e=a.addCommand("about",new CKEDITOR.dialogCommand("about"));e.modes={wysiwyg:1,source:1};e.canUndo=!1;e.readOnly=1;a.ui.addButton&&a.ui.addButton("About",{label:a.lang.about.title,command:"about",toolbar:"about"});CKEDITOR.dialog.add("about",this.path+"dialogs/about.js")}}),CKEDITOR.plugins.add("basicstyles",{init:function(a){var e=0,b=function(b,d,h,k){if(k){k=new CKEDITOR.style(k);var g=c[h];g.unshift(k);a.attachStyleStateChange(k,function(b){!a.readOnly&&
a.getCommand(h).setState(b)});a.addCommand(h,new CKEDITOR.styleCommand(k,{contentForms:g}));a.ui.addButton&&a.ui.addButton(b,{label:d,command:h,toolbar:"basicstyles,"+(e+=10)})}},c={bold:["strong","b",["span",function(a){a=a.styles["font-weight"];return"bold"==a||700<=+a}]],italic:["em","i",["span",function(a){return"italic"==a.styles["font-style"]}]],underline:["u",["span",function(a){return"underline"==a.styles["text-decoration"]}]],strike:["s","strike",["span",function(a){return"line-through"==
a.styles["text-decoration"]}]],subscript:["sub"],superscript:["sup"]},d=a.config,m=a.lang.basicstyles;b("Bold",m.bold,"bold",d.coreStyles_bold);b("Italic",m.italic,"italic",d.coreStyles_italic);b("Underline",m.underline,"underline",d.coreStyles_underline);b("Strike",m.strike,"strike",d.coreStyles_strike);b("Subscript",m.subscript,"subscript",d.coreStyles_subscript);b("Superscript",m.superscript,"superscript",d.coreStyles_superscript);a.setKeystroke([[CKEDITOR.CTRL+66,"bold"],[CKEDITOR.CTRL+73,"italic"],
[CKEDITOR.CTRL+85,"underline"]])}}),CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"},CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"},CKEDITOR.config.coreStyles_underline={element:"u"},CKEDITOR.config.coreStyles_strike={element:"s",overrides:"strike"},CKEDITOR.config.coreStyles_subscript={element:"sub"},CKEDITOR.config.coreStyles_superscript={element:"sup"},function(){var a={exec:function(a){var b=a.getCommand("blockquote").state,c=a.getSelection(),d=c&&c.getRanges()[0];
if(d){var m=c.createBookmarks();if(CKEDITOR.env.ie){var l=m[0].startNode,f=m[0].endNode,h;if(l&&"blockquote"==l.getParent().getName())for(h=l;h=h.getNext();)if(h.type==CKEDITOR.NODE_ELEMENT&&h.isBlockBoundary()){l.move(h,!0);break}if(f&&"blockquote"==f.getParent().getName())for(h=f;h=h.getPrevious();)if(h.type==CKEDITOR.NODE_ELEMENT&&h.isBlockBoundary()){f.move(h);break}}var k=d.createIterator();k.enlargeBr=a.config.enterMode!=CKEDITOR.ENTER_BR;if(b==CKEDITOR.TRISTATE_OFF){for(l=[];b=k.getNextParagraph();)l.push(b);
1>l.length&&(b=a.document.createElement(a.config.enterMode==CKEDITOR.ENTER_P?"p":"div"),f=m.shift(),d.insertNode(b),b.append(new CKEDITOR.dom.text("﻿",a.document)),d.moveToBookmark(f),d.selectNodeContents(b),d.collapse(!0),f=d.createBookmark(),l.push(b),m.unshift(f));h=l[0].getParent();d=[];for(f=0;f<l.length;f++)b=l[f],h=h.getCommonAncestor(b.getParent());for(b={table:1,tbody:1,tr:1,ol:1,ul:1};b[h.getName()];)h=h.getParent();for(f=null;0<l.length;){for(b=l.shift();!b.getParent().equals(h);)b=b.getParent();
b.equals(f)||d.push(b);f=b}for(;0<d.length;)if(b=d.shift(),"blockquote"==b.getName()){for(f=new CKEDITOR.dom.documentFragment(a.document);b.getFirst();)f.append(b.getFirst().remove()),l.push(f.getLast());f.replace(b)}else l.push(b);d=a.document.createElement("blockquote");for(d.insertBefore(l[0]);0<l.length;)b=l.shift(),d.append(b)}else if(b==CKEDITOR.TRISTATE_ON){f=[];for(h={};b=k.getNextParagraph();){for(l=d=null;b.getParent();){if("blockquote"==b.getParent().getName()){d=b.getParent();l=b;break}b=
b.getParent()}d&&l&&!l.getCustomData("blockquote_moveout")&&(f.push(l),CKEDITOR.dom.element.setMarker(h,l,"blockquote_moveout",!0))}CKEDITOR.dom.element.clearAllMarkers(h);b=[];l=[];for(h={};0<f.length;)k=f.shift(),d=k.getParent(),k.getPrevious()?k.getNext()?(k.breakParent(k.getParent()),l.push(k.getNext())):k.remove().insertAfter(d):k.remove().insertBefore(d),d.getCustomData("blockquote_processed")||(l.push(d),CKEDITOR.dom.element.setMarker(h,d,"blockquote_processed",!0)),b.push(k);CKEDITOR.dom.element.clearAllMarkers(h);
for(f=l.length-1;0<=f;f--){d=l[f];a:{h=d;for(var k=0,g=h.getChildCount(),n=void 0;k<g&&(n=h.getChild(k));k++)if(n.type==CKEDITOR.NODE_ELEMENT&&n.isBlockBoundary()){h=!1;break a}h=!0}h&&d.remove()}if(a.config.enterMode==CKEDITOR.ENTER_BR)for(d=!0;b.length;)if(k=b.shift(),"div"==k.getName()){f=new CKEDITOR.dom.documentFragment(a.document);!d||!k.getPrevious()||k.getPrevious().type==CKEDITOR.NODE_ELEMENT&&k.getPrevious().isBlockBoundary()||f.append(a.document.createElement("br"));for(d=k.getNext()&&
!(k.getNext().type==CKEDITOR.NODE_ELEMENT&&k.getNext().isBlockBoundary());k.getFirst();)k.getFirst().remove().appendTo(f);d&&f.append(a.document.createElement("br"));f.replace(k);d=!1}}c.selectBookmarks(m);a.focus()}},refresh:function(a,b){this.setState(a.elementPath(b.block||b.blockLimit).contains("blockquote",1)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)},context:"blockquote",allowedContent:"blockquote",requiredContent:"blockquote"};CKEDITOR.plugins.add("blockquote",{init:function(e){e.blockless||
(e.addCommand("blockquote",a),e.ui.addButton&&e.ui.addButton("Blockquote",{label:e.lang.blockquote.toolbar,command:"blockquote",toolbar:"blocks,10"}))}})}(),"use strict",function(){function a(a,b,c){b.type||(b.type="auto");if(c&&!1===a.fire("beforePaste",b)||!b.dataValue&&b.dataTransfer.isEmpty())return!1;b.dataValue||(b.dataValue="");if(CKEDITOR.env.gecko&&"drop"==b.method&&a.toolbox)a.once("afterPaste",function(){a.toolbox.focus()});return a.fire("paste",b)}function e(b){function c(){var a=b.editable();
if(CKEDITOR.plugins.clipboard.isCustomCopyCutSupported){var d=function(a){A.initPasteDataTransfer(a,b);a.data.preventDefault()};a.on("copy",d);a.on("cut",d);a.on("cut",function(){b.extractSelectedHtml()},null,null,999)}a.on(A.mainPasteEvent,function(a){"beforepaste"==A.mainPasteEvent&&C||z(a)});"beforepaste"==A.mainPasteEvent&&(a.on("paste",function(a){G||(e(),a.data.preventDefault(),z(a),h("paste")||b.openDialog("paste"))}),a.on("contextmenu",k,null,null,0),a.on("beforepaste",function(a){!a.data||
a.data.$.ctrlKey||a.data.$.shiftKey||k()},null,null,0));a.on("beforecut",function(){!C&&m(b)});var f;a.attachListener(CKEDITOR.env.ie?a:b.document.getDocumentElement(),"mouseup",function(){f=setTimeout(function(){E()},0)});b.on("destroy",function(){clearTimeout(f)});a.on("keyup",E)}function d(a){return{type:a,canUndo:"cut"==a,startDisabled:!0,exec:function(){"cut"==this.type&&m();var a;var c=this.type;if(CKEDITOR.env.ie)a=h(c);else try{a=b.document.$.execCommand(c,!1,null)}catch(d){a=!1}a||b.showNotification(b.lang.clipboard[this.type+
"Error"]);return a}}}function f(){return{canUndo:!1,async:!0,exec:function(b,c){var d=function(c,d){c&&a(b,c,!!d);b.fire("afterCommandExec",{name:"paste",command:f,returnValue:!!c})},f=this;"string"==typeof c?d({dataValue:c,method:"paste",dataTransfer:A.initPasteDataTransfer()},1):b.getClipboardData(d)}}}function e(){G=1;setTimeout(function(){G=0},100)}function k(){C=1;setTimeout(function(){C=0},10)}function h(a){var c=b.document,d=c.getBody(),f=!1,e=function(){f=!0};d.on(a,e);7<CKEDITOR.env.version?
c.$.execCommand(a):c.$.selection.createRange().execCommand(a);d.removeListener(a,e);return f}function m(){if(CKEDITOR.env.ie&&!CKEDITOR.env.quirks){var a=b.getSelection(),c,d,f;a.getType()==CKEDITOR.SELECTION_ELEMENT&&(c=a.getSelectedElement())&&(d=a.getRanges()[0],f=b.document.createText(""),f.insertBefore(c),d.setStartBefore(f),d.setEndAfter(c),a.selectRanges([d]),setTimeout(function(){c.getParent()&&(f.remove(),a.selectElement(c))},0))}}function l(a,c){var d=b.document,f=b.editable(),e=function(a){a.cancel()},
k;if(!d.getById("cke_pastebin")){var h=b.getSelection(),m=h.createBookmarks();CKEDITOR.env.ie&&h.root.fire("selectionchange");var n=new CKEDITOR.dom.element(!CKEDITOR.env.webkit&&!f.is("body")||CKEDITOR.env.ie?"div":"body",d);n.setAttributes({id:"cke_pastebin","data-cke-temp":"1"});var p=0,d=d.getWindow();CKEDITOR.env.webkit?(f.append(n),n.addClass("cke_editable"),f.is("body")||(p="static"!=f.getComputedStyle("position")?f:CKEDITOR.dom.element.get(f.$.offsetParent),p=p.getDocumentPosition().y)):f.getAscendant(CKEDITOR.env.ie?
"body":"html",1).append(n);n.setStyles({position:"absolute",top:d.getScrollPosition().y-p+10+"px",width:"1px",height:Math.max(1,d.getViewPaneSize().height-20)+"px",overflow:"hidden",margin:0,padding:0});CKEDITOR.env.safari&&n.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select","text"));(p=n.getParent().isReadOnly())?(n.setOpacity(0),n.setAttribute("contenteditable",!0)):n.setStyle("ltr"==b.config.contentsLangDirection?"left":"right","-1000px");b.on("selectionChange",e,null,null,0);if(CKEDITOR.env.webkit||
CKEDITOR.env.gecko)k=f.once("blur",e,null,null,-100);p&&n.focus();p=new CKEDITOR.dom.range(n);p.selectNodeContents(n);var w=p.select();CKEDITOR.env.ie&&(k=f.once("blur",function(){b.lockSelection(w)}));var x=CKEDITOR.document.getWindow().getScrollPosition().y;setTimeout(function(){CKEDITOR.env.webkit&&(CKEDITOR.document.getBody().$.scrollTop=x);k&&k.removeListener();CKEDITOR.env.ie&&f.focus();h.selectBookmarks(m);n.remove();var a;CKEDITOR.env.webkit&&(a=n.getFirst())&&a.is&&a.hasClass("Apple-style-span")&&
(n=a);b.removeListener("selectionChange",e);c(n.getHtml())},0)}}function B(){if("paste"==A.mainPasteEvent)return b.fire("beforePaste",{type:"auto",method:"paste"}),!1;b.focus();e();var a=b.focusManager;a.lock();if(b.editable().fire(A.mainPasteEvent)&&!h("paste"))return a.unlock(),!1;a.unlock();return!0}function r(a){if("wysiwyg"==b.mode)switch(a.data.keyCode){case CKEDITOR.CTRL+86:case CKEDITOR.SHIFT+45:a=b.editable();e();"paste"==A.mainPasteEvent&&a.fire("beforepaste");break;case CKEDITOR.CTRL+88:case CKEDITOR.SHIFT+
46:b.fire("saveSnapshot"),setTimeout(function(){b.fire("saveSnapshot")},50)}}function z(c){var d={type:"auto",method:"paste",dataTransfer:A.initPasteDataTransfer(c)};d.dataTransfer.cacheData();var f=!1!==b.fire("beforePaste",d);f&&A.canClipboardApiBeTrusted(d.dataTransfer,b)?(c.data.preventDefault(),setTimeout(function(){a(b,d)},0)):l(c,function(c){d.dataValue=c.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig,"");f&&a(b,d)})}function E(){if("wysiwyg"==b.mode){var a=y("paste");b.getCommand("cut").setState(y("cut"));
b.getCommand("copy").setState(y("copy"));b.getCommand("paste").setState(a);b.fire("pasteState",a)}}function y(a){if(F&&a in{paste:1,cut:1})return CKEDITOR.TRISTATE_DISABLED;if("paste"==a)return CKEDITOR.TRISTATE_OFF;a=b.getSelection();var c=a.getRanges();return a.getType()==CKEDITOR.SELECTION_NONE||1==c.length&&c[0].collapsed?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_OFF}var A=CKEDITOR.plugins.clipboard,C=0,G=0,F=0;(function(){b.on("key",r);b.on("contentDom",c);b.on("selectionChange",function(a){F=
a.data.selection.getRanges()[0].checkReadOnly();E()});b.contextMenu&&b.contextMenu.addListener(function(a,b){F=b.getRanges()[0].checkReadOnly();return{cut:y("cut"),copy:y("copy"),paste:y("paste")}})})();(function(){function a(c,d,f,e,k){var h=b.lang.clipboard[d];b.addCommand(d,f);b.ui.addButton&&b.ui.addButton(c,{label:h,command:d,toolbar:"clipboard,"+e});b.addMenuItems&&b.addMenuItem(d,{label:h,command:d,group:"clipboard",order:k})}a("Cut","cut",d("cut"),10,1);a("Copy","copy",d("copy"),20,4);a("Paste",
"paste",f(),30,8)})();b.getClipboardData=function(a,c){function d(a){a.removeListener();a.cancel();c(a.data)}function f(a){a.removeListener();a.cancel();m=!0;c({type:h,dataValue:a.data,method:"paste"})}function e(){this.customTitle=a&&a.title}var k=!1,h="auto",m=!1;c||(c=a,a=null);b.on("paste",d,null,null,0);b.on("beforePaste",function(a){a.removeListener();k=!0;h=a.data.type},null,null,1E3);!1===B()&&(b.removeListener("paste",d),k&&b.fire("pasteDialog",e)?(b.on("pasteDialogCommit",f),b.on("dialogHide",
function(a){a.removeListener();a.data.removeListener("pasteDialogCommit",f);setTimeout(function(){m||c(null)},10)})):c(null))}}function b(a){if(CKEDITOR.env.webkit){if(!a.match(/^[^<]*$/g)&&!a.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi))return"html"}else if(CKEDITOR.env.ie){if(!a.match(/^([^<]|<br( ?\/)?>)*$/gi)&&!a.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi))return"html"}else if(CKEDITOR.env.gecko){if(!a.match(/^([^<]|<br( ?\/)?>)*$/gi))return"html"}else return"html";return"htmlifiedtext"}
function c(a,b){function c(a){return CKEDITOR.tools.repeat("\x3c/p\x3e\x3cp\x3e",~~(a/2))+(1==a%2?"\x3cbr\x3e":"")}b=b.replace(/\s+/g," ").replace(/> +</g,"\x3e\x3c").replace(/<br ?\/>/gi,"\x3cbr\x3e");b=b.replace(/<\/?[A-Z]+>/g,function(a){return a.toLowerCase()});if(b.match(/^[^<]$/))return b;CKEDITOR.env.webkit&&-1<b.indexOf("\x3cdiv\x3e")&&(b=b.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g,"\x3cbr\x3e").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g,"\x3cdiv\x3e\x3c/div\x3e"),b.match(/<div>(<br>|)<\/div>/)&&
(b="\x3cp\x3e"+b.replace(/(<div>(<br>|)<\/div>)+/g,function(a){return c(a.split("\x3c/div\x3e\x3cdiv\x3e").length+1)})+"\x3c/p\x3e"),b=b.replace(/<\/div><div>/g,"\x3cbr\x3e"),b=b.replace(/<\/?div>/g,""));CKEDITOR.env.gecko&&a.enterMode!=CKEDITOR.ENTER_BR&&(CKEDITOR.env.gecko&&(b=b.replace(/^<br><br>$/,"\x3cbr\x3e")),-1<b.indexOf("\x3cbr\x3e\x3cbr\x3e")&&(b="\x3cp\x3e"+b.replace(/(<br>){2,}/g,function(a){return c(a.length/4)})+"\x3c/p\x3e"));return l(a,b)}function d(){function a(){var b={},c;for(c in CKEDITOR.dtd)"$"!=
c.charAt(0)&&"div"!=c&&"span"!=c&&(b[c]=1);return b}var b={};return{get:function(c){return"plain-text"==c?b.plainText||(b.plainText=new CKEDITOR.filter("br")):"semantic-content"==c?((c=b.semanticContent)||(c=new CKEDITOR.filter,c.allow({$1:{elements:a(),attributes:!0,styles:!1,classes:!1}}),c=b.semanticContent=c),c):c?new CKEDITOR.filter(c):null}}}function m(a,b,c){b=CKEDITOR.htmlParser.fragment.fromHtml(b);var d=new CKEDITOR.htmlParser.basicWriter;c.applyTo(b,!0,!1,a.activeEnterMode);b.writeHtml(d);
return d.getHtml()}function l(a,b){a.enterMode==CKEDITOR.ENTER_BR?b=b.replace(/(<\/p><p>)+/g,function(a){return CKEDITOR.tools.repeat("\x3cbr\x3e",a.length/7*2)}).replace(/<\/?p>/g,""):a.enterMode==CKEDITOR.ENTER_DIV&&(b=b.replace(/<(\/)?p>/g,"\x3c$1div\x3e"));return b}function f(a){a.data.preventDefault();a.data.$.dataTransfer.dropEffect="none"}function h(b){var c=CKEDITOR.plugins.clipboard;b.on("contentDom",function(){function d(c,f,e){f.select();a(b,{dataTransfer:e,method:"drop"},1);e.sourceEditor.fire("saveSnapshot");
e.sourceEditor.editable().extractHtmlFromRange(c);e.sourceEditor.getSelection().selectRanges([c]);e.sourceEditor.fire("saveSnapshot")}function f(d,e){d.select();a(b,{dataTransfer:e,method:"drop"},1);c.resetDragDataTransfer()}function e(a,c,d){var f={$:a.data.$,target:a.data.getTarget()};c&&(f.dragRange=c);d&&(f.dropRange=d);!1===b.fire(a.name,f)&&a.data.preventDefault()}function k(a){a.type!=CKEDITOR.NODE_ELEMENT&&(a=a.getParent());return a.getChildCount()}var h=b.editable(),m=CKEDITOR.plugins.clipboard.getDropTarget(b),
l=b.ui.space("top"),B=b.ui.space("bottom");c.preventDefaultDropOnElement(l);c.preventDefaultDropOnElement(B);h.attachListener(m,"dragstart",e);h.attachListener(b,"dragstart",c.resetDragDataTransfer,c,null,1);h.attachListener(b,"dragstart",function(a){c.initDragDataTransfer(a,b)},null,null,2);h.attachListener(b,"dragstart",function(){var a=c.dragRange=b.getSelection().getRanges()[0];CKEDITOR.env.ie&&10>CKEDITOR.env.version&&(c.dragStartContainerChildCount=a?k(a.startContainer):null,c.dragEndContainerChildCount=
a?k(a.endContainer):null)},null,null,100);h.attachListener(m,"dragend",e);h.attachListener(b,"dragend",c.initDragDataTransfer,c,null,1);h.attachListener(b,"dragend",c.resetDragDataTransfer,c,null,100);h.attachListener(m,"dragover",function(a){var b=a.data.getTarget();b&&b.is&&b.is("html")?a.data.preventDefault():CKEDITOR.env.ie&&CKEDITOR.plugins.clipboard.isFileApiSupported&&a.data.$.dataTransfer.types.contains("Files")&&a.data.preventDefault()});h.attachListener(m,"drop",function(a){a.data.preventDefault();
var d=a.data.getTarget();if(!d.isReadOnly()||d.type==CKEDITOR.NODE_ELEMENT&&d.is("html")){var d=c.getRangeAtDropPosition(a,b),f=c.dragRange;d&&e(a,f,d)}});h.attachListener(b,"drop",c.initDragDataTransfer,c,null,1);h.attachListener(b,"drop",function(a){if(a=a.data){var e=a.dropRange,k=a.dragRange,h=a.dataTransfer;h.getTransferType(b)==CKEDITOR.DATA_TRANSFER_INTERNAL?setTimeout(function(){c.internalDrop(k,e,h,b)},0):h.getTransferType(b)==CKEDITOR.DATA_TRANSFER_CROSS_EDITORS?d(k,e,h):f(e,h)}},null,null,
9999)})}CKEDITOR.plugins.add("clipboard",{requires:"dialog",init:function(a){var f,k=d();a.config.forcePasteAsPlainText?f="plain-text":a.config.pasteFilter?f=a.config.pasteFilter:!CKEDITOR.env.webkit||"pasteFilter"in a.config||(f="semantic-content");a.pasteFilter=k.get(f);e(a);h(a);CKEDITOR.dialog.add("paste",CKEDITOR.getUrl(this.path+"dialogs/paste.js"));a.on("paste",function(b){b.data.dataTransfer||(b.data.dataTransfer=new CKEDITOR.plugins.clipboard.dataTransfer);if(!b.data.dataValue){var c=b.data.dataTransfer,
d=c.getData("text/html");if(d)b.data.dataValue=d,b.data.type="html";else if(d=c.getData("text/plain"))b.data.dataValue=a.editable().transformPlainTextToHtml(d),b.data.type="text"}},null,null,1);a.on("paste",function(a){var b=a.data.dataValue,c=CKEDITOR.dtd.$block;-1<b.indexOf("Apple-")&&(b=b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi," "),"html"!=a.data.type&&(b=b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi,function(a,b){return b.replace(/\t/g,"\x26nbsp;\x26nbsp; \x26nbsp;")})),
-1<b.indexOf('\x3cbr class\x3d"Apple-interchange-newline"\x3e')&&(a.data.startsWithEOL=1,a.data.preSniffing="html",b=b.replace(/<br class="Apple-interchange-newline">/,"")),b=b.replace(/(<[^>]+) class="Apple-[^"]*"/gi,"$1"));if(b.match(/^<[^<]+cke_(editable|contents)/i)){var d,f,e=new CKEDITOR.dom.element("div");for(e.setHtml(b);1==e.getChildCount()&&(d=e.getFirst())&&d.type==CKEDITOR.NODE_ELEMENT&&(d.hasClass("cke_editable")||d.hasClass("cke_contents"));)e=f=d;f&&(b=f.getHtml().replace(/<br>$/i,
""))}CKEDITOR.env.ie?b=b.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g,function(b,d){return d.toLowerCase()in c?(a.data.preSniffing="html","\x3c"+d):b}):CKEDITOR.env.webkit?b=b.replace(/<\/(\w+)><div><br><\/div>$/,function(b,d){return d in c?(a.data.endsWithEOL=1,"\x3c/"+d+"\x3e"):b}):CKEDITOR.env.gecko&&(b=b.replace(/(\s)<br>$/,"$1"));a.data.dataValue=b},null,null,3);a.on("paste",function(d){d=d.data;var f=d.type,e=d.dataValue,h,l=a.config.clipboard_defaultContentType||"html",n=d.dataTransfer.getTransferType(a);
h="html"==f||"html"==d.preSniffing?"html":b(e);"htmlifiedtext"==h&&(e=c(a.config,e));"text"==f&&"html"==h?e=m(a,e,k.get("plain-text")):n==CKEDITOR.DATA_TRANSFER_EXTERNAL&&a.pasteFilter&&!d.dontFilter&&(e=m(a,e,a.pasteFilter));d.startsWithEOL&&(e='\x3cbr data-cke-eol\x3d"1"\x3e'+e);d.endsWithEOL&&(e+='\x3cbr data-cke-eol\x3d"1"\x3e');"auto"==f&&(f="html"==h||"html"==l?"html":"text");d.type=f;d.dataValue=e;delete d.preSniffing;delete d.startsWithEOL;delete d.endsWithEOL},null,null,6);a.on("paste",function(b){b=
b.data;b.dataValue&&(a.insertHtml(b.dataValue,b.type,b.range),setTimeout(function(){a.fire("afterPaste")},0))},null,null,1E3);a.on("pasteDialog",function(b){setTimeout(function(){a.openDialog("paste",b.data)},0)})}});CKEDITOR.plugins.clipboard={isCustomCopyCutSupported:!CKEDITOR.env.ie&&!CKEDITOR.env.iOS,isCustomDataTypesSupported:!CKEDITOR.env.ie,isFileApiSupported:!CKEDITOR.env.ie||9<CKEDITOR.env.version,mainPasteEvent:CKEDITOR.env.ie&&!CKEDITOR.env.edge?"beforepaste":"paste",canClipboardApiBeTrusted:function(a,
b){return a.getTransferType(b)!=CKEDITOR.DATA_TRANSFER_EXTERNAL||CKEDITOR.env.chrome&&!a.isEmpty()||CKEDITOR.env.gecko&&(a.getData("text/html")||a.getFilesCount())?!0:!1},getDropTarget:function(a){var b=a.editable();return CKEDITOR.env.ie&&9>CKEDITOR.env.version||b.isInline()?b:a.document},fixSplitNodesAfterDrop:function(a,b,c,d){function f(a,c,d){var e=a;e.type==CKEDITOR.NODE_TEXT&&(e=a.getParent());if(e.equals(c)&&d!=c.getChildCount())return a=b.startContainer.getChild(b.startOffset-1),c=b.startContainer.getChild(b.startOffset),
a&&a.type==CKEDITOR.NODE_TEXT&&c&&c.type==CKEDITOR.NODE_TEXT&&(d=a.getLength(),a.setText(a.getText()+c.getText()),c.remove(),b.setStart(a,d),b.collapse(!0)),!0}var e=b.startContainer;"number"==typeof d&&"number"==typeof c&&e.type==CKEDITOR.NODE_ELEMENT&&(f(a.startContainer,e,c)||f(a.endContainer,e,d))},isDropRangeAffectedByDragRange:function(a,b){var c=b.startContainer,d=b.endOffset;return a.endContainer.equals(c)&&a.endOffset<=d||a.startContainer.getParent().equals(c)&&a.startContainer.getIndex()<
d||a.endContainer.getParent().equals(c)&&a.endContainer.getIndex()<d?!0:!1},internalDrop:function(b,c,d,f){var e=CKEDITOR.plugins.clipboard,k=f.editable(),h,m;f.fire("saveSnapshot");f.fire("lockSnapshot",{dontUpdate:1});CKEDITOR.env.ie&&10>CKEDITOR.env.version&&this.fixSplitNodesAfterDrop(b,c,e.dragStartContainerChildCount,e.dragEndContainerChildCount);(m=this.isDropRangeAffectedByDragRange(b,c))||(h=b.createBookmark(!1));e=c.clone().createBookmark(!1);m&&(h=b.createBookmark(!1));b=h.startNode;c=
h.endNode;m=e.startNode;c&&b.getPosition(m)&CKEDITOR.POSITION_PRECEDING&&c.getPosition(m)&CKEDITOR.POSITION_FOLLOWING&&m.insertBefore(b);b=f.createRange();b.moveToBookmark(h);k.extractHtmlFromRange(b,1);c=f.createRange();c.moveToBookmark(e);a(f,{dataTransfer:d,method:"drop",range:c},1);f.fire("unlockSnapshot")},getRangeAtDropPosition:function(a,b){var c=a.data.$,d=c.clientX,f=c.clientY,e=b.getSelection(!0).getRanges()[0],h=b.createRange();if(a.data.testRange)return a.data.testRange;if(document.caretRangeFromPoint)c=
b.document.$.caretRangeFromPoint(d,f),h.setStart(CKEDITOR.dom.node(c.startContainer),c.startOffset),h.collapse(!0);else if(c.rangeParent)h.setStart(CKEDITOR.dom.node(c.rangeParent),c.rangeOffset),h.collapse(!0);else{if(CKEDITOR.env.ie&&8<CKEDITOR.env.version&&e&&b.editable().hasFocus)return e;if(document.body.createTextRange){b.focus();c=b.document.getBody().$.createTextRange();try{for(var k=!1,m=0;20>m&&!k;m++){if(!k)try{c.moveToPoint(d,f-m),k=!0}catch(l){}if(!k)try{c.moveToPoint(d,f+m),k=!0}catch(r){}}if(k){var z=
"cke-temp-"+(new Date).getTime();c.pasteHTML('\x3cspan id\x3d"'+z+'"\x3e​\x3c/span\x3e');var E=b.document.getById(z);h.moveToPosition(E,CKEDITOR.POSITION_BEFORE_START);E.remove()}else{var y=b.document.$.elementFromPoint(d,f),A=new CKEDITOR.dom.element(y),C;if(A.equals(b.editable())||"html"==A.getName())return e&&e.startContainer&&!e.startContainer.equals(b.editable())?e:null;C=A.getClientRect();d<C.left?h.setStartAt(A,CKEDITOR.POSITION_AFTER_START):h.setStartAt(A,CKEDITOR.POSITION_BEFORE_END);h.collapse(!0)}}catch(G){return null}}else return null}return h},
initDragDataTransfer:function(a,b){var c=a.data.$?a.data.$.dataTransfer:null,d=new this.dataTransfer(c,b);c?this.dragData&&d.id==this.dragData.id?d=this.dragData:this.dragData=d:this.dragData?d=this.dragData:this.dragData=d;a.data.dataTransfer=d},resetDragDataTransfer:function(){this.dragData=null},initPasteDataTransfer:function(a,b){if(this.isCustomCopyCutSupported&&a&&a.data&&a.data.$){var c=new this.dataTransfer(a.data.$.clipboardData,b);this.copyCutData&&c.id==this.copyCutData.id?(c=this.copyCutData,
c.$=a.data.$.clipboardData):this.copyCutData=c;return c}return new this.dataTransfer(null,b)},preventDefaultDropOnElement:function(a){a&&a.on("dragover",f)}};var k=CKEDITOR.plugins.clipboard.isCustomDataTypesSupported?"cke/id":"Text";CKEDITOR.plugins.clipboard.dataTransfer=function(a,b){a&&(this.$=a);this._={metaRegExp:/^<meta.*?>/i,bodyRegExp:/<body(?:[\s\S]*?)>([\s\S]*)<\/body>/i,fragmentRegExp:/\x3c!--(?:Start|End)Fragment--\x3e/g,data:{},files:[],normalizeType:function(a){a=a.toLowerCase();return"text"==
a||"text/plain"==a?"Text":"url"==a?"URL":a}};this.id=this.getData(k);this.id||(this.id="Text"==k?"":"cke-"+CKEDITOR.tools.getUniqueId());if("Text"!=k)try{this.$.setData(k,this.id)}catch(c){}b&&(this.sourceEditor=b,this.setData("text/html",b.getSelectedHtml(1)),"Text"==k||this.getData("text/plain")||this.setData("text/plain",b.getSelection().getSelectedText()))};CKEDITOR.DATA_TRANSFER_INTERNAL=1;CKEDITOR.DATA_TRANSFER_CROSS_EDITORS=2;CKEDITOR.DATA_TRANSFER_EXTERNAL=3;CKEDITOR.plugins.clipboard.dataTransfer.prototype=
{getData:function(a){a=this._.normalizeType(a);var b=this._.data[a];if(void 0===b||null===b||""===b)try{b=this.$.getData(a)}catch(c){}if(void 0===b||null===b||""===b)b="";"text/html"==a?(b=b.replace(this._.metaRegExp,""),(a=this._.bodyRegExp.exec(b))&&a.length&&(b=a[1],b=b.replace(this._.fragmentRegExp,""))):"Text"==a&&CKEDITOR.env.gecko&&this.getFilesCount()&&"file://"==b.substring(0,7)&&(b="");return b},setData:function(a,b){a=this._.normalizeType(a);this._.data[a]=b;if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported||
"URL"==a||"Text"==a){"Text"==k&&"Text"==a&&(this.id=b);try{this.$.setData(a,b)}catch(c){}}},getTransferType:function(a){return this.sourceEditor?this.sourceEditor==a?CKEDITOR.DATA_TRANSFER_INTERNAL:CKEDITOR.DATA_TRANSFER_CROSS_EDITORS:CKEDITOR.DATA_TRANSFER_EXTERNAL},cacheData:function(){function a(c){c=b._.normalizeType(c);var d=b.getData(c);d&&(b._.data[c]=d)}if(this.$){var b=this,c,d;if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported){if(this.$.types)for(c=0;c<this.$.types.length;c++)a(this.$.types[c])}else a("Text"),
a("URL");d=this._getImageFromClipboard();if(this.$&&this.$.files||d){this._.files=[];for(c=0;c<this.$.files.length;c++)this._.files.push(this.$.files[c]);0===this._.files.length&&d&&this._.files.push(d)}}},getFilesCount:function(){return this._.files.length?this._.files.length:this.$&&this.$.files&&this.$.files.length?this.$.files.length:this._getImageFromClipboard()?1:0},getFile:function(a){return this._.files.length?this._.files[a]:this.$&&this.$.files&&this.$.files.length?this.$.files[a]:0===a?
this._getImageFromClipboard():void 0},isEmpty:function(){var a={},b;if(this.getFilesCount())return!1;for(b in this._.data)a[b]=1;if(this.$)if(CKEDITOR.plugins.clipboard.isCustomDataTypesSupported){if(this.$.types)for(var c=0;c<this.$.types.length;c++)a[this.$.types[c]]=1}else a.Text=1,a.URL=1;"Text"!=k&&(a[k]=0);for(b in a)if(a[b]&&""!==this.getData(b))return!1;return!0},_getImageFromClipboard:function(){var a;if(this.$&&this.$.items&&this.$.items[0])try{if((a=this.$.items[0].getAsFile())&&a.type)return a}catch(b){}}}}(),
function(){CKEDITOR.plugins.add("panel",{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_PANEL,CKEDITOR.ui.panel.handler)}});CKEDITOR.UI_PANEL="panel";CKEDITOR.ui.panel=function(a,b){b&&CKEDITOR.tools.extend(this,b);CKEDITOR.tools.extend(this,{className:"",css:[]});this.id=CKEDITOR.tools.getNextId();this.document=a;this.isFramed=this.forceIFrame||this.css.length;this._={blocks:{}}};CKEDITOR.ui.panel.handler={create:function(a){return new CKEDITOR.ui.panel(a)}};var a=CKEDITOR.addTemplate("panel",
'\x3cdiv lang\x3d"{langCode}" id\x3d"{id}" dir\x3d{dir} class\x3d"cke cke_reset_all {editorId} cke_panel cke_panel {cls} cke_{dir}" style\x3d"z-index:{z-index}" role\x3d"presentation"\x3e{frame}\x3c/div\x3e'),e=CKEDITOR.addTemplate("panel-frame",'\x3ciframe id\x3d"{id}" class\x3d"cke_panel_frame" role\x3d"presentation" frameborder\x3d"0" src\x3d"{src}"\x3e\x3c/iframe\x3e'),b=CKEDITOR.addTemplate("panel-frame-inner",'\x3c!DOCTYPE html\x3e\x3chtml class\x3d"cke_panel_container {env}" dir\x3d"{dir}" lang\x3d"{langCode}"\x3e\x3chead\x3e{css}\x3c/head\x3e\x3cbody class\x3d"cke_{dir}" style\x3d"margin:0;padding:0" onload\x3d"{onload}"\x3e\x3c/body\x3e\x3c/html\x3e');
CKEDITOR.ui.panel.prototype={render:function(c,d){this.getHolderElement=function(){var a=this._.holder;if(!a){if(this.isFramed){var a=this.document.getById(this.id+"_frame"),c=a.getParent(),a=a.getFrameDocument();CKEDITOR.env.iOS&&c.setStyles({overflow:"scroll","-webkit-overflow-scrolling":"touch"});c=CKEDITOR.tools.addFunction(CKEDITOR.tools.bind(function(){this.isLoaded=!0;if(this.onLoad)this.onLoad()},this));a.write(b.output(CKEDITOR.tools.extend({css:CKEDITOR.tools.buildStyleHtml(this.css),onload:"window.parent.CKEDITOR.tools.callFunction("+
c+");"},m)));a.getWindow().$.CKEDITOR=CKEDITOR;a.on("keydown",function(a){var b=a.data.getKeystroke(),c=this.document.getById(this.id).getAttribute("dir");this._.onKeyDown&&!1===this._.onKeyDown(b)?a.data.preventDefault():(27==b||b==("rtl"==c?39:37))&&this.onEscape&&!1===this.onEscape(b)&&a.data.preventDefault()},this);a=a.getBody();a.unselectable();CKEDITOR.env.air&&CKEDITOR.tools.callFunction(c)}else a=this.document.getById(this.id);this._.holder=a}return a};var m={editorId:c.id,id:this.id,langCode:c.langCode,
dir:c.lang.dir,cls:this.className,frame:"",env:CKEDITOR.env.cssClass,"z-index":c.config.baseFloatZIndex+1};if(this.isFramed){var l=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie?"javascript:void(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"}())":"";m.frame=e.output({id:this.id+"_frame",src:l})}l=a.output(m);d&&d.push(l);return l},addBlock:function(a,b){b=this._.blocks[a]=b instanceof CKEDITOR.ui.panel.block?b:new CKEDITOR.ui.panel.block(this.getHolderElement(),
b);this._.currentBlock||this.showBlock(a);return b},getBlock:function(a){return this._.blocks[a]},showBlock:function(a){a=this._.blocks[a];var b=this._.currentBlock,e=!this.forceIFrame||CKEDITOR.env.ie?this._.holder:this.document.getById(this.id+"_frame");b&&b.hide();this._.currentBlock=a;CKEDITOR.fire("ariaWidget",e);a._.focusIndex=-1;this._.onKeyDown=a.onKeyDown&&CKEDITOR.tools.bind(a.onKeyDown,a);a.show();return a},destroy:function(){this.element&&this.element.remove()}};CKEDITOR.ui.panel.block=
CKEDITOR.tools.createClass({$:function(a,b){this.element=a.append(a.getDocument().createElement("div",{attributes:{tabindex:-1,"class":"cke_panel_block"},styles:{display:"none"}}));b&&CKEDITOR.tools.extend(this,b);this.element.setAttributes({role:this.attributes.role||"presentation","aria-label":this.attributes["aria-label"],title:this.attributes.title||this.attributes["aria-label"]});this.keys={};this._.focusIndex=-1;this.element.disableContextMenu()},_:{markItem:function(a){-1!=a&&(a=this.element.getElementsByTag("a").getItem(this._.focusIndex=
a),CKEDITOR.env.webkit&&a.getDocument().getWindow().focus(),a.focus(),this.onMark&&this.onMark(a))}},proto:{show:function(){this.element.setStyle("display","")},hide:function(){this.onHide&&!0===this.onHide.call(this)||this.element.setStyle("display","none")},onKeyDown:function(a,b){var e=this.keys[a];switch(e){case "next":for(var l=this._.focusIndex,e=this.element.getElementsByTag("a"),f;f=e.getItem(++l);)if(f.getAttribute("_cke_focus")&&f.$.offsetWidth){this._.focusIndex=l;f.focus();break}return f||
b?!1:(this._.focusIndex=-1,this.onKeyDown(a,1));case "prev":l=this._.focusIndex;for(e=this.element.getElementsByTag("a");0<l&&(f=e.getItem(--l));){if(f.getAttribute("_cke_focus")&&f.$.offsetWidth){this._.focusIndex=l;f.focus();break}f=null}return f||b?!1:(this._.focusIndex=e.count(),this.onKeyDown(a,1));case "click":case "mouseup":return l=this._.focusIndex,(f=0<=l&&this.element.getElementsByTag("a").getItem(l))&&(f.$[e]?f.$[e]():f.$["on"+e]()),!1}return!0}}})}(),CKEDITOR.plugins.add("floatpanel",
{requires:"panel"}),function(){function a(a,c,d,m,l){l=CKEDITOR.tools.genKey(c.getUniqueId(),d.getUniqueId(),a.lang.dir,a.uiColor||"",m.css||"",l||"");var f=e[l];f||(f=e[l]=new CKEDITOR.ui.panel(c,m),f.element=d.append(CKEDITOR.dom.element.createFromHtml(f.render(a),c)),f.element.setStyles({display:"none",position:"absolute"}));return f}var e={};CKEDITOR.ui.floatPanel=CKEDITOR.tools.createClass({$:function(b,c,d,e){function l(){g.hide()}d.forceIFrame=1;d.toolbarRelated&&b.elementMode==CKEDITOR.ELEMENT_MODE_INLINE&&
(c=CKEDITOR.document.getById("cke_"+b.name));var f=c.getDocument();e=a(b,f,c,d,e||0);var h=e.element,k=h.getFirst(),g=this;h.disableContextMenu();this.element=h;this._={editor:b,panel:e,parentElement:c,definition:d,document:f,iframe:k,children:[],dir:b.lang.dir,showBlockParams:null};b.on("mode",l);b.on("resize",l);f.getWindow().on("resize",function(){this.reposition()},this)},proto:{addBlock:function(a,c){return this._.panel.addBlock(a,c)},addListBlock:function(a,c){return this._.panel.addListBlock(a,
c)},getBlock:function(a){return this._.panel.getBlock(a)},showBlock:function(a,c,d,e,l,f){var h=this._.panel,k=h.showBlock(a);this._.showBlockParams=[].slice.call(arguments);this.allowBlur(!1);var g=this._.editor.editable();this._.returnFocus=g.hasFocus?g:new CKEDITOR.dom.element(CKEDITOR.document.$.activeElement);this._.hideTimeout=0;var n=this.element,g=this._.iframe,g=CKEDITOR.env.ie&&!CKEDITOR.env.edge?g:new CKEDITOR.dom.window(g.$.contentWindow),u=n.getDocument(),q=this._.parentElement.getPositionedAncestor(),
v=c.getDocumentPosition(u),u=q?q.getDocumentPosition(u):{x:0,y:0},t="rtl"==this._.dir,p=v.x+(e||0)-u.x,w=v.y+(l||0)-u.y;!t||1!=d&&4!=d?t||2!=d&&3!=d||(p+=c.$.offsetWidth-1):p+=c.$.offsetWidth;if(3==d||4==d)w+=c.$.offsetHeight-1;this._.panel._.offsetParentId=c.getId();n.setStyles({top:w+"px",left:0,display:""});n.setOpacity(0);n.getFirst().removeStyle("width");this._.editor.focusManager.add(g);this._.blurSet||(CKEDITOR.event.useCapture=!0,g.on("blur",function(a){function b(){delete this._.returnFocus;
this.hide()}this.allowBlur()&&a.data.getPhase()==CKEDITOR.EVENT_PHASE_AT_TARGET&&this.visible&&!this._.activeChild&&(CKEDITOR.env.iOS?this._.hideTimeout||(this._.hideTimeout=CKEDITOR.tools.setTimeout(b,0,this)):b.call(this))},this),g.on("focus",function(){this._.focused=!0;this.hideChild();this.allowBlur(!0)},this),CKEDITOR.env.iOS&&(g.on("touchstart",function(){clearTimeout(this._.hideTimeout)},this),g.on("touchend",function(){this._.hideTimeout=0;this.focus()},this)),CKEDITOR.event.useCapture=!1,
this._.blurSet=1);h.onEscape=CKEDITOR.tools.bind(function(a){if(this.onEscape&&!1===this.onEscape(a))return!1},this);CKEDITOR.tools.setTimeout(function(){var a=CKEDITOR.tools.bind(function(){var a=n;a.removeStyle("width");if(k.autoSize){var b=k.element.getDocument(),b=(CKEDITOR.env.webkit?k.element:b.getBody()).$.scrollWidth;CKEDITOR.env.ie&&CKEDITOR.env.quirks&&0<b&&(b+=(a.$.offsetWidth||0)-(a.$.clientWidth||0)+3);a.setStyle("width",b+10+"px");b=k.element.$.scrollHeight;CKEDITOR.env.ie&&CKEDITOR.env.quirks&&
0<b&&(b+=(a.$.offsetHeight||0)-(a.$.clientHeight||0)+3);a.setStyle("height",b+"px");h._.currentBlock.element.setStyle("display","none").removeStyle("display")}else a.removeStyle("height");t&&(p-=n.$.offsetWidth);n.setStyle("left",p+"px");var b=h.element.getWindow(),a=n.$.getBoundingClientRect(),b=b.getViewPaneSize(),c=a.width||a.right-a.left,d=a.height||a.bottom-a.top,e=t?a.right:b.width-a.left,g=t?b.width-a.right:a.left;t?e<c&&(p=g>c?p+c:b.width>c?p-a.left:p-a.right+b.width):e<c&&(p=g>c?p-c:b.width>
c?p-a.right+b.width:p-a.left);c=a.top;b.height-a.top<d&&(w=c>d?w-d:b.height>d?w-a.bottom+b.height:w-a.top);CKEDITOR.env.ie&&(b=a=new CKEDITOR.dom.element(n.$.offsetParent),"html"==b.getName()&&(b=b.getDocument().getBody()),"rtl"==b.getComputedStyle("direction")&&(p=CKEDITOR.env.ie8Compat?p-2*n.getDocument().getDocumentElement().$.scrollLeft:p-(a.$.scrollWidth-a.$.clientWidth)));var a=n.getFirst(),m;(m=a.getCustomData("activePanel"))&&m.onHide&&m.onHide.call(this,1);a.setCustomData("activePanel",this);
n.setStyles({top:w+"px",left:p+"px"});n.setOpacity(1);f&&f()},this);h.isLoaded?a():h.onLoad=a;CKEDITOR.tools.setTimeout(function(){var a=CKEDITOR.env.webkit&&CKEDITOR.document.getWindow().getScrollPosition().y;this.focus();k.element.focus();CKEDITOR.env.webkit&&(CKEDITOR.document.getBody().$.scrollTop=a);this.allowBlur(!0);this._.editor.fire("panelShow",this)},0,this)},CKEDITOR.env.air?200:0,this);this.visible=1;this.onShow&&this.onShow.call(this)},reposition:function(){var a=this._.showBlockParams;
this.visible&&this._.showBlockParams&&(this.hide(),this.showBlock.apply(this,a))},focus:function(){if(CKEDITOR.env.webkit){var a=CKEDITOR.document.getActive();a&&!a.equals(this._.iframe)&&a.$.blur()}(this._.lastFocused||this._.iframe.getFrameDocument().getWindow()).focus()},blur:function(){var a=this._.iframe.getFrameDocument().getActive();a&&a.is("a")&&(this._.lastFocused=a)},hide:function(a){if(this.visible&&(!this.onHide||!0!==this.onHide.call(this))){this.hideChild();CKEDITOR.env.gecko&&this._.iframe.getFrameDocument().$.activeElement.blur();
this.element.setStyle("display","none");this.visible=0;this.element.getFirst().removeCustomData("activePanel");if(a=a&&this._.returnFocus)CKEDITOR.env.webkit&&a.type&&a.getWindow().$.focus(),a.focus();delete this._.lastFocused;this._.showBlockParams=null;this._.editor.fire("panelHide",this)}},allowBlur:function(a){var c=this._.panel;void 0!==a&&(c.allowBlur=a);return c.allowBlur},showAsChild:function(a,c,d,e,l,f){if(this._.activeChild!=a||a._.panel._.offsetParentId!=d.getId())this.hideChild(),a.onHide=
CKEDITOR.tools.bind(function(){CKEDITOR.tools.setTimeout(function(){this._.focused||this.hide()},0,this)},this),this._.activeChild=a,this._.focused=!1,a.showBlock(c,d,e,l,f),this.blur(),(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)&&setTimeout(function(){a.element.getChild(0).$.style.cssText+=""},100)},hideChild:function(a){var c=this._.activeChild;c&&(delete c.onHide,delete this._.activeChild,c.hide(),a&&this.focus())}}});CKEDITOR.on("instanceDestroyed",function(){var a=CKEDITOR.tools.isEmpty(CKEDITOR.instances),
c;for(c in e){var d=e[c];a?d.destroy():d.element.hide()}a&&(e={})})}(),CKEDITOR.plugins.add("menu",{requires:"floatpanel",beforeInit:function(a){for(var e=a.config.menu_groups.split(","),b=a._.menuGroups={},c=a._.menuItems={},d=0;d<e.length;d++)b[e[d]]=d+1;a.addMenuGroup=function(a,c){b[a]=c||100};a.addMenuItem=function(a,d){b[d.group]&&(c[a]=new CKEDITOR.menuItem(this,a,d))};a.addMenuItems=function(a){for(var b in a)this.addMenuItem(b,a[b])};a.getMenuItem=function(a){return c[a]};a.removeMenuItem=
function(a){delete c[a]}}}),function(){function a(a){a.sort(function(a,b){return a.group<b.group?-1:a.group>b.group?1:a.order<b.order?-1:a.order>b.order?1:0})}var e='\x3cspan class\x3d"cke_menuitem"\x3e\x3ca id\x3d"{id}" class\x3d"cke_menubutton cke_menubutton__{name} cke_menubutton_{state} {cls}" href\x3d"{href}" title\x3d"{title}" tabindex\x3d"-1"_cke_focus\x3d1 hidefocus\x3d"true" role\x3d"{role}" aria-haspopup\x3d"{hasPopup}" aria-disabled\x3d"{disabled}" {ariaChecked}';CKEDITOR.env.gecko&&CKEDITOR.env.mac&&
(e+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(e+=' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var e=e+(' onmouseover\x3d"CKEDITOR.tools.callFunction({hoverFn},{index});" onmouseout\x3d"CKEDITOR.tools.callFunction({moveOutFn},{index});" '+(CKEDITOR.env.ie?'onclick\x3d"return false;" onmouseup':"onclick")+'\x3d"CKEDITOR.tools.callFunction({clickFn},{index}); return false;"\x3e'),b=CKEDITOR.addTemplate("menuItem",e+'\x3cspan class\x3d"cke_menubutton_inner"\x3e\x3cspan class\x3d"cke_menubutton_icon"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{iconStyle}"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"cke_menubutton_label"\x3e{label}\x3c/span\x3e{arrowHtml}\x3c/span\x3e\x3c/a\x3e\x3c/span\x3e'),
c=CKEDITOR.addTemplate("menuArrow",'\x3cspan class\x3d"cke_menuarrow"\x3e\x3cspan\x3e{label}\x3c/span\x3e\x3c/span\x3e');CKEDITOR.menu=CKEDITOR.tools.createClass({$:function(a,b){b=this._.definition=b||{};this.id=CKEDITOR.tools.getNextId();this.editor=a;this.items=[];this._.listeners=[];this._.level=b.level||1;var c=CKEDITOR.tools.extend({},b.panel,{css:[CKEDITOR.skin.getPath("editor")],level:this._.level-1,block:{}}),f=c.block.attributes=c.attributes||{};!f.role&&(f.role="menu");this._.panelDefinition=
c},_:{onShow:function(){var a=this.editor.getSelection(),b=a&&a.getStartElement(),c=this.editor.elementPath(),f=this._.listeners;this.removeAll();for(var e=0;e<f.length;e++){var k=f[e](b,a,c);if(k)for(var g in k){var n=this.editor.getMenuItem(g);!n||n.command&&!this.editor.getCommand(n.command).state||(n.state=k[g],this.add(n))}}},onClick:function(a){this.hide();if(a.onClick)a.onClick();else a.command&&this.editor.execCommand(a.command)},onEscape:function(a){var b=this.parent;b?b._.panel.hideChild(1):
27==a&&this.hide(1);return!1},onHide:function(){this.onHide&&this.onHide()},showSubMenu:function(a){var b=this._.subMenu,c=this.items[a];if(c=c.getItems&&c.getItems()){b?b.removeAll():(b=this._.subMenu=new CKEDITOR.menu(this.editor,CKEDITOR.tools.extend({},this._.definition,{level:this._.level+1},!0)),b.parent=this,b._.onClick=CKEDITOR.tools.bind(this._.onClick,this));for(var f in c){var e=this.editor.getMenuItem(f);e&&(e.state=c[f],b.add(e))}var k=this._.panel.getBlock(this.id).element.getDocument().getById(this.id+
String(a));setTimeout(function(){b.show(k,2)},0)}else this._.panel.hideChild(1)}},proto:{add:function(a){a.order||(a.order=this.items.length);this.items.push(a)},removeAll:function(){this.items=[]},show:function(b,c,e,f){if(!this.parent&&(this._.onShow(),!this.items.length))return;c=c||("rtl"==this.editor.lang.dir?2:1);var h=this.items,k=this.editor,g=this._.panel,n=this._.element;if(!g){g=this._.panel=new CKEDITOR.ui.floatPanel(this.editor,CKEDITOR.document.getBody(),this._.panelDefinition,this._.level);
g.onEscape=CKEDITOR.tools.bind(function(a){if(!1===this._.onEscape(a))return!1},this);g.onShow=function(){g._.panel.getHolderElement().getParent().addClass("cke").addClass("cke_reset_all")};g.onHide=CKEDITOR.tools.bind(function(){this._.onHide&&this._.onHide()},this);n=g.addBlock(this.id,this._.panelDefinition.block);n.autoSize=!0;var u=n.keys;u[40]="next";u[9]="next";u[38]="prev";u[CKEDITOR.SHIFT+9]="prev";u["rtl"==k.lang.dir?37:39]=CKEDITOR.env.ie?"mouseup":"click";u[32]=CKEDITOR.env.ie?"mouseup":
"click";CKEDITOR.env.ie&&(u[13]="mouseup");n=this._.element=n.element;u=n.getDocument();u.getBody().setStyle("overflow","hidden");u.getElementsByTag("html").getItem(0).setStyle("overflow","hidden");this._.itemOverFn=CKEDITOR.tools.addFunction(function(a){clearTimeout(this._.showSubTimeout);this._.showSubTimeout=CKEDITOR.tools.setTimeout(this._.showSubMenu,k.config.menu_subMenuDelay||400,this,[a])},this);this._.itemOutFn=CKEDITOR.tools.addFunction(function(){clearTimeout(this._.showSubTimeout)},this);
this._.itemClickFn=CKEDITOR.tools.addFunction(function(a){var b=this.items[a];if(b.state==CKEDITOR.TRISTATE_DISABLED)this.hide(1);else if(b.getItems)this._.showSubMenu(a);else this._.onClick(b)},this)}a(h);for(var u=k.elementPath(),u=['\x3cdiv class\x3d"cke_menu'+(u&&u.direction()!=k.lang.dir?" cke_mixed_dir_content":"")+'" role\x3d"presentation"\x3e'],q=h.length,v=q&&h[0].group,t=0;t<q;t++){var p=h[t];v!=p.group&&(u.push('\x3cdiv class\x3d"cke_menuseparator" role\x3d"separator"\x3e\x3c/div\x3e'),
v=p.group);p.render(this,t,u)}u.push("\x3c/div\x3e");n.setHtml(u.join(""));CKEDITOR.ui.fire("ready",this);this.parent?this.parent._.panel.showAsChild(g,this.id,b,c,e,f):g.showBlock(this.id,b,c,e,f);k.fire("menuShow",[g])},addListener:function(a){this._.listeners.push(a)},hide:function(a){this._.onHide&&this._.onHide();this._.panel&&this._.panel.hide(a)}}});CKEDITOR.menuItem=CKEDITOR.tools.createClass({$:function(a,b,c){CKEDITOR.tools.extend(this,c,{order:0,className:"cke_menubutton__"+b});this.group=
a._.menuGroups[this.group];this.editor=a;this.name=b},proto:{render:function(a,e,l){var f=a.id+String(e),h="undefined"==typeof this.state?CKEDITOR.TRISTATE_OFF:this.state,k="",g=h==CKEDITOR.TRISTATE_ON?"on":h==CKEDITOR.TRISTATE_DISABLED?"disabled":"off";this.role in{menuitemcheckbox:1,menuitemradio:1}&&(k=' aria-checked\x3d"'+(h==CKEDITOR.TRISTATE_ON?"true":"false")+'"');var n=this.getItems,u="\x26#"+("rtl"==this.editor.lang.dir?"9668":"9658")+";",q=this.name;this.icon&&!/\./.test(this.icon)&&(q=
this.icon);a={id:f,name:this.name,iconName:q,label:this.label,cls:this.className||"",state:g,hasPopup:n?"true":"false",disabled:h==CKEDITOR.TRISTATE_DISABLED,title:this.label,href:"javascript:void('"+(this.label||"").replace("'")+"')",hoverFn:a._.itemOverFn,moveOutFn:a._.itemOutFn,clickFn:a._.itemClickFn,index:e,iconStyle:CKEDITOR.skin.getIconStyle(q,"rtl"==this.editor.lang.dir,q==this.icon?null:this.icon,this.iconOffset),arrowHtml:n?c.output({label:u}):"",role:this.role?this.role:"menuitem",ariaChecked:k};
b.output(a,l)}}})}(),CKEDITOR.config.menu_groups="clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div",CKEDITOR.plugins.add("contextmenu",{requires:"menu",onLoad:function(){CKEDITOR.plugins.contextMenu=CKEDITOR.tools.createClass({base:CKEDITOR.menu,$:function(a){this.base.call(this,a,{panel:{className:"cke_menu_panel",attributes:{"aria-label":a.lang.contextmenu.options}}})},proto:{addTarget:function(a,
e){a.on("contextmenu",function(a){a=a.data;var c=CKEDITOR.env.webkit?b:CKEDITOR.env.mac?a.$.metaKey:a.$.ctrlKey;if(!e||!c){a.preventDefault();if(CKEDITOR.env.mac&&CKEDITOR.env.webkit){var c=this.editor,l=(new CKEDITOR.dom.elementPath(a.getTarget(),c.editable())).contains(function(a){return a.hasAttribute("contenteditable")},!0);l&&"false"==l.getAttribute("contenteditable")&&c.getSelection().fake(l)}var l=a.getTarget().getDocument(),f=a.getTarget().getDocument().getDocumentElement(),c=!l.equals(CKEDITOR.document),
l=l.getWindow().getScrollPosition(),h=c?a.$.clientX:a.$.pageX||l.x+a.$.clientX,k=c?a.$.clientY:a.$.pageY||l.y+a.$.clientY;CKEDITOR.tools.setTimeout(function(){this.open(f,null,h,k)},CKEDITOR.env.ie?200:0,this)}},this);if(CKEDITOR.env.webkit){var b,c=function(){b=0};a.on("keydown",function(a){b=CKEDITOR.env.mac?a.data.$.metaKey:a.data.$.ctrlKey});a.on("keyup",c);a.on("contextmenu",c)}},open:function(a,e,b,c){this.editor.focus();a=a||CKEDITOR.document.getDocumentElement();this.editor.selectionChange(1);
this.show(a,e,b,c)}}})},beforeInit:function(a){var e=a.contextMenu=new CKEDITOR.plugins.contextMenu(a);a.on("contentDom",function(){e.addTarget(a.editable(),!1!==a.config.browserContextMenuOnCtrl)});a.addCommand("contextMenu",{exec:function(){a.contextMenu.open(a.document.getBody())}});a.setKeystroke(CKEDITOR.SHIFT+121,"contextMenu");a.setKeystroke(CKEDITOR.CTRL+CKEDITOR.SHIFT+121,"contextMenu")}}),function(){function a(a,b){function l(b){b=g.list[b];if(b.equals(a.editable())||"true"==b.getAttribute("contenteditable")){var c=
a.createRange();c.selectNodeContents(b);c.select()}else a.getSelection().selectElement(b);a.focus()}function f(){k&&k.setHtml('\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e');delete g.list}var h=a.ui.spaceId("path"),k,g=a._.elementsPath,n=g.idBase;b.html+='\x3cspan id\x3d"'+h+'_label" class\x3d"cke_voice_label"\x3e'+a.lang.elementspath.eleLabel+'\x3c/span\x3e\x3cspan id\x3d"'+h+'" class\x3d"cke_path" role\x3d"group" aria-labelledby\x3d"'+h+'_label"\x3e\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e\x3c/span\x3e';
a.on("uiReady",function(){var b=a.ui.space("path");b&&a.focusManager.add(b,1)});g.onClick=l;var u=CKEDITOR.tools.addFunction(l),q=CKEDITOR.tools.addFunction(function(b,c){var f=g.idBase,e;c=new CKEDITOR.dom.event(c);e="rtl"==a.lang.dir;switch(c.getKeystroke()){case e?39:37:case 9:return(e=CKEDITOR.document.getById(f+(b+1)))||(e=CKEDITOR.document.getById(f+"0")),e.focus(),!1;case e?37:39:case CKEDITOR.SHIFT+9:return(e=CKEDITOR.document.getById(f+(b-1)))||(e=CKEDITOR.document.getById(f+(g.list.length-
1))),e.focus(),!1;case 27:return a.focus(),!1;case 13:case 32:return l(b),!1}return!0});a.on("selectionChange",function(){for(var b=[],f=g.list=[],e=[],m=g.filters,l=!0,B=a.elementPath().elements,r,z=B.length;z--;){var E=B[z],y=0;r=E.data("cke-display-name")?E.data("cke-display-name"):E.data("cke-real-element-type")?E.data("cke-real-element-type"):E.getName();(l=E.hasAttribute("contenteditable")?"true"==E.getAttribute("contenteditable"):l)||E.hasAttribute("contenteditable")||(y=1);for(var A=0;A<m.length;A++){var C=
m[A](E,r);if(!1===C){y=1;break}r=C||r}y||(f.unshift(E),e.unshift(r))}f=f.length;for(m=0;m<f;m++)r=e[m],l=a.lang.elementspath.eleTitle.replace(/%1/,r),r=c.output({id:n+m,label:l,text:r,jsTitle:"javascript:void('"+r+"')",index:m,keyDownFn:q,clickFn:u}),b.unshift(r);k||(k=CKEDITOR.document.getById(h));e=k;e.setHtml(b.join("")+'\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e');a.fire("elementsPathUpdate",{space:e})});a.on("readOnly",f);a.on("contentDomUnload",f);a.addCommand("elementsPathFocus",
e.toolbarFocus);a.setKeystroke(CKEDITOR.ALT+122,"elementsPathFocus")}var e={toolbarFocus:{editorFocus:!1,readOnly:1,exec:function(a){(a=CKEDITOR.document.getById(a._.elementsPath.idBase+"0"))&&a.focus(CKEDITOR.env.ie||CKEDITOR.env.air)}}},b="";CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(b+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(b+=' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var c=CKEDITOR.addTemplate("pathItem",'\x3ca id\x3d"{id}" href\x3d"{jsTitle}" tabindex\x3d"-1" class\x3d"cke_path_item" title\x3d"{label}"'+
b+' hidefocus\x3d"true"  onkeydown\x3d"return CKEDITOR.tools.callFunction({keyDownFn},{index}, event );" onclick\x3d"CKEDITOR.tools.callFunction({clickFn},{index}); return false;" role\x3d"button" aria-label\x3d"{label}"\x3e{text}\x3c/a\x3e');CKEDITOR.plugins.add("elementspath",{init:function(b){b._.elementsPath={idBase:"cke_elementspath_"+CKEDITOR.tools.getNextNumber()+"_",filters:[]};b.on("uiSpace",function(c){"bottom"==c.data.space&&a(b,c.data)})}})}(),function(){function a(a,d){var m,l;d.on("refresh",
function(a){var c=[e],d;for(d in a.data.states)c.push(a.data.states[d]);this.setState(CKEDITOR.tools.search(c,b)?b:e)},d,null,100);d.on("exec",function(b){m=a.getSelection();l=m.createBookmarks(1);b.data||(b.data={});b.data.done=!1},d,null,0);d.on("exec",function(){a.forceNextSelectionCheck();m.selectBookmarks(l)},d,null,100)}var e=CKEDITOR.TRISTATE_DISABLED,b=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indent",{init:function(b){var d=CKEDITOR.plugins.indent.genericDefinition;a(b,b.addCommand("indent",
new d(!0)));a(b,b.addCommand("outdent",new d));b.ui.addButton&&(b.ui.addButton("Indent",{label:b.lang.indent.indent,command:"indent",directional:!0,toolbar:"indent,20"}),b.ui.addButton("Outdent",{label:b.lang.indent.outdent,command:"outdent",directional:!0,toolbar:"indent,10"}));b.on("dirChanged",function(a){var d=b.createRange(),f=a.data.node;d.setStartBefore(f);d.setEndAfter(f);for(var e=new CKEDITOR.dom.walker(d),k;k=e.next();)if(k.type==CKEDITOR.NODE_ELEMENT)if(!k.equals(f)&&k.getDirection())d.setStartAfter(k),
e=new CKEDITOR.dom.walker(d);else{var g=b.config.indentClasses;if(g)for(var n="ltr"==a.data.dir?["_rtl",""]:["","_rtl"],u=0;u<g.length;u++)k.hasClass(g[u]+n[0])&&(k.removeClass(g[u]+n[0]),k.addClass(g[u]+n[1]));g=k.getStyle("margin-right");n=k.getStyle("margin-left");g?k.setStyle("margin-left",g):k.removeStyle("margin-left");n?k.setStyle("margin-right",n):k.removeStyle("margin-right")}})}});CKEDITOR.plugins.indent={genericDefinition:function(a){this.isIndent=!!a;this.startDisabled=!this.isIndent},
specificDefinition:function(a,b,e){this.name=b;this.editor=a;this.jobs={};this.enterBr=a.config.enterMode==CKEDITOR.ENTER_BR;this.isIndent=!!e;this.relatedGlobal=e?"indent":"outdent";this.indentKey=e?9:CKEDITOR.SHIFT+9;this.database={}},registerCommands:function(a,b){a.on("pluginsLoaded",function(){for(var a in b)(function(a,b){var c=a.getCommand(b.relatedGlobal),d;for(d in b.jobs)c.on("exec",function(c){c.data.done||(a.fire("lockSnapshot"),b.execJob(a,d)&&(c.data.done=!0),a.fire("unlockSnapshot"),
CKEDITOR.dom.element.clearAllMarkers(b.database))},this,null,d),c.on("refresh",function(c){c.data.states||(c.data.states={});c.data.states[b.name+"@"+d]=b.refreshJob(a,d,c.data.path)},this,null,d);a.addFeature(b)})(this,b[a])})}};CKEDITOR.plugins.indent.genericDefinition.prototype={context:"p",exec:function(){}};CKEDITOR.plugins.indent.specificDefinition.prototype={execJob:function(a,b){var m=this.jobs[b];if(m.state!=e)return m.exec.call(this,a)},refreshJob:function(a,b,m){b=this.jobs[b];a.activeFilter.checkFeature(this)?
b.state=b.refresh.call(this,a,m):b.state=e;return b.state},getContext:function(a){return a.contains(this.context)}}}(),function(){function a(a){function c(e){for(var h=q.startContainer,l=q.endContainer;h&&!h.getParent().equals(e);)h=h.getParent();for(;l&&!l.getParent().equals(e);)l=l.getParent();if(!h||!l)return!1;for(var v=h,h=[],t=!1;!t;)v.equals(l)&&(t=!0),h.push(v),v=v.getNext();if(1>h.length)return!1;v=e.getParents(!0);for(l=0;l<v.length;l++)if(v[l].getName&&m[v[l].getName()]){e=v[l];break}for(var v=
d.isIndent?1:-1,l=h[0],h=h[h.length-1],t=CKEDITOR.plugins.list.listToArray(e,g),z=t[h.getCustomData("listarray_index")].indent,l=l.getCustomData("listarray_index");l<=h.getCustomData("listarray_index");l++)if(t[l].indent+=v,0<v){var u=t[l].parent;t[l].parent=new CKEDITOR.dom.element(u.getName(),u.getDocument())}for(l=h.getCustomData("listarray_index")+1;l<t.length&&t[l].indent>z;l++)t[l].indent+=v;h=CKEDITOR.plugins.list.arrayToList(t,g,null,a.config.enterMode,e.getDirection());if(!d.isIndent){var y;
if((y=e.getParent())&&y.is("li"))for(var v=h.listNode.getChildren(),A=[],C,l=v.count()-1;0<=l;l--)(C=v.getItem(l))&&C.is&&C.is("li")&&A.push(C)}h&&h.listNode.replace(e);if(A&&A.length)for(l=0;l<A.length;l++){for(C=e=A[l];(C=C.getNext())&&C.is&&C.getName()in m;)CKEDITOR.env.needsNbspFiller&&!e.getFirst(b)&&e.append(q.document.createText(" ")),e.append(C);e.insertAfter(y)}h&&a.fire("contentDomInvalidated");return!0}for(var d=this,g=this.database,m=this.context,l=a.getSelection(),l=(l&&l.getRanges()).createIterator(),
q;q=l.getNextRange();){for(var v=q.getCommonAncestor();v&&(v.type!=CKEDITOR.NODE_ELEMENT||!m[v.getName()]);){if(a.editable().equals(v)){v=!1;break}v=v.getParent()}v||(v=q.startPath().contains(m))&&q.setEndAt(v,CKEDITOR.POSITION_BEFORE_END);if(!v){var t=q.getEnclosedNode();t&&t.type==CKEDITOR.NODE_ELEMENT&&t.getName()in m&&(q.setStartAt(t,CKEDITOR.POSITION_AFTER_START),q.setEndAt(t,CKEDITOR.POSITION_BEFORE_END),v=t)}v&&q.startContainer.type==CKEDITOR.NODE_ELEMENT&&q.startContainer.getName()in m&&(t=
new CKEDITOR.dom.walker(q),t.evaluator=e,q.startContainer=t.next());v&&q.endContainer.type==CKEDITOR.NODE_ELEMENT&&q.endContainer.getName()in m&&(t=new CKEDITOR.dom.walker(q),t.evaluator=e,q.endContainer=t.previous());if(v)return c(v)}return 0}function e(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.is("li")}function b(a){return c(a)&&d(a)}var c=CKEDITOR.dom.walker.whitespaces(!0),d=CKEDITOR.dom.walker.bookmark(!1,!0),m=CKEDITOR.TRISTATE_DISABLED,l=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentlist",
{requires:"indent",init:function(b){function c(b){d.specificDefinition.apply(this,arguments);this.requiredContent=["ul","ol"];b.on("key",function(a){if("wysiwyg"==b.mode&&a.data.keyCode==this.indentKey){var c=this.getContext(b.elementPath());!c||this.isIndent&&CKEDITOR.plugins.indentList.firstItemInPath(this.context,b.elementPath(),c)||(b.execCommand(this.relatedGlobal),a.cancel())}},this);this.jobs[this.isIndent?10:30]={refresh:this.isIndent?function(a,b){var c=this.getContext(b),d=CKEDITOR.plugins.indentList.firstItemInPath(this.context,
b,c);return c&&this.isIndent&&!d?l:m}:function(a,b){return!this.getContext(b)||this.isIndent?m:l},exec:CKEDITOR.tools.bind(a,this)}}var d=CKEDITOR.plugins.indent;d.registerCommands(b,{indentlist:new c(b,"indentlist",!0),outdentlist:new c(b,"outdentlist")});CKEDITOR.tools.extend(c.prototype,d.specificDefinition.prototype,{context:{ol:1,ul:1}})}});CKEDITOR.plugins.indentList={};CKEDITOR.plugins.indentList.firstItemInPath=function(a,b,c){var d=b.contains(e);c||(c=b.contains(a));return c&&d&&d.equals(c.getFirst(e))}}(),
function(){function a(a,b,c){function d(c){if(!(!(m=k[c?"getFirst":"getLast"]())||m.is&&m.isBlockBoundary()||!(l=b.root[c?"getPrevious":"getNext"](CKEDITOR.dom.walker.invisible(!0)))||l.is&&l.isBlockBoundary({br:1})))a.document.createElement("br")[c?"insertBefore":"insertAfter"](m)}for(var f=CKEDITOR.plugins.list.listToArray(b.root,c),e=[],g=0;g<b.contents.length;g++){var h=b.contents[g];(h=h.getAscendant("li",!0))&&!h.getCustomData("list_item_processed")&&(e.push(h),CKEDITOR.dom.element.setMarker(c,
h,"list_item_processed",!0))}h=null;for(g=0;g<e.length;g++)h=e[g].getCustomData("listarray_index"),f[h].indent=-1;for(g=h+1;g<f.length;g++)if(f[g].indent>f[g-1].indent+1){e=f[g-1].indent+1-f[g].indent;for(h=f[g].indent;f[g]&&f[g].indent>=h;)f[g].indent+=e,g++;g--}var k=CKEDITOR.plugins.list.arrayToList(f,c,null,a.config.enterMode,b.root.getAttribute("dir")).listNode,m,l;d(!0);d();k.replace(b.root);a.fire("contentDomInvalidated")}function e(a,b){this.name=a;this.context=this.type=b;this.allowedContent=
b+" li";this.requiredContent=b}function b(a,b,c,d){for(var f,e;f=a[d?"getLast":"getFirst"](q);)(e=f.getDirection(1))!==b.getDirection(1)&&f.setAttribute("dir",e),f.remove(),c?f[d?"insertBefore":"insertAfter"](c):b.append(f,d)}function c(a){function c(d){var f=a[d?"getPrevious":"getNext"](g);f&&f.type==CKEDITOR.NODE_ELEMENT&&f.is(a.getName())&&(b(a,f,null,!d),a.remove(),a=f)}c();c(1)}function d(a){return a.type==CKEDITOR.NODE_ELEMENT&&(a.getName()in CKEDITOR.dtd.$block||a.getName()in CKEDITOR.dtd.$listItem)&&
CKEDITOR.dtd[a.getName()]["#"]}function m(a,d,f){a.fire("saveSnapshot");f.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS);var e=f.extractContents();d.trim(!1,!0);var h=d.createBookmark(),k=new CKEDITOR.dom.elementPath(d.startContainer),m=k.block,k=k.lastElement.getAscendant("li",1)||m,q=new CKEDITOR.dom.elementPath(f.startContainer),u=q.contains(CKEDITOR.dtd.$listItem),q=q.contains(CKEDITOR.dtd.$list);m?(m=m.getBogus())&&m.remove():q&&(m=q.getPrevious(g))&&n(m)&&m.remove();(m=e.getLast())&&m.type==CKEDITOR.NODE_ELEMENT&&
m.is("br")&&m.remove();(m=d.startContainer.getChild(d.startOffset))?e.insertBefore(m):d.startContainer.append(e);u&&(e=l(u))&&(k.contains(u)?(b(e,u.getParent(),u),e.remove()):k.append(e));for(;f.checkStartOfBlock()&&f.checkEndOfBlock();){q=f.startPath();e=q.block;if(!e)break;e.is("li")&&(k=e.getParent(),e.equals(k.getLast(g))&&e.equals(k.getFirst(g))&&(e=k));f.moveToPosition(e,CKEDITOR.POSITION_BEFORE_START);e.remove()}f=f.clone();e=a.editable();f.setEndAt(e,CKEDITOR.POSITION_BEFORE_END);f=new CKEDITOR.dom.walker(f);
f.evaluator=function(a){return g(a)&&!n(a)};(f=f.next())&&f.type==CKEDITOR.NODE_ELEMENT&&f.getName()in CKEDITOR.dtd.$list&&c(f);d.moveToBookmark(h);d.select();a.fire("saveSnapshot")}function l(a){return(a=a.getLast(g))&&a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in f?a:null}var f={ol:1,ul:1},h=CKEDITOR.dom.walker.whitespaces(),k=CKEDITOR.dom.walker.bookmark(),g=function(a){return!(h(a)||k(a))},n=CKEDITOR.dom.walker.bogus();CKEDITOR.plugins.list={listToArray:function(a,b,c,d,e){if(!f[a.getName()])return[];
d||(d=0);c||(c=[]);for(var g=0,h=a.getChildCount();g<h;g++){var k=a.getChild(g);k.type==CKEDITOR.NODE_ELEMENT&&k.getName()in CKEDITOR.dtd.$list&&CKEDITOR.plugins.list.listToArray(k,b,c,d+1);if("li"==k.$.nodeName.toLowerCase()){var m={parent:a,indent:d,element:k,contents:[]};e?m.grandparent=e:(m.grandparent=a.getParent(),m.grandparent&&"li"==m.grandparent.$.nodeName.toLowerCase()&&(m.grandparent=m.grandparent.getParent()));b&&CKEDITOR.dom.element.setMarker(b,k,"listarray_index",c.length);c.push(m);
for(var l=0,n=k.getChildCount(),q;l<n;l++)q=k.getChild(l),q.type==CKEDITOR.NODE_ELEMENT&&f[q.getName()]?CKEDITOR.plugins.list.listToArray(q,b,c,d+1,m.grandparent):m.contents.push(q)}}return c},arrayToList:function(a,b,c,d,e){c||(c=0);if(!a||a.length<c+1)return null;for(var h,m=a[c].parent.getDocument(),l=new CKEDITOR.dom.documentFragment(m),n=null,q=c,u=Math.max(a[c].indent,0),C=null,G,F,I=d==CKEDITOR.ENTER_P?"p":"div";;){var H=a[q];h=H.grandparent;G=H.element.getDirection(1);if(H.indent==u){n&&a[q].parent.getName()==
n.getName()||(n=a[q].parent.clone(!1,1),e&&n.setAttribute("dir",e),l.append(n));C=n.append(H.element.clone(0,1));G!=n.getDirection(1)&&C.setAttribute("dir",G);for(h=0;h<H.contents.length;h++)C.append(H.contents[h].clone(1,1));q++}else if(H.indent==Math.max(u,0)+1)H=a[q-1].element.getDirection(1),q=CKEDITOR.plugins.list.arrayToList(a,null,q,d,H!=G?G:null),!C.getChildCount()&&CKEDITOR.env.needsNbspFiller&&7>=m.$.documentMode&&C.append(m.createText(" ")),C.append(q.listNode),q=q.nextIndex;else if(-1==
H.indent&&!c&&h){f[h.getName()]?(C=H.element.clone(!1,!0),G!=h.getDirection(1)&&C.setAttribute("dir",G)):C=new CKEDITOR.dom.documentFragment(m);var n=h.getDirection(1)!=G,K=H.element,D=K.getAttribute("class"),N=K.getAttribute("style"),R=C.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(d!=CKEDITOR.ENTER_BR||n||N||D),P,T=H.contents.length,O;for(h=0;h<T;h++)if(P=H.contents[h],k(P)&&1<T)R?O=P.clone(1,1):C.append(P.clone(1,1));else if(P.type==CKEDITOR.NODE_ELEMENT&&P.isBlockBoundary()){n&&!P.getDirection()&&
P.setAttribute("dir",G);F=P;var Y=K.getAttribute("style");Y&&F.setAttribute("style",Y.replace(/([^;])$/,"$1;")+(F.getAttribute("style")||""));D&&P.addClass(D);F=null;O&&(C.append(O),O=null);C.append(P.clone(1,1))}else R?(F||(F=m.createElement(I),C.append(F),n&&F.setAttribute("dir",G)),N&&F.setAttribute("style",N),D&&F.setAttribute("class",D),O&&(F.append(O),O=null),F.append(P.clone(1,1))):C.append(P.clone(1,1));O&&((F||C).append(O),O=null);C.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&q!=a.length-1&&(CKEDITOR.env.needsBrFiller&&
(G=C.getLast())&&G.type==CKEDITOR.NODE_ELEMENT&&G.is("br")&&G.remove(),(G=C.getLast(g))&&G.type==CKEDITOR.NODE_ELEMENT&&G.is(CKEDITOR.dtd.$block)||C.append(m.createElement("br")));G=C.$.nodeName.toLowerCase();"div"!=G&&"p"!=G||C.appendBogus();l.append(C);n=null;q++}else return null;F=null;if(a.length<=q||Math.max(a[q].indent,0)<u)break}if(b)for(a=l.getFirst();a;){if(a.type==CKEDITOR.NODE_ELEMENT&&(CKEDITOR.dom.element.clearMarkers(b,a),a.getName()in CKEDITOR.dtd.$listItem&&(c=a,m=e=d=void 0,d=c.getDirection()))){for(e=
c.getParent();e&&!(m=e.getDirection());)e=e.getParent();d==m&&c.removeAttribute("dir")}a=a.getNextSourceNode()}return{listNode:l,nextIndex:q}}};var u=/^h[1-6]$/,q=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT);e.prototype={exec:function(b){this.refresh(b,b.elementPath());var d=b.config,e=b.getSelection(),h=e&&e.getRanges();if(this.state==CKEDITOR.TRISTATE_OFF){var k=b.editable();if(k.getFirst(g)){var m=1==h.length&&h[0];(d=m&&m.getEnclosedNode())&&d.is&&this.type==d.getName()&&this.setState(CKEDITOR.TRISTATE_ON)}else d.enterMode==
CKEDITOR.ENTER_BR?k.appendBogus():h[0].fixBlock(1,d.enterMode==CKEDITOR.ENTER_P?"p":"div"),e.selectRanges(h)}for(var d=e.createBookmarks(!0),k=[],l={},h=h.createIterator(),n=0;(m=h.getNextRange())&&++n;){var q=m.getBoundaryNodes(),y=q.startNode,A=q.endNode;y.type==CKEDITOR.NODE_ELEMENT&&"td"==y.getName()&&m.setStartAt(q.startNode,CKEDITOR.POSITION_AFTER_START);A.type==CKEDITOR.NODE_ELEMENT&&"td"==A.getName()&&m.setEndAt(q.endNode,CKEDITOR.POSITION_BEFORE_END);m=m.createIterator();for(m.forceBrBreak=
this.state==CKEDITOR.TRISTATE_OFF;q=m.getNextParagraph();)if(!q.getCustomData("list_block")){CKEDITOR.dom.element.setMarker(l,q,"list_block",1);for(var C=b.elementPath(q),y=C.elements,A=0,C=C.blockLimit,G,F=y.length-1;0<=F&&(G=y[F]);F--)if(f[G.getName()]&&C.contains(G)){C.removeCustomData("list_group_object_"+n);(y=G.getCustomData("list_group_object"))?y.contents.push(q):(y={root:G,contents:[q]},k.push(y),CKEDITOR.dom.element.setMarker(l,G,"list_group_object",y));A=1;break}A||(A=C,A.getCustomData("list_group_object_"+
n)?A.getCustomData("list_group_object_"+n).contents.push(q):(y={root:A,contents:[q]},CKEDITOR.dom.element.setMarker(l,A,"list_group_object_"+n,y),k.push(y)))}}for(G=[];0<k.length;)if(y=k.shift(),this.state==CKEDITOR.TRISTATE_OFF)if(f[y.root.getName()]){h=b;n=y;y=l;m=G;A=CKEDITOR.plugins.list.listToArray(n.root,y);C=[];for(q=0;q<n.contents.length;q++)F=n.contents[q],(F=F.getAscendant("li",!0))&&!F.getCustomData("list_item_processed")&&(C.push(F),CKEDITOR.dom.element.setMarker(y,F,"list_item_processed",
!0));for(var F=n.root.getDocument(),I=void 0,H=void 0,q=0;q<C.length;q++){var K=C[q].getCustomData("listarray_index"),I=A[K].parent;I.is(this.type)||(H=F.createElement(this.type),I.copyAttributes(H,{start:1,type:1}),H.removeStyle("list-style-type"),A[K].parent=H)}y=CKEDITOR.plugins.list.arrayToList(A,y,null,h.config.enterMode);A=void 0;C=y.listNode.getChildCount();for(q=0;q<C&&(A=y.listNode.getChild(q));q++)A.getName()==this.type&&m.push(A);y.listNode.replace(n.root);h.fire("contentDomInvalidated")}else{A=
b;m=y;q=G;C=m.contents;h=m.root.getDocument();n=[];1==C.length&&C[0].equals(m.root)&&(y=h.createElement("div"),C[0].moveChildren&&C[0].moveChildren(y),C[0].append(y),C[0]=y);m=m.contents[0].getParent();for(F=0;F<C.length;F++)m=m.getCommonAncestor(C[F].getParent());I=A.config.useComputedState;A=y=void 0;I=void 0===I||I;for(F=0;F<C.length;F++)for(H=C[F];K=H.getParent();){if(K.equals(m)){n.push(H);!A&&H.getDirection()&&(A=1);H=H.getDirection(I);null!==y&&(y=y&&y!=H?null:H);break}H=K}if(!(1>n.length)){C=
n[n.length-1].getNext();F=h.createElement(this.type);q.push(F);for(I=q=void 0;n.length;)q=n.shift(),I=h.createElement("li"),H=q,H.is("pre")||u.test(H.getName())||"false"==H.getAttribute("contenteditable")?q.appendTo(I):(q.copyAttributes(I),y&&q.getDirection()&&(I.removeStyle("direction"),I.removeAttribute("dir")),q.moveChildren(I),q.remove()),I.appendTo(F);y&&A&&F.setAttribute("dir",y);C?F.insertBefore(C):F.appendTo(m)}}else this.state==CKEDITOR.TRISTATE_ON&&f[y.root.getName()]&&a.call(this,b,y,l);
for(F=0;F<G.length;F++)c(G[F]);CKEDITOR.dom.element.clearAllMarkers(l);e.selectBookmarks(d);b.focus()},refresh:function(a,b){var c=b.contains(f,1),d=b.blockLimit||b.root;c&&d.contains(c)?this.setState(c.is(this.type)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_OFF)}};CKEDITOR.plugins.add("list",{requires:"indentlist",init:function(a){a.blockless||(a.addCommand("numberedlist",new e("numberedlist","ol")),a.addCommand("bulletedlist",new e("bulletedlist","ul")),a.ui.addButton&&
(a.ui.addButton("NumberedList",{label:a.lang.list.numberedlist,command:"numberedlist",directional:!0,toolbar:"list,10"}),a.ui.addButton("BulletedList",{label:a.lang.list.bulletedlist,command:"bulletedlist",directional:!0,toolbar:"list,20"})),a.on("key",function(b){var c=b.data.domEvent.getKey(),e;if("wysiwyg"==a.mode&&c in{8:1,46:1}){var h=a.getSelection().getRanges()[0],k=h&&h.startPath();if(h&&h.collapsed){var q=8==c,u=a.editable(),E=new CKEDITOR.dom.walker(h.clone());E.evaluator=function(a){return g(a)&&
!n(a)};E.guard=function(a,b){return!(b&&a.type==CKEDITOR.NODE_ELEMENT&&a.is("table"))};c=h.clone();if(q){var y;(y=k.contains(f))&&h.checkBoundaryOfElement(y,CKEDITOR.START)&&(y=y.getParent())&&y.is("li")&&(y=l(y))?(e=y,y=y.getPrevious(g),c.moveToPosition(y&&n(y)?y:e,CKEDITOR.POSITION_BEFORE_START)):(E.range.setStartAt(u,CKEDITOR.POSITION_AFTER_START),E.range.setEnd(h.startContainer,h.startOffset),(y=E.previous())&&y.type==CKEDITOR.NODE_ELEMENT&&(y.getName()in f||y.is("li"))&&(y.is("li")||(E.range.selectNodeContents(y),
E.reset(),E.evaluator=d,y=E.previous()),e=y,c.moveToElementEditEnd(e),c.moveToPosition(c.endPath().block,CKEDITOR.POSITION_BEFORE_END)));if(e)m(a,c,h),b.cancel();else{var A=k.contains(f);A&&h.checkBoundaryOfElement(A,CKEDITOR.START)&&(e=A.getFirst(g),h.checkBoundaryOfElement(e,CKEDITOR.START)&&(y=A.getPrevious(g),l(e)?y&&(h.moveToElementEditEnd(y),h.select()):a.execCommand("outdent"),b.cancel()))}}else if(e=k.contains("li")){if(E.range.setEndAt(u,CKEDITOR.POSITION_BEFORE_END),q=(u=e.getLast(g))&&
d(u)?u:e,k=0,(y=E.next())&&y.type==CKEDITOR.NODE_ELEMENT&&y.getName()in f&&y.equals(u)?(k=1,y=E.next()):h.checkBoundaryOfElement(q,CKEDITOR.END)&&(k=2),k&&y){h=h.clone();h.moveToElementEditStart(y);if(1==k&&(c.optimize(),!c.startContainer.equals(e))){for(e=c.startContainer;e.is(CKEDITOR.dtd.$inline);)A=e,e=e.getParent();A&&c.moveToPosition(A,CKEDITOR.POSITION_AFTER_END)}2==k&&(c.moveToPosition(c.endPath().block,CKEDITOR.POSITION_BEFORE_END),h.endPath().block&&h.moveToPosition(h.endPath().block,CKEDITOR.POSITION_AFTER_START));
m(a,c,h);b.cancel()}}else E.range.setEndAt(u,CKEDITOR.POSITION_BEFORE_END),(y=E.next())&&y.type==CKEDITOR.NODE_ELEMENT&&y.is(f)&&(y=y.getFirst(g),k.block&&h.checkStartOfBlock()&&h.checkEndOfBlock()?(k.block.remove(),h.moveToElementEditStart(y),h.select()):l(y)?(h.moveToElementEditStart(y),h.select()):(h=h.clone(),h.moveToElementEditStart(y),m(a,c,h)),b.cancel());setTimeout(function(){a.selectionChange(1)})}}}))}})}(),function(){function a(a,b,c){c=a.config.forceEnterMode||c;"wysiwyg"==a.mode&&(b||
(b=a.activeEnterMode),a.elementPath().isContextFor("p")||(b=CKEDITOR.ENTER_BR,c=1),a.fire("saveSnapshot"),b==CKEDITOR.ENTER_BR?l(a,b,null,c):f(a,b,null,c),a.fire("saveSnapshot"))}function e(a){a=a.getSelection().getRanges(!0);for(var b=a.length-1;0<b;b--)a[b].deleteContents();return a[0]}function b(a){var b=a.startContainer.getAscendant(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&"true"==a.getAttribute("contenteditable")},!0);if(a.root.equals(b))return a;b=new CKEDITOR.dom.range(b);b.moveToRange(a);
return b}CKEDITOR.plugins.add("enterkey",{init:function(b){b.addCommand("enter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){a(b)}});b.addCommand("shiftEnter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){a(b,b.activeShiftEnterMode,1)}});b.setKeystroke([[13,"enter"],[CKEDITOR.SHIFT+13,"shiftEnter"]])}});var c=CKEDITOR.dom.walker.whitespaces(),d=CKEDITOR.dom.walker.bookmark();CKEDITOR.plugins.enterkey={enterBlock:function(a,f,m,u){if(m=m||e(a)){m=b(m);var q=m.document,v=m.checkStartOfBlock(),
t=m.checkEndOfBlock(),p=a.elementPath(m.startContainer),w=p.block,x=f==CKEDITOR.ENTER_DIV?"div":"p",B;if(v&&t){if(w&&(w.is("li")||w.getParent().is("li"))){w.is("li")||(w=w.getParent());m=w.getParent();B=m.getParent();u=!w.hasPrevious();var r=!w.hasNext(),x=a.getSelection(),z=x.createBookmarks(),v=w.getDirection(1),t=w.getAttribute("class"),E=w.getAttribute("style"),y=B.getDirection(1)!=v;a=a.enterMode!=CKEDITOR.ENTER_BR||y||E||t;if(B.is("li"))u||r?(u&&r&&m.remove(),w[r?"insertAfter":"insertBefore"](B)):
w.breakParent(B);else{if(a)if(p.block.is("li")?(B=q.createElement(f==CKEDITOR.ENTER_P?"p":"div"),y&&B.setAttribute("dir",v),E&&B.setAttribute("style",E),t&&B.setAttribute("class",t),w.moveChildren(B)):B=p.block,u||r)B[u?"insertBefore":"insertAfter"](m);else w.breakParent(m),B.insertAfter(m);else if(w.appendBogus(!0),u||r)for(;q=w[u?"getFirst":"getLast"]();)q[u?"insertBefore":"insertAfter"](m);else for(w.breakParent(m);q=w.getLast();)q.insertAfter(m);w.remove()}x.selectBookmarks(z);return}if(w&&w.getParent().is("blockquote")){w.breakParent(w.getParent());
w.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1))||w.getPrevious().remove();w.getNext().getFirst(CKEDITOR.dom.walker.invisible(1))||w.getNext().remove();m.moveToElementEditStart(w);m.select();return}}else if(w&&w.is("pre")&&!t){l(a,f,m,u);return}if(v=m.splitBlock(x)){f=v.previousBlock;w=v.nextBlock;p=v.wasStartOfBlock;a=v.wasEndOfBlock;w?(z=w.getParent(),z.is("li")&&(w.breakParent(z),w.move(w.getNext(),1))):f&&(z=f.getParent())&&z.is("li")&&(f.breakParent(z),z=f.getNext(),m.moveToElementEditStart(z),
f.move(f.getPrevious()));if(p||a){if(f){if(f.is("li")||!h.test(f.getName())&&!f.is("pre"))B=f.clone()}else w&&(B=w.clone());B?u&&!B.is("li")&&B.renameNode(x):z&&z.is("li")?B=z:(B=q.createElement(x),f&&(r=f.getDirection())&&B.setAttribute("dir",r));if(q=v.elementPath)for(u=0,x=q.elements.length;u<x;u++){z=q.elements[u];if(z.equals(q.block)||z.equals(q.blockLimit))break;CKEDITOR.dtd.$removeEmpty[z.getName()]&&(z=z.clone(),B.moveChildren(z),B.append(z))}B.appendBogus();B.getParent()||m.insertNode(B);
B.is("li")&&B.removeAttribute("value");!CKEDITOR.env.ie||!p||a&&f.getChildCount()||(m.moveToElementEditStart(a?f:B),m.select());m.moveToElementEditStart(p&&!a?w:B)}else w.is("li")&&(B=m.clone(),B.selectNodeContents(w),B=new CKEDITOR.dom.walker(B),B.evaluator=function(a){return!(d(a)||c(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in CKEDITOR.dtd.$inline&&!(a.getName()in CKEDITOR.dtd.$empty))},(z=B.next())&&z.type==CKEDITOR.NODE_ELEMENT&&z.is("ul","ol")&&(CKEDITOR.env.needsBrFiller?q.createElement("br"):
q.createText(" ")).insertBefore(z)),w&&m.moveToElementEditStart(w);m.select();m.scrollIntoView()}}},enterBr:function(a,b,c,d){if(c=c||e(a)){var m=c.document,l=c.checkEndOfBlock(),t=new CKEDITOR.dom.elementPath(a.getSelection().getStartElement()),p=t.block,w=p&&t.block.getName();d||"li"!=w?(!d&&l&&h.test(w)?(l=p.getDirection())?(m=m.createElement("div"),m.setAttribute("dir",l),m.insertAfter(p),c.setStart(m,0)):(m.createElement("br").insertAfter(p),CKEDITOR.env.gecko&&m.createText("").insertAfter(p),
c.setStartAt(p.getNext(),CKEDITOR.env.ie?CKEDITOR.POSITION_BEFORE_START:CKEDITOR.POSITION_AFTER_START)):(a="pre"==w&&CKEDITOR.env.ie&&8>CKEDITOR.env.version?m.createText("\r"):m.createElement("br"),c.deleteContents(),c.insertNode(a),CKEDITOR.env.needsBrFiller?(m.createText("﻿").insertAfter(a),l&&(p||t.blockLimit).appendBogus(),a.getNext().$.nodeValue="",c.setStartAt(a.getNext(),CKEDITOR.POSITION_AFTER_START)):c.setStartAt(a,CKEDITOR.POSITION_AFTER_END)),c.collapse(!0),c.select(),c.scrollIntoView()):
f(a,b,c,d)}}};var m=CKEDITOR.plugins.enterkey,l=m.enterBr,f=m.enterBlock,h=/^h[1-6]$/}(),function(){function a(a,b){var c={},d=[],m={nbsp:" ",shy:"­",gt:"\x3e",lt:"\x3c",amp:"\x26",apos:"'",quot:'"'};a=a.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g,function(a,f){var e=b?"\x26"+f+";":m[f];c[e]=b?m[f]:"\x26"+f+";";d.push(e);return""});if(!b&&a){a=a.split(",");var l=document.createElement("div"),f;l.innerHTML="\x26"+a.join(";\x26")+";";f=l.innerHTML;l=null;for(l=0;l<f.length;l++){var h=f.charAt(l);
c[h]="\x26"+a[l]+";";d.push(h)}}c.regex=d.join(b?"|":"");return c}CKEDITOR.plugins.add("entities",{afterInit:function(e){function b(a){return h[a]}function c(a){return"force"!=d.entities_processNumerical&&l[a]?l[a]:"\x26#"+a.charCodeAt(0)+";"}var d=e.config;if(e=(e=e.dataProcessor)&&e.htmlFilter){var m=[];!1!==d.basicEntities&&m.push("nbsp,gt,lt,amp");d.entities&&(m.length&&m.push("quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro"),
d.entities_latin&&m.push("Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml"),d.entities_greek&&m.push("Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv"),
d.entities_additional&&m.push(d.entities_additional));var l=a(m.join(",")),f=l.regex?"["+l.regex+"]":"a^";delete l.regex;d.entities&&d.entities_processNumerical&&(f="[^ -~]|"+f);var f=new RegExp(f,"g"),h=a("nbsp,gt,lt,amp,shy",!0),k=new RegExp(h.regex,"g");e.addRules({text:function(a){return a.replace(k,b).replace(f,c)}},{applyToAll:!0,excludeNestedEditable:!0})}}})}(),CKEDITOR.config.basicEntities=!0,CKEDITOR.config.entities=!0,CKEDITOR.config.entities_latin=!0,CKEDITOR.config.entities_greek=!0,
CKEDITOR.config.entities_additional="#39",CKEDITOR.plugins.add("popup"),CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{popup:function(a,e,b,c){e=e||"80%";b=b||"70%";"string"==typeof e&&1<e.length&&"%"==e.substr(e.length-1,1)&&(e=parseInt(window.screen.width*parseInt(e,10)/100,10));"string"==typeof b&&1<b.length&&"%"==b.substr(b.length-1,1)&&(b=parseInt(window.screen.height*parseInt(b,10)/100,10));640>e&&(e=640);420>b&&(b=420);var d=parseInt((window.screen.height-b)/2,10),m=parseInt((window.screen.width-
e)/2,10);c=(c||"location\x3dno,menubar\x3dno,toolbar\x3dno,dependent\x3dyes,minimizable\x3dno,modal\x3dyes,alwaysRaised\x3dyes,resizable\x3dyes,scrollbars\x3dyes")+",width\x3d"+e+",height\x3d"+b+",top\x3d"+d+",left\x3d"+m;var l=window.open("",null,c,!0);if(!l)return!1;try{-1==navigator.userAgent.toLowerCase().indexOf(" chrome/")&&(l.moveTo(m,d),l.resizeTo(e,b)),l.focus(),l.location.href=a}catch(f){window.open(a,null,c,!0)}return!0}}),function(){function a(a,b){var c=[];if(b)for(var d in b)c.push(d+
"\x3d"+encodeURIComponent(b[d]));else return a;return a+(-1!=a.indexOf("?")?"\x26":"?")+c.join("\x26")}function e(a){a+="";return a.charAt(0).toUpperCase()+a.substr(1)}function b(){var b=this.getDialog(),c=b.getParentEditor();c._.filebrowserSe=this;var d=c.config["filebrowser"+e(b.getName())+"WindowWidth"]||c.config.filebrowserWindowWidth||"80%",b=c.config["filebrowser"+e(b.getName())+"WindowHeight"]||c.config.filebrowserWindowHeight||"70%",f=this.filebrowser.params||{};f.CKEditor=c.name;f.CKEditorFuncNum=
c._.filebrowserFn;f.langCode||(f.langCode=c.langCode);f=a(this.filebrowser.url,f);c.popup(f,d,b,c.config.filebrowserWindowFeatures||c.config.fileBrowserWindowFeatures)}function c(){var a=this.getDialog();a.getParentEditor()._.filebrowserSe=this;return a.getContentElement(this["for"][0],this["for"][1]).getInputElement().$.value&&a.getContentElement(this["for"][0],this["for"][1]).getAction()?!0:!1}function d(b,c,d){var f=d.params||{};f.CKEditor=b.name;f.CKEditorFuncNum=b._.filebrowserFn;f.langCode||
(f.langCode=b.langCode);c.action=a(d.url,f);c.filebrowser=d}function m(a,f,g,l){if(l&&l.length)for(var u,q=l.length;q--;)if(u=l[q],"hbox"!=u.type&&"vbox"!=u.type&&"fieldset"!=u.type||m(a,f,g,u.children),u.filebrowser)if("string"==typeof u.filebrowser&&(u.filebrowser={action:"fileButton"==u.type?"QuickUpload":"Browse",target:u.filebrowser}),"Browse"==u.filebrowser.action){var v=u.filebrowser.url;void 0===v&&(v=a.config["filebrowser"+e(f)+"BrowseUrl"],void 0===v&&(v=a.config.filebrowserBrowseUrl));
v&&(u.onClick=b,u.filebrowser.url=v,u.hidden=!1)}else if("QuickUpload"==u.filebrowser.action&&u["for"]&&(v=u.filebrowser.url,void 0===v&&(v=a.config["filebrowser"+e(f)+"UploadUrl"],void 0===v&&(v=a.config.filebrowserUploadUrl)),v)){var t=u.onClick;u.onClick=function(a){var b=a.sender;return t&&!1===t.call(b,a)?!1:c.call(b,a)};u.filebrowser.url=v;u.hidden=!1;d(a,g.getContents(u["for"][0]).get(u["for"][1]),u.filebrowser)}}function l(a,b,c){if(-1!==c.indexOf(";")){c=c.split(";");for(var d=0;d<c.length;d++)if(l(a,
b,c[d]))return!0;return!1}return(a=a.getContents(b).get(c).filebrowser)&&a.url}function f(a,b){var c=this._.filebrowserSe.getDialog(),d=this._.filebrowserSe["for"],f=this._.filebrowserSe.filebrowser.onSelect;d&&c.getContentElement(d[0],d[1]).reset();if("function"!=typeof b||!1!==b.call(this._.filebrowserSe))if(!f||!1!==f.call(this._.filebrowserSe,a,b))if("string"==typeof b&&b&&alert(b),a&&(d=this._.filebrowserSe,c=d.getDialog(),d=d.filebrowser.target||null))if(d=d.split(":"),f=c.getContentElement(d[0],
d[1]))f.setValue(a),c.selectPage(d[0])}CKEDITOR.plugins.add("filebrowser",{requires:"popup",init:function(a){a._.filebrowserFn=CKEDITOR.tools.addFunction(f,a);a.on("destroy",function(){CKEDITOR.tools.removeFunction(this._.filebrowserFn)})}});CKEDITOR.on("dialogDefinition",function(a){if(a.editor.plugins.filebrowser)for(var b=a.data.definition,c,d=0;d<b.contents.length;++d)if(c=b.contents[d])m(a.editor,a.data.name,b,c.elements),c.hidden&&c.filebrowser&&(c.hidden=!l(b,c.id,c.filebrowser))})}(),function(){function a(a){var d=
a.config,m=a.fire("uiSpace",{space:"top",html:""}).html,l=function(){function f(a,c,d){h.setStyle(c,b(d));h.setStyle("position",a)}function g(a){var b=m.getDocumentPosition();switch(a){case "top":f("absolute","top",b.y-x-z);break;case "pin":f("fixed","top",y);break;case "bottom":f("absolute","top",b.y+(p.height||p.bottom-p.top)+z)}k=a}var k,m,t,p,w,x,B,r=d.floatSpaceDockedOffsetX||0,z=d.floatSpaceDockedOffsetY||0,E=d.floatSpacePinnedOffsetX||0,y=d.floatSpacePinnedOffsetY||0;return function(f){if(m=
a.editable()){var n=f&&"focus"==f.name;n&&h.show();a.fire("floatingSpaceLayout",{show:n});h.removeStyle("left");h.removeStyle("right");t=h.getClientRect();p=m.getClientRect();w=e.getViewPaneSize();x=t.height;B="pageXOffset"in e.$?e.$.pageXOffset:CKEDITOR.document.$.documentElement.scrollLeft;k?(x+z<=p.top?g("top"):x+z>w.height-p.bottom?g("pin"):g("bottom"),f=w.width/2,f=d.floatSpacePreferRight?"right":0<p.left&&p.right<w.width&&p.width>t.width?"rtl"==d.contentsLangDirection?"right":"left":f-p.left>
p.right-f?"left":"right",t.width>w.width?(f="left",n=0):(n="left"==f?0<p.left?p.left:0:p.right<w.width?w.width-p.right:0,n+t.width>w.width&&(f="left"==f?"right":"left",n=0)),h.setStyle(f,b(("pin"==k?E:r)+n+("pin"==k?0:"left"==f?B:-B)))):(k="pin",g("pin"),l(f))}}}();if(m){var f=new CKEDITOR.template('\x3cdiv id\x3d"cke_{name}" class\x3d"cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} '+CKEDITOR.env.cssClass+'" dir\x3d"{langDir}" title\x3d"'+(CKEDITOR.env.gecko?" ":"")+'" lang\x3d"{langCode}" role\x3d"application" style\x3d"{style}"'+
(a.title?' aria-labelledby\x3d"cke_{name}_arialbl"':" ")+"\x3e"+(a.title?'\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e':" ")+'\x3cdiv class\x3d"cke_inner"\x3e\x3cdiv id\x3d"{topId}" class\x3d"cke_top" role\x3d"presentation"\x3e{content}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'),h=CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml(f.output({content:m,id:a.id,langDir:a.lang.dir,langCode:a.langCode,name:a.name,style:"display:none;z-index:"+
(d.baseFloatZIndex-1),topId:a.ui.spaceId("top"),voiceLabel:a.title}))),k=CKEDITOR.tools.eventsBuffer(500,l),g=CKEDITOR.tools.eventsBuffer(100,l);h.unselectable();h.on("mousedown",function(a){a=a.data;a.getTarget().hasAscendant("a",1)||a.preventDefault()});a.on("focus",function(b){l(b);a.on("change",k.input);e.on("scroll",g.input);e.on("resize",g.input)});a.on("blur",function(){h.hide();a.removeListener("change",k.input);e.removeListener("scroll",g.input);e.removeListener("resize",g.input)});a.on("destroy",
function(){e.removeListener("scroll",g.input);e.removeListener("resize",g.input);h.clearCustomData();h.remove()});a.focusManager.hasFocus&&h.show();a.focusManager.add(h,1)}}var e=CKEDITOR.document.getWindow(),b=CKEDITOR.tools.cssLength;CKEDITOR.plugins.add("floatingspace",{init:function(b){b.on("loaded",function(){a(this)},null,null,20)}})}(),CKEDITOR.plugins.add("listblock",{requires:"panel",onLoad:function(){var a=CKEDITOR.addTemplate("panel-list",'\x3cul role\x3d"presentation" class\x3d"cke_panel_list"\x3e{items}\x3c/ul\x3e'),
e=CKEDITOR.addTemplate("panel-list-item",'\x3cli id\x3d"{id}" class\x3d"cke_panel_listItem" role\x3dpresentation\x3e\x3ca id\x3d"{id}_option" _cke_focus\x3d1 hidefocus\x3dtrue title\x3d"{title}" href\x3d"javascript:void(\'{val}\')"  {onclick}\x3d"CKEDITOR.tools.callFunction({clickFn},\'{val}\'); return false;" role\x3d"option"\x3e{text}\x3c/a\x3e\x3c/li\x3e'),b=CKEDITOR.addTemplate("panel-list-group",'\x3ch1 id\x3d"{id}" class\x3d"cke_panel_grouptitle" role\x3d"presentation" \x3e{label}\x3c/h1\x3e'),
c=/\'/g;CKEDITOR.ui.panel.prototype.addListBlock=function(a,b){return this.addBlock(a,new CKEDITOR.ui.listBlock(this.getHolderElement(),b))};CKEDITOR.ui.listBlock=CKEDITOR.tools.createClass({base:CKEDITOR.ui.panel.block,$:function(a,b){b=b||{};var c=b.attributes||(b.attributes={});(this.multiSelect=!!b.multiSelect)&&(c["aria-multiselectable"]=!0);!c.role&&(c.role="listbox");this.base.apply(this,arguments);this.element.setAttribute("role",c.role);c=this.keys;c[40]="next";c[9]="next";c[38]="prev";c[CKEDITOR.SHIFT+
9]="prev";c[32]=CKEDITOR.env.ie?"mouseup":"click";CKEDITOR.env.ie&&(c[13]="mouseup");this._.pendingHtml=[];this._.pendingList=[];this._.items={};this._.groups={}},_:{close:function(){if(this._.started){var b=a.output({items:this._.pendingList.join("")});this._.pendingList=[];this._.pendingHtml.push(b);delete this._.started}},getClick:function(){this._.click||(this._.click=CKEDITOR.tools.addFunction(function(a){var b=this.toggle(a);if(this.onClick)this.onClick(a,b)},this));return this._.click}},proto:{add:function(a,
b,l){var f=CKEDITOR.tools.getNextId();this._.started||(this._.started=1,this._.size=this._.size||0);this._.items[a]=f;var h;h=CKEDITOR.tools.htmlEncodeAttr(a).replace(c,"\\'");a={id:f,val:h,onclick:CKEDITOR.env.ie?'onclick\x3d"return false;" onmouseup':"onclick",clickFn:this._.getClick(),title:CKEDITOR.tools.htmlEncodeAttr(l||a),text:b||a};this._.pendingList.push(e.output(a))},startGroup:function(a){this._.close();var c=CKEDITOR.tools.getNextId();this._.groups[a]=c;this._.pendingHtml.push(b.output({id:c,
label:a}))},commit:function(){this._.close();this.element.appendHtml(this._.pendingHtml.join(""));delete this._.size;this._.pendingHtml=[]},toggle:function(a){var b=this.isMarked(a);b?this.unmark(a):this.mark(a);return!b},hideGroup:function(a){var b=(a=this.element.getDocument().getById(this._.groups[a]))&&a.getNext();a&&(a.setStyle("display","none"),b&&"ul"==b.getName()&&b.setStyle("display","none"))},hideItem:function(a){this.element.getDocument().getById(this._.items[a]).setStyle("display","none")},
showAll:function(){var a=this._.items,b=this._.groups,c=this.element.getDocument(),f;for(f in a)c.getById(a[f]).setStyle("display","");for(var e in b)a=c.getById(b[e]),f=a.getNext(),a.setStyle("display",""),f&&"ul"==f.getName()&&f.setStyle("display","")},mark:function(a){this.multiSelect||this.unmarkAll();a=this._.items[a];var b=this.element.getDocument().getById(a);b.addClass("cke_selected");this.element.getDocument().getById(a+"_option").setAttribute("aria-selected",!0);this.onMark&&this.onMark(b)},
unmark:function(a){var b=this.element.getDocument();a=this._.items[a];var c=b.getById(a);c.removeClass("cke_selected");b.getById(a+"_option").removeAttribute("aria-selected");this.onUnmark&&this.onUnmark(c)},unmarkAll:function(){var a=this._.items,b=this.element.getDocument(),c;for(c in a){var f=a[c];b.getById(f).removeClass("cke_selected");b.getById(f+"_option").removeAttribute("aria-selected")}this.onUnmark&&this.onUnmark()},isMarked:function(a){return this.element.getDocument().getById(this._.items[a]).hasClass("cke_selected")},
focus:function(a){this._.focusIndex=-1;var b=this.element.getElementsByTag("a"),c,f=-1;if(a)for(c=this.element.getDocument().getById(this._.items[a]).getFirst();a=b.getItem(++f);){if(a.equals(c)){this._.focusIndex=f;break}}else this.element.focus();c&&setTimeout(function(){c.focus()},0)}}})}}),function(){var a='\x3ca id\x3d"{id}" class\x3d"cke_button cke_button__{name} cke_button_{state} {cls}"'+(CKEDITOR.env.gecko&&!CKEDITOR.env.hc?"":" href\x3d\"javascript:void('{titleJs}')\"")+' title\x3d"{title}" tabindex\x3d"-1" hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-haspopup\x3d"{hasArrow}" aria-disabled\x3d"{ariaDisabled}"';
CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(a+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(a+=' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var a=a+(' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" '+(CKEDITOR.env.ie?'onclick\x3d"return false;" onmouseup':"onclick")+'\x3d"CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{style}"'),
a=a+'\x3e\x26nbsp;\x3c/span\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_button_label cke_button__{name}_label" aria-hidden\x3d"false"\x3e{label}\x3c/span\x3e{arrowHtml}\x3c/a\x3e',e=CKEDITOR.addTemplate("buttonArrow",'\x3cspan class\x3d"cke_button_arrow"\x3e'+(CKEDITOR.env.hc?"\x26#9660;":"")+"\x3c/span\x3e"),b=CKEDITOR.addTemplate("button",a);CKEDITOR.plugins.add("button",{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_BUTTON,CKEDITOR.ui.button.handler)}});CKEDITOR.UI_BUTTON="button";CKEDITOR.ui.button=
function(a){CKEDITOR.tools.extend(this,a,{title:a.label,click:a.click||function(b){b.execCommand(a.command)}});this._={}};CKEDITOR.ui.button.handler={create:function(a){return new CKEDITOR.ui.button(a)}};CKEDITOR.ui.button.prototype={render:function(a,d){function m(){var b=a.mode;b&&(b=this.modes[b]?void 0!==t[b]?t[b]:CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,b=a.readOnly&&!this.readOnly?CKEDITOR.TRISTATE_DISABLED:b,this.setState(b),this.refresh&&this.refresh())}var l=CKEDITOR.env,f=this._.id=
CKEDITOR.tools.getNextId(),h="",k=this.command,g;this._.editor=a;var n={id:f,button:this,editor:a,focus:function(){CKEDITOR.document.getById(f).focus()},execute:function(){this.button.click(a)},attach:function(a){this.button.attach(a)}},u=CKEDITOR.tools.addFunction(function(a){if(n.onkey)return a=new CKEDITOR.dom.event(a),!1!==n.onkey(n,a.getKeystroke())}),q=CKEDITOR.tools.addFunction(function(a){var b;n.onfocus&&(b=!1!==n.onfocus(n,new CKEDITOR.dom.event(a)));return b}),v=0;n.clickFn=g=CKEDITOR.tools.addFunction(function(){v&&
(a.unlockSelection(1),v=0);n.execute();l.iOS&&a.focus()});if(this.modes){var t={};a.on("beforeModeUnload",function(){a.mode&&this._.state!=CKEDITOR.TRISTATE_DISABLED&&(t[a.mode]=this._.state)},this);a.on("activeFilterChange",m,this);a.on("mode",m,this);!this.readOnly&&a.on("readOnly",m,this)}else k&&(k=a.getCommand(k))&&(k.on("state",function(){this.setState(k.state)},this),h+=k.state==CKEDITOR.TRISTATE_ON?"on":k.state==CKEDITOR.TRISTATE_DISABLED?"disabled":"off");if(this.directional)a.on("contentDirChanged",
function(b){var d=CKEDITOR.document.getById(this._.id),f=d.getFirst();b=b.data;b!=a.lang.dir?d.addClass("cke_"+b):d.removeClass("cke_ltr").removeClass("cke_rtl");f.setAttribute("style",CKEDITOR.skin.getIconStyle(w,"rtl"==b,this.icon,this.iconOffset))},this);k||(h+="off");var p=this.name||this.command,w=p;this.icon&&!/\./.test(this.icon)&&(w=this.icon,this.icon=null);h={id:f,name:p,iconName:w,label:this.label,cls:this.className||"",state:h,ariaDisabled:"disabled"==h?"true":"false",title:this.title,
titleJs:l.gecko&&!l.hc?"":(this.title||"").replace("'",""),hasArrow:this.hasArrow?"true":"false",keydownFn:u,focusFn:q,clickFn:g,style:CKEDITOR.skin.getIconStyle(w,"rtl"==a.lang.dir,this.icon,this.iconOffset),arrowHtml:this.hasArrow?e.output():""};b.output(h,d);if(this.onRender)this.onRender();return n},setState:function(a){if(this._.state==a)return!1;this._.state=a;var b=CKEDITOR.document.getById(this._.id);return b?(b.setState(a,"cke_button"),a==CKEDITOR.TRISTATE_DISABLED?b.setAttribute("aria-disabled",
!0):b.removeAttribute("aria-disabled"),this.hasArrow?(a=a==CKEDITOR.TRISTATE_ON?this._.editor.lang.button.selectedLabel.replace(/%1/g,this.label):this.label,CKEDITOR.document.getById(this._.id+"_label").setText(a)):a==CKEDITOR.TRISTATE_ON?b.setAttribute("aria-pressed",!0):b.removeAttribute("aria-pressed"),!0):!1},getState:function(){return this._.state},toFeature:function(a){if(this._.feature)return this._.feature;var b=this;this.allowedContent||this.requiredContent||!this.command||(b=a.getCommand(this.command)||
b);return this._.feature=b}};CKEDITOR.ui.prototype.addButton=function(a,b){this.add(a,CKEDITOR.UI_BUTTON,b)}}(),CKEDITOR.plugins.add("richcombo",{requires:"floatpanel,listblock,button",beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_RICHCOMBO,CKEDITOR.ui.richCombo.handler)}}),function(){var a='\x3cspan id\x3d"{id}" class\x3d"cke_combo cke_combo__{name} {cls}" role\x3d"presentation"\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_combo_label"\x3e{label}\x3c/span\x3e\x3ca class\x3d"cke_combo_button" title\x3d"{title}" tabindex\x3d"-1"'+
(CKEDITOR.env.gecko&&!CKEDITOR.env.hc?"":" href\x3d\"javascript:void('{titleJs}')\"")+' hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-haspopup\x3d"true"';CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(a+=' onkeypress\x3d"return false;"');CKEDITOR.env.gecko&&(a+=' onblur\x3d"this.style.cssText \x3d this.style.cssText;"');var a=a+(' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event,this);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" '+(CKEDITOR.env.ie?
'onclick\x3d"return false;" onmouseup':"onclick")+'\x3d"CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan id\x3d"{id}_text" class\x3d"cke_combo_text cke_combo_inlinelabel"\x3e{label}\x3c/span\x3e\x3cspan class\x3d"cke_combo_open"\x3e\x3cspan class\x3d"cke_combo_arrow"\x3e'+(CKEDITOR.env.hc?"\x26#9660;":CKEDITOR.env.air?"\x26nbsp;":"")+"\x3c/span\x3e\x3c/span\x3e\x3c/a\x3e\x3c/span\x3e"),e=CKEDITOR.addTemplate("combo",a);CKEDITOR.UI_RICHCOMBO="richcombo";CKEDITOR.ui.richCombo=
CKEDITOR.tools.createClass({$:function(a){CKEDITOR.tools.extend(this,a,{canGroup:!1,title:a.label,modes:{wysiwyg:1},editorFocus:1});a=this.panel||{};delete this.panel;this.id=CKEDITOR.tools.getNextNumber();this.document=a.parent&&a.parent.getDocument()||CKEDITOR.document;a.className="cke_combopanel";a.block={multiSelect:a.multiSelect,attributes:a.attributes};a.toolbarRelated=!0;this._={panelDefinition:a,items:{}}},proto:{renderHtml:function(a){var c=[];this.render(a,c);return c.join("")},render:function(a,
c){function d(){if(this.getState()!=CKEDITOR.TRISTATE_ON){var c=this.modes[a.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;a.readOnly&&!this.readOnly&&(c=CKEDITOR.TRISTATE_DISABLED);this.setState(c);this.setValue("");c!=CKEDITOR.TRISTATE_DISABLED&&this.refresh&&this.refresh()}}var m=CKEDITOR.env,l="cke_"+this.id,f=CKEDITOR.tools.addFunction(function(c){u&&(a.unlockSelection(1),u=0);k.execute(c)},this),h=this,k={id:l,combo:this,focus:function(){CKEDITOR.document.getById(l).getChild(1).focus()},
execute:function(c){var d=h._;if(d.state!=CKEDITOR.TRISTATE_DISABLED)if(h.createPanel(a),d.on)d.panel.hide();else{h.commit();var f=h.getValue();f?d.list.mark(f):d.list.unmarkAll();d.panel.showBlock(h.id,new CKEDITOR.dom.element(c),4)}},clickFn:f};a.on("activeFilterChange",d,this);a.on("mode",d,this);a.on("selectionChange",d,this);!this.readOnly&&a.on("readOnly",d,this);var g=CKEDITOR.tools.addFunction(function(c,d){c=new CKEDITOR.dom.event(c);var e=c.getKeystroke();if(40==e)a.once("panelShow",function(a){a.data._.panel._.currentBlock.onKeyDown(40)});
switch(e){case 13:case 32:case 40:CKEDITOR.tools.callFunction(f,d);break;default:k.onkey(k,e)}c.preventDefault()}),n=CKEDITOR.tools.addFunction(function(){k.onfocus&&k.onfocus()}),u=0;k.keyDownFn=g;m={id:l,name:this.name||this.command,label:this.label,title:this.title,cls:this.className||"",titleJs:m.gecko&&!m.hc?"":(this.title||"").replace("'",""),keydownFn:g,focusFn:n,clickFn:f};e.output(m,c);if(this.onRender)this.onRender();return k},createPanel:function(a){if(!this._.panel){var c=this._.panelDefinition,
d=this._.panelDefinition.block,e=c.parent||CKEDITOR.document.getBody(),l="cke_combopanel__"+this.name,f=new CKEDITOR.ui.floatPanel(a,e,c),h=f.addListBlock(this.id,d),k=this;f.onShow=function(){this.element.addClass(l);k.setState(CKEDITOR.TRISTATE_ON);k._.on=1;k.editorFocus&&!a.focusManager.hasFocus&&a.focus();if(k.onOpen)k.onOpen();a.once("panelShow",function(){h.focus(!h.multiSelect&&k.getValue())})};f.onHide=function(c){this.element.removeClass(l);k.setState(k.modes&&k.modes[a.mode]?CKEDITOR.TRISTATE_OFF:
CKEDITOR.TRISTATE_DISABLED);k._.on=0;if(!c&&k.onClose)k.onClose()};f.onEscape=function(){f.hide(1)};h.onClick=function(a,b){k.onClick&&k.onClick.call(k,a,b);f.hide()};this._.panel=f;this._.list=h;f.getBlock(this.id).onHide=function(){k._.on=0;k.setState(CKEDITOR.TRISTATE_OFF)};this.init&&this.init()}},setValue:function(a,c){this._.value=a;var d=this.document.getById("cke_"+this.id+"_text");d&&(a||c?d.removeClass("cke_combo_inlinelabel"):(c=this.label,d.addClass("cke_combo_inlinelabel")),d.setText("undefined"!=
typeof c?c:a))},getValue:function(){return this._.value||""},unmarkAll:function(){this._.list.unmarkAll()},mark:function(a){this._.list.mark(a)},hideItem:function(a){this._.list.hideItem(a)},hideGroup:function(a){this._.list.hideGroup(a)},showAll:function(){this._.list.showAll()},add:function(a,c,d){this._.items[a]=d||a;this._.list.add(a,c,d)},startGroup:function(a){this._.list.startGroup(a)},commit:function(){this._.committed||(this._.list.commit(),this._.committed=1,CKEDITOR.ui.fire("ready",this));
this._.committed=1},setState:function(a){if(this._.state!=a){var c=this.document.getById("cke_"+this.id);c.setState(a,"cke_combo");a==CKEDITOR.TRISTATE_DISABLED?c.setAttribute("aria-disabled",!0):c.removeAttribute("aria-disabled");this._.state=a}},getState:function(){return this._.state},enable:function(){this._.state==CKEDITOR.TRISTATE_DISABLED&&this.setState(this._.lastState)},disable:function(){this._.state!=CKEDITOR.TRISTATE_DISABLED&&(this._.lastState=this._.state,this.setState(CKEDITOR.TRISTATE_DISABLED))}},
statics:{handler:{create:function(a){return new CKEDITOR.ui.richCombo(a)}}}});CKEDITOR.ui.prototype.addRichCombo=function(a,c){this.add(a,CKEDITOR.UI_RICHCOMBO,c)}}(),CKEDITOR.plugins.add("format",{requires:"richcombo",init:function(a){if(!a.blockless){for(var e=a.config,b=a.lang.format,c=e.format_tags.split(";"),d={},m=0,l=[],f=0;f<c.length;f++){var h=c[f],k=new CKEDITOR.style(e["format_"+h]);if(!a.filter.customConfig||a.filter.check(k))m++,d[h]=k,d[h]._.enterMode=a.config.enterMode,l.push(k)}0!==
m&&a.ui.addRichCombo("Format",{label:b.label,title:b.panelTitle,toolbar:"styles,20",allowedContent:l,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(e.contentsCss),multiSelect:!1,attributes:{"aria-label":b.panelTitle}},init:function(){this.startGroup(b.panelTitle);for(var a in d){var c=b["tag_"+a];this.add(a,d[a].buildPreview(c),c)}},onClick:function(b){a.focus();a.fire("saveSnapshot");b=d[b];var c=a.elementPath();a[b.checkActive(c,a)?"removeStyle":"applyStyle"](b);setTimeout(function(){a.fire("saveSnapshot")},
0)},onRender:function(){a.on("selectionChange",function(b){var c=this.getValue();b=b.data.path;this.refresh();for(var f in d)if(d[f].checkActive(b,a)){f!=c&&this.setValue(f,a.lang.format["tag_"+f]);return}this.setValue("")},this)},onOpen:function(){this.showAll();for(var b in d)a.activeFilter.check(d[b])||this.hideItem(b)},refresh:function(){var b=a.elementPath();if(b){if(b.isContextFor("p"))for(var c in d)if(a.activeFilter.check(d[c]))return;this.setState(CKEDITOR.TRISTATE_DISABLED)}}})}}}),CKEDITOR.config.format_tags=
"p;h1;h2;h3;h4;h5;h6;pre;address;div",CKEDITOR.config.format_p={element:"p"},CKEDITOR.config.format_div={element:"div"},CKEDITOR.config.format_pre={element:"pre"},CKEDITOR.config.format_address={element:"address"},CKEDITOR.config.format_h1={element:"h1"},CKEDITOR.config.format_h2={element:"h2"},CKEDITOR.config.format_h3={element:"h3"},CKEDITOR.config.format_h4={element:"h4"},CKEDITOR.config.format_h5={element:"h5"},CKEDITOR.config.format_h6={element:"h6"},function(){var a={canUndo:!1,exec:function(a){var b=
a.document.createElement("hr");a.insertElement(b)},allowedContent:"hr",requiredContent:"hr"};CKEDITOR.plugins.add("horizontalrule",{init:function(e){e.blockless||(e.addCommand("horizontalrule",a),e.ui.addButton&&e.ui.addButton("HorizontalRule",{label:e.lang.horizontalrule.toolbar,command:"horizontalrule",toolbar:"insert,40"}))}})}(),CKEDITOR.plugins.add("htmlwriter",{init:function(a){var e=new CKEDITOR.htmlWriter;e.forceSimpleAmpersand=a.config.forceSimpleAmpersand;e.indentationChars=a.config.dataIndentationChars||
"\t";a.dataProcessor.writer=e}}),CKEDITOR.htmlWriter=CKEDITOR.tools.createClass({base:CKEDITOR.htmlParser.basicWriter,$:function(){this.base();this.indentationChars="\t";this.selfClosingEnd=" /\x3e";this.lineBreakChars="\n";this.sortAttributes=1;this._.indent=0;this._.indentation="";this._.inPre=0;this._.rules={};var a=CKEDITOR.dtd,e;for(e in CKEDITOR.tools.extend({},a.$nonBodyContent,a.$block,a.$listItem,a.$tableContent))this.setRules(e,{indent:!a[e]["#"],breakBeforeOpen:1,breakBeforeClose:!a[e]["#"],
breakAfterClose:1,needsSpace:e in a.$block&&!(e in{li:1,dt:1,dd:1})});this.setRules("br",{breakAfterOpen:1});this.setRules("title",{indent:0,breakAfterOpen:0});this.setRules("style",{indent:0,breakBeforeClose:1});this.setRules("pre",{breakAfterOpen:1,indent:0})},proto:{openTag:function(a){var e=this._.rules[a];this._.afterCloser&&e&&e.needsSpace&&this._.needsSpace&&this._.output.push("\n");this._.indent?this.indentation():e&&e.breakBeforeOpen&&(this.lineBreak(),this.indentation());this._.output.push("\x3c",
a);this._.afterCloser=0},openTagClose:function(a,e){var b=this._.rules[a];e?(this._.output.push(this.selfClosingEnd),b&&b.breakAfterClose&&(this._.needsSpace=b.needsSpace)):(this._.output.push("\x3e"),b&&b.indent&&(this._.indentation+=this.indentationChars));b&&b.breakAfterOpen&&this.lineBreak();"pre"==a&&(this._.inPre=1)},attribute:function(a,e){"string"==typeof e&&(this.forceSimpleAmpersand&&(e=e.replace(/&amp;/g,"\x26")),e=CKEDITOR.tools.htmlEncodeAttr(e));this._.output.push(" ",a,'\x3d"',e,'"')},
closeTag:function(a){var e=this._.rules[a];e&&e.indent&&(this._.indentation=this._.indentation.substr(this.indentationChars.length));this._.indent?this.indentation():e&&e.breakBeforeClose&&(this.lineBreak(),this.indentation());this._.output.push("\x3c/",a,"\x3e");"pre"==a&&(this._.inPre=0);e&&e.breakAfterClose&&(this.lineBreak(),this._.needsSpace=e.needsSpace);this._.afterCloser=1},text:function(a){this._.indent&&(this.indentation(),!this._.inPre&&(a=CKEDITOR.tools.ltrim(a)));this._.output.push(a)},
comment:function(a){this._.indent&&this.indentation();this._.output.push("\x3c!--",a,"--\x3e")},lineBreak:function(){!this._.inPre&&0<this._.output.length&&this._.output.push(this.lineBreakChars);this._.indent=1},indentation:function(){!this._.inPre&&this._.indentation&&this._.output.push(this._.indentation);this._.indent=0},reset:function(){this._.output=[];this._.indent=0;this._.indentation="";this._.afterCloser=0;this._.inPre=0},setRules:function(a,e){var b=this._.rules[a];b?CKEDITOR.tools.extend(b,
e,!0):this._.rules[a]=e}}}),function(){function a(a,c){c||(c=a.getSelection().getSelectedElement());if(c&&c.is("img")&&!c.data("cke-realelement")&&!c.isReadOnly())return c}function e(a){var c=a.getStyle("float");if("inherit"==c||"none"==c)c=0;c||(c=a.getAttribute("align"));return c}CKEDITOR.plugins.add("image",{requires:"dialog",init:function(b){if(!b.plugins.image2){CKEDITOR.dialog.add("image",this.path+"dialogs/image.js");var c="img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}";
CKEDITOR.dialog.isTabEnabled(b,"image","advanced")&&(c="img[alt,dir,id,lang,longdesc,!src,title]{*}(*)");b.addCommand("image",new CKEDITOR.dialogCommand("image",{allowedContent:c,requiredContent:"img[alt,src]",contentTransformations:[["img{width}: sizeToStyle","img[width]: sizeToAttribute"],["img{float}: alignmentToStyle","img[align]: alignmentToAttribute"]]}));b.ui.addButton&&b.ui.addButton("Image",{label:b.lang.common.image,command:"image",toolbar:"insert,10"});b.on("doubleclick",function(a){var b=
a.data.element;!b.is("img")||b.data("cke-realelement")||b.isReadOnly()||(a.data.dialog="image")});b.addMenuItems&&b.addMenuItems({image:{label:b.lang.image.menu,command:"image",group:"image"}});b.contextMenu&&b.contextMenu.addListener(function(c){if(a(b,c))return{image:CKEDITOR.TRISTATE_OFF}})}},afterInit:function(b){function c(c){var m=b.getCommand("justify"+c);if(m){if("left"==c||"right"==c)m.on("exec",function(m){var f=a(b),h;f&&(h=e(f),h==c?(f.removeStyle("float"),c==e(f)&&f.removeAttribute("align")):
f.setStyle("float",c),m.cancel())});m.on("refresh",function(m){var f=a(b);f&&(f=e(f),this.setState(f==c?CKEDITOR.TRISTATE_ON:"right"==c||"left"==c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED),m.cancel())})}}b.plugins.image2||(c("left"),c("right"),c("center"),c("block"))}})}(),CKEDITOR.config.image_removeLinkByEmptyURL=!0,function(){function a(a,b){var d=c.exec(a),e=c.exec(b);if(d){if(!d[2]&&"px"==e[2])return e[1];if("px"==d[2]&&!e[2])return e[1]+"px"}return b}var e=CKEDITOR.htmlParser.cssStyle,
b=CKEDITOR.tools.cssLength,c=/^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i,d={elements:{$:function(b){var c=b.attributes;if((c=(c=(c=c&&c["data-cke-realelement"])&&new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(c)))&&c.children[0])&&b.attributes["data-cke-resizable"]){var d=(new e(b)).rules;b=c.attributes;var h=d.width,d=d.height;h&&(b.width=a(b.width,h));d&&(b.height=a(b.height,d))}return c}}};CKEDITOR.plugins.add("fakeobjects",{init:function(a){a.filter.allow("img[!data-cke-realelement,src,alt,title](*){*}",
"fakeobjects")},afterInit:function(a){(a=(a=a.dataProcessor)&&a.htmlFilter)&&a.addRules(d,{applyToAll:!0})}});CKEDITOR.editor.prototype.createFakeElement=function(a,c,d,h){var k=this.lang.fakeobjects,k=k[d]||k.unknown;c={"class":c,"data-cke-realelement":encodeURIComponent(a.getOuterHtml()),"data-cke-real-node-type":a.type,alt:k,title:k,align:a.getAttribute("align")||""};CKEDITOR.env.hc||(c.src=CKEDITOR.tools.transparentImageData);d&&(c["data-cke-real-element-type"]=d);h&&(c["data-cke-resizable"]=
h,d=new e,h=a.getAttribute("width"),a=a.getAttribute("height"),h&&(d.rules.width=b(h)),a&&(d.rules.height=b(a)),d.populate(c));return this.document.createElement("img",{attributes:c})};CKEDITOR.editor.prototype.createFakeParserElement=function(a,c,d,h){var k=this.lang.fakeobjects,k=k[d]||k.unknown,g;g=new CKEDITOR.htmlParser.basicWriter;a.writeHtml(g);g=g.getHtml();c={"class":c,"data-cke-realelement":encodeURIComponent(g),"data-cke-real-node-type":a.type,alt:k,title:k,align:a.attributes.align||""};
CKEDITOR.env.hc||(c.src=CKEDITOR.tools.transparentImageData);d&&(c["data-cke-real-element-type"]=d);h&&(c["data-cke-resizable"]=h,h=a.attributes,a=new e,d=h.width,h=h.height,void 0!==d&&(a.rules.width=b(d)),void 0!==h&&(a.rules.height=b(h)),a.populate(c));return new CKEDITOR.htmlParser.element("img",c)};CKEDITOR.editor.prototype.restoreRealElement=function(b){if(b.data("cke-real-node-type")!=CKEDITOR.NODE_ELEMENT)return null;var c=CKEDITOR.dom.element.createFromHtml(decodeURIComponent(b.data("cke-realelement")),
this.document);if(b.data("cke-resizable")){var d=b.getStyle("width");b=b.getStyle("height");d&&c.setAttribute("width",a(c.getAttribute("width"),d));b&&c.setAttribute("height",a(c.getAttribute("height"),b))}return c}}(),"use strict",function(){function a(a){return a.replace(/'/g,"\\$\x26")}function e(a){for(var b,c=a.length,d=[],f=0;f<c;f++)b=a.charCodeAt(f),d.push(b);return"String.fromCharCode("+d.join(",")+")"}function b(b,c){var d=b.plugins.link,f=d.compiledProtectionFunction.params,e,g;g=[d.compiledProtectionFunction.name,
"("];for(var h=0;h<f.length;h++)d=f[h].toLowerCase(),e=c[d],0<h&&g.push(","),g.push("'",e?a(encodeURIComponent(c[d])):"","'");g.push(")");return g.join("")}function c(a){a=a.config.emailProtection||"";var b;a&&"encode"!=a&&(b={},a.replace(/^([^(]+)\(([^)]+)\)$/,function(a,c,d){b.name=c;b.params=[];d.replace(/[^,\s]+/g,function(a){b.params.push(a)})}));return b}CKEDITOR.plugins.add("link",{requires:"dialog,fakeobjects",onLoad:function(){function a(b){return c.replace(/%1/g,"rtl"==b?"right":"left").replace(/%2/g,
"cke_contents_"+b)}var b="background:url("+CKEDITOR.getUrl(this.path+"images"+(CKEDITOR.env.hidpi?"/hidpi":"")+"/anchor.png")+") no-repeat %1 center;border:1px dotted #00f;background-size:16px;",c=".%2 a.cke_anchor,.%2 a.cke_anchor_empty,.cke_editable.%2 a[name],.cke_editable.%2 a[data-cke-saved-name]{"+b+"padding-%1:18px;cursor:auto;}.%2 img.cke_anchor{"+b+"width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}";CKEDITOR.addCss(a("ltr")+a("rtl"))},init:function(a){var b="a[!href]";
CKEDITOR.dialog.isTabEnabled(a,"link","advanced")&&(b=b.replace("]",",accesskey,charset,dir,id,lang,name,rel,tabindex,title,type]{*}(*)"));CKEDITOR.dialog.isTabEnabled(a,"link","target")&&(b=b.replace("]",",target,onclick]"));a.addCommand("link",new CKEDITOR.dialogCommand("link",{allowedContent:b,requiredContent:"a[href]"}));a.addCommand("anchor",new CKEDITOR.dialogCommand("anchor",{allowedContent:"a[!name,id]",requiredContent:"a[name]"}));a.addCommand("unlink",new CKEDITOR.unlinkCommand);a.addCommand("removeAnchor",
new CKEDITOR.removeAnchorCommand);a.setKeystroke(CKEDITOR.CTRL+76,"link");a.ui.addButton&&(a.ui.addButton("Link",{label:a.lang.link.toolbar,command:"link",toolbar:"links,10"}),a.ui.addButton("Unlink",{label:a.lang.link.unlink,command:"unlink",toolbar:"links,20"}),a.ui.addButton("Anchor",{label:a.lang.link.anchor.toolbar,command:"anchor",toolbar:"links,30"}));CKEDITOR.dialog.add("link",this.path+"dialogs/link.js");CKEDITOR.dialog.add("anchor",this.path+"dialogs/anchor.js");a.on("doubleclick",function(b){var c=
CKEDITOR.plugins.link.getSelectedLink(a)||b.data.element;c.isReadOnly()||(c.is("a")?(b.data.dialog=!c.getAttribute("name")||c.getAttribute("href")&&c.getChildCount()?"link":"anchor",b.data.link=c):CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,c)&&(b.data.dialog="anchor"))},null,null,0);a.on("doubleclick",function(b){b.data.dialog in{link:1,anchor:1}&&b.data.link&&a.getSelection().selectElement(b.data.link)},null,null,20);a.addMenuItems&&a.addMenuItems({anchor:{label:a.lang.link.anchor.menu,command:"anchor",
group:"anchor",order:1},removeAnchor:{label:a.lang.link.anchor.remove,command:"removeAnchor",group:"anchor",order:5},link:{label:a.lang.link.menu,command:"link",group:"link",order:1},unlink:{label:a.lang.link.unlink,command:"unlink",group:"link",order:5}});a.contextMenu&&a.contextMenu.addListener(function(b){if(!b||b.isReadOnly())return null;b=CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,b);if(!b&&!(b=CKEDITOR.plugins.link.getSelectedLink(a)))return null;var c={};b.getAttribute("href")&&b.getChildCount()&&
(c={link:CKEDITOR.TRISTATE_OFF,unlink:CKEDITOR.TRISTATE_OFF});b&&b.hasAttribute("name")&&(c.anchor=c.removeAnchor=CKEDITOR.TRISTATE_OFF);return c});this.compiledProtectionFunction=c(a)},afterInit:function(a){a.dataProcessor.dataFilter.addRules({elements:{a:function(b){return b.attributes.name?b.children.length?null:a.createFakeParserElement(b,"cke_anchor","anchor"):null}}});var b=a._.elementsPath&&a._.elementsPath.filters;b&&b.push(function(b,c){if("a"==c&&(CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,
b)||b.getAttribute("name")&&(!b.getAttribute("href")||!b.getChildCount())))return"anchor"})}});var d=/^javascript:/,m=/^mailto:([^?]+)(?:\?(.+))?$/,l=/subject=([^;?:@&=$,\/]*)/,f=/body=([^;?:@&=$,\/]*)/,h=/^#(.*)$/,k=/^((?:http|https|ftp|news):\/\/)?(.*)$/,g=/^(_(?:self|top|parent|blank))$/,n=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,u=/^javascript:([^(]+)\(([^)]+)\)$/,q=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,
v=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,t={id:"advId",dir:"advLangDir",accessKey:"advAccessKey",name:"advName",lang:"advLangCode",tabindex:"advTabIndex",title:"advTitle",type:"advContentType","class":"advCSSClasses",charset:"advCharset",style:"advStyles",rel:"advRel"};CKEDITOR.plugins.link={getSelectedLink:function(a){var b=a.getSelection(),c=b.getSelectedElement();return c&&c.is("a")?c:(b=b.getRanges()[0])?(b.shrink(CKEDITOR.SHRINK_TEXT),a.elementPath(b.getCommonAncestor()).contains("a",1)):null},getEditorAnchors:function(a){for(var b=
a.editable(),c=b.isInline()&&!a.plugins.divarea?a.document:b,b=c.getElementsByTag("a"),c=c.getElementsByTag("img"),d=[],f=0,e;e=b.getItem(f++);)(e.data("cke-saved-name")||e.hasAttribute("name"))&&d.push({name:e.data("cke-saved-name")||e.getAttribute("name"),id:e.getAttribute("id")});for(f=0;e=c.getItem(f++);)(e=this.tryRestoreFakeAnchor(a,e))&&d.push({name:e.getAttribute("name"),id:e.getAttribute("id")});return d},fakeAnchor:!0,tryRestoreFakeAnchor:function(a,b){if(b&&b.data("cke-real-element-type")&&
"anchor"==b.data("cke-real-element-type")){var c=a.restoreRealElement(b);if(c.data("cke-saved-name"))return c}},parseLinkAttributes:function(a,b){var c=b&&(b.data("cke-saved-href")||b.getAttribute("href"))||"",e=a.plugins.link.compiledProtectionFunction,r=a.config.emailProtection,z,E={};c.match(d)&&("encode"==r?c=c.replace(n,function(a,b,c){return"mailto:"+String.fromCharCode.apply(String,b.split(","))+(c&&c.replace(/\\'/g,"'"))}):r&&c.replace(u,function(a,b,c){if(b==e.name){E.type="email";a=E.email=
{};b=/(^')|('$)/g;c=c.match(/[^,\s]+/g);for(var d=c.length,f,g,h=0;h<d;h++)f=decodeURIComponent,g=c[h].replace(b,"").replace(/\\'/g,"'"),g=f(g),f=e.params[h].toLowerCase(),a[f]=g;a.address=[a.name,a.domain].join("@")}}));if(!E.type)if(r=c.match(h))E.type="anchor",E.anchor={},E.anchor.name=E.anchor.id=r[1];else if(r=c.match(m)){z=c.match(l);c=c.match(f);E.type="email";var y=E.email={};y.address=r[1];z&&(y.subject=decodeURIComponent(z[1]));c&&(y.body=decodeURIComponent(c[1]))}else c&&(z=c.match(k))&&
(E.type="url",E.url={},E.url.protocol=z[1],E.url.url=z[2]);if(b){if(c=b.getAttribute("target"))E.target={type:c.match(g)?c:"frame",name:c};else if(c=(c=b.data("cke-pa-onclick")||b.getAttribute("onclick"))&&c.match(q))for(E.target={type:"popup",name:c[1]};r=v.exec(c[2]);)"yes"!=r[2]&&"1"!=r[2]||r[1]in{height:1,width:1,top:1,left:1}?isFinite(r[2])&&(E.target[r[1]]=r[2]):E.target[r[1]]=!0;var c={},A;for(A in t)(r=b.getAttribute(A))&&(c[t[A]]=r);if(A=b.data("cke-saved-name")||c.advName)c.advName=A;CKEDITOR.tools.isEmpty(c)||
(E.advanced=c)}return E},getLinkAttributes:function(c,d){var f=c.config.emailProtection||"",g={};switch(d.type){case "url":var f=d.url&&void 0!==d.url.protocol?d.url.protocol:"http://",h=d.url&&CKEDITOR.tools.trim(d.url.url)||"";g["data-cke-saved-href"]=0===h.indexOf("/")?h:f+h;break;case "anchor":f=d.anchor&&d.anchor.id;g["data-cke-saved-href"]="#"+(d.anchor&&d.anchor.name||f||"");break;case "email":var k=d.email,h=k.address;switch(f){case "":case "encode":var m=encodeURIComponent(k.subject||""),
l=encodeURIComponent(k.body||""),k=[];m&&k.push("subject\x3d"+m);l&&k.push("body\x3d"+l);k=k.length?"?"+k.join("\x26"):"";"encode"==f?(f=["javascript:void(location.href\x3d'mailto:'+",e(h)],k&&f.push("+'",a(k),"'"),f.push(")")):f=["mailto:",h,k];break;default:f=h.split("@",2),k.name=f[0],k.domain=f[1],f=["javascript:",b(c,k)]}g["data-cke-saved-href"]=f.join("")}if(d.target)if("popup"==d.target.type){for(var f=["window.open(this.href, '",d.target.name||"","', '"],n="resizable status location toolbar menubar fullscreen scrollbars dependent".split(" "),
h=n.length,m=function(a){d.target[a]&&n.push(a+"\x3d"+d.target[a])},k=0;k<h;k++)n[k]+=d.target[n[k]]?"\x3dyes":"\x3dno";m("width");m("left");m("height");m("top");f.push(n.join(","),"'); return false;");g["data-cke-pa-onclick"]=f.join("")}else"notSet"!=d.target.type&&d.target.name&&(g.target=d.target.name);if(d.advanced){for(var q in t)(f=d.advanced[t[q]])&&(g[q]=f);g.name&&(g["data-cke-saved-name"]=g.name)}g["data-cke-saved-href"]&&(g.href=g["data-cke-saved-href"]);q={target:1,onclick:1,"data-cke-pa-onclick":1,
"data-cke-saved-name":1};d.advanced&&CKEDITOR.tools.extend(q,t);for(var v in g)delete q[v];return{set:g,removed:CKEDITOR.tools.objectKeys(q)}}};CKEDITOR.unlinkCommand=function(){};CKEDITOR.unlinkCommand.prototype={exec:function(a){var b=new CKEDITOR.style({element:"a",type:CKEDITOR.STYLE_INLINE,alwaysRemoveElement:1});a.removeStyle(b)},refresh:function(a,b){var c=b.lastElement&&b.lastElement.getAscendant("a",!0);c&&"a"==c.getName()&&c.getAttribute("href")&&c.getChildCount()?this.setState(CKEDITOR.TRISTATE_OFF):
this.setState(CKEDITOR.TRISTATE_DISABLED)},contextSensitive:1,startDisabled:1,requiredContent:"a[href]"};CKEDITOR.removeAnchorCommand=function(){};CKEDITOR.removeAnchorCommand.prototype={exec:function(a){var b=a.getSelection(),c=b.createBookmarks(),d;if(b&&(d=b.getSelectedElement())&&(d.getChildCount()?d.is("a"):CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,d)))d.remove(1);else if(d=CKEDITOR.plugins.link.getSelectedLink(a))d.hasAttribute("href")?(d.removeAttributes({name:1,"data-cke-saved-name":1}),
d.removeClass("cke_anchor")):d.remove(1);b.selectBookmarks(c)},requiredContent:"a[name]"};CKEDITOR.tools.extend(CKEDITOR.config,{linkShowAdvancedTab:!0,linkShowTargetTab:!0})}(),"use strict",function(){function a(a,b,c){return n(b)&&n(c)&&c.equals(b.getNext(function(a){return!(ba(a)||X(a)||u(a))}))}function e(a){this.upper=a[0];this.lower=a[1];this.set.apply(this,a.slice(2))}function b(a){var b=a.element;if(b&&n(b)&&(b=b.getAscendant(a.triggers,!0))&&a.editable.contains(b)){var c=l(b);if("true"==
c.getAttribute("contenteditable"))return b;if(c.is(a.triggers))return c}return null}function c(a,b,c){r(a,b);r(a,c);a=b.size.bottom;c=c.size.top;return a&&c?0|(a+c)/2:a||c}function d(a,b,c){return b=b[c?"getPrevious":"getNext"](function(b){return b&&b.type==CKEDITOR.NODE_TEXT&&!ba(b)||n(b)&&!u(b)&&!g(a,b)})}function m(a,b,c){return a>b&&a<c}function l(a,b){if(a.data("cke-editable"))return null;for(b||(a=a.getParent());a&&!a.data("cke-editable");){if(a.hasAttribute("contenteditable"))return a;a=a.getParent()}return null}
function f(a){var b=a.doc,c=G('\x3cspan contenteditable\x3d"false" style\x3d"'+Q+"position:absolute;border-top:1px dashed "+a.boxColor+'"\x3e\x3c/span\x3e',b),d=CKEDITOR.getUrl(this.path+"images/"+(F.hidpi?"hidpi/":"")+"icon"+(a.rtl?"-rtl":"")+".png");A(c,{attach:function(){this.wrap.getParent()||this.wrap.appendTo(a.editable,!0);return this},lineChildren:[A(G('\x3cspan title\x3d"'+a.editor.lang.magicline.title+'" contenteditable\x3d"false"\x3e\x26#8629;\x3c/span\x3e',b),{base:Q+"height:17px;width:17px;"+
(a.rtl?"left":"right")+":17px;background:url("+d+") center no-repeat "+a.boxColor+";cursor:pointer;"+(F.hc?"font-size: 15px;line-height:14px;border:1px solid #fff;text-align:center;":"")+(F.hidpi?"background-size: 9px 10px;":""),looks:["top:-8px; border-radius: 2px;","top:-17px; border-radius: 2px 2px 0px 0px;","top:-1px; border-radius: 0px 0px 2px 2px;"]}),A(G(V,b),{base:aa+"left:0px;border-left-color:"+a.boxColor+";",looks:["border-width:8px 0 8px 8px;top:-8px","border-width:8px 0 0 8px;top:-8px",
"border-width:0 0 8px 8px;top:0px"]}),A(G(V,b),{base:aa+"right:0px;border-right-color:"+a.boxColor+";",looks:["border-width:8px 8px 8px 0;top:-8px","border-width:8px 8px 0 0;top:-8px","border-width:0 8px 8px 0;top:0px"]})],detach:function(){this.wrap.getParent()&&this.wrap.remove();return this},mouseNear:function(){r(a,this);var b=a.holdDistance,c=this.size;return c&&m(a.mouse.y,c.top-b,c.bottom+b)&&m(a.mouse.x,c.left-b,c.right+b)?!0:!1},place:function(){var b=a.view,c=a.editable,d=a.trigger,f=d.upper,
e=d.lower,g=f||e,h=g.getParent(),k={};this.trigger=d;f&&r(a,f,!0);e&&r(a,e,!0);r(a,h,!0);a.inInlineMode&&z(a,!0);h.equals(c)?(k.left=b.scroll.x,k.right=-b.scroll.x,k.width=""):(k.left=g.size.left-g.size.margin.left+b.scroll.x-(a.inInlineMode?b.editable.left+b.editable.border.left:0),k.width=g.size.outerWidth+g.size.margin.left+g.size.margin.right+b.scroll.x,k.right="");f&&e?k.top=f.size.margin.bottom===e.size.margin.top?0|f.size.bottom+f.size.margin.bottom/2:f.size.margin.bottom<e.size.margin.top?
f.size.bottom+f.size.margin.bottom:f.size.bottom+f.size.margin.bottom-e.size.margin.top:f?e||(k.top=f.size.bottom+f.size.margin.bottom):k.top=e.size.top-e.size.margin.top;d.is(T)||m(k.top,b.scroll.y-15,b.scroll.y+5)?(k.top=a.inInlineMode?0:b.scroll.y,this.look(T)):d.is(O)||m(k.top,b.pane.bottom-5,b.pane.bottom+15)?(k.top=a.inInlineMode?b.editable.height+b.editable.padding.top+b.editable.padding.bottom:b.pane.bottom-1,this.look(O)):(a.inInlineMode&&(k.top-=b.editable.top+b.editable.border.top),this.look(Y));
a.inInlineMode&&(k.top--,k.top+=b.editable.scroll.top,k.left+=b.editable.scroll.left);for(var l in k)k[l]=CKEDITOR.tools.cssLength(k[l]);this.setStyles(k)},look:function(a){if(this.oldLook!=a){for(var b=this.lineChildren.length,c;b--;)(c=this.lineChildren[b]).setAttribute("style",c.base+c.looks[0|a/2]);this.oldLook=a}},wrap:new C("span",a.doc)});for(b=c.lineChildren.length;b--;)c.lineChildren[b].appendTo(c);c.look(Y);c.appendTo(c.wrap);c.unselectable();c.lineChildren[0].on("mouseup",function(b){c.detach();
h(a,function(b){var c=a.line.trigger;b[c.is(D)?"insertBefore":"insertAfter"](c.is(D)?c.lower:c.upper)},!0);a.editor.focus();F.ie||a.enterMode==CKEDITOR.ENTER_BR||a.hotNode.scrollIntoView();b.data.preventDefault(!0)});c.on("mousedown",function(a){a.data.preventDefault(!0)});a.line=c}function h(a,b,c){var d=new CKEDITOR.dom.range(a.doc),f=a.editor,e;F.ie&&a.enterMode==CKEDITOR.ENTER_BR?e=a.doc.createText(M):(e=(e=l(a.element,!0))&&e.data("cke-enter-mode")||a.enterMode,e=new C(K[e],a.doc),e.is("br")||
a.doc.createText(M).appendTo(e));c&&f.fire("saveSnapshot");b(e);d.moveToPosition(e,CKEDITOR.POSITION_AFTER_START);f.getSelection().selectRanges([d]);a.hotNode=e;c&&f.fire("saveSnapshot")}function k(a,c){return{canUndo:!0,modes:{wysiwyg:1},exec:function(){function f(b){var d=F.ie&&9>F.version?" ":M,e=a.hotNode&&a.hotNode.getText()==d&&a.element.equals(a.hotNode)&&a.lastCmdDirection===!!c;h(a,function(d){e&&a.hotNode&&a.hotNode.remove();d[c?"insertAfter":"insertBefore"](b);d.setAttributes({"data-cke-magicline-hot":1,
"data-cke-magicline-dir":!!c});a.lastCmdDirection=!!c});F.ie||a.enterMode==CKEDITOR.ENTER_BR||a.hotNode.scrollIntoView();a.line.detach()}return function(e){e=e.getSelection().getStartElement();var g;e=e.getAscendant(L,1);if(!t(a,e)&&e&&!e.equals(a.editable)&&!e.contains(a.editable)){(g=l(e))&&"false"==g.getAttribute("contenteditable")&&(e=g);a.element=e;g=d(a,e,!c);var h;n(g)&&g.is(a.triggers)&&g.is(J)&&(!d(a,g,!c)||(h=d(a,g,!c))&&n(h)&&h.is(a.triggers))?f(g):(h=b(a,e),n(h)&&(d(a,h,!c)?(e=d(a,h,!c))&&
n(e)&&e.is(a.triggers)&&f(h):f(h)))}}}()}}function g(a,b){if(!b||b.type!=CKEDITOR.NODE_ELEMENT||!b.$)return!1;var c=a.line;return c.wrap.equals(b)||c.wrap.contains(b)}function n(a){return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.$}function u(a){if(!n(a))return!1;var b;(b=q(a))||(n(a)?(b={left:1,right:1,center:1},b=!(!b[a.getComputedStyle("float")]&&!b[a.getAttribute("align")])):b=!1);return b}function q(a){return!!{absolute:1,fixed:1}[a.getComputedStyle("position")]}function v(a,b){return n(b)?b.is(a.triggers):
null}function t(a,b){if(!b)return!1;for(var c=b.getParents(1),d=c.length;d--;)for(var f=a.tabuList.length;f--;)if(c[d].hasAttribute(a.tabuList[f]))return!0;return!1}function p(a,b,c){b=b[c?"getLast":"getFirst"](function(b){return a.isRelevant(b)&&!b.is(U)});if(!b)return!1;r(a,b);return c?b.size.top>a.mouse.y:b.size.bottom<a.mouse.y}function w(a){var b=a.editable,c=a.mouse,d=a.view,f=a.triggerOffset;z(a);var h=c.y>(a.inInlineMode?d.editable.top+d.editable.height/2:Math.min(d.editable.height,d.pane.height)/
2),b=b[h?"getLast":"getFirst"](function(a){return!(ba(a)||X(a))});if(!b)return null;g(a,b)&&(b=a.line.wrap[h?"getPrevious":"getNext"](function(a){return!(ba(a)||X(a))}));if(!n(b)||u(b)||!v(a,b))return null;r(a,b);return!h&&0<=b.size.top&&m(c.y,0,b.size.top+f)?(a=a.inInlineMode||0===d.scroll.y?T:Y,new e([null,b,D,P,a])):h&&b.size.bottom<=d.pane.height&&m(c.y,b.size.bottom-f,d.pane.height)?(a=a.inInlineMode||m(b.size.bottom,d.pane.height-f,d.pane.height)?O:Y,new e([b,null,N,P,a])):null}function x(a){var c=
a.mouse,f=a.view,g=a.triggerOffset,h=b(a);if(!h)return null;r(a,h);var g=Math.min(g,0|h.size.outerHeight/2),k=[],l,q;if(m(c.y,h.size.top-1,h.size.top+g))q=!1;else if(m(c.y,h.size.bottom-g,h.size.bottom+1))q=!0;else return null;if(u(h)||p(a,h,q)||h.getParent().is(W))return null;var t=d(a,h,!q);if(t){if(t&&t.type==CKEDITOR.NODE_TEXT)return null;if(n(t)){if(u(t)||!v(a,t)||t.getParent().is(W))return null;k=[t,h][q?"reverse":"concat"]().concat([R,P])}}else h.equals(a.editable[q?"getLast":"getFirst"](a.isRelevant))?
(z(a),q&&m(c.y,h.size.bottom-g,f.pane.height)&&m(h.size.bottom,f.pane.height-g,f.pane.height)?l=O:m(c.y,0,h.size.top+g)&&(l=T)):l=Y,k=[null,h][q?"reverse":"concat"]().concat([q?N:D,P,l,h.equals(a.editable[q?"getLast":"getFirst"](a.isRelevant))?q?O:T:Y]);return 0 in k?new e(k):null}function B(a,b,c,d){for(var f=b.getDocumentPosition(),e={},g={},h={},k={},m=ca.length;m--;)e[ca[m]]=parseInt(b.getComputedStyle.call(b,"border-"+ca[m]+"-width"),10)||0,h[ca[m]]=parseInt(b.getComputedStyle.call(b,"padding-"+
ca[m]),10)||0,g[ca[m]]=parseInt(b.getComputedStyle.call(b,"margin-"+ca[m]),10)||0;c&&!d||E(a,d);k.top=f.y-(c?0:a.view.scroll.y);k.left=f.x-(c?0:a.view.scroll.x);k.outerWidth=b.$.offsetWidth;k.outerHeight=b.$.offsetHeight;k.height=k.outerHeight-(h.top+h.bottom+e.top+e.bottom);k.width=k.outerWidth-(h.left+h.right+e.left+e.right);k.bottom=k.top+k.outerHeight;k.right=k.left+k.outerWidth;a.inInlineMode&&(k.scroll={top:b.$.scrollTop,left:b.$.scrollLeft});return A({border:e,padding:h,margin:g,ignoreScroll:c},
k,!0)}function r(a,b,c){if(!n(b))return b.size=null;if(!b.size)b.size={};else if(b.size.ignoreScroll==c&&b.size.date>new Date-S)return null;return A(b.size,B(a,b,c),{date:+new Date},!0)}function z(a,b){a.view.editable=B(a,a.editable,b,!0)}function E(a,b){a.view||(a.view={});var c=a.view;if(!(!b&&c&&c.date>new Date-S)){var d=a.win,c=d.getScrollPosition(),d=d.getViewPaneSize();A(a.view,{scroll:{x:c.x,y:c.y,width:a.doc.$.documentElement.scrollWidth-d.width,height:a.doc.$.documentElement.scrollHeight-
d.height},pane:{width:d.width,height:d.height,bottom:d.height+c.y},date:+new Date},!0)}}function y(a,b,c,d){for(var f=d,g=d,h=0,k=!1,m=!1,l=a.view.pane.height,n=a.mouse;n.y+h<l&&0<n.y-h;){k||(k=b(f,d));m||(m=b(g,d));!k&&0<n.y-h&&(f=c(a,{x:n.x,y:n.y-h}));!m&&n.y+h<l&&(g=c(a,{x:n.x,y:n.y+h}));if(k&&m)break;h+=2}return new e([f,g,null,null])}CKEDITOR.plugins.add("magicline",{init:function(a){var c=a.config,m=c.magicline_triggerOffset||30,l={editor:a,enterMode:c.enterMode,triggerOffset:m,holdDistance:0|
m*(c.magicline_holdDistance||.5),boxColor:c.magicline_color||"#ff0000",rtl:"rtl"==c.contentsLangDirection,tabuList:["data-cke-hidden-sel"].concat(c.magicline_tabuList||[]),triggers:c.magicline_everywhere?L:{table:1,hr:1,div:1,ul:1,ol:1,dl:1,form:1,blockquote:1}},p,v,r;l.isRelevant=function(a){return n(a)&&!g(l,a)&&!u(a)};a.on("contentDom",function(){var m=a.editable(),n=a.document,u=a.window;A(l,{editable:m,inInlineMode:m.isInline(),doc:n,win:u,hotNode:null},!0);l.boundary=l.inInlineMode?l.editable:
l.doc.getDocumentElement();m.is(H.$inline)||(l.inInlineMode&&!q(m)&&m.setStyles({position:"relative",top:null,left:null}),f.call(this,l),E(l),m.attachListener(a,"beforeUndoImage",function(){l.line.detach()}),m.attachListener(a,"beforeGetData",function(){l.line.wrap.getParent()&&(l.line.detach(),a.once("getData",function(){l.line.attach()},null,null,1E3))},null,null,0),m.attachListener(l.inInlineMode?n:n.getWindow().getFrame(),"mouseout",function(b){if("wysiwyg"==a.mode)if(l.inInlineMode){var c=b.data.$.clientX;
b=b.data.$.clientY;E(l);z(l,!0);var d=l.view.editable,f=l.view.scroll;c>d.left-f.x&&c<d.right-f.x&&b>d.top-f.y&&b<d.bottom-f.y||(clearTimeout(r),r=null,l.line.detach())}else clearTimeout(r),r=null,l.line.detach()}),m.attachListener(m,"keyup",function(){l.hiddenMode=0}),m.attachListener(m,"keydown",function(b){if("wysiwyg"==a.mode)switch(b.data.getKeystroke()){case 2228240:case 16:l.hiddenMode=1,l.line.detach()}}),m.attachListener(l.inInlineMode?m:n,"mousemove",function(b){v=!0;if("wysiwyg"==a.mode&&
!a.readOnly&&!r){var c={x:b.data.$.clientX,y:b.data.$.clientY};r=setTimeout(function(){l.mouse=c;r=l.trigger=null;E(l);v&&!l.hiddenMode&&a.focusManager.hasFocus&&!l.line.mouseNear()&&(l.element=da(l,!0))&&((l.trigger=w(l)||x(l)||ea(l))&&!t(l,l.trigger.upper||l.trigger.lower)?l.line.attach().place():(l.trigger=null,l.line.detach()),v=!1)},30)}}),m.attachListener(u,"scroll",function(){"wysiwyg"==a.mode&&(l.line.detach(),F.webkit&&(l.hiddenMode=1,clearTimeout(p),p=setTimeout(function(){l.mouseDown||
(l.hiddenMode=0)},50)))}),m.attachListener(I?n:u,"mousedown",function(){"wysiwyg"==a.mode&&(l.line.detach(),l.hiddenMode=1,l.mouseDown=1)}),m.attachListener(I?n:u,"mouseup",function(){l.hiddenMode=0;l.mouseDown=0}),a.addCommand("accessPreviousSpace",k(l)),a.addCommand("accessNextSpace",k(l,!0)),a.setKeystroke([[c.magicline_keystrokePrevious,"accessPreviousSpace"],[c.magicline_keystrokeNext,"accessNextSpace"]]),a.on("loadSnapshot",function(){var b,c,d,f;for(f in{p:1,br:1,div:1})for(b=a.document.getElementsByTag(f),
d=b.count();d--;)if((c=b.getItem(d)).data("cke-magicline-hot")){l.hotNode=c;l.lastCmdDirection="true"===c.data("cke-magicline-dir")?!0:!1;return}}),this.backdoor={accessFocusSpace:h,boxTrigger:e,isLine:g,getAscendantTrigger:b,getNonEmptyNeighbour:d,getSize:B,that:l,triggerEdge:x,triggerEditable:w,triggerExpand:ea})},this)}});var A=CKEDITOR.tools.extend,C=CKEDITOR.dom.element,G=C.createFromHtml,F=CKEDITOR.env,I=CKEDITOR.env.ie&&9>CKEDITOR.env.version,H=CKEDITOR.dtd,K={},D=128,N=64,R=32,P=16,T=4,O=
2,Y=1,M=" ",W=H.$listItem,U=H.$tableContent,J=A({},H.$nonEditable,H.$empty),L=H.$block,S=100,Q="width:0px;height:0px;padding:0px;margin:0px;display:block;z-index:9999;color:#fff;position:absolute;font-size: 0px;line-height:0px;",aa=Q+"border-color:transparent;display:block;border-style:solid;",V="\x3cspan\x3e"+M+"\x3c/span\x3e";K[CKEDITOR.ENTER_BR]="br";K[CKEDITOR.ENTER_P]="p";K[CKEDITOR.ENTER_DIV]="div";e.prototype={set:function(a,b,c){this.properties=a+b+(c||Y);return this},is:function(a){return(this.properties&
a)==a}};var da=function(){function a(b,c){var d=b.$.elementFromPoint(c.x,c.y);return d&&d.nodeType?new CKEDITOR.dom.element(d):null}return function(b,c,d){if(!b.mouse)return null;var f=b.doc,e=b.line.wrap;d=d||b.mouse;var h=a(f,d);c&&g(b,h)&&(e.hide(),h=a(f,d),e.show());return!h||h.type!=CKEDITOR.NODE_ELEMENT||!h.$||F.ie&&9>F.version&&!b.boundary.equals(h)&&!b.boundary.contains(h)?null:h}}(),ba=CKEDITOR.dom.walker.whitespaces(),X=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_COMMENT),ea=function(){function b(f){var e=
f.element,h,g,k;if(!n(e)||e.contains(f.editable)||e.isReadOnly())return null;k=y(f,function(a,b){return!b.equals(a)},function(a,b){return da(a,!0,b)},e);h=k.upper;g=k.lower;if(a(f,h,g))return k.set(R,8);if(h&&e.contains(h))for(;!h.getParent().equals(e);)h=h.getParent();else h=e.getFirst(function(a){return d(f,a)});if(g&&e.contains(g))for(;!g.getParent().equals(e);)g=g.getParent();else g=e.getLast(function(a){return d(f,a)});if(!h||!g)return null;r(f,h);r(f,g);if(!m(f.mouse.y,h.size.top,g.size.bottom))return null;
for(var e=Number.MAX_VALUE,l,q,p,t;g&&!g.equals(h)&&(q=h.getNext(f.isRelevant));)l=Math.abs(c(f,h,q)-f.mouse.y),l<e&&(e=l,p=h,t=q),h=q,r(f,h);if(!p||!t||!m(f.mouse.y,p.size.top,t.size.bottom))return null;k.upper=p;k.lower=t;return k.set(R,8)}function d(a,b){return!(b&&b.type==CKEDITOR.NODE_TEXT||X(b)||u(b)||g(a,b)||b.type==CKEDITOR.NODE_ELEMENT&&b.$&&b.is("br"))}return function(c){var d=b(c),f;if(f=d){f=d.upper;var e=d.lower;f=!f||!e||u(e)||u(f)||e.equals(f)||f.equals(e)||e.contains(f)||f.contains(e)?
!1:v(c,f)&&v(c,e)&&a(c,f,e)?!0:!1}return f?d:null}}(),ca=["top","left","right","bottom"]}(),CKEDITOR.config.magicline_keystrokePrevious=CKEDITOR.CTRL+CKEDITOR.SHIFT+51,CKEDITOR.config.magicline_keystrokeNext=CKEDITOR.CTRL+CKEDITOR.SHIFT+52,function(){function a(a){if(!a||a.type!=CKEDITOR.NODE_ELEMENT||"form"!=a.getName())return[];for(var b=[],c=["style","className"],d=0;d<c.length;d++){var e=a.$.elements.namedItem(c[d]);e&&(e=new CKEDITOR.dom.element(e),b.push([e,e.nextSibling]),e.remove())}return b}
function e(a,b){if(a&&a.type==CKEDITOR.NODE_ELEMENT&&"form"==a.getName()&&0<b.length)for(var c=b.length-1;0<=c;c--){var d=b[c][0],e=b[c][1];e?d.insertBefore(e):d.appendTo(a)}}function b(b,c){var d=a(b),h={},k=b.$;c||(h["class"]=k.className||"",k.className="");h.inline=k.style.cssText||"";c||(k.style.cssText="position: static; overflow: visible");e(d);return h}function c(b,c){var d=a(b),h=b.$;"class"in c&&(h.className=c["class"]);"inline"in c&&(h.style.cssText=c.inline);e(d)}function d(a){if(!a.editable().isInline()){var b=
CKEDITOR.instances,c;for(c in b){var d=b[c];"wysiwyg"!=d.mode||d.readOnly||(d=d.document.getBody(),d.setAttribute("contentEditable",!1),d.setAttribute("contentEditable",!0))}a.editable().hasFocus&&(a.toolbox.focus(),a.focus())}}CKEDITOR.plugins.add("maximize",{init:function(a){function e(){var b=k.getViewPaneSize();a.resize(b.width,b.height,null,!0)}if(a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var f=a.lang,h=CKEDITOR.document,k=h.getWindow(),g,n,u,q=CKEDITOR.TRISTATE_OFF;a.addCommand("maximize",
{modes:{wysiwyg:!CKEDITOR.env.iOS,source:!CKEDITOR.env.iOS},readOnly:1,editorFocus:!1,exec:function(){var v=a.container.getFirst(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_inner")}),t=a.ui.space("contents");if("wysiwyg"==a.mode){var p=a.getSelection();g=p&&p.getRanges();n=k.getScrollPosition()}else{var w=a.editable().$;g=!CKEDITOR.env.ie&&[w.selectionStart,w.selectionEnd];n=[w.scrollLeft,w.scrollTop]}if(this.state==CKEDITOR.TRISTATE_OFF){k.on("resize",e);u=k.getScrollPosition();
for(p=a.container;p=p.getParent();)p.setCustomData("maximize_saved_styles",b(p)),p.setStyle("z-index",a.config.baseFloatZIndex-5);t.setCustomData("maximize_saved_styles",b(t,!0));v.setCustomData("maximize_saved_styles",b(v,!0));t={overflow:CKEDITOR.env.webkit?"":"hidden",width:0,height:0};h.getDocumentElement().setStyles(t);!CKEDITOR.env.gecko&&h.getDocumentElement().setStyle("position","fixed");CKEDITOR.env.gecko&&CKEDITOR.env.quirks||h.getBody().setStyles(t);CKEDITOR.env.ie?setTimeout(function(){k.$.scrollTo(0,
0)},0):k.$.scrollTo(0,0);v.setStyle("position",CKEDITOR.env.gecko&&CKEDITOR.env.quirks?"fixed":"absolute");v.$.offsetLeft;v.setStyles({"z-index":a.config.baseFloatZIndex-5,left:"0px",top:"0px"});v.addClass("cke_maximized");e();t=v.getDocumentPosition();v.setStyles({left:-1*t.x+"px",top:-1*t.y+"px"});CKEDITOR.env.gecko&&d(a)}else if(this.state==CKEDITOR.TRISTATE_ON){k.removeListener("resize",e);for(var p=[t,v],x=0;x<p.length;x++)c(p[x],p[x].getCustomData("maximize_saved_styles")),p[x].removeCustomData("maximize_saved_styles");
for(p=a.container;p=p.getParent();)c(p,p.getCustomData("maximize_saved_styles")),p.removeCustomData("maximize_saved_styles");CKEDITOR.env.ie?setTimeout(function(){k.$.scrollTo(u.x,u.y)},0):k.$.scrollTo(u.x,u.y);v.removeClass("cke_maximized");CKEDITOR.env.webkit&&(v.setStyle("display","inline"),setTimeout(function(){v.setStyle("display","block")},0));a.fire("resize",{outerHeight:a.container.$.offsetHeight,contentsHeight:t.$.offsetHeight,outerWidth:a.container.$.offsetWidth})}this.toggleState();if(p=
this.uiItems[0])t=this.state==CKEDITOR.TRISTATE_OFF?f.maximize.maximize:f.maximize.minimize,p=CKEDITOR.document.getById(p._.id),p.getChild(1).setHtml(t),p.setAttribute("title",t),p.setAttribute("href",'javascript:void("'+t+'");');"wysiwyg"==a.mode?g?(CKEDITOR.env.gecko&&d(a),a.getSelection().selectRanges(g),(w=a.getSelection().getStartElement())&&w.scrollIntoView(!0)):k.$.scrollTo(n.x,n.y):(g&&(w.selectionStart=g[0],w.selectionEnd=g[1]),w.scrollLeft=n[0],w.scrollTop=n[1]);g=n=null;q=this.state;a.fire("maximize",
this.state)},canUndo:!1});a.ui.addButton&&a.ui.addButton("Maximize",{label:f.maximize.maximize,command:"maximize",toolbar:"tools,10"});a.on("mode",function(){var b=a.getCommand("maximize");b.setState(b.state==CKEDITOR.TRISTATE_DISABLED?CKEDITOR.TRISTATE_DISABLED:q)},null,null,100)}}})}(),function(){function a(a,c,d){var e=CKEDITOR.cleanWord;e?d():(a=CKEDITOR.getUrl(a.config.pasteFromWordCleanupFile||c+"filter/default.js"),CKEDITOR.scriptLoader.load(a,d,null,!0));return!e}function e(a){a.data.type=
"html"}CKEDITOR.plugins.add("pastefromword",{requires:"clipboard",init:function(b){var c=0,d=this.path;b.addCommand("pastefromword",{canUndo:!1,async:!0,exec:function(a){var b=this;c=1;a.once("beforePaste",e);a.getClipboardData({title:a.lang.pastefromword.title},function(c){c&&a.fire("paste",{type:"html",dataValue:c.dataValue,method:"paste",dataTransfer:CKEDITOR.plugins.clipboard.initPasteDataTransfer()});a.fire("afterCommandExec",{name:"pastefromword",command:b,returnValue:!!c})})}});b.ui.addButton&&
b.ui.addButton("PasteFromWord",{label:b.lang.pastefromword.toolbar,command:"pastefromword",toolbar:"clipboard,50"});b.on("pasteState",function(a){b.getCommand("pastefromword").setState(a.data)});b.on("paste",function(e){var l=e.data,f=l.dataValue;if(f&&(c||/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/.test(f))){l.dontFilter=!0;var h=a(b,d,function(){if(h)b.fire("paste",l);else if(!b.config.pasteFromWordPromptCleanup||c||confirm(b.lang.pastefromword.confirmCleanup))l.dataValue=CKEDITOR.cleanWord(f,
b);c=0});h&&e.cancel()}},null,null,3)}})}(),function(){var a={canUndo:!1,async:!0,exec:function(e){e.getClipboardData({title:e.lang.pastetext.title},function(b){b&&e.fire("paste",{type:"text",dataValue:b.dataValue,method:"paste",dataTransfer:CKEDITOR.plugins.clipboard.initPasteDataTransfer()});e.fire("afterCommandExec",{name:"pastetext",command:a,returnValue:!!b})})}};CKEDITOR.plugins.add("pastetext",{requires:"clipboard",init:function(e){e.addCommand("pastetext",a);e.ui.addButton&&e.ui.addButton("PasteText",
{label:e.lang.pastetext.button,command:"pastetext",toolbar:"clipboard,40"});if(e.config.forcePasteAsPlainText)e.on("beforePaste",function(a){"html"!=a.data.type&&(a.data.type="text")});e.on("pasteState",function(a){e.getCommand("pastetext").setState(a.data)})}})}(),CKEDITOR.plugins.add("removeformat",{init:function(a){a.addCommand("removeFormat",CKEDITOR.plugins.removeformat.commands.removeformat);a.ui.addButton&&a.ui.addButton("RemoveFormat",{label:a.lang.removeformat.toolbar,command:"removeFormat",
toolbar:"cleanup,10"})}}),CKEDITOR.plugins.removeformat={commands:{removeformat:{exec:function(a){for(var e=a._.removeFormatRegex||(a._.removeFormatRegex=new RegExp("^(?:"+a.config.removeFormatTags.replace(/,/g,"|")+")$","i")),b=a._.removeAttributes||(a._.removeAttributes=a.config.removeFormatAttributes.split(",")),c=CKEDITOR.plugins.removeformat.filter,d=a.getSelection().getRanges(),m=d.createIterator(),l=function(a){return a.type==CKEDITOR.NODE_ELEMENT},f;f=m.getNextRange();){f.collapsed||f.enlarge(CKEDITOR.ENLARGE_ELEMENT);
var h=f.createBookmark(),k=h.startNode,g=h.endNode,n=function(b){for(var d=a.elementPath(b),f=d.elements,g=1,h;(h=f[g])&&!h.equals(d.block)&&!h.equals(d.blockLimit);g++)e.test(h.getName())&&c(a,h)&&b.breakParent(h)};n(k);if(g)for(n(g),k=k.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT);k&&!k.equals(g);)if(k.isReadOnly()){if(k.getPosition(g)&CKEDITOR.POSITION_CONTAINS)break;k=k.getNext(l)}else n=k.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT),"img"==k.getName()&&k.data("cke-realelement")||!c(a,k)||(e.test(k.getName())?
k.remove(1):(k.removeAttributes(b),a.fire("removeFormatCleanup",k))),k=n;f.moveToBookmark(h)}a.forceNextSelectionCheck();a.getSelection().selectRanges(d)}}},filter:function(a,e){for(var b=a._.removeFormatFilters||[],c=0;c<b.length;c++)if(!1===b[c](e))return!1;return!0}},CKEDITOR.editor.prototype.addRemoveFormatFilter=function(a){this._.removeFormatFilters||(this._.removeFormatFilters=[]);this._.removeFormatFilters.push(a)},CKEDITOR.config.removeFormatTags="b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var",
CKEDITOR.config.removeFormatAttributes="class,style,lang,width,height,align,hspace,valign",CKEDITOR.plugins.add("resize",{init:function(a){function e(b){var d=h.width,e=h.height,l=d+(b.data.$.screenX-f.x)*("rtl"==m?-1:1);b=e+(b.data.$.screenY-f.y);k&&(d=Math.max(c.resize_minWidth,Math.min(l,c.resize_maxWidth)));g&&(e=Math.max(c.resize_minHeight,Math.min(b,c.resize_maxHeight)));a.resize(k?d:null,e)}function b(){CKEDITOR.document.removeListener("mousemove",e);CKEDITOR.document.removeListener("mouseup",
b);a.document&&(a.document.removeListener("mousemove",e),a.document.removeListener("mouseup",b))}var c=a.config,d=a.ui.spaceId("resizer"),m=a.element?a.element.getDirection(1):"ltr";!c.resize_dir&&(c.resize_dir="vertical");void 0===c.resize_maxWidth&&(c.resize_maxWidth=3E3);void 0===c.resize_maxHeight&&(c.resize_maxHeight=3E3);void 0===c.resize_minWidth&&(c.resize_minWidth=750);void 0===c.resize_minHeight&&(c.resize_minHeight=250);if(!1!==c.resize_enabled){var l=null,f,h,k=("both"==c.resize_dir||
"horizontal"==c.resize_dir)&&c.resize_minWidth!=c.resize_maxWidth,g=("both"==c.resize_dir||"vertical"==c.resize_dir)&&c.resize_minHeight!=c.resize_maxHeight,n=CKEDITOR.tools.addFunction(function(d){l||(l=a.getResizable());h={width:l.$.offsetWidth||0,height:l.$.offsetHeight||0};f={x:d.screenX,y:d.screenY};c.resize_minWidth>h.width&&(c.resize_minWidth=h.width);c.resize_minHeight>h.height&&(c.resize_minHeight=h.height);CKEDITOR.document.on("mousemove",e);CKEDITOR.document.on("mouseup",b);a.document&&
(a.document.on("mousemove",e),a.document.on("mouseup",b));d.preventDefault&&d.preventDefault()});a.on("destroy",function(){CKEDITOR.tools.removeFunction(n)});a.on("uiSpace",function(b){if("bottom"==b.data.space){var c="";k&&!g&&(c=" cke_resizer_horizontal");!k&&g&&(c=" cke_resizer_vertical");var f='\x3cspan id\x3d"'+d+'" class\x3d"cke_resizer'+c+" cke_resizer_"+m+'" title\x3d"'+CKEDITOR.tools.htmlEncode(a.lang.common.resize)+'" onmousedown\x3d"CKEDITOR.tools.callFunction('+n+', event)"\x3e'+("ltr"==
m?"◢":"◣")+"\x3c/span\x3e";"ltr"==m&&"ltr"==c?b.data.html+=f:b.data.html=f+b.data.html}},a,null,100);a.on("maximize",function(b){a.ui.space("resizer")[b.data==CKEDITOR.TRISTATE_ON?"hide":"show"]()})}}}),CKEDITOR.plugins.add("menubutton",{requires:"button,menu",onLoad:function(){var a=function(a){var b=this._,c=b.menu;b.state!==CKEDITOR.TRISTATE_DISABLED&&(b.on&&c?c.hide():(b.previousState=b.state,c||(c=b.menu=new CKEDITOR.menu(a,{panel:{className:"cke_menu_panel",attributes:{"aria-label":a.lang.common.options}}}),
c.onHide=CKEDITOR.tools.bind(function(){var c=this.command?a.getCommand(this.command).modes:this.modes;this.setState(!c||c[a.mode]?b.previousState:CKEDITOR.TRISTATE_DISABLED);b.on=0},this),this.onMenu&&c.addListener(this.onMenu)),this.setState(CKEDITOR.TRISTATE_ON),b.on=1,setTimeout(function(){c.show(CKEDITOR.document.getById(b.id),4)},0)))};CKEDITOR.ui.menuButton=CKEDITOR.tools.createClass({base:CKEDITOR.ui.button,$:function(e){delete e.panel;this.base(e);this.hasArrow=!0;this.click=a},statics:{handler:{create:function(a){return new CKEDITOR.ui.menuButton(a)}}}})},
beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_MENUBUTTON,CKEDITOR.ui.menuButton.handler)}}),CKEDITOR.UI_MENUBUTTON="menubutton","use strict",CKEDITOR.plugins.add("scayt",{requires:"menubutton,dialog",tabToOpen:null,dialogName:"scaytDialog",init:function(a){var e=this,b=CKEDITOR.plugins.scayt;this.bindEvents(a);this.parseConfig(a);this.addRule(a);CKEDITOR.dialog.add(this.dialogName,CKEDITOR.getUrl(this.path+"dialogs/options.js"));this.addMenuItems(a);var c=a.lang.scayt,d=CKEDITOR.env;a.ui.add("Scayt",
CKEDITOR.UI_MENUBUTTON,{label:c.text_title,title:a.plugins.wsc?a.lang.wsc.title:c.text_title,modes:{wysiwyg:!(d.ie&&(8>d.version||d.quirks))},toolbar:"spellchecker,20",refresh:function(){var c=a.ui.instances.Scayt.getState();a.scayt&&(c=b.state[a.name]?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF);a.fire("scaytButtonState",c)},onRender:function(){var b=this;a.on("scaytButtonState",function(a){void 0!==typeof a.data&&b.setState(a.data)})},onMenu:function(){var c=a.scayt;a.getMenuItem("scaytToggle").label=
a.lang.scayt[c&&b.state[a.name]?"btn_disable":"btn_enable"];c={scaytToggle:CKEDITOR.TRISTATE_OFF,scaytOptions:c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytLangs:c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytDict:c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytAbout:c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,WSC:a.plugins.wsc?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED};a.config.scayt_uiTabs[0]||delete c.scaytOptions;a.config.scayt_uiTabs[1]||delete c.scaytLangs;
a.config.scayt_uiTabs[2]||delete c.scaytDict;return c}});a.contextMenu&&a.addMenuItems&&(a.contextMenu.addListener(function(b,c){var d=a.scayt,h;if(d){var k=d.getSelectionNode();if(k=k?k.getAttribute(d.getNodeAttribute()):k)h=e.menuGenerator(a,k,e),d.showBanner("."+a.contextMenu._.definition.panel.className.split(" ").join(" ."))}return h}),a.contextMenu._.onHide=CKEDITOR.tools.override(a.contextMenu._.onHide,function(b){return function(){var c=a.scayt;c&&c.hideBanner();return b.apply(this)}}))},
addMenuItems:function(a){var e=this,b=CKEDITOR.plugins.scayt;a.addMenuGroup("scaytButton");var c=a.config.scayt_contextMenuItemsOrder.split("|");if(c&&c.length)for(var d=0;d<c.length;d++)a.addMenuGroup("scayt_"+c[d],d-10);a.addCommand("scaytToggle",{exec:function(a){var c=a.scayt;b.state[a.name]=!b.state[a.name];!0===b.state[a.name]?c||b.createScayt(a):c&&b.destroy(a)}});a.addCommand("scaytAbout",{exec:function(a){a.scayt.tabToOpen="about";a.lockSelection();a.openDialog(e.dialogName)}});a.addCommand("scaytOptions",
{exec:function(a){a.scayt.tabToOpen="options";a.lockSelection();a.openDialog(e.dialogName)}});a.addCommand("scaytLangs",{exec:function(a){a.scayt.tabToOpen="langs";a.lockSelection();a.openDialog(e.dialogName)}});a.addCommand("scaytDict",{exec:function(a){a.scayt.tabToOpen="dictionaries";a.lockSelection();a.openDialog(e.dialogName)}});c={scaytToggle:{label:a.lang.scayt.btn_enable,group:"scaytButton",command:"scaytToggle"},scaytAbout:{label:a.lang.scayt.btn_about,group:"scaytButton",command:"scaytAbout"},
scaytOptions:{label:a.lang.scayt.btn_options,group:"scaytButton",command:"scaytOptions"},scaytLangs:{label:a.lang.scayt.btn_langs,group:"scaytButton",command:"scaytLangs"},scaytDict:{label:a.lang.scayt.btn_dictionaries,group:"scaytButton",command:"scaytDict"}};a.plugins.wsc&&(c.WSC={label:a.lang.wsc.toolbar,group:"scaytButton",onClick:function(){var b=CKEDITOR.plugins.scayt,c=a.scayt,d=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.container.getText():a.document.getBody().getText();(d=d.replace(/\s/g,
""))?(c&&b.state[a.name]&&c.setMarkupPaused&&c.setMarkupPaused(!0),a.lockSelection(),a.execCommand("checkspell")):alert("Nothing to check!")}});a.addMenuItems(c)},bindEvents:function(a){function e(){var b=a.scayt;b&&(b.removeMarkupInSelectionNode(),b.fire("startSpellCheck"))}var b=CKEDITOR.plugins.scayt,c=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE,d=function(){b.destroy(a)},m=function(){!b.state[a.name]||a.readOnly||a.scayt||b.createScayt(a)},l=function(){var b=a.editable();b.attachListener(b,"focus",
function(b){CKEDITOR.plugins.scayt&&!a.scayt&&setTimeout(m,0);b=CKEDITOR.plugins.scayt&&CKEDITOR.plugins.scayt.state[a.name]&&a.scayt;var d,f;if((c||b)&&a._.savedSelection){b=a._.savedSelection.getSelectedElement();b=!b&&a._.savedSelection.getRanges();for(var e=0;e<b.length;e++)f=b[e],"string"===typeof f.startContainer.$.nodeValue&&(d=f.startContainer.getText().length,(d<f.startOffset||d<f.endOffset)&&a.unlockSelection(!1))}},this,null,-10)},f=function(){c?(a.on("blur",d),a.on("focus",m),a.focusManager.hasFocus&&
m()):m();l()};a.on("contentDom",f);a.on("beforeCommandExec",function(c){var d;if(c.data.name in b.options.disablingCommandExec&&"wysiwyg"==a.mode){if(d=a.scayt)b.destroy(a),a.fire("scaytButtonState",CKEDITOR.TRISTATE_DISABLED)}else if("bold"===c.data.name||"italic"===c.data.name||"underline"===c.data.name||"strike"===c.data.name||"subscript"===c.data.name||"superscript"===c.data.name||"enter"===c.data.name)if(d=a.scayt)d.removeMarkupInSelectionNode(),setTimeout(function(){d.fire("startSpellCheck")},
0)});a.on("beforeSetMode",function(c){if("source"==c.data){if(c=a.scayt)b.destroy(a),a.fire("scaytButtonState",CKEDITOR.TRISTATE_DISABLED);a.document&&a.document.getBody().removeAttribute("_jquid")}});a.on("afterCommandExec",function(b){var c;"wysiwyg"!=a.mode||"undo"!=b.data.name&&"redo"!=b.data.name||(c=a.scayt)&&setTimeout(function(){c.fire("startSpellCheck")},250)});a.on("readOnly",function(c){var d;c&&(d=a.scayt,!0===c.editor.readOnly?d&&d.fire("removeMarkupInDocument",{}):d?d.fire("startSpellCheck"):
"wysiwyg"==c.editor.mode&&!0===b.state[c.editor.name]&&(b.createScayt(a),c.editor.fire("scaytButtonState",CKEDITOR.TRISTATE_ON)))});a.on("beforeDestroy",d);a.on("setData",function(){d();(a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE||a.plugins.divarea)&&f()},this,null,50);a.on("insertElement",function(){CKEDITOR.env.ie?setTimeout(function(){e()},50):e()},this,null,50);a.on("insertHtml",function(){e()},this,null,50);a.on("insertText",function(){e()},this,null,50);a.on("scaytDialogShown",function(b){b.data.selectPage(a.scayt.tabToOpen)});
a.on("paste",function(b){(b=a.scayt)&&b.removeMarkupInSelectionNode()},null,null,0)},parseConfig:function(a){var e=CKEDITOR.plugins.scayt;e.replaceOldOptionsNames(a.config);"boolean"!==typeof a.config.scayt_autoStartup&&(a.config.scayt_autoStartup=!1);e.state[a.name]=a.config.scayt_autoStartup;a.config.scayt_contextCommands||(a.config.scayt_contextCommands="ignore|ignoreall|add");a.config.scayt_contextMenuItemsOrder||(a.config.scayt_contextMenuItemsOrder="suggest|moresuggest|control");a.config.scayt_sLang||
(a.config.scayt_sLang="en_US");if(void 0===a.config.scayt_maxSuggestions||"number"!=typeof a.config.scayt_maxSuggestions||0>a.config.scayt_maxSuggestions)a.config.scayt_maxSuggestions=5;if(void 0===a.config.scayt_minWordLength||"number"!=typeof a.config.scayt_minWordLength||1>a.config.scayt_minWordLength)a.config.scayt_minWordLength=4;if(void 0===a.config.scayt_customDictionaryIds||"string"!==typeof a.config.scayt_customDictionaryIds)a.config.scayt_customDictionaryIds="";if(void 0===a.config.scayt_userDictionaryName||
"string"!==typeof a.config.scayt_userDictionaryName)a.config.scayt_userDictionaryName=null;if("string"===typeof a.config.scayt_uiTabs&&3===a.config.scayt_uiTabs.split(",").length){var b=[],c=[];a.config.scayt_uiTabs=a.config.scayt_uiTabs.split(",");CKEDITOR.tools.search(a.config.scayt_uiTabs,function(a){1===Number(a)||0===Number(a)?(c.push(!0),b.push(Number(a))):c.push(!1)});null===CKEDITOR.tools.search(c,!1)?a.config.scayt_uiTabs=b:a.config.scayt_uiTabs=[1,1,1]}else a.config.scayt_uiTabs=[1,1,1];
"string"!=typeof a.config.scayt_serviceProtocol&&(a.config.scayt_serviceProtocol=null);"string"!=typeof a.config.scayt_serviceHost&&(a.config.scayt_serviceHost=null);"string"!=typeof a.config.scayt_servicePort&&(a.config.scayt_servicePort=null);"string"!=typeof a.config.scayt_servicePath&&(a.config.scayt_servicePath=null);a.config.scayt_moreSuggestions||(a.config.scayt_moreSuggestions="on");"string"!==typeof a.config.scayt_customerId&&(a.config.scayt_customerId="1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2");
"string"!==typeof a.config.scayt_srcUrl&&(e=document.location.protocol,e=-1!=e.search(/https?:/)?e:"http:",a.config.scayt_srcUrl=e+"//svc.webspellchecker.net/spellcheck31/lf/scayt3/ckscayt/ckscayt.js");"boolean"!==typeof CKEDITOR.config.scayt_handleCheckDirty&&(CKEDITOR.config.scayt_handleCheckDirty=!0);"boolean"!==typeof CKEDITOR.config.scayt_handleUndoRedo&&(CKEDITOR.config.scayt_handleUndoRedo=!0);if(a.config.scayt_disableOptionsStorage){var e=CKEDITOR.tools.isArray(a.config.scayt_disableOptionsStorage)?
a.config.scayt_disableOptionsStorage:"string"===typeof a.config.scayt_disableOptionsStorage?[a.config.scayt_disableOptionsStorage]:void 0,d="all options lang ignore-all-caps-words ignore-domain-names ignore-words-with-mixed-cases ignore-words-with-numbers".split(" "),m=["lang","ignore-all-caps-words","ignore-domain-names","ignore-words-with-mixed-cases","ignore-words-with-numbers"],l=CKEDITOR.tools.search,f=CKEDITOR.tools.indexOf;a.config.scayt_disableOptionsStorage=function(a){for(var b=[],c=0;c<
a.length;c++){var e=a[c],u=!!l(a,"options");if(!l(d,e)||u&&l(m,function(a){if("lang"===a)return!1}))return;l(m,e)&&m.splice(f(m,e),1);if("all"===e||u&&l(a,"lang"))return[];"options"===e&&(m=["lang"])}return b=b.concat(m)}(e)}},addRule:function(a){var e=a.dataProcessor,b=e&&e.htmlFilter,c=a._.elementsPath&&a._.elementsPath.filters,e=e&&e.dataFilter,d=a.addRemoveFormatFilter,m=function(b){var c=CKEDITOR.plugins.scayt;if(a.scayt&&b.hasAttribute(c.options.data_attribute_name))return!1},l=function(b){var c=
CKEDITOR.plugins.scayt,d=!0;a.scayt&&b.hasAttribute(c.options.data_attribute_name)&&(d=!1);return d};c&&c.push(m);e&&e.addRules({elements:{span:function(b){var c=CKEDITOR.plugins.scayt;c&&c.state[a.name]&&b.classes&&CKEDITOR.tools.search(b.classes,c.options.misspelled_word_class)&&(b.classes&&b.parent.type===CKEDITOR.NODE_DOCUMENT_FRAGMENT?(delete b.attributes.style,delete b.name):delete b.classes[CKEDITOR.tools.indexOf(b.classes,c.options.misspelled_word_class)]);return b}}});b&&b.addRules({elements:{span:function(b){var c=
CKEDITOR.plugins.scayt;c&&c.state[a.name]&&b.hasClass(c.options.misspelled_word_class)&&b.attributes[c.options.data_attribute_name]&&(b.removeClass(c.options.misspelled_word_class),delete b.attributes[c.options.data_attribute_name],delete b.name);return b}}});d&&d.call(a,l)},scaytMenuDefinition:function(a){var e=this;a=a.scayt;return{scayt_ignore:{label:a.getLocal("btn_ignore"),group:"scayt_control",order:1,exec:function(a){a.scayt.ignoreWord()}},scayt_ignoreall:{label:a.getLocal("btn_ignoreAll"),
group:"scayt_control",order:2,exec:function(a){a.scayt.ignoreAllWords()}},scayt_add:{label:a.getLocal("btn_addWord"),group:"scayt_control",order:3,exec:function(a){var c=a.scayt;setTimeout(function(){c.addWordToUserDictionary()},10)}},option:{label:a.getLocal("btn_options"),group:"scayt_control",order:4,exec:function(a){a.scayt.tabToOpen="options";a.lockSelection();a.openDialog(e.dialogName)},verification:function(a){return 1==a.config.scayt_uiTabs[0]?!0:!1}},language:{label:a.getLocal("btn_langs"),
group:"scayt_control",order:5,exec:function(a){a.scayt.tabToOpen="langs";a.lockSelection();a.openDialog(e.dialogName)},verification:function(a){return 1==a.config.scayt_uiTabs[1]?!0:!1}},dictionary:{label:a.getLocal("btn_dictionaries"),group:"scayt_control",order:6,exec:function(a){a.scayt.tabToOpen="dictionaries";a.lockSelection();a.openDialog(e.dialogName)},verification:function(a){return 1==a.config.scayt_uiTabs[2]?!0:!1}},about:{label:a.getLocal("btn_about"),group:"scayt_control",order:7,exec:function(a){a.scayt.tabToOpen=
"about";a.lockSelection();a.openDialog(e.dialogName)}}}},buildSuggestionMenuItems:function(a,e){var b={},c={},d=a.scayt;if(0<e.length&&"no_any_suggestions"!==e[0])for(var m=0;m<e.length;m++){var l="scayt_suggest_"+CKEDITOR.plugins.scayt.suggestions[m].replace(" ","_");a.addCommand(l,this.createCommand(CKEDITOR.plugins.scayt.suggestions[m]));m<a.config.scayt_maxSuggestions?(a.addMenuItem(l,{label:e[m],command:l,group:"scayt_suggest",order:m+1}),b[l]=CKEDITOR.TRISTATE_OFF):(a.addMenuItem(l,{label:e[m],
command:l,group:"scayt_moresuggest",order:m+1}),c[l]=CKEDITOR.TRISTATE_OFF,"on"===a.config.scayt_moreSuggestions&&(a.addMenuItem("scayt_moresuggest",{label:d.getLocal("btn_moreSuggestions"),group:"scayt_moresuggest",order:10,getItems:function(){return c}}),b.scayt_moresuggest=CKEDITOR.TRISTATE_OFF))}else b.no_scayt_suggest=CKEDITOR.TRISTATE_DISABLED,a.addCommand("no_scayt_suggest",{exec:function(){}}),a.addMenuItem("no_scayt_suggest",{label:d.getLocal("btn_noSuggestions")||"no_scayt_suggest",command:"no_scayt_suggest",
group:"scayt_suggest",order:0});return b},menuGenerator:function(a,e){var b=a.scayt,c=this.scaytMenuDefinition(a),d={},m=a.config.scayt_contextCommands.split("|");b.fire("getSuggestionsList",{lang:b.getLang(),word:e});d=this.buildSuggestionMenuItems(a,CKEDITOR.plugins.scayt.suggestions);if("off"==a.config.scayt_contextCommands)return d;for(var l in c)if(-1!=CKEDITOR.tools.indexOf(m,l.replace("scayt_",""))||"all"==a.config.scayt_contextCommands)d[l]=CKEDITOR.TRISTATE_OFF,"function"!==typeof c[l].verification||
c[l].verification(a)||delete d[l],a.addCommand(l,{exec:c[l].exec}),a.addMenuItem(l,{label:a.lang.scayt[c[l].label]||c[l].label,command:l,group:c[l].group,order:c[l].order});return d},createCommand:function(a){return{exec:function(e){e.scayt.replaceSelectionNode({word:a})}}}}),CKEDITOR.plugins.scayt={state:{},suggestions:[],loadingHelper:{loadOrder:[]},isLoading:!1,options:{disablingCommandExec:{source:!0,newpage:!0,templates:!0},data_attribute_name:"data-scayt-word",misspelled_word_class:"scayt-misspell-word"},
backCompatibilityMap:{scayt_service_protocol:"scayt_serviceProtocol",scayt_service_host:"scayt_serviceHost",scayt_service_port:"scayt_servicePort",scayt_service_path:"scayt_servicePath",scayt_customerid:"scayt_customerId"},replaceOldOptionsNames:function(a){for(var e in a)e in this.backCompatibilityMap&&(a[this.backCompatibilityMap[e]]=a[e],delete a[e])},createScayt:function(a){var e=this;this.loadScaytLibrary(a,function(a){var c={lang:a.config.scayt_sLang,container:"BODY"==a.editable().$.nodeName?
a.document.getWindow().$.frameElement:a.editable().$,customDictionary:a.config.scayt_customDictionaryIds,userDictionaryName:a.config.scayt_userDictionaryName,localization:a.langCode,customer_id:a.config.scayt_customerId,debug:a.config.scayt_debug,data_attribute_name:e.options.data_attribute_name,misspelled_word_class:e.options.misspelled_word_class,"options-to-restore":a.config.scayt_disableOptionsStorage,focused:a.editable().hasFocus,ignoreElementsRegex:a.config.scayt_elementsToIgnore,minWordLength:a.config.scayt_minWordLength};
a.config.scayt_serviceProtocol&&(c.service_protocol=a.config.scayt_serviceProtocol);a.config.scayt_serviceHost&&(c.service_host=a.config.scayt_serviceHost);a.config.scayt_servicePort&&(c.service_port=a.config.scayt_servicePort);a.config.scayt_servicePath&&(c.service_path=a.config.scayt_servicePath);c=new SCAYT.CKSCAYT(c,function(){},function(){});c.subscribe("suggestionListSend",function(a){for(var b={},c=[],f=0;f<a.suggestionList.length;f++)b["word_"+a.suggestionList[f]]||(b["word_"+a.suggestionList[f]]=
a.suggestionList[f],c.push(a.suggestionList[f]));CKEDITOR.plugins.scayt.suggestions=c});c.subscribe("selectionIsChanged",function(c){a.getSelection().isLocked&&a.lockSelection()});a.scayt=c;a.fire("scaytButtonState",a.readOnly?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_ON)})},destroy:function(a){a.scayt&&a.scayt.destroy();delete a.scayt;a.fire("scaytButtonState",CKEDITOR.TRISTATE_OFF)},loadScaytLibrary:function(a,e){var b=this,c;"undefined"===typeof window.SCAYT||"function"!==typeof window.SCAYT.CKSCAYT?
this.loadingHelper[a.name]||(this.loadingHelper[a.name]=e,this.loadingHelper.loadOrder.push(a.name),c=new Date,c=c.getTime(),c=a.config.scayt_srcUrl+"?"+c,CKEDITOR.scriptLoader.load(c,function(a){CKEDITOR.fireOnce("scaytReady");for(var c=0;c<b.loadingHelper.loadOrder.length;c++){a=b.loadingHelper.loadOrder[c];if("function"===typeof b.loadingHelper[a])b.loadingHelper[a](CKEDITOR.instances[a]);delete b.loadingHelper[a]}b.loadingHelper.loadOrder=[]})):window.SCAYT&&"function"===typeof window.SCAYT.CKSCAYT&&
(CKEDITOR.fireOnce("scaytReady"),a.scayt||"function"===typeof e&&e(a))}},CKEDITOR.on("dialogDefinition",function(a){if("scaytDialog"===a.data.name)a.data.definition.dialog.on("cancel",function(a){return!1},this,null,-1)}),CKEDITOR.on("scaytReady",function(){if(!0===CKEDITOR.config.scayt_handleCheckDirty){var a=CKEDITOR.editor.prototype;a.checkDirty=CKEDITOR.tools.override(a.checkDirty,function(a){return function(){var c=null,d=this.scayt;if(CKEDITOR.plugins.scayt&&CKEDITOR.plugins.scayt.state[this.name]&&
this.scayt){if(c="ready"==this.status)var e=d.removeMarkupFromString(this.getSnapshot()),d=d.removeMarkupFromString(this._.previousValue),c=c&&d!==e}else c=a.call(this);return c}});a.resetDirty=CKEDITOR.tools.override(a.resetDirty,function(a){return function(){var c=this.scayt;CKEDITOR.plugins.scayt&&CKEDITOR.plugins.scayt.state[this.name]&&this.scayt?this._.previousValue=c.removeMarkupFromString(this.getSnapshot()):a.call(this)}})}if(!0===CKEDITOR.config.scayt_handleUndoRedo){var a=CKEDITOR.plugins.undo.Image.prototype,
e="function"==typeof a.equalsContent?"equalsContent":"equals";a[e]=CKEDITOR.tools.override(a[e],function(a){return function(c){var d=c.editor.scayt,e=this.contents,l=c.contents,f=null;CKEDITOR.plugins.scayt&&CKEDITOR.plugins.scayt.state[c.editor.name]&&c.editor.scayt&&(this.contents=d.removeMarkupFromString(e)||"",c.contents=d.removeMarkupFromString(l)||"");f=a.apply(this,arguments);this.contents=e;c.contents=l;return f}})}}),function(){var a={preserveState:!0,editorFocus:!1,readOnly:1,exec:function(a){this.toggleState();
this.refresh(a)},refresh:function(a){if(a.document){var b=this.state==CKEDITOR.TRISTATE_ON?"attachClass":"removeClass";a.editable()[b]("cke_show_borders")}}};CKEDITOR.plugins.add("showborders",{modes:{wysiwyg:1},onLoad:function(){var a;a=(CKEDITOR.env.ie6Compat?[".%1 table.%2,",".%1 table.%2 td, .%1 table.%2 th","{","border : #d3d3d3 1px dotted","}"]:".%1 table.%2,;.%1 table.%2 \x3e tr \x3e td, .%1 table.%2 \x3e tr \x3e th,;.%1 table.%2 \x3e tbody \x3e tr \x3e td, .%1 table.%2 \x3e tbody \x3e tr \x3e th,;.%1 table.%2 \x3e thead \x3e tr \x3e td, .%1 table.%2 \x3e thead \x3e tr \x3e th,;.%1 table.%2 \x3e tfoot \x3e tr \x3e td, .%1 table.%2 \x3e tfoot \x3e tr \x3e th;{;border : #d3d3d3 1px dotted;}".split(";")).join("").replace(/%2/g,
"cke_show_border").replace(/%1/g,"cke_show_borders ");CKEDITOR.addCss(a)},init:function(e){var b=e.addCommand("showborders",a);b.canUndo=!1;!1!==e.config.startupShowBorders&&b.setState(CKEDITOR.TRISTATE_ON);e.on("mode",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(e)},null,null,100);e.on("contentDom",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(e)});e.on("removeFormatCleanup",function(a){a=a.data;e.getCommand("showborders").state==CKEDITOR.TRISTATE_ON&&a.is("table")&&(!a.hasAttribute("border")||
0>=parseInt(a.getAttribute("border"),10))&&a.addClass("cke_show_border")})},afterInit:function(a){var b=a.dataProcessor;a=b&&b.dataFilter;b=b&&b.htmlFilter;a&&a.addRules({elements:{table:function(a){a=a.attributes;var b=a["class"],e=parseInt(a.border,10);e&&!(0>=e)||b&&-1!=b.indexOf("cke_show_border")||(a["class"]=(b||"")+" cke_show_border")}}});b&&b.addRules({elements:{table:function(a){a=a.attributes;var b=a["class"];b&&(a["class"]=b.replace("cke_show_border","").replace(/\s{2}/," ").replace(/^\s+|\s+$/,
""))}}})}});CKEDITOR.on("dialogDefinition",function(a){var b=a.data.name;if("table"==b||"tableProperties"==b)if(a=a.data.definition,b=a.getContents("info").get("txtBorder"),b.commit=CKEDITOR.tools.override(b.commit,function(a){return function(b,e){a.apply(this,arguments);var l=parseInt(this.getValue(),10);e[!l||0>=l?"addClass":"removeClass"]("cke_show_border")}}),a=(a=a.getContents("advanced"))&&a.get("advCSSClasses"))a.setup=CKEDITOR.tools.override(a.setup,function(a){return function(){a.apply(this,
arguments);this.setValue(this.getValue().replace(/cke_show_border/,""))}}),a.commit=CKEDITOR.tools.override(a.commit,function(a){return function(b,e){a.apply(this,arguments);parseInt(e.getAttribute("border"),10)||e.addClass("cke_show_border")}})})}(),function(){CKEDITOR.plugins.add("sourcearea",{init:function(e){function b(){var a=d&&this.equals(CKEDITOR.document.getActive());this.hide();this.setStyle("height",this.getParent().$.clientHeight+"px");this.setStyle("width",this.getParent().$.clientWidth+
"px");this.show();a&&this.focus()}if(e.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var c=CKEDITOR.plugins.sourcearea;e.addMode("source",function(c){var d=e.ui.space("contents").getDocument().createElement("textarea");d.setStyles(CKEDITOR.tools.extend({width:CKEDITOR.env.ie7Compat?"99%":"100%",height:"100%",resize:"none",outline:"none","text-align":"left"},CKEDITOR.tools.cssVendorPrefix("tab-size",e.config.sourceAreaTabSize||4)));d.setAttribute("dir","ltr");d.addClass("cke_source").addClass("cke_reset").addClass("cke_enable_context_menu");
e.ui.space("contents").append(d);d=e.editable(new a(e,d));d.setData(e.getData(1));CKEDITOR.env.ie&&(d.attachListener(e,"resize",b,d),d.attachListener(CKEDITOR.document.getWindow(),"resize",b,d),CKEDITOR.tools.setTimeout(b,0,d));e.fire("ariaWidget",this);c()});e.addCommand("source",c.commands.source);e.ui.addButton&&e.ui.addButton("Source",{label:e.lang.sourcearea.toolbar,command:"source",toolbar:"mode,10"});e.on("mode",function(){e.getCommand("source").setState("source"==e.mode?CKEDITOR.TRISTATE_ON:
CKEDITOR.TRISTATE_OFF)});var d=CKEDITOR.env.ie&&9==CKEDITOR.env.version}}});var a=CKEDITOR.tools.createClass({base:CKEDITOR.editable,proto:{setData:function(a){this.setValue(a);this.status="ready";this.editor.fire("dataReady")},getData:function(){return this.getValue()},insertHtml:function(){},insertElement:function(){},insertText:function(){},setReadOnly:function(a){this[(a?"set":"remove")+"Attribute"]("readOnly","readonly")},detach:function(){a.baseProto.detach.call(this);this.clearCustomData();
this.remove()}}})}(),CKEDITOR.plugins.sourcearea={commands:{source:{modes:{wysiwyg:1,source:1},editorFocus:!1,readOnly:1,exec:function(a){"wysiwyg"==a.mode&&a.fire("saveSnapshot");a.getCommand("source").setState(CKEDITOR.TRISTATE_DISABLED);a.setMode("source"==a.mode?"wysiwyg":"source")},canUndo:!1}}},CKEDITOR.plugins.add("specialchar",{availableLangs:{af:1,ar:1,bg:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,en:1,"en-gb":1,eo:1,es:1,et:1,fa:1,fi:1,fr:1,"fr-ca":1,gl:1,he:1,hr:1,hu:1,id:1,it:1,ja:1,km:1,ko:1,ku:1,
lt:1,lv:1,nb:1,nl:1,no:1,pl:1,pt:1,"pt-br":1,ru:1,si:1,sk:1,sl:1,sq:1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,zh:1,"zh-cn":1},requires:"dialog",init:function(a){var e=this;CKEDITOR.dialog.add("specialchar",this.path+"dialogs/specialchar.js");a.addCommand("specialchar",{exec:function(){var b=a.langCode,b=e.availableLangs[b]?b:e.availableLangs[b.replace(/-.*/,"")]?b.replace(/-.*/,""):"en";CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e.path+"dialogs/lang/"+b+".js"),function(){CKEDITOR.tools.extend(a.lang.specialchar,
e.langEntries[b]);a.openDialog("specialchar")})},modes:{wysiwyg:1},canUndo:!1});a.ui.addButton&&a.ui.addButton("SpecialChar",{label:a.lang.specialchar.toolbar,command:"specialchar",toolbar:"insert,50"})}}),CKEDITOR.config.specialChars="! \x26quot; # $ % \x26amp; ' ( ) * + - . / 0 1 2 3 4 5 6 7 8 9 : ; \x26lt; \x3d \x26gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ \x26euro; \x26lsquo; \x26rsquo; \x26ldquo; \x26rdquo; \x26ndash; \x26mdash; \x26iexcl; \x26cent; \x26pound; \x26curren; \x26yen; \x26brvbar; \x26sect; \x26uml; \x26copy; \x26ordf; \x26laquo; \x26not; \x26reg; \x26macr; \x26deg; \x26sup2; \x26sup3; \x26acute; \x26micro; \x26para; \x26middot; \x26cedil; \x26sup1; \x26ordm; \x26raquo; \x26frac14; \x26frac12; \x26frac34; \x26iquest; \x26Agrave; \x26Aacute; \x26Acirc; \x26Atilde; \x26Auml; \x26Aring; \x26AElig; \x26Ccedil; \x26Egrave; \x26Eacute; \x26Ecirc; \x26Euml; \x26Igrave; \x26Iacute; \x26Icirc; \x26Iuml; \x26ETH; \x26Ntilde; \x26Ograve; \x26Oacute; \x26Ocirc; \x26Otilde; \x26Ouml; \x26times; \x26Oslash; \x26Ugrave; \x26Uacute; \x26Ucirc; \x26Uuml; \x26Yacute; \x26THORN; \x26szlig; \x26agrave; \x26aacute; \x26acirc; \x26atilde; \x26auml; \x26aring; \x26aelig; \x26ccedil; \x26egrave; \x26eacute; \x26ecirc; \x26euml; \x26igrave; \x26iacute; \x26icirc; \x26iuml; \x26eth; \x26ntilde; \x26ograve; \x26oacute; \x26ocirc; \x26otilde; \x26ouml; \x26divide; \x26oslash; \x26ugrave; \x26uacute; \x26ucirc; \x26uuml; \x26yacute; \x26thorn; \x26yuml; \x26OElig; \x26oelig; \x26#372; \x26#374 \x26#373 \x26#375; \x26sbquo; \x26#8219; \x26bdquo; \x26hellip; \x26trade; \x26#9658; \x26bull; \x26rarr; \x26rArr; \x26hArr; \x26diams; \x26asymp;".split(" "),
function(){CKEDITOR.plugins.add("stylescombo",{requires:"richcombo",init:function(a){var e=a.config,b=a.lang.stylescombo,c={},d=[],m=[];a.on("stylesSet",function(b){if(b=b.data.styles){for(var f,h,k,g=0,n=b.length;g<n;g++)(f=b[g],a.blockless&&f.element in CKEDITOR.dtd.$block||(h=f.name,f=new CKEDITOR.style(f),a.filter.customConfig&&!a.filter.check(f)))||(f._name=h,f._.enterMode=e.enterMode,f._.type=k=f.assignedTo||f.type,f._.weight=g+1E3*(k==CKEDITOR.STYLE_OBJECT?1:k==CKEDITOR.STYLE_BLOCK?2:3),c[h]=
f,d.push(f),m.push(f));d.sort(function(a,b){return a._.weight-b._.weight})}});a.ui.addRichCombo("Styles",{label:b.label,title:b.panelTitle,toolbar:"styles,10",allowedContent:m,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(e.contentsCss),multiSelect:!0,attributes:{"aria-label":b.panelTitle}},init:function(){var a,c,e,k,g,m;g=0;for(m=d.length;g<m;g++)a=d[g],c=a._name,k=a._.type,k!=e&&(this.startGroup(b["panelTitle"+String(k)]),e=k),this.add(c,a.type==CKEDITOR.STYLE_OBJECT?c:a.buildPreview(),c);
this.commit()},onClick:function(b){a.focus();a.fire("saveSnapshot");b=c[b];var d=a.elementPath();a[b.checkActive(d,a)?"removeStyle":"applyStyle"](b);a.fire("saveSnapshot")},onRender:function(){a.on("selectionChange",function(b){var d=this.getValue();b=b.data.path.elements;for(var e=0,k=b.length,g;e<k;e++){g=b[e];for(var m in c)if(c[m].checkElementRemovable(g,!0,a)){m!=d&&this.setValue(m);return}}this.setValue("")},this)},onOpen:function(){var d=a.getSelection().getSelectedElement(),d=a.elementPath(d),
f=[0,0,0,0];this.showAll();this.unmarkAll();for(var e in c){var k=c[e],g=k._.type;k.checkApplicable(d,a,a.activeFilter)?f[g]++:this.hideItem(e);k.checkActive(d,a)&&this.mark(e)}f[CKEDITOR.STYLE_BLOCK]||this.hideGroup(b["panelTitle"+String(CKEDITOR.STYLE_BLOCK)]);f[CKEDITOR.STYLE_INLINE]||this.hideGroup(b["panelTitle"+String(CKEDITOR.STYLE_INLINE)]);f[CKEDITOR.STYLE_OBJECT]||this.hideGroup(b["panelTitle"+String(CKEDITOR.STYLE_OBJECT)])},refresh:function(){var b=a.elementPath();if(b){for(var d in c)if(c[d].checkApplicable(b,
a,a.activeFilter))return;this.setState(CKEDITOR.TRISTATE_DISABLED)}},reset:function(){c={};d=[]}})}})}(),function(){function a(a){return{editorFocus:!1,canUndo:!1,modes:{wysiwyg:1},exec:function(b){if(b.editable().hasFocus){var c=b.getSelection(),f;if(f=(new CKEDITOR.dom.elementPath(c.getCommonAncestor(),c.root)).contains({td:1,th:1},1)){var c=b.createRange(),e=CKEDITOR.tools.tryThese(function(){var b=f.getParent().$.cells[f.$.cellIndex+(a?-1:1)];b.parentNode.parentNode;return b},function(){var b=
f.getParent(),b=b.getAscendant("table").$.rows[b.$.rowIndex+(a?-1:1)];return b.cells[a?b.cells.length-1:0]});if(e||a)if(e)e=new CKEDITOR.dom.element(e),c.moveToElementEditStart(e),c.checkStartOfBlock()&&c.checkEndOfBlock()||c.selectNodeContents(e);else return!0;else{for(var k=f.getAscendant("table").$,e=f.getParent().$.cells,k=new CKEDITOR.dom.element(k.insertRow(-1),b.document),g=0,n=e.length;g<n;g++)k.append((new CKEDITOR.dom.element(e[g],b.document)).clone(!1,!1)).appendBogus();c.moveToElementEditStart(k)}c.select(!0);
return!0}}return!1}}}var e={editorFocus:!1,modes:{wysiwyg:1,source:1}},b={exec:function(a){a.container.focusNext(!0,a.tabIndex)}},c={exec:function(a){a.container.focusPrevious(!0,a.tabIndex)}};CKEDITOR.plugins.add("tab",{init:function(d){for(var m=!1!==d.config.enableTabKeyTools,l=d.config.tabSpaces||0,f="";l--;)f+=" ";if(f)d.on("key",function(a){9==a.data.keyCode&&(d.insertText(f),a.cancel())});if(m)d.on("key",function(a){(9==a.data.keyCode&&d.execCommand("selectNextCell")||a.data.keyCode==CKEDITOR.SHIFT+
9&&d.execCommand("selectPreviousCell"))&&a.cancel()});d.addCommand("blur",CKEDITOR.tools.extend(b,e));d.addCommand("blurBack",CKEDITOR.tools.extend(c,e));d.addCommand("selectNextCell",a());d.addCommand("selectPreviousCell",a(!0))}})}(),CKEDITOR.dom.element.prototype.focusNext=function(a,e){var b=void 0===e?this.getTabIndex():e,c,d,m,l,f,h;if(0>=b)for(f=this.getNextSourceNode(a,CKEDITOR.NODE_ELEMENT);f;){if(f.isVisible()&&0===f.getTabIndex()){m=f;break}f=f.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT)}else for(f=
this.getDocument().getBody().getFirst();f=f.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!c)if(!d&&f.equals(this)){if(d=!0,a){if(!(f=f.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;c=1}}else d&&!this.contains(f)&&(c=1);if(f.isVisible()&&!(0>(h=f.getTabIndex()))){if(c&&h==b){m=f;break}h>b&&(!m||!l||h<l)?(m=f,l=h):m||0!==h||(m=f,l=h)}}m&&m.focus()},CKEDITOR.dom.element.prototype.focusPrevious=function(a,e){for(var b=void 0===e?this.getTabIndex():e,c,d,m,l=0,f,h=this.getDocument().getBody().getLast();h=
h.getPreviousSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!c)if(!d&&h.equals(this)){if(d=!0,a){if(!(h=h.getPreviousSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;c=1}}else d&&!this.contains(h)&&(c=1);if(h.isVisible()&&!(0>(f=h.getTabIndex())))if(0>=b){if(c&&0===f){m=h;break}f>l&&(m=h,l=f)}else{if(c&&f==b){m=h;break}f<b&&(!m||f>l)&&(m=h,l=f)}}m&&m.focus()},CKEDITOR.plugins.add("table",{requires:"dialog",init:function(a){function e(a){return CKEDITOR.tools.extend(a||{},{contextSensitive:1,refresh:function(a,
b){this.setState(b.contains("table",1)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}})}if(!a.blockless){var b=a.lang.table;a.addCommand("table",new CKEDITOR.dialogCommand("table",{context:"table",allowedContent:"table{width,height}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr[scope];"+(a.plugins.dialogadvtab?"table"+a.plugins.dialogadvtab.allowedContent():""),requiredContent:"table",contentTransformations:[["table{width}: sizeToStyle","table[width]: sizeToAttribute"]]}));
a.addCommand("tableProperties",new CKEDITOR.dialogCommand("tableProperties",e()));a.addCommand("tableDelete",e({exec:function(a){var b=a.elementPath().contains("table",1);if(b){var e=b.getParent(),l=a.editable();1!=e.getChildCount()||e.is("td","th")||e.equals(l)||(b=e);a=a.createRange();a.moveToPosition(b,CKEDITOR.POSITION_BEFORE_START);b.remove();a.select()}}}));a.ui.addButton&&a.ui.addButton("Table",{label:b.toolbar,command:"table",toolbar:"insert,30"});CKEDITOR.dialog.add("table",this.path+"dialogs/table.js");
CKEDITOR.dialog.add("tableProperties",this.path+"dialogs/table.js");a.addMenuItems&&a.addMenuItems({table:{label:b.menu,command:"tableProperties",group:"table",order:5},tabledelete:{label:b.deleteTable,command:"tableDelete",group:"table",order:1}});a.on("doubleclick",function(a){a.data.element.is("table")&&(a.data.dialog="tableProperties")});a.contextMenu&&a.contextMenu.addListener(function(){return{tabledelete:CKEDITOR.TRISTATE_OFF,table:CKEDITOR.TRISTATE_OFF}})}}}),function(){function a(a){function b(a){0<
c.length||a.type!=CKEDITOR.NODE_ELEMENT||!u.test(a.getName())||a.getCustomData("selected_cell")||(CKEDITOR.dom.element.setMarker(d,a,"selected_cell",!0),c.push(a))}a=a.getRanges();for(var c=[],d={},f=0;f<a.length;f++){var e=a[f];if(e.collapsed)e=e.getCommonAncestor(),(e=e.getAscendant("td",!0)||e.getAscendant("th",!0))&&c.push(e);else{var e=new CKEDITOR.dom.walker(e),g;for(e.guard=b;g=e.next();)g.type==CKEDITOR.NODE_ELEMENT&&g.is(CKEDITOR.dtd.table)||(g=g.getAscendant("td",!0)||g.getAscendant("th",
!0))&&!g.getCustomData("selected_cell")&&(CKEDITOR.dom.element.setMarker(d,g,"selected_cell",!0),c.push(g))}}CKEDITOR.dom.element.clearAllMarkers(d);return c}function e(b,c){for(var d=a(b),f=d[0],e=f.getAscendant("table"),f=f.getDocument(),g=d[0].getParent(),h=g.$.rowIndex,d=d[d.length-1],k=d.getParent().$.rowIndex+d.$.rowSpan-1,d=new CKEDITOR.dom.element(e.$.rows[k]),h=c?h:k,g=c?g:d,d=CKEDITOR.tools.buildTableMap(e),e=d[h],h=c?d[h-1]:d[h+1],d=d[0].length,f=f.createElement("tr"),k=0;e[k]&&k<d;k++){var l;
1<e[k].rowSpan&&h&&e[k]==h[k]?(l=e[k],l.rowSpan+=1):(l=(new CKEDITOR.dom.element(e[k])).clone(),l.removeAttribute("rowSpan"),l.appendBogus(),f.append(l),l=l.$);k+=l.colSpan-1}c?f.insertBefore(g):f.insertAfter(g)}function b(c){if(c instanceof CKEDITOR.dom.selection){var d=a(c),f=d[0].getAscendant("table"),e=CKEDITOR.tools.buildTableMap(f);c=d[0].getParent().$.rowIndex;for(var d=d[d.length-1],g=d.getParent().$.rowIndex+d.$.rowSpan-1,d=[],h=c;h<=g;h++){for(var k=e[h],l=new CKEDITOR.dom.element(f.$.rows[h]),
m=0;m<k.length;m++){var n=new CKEDITOR.dom.element(k[m]),u=n.getParent().$.rowIndex;1==n.$.rowSpan?n.remove():(--n.$.rowSpan,u==h&&(u=e[h+1],u[m-1]?n.insertAfter(new CKEDITOR.dom.element(u[m-1])):(new CKEDITOR.dom.element(f.$.rows[h+1])).append(n,1)));m+=n.$.colSpan-1}d.push(l)}e=f.$.rows;f=new CKEDITOR.dom.element(e[g+1]||(0<c?e[c-1]:null)||f.$.parentNode);for(h=d.length;0<=h;h--)b(d[h]);return f}c instanceof CKEDITOR.dom.element&&(f=c.getAscendant("table"),1==f.$.rows.length?f.remove():c.remove());
return null}function c(a,b){for(var c=b?Infinity:0,d=0;d<a.length;d++){var f;f=a[d];for(var e=b,g=f.getParent().$.cells,h=0,k=0;k<g.length;k++){var l=g[k],h=h+(e?1:l.colSpan);if(l==f.$)break}f=h-1;if(b?f<c:f>c)c=f}return c}function d(b,d){for(var f=a(b),e=f[0].getAscendant("table"),g=c(f,1),f=c(f),g=d?g:f,h=CKEDITOR.tools.buildTableMap(e),e=[],f=[],k=h.length,l=0;l<k;l++)e.push(h[l][g]),f.push(d?h[l][g-1]:h[l][g+1]);for(l=0;l<k;l++)e[l]&&(1<e[l].colSpan&&f[l]==e[l]?(g=e[l],g.colSpan+=1):(g=(new CKEDITOR.dom.element(e[l])).clone(),
g.removeAttribute("colSpan"),g.appendBogus(),g[d?"insertBefore":"insertAfter"].call(g,new CKEDITOR.dom.element(e[l])),g=g.$),l+=g.rowSpan-1)}function m(a,b){var c=a.getStartElement();if(c=c.getAscendant("td",1)||c.getAscendant("th",1)){var d=c.clone();d.appendBogus();b?d.insertBefore(c):d.insertAfter(c)}}function l(b){if(b instanceof CKEDITOR.dom.selection){b=a(b);var c=b[0]&&b[0].getAscendant("table"),d;a:{var e=0;d=b.length-1;for(var g={},h,k;h=b[e++];)CKEDITOR.dom.element.setMarker(g,h,"delete_cell",
!0);for(e=0;h=b[e++];)if((k=h.getPrevious())&&!k.getCustomData("delete_cell")||(k=h.getNext())&&!k.getCustomData("delete_cell")){CKEDITOR.dom.element.clearAllMarkers(g);d=k;break a}CKEDITOR.dom.element.clearAllMarkers(g);k=b[0].getParent();(k=k.getPrevious())?d=k.getLast():(k=b[d].getParent(),d=(k=k.getNext())?k.getChild(0):null)}for(k=b.length-1;0<=k;k--)l(b[k]);d?f(d,!0):c&&c.remove()}else b instanceof CKEDITOR.dom.element&&(c=b.getParent(),1==c.getChildCount()?c.remove():b.remove())}function f(a,
b){var c=a.getDocument(),d=CKEDITOR.document;CKEDITOR.env.ie&&10==CKEDITOR.env.version&&(d.focus(),c.focus());c=new CKEDITOR.dom.range(c);c["moveToElementEdit"+(b?"End":"Start")](a)||(c.selectNodeContents(a),c.collapse(b?!1:!0));c.select(!0)}function h(a,b,c){a=a[b];if("undefined"==typeof c)return a;for(b=0;a&&b<a.length;b++){if(c.is&&a[b]==c.$)return b;if(b==c)return new CKEDITOR.dom.element(a[b])}return c.is?-1:null}function k(b,c,d){var f=a(b),e;if((c?1!=f.length:2>f.length)||(e=b.getCommonAncestor())&&
e.type==CKEDITOR.NODE_ELEMENT&&e.is("table"))return!1;var g;b=f[0];e=b.getAscendant("table");var k=CKEDITOR.tools.buildTableMap(e),l=k.length,m=k[0].length,n=b.getParent().$.rowIndex,u=h(k,n,b);if(c){var A;try{var C=parseInt(b.getAttribute("rowspan"),10)||1;g=parseInt(b.getAttribute("colspan"),10)||1;A=k["up"==c?n-C:"down"==c?n+C:n]["left"==c?u-g:"right"==c?u+g:u]}catch(G){return!1}if(!A||b.$==A)return!1;f["up"==c||"left"==c?"unshift":"push"](new CKEDITOR.dom.element(A))}c=b.getDocument();var F=n,
C=A=0,I=!d&&new CKEDITOR.dom.documentFragment(c),H=0;for(c=0;c<f.length;c++){g=f[c];var K=g.getParent(),D=g.getFirst(),N=g.$.colSpan,R=g.$.rowSpan,K=K.$.rowIndex,P=h(k,K,g),H=H+N*R,C=Math.max(C,P-u+N);A=Math.max(A,K-n+R);d||(N=g,(R=N.getBogus())&&R.remove(),N.trim(),g.getChildren().count()&&(K==F||!D||D.isBlockBoundary&&D.isBlockBoundary({br:1})||(F=I.getLast(CKEDITOR.dom.walker.whitespaces(!0)),!F||F.is&&F.is("br")||I.append("br")),g.moveChildren(I)),c?g.remove():g.setHtml(""));F=K}if(d)return A*
C==H;I.moveChildren(b);b.appendBogus();C>=m?b.removeAttribute("rowSpan"):b.$.rowSpan=A;A>=l?b.removeAttribute("colSpan"):b.$.colSpan=C;d=new CKEDITOR.dom.nodeList(e.$.rows);f=d.count();for(c=f-1;0<=c;c--)e=d.getItem(c),e.$.cells.length||(e.remove(),f++);return b}function g(b,c){var d=a(b);if(1<d.length)return!1;if(c)return!0;var d=d[0],f=d.getParent(),e=f.getAscendant("table"),g=CKEDITOR.tools.buildTableMap(e),k=f.$.rowIndex,l=h(g,k,d),m=d.$.rowSpan,n;if(1<m){n=Math.ceil(m/2);for(var m=Math.floor(m/
2),f=k+n,e=new CKEDITOR.dom.element(e.$.rows[f]),g=h(g,f),u,f=d.clone(),k=0;k<g.length;k++)if(u=g[k],u.parentNode==e.$&&k>l){f.insertBefore(new CKEDITOR.dom.element(u));break}else u=null;u||e.append(f)}else for(m=n=1,e=f.clone(),e.insertAfter(f),e.append(f=d.clone()),u=h(g,k),l=0;l<u.length;l++)u[l].rowSpan++;f.appendBogus();d.$.rowSpan=n;f.$.rowSpan=m;1==n&&d.removeAttribute("rowSpan");1==m&&f.removeAttribute("rowSpan");return f}function n(b,c){var d=a(b);if(1<d.length)return!1;if(c)return!0;var d=
d[0],f=d.getParent(),e=f.getAscendant("table"),e=CKEDITOR.tools.buildTableMap(e),g=h(e,f.$.rowIndex,d),k=d.$.colSpan;if(1<k)f=Math.ceil(k/2),k=Math.floor(k/2);else{for(var k=f=1,l=[],m=0;m<e.length;m++){var n=e[m];l.push(n[g]);1<n[g].rowSpan&&(m+=n[g].rowSpan-1)}for(e=0;e<l.length;e++)l[e].colSpan++}e=d.clone();e.insertAfter(d);e.appendBogus();d.$.colSpan=f;e.$.colSpan=k;1==f&&d.removeAttribute("colSpan");1==k&&e.removeAttribute("colSpan");return e}var u=/^(?:td|th)$/;CKEDITOR.plugins.tabletools=
{requires:"table,dialog,contextmenu",init:function(c){function h(a){return CKEDITOR.tools.extend(a||{},{contextSensitive:1,refresh:function(a,b){this.setState(b.contains({td:1,th:1},1)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}})}function t(a,b){var d=c.addCommand(a,b);c.addFeature(d)}var p=c.lang.table;t("cellProperties",new CKEDITOR.dialogCommand("cellProperties",h({allowedContent:"td th{width,height,border-color,background-color,white-space,vertical-align,text-align}[colspan,rowspan]",
requiredContent:"table"})));CKEDITOR.dialog.add("cellProperties",this.path+"dialogs/tableCell.js");t("rowDelete",h({requiredContent:"table",exec:function(a){a=a.getSelection();f(b(a))}}));t("rowInsertBefore",h({requiredContent:"table",exec:function(a){a=a.getSelection();e(a,!0)}}));t("rowInsertAfter",h({requiredContent:"table",exec:function(a){a=a.getSelection();e(a)}}));t("columnDelete",h({requiredContent:"table",exec:function(b){b=b.getSelection();b=a(b);var c=b[0],d=b[b.length-1];b=c.getAscendant("table");
for(var e=CKEDITOR.tools.buildTableMap(b),g,h,k=[],l=0,m=e.length;l<m;l++)for(var n=0,p=e[l].length;n<p;n++)e[l][n]==c.$&&(g=n),e[l][n]==d.$&&(h=n);for(l=g;l<=h;l++)for(n=0;n<e.length;n++)d=e[n],c=new CKEDITOR.dom.element(b.$.rows[n]),d=new CKEDITOR.dom.element(d[l]),d.$&&(1==d.$.colSpan?d.remove():--d.$.colSpan,n+=d.$.rowSpan-1,c.$.cells.length||k.push(c));h=b.$.rows[0]&&b.$.rows[0].cells;g=new CKEDITOR.dom.element(h[g]||(g?h[g-1]:b.$.parentNode));k.length==m&&b.remove();g&&f(g,!0)}}));t("columnInsertBefore",
h({requiredContent:"table",exec:function(a){a=a.getSelection();d(a,!0)}}));t("columnInsertAfter",h({requiredContent:"table",exec:function(a){a=a.getSelection();d(a)}}));t("cellDelete",h({requiredContent:"table",exec:function(a){a=a.getSelection();l(a)}}));t("cellMerge",h({allowedContent:"td[colspan,rowspan]",requiredContent:"td[colspan,rowspan]",exec:function(a){f(k(a.getSelection()),!0)}}));t("cellMergeRight",h({allowedContent:"td[colspan]",requiredContent:"td[colspan]",exec:function(a){f(k(a.getSelection(),
"right"),!0)}}));t("cellMergeDown",h({allowedContent:"td[rowspan]",requiredContent:"td[rowspan]",exec:function(a){f(k(a.getSelection(),"down"),!0)}}));t("cellVerticalSplit",h({allowedContent:"td[rowspan]",requiredContent:"td[rowspan]",exec:function(a){f(n(a.getSelection()))}}));t("cellHorizontalSplit",h({allowedContent:"td[colspan]",requiredContent:"td[colspan]",exec:function(a){f(g(a.getSelection()))}}));t("cellInsertBefore",h({requiredContent:"table",exec:function(a){a=a.getSelection();m(a,!0)}}));
t("cellInsertAfter",h({requiredContent:"table",exec:function(a){a=a.getSelection();m(a)}}));c.addMenuItems&&c.addMenuItems({tablecell:{label:p.cell.menu,group:"tablecell",order:1,getItems:function(){var b=c.getSelection(),d=a(b);return{tablecell_insertBefore:CKEDITOR.TRISTATE_OFF,tablecell_insertAfter:CKEDITOR.TRISTATE_OFF,tablecell_delete:CKEDITOR.TRISTATE_OFF,tablecell_merge:k(b,null,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_merge_right:k(b,"right",!0)?CKEDITOR.TRISTATE_OFF:
CKEDITOR.TRISTATE_DISABLED,tablecell_merge_down:k(b,"down",!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_vertical:n(b,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_horizontal:g(b,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_properties:0<d.length?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED}}},tablecell_insertBefore:{label:p.cell.insertBefore,group:"tablecell",command:"cellInsertBefore",order:5},tablecell_insertAfter:{label:p.cell.insertAfter,
group:"tablecell",command:"cellInsertAfter",order:10},tablecell_delete:{label:p.cell.deleteCell,group:"tablecell",command:"cellDelete",order:15},tablecell_merge:{label:p.cell.merge,group:"tablecell",command:"cellMerge",order:16},tablecell_merge_right:{label:p.cell.mergeRight,group:"tablecell",command:"cellMergeRight",order:17},tablecell_merge_down:{label:p.cell.mergeDown,group:"tablecell",command:"cellMergeDown",order:18},tablecell_split_horizontal:{label:p.cell.splitHorizontal,group:"tablecell",
command:"cellHorizontalSplit",order:19},tablecell_split_vertical:{label:p.cell.splitVertical,group:"tablecell",command:"cellVerticalSplit",order:20},tablecell_properties:{label:p.cell.title,group:"tablecellproperties",command:"cellProperties",order:21},tablerow:{label:p.row.menu,group:"tablerow",order:1,getItems:function(){return{tablerow_insertBefore:CKEDITOR.TRISTATE_OFF,tablerow_insertAfter:CKEDITOR.TRISTATE_OFF,tablerow_delete:CKEDITOR.TRISTATE_OFF}}},tablerow_insertBefore:{label:p.row.insertBefore,
group:"tablerow",command:"rowInsertBefore",order:5},tablerow_insertAfter:{label:p.row.insertAfter,group:"tablerow",command:"rowInsertAfter",order:10},tablerow_delete:{label:p.row.deleteRow,group:"tablerow",command:"rowDelete",order:15},tablecolumn:{label:p.column.menu,group:"tablecolumn",order:1,getItems:function(){return{tablecolumn_insertBefore:CKEDITOR.TRISTATE_OFF,tablecolumn_insertAfter:CKEDITOR.TRISTATE_OFF,tablecolumn_delete:CKEDITOR.TRISTATE_OFF}}},tablecolumn_insertBefore:{label:p.column.insertBefore,
group:"tablecolumn",command:"columnInsertBefore",order:5},tablecolumn_insertAfter:{label:p.column.insertAfter,group:"tablecolumn",command:"columnInsertAfter",order:10},tablecolumn_delete:{label:p.column.deleteColumn,group:"tablecolumn",command:"columnDelete",order:15}});c.contextMenu&&c.contextMenu.addListener(function(a,b,c){return(a=c.contains({td:1,th:1},1))&&!a.isReadOnly()?{tablecell:CKEDITOR.TRISTATE_OFF,tablerow:CKEDITOR.TRISTATE_OFF,tablecolumn:CKEDITOR.TRISTATE_OFF}:null})},getSelectedCells:a};
CKEDITOR.plugins.add("tabletools",CKEDITOR.plugins.tabletools)}(),CKEDITOR.tools.buildTableMap=function(a){a=a.$.rows;for(var e=-1,b=[],c=0;c<a.length;c++){e++;!b[e]&&(b[e]=[]);for(var d=-1,m=0;m<a[c].cells.length;m++){var l=a[c].cells[m];for(d++;b[e][d];)d++;for(var f=isNaN(l.colSpan)?1:l.colSpan,l=isNaN(l.rowSpan)?1:l.rowSpan,h=0;h<l;h++){b[e+h]||(b[e+h]=[]);for(var k=0;k<f;k++)b[e+h][d+k]=a[c].cells[m]}d+=f-1}}return b},function(){function a(a){function b(){for(var g=c(),h=CKEDITOR.tools.clone(a.config.toolbarGroups)||
e(a),k=0;k<h.length;k++){var m=h[k];if("/"!=m){"string"==typeof m&&(m=h[k]={name:m});var t,p=m.groups;if(p)for(var w=0;w<p.length;w++)t=p[w],(t=g[t])&&f(m,t);(t=g[m.name])&&f(m,t)}}return h}function c(){var b={},f,e,g;for(f in a.ui.items)e=a.ui.items[f],g=e.toolbar||"others",g=g.split(","),e=g[0],g=parseInt(g[1]||-1,10),b[e]||(b[e]=[]),b[e].push({name:f,order:g});for(e in b)b[e]=b[e].sort(function(a,b){return a.order==b.order?0:0>b.order?-1:0>a.order?1:a.order<b.order?-1:1});return b}function f(b,
c){if(c.length){b.items?b.items.push(a.ui.create("-")):b.items=[];for(var f;f=c.shift();)f="string"==typeof f?f:f.name,k&&-1!=CKEDITOR.tools.indexOf(k,f)||(f=a.ui.create(f))&&a.addFeature(f)&&b.items.push(f)}}function h(a){var b=[],c,d,e;for(c=0;c<a.length;++c)d=a[c],e={},"/"==d?b.push(d):CKEDITOR.tools.isArray(d)?(f(e,CKEDITOR.tools.clone(d)),b.push(e)):d.items&&(f(e,CKEDITOR.tools.clone(d.items)),e.name=d.name,b.push(e));return b}var k=a.config.removeButtons,k=k&&k.split(","),g=a.config.toolbar;
"string"==typeof g&&(g=a.config["toolbar_"+g]);return a.toolbar=g?h(g):b()}function e(a){return a._.toolbarGroups||(a._.toolbarGroups=[{name:"document",groups:["mode","document","doctools"]},{name:"clipboard",groups:["clipboard","undo"]},{name:"editing",groups:["find","selection","spellchecker"]},{name:"forms"},"/",{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi"]},{name:"links"},{name:"insert"},"/",{name:"styles"},{name:"colors"},
{name:"tools"},{name:"others"},{name:"about"}])}var b=function(){this.toolbars=[];this.focusCommandExecuted=!1};b.prototype.focus=function(){for(var a=0,b;b=this.toolbars[a++];)for(var c=0,f;f=b.items[c++];)if(f.focus){f.focus();return}};var c={modes:{wysiwyg:1,source:1},readOnly:1,exec:function(a){a.toolbox&&(a.toolbox.focusCommandExecuted=!0,CKEDITOR.env.ie||CKEDITOR.env.air?setTimeout(function(){a.toolbox.focus()},100):a.toolbox.focus())}};CKEDITOR.plugins.add("toolbar",{requires:"button",init:function(d){var e,
l=function(a,b){var c,g="rtl"==d.lang.dir,n=d.config.toolbarGroupCycling,u=g?37:39,g=g?39:37,n=void 0===n||n;switch(b){case 9:case CKEDITOR.SHIFT+9:for(;!c||!c.items.length;)if(c=9==b?(c?c.next:a.toolbar.next)||d.toolbox.toolbars[0]:(c?c.previous:a.toolbar.previous)||d.toolbox.toolbars[d.toolbox.toolbars.length-1],c.items.length)for(a=c.items[e?c.items.length-1:0];a&&!a.focus;)(a=e?a.previous:a.next)||(c=0);a&&a.focus();return!1;case u:c=a;do c=c.next,!c&&n&&(c=a.toolbar.items[0]);while(c&&!c.focus);
c?c.focus():l(a,9);return!1;case 40:return a.button&&a.button.hasArrow?(d.once("panelShow",function(a){a.data._.panel._.currentBlock.onKeyDown(40)}),a.execute()):l(a,40==b?u:g),!1;case g:case 38:c=a;do c=c.previous,!c&&n&&(c=a.toolbar.items[a.toolbar.items.length-1]);while(c&&!c.focus);c?c.focus():(e=1,l(a,CKEDITOR.SHIFT+9),e=0);return!1;case 27:return d.focus(),!1;case 13:case 32:return a.execute(),!1}return!0};d.on("uiSpace",function(c){if(c.data.space==d.config.toolbarLocation){c.removeListener();
d.toolbox=new b;var e=CKEDITOR.tools.getNextId(),k=['\x3cspan id\x3d"',e,'" class\x3d"cke_voice_label"\x3e',d.lang.toolbar.toolbars,"\x3c/span\x3e",'\x3cspan id\x3d"'+d.ui.spaceId("toolbox")+'" class\x3d"cke_toolbox" role\x3d"group" aria-labelledby\x3d"',e,'" onmousedown\x3d"return false;"\x3e'],e=!1!==d.config.toolbarStartupExpanded,g,m;d.config.toolbarCanCollapse&&d.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&k.push('\x3cspan class\x3d"cke_toolbox_main"'+(e?"\x3e":' style\x3d"display:none"\x3e'));
for(var u=d.toolbox.toolbars,q=a(d),v=0;v<q.length;v++){var t,p=0,w,x=q[v],B;if(x)if(g&&(k.push("\x3c/span\x3e"),m=g=0),"/"===x)k.push('\x3cspan class\x3d"cke_toolbar_break"\x3e\x3c/span\x3e');else{B=x.items||x;for(var r=0;r<B.length;r++){var z=B[r],E;if(z){var y=function(a){a=a.render(d,k);A=p.items.push(a)-1;0<A&&(a.previous=p.items[A-1],a.previous.next=a);a.toolbar=p;a.onkey=l;a.onfocus=function(){d.toolbox.focusCommandExecuted||d.focus()}};if(z.type==CKEDITOR.UI_SEPARATOR)m=g&&z;else{E=!1!==z.canGroup;
if(!p){t=CKEDITOR.tools.getNextId();p={id:t,items:[]};w=x.name&&(d.lang.toolbar.toolbarGroups[x.name]||x.name);k.push('\x3cspan id\x3d"',t,'" class\x3d"cke_toolbar"',w?' aria-labelledby\x3d"'+t+'_label"':"",' role\x3d"toolbar"\x3e');w&&k.push('\x3cspan id\x3d"',t,'_label" class\x3d"cke_voice_label"\x3e',w,"\x3c/span\x3e");k.push('\x3cspan class\x3d"cke_toolbar_start"\x3e\x3c/span\x3e');var A=u.push(p)-1;0<A&&(p.previous=u[A-1],p.previous.next=p)}E?g||(k.push('\x3cspan class\x3d"cke_toolgroup" role\x3d"presentation"\x3e'),
g=1):g&&(k.push("\x3c/span\x3e"),g=0);m&&(y(m),m=0);y(z)}}}g&&(k.push("\x3c/span\x3e"),m=g=0);p&&k.push('\x3cspan class\x3d"cke_toolbar_end"\x3e\x3c/span\x3e\x3c/span\x3e')}}d.config.toolbarCanCollapse&&k.push("\x3c/span\x3e");if(d.config.toolbarCanCollapse&&d.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var C=CKEDITOR.tools.addFunction(function(){d.execCommand("toolbarCollapse")});d.on("destroy",function(){CKEDITOR.tools.removeFunction(C)});d.addCommand("toolbarCollapse",{readOnly:1,exec:function(a){var b=
a.ui.space("toolbar_collapser"),c=b.getPrevious(),d=a.ui.space("contents"),f=c.getParent(),e=parseInt(d.$.style.height,10),g=f.$.offsetHeight,h=b.hasClass("cke_toolbox_collapser_min");h?(c.show(),b.removeClass("cke_toolbox_collapser_min"),b.setAttribute("title",a.lang.toolbar.toolbarCollapse)):(c.hide(),b.addClass("cke_toolbox_collapser_min"),b.setAttribute("title",a.lang.toolbar.toolbarExpand));b.getFirst().setText(h?"▲":"◀");d.setStyle("height",e-(f.$.offsetHeight-g)+"px");a.fire("resize",{outerHeight:a.container.$.offsetHeight,
contentsHeight:d.$.offsetHeight,outerWidth:a.container.$.offsetWidth})},modes:{wysiwyg:1,source:1}});d.setKeystroke(CKEDITOR.ALT+(CKEDITOR.env.ie||CKEDITOR.env.webkit?189:109),"toolbarCollapse");k.push('\x3ca title\x3d"'+(e?d.lang.toolbar.toolbarCollapse:d.lang.toolbar.toolbarExpand)+'" id\x3d"'+d.ui.spaceId("toolbar_collapser")+'" tabIndex\x3d"-1" class\x3d"cke_toolbox_collapser');e||k.push(" cke_toolbox_collapser_min");k.push('" onclick\x3d"CKEDITOR.tools.callFunction('+C+')"\x3e','\x3cspan class\x3d"cke_arrow"\x3e\x26#9650;\x3c/span\x3e',
"\x3c/a\x3e")}k.push("\x3c/span\x3e");c.data.html+=k.join("")}});d.on("destroy",function(){if(this.toolbox){var a,b=0,c,d,e;for(a=this.toolbox.toolbars;b<a.length;b++)for(d=a[b].items,c=0;c<d.length;c++)e=d[c],e.clickFn&&CKEDITOR.tools.removeFunction(e.clickFn),e.keyDownFn&&CKEDITOR.tools.removeFunction(e.keyDownFn)}});d.on("uiReady",function(){var a=d.ui.space("toolbox");a&&d.focusManager.add(a,1)});d.addCommand("toolbarFocus",c);d.setKeystroke(CKEDITOR.ALT+121,"toolbarFocus");d.ui.add("-",CKEDITOR.UI_SEPARATOR,
{});d.ui.addHandler(CKEDITOR.UI_SEPARATOR,{create:function(){return{render:function(a,b){b.push('\x3cspan class\x3d"cke_toolbar_separator" role\x3d"separator"\x3e\x3c/span\x3e');return{}}}}})}});CKEDITOR.ui.prototype.addToolbarGroup=function(a,b,c){var f=e(this.editor),h=0===b,k={name:a};if(c){if(c=CKEDITOR.tools.search(f,function(a){return a.name==c})){!c.groups&&(c.groups=[]);if(b&&(b=CKEDITOR.tools.indexOf(c.groups,b),0<=b)){c.groups.splice(b+1,0,a);return}h?c.groups.splice(0,0,a):c.groups.push(a);
return}b=null}b&&(b=CKEDITOR.tools.indexOf(f,function(a){return a.name==b}));h?f.splice(0,0,a):"number"==typeof b?f.splice(b+1,0,k):f.push(a)}}(),CKEDITOR.UI_SEPARATOR="separator",CKEDITOR.config.toolbarLocation="top","use strict",function(){var a=[CKEDITOR.CTRL+90,CKEDITOR.CTRL+89,CKEDITOR.CTRL+CKEDITOR.SHIFT+90],e={8:1,46:1};CKEDITOR.plugins.add("undo",{init:function(c){function d(a){g.enabled&&!1!==a.data.command.canUndo&&g.save()}function e(){g.enabled=c.readOnly?!1:"wysiwyg"==c.mode;g.onChange()}
var g=c.undoManager=new b(c),l=g.editingHandler=new m(g),u=c.addCommand("undo",{exec:function(){g.undo()&&(c.selectionChange(),this.fire("afterUndo"))},startDisabled:!0,canUndo:!1}),q=c.addCommand("redo",{exec:function(){g.redo()&&(c.selectionChange(),this.fire("afterRedo"))},startDisabled:!0,canUndo:!1});c.setKeystroke([[a[0],"undo"],[a[1],"redo"],[a[2],"redo"]]);g.onChange=function(){u.setState(g.undoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);q.setState(g.redoable()?CKEDITOR.TRISTATE_OFF:
CKEDITOR.TRISTATE_DISABLED)};c.on("beforeCommandExec",d);c.on("afterCommandExec",d);c.on("saveSnapshot",function(a){g.save(a.data&&a.data.contentOnly)});c.on("contentDom",l.attachListeners,l);c.on("instanceReady",function(){c.fire("saveSnapshot")});c.on("beforeModeUnload",function(){"wysiwyg"==c.mode&&g.save(!0)});c.on("mode",e);c.on("readOnly",e);c.ui.addButton&&(c.ui.addButton("Undo",{label:c.lang.undo.undo,command:"undo",toolbar:"undo,10"}),c.ui.addButton("Redo",{label:c.lang.undo.redo,command:"redo",
toolbar:"undo,20"}));c.resetUndo=function(){g.reset();c.fire("saveSnapshot")};c.on("updateSnapshot",function(){g.currentImage&&g.update()});c.on("lockSnapshot",function(a){a=a.data;g.lock(a&&a.dontUpdate,a&&a.forceUpdate)});c.on("unlockSnapshot",g.unlock,g)}});CKEDITOR.plugins.undo={};var b=CKEDITOR.plugins.undo.UndoManager=function(a){this.strokesRecorded=[0,0];this.locked=null;this.previousKeyGroup=-1;this.limit=a.config.undoStackSize||20;this.strokesLimit=25;this.editor=a;this.reset()};b.prototype=
{type:function(a,c){var d=b.getKeyGroup(a),e=this.strokesRecorded[d]+1;c=c||e>=this.strokesLimit;this.typing||(this.hasUndo=this.typing=!0,this.hasRedo=!1,this.onChange());c?(e=0,this.editor.fire("saveSnapshot")):this.editor.fire("change");this.strokesRecorded[d]=e;this.previousKeyGroup=d},keyGroupChanged:function(a){return b.getKeyGroup(a)!=this.previousKeyGroup},reset:function(){this.snapshots=[];this.index=-1;this.currentImage=null;this.hasRedo=this.hasUndo=!1;this.locked=null;this.resetType()},
resetType:function(){this.strokesRecorded=[0,0];this.typing=!1;this.previousKeyGroup=-1},refreshState:function(){this.hasUndo=!!this.getNextImage(!0);this.hasRedo=!!this.getNextImage(!1);this.resetType();this.onChange()},save:function(a,b,d){var e=this.editor;if(this.locked||"ready"!=e.status||"wysiwyg"!=e.mode)return!1;var l=e.editable();if(!l||"ready"!=l.status)return!1;l=this.snapshots;b||(b=new c(e));if(!1===b.contents)return!1;if(this.currentImage)if(b.equalsContent(this.currentImage)){if(a||
b.equalsSelection(this.currentImage))return!1}else!1!==d&&e.fire("change");l.splice(this.index+1,l.length-this.index-1);l.length==this.limit&&l.shift();this.index=l.push(b)-1;this.currentImage=b;!1!==d&&this.refreshState();return!0},restoreImage:function(a){var b=this.editor,c;a.bookmarks&&(b.focus(),c=b.getSelection());this.locked={level:999};this.editor.loadSnapshot(a.contents);a.bookmarks?c.selectBookmarks(a.bookmarks):CKEDITOR.env.ie&&(c=this.editor.document.getBody().$.createTextRange(),c.collapse(!0),
c.select());this.locked=null;this.index=a.index;this.currentImage=this.snapshots[this.index];this.update();this.refreshState();b.fire("change")},getNextImage:function(a){var b=this.snapshots,c=this.currentImage,d;if(c)if(a)for(d=this.index-1;0<=d;d--){if(a=b[d],!c.equalsContent(a))return a.index=d,a}else for(d=this.index+1;d<b.length;d++)if(a=b[d],!c.equalsContent(a))return a.index=d,a;return null},redoable:function(){return this.enabled&&this.hasRedo},undoable:function(){return this.enabled&&this.hasUndo},
undo:function(){if(this.undoable()){this.save(!0);var a=this.getNextImage(!0);if(a)return this.restoreImage(a),!0}return!1},redo:function(){if(this.redoable()&&(this.save(!0),this.redoable())){var a=this.getNextImage(!1);if(a)return this.restoreImage(a),!0}return!1},update:function(a){if(!this.locked){a||(a=new c(this.editor));for(var b=this.index,d=this.snapshots;0<b&&this.currentImage.equalsContent(d[b-1]);)--b;d.splice(b,this.index-b+1,a);this.index=b;this.currentImage=a}},updateSelection:function(a){if(!this.snapshots.length)return!1;
var b=this.snapshots,c=b[b.length-1];return c.equalsContent(a)&&!c.equalsSelection(a)?(this.currentImage=b[b.length-1]=a,!0):!1},lock:function(a,b){if(this.locked)this.locked.level++;else if(a)this.locked={level:1};else{var d=null;if(b)d=!0;else{var e=new c(this.editor,!0);this.currentImage&&this.currentImage.equalsContent(e)&&(d=e)}this.locked={update:d,level:1}}},unlock:function(){if(this.locked&&!--this.locked.level){var a=this.locked.update;this.locked=null;if(!0===a)this.update();else if(a){var b=
new c(this.editor,!0);a.equalsContent(b)||this.update()}}}};b.navigationKeyCodes={37:1,38:1,39:1,40:1,36:1,35:1,33:1,34:1};b.keyGroups={PRINTABLE:0,FUNCTIONAL:1};b.isNavigationKey=function(a){return!!b.navigationKeyCodes[a]};b.getKeyGroup=function(a){var c=b.keyGroups;return e[a]?c.FUNCTIONAL:c.PRINTABLE};b.getOppositeKeyGroup=function(a){var c=b.keyGroups;return a==c.FUNCTIONAL?c.PRINTABLE:c.FUNCTIONAL};b.ieFunctionalKeysBug=function(a){return CKEDITOR.env.ie&&b.getKeyGroup(a)==b.keyGroups.FUNCTIONAL};
var c=CKEDITOR.plugins.undo.Image=function(a,b){this.editor=a;a.fire("beforeUndoImage");var c=a.getSnapshot();CKEDITOR.env.ie&&c&&(c=c.replace(/\s+data-cke-expando=".*?"/g,""));this.contents=c;b||(this.bookmarks=(c=c&&a.getSelection())&&c.createBookmarks2(!0));a.fire("afterUndoImage")},d=/\b(?:href|src|name)="[^"]*?"/gi;c.prototype={equalsContent:function(a){var b=this.contents;a=a.contents;CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)&&(b=b.replace(d,""),a=a.replace(d,""));return b!=
a?!1:!0},equalsSelection:function(a){var b=this.bookmarks;a=a.bookmarks;if(b||a){if(!b||!a||b.length!=a.length)return!1;for(var c=0;c<b.length;c++){var d=b[c],e=a[c];if(d.startOffset!=e.startOffset||d.endOffset!=e.endOffset||!CKEDITOR.tools.arrayCompare(d.start,e.start)||!CKEDITOR.tools.arrayCompare(d.end,e.end))return!1}}return!0}};var m=CKEDITOR.plugins.undo.NativeEditingHandler=function(a){this.undoManager=a;this.ignoreInputEvent=!1;this.keyEventsStack=new l;this.lastKeydownImage=null};m.prototype=
{onKeydown:function(d){var e=d.data.getKey();if(229!==e)if(-1<CKEDITOR.tools.indexOf(a,d.data.getKeystroke()))d.data.preventDefault();else if(this.keyEventsStack.cleanUp(d),d=this.undoManager,this.keyEventsStack.getLast(e)||this.keyEventsStack.push(e),this.lastKeydownImage=new c(d.editor),b.isNavigationKey(e)||this.undoManager.keyGroupChanged(e))if(d.strokesRecorded[0]||d.strokesRecorded[1])d.save(!1,this.lastKeydownImage,!1),d.resetType()},onInput:function(){if(this.ignoreInputEvent)this.ignoreInputEvent=
!1;else{var a=this.keyEventsStack.getLast();a||(a=this.keyEventsStack.push(0));this.keyEventsStack.increment(a.keyCode);this.keyEventsStack.getTotalInputs()>=this.undoManager.strokesLimit&&(this.undoManager.type(a.keyCode,!0),this.keyEventsStack.resetInputs())}},onKeyup:function(a){var d=this.undoManager;a=a.data.getKey();var e=this.keyEventsStack.getTotalInputs();this.keyEventsStack.remove(a);if(!(b.ieFunctionalKeysBug(a)&&this.lastKeydownImage&&this.lastKeydownImage.equalsContent(new c(d.editor,
!0))))if(0<e)d.type(a);else if(b.isNavigationKey(a))this.onNavigationKey(!0)},onNavigationKey:function(a){var b=this.undoManager;!a&&b.save(!0,null,!1)||b.updateSelection(new c(b.editor));b.resetType()},ignoreInputEventListener:function(){this.ignoreInputEvent=!0},attachListeners:function(){var a=this.undoManager.editor,c=a.editable(),d=this;c.attachListener(c,"keydown",function(a){d.onKeydown(a);if(b.ieFunctionalKeysBug(a.data.getKey()))d.onInput()},null,null,999);c.attachListener(c,CKEDITOR.env.ie?
"keypress":"input",d.onInput,d,null,999);c.attachListener(c,"keyup",d.onKeyup,d,null,999);c.attachListener(c,"paste",d.ignoreInputEventListener,d,null,999);c.attachListener(c,"drop",d.ignoreInputEventListener,d,null,999);c.attachListener(c.isInline()?c:a.document.getDocumentElement(),"click",function(){d.onNavigationKey()},null,null,999);c.attachListener(this.undoManager.editor,"blur",function(){d.keyEventsStack.remove(9)},null,null,999)}};var l=CKEDITOR.plugins.undo.KeyEventsStack=function(){this.stack=
[]};l.prototype={push:function(a){a=this.stack.push({keyCode:a,inputs:0});return this.stack[a-1]},getLastIndex:function(a){if("number"!=typeof a)return this.stack.length-1;for(var b=this.stack.length;b--;)if(this.stack[b].keyCode==a)return b;return-1},getLast:function(a){a=this.getLastIndex(a);return-1!=a?this.stack[a]:null},increment:function(a){this.getLast(a).inputs++},remove:function(a){a=this.getLastIndex(a);-1!=a&&this.stack.splice(a,1)},resetInputs:function(a){if("number"==typeof a)this.getLast(a).inputs=
0;else for(a=this.stack.length;a--;)this.stack[a].inputs=0},getTotalInputs:function(){for(var a=this.stack.length,b=0;a--;)b+=this.stack[a].inputs;return b},cleanUp:function(a){a=a.data.$;a.ctrlKey||a.metaKey||this.remove(17);a.shiftKey||this.remove(16);a.altKey||this.remove(18)}}}(),CKEDITOR.plugins.add("wsc",{requires:"dialog",parseApi:function(a){a.config.wsc_onFinish="function"===typeof a.config.wsc_onFinish?a.config.wsc_onFinish:function(){};a.config.wsc_onClose="function"===typeof a.config.wsc_onClose?
a.config.wsc_onClose:function(){}},parseConfig:function(a){a.config.wsc_customerId=a.config.wsc_customerId||CKEDITOR.config.wsc_customerId||"1:ua3xw1-2XyGJ3-GWruD3-6OFNT1-oXcuB1-nR6Bp4-hgQHc-EcYng3-sdRXG3-NOfFk";a.config.wsc_customDictionaryIds=a.config.wsc_customDictionaryIds||CKEDITOR.config.wsc_customDictionaryIds||"";a.config.wsc_userDictionaryName=a.config.wsc_userDictionaryName||CKEDITOR.config.wsc_userDictionaryName||"";a.config.wsc_customLoaderScript=a.config.wsc_customLoaderScript||CKEDITOR.config.wsc_customLoaderScript;
CKEDITOR.config.wsc_cmd=a.config.wsc_cmd||CKEDITOR.config.wsc_cmd||"spell";CKEDITOR.config.wsc_version="v4.3.0-master-d769233";CKEDITOR.config.wsc_removeGlobalVariable=!0},init:function(a){var e=CKEDITOR.env;this.parseConfig(a);this.parseApi(a);a.addCommand("checkspell",new CKEDITOR.dialogCommand("checkspell")).modes={wysiwyg:!CKEDITOR.env.opera&&!CKEDITOR.env.air&&document.domain==window.location.hostname&&!(e.ie&&(8>e.version||e.quirks))};"undefined"==typeof a.plugins.scayt&&a.ui.addButton&&a.ui.addButton("SpellChecker",
{label:a.lang.wsc.toolbar,click:function(a){var c=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.container.getText():a.document.getBody().getText();(c=c.replace(/\s/g,""))?a.execCommand("checkspell"):alert("Nothing to check!")},toolbar:"spellchecker,10"});CKEDITOR.dialog.add("checkspell",this.path+(CKEDITOR.env.ie&&7>=CKEDITOR.env.version?"dialogs/wsc_ie.js":window.postMessage?"dialogs/wsc.js":"dialogs/wsc_ie.js"))}}),function(){function a(a){function b(a){var c=!1;g.attachListener(g,"keydown",function(){var b=
f.getBody().getElementsByTag(a);if(!c){for(var d=0;d<b.count();d++)b.getItem(d).setCustomData("retain",!0);c=!0}},null,null,1);g.attachListener(g,"keyup",function(){var b=f.getElementsByTag(a);c&&(1!=b.count()||b.getItem(0).getCustomData("retain")||b.getItem(0).remove(1),c=!1)})}var c=this.editor,f=a.document,h=f.body,k=f.getElementById("cke_actscrpt");k&&k.parentNode.removeChild(k);(k=f.getElementById("cke_shimscrpt"))&&k.parentNode.removeChild(k);(k=f.getElementById("cke_basetagscrpt"))&&k.parentNode.removeChild(k);
h.contentEditable=!0;CKEDITOR.env.ie&&(h.hideFocus=!0,h.disabled=!0,h.removeAttribute("disabled"));delete this._.isLoadingData;this.$=h;f=new CKEDITOR.dom.document(f);this.setup();this.fixInitialSelection();var g=this;CKEDITOR.env.ie&&!CKEDITOR.env.edge&&c.enterMode!=CKEDITOR.ENTER_P?b("p"):CKEDITOR.env.edge&&c.enterMode!=CKEDITOR.ENTER_DIV&&b("div");if(CKEDITOR.env.webkit||CKEDITOR.env.ie&&10<CKEDITOR.env.version)f.getDocumentElement().on("mousedown",function(a){a.data.getTarget().is("html")&&setTimeout(function(){c.editable().focus()})});
e(c);try{c.document.$.execCommand("2D-position",!1,!0)}catch(n){}(CKEDITOR.env.gecko||CKEDITOR.env.ie&&"CSS1Compat"==c.document.$.compatMode)&&this.attachListener(this,"keydown",function(a){var b=a.data.getKeystroke();if(33==b||34==b)if(CKEDITOR.env.ie)setTimeout(function(){c.getSelection().scrollIntoView()},0);else if(c.window.$.innerHeight>this.$.offsetHeight){var d=c.createRange();d[33==b?"moveToElementEditStart":"moveToElementEditEnd"](this);d.select();a.data.preventDefault()}});CKEDITOR.env.ie&&
this.attachListener(f,"blur",function(){try{f.$.selection.empty()}catch(a){}});CKEDITOR.env.iOS&&this.attachListener(f,"touchend",function(){a.focus()});h=c.document.getElementsByTag("title").getItem(0);h.data("cke-title",h.getText());CKEDITOR.env.ie&&(c.document.$.title=this._.docTitle);CKEDITOR.tools.setTimeout(function(){"unloaded"==this.status&&(this.status="ready");c.fire("contentDom");this._.isPendingFocus&&(c.focus(),this._.isPendingFocus=!1);setTimeout(function(){c.fire("dataReady")},0)},
0,this)}function e(a){function b(){var e;a.editable().attachListener(a,"selectionChange",function(){var b=a.getSelection().getSelectedElement();b&&(e&&(e.detachEvent("onresizestart",c),e=null),b.$.attachEvent("onresizestart",c),e=b.$)})}function c(a){a.returnValue=!1}if(CKEDITOR.env.gecko)try{var e=a.document.$;e.execCommand("enableObjectResizing",!1,!a.config.disableObjectResizing);e.execCommand("enableInlineTableEditing",!1,!a.config.disableNativeTableHandles)}catch(h){}else CKEDITOR.env.ie&&11>
CKEDITOR.env.version&&a.config.disableObjectResizing&&b(a)}function b(){var a=[];if(8<=CKEDITOR.document.$.documentMode){a.push("html.CSS1Compat [contenteditable\x3dfalse]{min-height:0 !important}");var b=[],c;for(c in CKEDITOR.dtd.$removeEmpty)b.push("html.CSS1Compat "+c+"[contenteditable\x3dfalse]");a.push(b.join(",")+"{display:inline-block}")}else CKEDITOR.env.gecko&&(a.push("html{height:100% !important}"),a.push("img:-moz-broken{-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"));
a.push("html{cursor:text;*cursor:auto}");a.push("img,input,textarea{cursor:default}");return a.join("\n")}CKEDITOR.plugins.add("wysiwygarea",{init:function(a){a.config.fullPage&&a.addFeature({allowedContent:"html head title; style [media,type]; body (*)[id]; meta link [*]",requiredContent:"body"});a.addMode("wysiwyg",function(b){function e(f){f&&f.removeListener();a.editable(new c(a,h.$.contentWindow.document.body));a.setData(a.getData(1),b)}var f="document.open();"+(CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+
")();":"")+"document.close();",f=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie&&!CKEDITOR.env.edge?"javascript:void(function(){"+encodeURIComponent(f)+"}())":"",h=CKEDITOR.dom.element.createFromHtml('\x3ciframe src\x3d"'+f+'" frameBorder\x3d"0"\x3e\x3c/iframe\x3e');h.setStyles({width:"100%",height:"100%"});h.addClass("cke_wysiwyg_frame").addClass("cke_reset");f=a.ui.space("contents");f.append(h);var k=CKEDITOR.env.ie&&!CKEDITOR.env.edge||CKEDITOR.env.gecko;if(k)h.on("load",e);var g=a.title,
n=a.fire("ariaEditorHelpLabel",{}).label;g&&(CKEDITOR.env.ie&&n&&(g+=", "+n),h.setAttribute("title",g));if(n){var g=CKEDITOR.tools.getNextId(),u=CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"'+g+'" class\x3d"cke_voice_label"\x3e'+n+"\x3c/span\x3e");f.append(u,1);h.setAttribute("aria-describedby",g)}a.on("beforeModeUnload",function(a){a.removeListener();u&&u.remove()});h.setAttributes({tabIndex:a.tabIndex,allowTransparency:"true"});!k&&e();a.fire("ariaWidget",h)})}});CKEDITOR.editor.prototype.addContentsCss=
function(a){var b=this.config,c=b.contentsCss;CKEDITOR.tools.isArray(c)||(b.contentsCss=c?[c]:[]);b.contentsCss.push(a)};var c=CKEDITOR.tools.createClass({$:function(){this.base.apply(this,arguments);this._.frameLoadedHandler=CKEDITOR.tools.addFunction(function(b){CKEDITOR.tools.setTimeout(a,0,this,b)},this);this._.docTitle=this.getWindow().getFrame().getAttribute("title")},base:CKEDITOR.editable,proto:{setData:function(a,c){var e=this.editor;if(c)this.setHtml(a),this.fixInitialSelection(),e.fire("dataReady");
else{this._.isLoadingData=!0;e._.dataStore={id:1};var f=e.config,h=f.fullPage,k=f.docType,g=CKEDITOR.tools.buildStyleHtml(b()).replace(/<style>/,'\x3cstyle data-cke-temp\x3d"1"\x3e');h||(g+=CKEDITOR.tools.buildStyleHtml(e.config.contentsCss));var n=f.baseHref?'\x3cbase href\x3d"'+f.baseHref+'" data-cke-temp\x3d"1" /\x3e':"";h&&(a=a.replace(/<!DOCTYPE[^>]*>/i,function(a){e.docType=k=a;return""}).replace(/<\?xml\s[^\?]*\?>/i,function(a){e.xmlDeclaration=a;return""}));a=e.dataProcessor.toHtml(a);h?(/<body[\s|>]/.test(a)||
(a="\x3cbody\x3e"+a),/<html[\s|>]/.test(a)||(a="\x3chtml\x3e"+a+"\x3c/html\x3e"),/<head[\s|>]/.test(a)?/<title[\s|>]/.test(a)||(a=a.replace(/<head[^>]*>/,"$\x26\x3ctitle\x3e\x3c/title\x3e")):a=a.replace(/<html[^>]*>/,"$\x26\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e"),n&&(a=a.replace(/<head[^>]*?>/,"$\x26"+n)),a=a.replace(/<\/head\s*>/,g+"$\x26"),a=k+a):a=f.docType+'\x3chtml dir\x3d"'+f.contentsLangDirection+'" lang\x3d"'+(f.contentsLanguage||e.langCode)+'"\x3e\x3chead\x3e\x3ctitle\x3e'+
this._.docTitle+"\x3c/title\x3e"+n+g+"\x3c/head\x3e\x3cbody"+(f.bodyId?' id\x3d"'+f.bodyId+'"':"")+(f.bodyClass?' class\x3d"'+f.bodyClass+'"':"")+"\x3e"+a+"\x3c/body\x3e\x3c/html\x3e";CKEDITOR.env.gecko&&(a=a.replace(/<body/,'\x3cbody contenteditable\x3d"true" '),2E4>CKEDITOR.env.version&&(a=a.replace(/<body[^>]*>/,"$\x26\x3c!-- cke-content-start --\x3e")));f='\x3cscript id\x3d"cke_actscrpt" type\x3d"text/javascript"'+(CKEDITOR.env.ie?' defer\x3d"defer" ':"")+"\x3evar wasLoaded\x3d0;function onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction("+
this._.frameLoadedHandler+",window);wasLoaded\x3d1;}"+(CKEDITOR.env.ie?"onload();":'document.addEventListener("DOMContentLoaded", onload, false );')+"\x3c/script\x3e";CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(f+='\x3cscript id\x3d"cke_shimscrpt"\x3ewindow.parent.CKEDITOR.tools.enableHtml5Elements(document)\x3c/script\x3e');n&&CKEDITOR.env.ie&&10>CKEDITOR.env.version&&(f+='\x3cscript id\x3d"cke_basetagscrpt"\x3evar baseTag \x3d document.querySelector( "base" );baseTag.href \x3d baseTag.href;\x3c/script\x3e');
a=a.replace(/(?=\s*<\/(:?head)>)/,f);this.clearCustomData();this.clearListeners();e.fire("contentDomUnload");var u=this.getDocument();try{u.write(a)}catch(q){setTimeout(function(){u.write(a)},0)}}},getData:function(a){if(a)return this.getHtml();a=this.editor;var b=a.config,c=b.fullPage,e=c&&a.docType,h=c&&a.xmlDeclaration,k=this.getDocument(),c=c?k.getDocumentElement().getOuterHtml():k.getBody().getHtml();CKEDITOR.env.gecko&&b.enterMode!=CKEDITOR.ENTER_BR&&(c=c.replace(/<br>(?=\s*(:?$|<\/body>))/,
""));c=a.dataProcessor.toDataFormat(c);h&&(c=h+"\n"+c);e&&(c=e+"\n"+c);return c},focus:function(){this._.isLoadingData?this._.isPendingFocus=!0:c.baseProto.focus.call(this)},detach:function(){var a=this.editor,b=a.document,a=a.window.getFrame();c.baseProto.detach.call(this);this.clearCustomData();b.getDocumentElement().clearCustomData();a.clearCustomData();CKEDITOR.tools.removeFunction(this._.frameLoadedHandler);(b=a.removeCustomData("onResize"))&&b.removeListener();a.remove()}}})}(),CKEDITOR.config.disableObjectResizing=
!1,CKEDITOR.config.disableNativeTableHandles=!0,CKEDITOR.config.disableNativeSpellChecker=!0,CKEDITOR.config.contentsCss=CKEDITOR.getUrl("contents.css"),CKEDITOR.config.plugins="dialogui,dialog,a11yhelp,about,basicstyles,blockquote,clipboard,panel,floatpanel,menu,contextmenu,elementspath,indent,indentlist,list,enterkey,entities,popup,filebrowser,floatingspace,listblock,button,richcombo,format,horizontalrule,htmlwriter,image,fakeobjects,link,magicline,maximize,pastefromword,pastetext,removeformat,resize,menubutton,scayt,showborders,sourcearea,specialchar,stylescombo,tab,table,tabletools,toolbar,undo,wsc,wysiwygarea",
CKEDITOR.config.skin="moono",function(){var a=function(a,b){var c=CKEDITOR.getUrl("plugins/"+b);a=a.split(",");for(var d=0;d<a.length;d++)CKEDITOR.skin.icons[a[d]]={path:c,offset:-a[++d],bgsize:a[++d]}};CKEDITOR.env.hidpi?a("about,0,,bold,24,,italic,48,,strike,72,,subscript,96,,superscript,120,,underline,144,,bidiltr,168,,bidirtl,192,,blockquote,216,,copy-rtl,240,,copy,264,,cut-rtl,288,,cut,312,,paste-rtl,336,,paste,360,,codesnippet,384,,bgcolor,408,,textcolor,432,,creatediv,456,,docprops-rtl,480,,docprops,504,,embed,528,,embedsemantic,552,,find-rtl,576,,find,600,,replace,624,,flash,648,,button,672,,checkbox,696,,form,720,,hiddenfield,744,,imagebutton,768,,radio,792,,select-rtl,816,,select,840,,textarea-rtl,864,,textarea,888,,textfield-rtl,912,,textfield,936,,horizontalrule,960,,iframe,984,,image,1008,,indent-rtl,1032,,indent,1056,,outdent-rtl,1080,,outdent,1104,,justifyblock,1128,,justifycenter,1152,,justifyleft,1176,,justifyright,1200,,language,1224,,anchor-rtl,1248,,anchor,1272,,link,1296,,unlink,1320,,bulletedlist-rtl,1344,,bulletedlist,1368,,numberedlist-rtl,1392,,numberedlist,1416,,mathjax,1440,,maximize,1464,,newpage-rtl,1488,,newpage,1512,,pagebreak-rtl,1536,,pagebreak,1560,,pastefromword-rtl,1584,,pastefromword,1608,,pastetext-rtl,1632,,pastetext,1656,,placeholder,1680,,preview-rtl,1704,,preview,1728,,print,1752,,removeformat,1776,,save,1800,,scayt,1824,,selectall,1848,,showblocks-rtl,1872,,showblocks,1896,,smiley,1920,,source-rtl,1944,,source,1968,,sourcedialog-rtl,1992,,sourcedialog,2016,,specialchar,2040,,table,2064,,templates-rtl,2088,,templates,2112,,uicolor,2136,,redo-rtl,2160,,redo,2184,,undo-rtl,2208,,undo,2232,,simplebox,4512,auto,spellchecker,2280,",
"icons_hidpi.png"):a("about,0,auto,bold,24,auto,italic,48,auto,strike,72,auto,subscript,96,auto,superscript,120,auto,underline,144,auto,bidiltr,168,auto,bidirtl,192,auto,blockquote,216,auto,copy-rtl,240,auto,copy,264,auto,cut-rtl,288,auto,cut,312,auto,paste-rtl,336,auto,paste,360,auto,codesnippet,384,auto,bgcolor,408,auto,textcolor,432,auto,creatediv,456,auto,docprops-rtl,480,auto,docprops,504,auto,embed,528,auto,embedsemantic,552,auto,find-rtl,576,auto,find,600,auto,replace,624,auto,flash,648,auto,button,672,auto,checkbox,696,auto,form,720,auto,hiddenfield,744,auto,imagebutton,768,auto,radio,792,auto,select-rtl,816,auto,select,840,auto,textarea-rtl,864,auto,textarea,888,auto,textfield-rtl,912,auto,textfield,936,auto,horizontalrule,960,auto,iframe,984,auto,image,1008,auto,indent-rtl,1032,auto,indent,1056,auto,outdent-rtl,1080,auto,outdent,1104,auto,justifyblock,1128,auto,justifycenter,1152,auto,justifyleft,1176,auto,justifyright,1200,auto,language,1224,auto,anchor-rtl,1248,auto,anchor,1272,auto,link,1296,auto,unlink,1320,auto,bulletedlist-rtl,1344,auto,bulletedlist,1368,auto,numberedlist-rtl,1392,auto,numberedlist,1416,auto,mathjax,1440,auto,maximize,1464,auto,newpage-rtl,1488,auto,newpage,1512,auto,pagebreak-rtl,1536,auto,pagebreak,1560,auto,pastefromword-rtl,1584,auto,pastefromword,1608,auto,pastetext-rtl,1632,auto,pastetext,1656,auto,placeholder,1680,auto,preview-rtl,1704,auto,preview,1728,auto,print,1752,auto,removeformat,1776,auto,save,1800,auto,scayt,1824,auto,selectall,1848,auto,showblocks-rtl,1872,auto,showblocks,1896,auto,smiley,1920,auto,source-rtl,1944,auto,source,1968,auto,sourcedialog-rtl,1992,auto,sourcedialog,2016,auto,specialchar,2040,auto,table,2064,auto,templates-rtl,2088,auto,templates,2112,auto,uicolor,2136,auto,redo-rtl,2160,auto,redo,2184,auto,undo-rtl,2208,auto,undo,2232,auto,simplebox,2256,auto,spellchecker,2280,auto",
"icons.png")}())})();
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * Datepicker for Bootstrap v1.4.1 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function h(b){var c={};if(p[b]||(b=b.split("-")[0],p[b])){var d=p[b];return a.each(o,function(a,b){b in d&&(c[b]=d[b])}),c}}var i=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(this[c].valueOf()===b)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new i;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),j=function(b,c){this._process_options(c),this.dates=new i,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=a(q.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot .today, tfoot .clear").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};j.prototype={constructor:j,_process_options:function(e){this._o=a.extend({},this._o,e);var f=this.o=a.extend({},this._o),g=f.language;switch(p[g]||(g=g.split("-")[0],p[g]||(g=n.language)),f.language=g,f.startView){case 2:case"decade":f.startView=2;break;case 1:case"year":f.startView=1;break;default:f.startView=0}switch(f.minViewMode){case 1:case"months":f.minViewMode=1;break;case 2:case"years":f.minViewMode=2;break;default:f.minViewMode=0}f.startView=Math.max(f.startView,f.minViewMode),f.multidate!==!0&&(f.multidate=Number(f.multidate)||!1,f.multidate!==!1&&(f.multidate=Math.max(0,f.multidate))),f.multidateSeparator=String(f.multidateSeparator),f.weekStart%=7,f.weekEnd=(f.weekStart+6)%7;var h=q.parseFormat(f.format);if(f.startDate!==-(1/0)&&(f.startDate?f.startDate instanceof Date?f.startDate=this._local_to_utc(this._zero_time(f.startDate)):f.startDate=q.parseDate(f.startDate,h,f.language):f.startDate=-(1/0)),f.endDate!==1/0&&(f.endDate?f.endDate instanceof Date?f.endDate=this._local_to_utc(this._zero_time(f.endDate)):f.endDate=q.parseDate(f.endDate,h,f.language):f.endDate=1/0),f.daysOfWeekDisabled=f.daysOfWeekDisabled||[],a.isArray(f.daysOfWeekDisabled)||(f.daysOfWeekDisabled=f.daysOfWeekDisabled.split(/[,\s]*/)),f.daysOfWeekDisabled=a.map(f.daysOfWeekDisabled,function(a){return parseInt(a,10)}),f.datesDisabled=f.datesDisabled||[],!a.isArray(f.datesDisabled)){var i=[];i.push(q.parseDate(f.datesDisabled,h,f.language)),f.datesDisabled=i}f.datesDisabled=a.map(f.datesDisabled,function(a){return q.parseDate(a,h,f.language)});var j=String(f.orientation).toLowerCase().split(/\s+/g),k=f.orientation.toLowerCase();if(j=a.grep(j,function(a){return/^auto|left|right|top|bottom$/.test(a)}),f.orientation={x:"auto",y:"auto"},k&&"auto"!==k)if(1===j.length)switch(j[0]){case"top":case"bottom":f.orientation.y=j[0];break;case"left":case"right":f.orientation.x=j[0]}else k=a.grep(j,function(a){return/^left|right$/.test(a)}),f.orientation.x=k[0]||"auto",k=a.grep(j,function(a){return/^top|bottom$/.test(a)}),f.orientation.y=k[0]||"auto";else;if(f.defaultViewDate){var l=f.defaultViewDate.year||(new Date).getFullYear(),m=f.defaultViewDate.month||0,o=f.defaultViewDate.day||1;f.defaultViewDate=c(l,m,o)}else f.defaultViewDate=d();f.showOnFocus=f.showOnFocus!==b?f.showOnFocus:!0},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),b],[this.component,{click:a.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:a.proxy(this.show,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return q.formatDate(c,b,this.o.language)},this)})},show:function(){return this.element.attr("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline?this:this.picker.is(":visible")?(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"),this):this},remove:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return"undefined"!=typeof a?new Date(a):null},clearDates:function(){var a;this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&a.val("").change(),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,a.map(b,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),setValue:function(){var a=this.getFormattedDate();return this.isInput?this.element.val(a).change():this.component&&this.element.find("input").val(a).change(),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return q.formatDate(a,c,d)}).join(this.o.multidateSeparator)},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows(),this},setDatesDisabled:function(a){this._process_options({datesDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container).width(),f=a(this.o.container).height(),g=a(this.o.container).scrollTop(),h=a(this.o.container).offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+10,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>e?(this.picker.addClass("datepicker-orient-right"),n=k.left+m-b):this.picker.addClass("datepicker-orient-left");var p,q,r=this.o.orientation.y;if("auto"===r&&(p=-g+o-c,q=g+f-(o+l+c),r=Math.max(p,q)===q?"top":"bottom"),this.picker.addClass("datepicker-orient-"+r),"top"===r?o+=l:o-=c+parseInt(this.picker.css("padding-top")),this.o.rtl){var s=e-(n+m);this.picker.css({top:o,right:s,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return q.parseDate(a,this.o.format,this.o.language)},this)),c=a.grep(c,a.proxy(function(a){return a<this.o.startDate||a>this.o.endDate||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate&&(this.viewDate=new Date(this.o.endDate)),d?this.setValue():c.length&&String(b)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&b.length&&this._trigger("clearDate"),this.fill(),this},fillDow:function(){var a=this.o.weekStart,b="<tr>";if(this.o.calendarWeeks){this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan",function(a,b){return parseInt(b)+1});var c='<th class="cw">&#160;</th>';b+=c}for(;a<this.o.weekStart+7;)b+='<th class="dow">'+p[this.o.language].daysMin[a++%7]+"</th>";b+="</tr>",this.picker.find(".datepicker-days thead").append(b)},fillMonths:function(){for(var a="",b=0;12>b;)a+='<span class="month">'+p[this.o.language].monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),f=this.viewDate.getUTCMonth(),g=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()===d&&b.getUTCMonth()<f?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()===d&&b.getUTCMonth()>f)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&b.getUTCFullYear()===g.getFullYear()&&b.getUTCMonth()===g.getMonth()&&b.getUTCDate()===g.getDate()&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),(b.valueOf()<this.o.startDate||b.valueOf()>this.o.endDate||-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled))&&c.push("disabled"),this.o.datesDisabled.length>0&&a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0&&c.push("disabled","disabled-date"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected")),c},fill:function(){var d,e=new Date(this.viewDate),f=e.getUTCFullYear(),g=e.getUTCMonth(),h=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),i=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),j=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,k=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,l=p[this.o.language].today||p.en.today||"",m=p[this.o.language].clear||p.en.clear||"";if(!isNaN(f)&&!isNaN(g)){this.picker.find(".datepicker-days thead .datepicker-switch").text(p[this.o.language].months[g]+" "+f),this.picker.find("tfoot .today").text(l).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(m).toggle(this.o.clearBtn!==!1),this.updateNavArrows(),this.fillMonths();var n=c(f,g-1,28),o=q.getDaysInMonth(n.getUTCFullYear(),n.getUTCMonth());n.setUTCDate(o),n.setUTCDate(o-(n.getUTCDay()-this.o.weekStart+7)%7);var r=new Date(n);r.setUTCDate(r.getUTCDate()+42),r=r.valueOf();for(var s,t=[];n.valueOf()<r;){if(n.getUTCDay()===this.o.weekStart&&(t.push("<tr>"),this.o.calendarWeeks)){var u=new Date(+n+(this.o.weekStart-n.getUTCDay()-7)%7*864e5),v=new Date(Number(u)+(11-u.getUTCDay())%7*864e5),w=new Date(Number(w=c(v.getUTCFullYear(),0,1))+(11-w.getUTCDay())%7*864e5),x=(v-w)/864e5/7+1;t.push('<td class="cw">'+x+"</td>")}if(s=this.getClassNames(n),s.push("day"),this.o.beforeShowDay!==a.noop){var y=this.o.beforeShowDay(this._utc_to_local(n));y===b?y={}:"boolean"==typeof y?y={enabled:y}:"string"==typeof y&&(y={classes:y}),y.enabled===!1&&s.push("disabled"),y.classes&&(s=s.concat(y.classes.split(/\s+/))),y.tooltip&&(d=y.tooltip)}s=a.unique(s),t.push('<td class="'+s.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+n.getUTCDate()+"</td>"),d=null,n.getUTCDay()===this.o.weekEnd&&t.push("</tr>"),n.setUTCDate(n.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(t.join(""));var z=this.picker.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===f&&z.eq(b.getUTCMonth()).addClass("active")}),(h>f||f>j)&&z.addClass("disabled"),f===h&&z.slice(0,i).addClass("disabled"),f===j&&z.slice(k+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var A=this;a.each(z,function(b,c){if(!a(c).hasClass("disabled")){var d=new Date(f,b,1),e=A.o.beforeShowMonth(d);e===!1&&a(c).addClass("disabled")}})}t="",f=10*parseInt(f/10,10);var B=this.picker.find(".datepicker-years").find("th:eq(1)").text(f+"-"+(f+9)).end().find("td");f-=1;for(var C,D=a.map(this.dates,function(a){return a.getUTCFullYear()}),E=-1;11>E;E++)C=["year"],-1===E?C.push("old"):10===E&&C.push("new"),-1!==a.inArray(f,D)&&C.push("active"),(h>f||f>j)&&C.push("disabled"),t+='<span class="'+C.join(" ")+'">'+f+"</span>",f+=1;B.html(t)}},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(b){b.preventDefault();var d,e,f,g=a(b.target).closest("span, td, th");if(1===g.length)switch(g[0].nodeName.toLowerCase()){case"th":switch(g[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var h=q.modes[this.viewMode].navStep*("prev"===g[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,h),this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,h),1===this.viewMode&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":var i=new Date;i=c(i.getFullYear(),i.getMonth(),i.getDate(),0,0,0),this.showMode(-2);var j="linked"===this.o.todayBtn?null:"view";this._setDate(i,j);break;case"clear":this.clearDates()}break;case"span":g.hasClass("disabled")||(this.viewDate.setUTCDate(1),g.hasClass("month")?(f=1,e=g.parent().find("span").index(g),d=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(e),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode&&this._setDate(c(d,e,f))):(f=1,e=0,d=parseInt(g.text(),10)||0,this.viewDate.setUTCFullYear(d),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(c(d,e,f))),this.showMode(-1),this.fill());break;case"td":g.hasClass("day")&&!g.hasClass("disabled")&&(f=parseInt(g.text(),10)||1,d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),g.hasClass("old")?0===e?(e=11,d-=1):e-=1:g.hasClass("new")&&(11===e?(e=0,d+=1):e+=1),this._setDate(c(d,e,f)))}this.picker.is(":visible")&&this._focused_from&&a(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate");var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&c.change(),!this.o.autoclose||b&&"date"!==b||this.hide()},moveMonth:function(a,c){if(!a)return b;if(!c)return a;var d,e,f=new Date(a.valueOf()),g=f.getUTCDate(),h=f.getUTCMonth(),i=Math.abs(c);if(c=c>0?1:-1,1===i)e=-1===c?function(){return f.getUTCMonth()===h}:function(){return f.getUTCMonth()!==d},d=h+c,f.setUTCMonth(d),(0>d||d>11)&&(d=(d+12)%12);else{for(var j=0;i>j;j++)f=this.moveMonth(f,c);d=f.getUTCMonth(),f.setUTCDate(g),e=function(){return d!==f.getUTCMonth()}}for(;e();)f.setUTCDate(--g),f.setUTCMonth(d);return f},moveYear:function(a,b){return this.moveMonth(a,12*b)},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void(27===a.keyCode&&this.show());var b,c,e,f=!1,g=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;b=37===a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.dates.get(-1)||d(),b),e=this.moveYear(g,b),this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveMonth(this.dates.get(-1)||d(),b),e=this.moveMonth(g,b),this._trigger("changeMonth",this.viewDate)):(c=new Date(this.dates.get(-1)||d()),c.setUTCDate(c.getUTCDate()+b),e=new Date(g),e.setUTCDate(g.getUTCDate()+b)),this.dateWithinRange(e)&&(this.focusDate=this.viewDate=e,this.setValue(),this.fill(),a.preventDefault());break;case 38:case 40:if(!this.o.keyboardNavigation)break;b=38===a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.dates.get(-1)||d(),b),e=this.moveYear(g,b),this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveMonth(this.dates.get(-1)||d(),b),e=this.moveMonth(g,b),this._trigger("changeMonth",this.viewDate)):(c=new Date(this.dates.get(-1)||d()),c.setUTCDate(c.getUTCDate()+7*b),e=new Date(g),e.setUTCDate(g.getUTCDate()+7*b)),this.dateWithinRange(e)&&(this.focusDate=this.viewDate=e,this.setValue(),this.fill(),a.preventDefault());break;case 32:break;case 13:g=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(g),f=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),"function"==typeof a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}if(f){this.dates.length?this._trigger("changeDate"):this._trigger("clearDate");var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.change()}},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+a))),this.picker.children("div").hide().filter(".datepicker-"+q.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}};var k=function(b,c){this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,m.call(a(this.inputs),c).bind("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};k.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){if(!this.updating){this.updating=!0;var c=a(b.target).data("datepicker"),d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=e-1,g=e+1,h=this.inputs.length;if(-1!==e){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b.setUTCDate(d)}),d<this.dates[f])for(;f>=0&&d<this.dates[f];)this.pickers[f--].setUTCDate(d);else if(d>this.dates[g])for(;h>g&&d>this.dates[g];)this.pickers[g++].setUTCDate(d);this.updateDates(),delete this.updating}}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var l=a.fn.datepicker,m=function(c){var d=Array.apply(null,arguments);d.shift();var e;return this.each(function(){var f=a(this),i=f.data("datepicker"),l="object"==typeof c&&c;if(!i){var m=g(this,"date"),o=a.extend({},n,m,l),p=h(o.language),q=a.extend({},n,p,m,l);if(f.hasClass("input-daterange")||q.inputs){var r={inputs:q.inputs||f.find("input").toArray()};f.data("datepicker",i=new k(this,a.extend(q,r)))}else f.data("datepicker",i=new j(this,q))}return"string"==typeof c&&"function"==typeof i[c]&&(e=i[c].apply(i,d),e!==b)?!1:void 0}),e!==b?e:this};a.fn.datepicker=m;var n=a.fn.datepicker.defaults={autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,container:"body"},o=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=j;var p=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},q={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,q.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(a){var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(d,e,f){function g(){var a=this.slice(0,m[k].length),b=m[k].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!d)return b;if(d instanceof Date)return d;"string"==typeof e&&(e=q.parseFormat(e));var h,i,k,l=/([\-+]\d+)([dmwy])/,m=d.match(/([\-+]\d+)([dmwy])/g);if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(d)){for(d=new Date,k=0;k<m.length;k++)switch(h=l.exec(m[k]),i=parseInt(h[1]),h[2]){case"d":d.setUTCDate(d.getUTCDate()+i);break;case"m":d=j.prototype.moveMonth.call(j.prototype,d,i);break;case"w":d.setUTCDate(d.getUTCDate()+7*i);break;case"y":d=j.prototype.moveYear.call(j.prototype,d,i)}return c(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),0,0,0)}m=d&&d.match(this.nonpunctuation)||[],d=new Date;var n,o,r={},s=["yyyy","yy","M","MM","m","mm","d","dd"],t={yyyy:function(a,b){return a.setUTCFullYear(b)},yy:function(a,b){return a.setUTCFullYear(2e3+b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};t.M=t.MM=t.mm=t.m,t.dd=t.d,d=c(d.getFullYear(),d.getMonth(),d.getDate(),0,0,0);var u=e.parts.slice();if(m.length!==u.length&&(u=a(u).filter(function(b,c){return-1!==a.inArray(c,s)}).toArray()),m.length===u.length){var v;for(k=0,v=u.length;v>k;k++){if(n=parseInt(m[k],10),h=u[k],isNaN(n))switch(h){case"MM":o=a(p[f].months).filter(g),n=a.inArray(o[0],p[f].months)+1;break;case"M":o=a(p[f].monthsShort).filter(g),n=a.inArray(o[0],p[f].monthsShort)+1}r[h]=n}var w,x;for(k=0;k<s.length;k++)x=s[k],x in r&&!isNaN(r[x])&&(w=new Date(d),t[x](w,r[x]),isNaN(w)||(d=w))}return d},formatDate:function(b,c,d){if(!b)return"";"string"==typeof c&&(c=q.parseFormat(c));var e={d:b.getUTCDate(),D:p[d].daysShort[b.getUTCDay()],DD:p[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:p[d].monthsShort[b.getUTCMonth()],MM:p[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};q.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+q.headTemplate+"<tbody></tbody>"+q.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+q.headTemplate+q.contTemplate+q.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+q.headTemplate+q.contTemplate+q.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=q,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=l,this},a.fn.datepicker.version="1.4.1",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),m.call(c,"show"))}),a(function(){m.call(a('[data-provide="datepicker-inline"]'))})}(window.jQuery);
/*!

 handlebars v4.0.3

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(1);

	// Compiler imports

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	var _handlebarsCompilerAst = __webpack_require__(2);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(3);

	var _handlebarsCompilerCompiler = __webpack_require__(4);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(5);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(6);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(7);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(9)['default'];

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(10);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var base = _interopRequireWildcard(_handlebarsBase);

	var _handlebarsSafeString = __webpack_require__(11);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(12);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(13);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(14);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(7);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	var _interopRequireWildcard = __webpack_require__(9)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(15);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(16);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(17);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(13);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(13);

	var _ast = __webpack_require__(2);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        /* istanbul ignore else */
	        if (_name in knownHelpers) {
	          options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(10);

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(13);

	var _codeGen = __webpack_require__(18);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var index = this.matchExistingProgram(child);

	      if (index == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	      } else {
	        child.index = index;
	        child.name = 'program' + index;

	        this.useDepths = this.useDepths || child.useDepths;
	        this.useBlockParams = this.useBlockParams || child.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return i;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(13);

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(19);

	var _decorators = __webpack_require__(20);

	var _logger = __webpack_require__(21);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.3';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	exports.toString = toString;
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	exports.isArray = isArray;

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(9)['default'];

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(13);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(10);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;

	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* istanbul ignore next */
	/* Jison generated parser */
	"use strict";

	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
	        /**/) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
	        /**/) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports.__esModule = true;
	exports['default'] = handlebars;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(6);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0,
	      depthString = '';

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	        depthString += '../';
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(22);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(23);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(24);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(25);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(26);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(27);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(28);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(29);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(8)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(12);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(13);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
/*
 *  jquery-maskmoney - v3.0.2
 *  jQuery plugin to mask data entry in the input text in the form of money (currency)
 *  https://github.com/plentz/jquery-maskmoney
 *
 *  Made by Diego Plentz
 *  Under MIT License (https://raw.github.com/plentz/jquery-maskmoney/master/LICENSE)
 */
!function($){"use strict";$.browser||($.browser={},$.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase()),$.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase()),$.browser.opera=/opera/.test(navigator.userAgent.toLowerCase()),$.browser.msie=/msie/.test(navigator.userAgent.toLowerCase()));var a={destroy:function(){return $(this).unbind(".maskMoney"),$.browser.msie&&(this.onpaste=null),this},mask:function(a){return this.each(function(){var b,c=$(this);return"number"==typeof a&&(c.trigger("mask"),b=$(c.val().split(/\D/)).last()[0].length,a=a.toFixed(b),c.val(a)),c.trigger("mask")})},unmasked:function(){return this.map(function(){var a,b=$(this).val()||"0",c=-1!==b.indexOf("-");return $(b.split(/\D/).reverse()).each(function(b,c){return c?(a=c,!1):void 0}),b=b.replace(/\D/g,""),b=b.replace(new RegExp(a+"$"),"."+a),c&&(b="-"+b),parseFloat(b)})},init:function(a){return a=$.extend({prefix:"",suffix:"",affixesStay:!0,thousands:",",decimal:".",precision:2,allowZero:!1,allowNegative:!1},a),this.each(function(){function b(){var a,b,c,d,e,f=s.get(0),g=0,h=0;return"number"==typeof f.selectionStart&&"number"==typeof f.selectionEnd?(g=f.selectionStart,h=f.selectionEnd):(b=document.selection.createRange(),b&&b.parentElement()===f&&(d=f.value.length,a=f.value.replace(/\r\n/g,"\n"),c=f.createTextRange(),c.moveToBookmark(b.getBookmark()),e=f.createTextRange(),e.collapse(!1),c.compareEndPoints("StartToEnd",e)>-1?g=h=d:(g=-c.moveStart("character",-d),g+=a.slice(0,g).split("\n").length-1,c.compareEndPoints("EndToEnd",e)>-1?h=d:(h=-c.moveEnd("character",-d),h+=a.slice(0,h).split("\n").length-1)))),{start:g,end:h}}function c(){var a=!(s.val().length>=s.attr("maxlength")&&s.attr("maxlength")>=0),c=b(),d=c.start,e=c.end,f=c.start!==c.end&&s.val().substring(d,e).match(/\d/)?!0:!1,g="0"===s.val().substring(0,1);return a||f||g}function d(a){s.each(function(b,c){if(c.setSelectionRange)c.focus(),c.setSelectionRange(a,a);else if(c.createTextRange){var d=c.createTextRange();d.collapse(!0),d.moveEnd("character",a),d.moveStart("character",a),d.select()}})}function e(b){var c="";return b.indexOf("-")>-1&&(b=b.replace("-",""),c="-"),c+a.prefix+b+a.suffix}function f(b){var c,d,f,g=b.indexOf("-")>-1&&a.allowNegative?"-":"",h=b.replace(/[^0-9]/g,""),i=h.slice(0,h.length-a.precision);return i=i.replace(/^0*/g,""),i=i.replace(/\B(?=(\d{3})+(?!\d))/g,a.thousands),""===i&&(i="0"),c=g+i,a.precision>0&&(d=h.slice(h.length-a.precision),f=new Array(a.precision+1-d.length).join(0),c+=a.decimal+f+d),e(c)}function g(a){var b,c=s.val().length;s.val(f(s.val())),b=s.val().length,a-=c-b,d(a)}function h(){var a=s.val();s.val(f(a))}function i(){var b=s.val();return a.allowNegative?""!==b&&"-"===b.charAt(0)?b.replace("-",""):"-"+b:b}function j(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function k(a){a=a||window.event;var d,e,f,h,k,l=a.which||a.charCode||a.keyCode;return void 0===l?!1:48>l||l>57?45===l?(s.val(i()),!1):43===l?(s.val(s.val().replace("-","")),!1):13===l||9===l?!0:!$.browser.mozilla||37!==l&&39!==l||0!==a.charCode?(j(a),!0):!0:c()?(j(a),d=String.fromCharCode(l),e=b(),f=e.start,h=e.end,k=s.val(),s.val(k.substring(0,f)+d+k.substring(h,k.length)),g(f+1),!1):!1}function l(c){c=c||window.event;var d,e,f,h,i,k=c.which||c.charCode||c.keyCode;return void 0===k?!1:(d=b(),e=d.start,f=d.end,8===k||46===k||63272===k?(j(c),h=s.val(),e===f&&(8===k?""===a.suffix?e-=1:(i=h.split("").reverse().join("").search(/\d/),e=h.length-i-1,f=e+1):f+=1),s.val(h.substring(0,e)+h.substring(f,h.length)),g(e),!1):9===k?!0:!0)}function m(){r=s.val(),h();var a,b=s.get(0);b.createTextRange&&(a=b.createTextRange(),a.collapse(!1),a.select())}function n(){setTimeout(function(){h()},0)}function o(){var b=parseFloat("0")/Math.pow(10,a.precision);return b.toFixed(a.precision).replace(new RegExp("\\.","g"),a.decimal)}function p(b){if($.browser.msie&&k(b),""===s.val()||s.val()===e(o()))a.allowZero?a.affixesStay?s.val(e(o())):s.val(o()):s.val("");else if(!a.affixesStay){var c=s.val().replace(a.prefix,"").replace(a.suffix,"");s.val(c)}s.val()!==r&&s.change()}function q(){var a,b=s.get(0);b.setSelectionRange?(a=s.val().length,b.setSelectionRange(a,a)):s.val(s.val())}var r,s=$(this);a=$.extend(a,s.data()),s.unbind(".maskMoney"),s.bind("keypress.maskMoney",k),s.bind("keydown.maskMoney",l),s.bind("blur.maskMoney",p),s.bind("focus.maskMoney",m),s.bind("click.maskMoney",q),s.bind("cut.maskMoney",n),s.bind("paste.maskMoney",n),s.bind("mask.maskMoney",h)})}};$.fn.maskMoney=function(b){return a[b]?a[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?($.error("Method "+b+" does not exist on jQuery.maskMoney"),void 0):a.init.apply(this,arguments)}}(window.jQuery||window.Zepto);
!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
(function() {
  var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, Pace, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldIgnoreURL, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };

  now = function() {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function(fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function(id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function(fn) {
    var last, tick;
    last = now();
    tick = function() {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function() {
          return requestAnimationFrame(tick);
        });
      } else {
        return setTimeout(tick, 33 - diff);
      }
    };
    return tick();
  };

  result = function() {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  extend = function() {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
            extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function(arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function(key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = (function() {
    function Evented() {}

    Evented.prototype.on = function(event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function(event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function(event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function() {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;

  })();

  Pace = window.Pace || {};

  window.Pace = Pace;

  extend(Pace, Evented.prototype);

  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = (function(_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;

  })(Error);

  Bar = (function() {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function() {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError;
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function() {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function(prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function() {
      var el, key, progressStr, transform, _j, _len1, _ref2;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function() {
      return this.progress >= 100;
    };

    return Bar;

  })();

  Events = (function() {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function(name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function(name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;

  })();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function(to, from) {
    var e, key, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        if ((to[key] == null) && typeof from[key] !== 'function') {
          if (typeof Object.defineProperty === 'function') {
            _results.push(Object.defineProperty(to, key, {
              get: function() {
                return from.prototype[key];
              },
              configurable: true,
              enumerable: true
            }));
          } else {
            _results.push(to[key] = from.prototype[key]);
          }
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function(method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = (function(_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
        _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function(req) {
        var _open;
        _open = req.open;
        return req.open = function(type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function(flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}
      if (_XDomainRequest != null) {
        window.XDomainRequest = function() {
          var req;
          req = new _XDomainRequest;
          monitorXHR(req);
          return req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }
      if ((_WebSocket != null) && options.ajax.trackWebSockets) {
        window.WebSocket = function(url, protocols) {
          var req;
          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;

  })(Events);

  _intercept = null;

  getIntercept = function() {
    if (_intercept == null) {
      _intercept = new RequestIntercept;
    }
    return _intercept;
  };

  shouldIgnoreURL = function(url) {
    var pattern, _j, _len1, _ref2;
    _ref2 = options.ajax.ignoreURLs;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];
      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }
    return false;
  };

  getIntercept().on('request', function(_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;
    if (shouldIgnoreURL(url)) {
      return;
    }
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function() {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = (0 < (_ref2 = request.readyState) && _ref2 < 4);
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = (function() {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function() {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function(_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;
      if (shouldIgnoreURL(url)) {
        return;
      }
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;

  })();

  XHRRequestTracker = (function() {
    function XHRRequestTracker(request) {
      var event, size, _j, _len1, _onreadystatechange, _ref2,
        _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function(evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function() {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function() {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;

  })();

  SocketRequestTracker = (function() {
    function SocketRequestTracker(request) {
      var event, _j, _len1, _ref2,
        _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function() {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;

  })();

  ElementMonitor = (function() {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;

  })();

  ElementTracker = (function() {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function() {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout((function() {
          return _this.check();
        }), options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function() {
      return this.progress = 100;
    };

    return ElementTracker;

  })();

  DocumentMonitor = (function() {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange, _ref2,
        _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function() {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;

  })();

  EventLagMonitor = (function() {
    function EventLagMonitor() {
      var avg, interval, last, points, samples,
        _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function() {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;

  })();

  Scaler = (function() {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function(frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;

  })();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function() {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function() {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function() {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function() {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar;
    scalers = [];
    return uniScaler = new Scaler;
  })();

  Pace.stop = function() {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function() {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function() {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function(frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function() {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function(_options) {
    extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (typeof define === 'function' && define.amd) {
    define(['pace'], function() {
      return Pace;
    });
  } else if (typeof exports === 'object') {
    module.exports = Pace;
  } else {
    if (options.startOnPageLoad) {
      Pace.start();
    }
  }

}).call(this);

$(document.body).on('click', '.js-submit-confirm', function(event) {
  event.preventDefault();
  var $form = $(this).closest('form');
  swal({
      title: "Are you sure?",
      text: "You will not be able to recover this resource!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: true
    },
    function() {
      $form.submit();
    });
});
//# sourceMappingURL=vendor.js.map
