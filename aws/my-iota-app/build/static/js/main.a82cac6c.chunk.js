(this["webpackJsonpmy-iota-app"]=this["webpackJsonpmy-iota-app"]||[]).push([[0],{34:function(t,e,n){t.exports=n(72)},39:function(t,e,n){},68:function(t,e){},71:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n.n(o),a=n(27),c=n.n(a),r=(n(39),n(28)),i=n(29),p=n(32),l=n(30),u=n(5),h=n(33),d=n(31),g=n.n(d),m=(n(71),function(t){function e(){var t;Object(r.a)(this,e),t=Object(p.a)(this,Object(l.a)(e).call(this));var n=window.location.hostname.split(".");return t.socket=g()(1===n.length?"http://localhost:3001":"https://my-iota-api-aws.".concat(n[1],".").concat(n[2])),t.socket.on("connect",(function(){t.setState({progress:t.state.progress+"\nConnected"})})),t.socket.on("message",(function(e){t.setState({progress:t.state.progress+"\nReceived ".concat(e)})})),t.socket.on("disconnect",(function(){t.setState({progress:t.state.progress+"\nDisconnected"})})),t.state={progress:""},t.sendEvent=t.sendEvent.bind(Object(u.a)(t)),t}return Object(h.a)(e,t),Object(i.a)(e,[{key:"sendEvent",value:function(){this.setState({progress:this.state.progress+"\nSending ping"}),this.socket.send("ping")}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Example App"),s.a.createElement("button",{onClick:function(){return t.sendEvent()}},"Send"),s.a.createElement("pre",null,this.state.progress))}}]),e}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.a82cac6c.chunk.js.map