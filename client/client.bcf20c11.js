function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function l(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,p=!1;function m(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:m(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function _(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function k(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:A(t,r,e[r])}function N(t){return Array.from(t.childNodes)}function R(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,r,s=!1){R(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function L(t,e,n,r){return I(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function O(t,e,n){return L(t,e,n,w)}function C(t,e,n){return L(t,e,n,_)}function H(t,e){return I(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return H(t," ")}function j(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function M(t){const e=j(t,"HTML_TAG_START",0),n=j(t,"HTML_TAG_END",e);if(e===n)return new V;R(t);const r=t.splice(e,n+1);y(r[0]),y(r[r.length-1]);const s=r.slice(1,r.length-1);for(const e of s)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(s)}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function B(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=q();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=k(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=k(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),y(n)}}function z(t,e=document.body){return Array.from(e.querySelectorAll(t))}class V extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=w(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(y)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function K(t){h=t}function W(){if(!h)throw new Error("Function called outside component initialization");return h}function J(t){W().$$.on_mount.push(t)}function F(t){W().$$.after_update.push(t)}function Y(t){W().$$.on_destroy.push(t)}const X=[],Q=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function rt(t){Z.push(t)}let st=!1;const ot=new Set;function it(){if(!st){st=!0;do{for(let t=0;t<X.length;t+=1){const e=X[t];K(e),at(e.$$)}for(K(null),X.length=0;Q.length;)Q.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];ot.has(e)||(ot.add(e),e())}Z.length=0}while(X.length);for(;tt.length;)tt.pop()();nt=!1,st=!1,ot.clear()}}function at(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}const lt=new Set;let ct;function ut(){ct={r:0,c:[],p:ct}}function dt(){ct.r||s(ct.c),ct=ct.p}function ft(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function ht(t,e,n,r){if(t&&t.o){if(lt.has(t))return;lt.add(t),ct.c.push((()=>{lt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function pt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function mt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function vt(t,e,r,i){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,r),i||rt((()=>{const e=l.map(n).filter(o);c?c.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(rt)}function yt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(X.push(t),nt||(nt=!0,et.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(e,n,o,i,a,l,c,u=[-1]){const d=h;K(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(f.root);let m=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),m&&$t(e,t)),n})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const t=N(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&ft(e.$$.fragment),vt(e,n.target,n.anchor,n.customElement),p=!1,it()}K(d)}class _t{$destroy(){yt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function St(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!Et.length;for(const t of s)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const l=[i,a];return s.add(l),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(l),0===s.size&&(r(),r=null)}}}}const xt={};var kt={owner:"silkkycloud",repo:"status",sites:[{name:"Website",url:"https://www.silkky.cloud"},{name:"Searx",url:"https://searx.silkky.cloud"},{name:"Piped",url:"https://piped.silkky.cloud"},{name:"Piped Proxy",url:"https://proxy.piped.silkky.cloud"},{name:"Piped API",url:"https://api.piped.silkky.cloud/trending"},{name:"Send",url:"https://send.silkky.cloud"},{name:"Vikunja",url:"tasks.silkky.cloud"},{name:"Bitwarden",url:"https://vault.silkky.cloud"},{name:"Libreddit",url:"libreddit.silkky.cloud"},{name:"Nitter",url:"https://nitter.silkky.cloud"},{name:"Privatebin",url:"https://privatebin.silkky.cloud"},{name:"Server 1",check:"tcp-ping",url:"$SERVER1_IP",port:80},{name:"Server 2",check:"tcp-ping",url:"$SERVER2_IP",port:80},{name:"Server 3",check:"tcp-ping",url:"$SERVER3_IP",port:80}],"status-website":{baseUrl:"/status",logoUrl:"https://www.silkky.cloud/img/png/brand/logo-transparent.png",favicon:"https://www.silkky.cloud/img/favicons/favicon-32x32.png",name:"Silkky.Cloud Status",introTitle:"**Silkky.Cloud Status** is our service uptime monitoring page.",navbar:[{title:"Status",href:"/"},{title:"Silkky.Cloud",href:"https://www.silkky.cloud"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://silkkycloud.github.io/status",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Tt(t,e,n){const r=t.slice();return r[1]=e[n],r}function At(e){let n,r,s,o=kt["status-website"]&&!kt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=w("img"),this.h()},l(t){n=O(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),l(n.src,r=kt["status-website"].logoUrl)||A(n,"src",r),A(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}(),i=kt["status-website"]&&!kt["status-website"].hideNavTitle&&function(e){let n,r,s=kt["status-website"].name+"";return{c(){n=w("div"),r=E(s)},l(t){n=O(t,"DIV",{});var e=N(n);r=H(e,s),e.forEach(y)},m(t,e){v(t,n,e),g(n,r)},p:t,d(t){t&&y(n)}}}();return{c(){n=w("div"),r=w("a"),o&&o.c(),s=S(),i&&i.c(),this.h()},l(t){n=O(t,"DIV",{});var e=N(n);r=O(e,"A",{href:!0,class:!0});var a=N(r);o&&o.l(a),s=U(a),i&&i.l(a),a.forEach(y),e.forEach(y),this.h()},h(){A(r,"href",kt["status-website"].logoHref||kt.path),A(r,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(t,e){kt["status-website"]&&!kt["status-website"].hideNavLogo&&o.p(t,e),kt["status-website"]&&!kt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&y(n),o&&o.d(),i&&i.d()}}}function Pt(t){let e,n,r,s,o,i,a=t[1].title+"";return{c(){e=w("li"),n=w("a"),r=E(a),i=S(),this.h()},l(t){e=O(t,"LI",{});var s=N(e);n=O(s,"A",{"aria-current":!0,href:!0,class:!0});var o=N(n);r=H(o,a),o.forEach(y),i=U(s),s.forEach(y),this.h()},h(){A(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),A(n,"href",o=t[1].href.replace("$OWNER",kt.owner).replace("$REPO",kt.repo)),A(n,"class","svelte-a08hsz")},m(t,s){v(t,e,s),g(e,n),g(n,r),g(e,i)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&A(n,"aria-current",s)},d(t){t&&y(e)}}}function Nt(e){let n,r,s,o,i,a=kt["status-website"]&&kt["status-website"].logoUrl&&At(),l=kt["status-website"]&&kt["status-website"].navbar&&function(t){let e,n=kt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=Pt(Tt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(1&s){let o;for(n=kt["status-website"].navbar,o=0;o<n.length;o+=1){const i=Tt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Pt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&y(e)}}}(e),c=kt["status-website"]&&kt["status-website"].navbarGitHub&&!kt["status-website"].navbar&&function(e){let n,r,s,o=kt.i18n.navGitHub+"";return{c(){n=w("li"),r=w("a"),s=E(o),this.h()},l(t){n=O(t,"LI",{});var e=N(n);r=O(e,"A",{href:!0,class:!0});var i=N(r);s=H(i,o),i.forEach(y),e.forEach(y),this.h()},h(){A(r,"href",`https://github.com/${kt.owner}/${kt.repo}`),A(r,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&y(n)}}}();return{c(){n=w("nav"),r=w("div"),a&&a.c(),s=S(),o=w("ul"),l&&l.c(),i=S(),c&&c.c(),this.h()},l(t){n=O(t,"NAV",{class:!0});var e=N(n);r=O(e,"DIV",{class:!0});var u=N(r);a&&a.l(u),s=U(u),o=O(u,"UL",{class:!0});var d=N(o);l&&l.l(d),i=U(d),c&&c.l(d),d.forEach(y),u.forEach(y),e.forEach(y),this.h()},h(){A(o,"class","svelte-a08hsz"),A(r,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),l&&l.m(o,null),g(o,i),c&&c.m(o,null)},p(t,[e]){kt["status-website"]&&kt["status-website"].logoUrl&&a.p(t,e),kt["status-website"]&&kt["status-website"].navbar&&l.p(t,e),kt["status-website"]&&kt["status-website"].navbarGitHub&&!kt["status-website"].navbar&&c.p(t,e)},i:t,o:t,d(t){t&&y(n),a&&a.d(),l&&l.d(),c&&c.d()}}}function Rt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class It extends _t{constructor(t){super(),wt(this,t,Rt,Nt,i,{segment:0})}}var Lt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ot(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ct(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ht(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=e||{},d=0;function f(t){var e=Lt[t[1]||""],n=l[l.length-1]==t;return e?e[1]?(n?l.pop():l.push(t),e[0|n]):e[0]:t}function h(){for(var t="";l.length;)t+=f(l[l.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(d,s.index),d=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ot(Ct(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ht(Ot(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Ct(s[8])+'" alt="'+Ct(s[7])+'">':s[10]?(c=c.replace("<a>",'<a href="'+Ct(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ht(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Ct(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),c+=r,c+=n;return(c+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ut(t,e,n){const r=t.slice();return r[3]=e[n],r}function jt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Mt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Dt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${kt.path}/themes/${(kt["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Gt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(kt["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function qt(e){let n,r;return{c(){n=w("script"),this.h()},l(t){n=O(t,"SCRIPT",{src:!0}),N(n).forEach(y),this.h()},h(){l(n.src,r=e[8].src)||A(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Bt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",e[3].rel),A(n,"href",e[3].href),A(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function zt(e){let n;return{c(){n=w("meta"),this.h()},l(t){n=O(t,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",e[3].name),A(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&y(n)}}}function Vt(e){let n,r,s,o,i,a,l,u,d,f,h,p,m,b,_,E,k,T,P=Ht(kt.i18n.footer.replace(/\$REPO/,`https://github.com/${kt.owner}/${kt.repo}`))+"",R=(kt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(kt["status-website"]||{}).customHeadHtml+"";return{c(){n=new V,r=x(),this.h()},l(t){n=M(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}();let I=((kt["status-website"]||{}).themeUrl?Gt:Dt)(e),L=(kt["status-website"]||{}).scripts&&function(t){let e,n=(kt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(Mt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(kt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Mt(t,n,o);r[o]?r[o].p(i,s):(r[o]=qt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&y(e)}}}(e),C=(kt["status-website"]||{}).links&&function(t){let e,n=(kt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Bt(jt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(kt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=jt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Bt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&y(e)}}}(e),H=(kt["status-website"]||{}).metaTags&&function(t){let e,n=(kt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=zt(Ut(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(kt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ut(t,n,o);r[o]?r[o].p(i,s):(r[o]=zt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&y(e)}}}(e),j=kt["status-website"].css&&function(e){let n,r,s=`<style>${kt["status-website"].css}</style>`;return{c(){n=new V,r=x(),this.h()},l(t){n=M(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}(),D=kt["status-website"].js&&function(e){let n,r,s=`<script>${kt["status-website"].js}<\/script>`;return{c(){n=new V,r=x(),this.h()},l(t){n=M(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}(),G=(kt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(kt["status-website"]||{}).customBodyHtml+"";return{c(){n=new V,r=x(),this.h()},l(t){n=M(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&y(r),t&&n.d()}}}();p=new It({props:{segment:e[0]}});const q=e[2].default,B=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(q,e,e[1],null);return{c(){R&&R.c(),n=x(),I.c(),r=w("link"),s=w("link"),o=w("link"),L&&L.c(),i=x(),C&&C.c(),a=x(),H&&H.c(),l=x(),j&&j.c(),u=x(),D&&D.c(),d=x(),f=S(),G&&G.c(),h=S(),gt(p.$$.fragment),m=S(),b=w("main"),B&&B.c(),_=S(),E=w("footer"),k=w("p"),this.h()},l(t){const e=z('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(e),n=x(),I.l(e),r=O(e,"LINK",{rel:!0,href:!0}),s=O(e,"LINK",{rel:!0,type:!0,href:!0}),o=O(e,"LINK",{rel:!0,type:!0,href:!0}),L&&L.l(e),i=x(),C&&C.l(e),a=x(),H&&H.l(e),l=x(),j&&j.l(e),u=x(),D&&D.l(e),d=x(),e.forEach(y),f=U(t),G&&G.l(t),h=U(t),bt(p.$$.fragment,t),m=U(t),b=O(t,"MAIN",{class:!0});var c=N(b);B&&B.l(c),c.forEach(y),_=U(t),E=O(t,"FOOTER",{class:!0});var g=N(E);k=O(g,"P",{}),N(k).forEach(y),g.forEach(y),this.h()},h(){A(r,"rel","stylesheet"),A(r,"href",`${kt.path}/global.css`),A(s,"rel","icon"),A(s,"type","image/svg"),A(s,"href",(kt["status-website"]||{}).faviconSvg||(kt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(kt["status-website"]||{}).favicon||"/logo-192.png"),A(b,"class","container"),A(E,"class","svelte-jbr799")},m(t,e){R&&R.m(document.head,null),g(document.head,n),I.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),L&&L.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,l),j&&j.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,d),v(t,f,e),G&&G.m(t,e),v(t,h,e),vt(p,t,e),v(t,m,e),v(t,b,e),B&&B.m(b,null),v(t,_,e),v(t,E,e),g(E,k),k.innerHTML=P,T=!0},p(t,[e]){(kt["status-website"]||{}).customHeadHtml&&R.p(t,e),I.p(t,e),(kt["status-website"]||{}).scripts&&L.p(t,e),(kt["status-website"]||{}).links&&C.p(t,e),(kt["status-website"]||{}).metaTags&&H.p(t,e),kt["status-website"].css&&j.p(t,e),kt["status-website"].js&&D.p(t,e),(kt["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),B&&B.p&&(!T||2&e)&&function(t,e,n,r,s,o){if(s){const i=c(e,n,r,o);t.p(i,s)}}(B,q,t,t[1],T?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(q,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){T||(ft(p.$$.fragment,t),ft(B,t),T=!0)},o(t){ht(p.$$.fragment,t),ht(B,t),T=!1},d(t){R&&R.d(t),y(n),I.d(t),y(r),y(s),y(o),L&&L.d(t),y(i),C&&C.d(t),y(a),H&&H.d(t),y(l),j&&j.d(t),y(u),D&&D.d(t),y(d),t&&y(f),G&&G.d(t),t&&y(h),yt(p,t),t&&y(m),t&&y(b),B&&B.d(t),t&&y(_),t&&y(E)}}}function Kt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Wt extends _t{constructor(t){super(),wt(this,t,Kt,Vt,i,{segment:0})}}function Jt(t){let e,n,r=t[1].stack+"";return{c(){e=w("pre"),n=E(r)},l(t){e=O(t,"PRE",{});var s=N(e);n=H(s,r),s.forEach(y)},m(t,r){v(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&D(n,r)},d(t){t&&y(e)}}}function Ft(e){let n,r,s,o,i,a,l,c,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Jt(e);return{c(){r=S(),s=w("h1"),o=E(e[0]),i=S(),a=w("p"),l=E(d),c=S(),f&&f.c(),u=x(),this.h()},l(t){z('[data-svelte="svelte-1moakz"]',document.head).forEach(y),r=U(t),s=O(t,"H1",{class:!0});var n=N(s);o=H(n,e[0]),n.forEach(y),i=U(t),a=O(t,"P",{class:!0});var h=N(a);l=H(h,d),h.forEach(y),c=U(t),f&&f.l(t),u=x(),this.h()},h(){A(s,"class","svelte-17w3omn"),A(a,"class","svelte-17w3omn")},m(t,e){v(t,r,e),v(t,s,e),g(s,o),v(t,i,e),v(t,a,e),g(a,l),v(t,c,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&D(o,t[0]),2&e&&d!==(d=t[1].message+"")&&D(l,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Jt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&y(r),t&&y(s),t&&y(i),t&&y(a),t&&y(c),f&&f.d(t),t&&y(u)}}}function Yt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Xt extends _t{constructor(t){super(),wt(this,t,Yt,Ft,i,{status:0,error:1})}}function Qt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&gt(n.$$.fragment),r=x()},l(t){n&&bt(n.$$.fragment,t),r=x()},m(t,e){n&&vt(n,t,e),v(t,r,e),s=!0},p(t,e){const s=16&e?pt(o,[mt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ut();const t=n;ht(t.$$.fragment,1,0,(()=>{yt(t,1)})),dt()}i?(n=new i(a()),gt(n.$$.fragment),ft(n.$$.fragment,1),vt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&ft(n.$$.fragment,t),s=!0)},o(t){n&&ht(n.$$.fragment,t),s=!1},d(t){t&&y(r),n&&yt(n,t)}}}function Zt(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,r){vt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){yt(e,t)}}}function te(t){let e,n,r,s;const o=[Zt,Qt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){i[e].m(t,n),v(t,r,n),s=!0},p(t,s){let l=e;e=a(t),e===l?i[e].p(t,s):(ut(),ht(i[l],1,1,(()=>{i[l]=null})),dt(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),ft(n,1),n.m(r.parentNode,r))},i(t){s||(ft(n),s=!0)},o(t){ht(n),s=!1},d(t){i[e].d(t),t&&y(r)}}}function ee(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Wt({props:o}),{c(){gt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,e){vt(n,t,e),r=!0},p(t,[e]){const r=12&e?pt(s,[4&e&&{segment:t[2][0]},8&e&&mt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(ft(n.$$.fragment,t),r=!0)},o(t){ht(n.$$.fragment,t),r=!1},d(t){yt(n,t)}}}function ne(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:l=null}=e,{notify:c}=e;var u,d;return F(c),u=xt,d=r,W().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,c=t.notify)},[s,o,i,a,l,r,c]}class re extends _t{constructor(t){super(),wt(this,t,ne,ee,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const se=[],oe=[{js:()=>Promise.all([import("./index.4db6f787.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.0f778807.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].7a941011.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].8c96373c.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.c6cb6aa5.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ae(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ae(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ae;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function le(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{l(r.next(t))}catch(t){o(t)}}function a(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}l((r=r.apply(t,e||[])).next())}))}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,de=1;const fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},he={};let pe,me;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(pe))return null;let e=t.pathname.slice(pe.length);if(""===e&&(e="/"),!se.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const r=ie[n],s=r.pattern.exec(e);if(s){const n=ge(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function ve(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=be(s);if(o){we(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),fe.pushState({id:ue},"",s.href)}}function ye(){return{x:pageXOffset,y:pageYOffset}}function $e(t){if(he[ue]=ye(),t.state){const e=be(new URL(location.href));e?we(e,t.state.id):location.href=location.href}else!function(t){de=t}(de+1),function(t){ue=t}(de),fe.replaceState({id:ue},"",location.href)}function we(t,e,n,r){return le(this,void 0,void 0,(function*(){const s=!!e;if(s)ue=e;else{const t=ye();he[ue]=t,ue=e=++de,he[ue]=n?t:{x:0,y:0}}if(yield me(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=he[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),he[ue]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function _e(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,Se=null;function xe(t){const e=ce(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=be(new URL(t,_e(document)));if(e)Se&&t===Se.href||(Se={href:t,promise:qe(e)}),Se.promise}(e.href)}function ke(t){clearTimeout(Ee),Ee=setTimeout((()=>{xe(t)}),20)}function Te(t,e={noscroll:!1,replaceState:!1}){const n=be(new URL(t,_e(document)));if(n){const r=we(n,null,e.noscroll);return fe[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),r}return location.href=t,new Promise((()=>{}))}const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pe,Ne,Re,Ie=!1,Le=[],Oe="{}";const Ce={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:St(null),session:St(Ae&&Ae.session)};let He,Ue,je;function Me(t,e){const{error:n}=t;return Object.assign({error:n},e)}function De(t){return le(this,void 0,void 0,(function*(){Pe&&Ce.preloading.set(!0);const e=function(t){return Se&&Se.href===t.href?Se.promise:qe(t)}(t),n=Ne={},r=yield e,{redirect:s}=r;if(n===Ne)if(s)yield Te(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Ge(n,e,Me(e,t.page))}}))}function Ge(t,e,n){return le(this,void 0,void 0,(function*(){Ce.page.set(n),Ce.preloading.set(!1),Pe?Pe.$set(e):(e.stores={page:{subscribe:Ce.page.subscribe},preloading:{subscribe:Ce.preloading.subscribe},session:Ce.session},e.level0={props:yield Re},e.notify=Ce.page.notify,Pe=new re({target:je,props:e,hydrate:!0})),Le=t,Oe=JSON.stringify(n.query),Ie=!0,Ue=!1}))}function qe(t){return le(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Re){const t=()=>({});Re=Ae.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},He)}let a,l=1;try{const s=JSON.stringify(n.query),c=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>le(this,void 0,void 0,(function*(){const d=r[a];if(function(t,e,n,r){if(r!==Oe)return!0;const s=Le[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,d,c,s)&&(u=!0),o.segments[l]=r[a+1],!e)return{segment:d};const f=l++;let h;if(Ue||u||!Le[a]||Le[a].part!==e.i){u=!1;const{default:r,preload:s}=yield oe[e.i].js();let o;o=Ie||!Ae.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},He):{}:Ae.preloaded[a+1],h={component:r,props:o,segment:d,match:c,part:e.i}}else h=Le[a];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Be,ze,Ve;Ce.session.subscribe((t=>le(void 0,void 0,void 0,(function*(){if(He=t,!Ie)return;Ue=!0;const e=be(new URL(location.href)),n=Ne={},{redirect:r,props:s,branch:o}=yield qe(e);n===Ne&&(r?yield Te(r.location,{replaceState:!0}):yield Ge(o,s,Me(s,e.page)))})))),Be={target:document.querySelector("#sapper")},ze=Be.target,je=ze,Ve=Ae.baseUrl,pe=Ve,me=De,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{fe.scrollRestoration="auto"})),addEventListener("load",(()=>{fe.scrollRestoration="manual"})),addEventListener("click",ve),addEventListener("popstate",$e),addEventListener("touchstart",xe),addEventListener("mousemove",ke),Ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Ae;Re||(Re=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Re},level1:{props:{status:o,error:i},component:Xt},segments:s},l=ge(n);Ge([],a,{host:t,path:e,query:l,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;fe.replaceState({id:de},"",e);const n=be(new URL(location.href));if(n)return we(n,de,!0,t)}));export{yt as A,k as B,s as C,Q as D,M as E,l as F,d as G,V as H,z as I,Ht as J,_ as K,C as L,Te as M,G as N,T as O,e as P,P as Q,pt as R,_t as S,F as T,Y as U,u as V,mt as W,rt as X,B as Y,N as a,H as b,O as c,y as d,w as e,A as f,v as g,g as h,wt as i,S as j,U as k,ut as l,ht as m,t as n,dt as o,ft as p,J as q,kt as r,i as s,E as t,D as u,x as v,$ as w,gt as x,bt as y,vt as z};

import __inject_styles from './inject_styles.803b7e80.js';