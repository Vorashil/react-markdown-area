!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.MarkedArea=t(require("react")):e.MarkedArea=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),h=r(u),p=n(2),c=r(p);n(5);var d=function(e){function t(e){s(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={isPreview:e.isPreview?e.isPreview:!1,value:e.defaultValue?e.defaultValue:""},n._onChange=n._onChange.bind(n),n.enablePreview=n.enablePreview.bind(n),n.disablePreview=n.disablePreview.bind(n),n}return o(t,e),l(t,[{key:"_onChange",value:function(e){this.setState({value:e.target.value})}},{key:"disablePreview",value:function(){this.setState({isPreview:!1})}},{key:"enablePreview",value:function(){this.setState({isPreview:!0})}},{key:"render",value:function(){return h["default"].createElement("div",{className:this.props.classNames.root},"live"===this.props.mode?this.liveMode:this.tabbedMode,this.props.children)}},{key:"parsed",get:function(){return h["default"].createElement("div",{dangerouslySetInnerHTML:{__html:(0,c["default"])(this.state.value.toString(),{sanitize:!0})}})}},{key:"raw",get:function(){return h["default"].createElement("textarea",a({},this.props,{id:this.props.id,onChange:this.props.onChange||this._onChange,value:this.state.value}))}},{key:"tabbedToolbar",get:function(){return h["default"].createElement("menu",null,h["default"].createElement("button",{className:this.state.isPreview?this.props.classNames.defaultButton:this.props.classNames.activeButton,onClick:this.disablePreview},h["default"].createElement("span",null,"Edit")),h["default"].createElement("button",{className:this.state.isPreview?this.props.classNames.activeButton:this.props.classNames.defaultButton,onClick:this.enablePreview},h["default"].createElement("span",null,"Preview")),h["default"].createElement("a",{target:"_blank",href:"//help.github.com/articles/github-flavored-markdown/",title:"learn more about github flavored markdown",className:this.props.classNames.helpLink},h["default"].createElement("span",null,"Help")))}},{key:"tabbedMode",get:function(){return h["default"].createElement("section",null,h["default"].createElement("header",{className:this.props.classNames.header},h["default"].createElement("label",{htmlFor:this.props.id},this.props.label),this.tabbedToolbar),h["default"].createElement("div",{className:this.props.classNames.textContainer},this.state.isPreview?this.parsed:this.raw))}},{key:"liveMode",get:function(){return h["default"].createElement("section",null,h["default"].createElement("header",{className:this.props.classNames.header},h["default"].createElement("label",{htmlFor:this.props.id},this.props.label)),h["default"].createElement("div",{className:this.props.classNames.textContainer},this.raw,h["default"].createElement("h5",{className:this.props.classNames.liveDivider},"Preview:"),this.parsed))}}]),t}(h["default"].Component);d.defaultProps={id:"mmc-marked-area",label:"",mode:"tabbed",classNames:{root:"marked-area",header:"marked-area-header",activeButton:"marked-area-button active",defaultButton:"marked-area-button",helpLink:"marked-area-help-link",textContainer:"marked-area-text-container",liveDivider:"marked-area-live-divider"}},d.propTypes={children:h["default"].PropTypes.any,classNames:h["default"].PropTypes.shape({root:h["default"].PropTypes.string,header:h["default"].PropTypes.string,activeButton:h["default"].PropTypes.string,defaultButton:h["default"].PropTypes.string,helpLink:h["default"].PropTypes.string,textContainer:h["default"].PropTypes.string,liveDivider:h["default"].PropTypes.string}),defaultValue:h["default"].PropTypes.string,id:h["default"].PropTypes.string,isPreview:h["default"].PropTypes.bool,label:h["default"].PropTypes.string,mode:h["default"].PropTypes.string,onChange:h["default"].PropTypes.func},d.displayName="MarkedArea",e.exports=d},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(r[i]=!0)}for(s=0;s<t.length;s++){var o=t[s];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t,n){var r;(function(s){"use strict";function i(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(function(){function s(e){this.tokens=[],this.tokens.links={},this.options=e||f.defaults,this.rules=g.normal,this.options.gfm&&(this.options.tables?this.rules=g.tables:this.rules=g.gfm)}function o(e,t){if(this.options=t||f.defaults,this.links=e,this.rules=m.normal,this.renderer=this.options.renderer||new a,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=m.breaks:this.rules=m.gfm:this.options.pedantic&&(this.rules=m.pedantic)}function a(e){this.options=e||{}}function l(e){this.tokens=[],this.token=null,this.options=e||f.defaults,this.options.renderer=this.options.renderer||new a,this.renderer=this.options.renderer,this.renderer.options=this.options}function u(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function h(e){return e.replace(/&([#\w]+);/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function p(e,t){return e=e.source,t=t||"",function n(r,s){return r?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,s),n):new RegExp(e,t)}}function c(){}function d(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function f(e,t,n){if(n||"function"==typeof t){n||(n=t,t=null),t=d({},f.defaults,t||{});var r,i,o=t.highlight,a=0;try{r=s.lex(e,t)}catch(h){return n(h)}i=r.length;var p=function(e){if(e)return t.highlight=o,n(e);var s;try{s=l.parse(r,t)}catch(i){e=i}return t.highlight=o,e?n(e):n(null,s)};if(!o||o.length<3)return p();if(delete t.highlight,!i)return p();for(;a<r.length;a++)!function(e){return"code"!==e.type?--i||p():o(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--i||p():(e.text=n,e.escaped=!0,void(--i||p()))})}(r[a])}else try{return t&&(t=d({},f.defaults,t)),l.parse(s.lex(e,t),t)}catch(h){if(h.message+="\nPlease report this to https://github.com/chjj/marked.",(t||f.defaults).silent)return"<p>An error occured:</p><pre>"+u(h.message+"",!0)+"</pre>";throw h}}var g={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:c,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:c,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:c,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};g.bullet=/(?:[*+-]|\d+\.)/,g.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,g.item=p(g.item,"gm")(/bull/g,g.bullet)(),g.list=p(g.list)(/bull/g,g.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+g.def.source+")")(),g.blockquote=p(g.blockquote)("def",g.def)(),g._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",g.html=p(g.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,g._tag)(),g.paragraph=p(g.paragraph)("hr",g.hr)("heading",g.heading)("lheading",g.lheading)("blockquote",g.blockquote)("tag","<"+g._tag)("def",g.def)(),g.normal=d({},g),g.gfm=d({},g.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),g.gfm.paragraph=p(g.paragraph)("(?!","(?!"+g.gfm.fences.source.replace("\\1","\\2")+"|"+g.list.source.replace("\\1","\\3")+"|")(),g.tables=d({},g.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),s.rules=g,s.lex=function(e,t){var n=new s(t);return n.lex(e)},s.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},s.prototype.token=function(e,t,n){for(var r,s,i,o,a,l,u,h,p,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},h=0;h<l.align.length;h++)/^ *-+: *$/.test(l.align[h])?l.align[h]="right":/^ *:-+: *$/.test(l.align[h])?l.align[h]="center":/^ *:-+ *$/.test(l.align[h])?l.align[h]="left":l.align[h]=null;for(h=0;h<l.cells.length;h++)l.cells[h]=l.cells[h].split(/ *\| */);this.tokens.push(l)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),o=i[2],this.tokens.push({type:"list_start",ordered:o.length>1}),i=i[0].match(this.rules.item),r=!1,p=i.length,h=0;p>h;h++)l=i[h],u=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(u-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&h!==p-1&&(a=g.bullet.exec(i[h+1])[0],o===a||o.length>1&&a.length>1||(e=i.slice(h+1).join("\n")+e,h=p-1)),s=r||/\n\n(?!\s*$)/.test(l),h!==p-1&&(r="\n"===l.charAt(l.length-1),s||(s=r)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(l,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!n&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},h=0;h<l.align.length;h++)/^ *-+: *$/.test(l.align[h])?l.align[h]="right":/^ *:-+: *$/.test(l.align[h])?l.align[h]="center":/^ *:-+ *$/.test(l.align[h])?l.align[h]="left":l.align[h]=null;for(h=0;h<l.cells.length;h++)l.cells[h]=l.cells[h].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(l)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var m={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:c,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:c,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};m._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,m._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,m.link=p(m.link)("inside",m._inside)("href",m._href)(),m.reflink=p(m.reflink)("inside",m._inside)(),m.normal=d({},m),m.pedantic=d({},m.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),m.gfm=d({},m.normal,{escape:p(m.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:p(m.text)("]|","~]|")("|","|https?://|")()}),m.breaks=d({},m.gfm,{br:p(m.br)("{2,}","*")(),text:p(m.gfm.text)("{2,}","*")()}),o.rules=m,o.output=function(e,t,n){var r=new o(t,n);return r.output(e)},o.prototype.output=function(e){for(var t,n,r,s,i="";e;)if(s=this.rules.escape.exec(e))e=e.substring(s[0].length),i+=s[1];else if(s=this.rules.autolink.exec(e))e=e.substring(s[0].length),"@"===s[2]?(n=":"===s[1].charAt(6)?this.mangle(s[1].substring(7)):this.mangle(s[1]),r=this.mangle("mailto:")+n):(n=u(s[1]),r=n),i+=this.renderer.link(r,null,n);else if(this.inLink||!(s=this.rules.url.exec(e))){if(s=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),e=e.substring(s[0].length),i+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):u(s[0]):s[0];else if(s=this.rules.link.exec(e))e=e.substring(s[0].length),this.inLink=!0,i+=this.outputLink(s,{href:s[2],title:s[3]}),this.inLink=!1;else if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){i+=s[0].charAt(0),e=s[0].substring(1)+e;continue}this.inLink=!0,i+=this.outputLink(s,t),this.inLink=!1}else if(s=this.rules.strong.exec(e))e=e.substring(s[0].length),i+=this.renderer.strong(this.output(s[2]||s[1]));else if(s=this.rules.em.exec(e))e=e.substring(s[0].length),i+=this.renderer.em(this.output(s[2]||s[1]));else if(s=this.rules.code.exec(e))e=e.substring(s[0].length),i+=this.renderer.codespan(u(s[2],!0));else if(s=this.rules.br.exec(e))e=e.substring(s[0].length),i+=this.renderer.br();else if(s=this.rules.del.exec(e))e=e.substring(s[0].length),i+=this.renderer.del(this.output(s[1]));else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),i+=this.renderer.text(u(this.smartypants(s[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(s[0].length),n=u(s[1]),r=n,i+=this.renderer.link(r,null,n);return i},o.prototype.outputLink=function(e,t){var n=u(t.href),r=t.title?u(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,u(e[1]))},o.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},o.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;r>s;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},a.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+u(t,!0)+'">'+(n?e:u(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:u(e,!0))+"\n</code></pre>"},a.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},a.prototype.html=function(e){return e},a.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},a.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},a.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},a.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},a.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},a.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},a.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},a.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},a.prototype.strong=function(e){return"<strong>"+e+"</strong>"},a.prototype.em=function(e){return"<em>"+e+"</em>"},a.prototype.codespan=function(e){return"<code>"+e+"</code>"},a.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},a.prototype.del=function(e){return"<del>"+e+"</del>"},a.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(h(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(s){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},a.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},a.prototype.text=function(e){return e},l.parse=function(e,t,n){var r=new l(t,n);return r.parse(e)},l.prototype.parse=function(e){this.inline=new o(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},l.prototype.next=function(){return this.token=this.tokens.pop()},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},l.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s,i="",o="";for(n="",e=0;e<this.token.header.length;e++)r={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{header:!1,align:this.token.align[s]});o+=this.renderer.tablerow(n)}return this.renderer.table(i,o);case"blockquote_start":for(var o="";"blockquote_end"!==this.next().type;)o+=this.tok();return this.renderer.blockquote(o);case"list_start":for(var o="",a=this.token.ordered;"list_end"!==this.next().type;)o+=this.tok();return this.renderer.list(o,a);case"list_item_start":for(var o="";"list_item_end"!==this.next().type;)o+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(o);case"loose_item_start":for(var o="";"list_item_end"!==this.next().type;)o+=this.tok();return this.renderer.listitem(o);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},c.exec=c,f.options=f.setOptions=function(e){return d(f.defaults,e),f},f.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new a,xhtml:!1},f.Parser=l,f.parser=l.parse,f.Renderer=a,f.Lexer=s,f.lexer=s.lex,f.InlineLexer=o,f.inlineLexer=o.output,f.parse=f,"undefined"!=typeof e&&"object"===i(t)?e.exports=f:(r=function(){return f}.call(t,n,t,e),!(void 0!==r&&(e.exports=r)))}).call(function(){return this||("undefined"!=typeof window?window:s)}())}).call(t,function(){return this}())},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".marked-area{border:thin solid #bababa}.marked-area,.marked-area-header>label{display:block}.marked-area-header menu{padding:1em .5em;margin:0;display:block;background:#efefef;border-bottom:thin solid #bababa}.marked-area-button{font-size:16px;line-height:20px;border-radius:0;border:thin solid grey;background-color:#fff}.marked-area-button.active{color:#fff;background-color:grey}.marked-area-help-link{margin-left:1em}.marked-area-text-container>div,.marked-area-text-container>textarea{display:block;box-sizing:border-box;width:100%;border:0;min-height:160px;padding:1em;margin:0}.marked-area-live-divider{margin:0 0 -1.5em;opacity:.3;border-top:thin solid #000;padding:.5em .5em 0;font-size:16px;line-height:16px}",""])},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],s=d[r.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(u(r.parts[i],t))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(u(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:o}}}}function s(e){for(var t=[],n={},r=0;r<e.length;r++){var s=e[r],i=s[0],o=s[1],a=s[2],l=s[3],u={css:o,media:a,sourceMap:l};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=m(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var n,r,s;if(t.singleton){var i=k++;n=b||(b=a(t)),r=h.bind(null,n,i,!1),s=h.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=c.bind(null,n),s=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=p.bind(null,n),s=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}function h(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,s);else{var i=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function c(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(s),i&&URL.revokeObjectURL(i)}var d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=f(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,k=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=s(e);return r(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var a=n[o],l=d[a.id];l.refs--,i.push(l)}if(e){var u=s(e);r(u,t)}for(var o=0;o<i.length;o++){var l=i[o];if(0===l.refs){for(var h=0;h<l.parts.length;h++)l.parts[h]();delete d[l.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e}])});