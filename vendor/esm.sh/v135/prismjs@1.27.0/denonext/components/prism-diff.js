/* esm.sh - esbuild bundle(prismjs@1.27.0/components/prism-diff) denonext production */
var p=Object.create;var s=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var _=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),h=(r,e)=>{for(var t in e)s(r,t,{get:e[t],enumerable:!0})},n=(r,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let d of g(e))!E.call(r,d)&&d!==t&&s(r,d,{get:()=>e[d],enumerable:!(a=c(e,d))||a.enumerable});return r},i=(r,e,t)=>(n(r,e,"default"),t&&n(t,e,"default")),l=(r,e,t)=>(t=r!=null?p(x(r)):{},n(e||!r||!r.__esModule?s(t,"default",{value:r,enumerable:!0}):t,r));var o=_(()=>{(function(r){r.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var e={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(e).forEach(function(t){var a=e[t],d=[];/^\w+$/.test(t)||d.push(/\w+/.exec(t)[0]),t==="diff"&&d.push("bold"),r.languages.diff[t]={pattern:RegExp("^(?:["+a+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:d,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(t)[0]}}}}),Object.defineProperty(r.languages.diff,"PREFIXES",{value:e})})(Prism)});var f={};h(f,{default:()=>b});var w=l(o());i(f,l(o()));var{default:u,...S}=w,b=u!==void 0?u:S;export{b as default};
//# sourceMappingURL=prism-diff.js.map