(this["webpackJsonpustraa-ui"]=this["webpackJsonpustraa-ui"]||[]).push([[0],{41:function(e,t,a){e.exports=a(53)},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=a(18),l=a.n(i),s=a(17),u="https://backend.ustraa.com/rest/V1/api",d=a(14),g=a(80),m=a(87),p=a(86),f=a(2),h=a(83),b=a(89),v=a(81),y=a(4),E=a(82),w=a(54),x=a(37),S=a.n(x),_=a(84),k=Object(y.a)((function(e){return{root:{color:e.palette.getContrastText("#73da4d"),backgroundColor:"#73da4d"}}}))(w.a),j=Object(g.a)((function(e){return{card:{display:"flex"},margins:{paddingBottom:10},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cardMedia:{height:120,maxWidth:120},button:{display:"block",marginTop:5,color:"white",borderRadius:0},rating:{color:"#9e9e9e",position:"inherit",right:0,top:5},starIcon:{fontSize:14},price:{textDecoration:"line-through",paddingTop:7,paddingLeft:5}}}));function O(e){var t=j(),a=e.data,n=a.name,o=a.image_urls,c=a.weight,i=a.weight_unit,l=a.price,s=a.final_price,u=a.rating,d=a.is_in_stock;Object(f.a)(a,["name","image_urls","weight","weight_unit","price","final_price","rating","is_in_stock"]);return r.a.createElement(b.a,{className:t.card},r.a.createElement(v.a,{className:t.cardMedia,component:"img",alt:"Image not Available",height:"140",image:o.x120}),r.a.createElement("div",{className:t.details},r.a.createElement(E.a,{className:t.content},r.a.createElement(h.a,{variant:"subtitle1",component:"h2"},n),r.a.createElement(h.a,{variant:"subtitle2",color:"textSecondary"},u||0,r.a.createElement(S.a,{className:t.starIcon})),r.a.createElement(h.a,{variant:"caption",color:"textSecondary"},c?"(".concat(c," ").concat(i,")"):""),r.a.createElement(_.a,{container:!0},r.a.createElement(h.a,{inline:"true",variant:"h6"},"\u20b9 ".concat(s)),r.a.createElement(h.a,{inline:"true",className:t.price,variant:"subtitle2",color:"textSecondary"},"\u20b9 ".concat(l))),r.a.createElement(k,{className:t.button,variant:"contained",color:"primary",disabled:!d,disableElevation:!0},d?"ADD TO CART":"OUT OF STOCK"))))}var C=a(85),N=a(88),T=Object(g.a)((function(e){return{button:{textTransform:"none"},root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex",height:300,width:150}}}));function R(e){var t=T(),a=r.a.useState({anchorEl:null,open:!1,value:0}),n=Object(s.a)(a,2),o=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"text"},r.a.createElement(w.a,{onClick:function(e){var t=o.anchorEl?null:e.currentTarget;c(Object(d.a)({},o,{anchorEl:t,open:!0}))},className:t.button},"Showing for ".concat(e.changeString,"       change")),r.a.createElement(N.a,{open:o.open,anchorEl:o.anchorEl},r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{orientation:"vertical",variant:"scrollable",onChange:function(t,a){e.changeCategory(t,a),c(Object(d.a)({},o,{open:!1,value:a}))},value:o.value},e.category?e.category.map((function(e){return r.a.createElement(p.a,{key:e.category_id,id:e.category_id,label:e.category_name})})):""))),r.a.createElement(w.a,{onClick:function(){e.changeView()},className:t.button},e.viewString)))}var I=Object(g.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper},tabs:{borderRadius:10},tabsRoot:{margin:"0",borderBottom:"1px solid #e8e8e8"},tabsIndicator:{backgroundColor:"#fff",visibility:"hidden"},tabRoot:{color:"#fff",textTransform:"initial",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:4*e.spacing.unit,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{color:"#eee",opacity:1},"&$tabSelected":{color:"#fff"},"&:focus":{color:"#fff"}}}})),L=function(e){return console.log(e),r.a.createElement("div",Object.assign({style:{backgroundImage:"url(".concat(e.img,")"),backgroundSize:"cover",borderRadius:"4px",width:"160px",height:"65px",marginLeft:"5px",textTransform:"uppercase",padding:"0 15px",color:"white"}},e),e.title)};function V(e){var t=I(),a=r.a.useState({data:{},value:0,isLess:!0,viewString:"[+] View More",selectString:""}),n=Object(s.a)(a,2),o=n[0],c=n[1];function i(e,t){var a,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.currentTarget.id,n=e.target.innerText,r.next=4,l.a.awrap(fetch("".concat(u,"/catalog/v1.0.1?category_id=").concat(a)));case 4:r.sent.json().then((function(e){c(Object(d.a)({},o,{data:e,value:t,isLess:!0,viewString:"[+] View More",selectString:n}))}));case 6:case"end":return r.stop()}}))}r.a.useEffect((function(){Object.entries(e.data).length>0&&c(Object(d.a)({},o,{data:e.data.product_list,selectString:e.data.category_list[0].category_name}))}),[Object.entries(e.data).length]);return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{value:o.value,onChange:i,variant:"scrollable",scrollButtons:"auto",className:"tabs__root",classes:{root:t.tabsRoot,indicator:t.tabsIndicator}},e.data.category_list?e.data.category_list.map((function(e){return r.a.createElement(p.a,{className:t.tabs,key:e.category_id,id:e.category_id,component:L,img:e.category_image,title:e.category_name,label:e.category_name,classes:{root:t.tabRoot,selected:t.tabSelected}})})):""),o.data.products?o.isLess?o.data.products.slice(0,3).map((function(e){return r.a.createElement(O,{data:e,key:e.id})})):o.data.products.map((function(e){return r.a.createElement(O,{data:e,key:e.id})})):"",r.a.createElement(R,{changeString:o.selectString,viewString:o.viewString,changeView:function(){var e=!o.isLess,t=o.isLess?"[-] View Less":"[+] View More";c(Object(d.a)({},o,{isLess:e,viewString:t}))},changeCategory:function(e,t){i(e,t)},category:e.data.category_list}))}var B=function(){var e=r.a.useState({}),t=Object(s.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.awrap(fetch("".concat(u,"/homemenucategories/v1.0.1?device_type=mob")));case 2:e.sent.json().then((function(e){n(e)}));case 4:case"end":return e.stop()}}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{data:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.16b4e12c.chunk.js.map