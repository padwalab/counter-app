(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(8),s=n.n(c),o=(n(14),n(9)),u=n(2),i=n(3),l=n(5),b=n(4),j=(n(15),n(0)),d=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("span",{className:this.getBadgeClasses(),children:this.formatCount()}),Object(j.jsx)("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm",children:"Increment"}),Object(j.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2",children:"Delete"})]})}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(r.Component),h=(n(7),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.counters,r=e.onDelete,a=e.onIncrement;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:t,className:"btn btn-primary btn-sm m-2",children:"Reset"}),n.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{onDelete:r,onIncrement:a,counter:e},e.id),Object(j.jsx)("br",{})]})}))]})}}]),n}(r.Component)),p=function(e){var t=e.totalCounters;return Object(j.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(j.jsxs)("a",{className:"navbar-brand",children:["Navbar",Object(j.jsx)("span",{className:"badge badge-pill badge-secondary m-2",children:t})]})})},m=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleIncrement=function(t){var n=Object(o.a)(e.state.counters);n[e.state.counters.indexOf(t)].value++,e.setState({counters:n})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(p,{totalCounters:this.state.counters.filter((function(e){return 0!==e.value})).length},"nav"),Object(j.jsx)("main",{className:"container",children:Object(j.jsx)(h,{counters:this.state.counters,onIncrement:this.handleIncrement,onDelete:this.handleDelete,onReset:this.handleReset})},"main")]})}}]),n}(r.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.815f8f68.chunk.js.map