(self.webpackChunkgatsby_starter_blog_theme=self.webpackChunkgatsby_starter_blog_theme||[]).push([[678],{6892:function(e,t,a){function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}var r=a(7294),n=a(5697),c=[];function s(e){var t=e.alertCount,a=e.alertFillColor,i=e.alertTextColor,r=e.callback,n=e.renderOverlay,c=e.url,s=e.canvasSize,o=document.createElement("img");o.crossOrigin="Anonymous",o.onload=function(){var e=document.createElement("canvas");e.width=s,e.height=s;var c=e.getContext("2d");c.clearRect(0,0,o.width,o.height),c.drawImage(o,0,0,e.width,e.height),t&&function(e,t){var a=t.fillColor,i=t.text,r=t.textColor,n=t.canvasSize,c=n/5;e.font="bold "+(n-2*c)+"px arial";var s=Math.min(e.measureText(i).width,n-c)+c,o=n-s,l=n/2-c,d=c+n/2,b=Math.min(s/2,d/2);e.beginPath(),e.moveTo(o+b,l),e.arcTo(o+s,l,o+s,l+d,b),e.arcTo(o+s,l+d,o,l+d,b),e.arcTo(o,l+d,o,l,b),e.arcTo(o,l,o+s,l,b),e.closePath(),e.fillStyle=a,e.fill(),e.fillStyle=r,e.textBaseline="bottom",e.textAlign="right",e.fillText(i,n-c/2,n,n-c)}(c,{fillColor:a,textColor:i,text:t,canvasSize:s}),n&&n(e,c),r(c.canvas.toDataURL())},o.src=c}var o=function(e){var t,a;function r(){for(var t,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).state={animationIndex:0,animationLoop:null,animationRunning:!1},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,i(t,a),r.getActiveInstance=function(){return r.mountedInstances[r.mountedInstances.length-1]},r.draw=function(){if("undefined"!=typeof document){var e,t=r.getActiveInstance();if(0===c.length){var a=document.getElementsByTagName("head")[0],i=document.createElement("link");i.type="image/x-icon",i.rel="icon";var n=document.createElement("link");n.rel="apple-touch-icon",c.push(i,n);for(var o=a.getElementsByTagName("link"),l=o.length;--l>=0;)/\bicon\b/i.test(o[l].getAttribute("rel"))&&!t.props.keepIconLink(o[l])&&a.removeChild(o[l]);c.forEach((function(e){return a.appendChild(e)}))}e=t.props.url instanceof Array?t.props.url[t.state.animationIndex]:t.props.url,t.props.alertCount||t.props.renderOverlay?s({alertCount:t.props.alertCount,alertFillColor:t.props.alertFillColor,alertTextColor:t.props.alertTextColor,callback:function(e){c.forEach((function(t){return t.href=e}))},renderOverlay:t.props.renderOverlay,url:e,canvasSize:t.props.iconSize}):c.forEach((function(t){return t.href=e}))}},r.update=function(){if("undefined"!=typeof document){var e=r.getActiveInstance(),t=e.props.url instanceof Array&&e.props.animated,a=null;if(clearInterval(e.state.animationLoop),t){var i=function(){var t=(e.state.animationIndex+1)%e.props.url.length;r.draw(),e.setState({animationIndex:t})};a=setInterval(i,e.props.animationDelay),i()}else r.draw();e.setState({animationLoop:a})}};var n=r.prototype;return n.componentDidMount=function(){r.mountedInstances.push(this),r.update()},n.componentWillUnmount=function(){var e=r.getActiveInstance();clearInterval(e.state.animationLoop)},n.componentDidUpdate=function(e){e.url===this.props.url&&e.animated===this.props.animated&&e.alertCount===this.props.alertCount&&e.alertFillColor===this.props.alertFillColor&&e.alertTextColor===this.props.alertTextColor&&e.renderOverlay===this.props.renderOverlay&&e.keepIconLink===this.props.keepIconLink&&e.iconSize===this.props.iconSize||r.update()},n.render=function(){return null},r}(r.Component);o.displayName="Favicon",o.mountedInstances=[],o.defaultProps={iconSize:16,alertCount:null,alertFillColor:"red",alertTextColor:"white",animated:!0,animationDelay:500,keepIconLink:function(){return!1},renderOverlay:null,url:null},o.propTypes={iconSize:n.number,alertCount:n.oneOfType([n.number,n.string]),alertFillColor:n.string,alertTextColor:n.string,animated:n.bool,animationDelay:n.number,keepIconLink:n.func,renderOverlay:n.func,url:n.oneOfType([n.arrayOf(n.string),n.string]).isRequired},e.exports=o},9726:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var i=a(5741),r=(a(7294),a(3431));function n(){return(0,r.tZ)(i.Z,{socialLinks:[{name:"instagram",url:"https://www.instagram.com/wanjingchen_/"},{name:"github",url:"https://github.com/CWJWANJING"}]})}},5741:function(e,t,a){"use strict";var i=a(7294),r=a(2877),n=a(3431);t.Z=function(e){var t=e.socialLinks;return(0,n.tZ)("div",{style:{textAlign:"center",padding:"1% 0%"}},"@Wanjing Chen"," ","•"," ",t?t.map((function(e,t,a){return(0,n.tZ)(i.Fragment,{key:e.url},(0,n.tZ)(r.Ge.a,{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name),a.length-1!==t&&(0,n.tZ)(i.Fragment,null," ","•"," "))})):null)}},4248:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var i=a(7294),r=a(8110),n=a(1008),c=a(3723),s=a(3431);var o=(0,n.Z)("p",{target:"e19p04ni0"})({name:"1u143vz",styles:"margin:4% 2%;font-size:1.4rem;text-align:center"}),l={name:"ejdyez",styles:"border-radius:50%;margin-left:42.25%;margin-right:42.25%;width:15%"};var d=function(){return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(c.S,{src:"../images/avatar.png",alt:"my photo",placeholder:"blurred",css:l,layout:"constrained",__imageData:a(2831)}),(0,s.tZ)(o,null,"Hi! My name is Wanjing. I'm a software developer who draws and writes. Nice to meet you! 😊"))},b=function(){return(0,s.tZ)("div",{className:"container"},(0,s.tZ)("h2",{className:"text-center"},"Projects"),(0,s.tZ)("div",{style:{textAlign:"right",paddingBottom:"2%"}},(0,s.tZ)("a",{className:"text-right",href:"/projects"},"More projects")),(0,s.tZ)("div",{className:"row"},(0,s.tZ)("div",{className:"col-lg-4 card"},(0,s.tZ)(c.S,{className:"card-img-top",src:"../images/homeProjects/projectNameGnerator.png",alt:"Card image cap",__imageData:a(1620)}),(0,s.tZ)("div",{className:"card-body d-flex"},(0,s.tZ)("h5",{className:"card-title"},"Project Name Generator"),(0,s.tZ)("p",{className:"card-text"},"This project is about creating a single webpage using React and OpenAI that generates a bunch of project names based on given keywords input."),(0,s.tZ)("a",{href:"https://github.com/CWJWANJING/project-name-generator",className:"btn btn-primary stretched-link mt-auto"},"Github Page"))),(0,s.tZ)("div",{className:"col-lg-4 card"},(0,s.tZ)(c.S,{className:"card-img-top",src:"../images/homeProjects/Mukulele.jpg",alt:"Card image cap",__imageData:a(6990)}),(0,s.tZ)("div",{className:"card-body d-flex"},(0,s.tZ)("h5",{className:"card-title"},"Mukulele"),(0,s.tZ)("p",{className:"card-text"},"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."),(0,s.tZ)("a",{href:"https://github.com/CWJWANJING/Mukulele",className:"btn btn-primary stretched-link mt-auto"},"Github Page"))),(0,s.tZ)("div",{className:"col-lg-4 card"},(0,s.tZ)(c.S,{className:"card-img-top",src:"../images/homeProjects/aboveTheAshesPicture.jpg",alt:"Card image cap",__imageData:a(6277)}),(0,s.tZ)("div",{className:"card-body d-flex"},(0,s.tZ)("h5",{className:"card-title"},"Above The Ashes"),(0,s.tZ)("p",{className:"card-text"},"Above The Ashes is a Unity 3D adventure shooting game. In a group of 3, I worked on one of the game level, some interactive elements of the game and implementation & design of menu."),(0,s.tZ)("a",{href:"https://github.com/CWJWANJING/Above-The-Ashes",className:"btn btn-primary stretched-link mt-auto"},"Github Page")))))},p=function(){return(0,s.tZ)("div",{className:"container"},(0,s.tZ)("h2",{className:"text-center"},"Blogs"),(0,s.tZ)("div",{style:{textAlign:"right",paddingBottom:"2%"}},(0,s.tZ)("a",{className:"text-right",href:"/blog"},"More blogs")),(0,s.tZ)("div",{className:"row"},(0,s.tZ)("div",{className:"col-lg-4 card"},(0,s.tZ)(c.S,{className:"card-img-top",src:"../images/homeBlogs/CNY.jpeg",alt:"Card image cap",__imageData:a(6785)}),(0,s.tZ)("div",{className:"card-body d-flex"},(0,s.tZ)("h5",{className:"card-title"},"How my family celebrates Chinese New Year"),(0,s.tZ)("p",{className:"card-text"},"Chinese New Year 2023 fell on Sunday 22 January, festivities will continue for around 16 days, and end with the Lantern Festival on 5 February. This time marks the transition between two zodiac signs, 2022 was the Year of the Tiger, and 2023 is the Year of the Rabbit. As a Chinese person, I’d like to share with you how my family usually celebrates Chinese New Year."),(0,s.tZ)("a",{href:"/blog/cny/",className:"btn btn-primary stretched-link mt-auto"},"Read"))),(0,s.tZ)("div",{className:"col-lg-4 card"},(0,s.tZ)(c.S,{className:"card-img-top",src:"../images/homeBlogs/HEL-PVGplane.jpeg",alt:"Helsinki plane screen",__imageData:a(5452)}),(0,s.tZ)("div",{className:"card-body d-flex"},(0,s.tZ)("h5",{className:"card-title"},"How I travelled from the UK to China during the pandemic"),(0,s.tZ)("p",{className:"card-text"},"Entering China during the pandemic is really hard. I will be sharing with you how I travelled from the UK to China during the pandemic as a Chinese citizen."),(0,s.tZ)("a",{href:"/blog/enterChinaduringCOVID/",className:"btn btn-primary stretched-link mt-auto"},"Read"))),(0,s.tZ)("div",{className:"col-lg-4 card"},(0,s.tZ)(c.S,{className:"card-img-top",src:"../images/homeBlogs/riegostreet.jpg",alt:"Riego Street Poster",__imageData:a(3966)}),(0,s.tZ)("div",{className:"card-body d-flex"},(0,s.tZ)("h5",{className:"card-title"},"An international student in Edinburgh - Part 2"),(0,s.tZ)("p",{className:"card-text"},"I didn’t get my first choice of accommodation at the University of Edinburgh, I ended up in Riego Street, but I had a good experience. Let me tell you more about it!"),(0,s.tZ)("a",{href:"/blog/Riego-street/",className:"btn btn-primary stretched-link mt-auto"},"Read")))))},m=function(){return(0,s.tZ)("div",{className:"container"},(0,s.tZ)("h2",{className:"text-center"},"Artwork"),(0,s.tZ)("div",{style:{textAlign:"right",paddingBottom:"2%"}},(0,s.tZ)("a",{className:"text-right",href:"/art"},"More artwork")),(0,s.tZ)("div",{className:"row"},(0,s.tZ)("div",{className:"col-lg-4 card"},(0,s.tZ)(c.S,{className:"card-img-top",src:"../images/homeArt/waterstonecafe1.jpeg",alt:"Card image cap",__imageData:a(8167)}),(0,s.tZ)("div",{className:"card-body"},(0,s.tZ)("h5",{className:"card-title"},"Waterstone Cafe"))),(0,s.tZ)("div",{className:"col-lg-4 card"},(0,s.tZ)(c.S,{className:"card-img-top",src:"../images/homeArt/jealouskitty.jpeg",alt:"Card image cap",__imageData:a(838)}),(0,s.tZ)("div",{className:"card-body"},(0,s.tZ)("h5",{className:"card-title"},"Jealous Kitty"))),(0,s.tZ)("div",{className:"col-lg-4 card"},(0,s.tZ)(c.S,{className:"card-img-top",src:"../images/homeArt/六本木.jpg",alt:"Card image cap",__imageData:a(5482)}),(0,s.tZ)("div",{className:"card-body"},(0,s.tZ)("h5",{className:"card-title"},"Roppongi (Japan)")))))},f=a(9726),u=a(6892),g=a.n(u);function h(){return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(g(),{url:"src/images/favicon.ico"}),(0,s.tZ)(r.Z,null),(0,s.tZ)("h1",{className:"pageTitle",style:{textAlign:"center"}},"Wanjing Chen"),(0,s.tZ)(d,null),(0,s.tZ)(p,null),(0,s.tZ)(b,null),(0,s.tZ)(m,null),(0,s.tZ)(f.Z,null))}},2831:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEz0lEQVQ4ywHEBDv7AMC/q/Py7KaqpVRZSl1pXLzGxfT5+rjLwnWAdT9ASkFFWG57icnb3LLJy8TW19jr7JihnX+VYoKffZWvlgDV1cne3tWip5lWYUR5hXnv8vb///+wt7Y1MUM7NklRSlpIQ1l5gJDM3t/M3uG509GOmI93immeuq6wxsEA0NLHyMa3mZ+HYmhQhJB+4evt2+LmZ2N0Tj9OYk5YoYuTlYGKODRDtcbLzd7h7fj7oqamf5B/s8zE1+TmAPXz8v///7+8uWBaVZyZjf///8TFzVdHWqqOl41xdIJkaY1wdTksN6KqpsPUq9njzomNeICNd8/f2c7c1QCvtJn3+PHKx8lTSkiXj4D8++67uL5hTl63l6G3lZu8naGSdHZUPUWCiXjB152tvZZ7fmWQk3awvZ+ot5cAW2c9mpmEl5mLTk5KX2RUmqKFcmdiVUNPgGFmb05SiWhsupKWYktRb3Rqx9y0pbiAgH1pgotjmqp6jJ1fAE5WT1heWVBYSkhQRkhVSF1bTUM3PUU3PJV3eptwdYNaW29TWiEZI32Eb8DNtaO6i3BwUWd0QXCQQYCZRgA8Sj8+S0M/S0RFT0RNVUlTRD8qJC8kHiZvUFKOam95Xl8rIyhbWF24w7Kywbl4kHlzcWN3fVx1mnFvk24ALTkxLzgxPEY+SFBKT0dGQTdHLio4KyUtakxHf1lRZUdAUFFtoKvVq7nPnrSibYhzQUVJaGtahaSOZ4d3ACs5MyIrIlRkcJSt2HR3lHiLwkhNbk1CR6mOireUi7mZmZObxoie1Z2x4LLEyaSvm3J5emRgT2RjSWhrTAAaIxwqNzaJpdWTtfB7hamJnsxSYYo5LznEtLzZvr/Cs8KVpNWZptJ9kMeZqdq7ub+vrK2xrKmmnpSXkYMAGyseVGx8mLfshqPbb3ujdIStboe9ODpci5S9rLTWlaTTm67foa7ahpbKeYvDp62+p6SgqKioq6mqsa+wABolHneQt5a26oml3ldjj1RjjoCe3oCX0Yqh2Yuj2oqf1Jqr3KCy4p+x3XmJv4mZyp2hqZSSkJeWlpeYmAA4Qk+PrOKIpNmAmtVQYZI2QnNmgMaNptqjteChtOKasOCBksh8jMGcrdxwgLdmeLaOncmQjo6SkJCWlZUAdIyqnr3xiaTZeJLQWGykMD1qhKDZnrzst8DY1tLfr7nekabZdYS6YmuhWmabXm+ujaHYl5qii4mHj46NAJe15JOv44Cb1pq46J266JCs25e05JCt4o6gxqOTk9nFyq6x0Yib0IaZ0G98q0FFampskImHlYiFhI2NjACHo9yFo9qPr+KZteSVteSZt+iVs+SRrOF6jbslIjV6ZWvPvMZ7hLOLjbCInc04Q3JkcaiCkcSLjJOGh4MAg6DZiqvgiqrhj7DnjazjepPGZnyvfZTPbYG0HiRCPiw5l36FXkNFbkQ8bmZ+IzFZXG2nkq3pnae9hoOAAH2c1nGPzWmDuVVqlztJbxkfNgsNHjxHckBNdSUtTUc+VXhaWm5RS2NCPE5GXiUyWFlyrnWOyXuPxnSMsQBZcapLX5MrNVQlLkwSFyIPExwSFB5JRDVOTVMoNV0mL1BiTEtpVFZLQEwqRHsiPnYdKU+IpNuNos0uUpKlEX+3/O6ZnwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/1487f259822deeaa43b91a4303c520fe/961b2/avatar.jpg","srcSet":"/static/1487f259822deeaa43b91a4303c520fe/c6bb4/avatar.jpg 596w,\\n/static/1487f259822deeaa43b91a4303c520fe/70c5e/avatar.jpg 1193w,\\n/static/1487f259822deeaa43b91a4303c520fe/961b2/avatar.jpg 2385w","sizes":"(min-width: 2385px) 2385px, 100vw"},"sources":[{"srcSet":"/static/1487f259822deeaa43b91a4303c520fe/8428f/avatar.webp 596w,\\n/static/1487f259822deeaa43b91a4303c520fe/9a8c3/avatar.webp 1193w,\\n/static/1487f259822deeaa43b91a4303c520fe/e72fc/avatar.webp 2385w","type":"image/webp","sizes":"(min-width: 2385px) 2385px, 100vw"}]},"width":2385,"height":2388}')},3966:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383848","images":{"fallback":{"src":"/static/bbdcf721057b6feb5a4f7b3d2da28ebd/12ad6/riegostreet.jpg","srcSet":"/static/bbdcf721057b6feb5a4f7b3d2da28ebd/f06ac/riegostreet.jpg 240w,\\n/static/bbdcf721057b6feb5a4f7b3d2da28ebd/feecf/riegostreet.jpg 480w,\\n/static/bbdcf721057b6feb5a4f7b3d2da28ebd/12ad6/riegostreet.jpg 960w","sizes":"(min-width: 960px) 960px, 100vw"},"sources":[{"srcSet":"/static/bbdcf721057b6feb5a4f7b3d2da28ebd/51317/riegostreet.webp 240w,\\n/static/bbdcf721057b6feb5a4f7b3d2da28ebd/ae76d/riegostreet.webp 480w,\\n/static/bbdcf721057b6feb5a4f7b3d2da28ebd/1319e/riegostreet.webp 960w","type":"image/webp","sizes":"(min-width: 960px) 960px, 100vw"}]},"width":960,"height":1062}')},6277:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/da8a63ab5f1916a974b0698f50f8af90/62844/aboveTheAshesPicture.png","srcSet":"/static/da8a63ab5f1916a974b0698f50f8af90/27741/aboveTheAshesPicture.png 340w,\\n/static/da8a63ab5f1916a974b0698f50f8af90/57074/aboveTheAshesPicture.png 680w,\\n/static/da8a63ab5f1916a974b0698f50f8af90/62844/aboveTheAshesPicture.png 1359w","sizes":"(min-width: 1359px) 1359px, 100vw"},"sources":[{"srcSet":"/static/da8a63ab5f1916a974b0698f50f8af90/d79a2/aboveTheAshesPicture.webp 340w,\\n/static/da8a63ab5f1916a974b0698f50f8af90/142f5/aboveTheAshesPicture.webp 680w,\\n/static/da8a63ab5f1916a974b0698f50f8af90/cc5b4/aboveTheAshesPicture.webp 1359w","type":"image/webp","sizes":"(min-width: 1359px) 1359px, 100vw"}]},"width":1359,"height":750}')},6990:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#886858","images":{"fallback":{"src":"/static/e4416c5661dd0c3ad29fe22cd7a6f763/0a736/Mukulele.png","srcSet":"/static/e4416c5661dd0c3ad29fe22cd7a6f763/75836/Mukulele.png 305w,\\n/static/e4416c5661dd0c3ad29fe22cd7a6f763/ed375/Mukulele.png 609w,\\n/static/e4416c5661dd0c3ad29fe22cd7a6f763/0a736/Mukulele.png 1218w","sizes":"(min-width: 1218px) 1218px, 100vw"},"sources":[{"srcSet":"/static/e4416c5661dd0c3ad29fe22cd7a6f763/d9511/Mukulele.webp 305w,\\n/static/e4416c5661dd0c3ad29fe22cd7a6f763/8c18a/Mukulele.webp 609w,\\n/static/e4416c5661dd0c3ad29fe22cd7a6f763/a2778/Mukulele.webp 1218w","type":"image/webp","sizes":"(min-width: 1218px) 1218px, 100vw"}]},"width":1218,"height":750}')},5452:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080818","images":{"fallback":{"src":"/static/26424172f3b2f22c65b4241a0e28d93c/2b365/HEL-PVGplane.jpg","srcSet":"/static/26424172f3b2f22c65b4241a0e28d93c/8f9ea/HEL-PVGplane.jpg 175w,\\n/static/26424172f3b2f22c65b4241a0e28d93c/3f5de/HEL-PVGplane.jpg 350w,\\n/static/26424172f3b2f22c65b4241a0e28d93c/2b365/HEL-PVGplane.jpg 700w","sizes":"(min-width: 700px) 700px, 100vw"},"sources":[{"srcSet":"/static/26424172f3b2f22c65b4241a0e28d93c/307e4/HEL-PVGplane.webp 175w,\\n/static/26424172f3b2f22c65b4241a0e28d93c/26a00/HEL-PVGplane.webp 350w,\\n/static/26424172f3b2f22c65b4241a0e28d93c/f23f0/HEL-PVGplane.webp 700w","type":"image/webp","sizes":"(min-width: 700px) 700px, 100vw"}]},"width":700,"height":394}')},6785:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#580808","images":{"fallback":{"src":"/static/1b7dbb260259f8a7050a56958462de7a/57b2a/CNY.jpg","srcSet":"/static/1b7dbb260259f8a7050a56958462de7a/394a8/CNY.jpg 640w,\\n/static/1b7dbb260259f8a7050a56958462de7a/b2ce3/CNY.jpg 1280w,\\n/static/1b7dbb260259f8a7050a56958462de7a/57b2a/CNY.jpg 2560w","sizes":"(min-width: 2560px) 2560px, 100vw"},"sources":[{"srcSet":"/static/1b7dbb260259f8a7050a56958462de7a/359e0/CNY.webp 640w,\\n/static/1b7dbb260259f8a7050a56958462de7a/dccd3/CNY.webp 1280w,\\n/static/1b7dbb260259f8a7050a56958462de7a/31e4c/CNY.webp 2560w","type":"image/webp","sizes":"(min-width: 2560px) 2560px, 100vw"}]},"width":2560,"height":1600}')},5482:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484848","images":{"fallback":{"src":"/static/84d9f2309b6a21a1f2732ea3998bf2e6/36f52/%E5%85%AD%E6%9C%AC%E6%9C%A8.png","srcSet":"/static/84d9f2309b6a21a1f2732ea3998bf2e6/cfaea/%E5%85%AD%E6%9C%AC%E6%9C%A8.png 327w,\\n/static/84d9f2309b6a21a1f2732ea3998bf2e6/f80d6/%E5%85%AD%E6%9C%AC%E6%9C%A8.png 653w,\\n/static/84d9f2309b6a21a1f2732ea3998bf2e6/36f52/%E5%85%AD%E6%9C%AC%E6%9C%A8.png 1306w","sizes":"(min-width: 1306px) 1306px, 100vw"},"sources":[{"srcSet":"/static/84d9f2309b6a21a1f2732ea3998bf2e6/82264/%E5%85%AD%E6%9C%AC%E6%9C%A8.webp 327w,\\n/static/84d9f2309b6a21a1f2732ea3998bf2e6/9714c/%E5%85%AD%E6%9C%AC%E6%9C%A8.webp 653w,\\n/static/84d9f2309b6a21a1f2732ea3998bf2e6/c621c/%E5%85%AD%E6%9C%AC%E6%9C%A8.webp 1306w","type":"image/webp","sizes":"(min-width: 1306px) 1306px, 100vw"}]},"width":1306,"height":909}')},838:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8d8d8","images":{"fallback":{"src":"/static/3314a8b63d1ebc18e9839762e5bbbdce/44e9e/jealouskitty.jpg","srcSet":"/static/3314a8b63d1ebc18e9839762e5bbbdce/6bb61/jealouskitty.jpg 516w,\\n/static/3314a8b63d1ebc18e9839762e5bbbdce/624d0/jealouskitty.jpg 1033w,\\n/static/3314a8b63d1ebc18e9839762e5bbbdce/44e9e/jealouskitty.jpg 2065w","sizes":"(min-width: 2065px) 2065px, 100vw"},"sources":[{"srcSet":"/static/3314a8b63d1ebc18e9839762e5bbbdce/59b2b/jealouskitty.webp 516w,\\n/static/3314a8b63d1ebc18e9839762e5bbbdce/c7a2d/jealouskitty.webp 1033w,\\n/static/3314a8b63d1ebc18e9839762e5bbbdce/fd6ab/jealouskitty.webp 2065w","type":"image/webp","sizes":"(min-width: 2065px) 2065px, 100vw"}]},"width":2065,"height":2065}')},8167:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/c85f2a7bedcb2d50f94078ea90f44707/537d6/waterstonecafe1.png","srcSet":"/static/c85f2a7bedcb2d50f94078ea90f44707/cb49a/waterstonecafe1.png 200w,\\n/static/c85f2a7bedcb2d50f94078ea90f44707/1950a/waterstonecafe1.png 400w,\\n/static/c85f2a7bedcb2d50f94078ea90f44707/537d6/waterstonecafe1.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/c85f2a7bedcb2d50f94078ea90f44707/923ce/waterstonecafe1.webp 200w,\\n/static/c85f2a7bedcb2d50f94078ea90f44707/33402/waterstonecafe1.webp 400w,\\n/static/c85f2a7bedcb2d50f94078ea90f44707/41401/waterstonecafe1.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":640}')},1620:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/3c316d0570549792b51b1612cbb346bc/e870f/projectNameGnerator.png","srcSet":"/static/3c316d0570549792b51b1612cbb346bc/6c59a/projectNameGnerator.png 273w,\\n/static/3c316d0570549792b51b1612cbb346bc/75d9c/projectNameGnerator.png 545w,\\n/static/3c316d0570549792b51b1612cbb346bc/e870f/projectNameGnerator.png 1090w","sizes":"(min-width: 1090px) 1090px, 100vw"},"sources":[{"srcSet":"/static/3c316d0570549792b51b1612cbb346bc/d64bc/projectNameGnerator.webp 273w,\\n/static/3c316d0570549792b51b1612cbb346bc/4345c/projectNameGnerator.webp 545w,\\n/static/3c316d0570549792b51b1612cbb346bc/f68d5/projectNameGnerator.webp 1090w","type":"image/webp","sizes":"(min-width: 1090px) 1090px, 100vw"}]},"width":1090,"height":424}')}}]);
//# sourceMappingURL=component---src-pages-index-js-f6192a44e4956bd2d8c6.js.map