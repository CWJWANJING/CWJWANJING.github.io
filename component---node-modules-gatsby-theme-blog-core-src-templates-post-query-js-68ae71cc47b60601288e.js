(self.webpackChunkgatsby_starter_blog_theme=self.webpackChunkgatsby_starter_blog_theme||[]).push([[177],{4099:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return S}});var n=r(4942),o=r(7294),a=r(3723),i=r(1955),l=r(5414),u=r(1082),c=r(3431);function s(t){var e=t.description,r=t.lang,n=t.meta,o=t.title,a=t.imageSource,i=t.imageAlt,s=(0,u.K2)("764694655").site,p=e||s.siteMetadata.description,f=a?""+s.siteMetadata.siteUrl+a:null,d=i||p;return(0,c.tZ)(l.q,{htmlAttributes:{lang:r},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:o},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:p}].concat(a?[{name:"og:image",content:f},{name:"og:image:alt",content:d},{name:"twitter:image",content:f},{name:"twitter:image:alt",content:d},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(n)})}s.defaultProps={lang:"en",meta:[]};var p=s,f=r(9418),d=r(2877),m=function(t){return(0,c.tZ)(d.Ge.h1,t)},x=r(7462),g=r(977),y=function(t){return(0,g.tZ)(d.Ge.p,(0,x.Z)({sx:{fontSize:1,mt:-3,mb:3}},t))},b=r(7825),v=r(9983),O=r(5561),Z=function(t){var e=t.previous,r=t.next;return(0,c.tZ)("footer",{css:(0,b.iv)({mt:4,pt:3})},(0,c.tZ)(d.Ge.hr,null),(0,c.tZ)(O.Z,null),(e||r)&&(0,c.tZ)(v.kC,{as:"ul",css:(0,b.iv)({flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0})},(0,c.tZ)("li",null,e&&(0,c.tZ)(d.Ge.a,{as:u.rU,to:e.slug,rel:"prev"},"← ",e.title)),(0,c.tZ)("li",null,r&&(0,c.tZ)(d.Ge.a,{as:u.rU,to:r.slug,rel:"next"},r.title," →"))))},_=function(t){var e=t.text,r=t.url;return(0,c.tZ)(o.Fragment,null,e&&(0,c.tZ)(v.kC,null,r?(0,c.tZ)(d.Ge.a,{css:(0,b.iv)({margin:"auto",fontStyle:"italic"}),href:r,target:"_blank"},e):(0,c.tZ)(d.Ge.i,{css:(0,b.iv)({margin:"auto"})},e)))},h=function(t){var e,r=t.post;return(0,c.tZ)(o.Fragment,null,(null==r||null===(e=r.image)||void 0===e?void 0:e.childImageSharp)&&(0,c.tZ)(o.Fragment,null,(0,c.tZ)(a.G,{image:(0,a.c)(r.image),alt:r.imageAlt?r.imageAlt:r.excerpt}),(0,c.tZ)(_,{text:r.imageCaptionText,url:r.imageCaptionLink})))},j=r(8110),w=function(t){var e=t.data,r=e.post,n=e.site.siteMetadata.title,l=t.location,u=t.previous,s=t.next;return(0,c.tZ)(o.Fragment,null,(0,c.tZ)(j.Z,null),(0,c.tZ)(f.Z,{location:l,title:n},(0,c.tZ)(p,{title:r.title,description:r.excerpt,imageSource:r.socialImage?(0,a.d)(r.socialImage):(0,a.d)(r.image),imageAlt:r.imageAlt}),(0,c.tZ)("main",null,(0,c.tZ)("article",null,(0,c.tZ)("header",null,(0,c.tZ)(h,{post:r}),(0,c.tZ)(m,null,r.title),(0,c.tZ)(y,null,r.date)),(0,c.tZ)("section",null,(0,c.tZ)(i.MDXRenderer,null,r.body)))),(0,c.tZ)(Z,{previous:u,next:s})))};function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var S=function(t){var e=t.location,r=t.data,n=r.blogPost,o=r.previous,a=r.next;return(0,c.tZ)(w,{data:P(P({},r),{},{post:n}),location:e,previous:o,next:a})}},1955:function(t,e,r){var n=r(7927);t.exports={MDXRenderer:n}},7927:function(t,e,r){var n=r(861),o=r(3515),a=r(8416),i=r(7071),l=["scope","children"];function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=r(7294),p=r(4983).mdx,f=r(2174).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,a=i(t,l),u=f(e),d=s.useMemo((function(){if(!r)return null;var t=c({React:s,mdx:p},u),e=Object.keys(t),a=e.map((function(e){return t[e]}));return o(Function,["_fn"].concat(e,[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,e]);return s.createElement(d,c({},a))}},3897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},3405:function(t,e,r){var n=r(3897);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3515:function(t,e,r){var n=r(6015),o=r(9617);function a(e,r,i){return o()?(t.exports=a=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=a=function(t,e,r){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return r&&n(a,r.prototype),a},t.exports.__esModule=!0,t.exports.default=t.exports),a.apply(null,arguments)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},8416:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},9617:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},9498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},2281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},7071:function(t){t.exports=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,r){var n=r(3405),o=r(9498),a=r(6116),i=r(2281);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},6116:function(t,e,r){var n=r(3897);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-blog-core-src-templates-post-query-js-68ae71cc47b60601288e.js.map